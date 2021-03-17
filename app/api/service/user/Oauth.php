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
declare (strict_types = 1);

namespace app\api\service\user;

use app\api\model\Wxapp as WxappModel;
use app\common\exception\BaseException;
use app\common\library\wechat\WxUser;
use app\common\service\BaseService;
use app\api\model\UserOauth as UserOauthModel;

/**
 * 服务类: 第三方用户服务类
 * Class Avatar
 * @package app\api\service\user
 */
class Oauth extends BaseService
{
    /**
     * 保存第三方认证信息
     * @param int $userId 用户ID
     * @param array $partyData 第三方登录信息
     * @return bool
     * @throws BaseException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function party(int $userId, array $partyData = [])
    {
        // 是否存在第三方用户
        $model = new UserOauthModel;
        $exist = $model->isExistOauthType($userId, $partyData['oauth']);
        if ($exist) {
            return true;
        }
        // 如果不存在oauth则写入
        return $model->add([
            'user_id' => $userId,
            'oauth_type' => $partyData['oauth'],
            'oauth_id' => $this->getOauthId($partyData),
            'unionid' => $this->geUnionid($partyData),
            'store_id' => $this->storeId
        ]);
    }

    /**
     * 获取微信平台的unionid
     * @param array $partyData 第三方登录信息
     * @return mixed|null
     */
    private function geUnionid(array $partyData)
    {
        // todo: 此处暂未实现, 需解析wx.getUserInfo接口返回的encryptedData加密数据
        // 参考文档1: https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html
        // 参考文档2: https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html
        if ($partyData['oauth'] === 'MP-WEIXIN') {
            return '';
        }
        return null;
    }

    /**
     * 获取第三方用户唯一标识 (openid)
     * @param array $partyData
     * @return mixed|null
     * @throws BaseException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    private function getOauthId(array $partyData)
    {
        if ($partyData['oauth'] === 'MP-WEIXIN') {
            return $this->wxCode2Openid($partyData['code']);
        }
        return null;
    }

    /**
     * 微信小程序code换openid
     * @param string $code
     * @return mixed
     * @throws BaseException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    private function wxCode2Openid(string $code)
    {
        // 获取当前小程序信息
        $wxConfig = WxappModel::getWxappCache();
        // 微信登录 (获取session_key)
        $WxUser = new WxUser($wxConfig['app_id'], $wxConfig['app_secret']);
        $result = $WxUser->jscode2session($code);
        !$result && throwError($WxUser->getError());
        return $result['openid'];
    }

}