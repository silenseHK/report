(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["menu"],{"0787":function(e,t,r){"use strict";r("41a4")},"378f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("content-header",{attrs:{title:"API权限"}}),r("a-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{message:e.warningText,type:"warning","show-icon":""}}),r("div",{staticClass:"table-operator"},[r("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")])],1),r("a-table",{attrs:{rowKey:"api_id",columns:e.columns,"data-source":e.list,loading:e.isLoading,pagination:!1},scopedSlots:e._u([{key:"action",fn:function(t,a){return r("span",{},[[r("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(t){return e.handleDelete(a)}}},[e._v("删除")])]],2)}}])}),r("add-form",{ref:"AddForm",attrs:{apiList:e.list},on:{handleSubmit:e.handleRefresh}}),r("edit-form",{ref:"EditForm",attrs:{apiList:e.list},on:{handleSubmit:e.handleRefresh}})],1)},n=[],i=(r("d3b7"),r("db8a")),o=r("2af9"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:"新增权限",width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{label:"权限名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),r("a-form-item",{attrs:{label:"上级权限",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"默认为顶级权限"}},[r("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parent_id"],expression:"['parent_id']"}],attrs:{"tree-data":e.apiListTreeData,"dropdown-style":{maxHeight:"400px",overflow:"auto"},"allow-clear":""}})],1),r("a-form-item",{attrs:{label:"权限url",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"例如：index/index"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"请输入权限url"}]}],expression:"['url', {rules: [{required: true, message: '请输入权限url'}]}]"}]})],1),r("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入至少1个数字"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入至少1个数字'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},l=[],u=(r("159b"),r("b0c0"),{props:{apiList:{type:Array,required:!0}},data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),apiListTreeData:[]}},methods:{show:function(){this.visible=!0,this.getAccessList(),this.setFieldsValue()},setFieldsValue:function(){var e=this;this.$nextTick((function(){e.form.resetFields(),e.form.setFieldsValue({parent_id:0})}))},getAccessList:function(){var e=this.apiList,t=this.formatTreeData(e);t.unshift({title:"顶级权限",key:0,value:0}),this.apiListTreeData=t},formatTreeData:function(e){var t=this,r=[];return e.forEach((function(e){var a={title:e.name,key:e.api_id,value:e.api_id};e.children&&e.children.length&&(a["children"]=t.formatTreeData(e["children"])),r.push(a)})),r},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,r){t?e.confirmLoading=!1:e.onFormSubmit(r)}))},handleCancel:function(){this.visible=!1},onFormSubmit:function(e){var t=this;i["a"]({form:e}).then((function(r){t.$message.success(r.message),t.visible=!1,t.form.resetFields(),t.$emit("handleSubmit",e)})).finally((function(e){t.confirmLoading=!1}))}}}),c=u,d=r("2877"),m=Object(d["a"])(c,s,l,!1,null,null,null),f=m.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:"编辑权限",width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{label:"权限名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),r("a-form-item",{attrs:{label:"上级权限",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"默认为顶级权限"}},[r("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parent_id"],expression:"['parent_id']"}],attrs:{"tree-data":e.apiListTreeData,"dropdown-style":{maxHeight:"400px",overflow:"auto"},"allow-clear":""}})],1),r("a-form-item",{attrs:{label:"权限url",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"例如：index/index"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"请输入权限url"}]}],expression:"['url', {rules: [{required: true, message: '请输入权限url'}]}]"}]})],1),r("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入至少1个数字"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入至少1个数字'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},p=[],b=(r("caad"),r("2532"),r("88bc")),v=r.n(b),g={props:{apiList:{type:Array,required:!0}},data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),apiListTreeData:[],record:{}}},methods:{show:function(e){this.visible=!0,this.record=e,this.getAccessList(),this.setFieldsValue()},setFieldsValue:function(){var e=this;this.$nextTick((function(){e.form.setFieldsValue(v()(e.record,["name","url","parent_id","sort"]))}))},getAccessList:function(){var e=this.apiList,t=this.formatTreeData(e);t.unshift({title:"顶级权限",key:0,value:0}),this.apiListTreeData=t},formatTreeData:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=[];return e.forEach((function(e){var n={title:e.name,key:e.api_id,value:e.api_id};([e.api_id,e.parent_id].includes(t.record.api_id)||!0===r)&&(n.disabled=!0),null!=e.children&&(n["children"]=t.formatTreeData(e["children"],n.disabled)),a.push(n)})),a},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,r){t?e.confirmLoading=!1:e.onFormSubmit(r)}))},handleCancel:function(){this.visible=!1},onFormSubmit:function(e){var t=this;i["c"]({apiId:this.record["api_id"],form:e}).then((function(r){t.$message.success(r.message),t.visible=!1,t.form.resetFields(),t.$emit("handleSubmit",e)})).finally((function(e){t.confirmLoading=!1}))}}},w=g,C=Object(d["a"])(w,h,p,!1,null,null,null),L=C.exports,x={components:{ContentHeader:o["a"],STable:o["d"],AddForm:f,EditForm:L},data:function(){return{warningText:"此处用于管理商户后台的菜单数据，请勿对本页面数据进行更改（会导致系统无法更新升级）",isLoading:!1,columns:[{title:"权限ID",dataIndex:"api_id",scopedSlots:{customRender:"api_id"}},{title:"权限名称",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"权限url",dataIndex:"url",scopedSlots:{customRender:"url"}},{title:"排序",dataIndex:"sort",scopedSlots:{customRender:"sort"}},{title:"添加时间",dataIndex:"create_time",scopedSlots:{customRender:"create_time"}},{title:"操作",dataIndex:"action",width:"150px",scopedSlots:{customRender:"action"}}],list:[]}},created:function(){this.getListData()},methods:{getListData:function(){var e=this;this.isLoading=!0,i["d"]().then((function(t){e.list=t.data.list})).finally((function(){e.isLoading=!1}))},handleAdd:function(){this.$refs.AddForm.show()},handleEdit:function(e){this.$refs.EditForm.show(e)},handleDelete:function(e){var t=this;t.$confirm({title:"您确定要删除该记录吗?",content:"确认后将无法恢复",onOk:function(){return t.onSubmitDelete(e)}})},onSubmitDelete:function(e){var t=this;return i["b"]({apiId:e["api_id"]}).then((function(e){t.$message.success(e.message),t.handleRefresh()}))},handleRefresh:function(){this.getListData()}}},y=x,_=Object(d["a"])(y,a,n,!1,null,null,null);t["default"]=_.exports},"41a4":function(e,t,r){},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,n="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")();function d(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function m(e,t){var r=-1,a=e?e.length:0,n=Array(a);while(++r<a)n[r]=t(e[r],r,e);return n}function f(e,t){var r=-1,a=t.length,n=e.length;while(++r<a)e[n+r]=t[r];return e}var h=Object.prototype,p=h.hasOwnProperty,b=h.toString,v=c.Symbol,g=h.propertyIsEnumerable,w=v?v.isConcatSpreadable:void 0,C=Math.max;function L(e,t,r,a,n){var i=-1,o=e.length;r||(r=F),n||(n=[]);while(++i<o){var s=e[i];t>0&&r(s)?t>1?L(s,t-1,r,a,n):f(n,s):a||(n[n.length]=s)}return n}function x(e,t){return e=Object(e),y(e,t,(function(t,r){return r in e}))}function y(e,t,r){var a=-1,n=t.length,i={};while(++a<n){var o=t[a],s=e[o];r(s,o)&&(i[o]=s)}return i}function _(e,t){return t=C(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,n=C(r.length-t,0),i=Array(n);while(++a<n)i[a]=r[t+a];a=-1;var o=Array(t+1);while(++a<t)o[a]=r[a];return o[t]=i,d(e,this,o)}}function F(e){return A(e)||S(e)||!!(w&&e&&e[w])}function k(e){if("string"==typeof e||O(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function S(e){return T(e)&&p.call(e,"callee")&&(!g.call(e,"callee")||b.call(e)==n)}var A=Array.isArray;function D(e){return null!=e&&j(e.length)&&!$(e)}function T(e){return I(e)&&D(e)}function $(e){var t=q(e)?b.call(e):"";return t==i||t==o}function j(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function q(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function I(e){return!!e&&"object"==typeof e}function O(e){return"symbol"==typeof e||I(e)&&b.call(e)==s}var E=_((function(e,t){return null==e?{}:x(e,m(L(t,1),k))}));e.exports=E}).call(this,r("c8ba"))},db8a:function(e,t,r){"use strict";r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return l}));var a=r("f6ae"),n=r("b775");function i(e){return Object(n["b"])({url:a["a"].store.api.list,method:"get",params:e})}function o(e){return Object(n["b"])({url:a["a"].store.api.add,method:"post",data:e})}function s(e){return Object(n["b"])({url:a["a"].store.api.edit,method:"post",data:e})}function l(e){return Object(n["b"])({url:a["a"].store.api.delete,method:"post",data:e})}},f833:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("content-header",{attrs:{title:"菜单列表"}}),r("a-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{message:e.warningText,type:"warning","show-icon":""}}),r("div",{staticClass:"table-operator"},[r("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")])],1),r("a-table",{attrs:{rowKey:"menu_id",columns:e.columns,"data-source":e.list,loading:e.isLoading,pagination:!1},scopedSlots:e._u([{key:"actions",fn:function(t,a){return r("span",{},e._l(a.actions,(function(t,a){return r("a-dropdown",{key:a,attrs:{title:"操作"}},[r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",{on:{click:function(r){return e.handleActionEdit(t)}}},[e._v("编辑")]),r("a-menu-item",{on:{click:function(r){return e.handleSetApi(t)}}},[e._v("API权限")]),r("a-menu-item",{on:{click:function(r){return e.handleDelete(t)}}},[e._v("删除")])],1),r("a-tag",[e._v(e._s(t.name))])],1)})),1)}},{key:"action",fn:function(t,a){return r("span",{},[[r("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-dropdown",[r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",[r("a",{on:{click:function(t){return e.handleSetApi(a)}}},[e._v("API权限")])]),r("a-menu-item",[r("a",{on:{click:function(t){return e.handleActionAdd(a)}}},[e._v("新增操作")])]),r("a-menu-item",[r("a",{on:{click:function(t){return e.handleDelete(a)}}},[e._v("删除")])])],1),r("a",[e._v(" 更多 "),r("a-icon",{attrs:{type:"down"}})],1)],1)]],2)}}])}),r("add-form",{ref:"AddForm",attrs:{menuList:e.list},on:{handleSubmit:e.handleRefresh}}),r("edit-form",{ref:"EditForm",attrs:{menuList:e.list},on:{handleSubmit:e.handleRefresh}}),r("action-form",{ref:"ActionForm",attrs:{menuList:e.list},on:{handleSubmit:e.handleRefresh}}),r("set-api-form",{ref:"SetApiForm",attrs:{apiList:e.apiList},on:{handleSubmit:e.handleRefresh}})],1)},n=[];r("d3b7");function i(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(a,n)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function s(e){i(o,a,n,s,l,"next",e)}function l(e){i(o,a,n,s,l,"throw",e)}s(void 0)}))}}r("96cf"),r("159b"),r("4de4");var s=r("f6ae"),l=r("b775");function u(e){return Object(l["b"])({url:s["a"].store.menu.list,method:"get",params:e})}function c(e){return Object(l["b"])({url:s["a"].store.menu.info,method:"get",params:e})}function d(e){return Object(l["b"])({url:s["a"].store.menu.add,method:"post",data:e})}function m(e){return Object(l["b"])({url:s["a"].store.menu.edit,method:"post",data:e})}function f(e){return Object(l["b"])({url:s["a"].store.menu.setApis,method:"post",data:e})}function h(e){return Object(l["b"])({url:s["a"].store.menu.delete,method:"post",data:e})}var p=r("db8a"),b=r("2af9"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:"新增菜单",width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{label:"菜单名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),r("a-form-item",{attrs:{label:"上级菜单",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"默认为顶级菜单"}},[r("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parent_id"],expression:"['parent_id']"}],attrs:{"tree-data":e.menuListTreeData,"dropdown-style":{maxHeight:"400px",overflow:"auto"},"allow-clear":""}})],1),r("a-form-item",{attrs:{label:"菜单path",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"指向的页面path"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["path",{rules:[{required:!0,message:"请输入菜单path"}]}],expression:"['path', {rules: [{required: true, message: '请输入菜单path'}]}]"}]})],1),r("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入至少1个数字"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入至少1个数字'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},g=[],w=r("5530"),C=(r("b0c0"),{props:{menuList:{type:Array,required:!0}},data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),menuListTreeData:[]}},methods:{show:function(){this.visible=!0,this.getMenuList(),this.setFieldsValue()},setFieldsValue:function(){var e=this;this.$nextTick((function(){e.form.resetFields(),e.form.setFieldsValue({parent_id:0})}))},getMenuList:function(){var e=this.menuList,t=this.formatTreeData(e);t.unshift({title:"顶级菜单",key:0,value:0}),this.menuListTreeData=t},formatTreeData:function(e){var t=this,r=[];return e.forEach((function(e){var a={title:e.name,key:e.menu_id,value:e.menu_id};e.hasOwnProperty("children")&&(a["children"]=t.formatTreeData(e["children"])),r.push(a)})),r},handleSubmit:function(){var e=this,t=this.form.validateFields;t((function(t,r){t||e.onFormSubmit(r)}))},handleCancel:function(){this.visible=!1,this.form.resetFields()},onFormSubmit:function(e){var t=this;this.confirmLoading=!0,d({form:Object(w["a"])({module:10},e)}).then((function(r){t.$message.success(r.message),t.handleCancel(),t.$emit("handleSubmit",e)})).finally((function(e){t.confirmLoading=!1}))}}}),L=C,x=r("2877"),y=Object(x["a"])(L,v,g,!1,null,null,null),_=y.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:"编辑菜单",width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{label:"菜单名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),r("a-form-item",{attrs:{label:"上级菜单",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"默认为顶级菜单"}},[r("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parent_id"],expression:"['parent_id']"}],attrs:{"tree-data":e.menuListTreeData,"dropdown-style":{maxHeight:"400px",overflow:"auto"},"allow-clear":""}})],1),r("a-form-item",{attrs:{label:"菜单path",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"指向的页面path"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["path",{rules:[{required:!0,message:"请输入菜单path"}]}],expression:"['path', {rules: [{required: true, message: '请输入菜单path'}]}]"}]})],1),r("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入至少1个数字"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入至少1个数字'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},k=[],S=(r("caad"),r("2532"),r("88bc")),A=r.n(S),D={props:{menuList:{type:Array,required:!0}},data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),record:{},menuListTreeData:[]}},created:function(){},methods:{show:function(e){var t=this;return o(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.visible=!0,r.next=3,t.getMenuInfo(e);case 3:t.getMenuList(),t.setFieldsValue();case 5:case"end":return r.stop()}}),r)})))()},getMenuInfo:function(e){var t=this;return o(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.confirmLoading=!0,r.next=3,c({menu_id:e.menu_id}).then((function(e){return e.data.info}));case 3:t.record=r.sent,t.confirmLoading=!1;case 5:case"end":return r.stop()}}),r)})))()},setFieldsValue:function(){var e=this;this.$nextTick((function(){e.form.setFieldsValue(A()(e.record,["name","path","parent_id","sort"]))}))},getMenuList:function(){var e=this.menuList,t=this.formatTreeDataForMenuList(e);t.unshift({title:"顶级菜单",key:0,value:0}),this.menuListTreeData=t},formatTreeDataForMenuList:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=[];return e.forEach((function(e){var n={title:e.name,key:e.menu_id,value:e.menu_id};([e.menu_id,e.parent_id].includes(t.record.menu_id)||!0===r)&&(n.disabled=!0),e.children&&e.children.length&&(n["children"]=t.formatTreeDataForMenuList(e["children"],n.disabled)),a.push(n)})),a},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,r){t?e.confirmLoading=!1:e.onFormSubmit(r)}))},handleCancel:function(){this.visible=!1,this.form.resetFields()},onFormSubmit:function(e){var t=this;m({menuId:this.record["menu_id"],form:e}).then((function(r){t.$message.success(r.message),t.handleCancel(),t.$emit("handleSubmit",e)})).finally((function(e){t.confirmLoading=!1}))}}},T=D,$=Object(x["a"])(T,F,k,!1,null,null,null),j=$.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{label:"权限名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),r("a-form-item",{attrs:{label:"权限标识",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["action_mark",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['action_mark', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),r("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入至少1个数字"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入至少1个数字'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},I=[],O={props:{menuList:{type:Array,required:!0}},data:function(){return{scene:"add",title:"新增权限",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),parentId:0,record:{}}},methods:{add:function(e){this.visible=!0,this.scene="add",this.title="新增操作权限",this.parentId=e,this.setFieldsValue()},edit:function(e){this.visible=!0,this.scene="edit",this.title="编辑操作权限",this.record=e,this.setFieldsValue(e)},setFieldsValue:function(e){var t=this;this.$nextTick((function(){t.form.resetFields(),e&&t.form.setFieldsValue(A()(e,["name","action_mark","sort"]))}))},handleSubmit:function(){var e=this,t=this.form.validateFields;t((function(t,r){t?e.confirmLoading=!1:e.onFormSubmit(r)}))},handleCancel:function(){this.visible=!1},onFormSubmit:function(e){var t=this;this.confirmLoading=!0;var r=function(r){t.$message.success(r.message),t.visible=!1,t.form.resetFields(),t.$emit("handleSubmit",e)};"add"===this.scene?(e.parent_id=this.parentId,d({form:Object(w["a"])({module:20},e)}).then((function(e){return r(e)})).finally((function(){t.confirmLoading=!1}))):"edit"===this.scene&&m({menuId:this.record["menu_id"],form:e}).then((function(e){return r(e)})).finally((function(){t.confirmLoading=!1}))}}},E=O,R=Object(x["a"])(E,q,I,!1,null,null,null),V=R.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{staticStyle:{"margin-bottom":"5px"},attrs:{label:(10===e.record.module?"菜单":"操作")+"名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("span",{staticStyle:{"margin-left":"23px",color:"rgba(0, 0, 0, 0.85)"}},[e._v(e._s(e.record.name))])]),r("a-form-item",{attrs:{label:"API权限",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"设置该菜单或操作使用的API权限"}},[r("a-tree",{ref:"ApiTree",attrs:{checkable:"",multiple:"",treeData:e.apiListTreeData,autoExpandParent:!1},model:{value:e.checkedKeys,callback:function(t){e.checkedKeys=t},expression:"checkedKeys"}})],1)],1)],1)],1)},M=[],K=r("2909"),P=(r("99af"),r("2ef0")),H=r.n(P),J={props:{apiList:{type:Array,required:!0}},data:function(){return{title:"设置API权限",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),record:{},apiListTreeData:[],checkedKeys:[]}},methods:{show:function(e){this.visible=!0,this.record=e,this.menuId=e.menu_id,this.getApiList(),this.setApiChecked()},getApiList:function(){var e=this.apiList,t=this.formatTreeDataForApiList(e);this.apiListTreeData=t},setApiChecked:function(){var e=function e(t){var r=[];return t.forEach((function(t){if(t.children&&t.children.length){var a=e(t.children);a.length&&(r=r.concat(a))}else r.push(t.key)})),r},t=this.apiListTreeData,r=this.record,a=e(t);this.checkedKeys=H.a.intersection(r.apiIds,a)},formatTreeDataForApiList:function(e){var t=this,r=[];return e.forEach((function(e){var a={title:e.name,key:e.api_id};e.children&&e.children.length&&(a["children"]=t.formatTreeDataForApiList(e["children"])),r.push(a)})),r},handleSubmit:function(){var e=this.$refs.ApiTree,t={apiIds:[].concat(Object(K["a"])(e.getCheckedKeys()),Object(K["a"])(e.getHalfCheckedKeys()))};this.onFormSubmit(t)},handleCancel:function(){this.visible=!1,this.form.resetFields();var e=this.$refs.ApiTree;e.clearExpandedKeys(),this.checkedKeys=[]},onFormSubmit:function(e){var t=this;this.confirmLoading=!0;var r=function(r){t.$message.success(r.message),t.handleCancel(),t.$emit("handleSubmit",e)};f({menu_id:this.record["menu_id"],form:e}).then((function(e){return r(e)})).finally((function(){t.confirmLoading=!1}))}}},G=J,z=Object(x["a"])(G,N,M,!1,null,null,null),B=z.exports,Q={components:{ContentHeader:b["a"],STable:b["d"],AddForm:_,EditForm:j,ActionForm:V,SetApiForm:B},data:function(){return{warningText:"此处用于管理商户后台的菜单数据，请勿对本页面数据进行更改（会导致系统无法更新升级）",isLoading:!1,columns:[{title:"菜单ID",dataIndex:"menu_id"},{title:"菜单名称",dataIndex:"name"},{title:"path",dataIndex:"path"},{title:"可操作权限",dataIndex:"actions",scopedSlots:{customRender:"actions"}},{title:"排序",dataIndex:"sort"},{title:"操作",dataIndex:"action",width:"250px",scopedSlots:{customRender:"action"}}],list:[],apiList:[]}},created:function(){this.getListData()},methods:{getListData:function(){var e=this;this.isLoading=!0,u().then((function(t){e.list=e.onFormatMenuList(t.data.list)})).finally((function(){e.isLoading=!1}))},onFormatMenuList:function(e){var t=this,r=[];return e.forEach((function(e){10===e.module&&(e.children&&(e.actions=e.children.filter((function(e){return 20===e.module})),e.children=t.onFormatMenuList(e.children),!e.children.length&&delete e.children,!e.actions.length&&delete e.actions),r.push(e))})),r},getApiList:function(){var e=this;return o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.apiList.length){t.next=4;break}return e.isLoading=!0,t.next=4,p["d"]().then((function(t){e.apiList=t.data.list})).finally((function(){e.isLoading=!1}));case 4:case"end":return t.stop()}}),t)})))()},handleAdd:function(){this.$refs.AddForm.show()},handleEdit:function(e){this.$refs.EditForm.show(e)},handleSetApi:function(e){var t=this;return o(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.getApiList();case 2:t.$refs.SetApiForm.show(e);case 3:case"end":return r.stop()}}),r)})))()},handleDelete:function(e){var t=this;t.$confirm({title:"您确定要删除该记录吗?",content:"确认后将无法恢复",onOk:function(){return t.onSubmitDelete(e)}})},onSubmitDelete:function(e){var t=this;return h({menuId:e["menu_id"]}).then((function(e){t.$message.success(e.message),t.handleRefresh()}))},handleRefresh:function(){this.getListData()},handleActionAdd:function(e){this.$refs.ActionForm.add(e.menu_id)},handleActionEdit:function(e){this.$refs.ActionForm.edit(e)}}},U=Q,W=(r("0787"),Object(x["a"])(U,a,n,!1,null,"b7200bca",null));t["default"]=W.exports}}]);