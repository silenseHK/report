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

namespace app\api\controller;

use app\api\service\passport\Login as LoginService;
use app\api\service\passport\Captcha as CaptchaService;
use app\api\service\passport\SmsCaptcha as SmsCaptchaService;

/**
 * 用户认证模块
 * Class Passport
 * @package app\api\controller
 */
class Passport extends Controller
{
    /**
     * 登录接口
     * @return array|\think\response\Json
     * @throws \app\common\exception\BaseException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function login()
    {
        // 执行登录
        $LoginService = new LoginService;
        if (!$LoginService->login($this->postForm())) {
            return $this->renderError($LoginService->getError());
        }
        // 用户信息
        $userInfo = $LoginService->getUserInfo();
        return $this->renderSuccess([
            'userId' => (int)$userInfo['user_id'],
            'token' => $LoginService->getToken((int)$userInfo['user_id'])
        ], '登录成功');
    }

    /**
     * 图形验证码
     * @return array|\think\response\Json
     */
    public function captcha()
    {
        $CaptchaService = new CaptchaService;
        return $this->renderSuccess($CaptchaService->create());
    }

    /**
     * 发送短信验证码
     * @return array|\think\response\Json
     */
    public function sendSmsCaptcha()
    {
        $SmsCaptchaService = new SmsCaptchaService;
        if (!$SmsCaptchaService->sendSmsCaptcha($this->postForm())) {
            return $this->renderError($SmsCaptchaService->getError());
        }
        return $this->renderSuccess('发送成功，请注意查收');
    }
}