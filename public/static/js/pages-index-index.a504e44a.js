(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"08ba":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.container[data-v-83c04282]{background:#fff}',""]),t.exports=n},"5db4":function(t,n,e){var a=e("08ba");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("7b27ca94",a,!0,{sourceMap:!1,shadowMode:!1})},6065:function(t,n,e){"use strict";e.r(n);var a=e("cf48"),r=e("8482");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("6dac");var o,s=e("f0c5"),u=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"83c04282",null,!1,a["a"],o);n["default"]=u.exports},"6dac":function(t,n,e){"use strict";var a=e("5db4"),r=e.n(a);r.a},8482:function(t,n,e){"use strict";e.r(n);var a=e("90e7"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},"90e7":function(t,n,e){"use strict";var a=e("4ea4"),r=e("dbce");e("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("c824"),o=r(e("b3ac")),s=a(e("8825")),u=(getApp(),{components:{Page:s.default},data:function(){return{options:{},page:{},items:[]}},onLoad:function(t){this.options=t,this.getPageData()},onShow:function(){(0,i.setCartTabBadge)()},methods:{getPageData:function(t){var n=this,e=n.options.pageId||0;o.detail(e).then((function(t){var e=t.data.pageData;n.page=e.page,n.items=e.items,n.setPageBar()})).finally((function(){return t&&t()}))},setPageBar:function(){var t=this.page;uni.setNavigationBarTitle({title:t.params.title}),uni.setNavigationBarColor({frontColor:"white"===t.style.titleTextColor?"#ffffff":"#000000",backgroundColor:t.style.titleBackgroundColor})}},onPullDownRefresh:function(){this.getPageData((function(){uni.stopPullDownRefresh()}))},onShareAppMessage:function(){var t=this,n=t.page;return{title:n.params.share_title,path:"/pages/index/index?"+t.$getShareUrlParams()}},onShareTimeline:function(){var t=this,n=t.page;return{title:n.params.share_title,path:"/pages/index/index?"+t.$getShareUrlParams()}}});n.default=u},cf48:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("Page",{attrs:{items:t.items}})],1)},i=[]}}]);