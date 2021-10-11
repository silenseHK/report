<?php
// +----------------------------------------------------------------------
// | 萤火商城系统 [ 致力于通过产品和服务，帮助商家高效化开拓市场 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017~2021 https://www.yiovo.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed 这不是一个自由软件，不允许对程序代码以任何形式任何目的的再发行
// +----------------------------------------------------------------------
// | Author: 萤火科技 <admin@yiovo.com>
// +----------------------------------------------------------------------
declare (strict_types=1);

namespace cores;

use think\Model;
use think\db\Query;
use think\Paginator;
use think\model\Collection;
use cores\extension\ModelExt;
use app\common\exception\BaseException;

/**
 * 模型基类
 * Class BaseModel
 * @package app\common\model
 */
abstract class BaseModel extends Model
{
    // 当前访问的商城ID
    public static $storeId;

    // 定义表名
    protected $name;

    // 模型别名
    protected $alias = '';

    // 定义全局的查询范围
    protected $globalScope = ['store_id'];

    // 是否允许全局查询store_id
    protected $isGlobalScopeStoreId = true;

    // 错误信息
    protected $error = '';

    // 模型基类扩展
    /* @var ModelExt $ModelExt */
    private static $ModelExt;

    /**
     * 模型基类初始化
     * @throws BaseException
     */
    public static function init()
    {
        parent::init();
        // 绑定ModelExt
        if (!self::$ModelExt) {
            self::$ModelExt = ModelExt::getInstance();
        }
        // 绑定store_id
        self::getStoreId();
    }

    /**
     * 获取当前操作的商城ID
     * @return int|null
     */
    private static function getStoreId()
    {
        if (empty(self::$storeId) && in_array(app_name(), ['store', 'api'])) {
            self::$storeId = getStoreId();
        }
        return self::$storeId;
    }

    /**
     * 获取当前调用来源的应用名称
     * 例如：admin, api, store
     * @return string|bool
     */
    protected final static function getCalledModule()
    {
        if (preg_match('/app\\\(\w+)/', get_called_class(), $class)) {
            return $class[1];
        }
        return 'common';
    }

    /**
     * 查找单条记录
     * @param mixed $data 查询条件
     * @param array $with 关联查询
     * @return array|static|null
     */
    public static function get($data, $with = [])
    {
        try {
            $query = (new static)->with($with);
            return is_array($data) ? $query->where($data)->find() : $query->find((int)$data);
        } catch (\Exception $e) {
            return null;
        }
    }

    /**
     * 定义全局的查询范围
     * @param Query $query
     * @return bool
     */
    public function scopeStore_id(Query $query)
    {
        if (!$this->isGlobalScopeStoreId) return false;
        $storeId = self::getStoreId();
        $storeId > 0 && $query->where($query->getTable() . '.store_id', $storeId);
        return true;
    }

    /**
     * 设置默认的检索数据
     * @param array $query
     * @param array $default
     * @return array
     */
    public function setQueryDefaultValue(array $query, array $default = [])
    {
        $data = array_merge($default, $query);
        foreach ($query as $field => $value) {
            // 不存在默认值跳出循环
            if (!isset($default[$field])) continue;
            // 如果传参为空, 设置默认值
            if (empty($value) && $value !== '0') {
                $data[$field] = $default[$field];
            }
        }
        return $data;
    }

    /**
     * 设置基础查询条件（用于简化基础alias和field）
     * @param string $alias
     * @param array $join
     * @return static
     */
    public function setBaseQuery($alias = '', $join = [])
    {
        // 设置别名
        $aliasValue = $alias ?: $this->alias;
        $query = $this->alias($aliasValue)->field("{$aliasValue}.*");
        // join条件
        if (!empty($join)) : foreach ($join as $item):
            $query->join($item[0], "{$item[0]}.{$item[1]}={$aliasValue}."
                . (isset($item[2]) ? $item[2] : $item[1]));
        endforeach; endif;
        return $query;
    }

    /**
     * 批量更新多条数据(支持带where条件)
     * @param iterable $dataSet [0 => ['data'=>[], 'where'=>[]]]
     * @return array|false
     */
    public function updateAll(iterable $dataSet)
    {
        if (empty($dataSet)) {
            return false;
        }
        return $this->transaction(function () use ($dataSet) {
            $result = [];
            foreach ($dataSet as $key => $item) {
                $result[$key] = self::updateBase($item['data'], $item['where']);
            }
            return $result;
        });
    }

