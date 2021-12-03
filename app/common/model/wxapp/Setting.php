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

namespace app\common\model\wxapp;

use think\facade\Cache;
use cores\BaseModel;
use app\common\library\helper;

/**
 * 微信小程序设置模型
 * Class Setting
 * @package app\common\model\wxapp
 */
class Setting extends BaseModel
{
    // 定义表名
    protected $name = 'wxapp_setting';

    protected $createTime = false;

    /**
     * 获取器: 转义数组格式
     * @param $value
     * @return array
     */
    public function getValuesAttr($value): array
    {
        return helper::jsonDecode($value);
    }

    /**
     * 修改器: 转义成json格式
     * @param $value
     * @return string
     */
    public function setValuesAttr($value): string
    {
        return helper::jsonEncode($value);
    }

    /**
     * 获取指定项设置
     * @param string $key
     * @param int|null $storeId
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public static function getItem(string $key, int $storeId = null): array
    {
        $data = static::getAll($storeId);
        return isset($data[$key]) ? $data[$key]['values'] : [];
    }

    /**
     * 获取全部设置
     * @param int|null $storeId
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public static function getAll(int $storeId = null): array
    {
        $model = new static;
        is_null($storeId) && $storeId = $model::$storeId;
        if (!$data = Cache::get("wxapp_setting_{$storeId}")) {
            // 获取全部设置
            $setting = $model->getList($storeId);
            $data = $setting->isEmpty() ? [] : helper::arrayColumn2Key($setting->toArray(), 'key');
            // 写入缓存中
            Cache::tag('cache')->set("wxapp_setting_{$storeId}", $data);
        }
        // 重组setting缓存数据 (多维)
        return static::reorganize($model->defaultData(), $data, $type = 'cache');
    }

    /**
     * 获取商城设置列表
     * @param int $storeId
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    private function getList(int $storeId): \think\Collection
    {
        return $this->where('store_id', '=', $storeId)->select();
    }

    /**
     * 获取设置项信息
     * @param string $key
     * @return array|\think\Model|null
     */
    public static function detail(string $key)
    {
        return static::get(compact('key'));
    }

    /**
     * 默认配置
     * @return array
     */
    public function defaultData(): array
    {
        return [
            'basic' => [
                'key' => 'basic',
                'describe' => '基础设置',
                'values' => [
                    // 小程序AppID
                    'app_id' => '',
                    // 小程序AppSecret
                    'app_secret' => '',
                    // 微信支付商户号ID
                    'mchid' => '',
                    // 微信支付密钥
                    'apikey' => '',
                    // 证书文件cert
                    'cert_pem' => '',
                    // 证书文件key
                    'key_pem' => '',
                ]
            ]
        ];
    }
}