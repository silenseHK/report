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

use Exception;
use think\App;
use think\Validate;
use cores\authorize\Http;
use cores\authorize\Tools;
use cores\authorize\AuthFile;
use app\common\exception\BaseException;
use think\exception\ValidateException;

/**
 * 控制器基础类
 */
abstract class BaseController
{
    /**
     * Request实例
     * @var \think\Request
     */
    protected $request;

    /**
     * 应用实例
     * @var \think\App
     */
    protected $app;

    /**
     * 是否批量验证
     * @var bool
     */
    protected $batchValidate = false;

    /**
     * 控制器中间件
     * @var array
     */
    protected $middleware = [];

    // 当前是否初始化了 [如果为false 那么基类里的方法不允许被调用]
    private $isInitialized = false;

    /**
     * 构造方法
     * BaseController constructor.
     * @param App $app
     * @throws BaseException
     */
    public function __construct(App $app)
    {
        $this->app = $app;
        $this->request = $this->app->request;

        // 控制器初始化
        $this->initialize();

        // 授权验证
        $this->authorize();
    }

    // 初始化
    protected function initialize()
    {
    }

    /**
     * 系统授权验证
     * @throws BaseException
     */
    private final function authorize()
    {
        // 验证auth文件是否合法[3.1%概率]
        Tools::probability(3.1) && $this->___();
        // 验证授权域名是否合法[0.4%概率]
        Tools::probability(0.4) && $this->____();
        // 标记为已初始化
        $this->isInitialized = true;
    }

    /**
     * 验证auth文件是否合法
     * @return bool
     * @throws BaseException
     */
    private final function ___()
    {
        $this->o00oo000o();
        return true;
    }

    /**
     * 验证授权域名是否合法
     * @return mixed|bool
     * @throws BaseException
     */
    private final function ____()
    {
        // 获取当前域名
        $host = $this->o0ooo00oo();
        // 实例化一个http类
        $Http = $this->o0ooo000o();
        // 请求api：根据域名查询是否已授权
        $result = $Http->domain($host);
        $result === false && throwError('很抱歉，检测到域名授权异常，系统将无法正常运行');
        return $result;
    }

    /**
     * 实例化一个http类
     * @return Http
     * @throws BaseException
     */
    private final function o0ooo000o()
    {
        // 获取auth文件中的注册码数据[解密后的]
        $authData = $this->o00oo000o();
        // 实例化一个http类
        $Http = new Http();
        $Http->setAppToken($authData['AppID'], $authData['AppSecret']);
        return $Http;
    }

    /**
     * 获取auth文件中的注册码数据[解密后的]
     * @return array
     * @throws BaseException
     */
    private final function o00oo000o()
    {
        // 获取auth文件中的注册码数据[解密后的]
        $AuthFile = AuthFile::getInstance();
        $auth = $AuthFile->getAuthFile();
        $authData = $AuthFile->getActivationData($auth);
        $this->oo0000oo($auth, $authData);
        return $authData;
    }

    /**
     * 比较授权文件合法性(明文和密文是否吻合)
     * @param array $auth
     * @param array $authData
     * @return bool
     * @throws BaseException
     * @throws \Exception
     */
    private final function oo0000oo(array $auth, array $authData)
    {
        // 验证授权文件签名
        $temp = Tools::pick($auth, ['name', 'contact', 'UserKey', 'AppID', 'expirationTime', 'ActivationCode', 'CoreData']);
        $sign = Tools::myhash(Tools::jsonEncode($temp) . "_{$temp['UserKey']}", 32);
        if ($sign !== $auth['sign']) {
            throwError('很抱歉，检测到授权文件异常，系统将无法正常运行，请检查后端根目录auth文件是否被篡改');
        }
        // 验证授权文件到期时间
        $date = new \DateTime($authData['expirationTime']);
        if (date('Ymd') > $date->format('Ymd')) {
            throwError('很抱歉，检测到授权文件授权时间已过期，系统将无法正常运行');
        }
        return true;
    }

    /**
     * 获取当前域名
     * @return string
     */
    private final function o0ooo00oo()
    {
        $host = strval($_SERVER['HTTP_X_FORWARDED_HOST'] ?? getenv()['HTTP_HOST']);
        if (request()->host() !== $host) {
            return '';
        }
        return request()->host();
    }

    /**
     * 验证当前是否已经初始化过
     * @throws Exception
     */
    private final function checkInitialized()
    {
        if (!$this->isInitialized) {
            throw new Exception('Currently not initialized');
        }
    }

    /**
     * 验证数据
     * @access protected
     * @param array $data 数据
     * @param string|array $validate 验证器名或者验证规则数组
     * @param array $message 提示信息
     * @param bool $batch 是否批量验证
     * @return array|string|true
     * @throws ValidateException
     */
    protected function validate(array $data, $validate, array $message = [], bool $batch = false)
    {
        if (is_array($validate)) {
            $v = new Validate();
            $v->rule($validate);
        } else {
            if (strpos($validate, '.')) {
                // 支持场景
                [$validate, $scene] = explode('.', $validate);
            }
            $class = false !== strpos($validate, '\\') ? $validate : $this->app->parseClass('validate', $validate);
            $v = new $class();
            if (!empty($scene)) {
                $v->scene($scene);
            }
        }

        $v->message($message);

        // 是否批量验证
        if ($batch || $this->batchValidate) {
            $v->batch(true);
        }

        return $v->failException(true)->check($data);
    }

    /**
     * 返回封装后的 API 数据到客户端
     * @param int|null $status
     * @param string $message
     * @param array $data
     * @return \think\response\Json|array
     */
    protected final function renderJson(int $status = null, string $message = '', array $data = [])
    {
        $this->checkInitialized();
        return json(compact('status', 'message', 'data'));
    }

    /**
     * 返回操作成功json
     * @param array|string $data
     * @param string $message
     * @return array
     */
    protected final function renderSuccess($data = [], string $message = 'success')
    {
        if (is_string($data)) {
            $message = $data;
            $data = [];
        }
        return $this->renderJson(config('status.success'), $message, $data);
    }

    /**
     * 返回操作失败json
     * @param string $message
     * @param array $data
     * @return array
     */
    protected final function renderError(string $message = 'error', array $data = [])
    {
        return $this->renderJson(config('status.error'), $message, $data);
    }

    /**
     * 获取post数据 (数组)
     * @param $key
     * @return mixed
     */
    protected final function postData($key = null)
    {
        $this->checkInitialized();
        return $this->request->post(empty($key) ? '' : "{$key}/a");
    }

    /**
     * 获取post数据 (数组)
     * @param $key
     * @return mixed
     */
    protected final function postForm($key = 'form')
    {
        return $this->postData($key);
    }

}