    /**
     * 批量新增数据
     * @param iterable $dataSet [0 => ['id'=>10001, 'name'=>'wang']]
     * @return array|false
     */
    public function addAll(iterable $dataSet)
    {
        if (empty($dataSet)) {
            return false;
        }
        return $this->transaction(function () use ($dataSet) {
            $result = [];
            foreach ($dataSet as $key => $item) {
                $result[$key] = self::create($item, $this->field);
            }
            return $result;
        });
    }

    /**
     * 删除记录
     * @param array $where
     *  方式1: ['goods_id' => $goodsId]
     *  方式2: [
     *           ['store_user_id', '=', $storeUserId],
     *           ['role_id', 'in', $deleteRoleIds]
     *        ]
     * @return int
     */
    public static function deleteAll(array $where)
    {
        return (new static)->where($where)->delete();
    }

    /**
     * 返回错误信息
     * @return string
     */
    public function getError()
    {
        return empty($this->error) ? false : $this->error;
    }

    /**
     * 字段值增长
     * @param array|int|bool $where
     * @param string $field
     * @param float $step
     * @return mixed
     */
    protected function setInc($where, string $field, float $step = 1)
    {
        if (is_numeric($where)) {
            $where = [$this->getPk() => (int)$where];
        }
        return $this->where($where)->inc($field, $step)->update();
    }

    /**
     * 字段值消减
     * @param array|int|bool $where
     * @param string $field
     * @param float $step
     * @return mixed
     */
    protected function setDec($where, string $field, float $step = 1)
    {
        return $this->where($where)->dec($field, $step)->update();
    }

    /**
     * 实例化新查询对象
     * @return \think\db\BaseQuery
     */
    protected function getNewQuery()
    {
        return $this->db();
    }

    /**
     * 新增hidden属性
     * @param array $hidden
     * @return $this
     */
    protected function addHidden(array $hidden)
    {
        $this->hidden = array_merge($this->hidden, $hidden);
        return $this;
    }

    /**
     * 生成字段列表(字段加上$alias别名)
     * @param string $alias 别名
     * @param array $withoutFields 排除的字段
     * @return array
     */
    protected function getAliasFields(string $alias, $withoutFields = [])
    {
        $fields = array_diff($this->getTableFields(), $withoutFields);
        foreach ($fields as &$field) {
            $field = "$alias.$field";
        }
        return $fields;
    }

    /**
     * 更新数据[单条]
     * @param array|int $where 更新条件默认arra, 也支持传参int, 但必须是主键id
     * @param array $data 更新的数据内容
     * @return bool
     */
    public static function updateOne($where, array $data): bool
    {
        $model = new static;
        return self::$ModelExt->updateOne($model, $where, $data);
    }

    /**
     * 更新数据[批量] 如果只更新单条记录请使用 updateOne方法
     * @param array $data 更新的数据内容
     * @param array $where 更新条件
     * @param array $allowField 允许的字段
     * @return bool
     */
    public static function updateBase(array $data, array $where, array $allowField = []): bool
    {
        $model = new static;
        return self::$ModelExt->updateBase($model, $data, $where, $allowField);
    }

    /**
     * 设置模型的更新条件
     * @access protected
     * @param mixed $where 更新条件
     * @return static
     */
    public function mySetUpdateWhere($where)
    {
        parent::setUpdateWhere($where);
        return $this;
    }

    /**
     * 合并设置项
     * @param array $confusion 系统默认配置
     * @param array $variable 用户自定义
     * @param string $_ 数据来源[后期加载附加数据]
     * @param false $__ 是否只显示value
     * @return array
     */
    protected static function reorganize(array $confusion, array $variable, string $_ = 'cache', $__ = false)
    {
        return self::$ModelExt->reorganize($confusion, $variable, $_, $__);
    }

    /**
     * 仅返回values数据
     * @param array $setting 全部设置
     * @param bool $setKey 是否设置键值
     * @return array
     */
    public final static function getValues(array $setting, bool $setKey = true)
    {
        return self::$ModelExt->getValues($setting, $setKey);
    }

    /**
     * 加载关联数据 [列表数据类型]
     * @param iterable $dataSet 数据集
     * @param array $with 关联方法名 例如: ['user']; 支持嵌套['user.avatar'] ['user' => 'avatar']
     * @param bool $isToArray 是否用数组格式输出
     * @return Collection|Paginator|iterable
     */
    public static final function preload(iterable $dataSet, array $with, bool $isToArray = false)
    {
        return self::$ModelExt->preload($dataSet, $with, $isToArray);
    }

    /**
     * 加载关联数据 [单条数据类型]
     * @param mixed $model
     * @param array $with 关联方法名 例如: ['user']; 不支持嵌套
     * @return Model|static|false
     */
    public static final function related($model, array $with)
    {
        return self::$ModelExt->related($model, $with);
    }

}
