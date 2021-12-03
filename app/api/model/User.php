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

use think\facade\Cache;
use yiovo\captcha\facade\CaptchaApi;
use app\api\service\User as UserService;
use app\common\model\User as UserModel;
use cores\exception\BaseException;

/**
 * 用户模型类
 * Class User
 * @package app\api\model
 */
class User extends UserModel
{
    /**
     * 隐藏字段
     * @var array
     */
    protected $hidden = [
        'open_id',
        'is_delete',
        'store_id',
        'create_time',
        'update_time'
    ];

    /**
     * 获取器：隐藏手机号中间四位
     * @param string $value
     * @return string
     */
    public function getMobileAttr(string $value): string
    {
        return strlen($value) === 11 ? hide_mobile($value) : $value;
    }

    /**
     * 获取用户信息
     * @param string $token
     * @return bool|static
     */
    public static function getUserByToken(string $token)
    {
        if (Cache::has($token)) {
            // 获取微信用户openid
            $userId = Cache::get($token)['user']['user_id'];
            // 获取用户信息s
            return self::detail($userId);
        }
        return false;
    }

    /**
     * 绑定手机号(当前登录用户)
     * @param array $data
     * @return bool
     * @throws BaseException
     */
    public function bindMobile(array $data): bool
    {
        // 当前登录的用户信息
        $userInfo = UserService::getCurrentLoginUser(true);
        // 验证绑定的手机号
        $this->checkBindMobile($data);
        // 更新手机号记录
        return $userInfo->save(['mobile' => $data['mobile']]);
    }

    /**
     * 验证绑定的手机号
     * @param array $data
     * @return void
     * @throws BaseException
     */
    private function checkBindMobile(array $data): void
    {
        // 验证短信验证码是否匹配
        if (!CaptchaApi::checkSms($data['smsCode'], $data['mobile'])) {
            throwError('短信验证码不正确');
        }
        // 判断手机号是否已存在
        if (static::checkExistByMobile($data['mobile'])) {
            throwError('很抱歉，该手机号已绑定其他账户');
        }
    }
}
