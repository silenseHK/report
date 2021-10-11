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

use think\Service;
use think\facade\Log;
use think\facade\Request;

/**
 * 应用服务类
 */
class AppService extends Service
{
    // 服务注册
    public function register()
    {

    }

    // 服务启动
    public function boot()
    {
//        // 记录访问日志
//        if (!is_debug()) {
//            Log::record('[ URL ] ' . print_r(Request::baseUrl(), true), 'begin');
//            Log::record('[ HEADER ] ' . print_r(Request::header(), true), 'begin');
//            Log::record('[ PARAM ] ' . print_r(Request::param(), true), 'begin');
//        }
    }
}
