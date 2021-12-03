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

namespace app\common\library\express;

use think\facade\Cache;
use cores\traits\ErrorTrait;
use app\common\library\helper;

/**
 * 快递100API模块
 * Class Kuaidi100
 * @package app\common\library\express
 */
class Kuaidi100
{
    use ErrorTrait;

    // 微信支付配置
    /* @var array $config */
    private $config;

    /**
     * 构造方法
     * WxPay constructor.
     * @param $config
     */
    public function __construct($config)
    {
        $this->config = $config;
    }

    /**
     * 执行查询
     * @param string $code
     * @param string $expressNo
     * @return bool
     */
    public function query(string $code, string $expressNo): bool
    {
        // 缓存索引
        $cacheIndex = "express_{$code}_$expressNo";
        if ($cacheData = Cache::get($cacheIndex)) {
            return $cacheData;
        }
        // 参数设置
        $postData = [
            'customer' => $this->config['customer'],
            'param' => helper::jsonEncode([
                'resultv2' => '1',
                'com' => $code,
                'num' => $expressNo
            ])
        ];
        $postData['sign'] = strtoupper(md5($postData['param'] . $this->config['key'] . $postData['customer']));
        // 请求快递100 api
        $url = 'http://poll.kuaidi100.com/poll/query.do';
        $result = curl_post($url, http_build_query($postData));
        $express = helper::jsonDecode($result);
        // 记录错误信息
        if (isset($express['returnCode']) || !isset($express['data'])) {
            $this->error = $express['message'] ?? '查询失败';
            return false;
        }
        // 记录缓存, 时效5分钟
        Cache::set($cacheIndex, $express['data'], 300);
        return $express['data'];
    }
}
