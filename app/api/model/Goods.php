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

namespace app\api\model;

use app\api\service\Goods as GoodsService;
use app\api\service\user\Grade as UserGradeService;
use app\api\model\GoodsSpecRel as GoodsSpecRelModel;
use app\common\model\Goods as GoodsModel;
use app\common\enum\goods\Status as GoodsStatusEnum;
use cores\exception\BaseException;

/**
 * 商品模型
 * Class Goods
 * @package app\api\model
 */
class Goods extends GoodsModel
{
    /**
     * 隐藏字段
     * @var array
     */
    public $hidden = [
        'images',
        'delivery',
        'deduct_stock_type',
        'sales_initial',
        'sales_actual',
        'sort',
        'is_delete',
        'store_id',
        'create_time',
        'update_time'
    ];

    /**
     * 商品详情：HTML实体转换回普通字符
     * @param $value
     * @return string
     */
    public function getContentAttr($value): string
    {
        return htmlspecialchars_decode((string)$value);
    }

    /**
     * 获取商品列表
     * @param array $param 查询条件
     * @param int $listRows 分页数量
     * @return mixed|\think\model\Collection|\think\Paginator
     * @throws \think\db\exception\DbException
     */
    public function getList(array $param = [], int $listRows = 15)
    {
        // 整理查询参数
        $params = array_merge($param, ['status' => GoodsStatusEnum::ON_SALE]);
        // 获取商品列表
        $list = parent::getList($params, $listRows);
        if ($list->isEmpty()) {
            return $list;
        }
        // 隐藏冗余的字段
        $list->hidden(array_merge($this->hidden, ['content', 'goods_images', 'images']));
        // 整理列表数据并返回
        return $this->setGoodsListDataFromApi($list);
    }

    /**
     * 获取商品详情 (详细数据用于页面展示)
     * @param int $goodsId 商品id
     * @return mixed
     * @throws BaseException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getDetails(int $goodsId)
    {
        // 关联查询
        $with = ['images.file', 'skuList.image', 'video', 'videoCover'];
        // 获取商品记录
        $goodsInfo = static::detail($goodsId, $with);
        // 判断商品的状态
        if (empty($goodsInfo) || $goodsInfo['is_delete'] || $goodsInfo['status'] != GoodsStatusEnum::ON_SALE) {
            throwError('很抱歉，商品信息不存在或已下架');
        }
        // 设置商品展示的数据
        $goodsInfo = $this->setGoodsDataFromApi($goodsInfo);
        // 商品规格列表
        $goodsInfo['specList'] = GoodsSpecRelModel::getSpecList($goodsInfo['goods_id']);
        return $goodsInfo;
    }

    /**
     * 根据商品id集获取商品列表
     * @param array $goodsIds
     * @return mixed
     */
    public function getListByIdsFromApi(array $goodsIds)
    {
        // 获取商品列表
        $data = $this->getListByIds($goodsIds, GoodsStatusEnum::ON_SALE);
        // 整理列表数据并返回
        return $this->setGoodsListDataFromApi($data);
    }

    /**
     * 获取商品指定的sku信息并且设置商品的会员价
     * @param $goodsInfo
     * @param string $goodsSkuId
     * @return \app\common\model\GoodsSku|array|null
     * @throws BaseException
     */
    public static function getSkuInfo($goodsInfo, string $goodsSkuId)
    {
        $goodsInfo['skuInfo'] = GoodsService::getSkuInfo($goodsInfo['goods_id'], $goodsSkuId);
        (new static)->setGoodsGradeMoney($goodsInfo);
        return $goodsInfo['skuInfo'];
    }

    /**
     * 设置商品展示的数据 api模块
     * @param $data
     * @return mixed
     */
    private function setGoodsListDataFromApi($data)
    {
        return $this->setGoodsListData($data, function ($goods) {
            // 整理商品数据 api模块
            $this->setGoodsDataFromApi($goods);
        });
    }

    /**
     * 整理商品数据 api模块
     * @param $goodsInfo
     * @return mixed
     */
    private function setGoodsDataFromApi($goodsInfo)
    {
        return $this->setGoodsData($goodsInfo, function ($goods) {
            // 计算并设置商品会员价
            $this->setGoodsGradeMoney($goods);
        });
    }

    /**
     * 设置商品的会员价
     * @param Goods $goods
     * @throws BaseException
     */
    private function setGoodsGradeMoney(self $goods)
    {
        // 设置当前商品是否使用会员等级折扣价
        $goods['is_user_grade'] = false;
        // 获取当前登录用户的会员等级信息
        $gradeInfo = UserGradeService::getCurrentGradeInfo();
        // 判断商品是否参与会员折扣
        if (empty($gradeInfo) || !$goods['is_enable_grade']) {
            return;
        }
        // 默认的折扣比例
        $discountRatio = $gradeInfo['equity']['discount'];
        // 商品单独设置了会员折扣
        if ($goods['is_alone_grade'] && isset($goods['alone_grade_equity'][$gradeInfo['grade_id']])) {
            $discountRatio = $goods['alone_grade_equity'][$gradeInfo['grade_id']];
        }
        if (empty($discountRatio)) {
            return;
        }
        // 标记参与会员折扣
        $goods['is_user_grade'] = true;
        // 会员折扣价: 商品基础价格
        $goods['goods_price_min'] = UserGradeService::getDiscountPrice($goods['goods_price_min'], $discountRatio);
        $goods['goods_price_max'] = UserGradeService::getDiscountPrice($goods['goods_price_max'], $discountRatio);
        // 会员折扣价: 商品sku列表
        if ($goods->getRelation('skuList')) {
            foreach ($goods['skuList'] as &$skuItem) {
                $skuItem['goods_price'] = UserGradeService::getDiscountPrice($skuItem['goods_price'], $discountRatio);
            }
        }
        // 会员折扣价: 已选择的商品sku（用于购物车）
        if ($goods->getAttr('skuInfo')) {
            $goods['skuInfo']['goods_price'] = UserGradeService::getDiscountPrice($goods['skuInfo']['goods_price'], $discountRatio);
        }
    }
}
