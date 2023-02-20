(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["manage"],{"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("d3b7");function a(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(a,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function s(e){a(o,n,i,s,l,"next",e)}function l(e){a(o,n,i,s,l,"throw",e)}s(void 0)}))}}},"759b":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),t("div",{staticClass:"table-operator"},[t("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")])],1),e.isLoading?e._e():t("a-table",{attrs:{rowKey:"role_id",columns:e.columns,dataSource:e.roleList,defaultExpandAllRows:!0,expandIconColumnIndex:1,pagination:!1,loading:e.isLoading},scopedSlots:e._u([{key:"action",fn:function(r,a){return t("span",{},[[t("a",{directives:[{name:"action",rawName:"v-action:edit",arg:"edit"}],staticStyle:{"margin-right":"8px"},on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),t("a",{directives:[{name:"action",rawName:"v-action:delete",arg:"delete"}],on:{click:function(t){return e.handleDelete(a)}}},[e._v("删除")])]],2)}}],null,!1,1478444480)}),t("AddForm",{ref:"AddForm",attrs:{roleList:e.roleList,menuList:e.menuList},on:{handleSubmit:e.handleRefresh}}),t("EditForm",{ref:"EditForm",attrs:{roleList:e.roleList,menuList:e.menuList},on:{handleSubmit:e.handleRefresh}})],1)},n=[],i=r("c7eb"),o=r("1da1"),s=(r("d3b7"),r("782b")),l=r("b775"),c={list:"/store.menu/list"};function u(e){return Object(l["b"])({url:c.list,method:"get",params:e})}var d=r("2af9"),h=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:"新增角色",width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"角色名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["role_name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['role_name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),t("a-form-item",{attrs:{label:"上级角色",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parent_id"],expression:"['parent_id']"}],attrs:{treeData:e.roleListTree,dropdownStyle:{maxHeight:"400px",overflow:"auto"},allowClear:""}})],1),t("a-form-item",{attrs:{label:"菜单权限",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"设置该角色有权操作的功能"}},[t("a-tree",{ref:"MenuTree",attrs:{checkable:"",checkStrictly:"",treeData:e.menuListTreeData,autoExpandParent:!1},on:{check:e.onCheckedMenu},model:{value:e.checkedKeys,callback:function(t){e.checkedKeys=t},expression:"checkedKeys"}})],1),t("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入至少1个数字"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入至少1个数字'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},f=[],m=r("2909"),p=r("5530"),v=(r("99af"),r("159b"),r("b0c0"),r("2ef0")),g=r.n(v),b={props:{roleList:{type:Array,required:!0},menuList:{type:Array,required:!0}},data:function(){return{title:"",labelCol:{span:7},wrapperCol:{span:13},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),roleListTree:[],menuListTreeData:[],checkedKeys:{checked:[],halfChecked:[]}}},methods:{add:function(){this.visible=!0,this.getRoleList(),this.getMenuList()},getMenuList:function(){var e=this.menuList;this.menuListTreeData=this.formatTreeDataForMenuList(e)},onCheckedMenu:function(e,t){var r=t.checked,a=t.node,n=this.menuListTreeData,i=this.findNode(a.eventKey,n);this.onCheckChilds(r,i),this.onCheckParents(r,i)},findNode:function(e,t){for(var r=0;r<t.length;r++){var a=t[r];if(a.key===e)return a;if(a.children){var n=this.findNode(e,a.children);if(n)return n}}return!1},onCheckParents:function(e,t){var r=this,a=this.menuListTreeData,n=function e(t){var n=[],i=r.findNode(t,a);if(!i)return n;if(n.push(i.key),i.children){var o=e(i.parentKey);o.length&&(n=n.concat(o))}return n},i=n(t.parentKey);e&&i.length&&(this.checkedKeys.checked=g.a.union(this.checkedKeys.checked,i))},onCheckChilds:function(e,t){var r=t.children?this.getAllMenuKeys(t.children):[];r.length&&(this.checkedKeys.checked=e?g.a.union(this.checkedKeys.checked,r):g.a.difference(this.checkedKeys.checked,r))},getAllMenuKeys:function(e){var t=this,r=[];return e.forEach((function(e){if(r.push(e.key),e.children&&e.children.length){var a=t.getAllMenuKeys(e.children);a.length&&(r=r.concat(a))}})),r},getRoleList:function(){var e=this.roleList,t=this.formatTreeForRoleList(e);t.unshift({title:"顶级角色",key:0,value:0}),this.roleListTree=t},formatTreeForRoleList:function(e){var t=this,r=[];return e.forEach((function(e){var a={title:e.role_name,key:e.role_id,value:e.role_id};e.children&&e.children.length&&(a["children"]=t.formatTreeForRoleList(e["children"])),r.push(a)})),r},formatTreeDataForMenuList:function(e){var t=this,r=[];return e.forEach((function(e){var a={title:e.name,key:e.menu_id,parentKey:e.parent_id};e.children&&e.children.length&&(a["children"]=t.formatTreeDataForMenuList(e["children"])),r.push(a)})),r},handleSubmit:function(e){var t=this;e.preventDefault();var r=this.form.validateFields;r((function(e,r){e||t.onFormSubmit(Object(p["a"])(Object(p["a"])({},r),{},{menus:t.getCheckedKeys()}))}))},getCheckedKeys:function(){var e=this.$refs.MenuTree;return[].concat(Object(m["a"])(e.getCheckedKeys()),Object(m["a"])(e.getHalfCheckedKeys()))},handleCancel:function(){this.visible=!1,this.form.resetFields();var e=this.$refs.MenuTree;e.clearExpandedKeys(),this.checkedKeys.checked=[]},onFormSubmit:function(e){var t=this;this.confirmLoading=!0,s["a"]({form:e}).then((function(r){t.$message.success(r.message,1.5),t.handleCancel(),t.$emit("handleSubmit",e)})).finally((function(e){t.confirmLoading=!1}))}}},y=b,w=r("2877"),C=Object(w["a"])(y,h,f,!1,null,null,null),L=C.exports,k=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:"编辑角色",width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"角色名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["role_name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['role_name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),t("a-form-item",{attrs:{label:"上级角色",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parent_id"],expression:"['parent_id']"}],attrs:{treeData:e.roleListTree,dropdownStyle:{maxHeight:"400px",overflow:"auto"},allowClear:""}})],1),t("a-form-item",{attrs:{label:"菜单权限",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"设置该角色有权操作的功能"}},[t("a-tree",{ref:"MenuTree",attrs:{checkable:"",checkStrictly:"",treeData:e.menuListTreeData,autoExpandParent:!1},on:{check:e.onCheckedMenu},model:{value:e.checkedKeys,callback:function(t){e.checkedKeys=t},expression:"checkedKeys"}})],1),t("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入至少1个数字"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入至少1个数字'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},_=[],x=(r("caad"),r("2532"),{props:{roleList:{type:Array,required:!0},menuList:{type:Array,required:!0}},data:function(){return{title:"",labelCol:{span:7},wrapperCol:{span:13},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),record:{},roleListTree:[],menuListTreeData:[],checkedKeys:{checked:[],halfChecked:[]}}},methods:{edit:function(e){this.visible=!0,this.record=e,this.getRoleList(),this.getMenuList(),this.setMenuChecked(),this.setFieldsValue()},setFieldsValue:function(){var e=this,t=this.$nextTick,r=this.form.setFieldsValue;t((function(){r(g.a.pick(e.record,["role_name","parent_id","sort"]))}))},getMenuList:function(){var e=this.menuList;this.menuListTreeData=this.formatTreeDataForMenuList(e)},onCheckedMenu:function(e,t){var r=t.checked,a=t.node,n=this.menuListTreeData,i=this.findNode(a.eventKey,n);this.onCheckChilds(r,i),this.onCheckParents(r,i)},findNode:function(e,t){for(var r=0;r<t.length;r++){var a=t[r];if(a.key===e)return a;if(a.children){var n=this.findNode(e,a.children);if(n)return n}}return!1},onCheckParents:function(e,t){var r=this,a=this.menuListTreeData,n=function e(t){var n=[],i=r.findNode(t,a);if(!i)return n;if(n.push(i.key),i.children){var o=e(i.parentKey);o.length&&(n=n.concat(o))}return n},i=n(t.parentKey);e&&i.length&&(this.checkedKeys.checked=g.a.union(this.checkedKeys.checked,i))},onCheckChilds:function(e,t){var r=t.children?this.getAllMenuKeys(t.children):[];r.length&&(this.checkedKeys.checked=e?g.a.union(this.checkedKeys.checked,r):g.a.difference(this.checkedKeys.checked,r))},getAllMenuKeys:function(e){var t=this,r=[];return e.forEach((function(e){if(r.push(e.key),e.children&&e.children.length){var a=t.getAllMenuKeys(e.children);a.length&&(r=r.concat(a))}})),r},setMenuChecked:function(){var e=this.menuListTreeData,t=this.record,r=this.getAllMenuKeys(e);this.checkedKeys.checked=g.a.intersection(t.menuIds,r)},getRoleList:function(){var e=this.roleList,t=this.formatTreeForRoleList(e);t.unshift({title:"顶级角色",key:0,value:0}),this.roleListTree=t},formatTreeForRoleList:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=[];return e.forEach((function(e){var n={title:e.role_name,key:e.role_id,value:e.role_id};([e.role_id,e.parent_id].includes(t.record.role_id)||!0===r)&&(n.disabled=!0),e.children&&e.children.length&&(n["children"]=t.formatTreeForRoleList(e["children"],n.disabled)),a.push(n)})),a},formatTreeDataForMenuList:function(e){var t=this,r=[];return e.forEach((function(e){var a={title:e.name,key:e.menu_id,parentKey:e.parent_id};e.children&&e.children.length&&(a["children"]=t.formatTreeDataForMenuList(e["children"])),r.push(a)})),r},handleSubmit:function(e){var t=this;e.preventDefault();var r=this.form.validateFields;r((function(e,r){e||t.onFormSubmit(Object(p["a"])(Object(p["a"])({},r),{},{menus:t.getCheckedKeys()}))}))},getCheckedKeys:function(){var e=this.$refs.MenuTree;return[].concat(Object(m["a"])(e.getCheckedKeys()),Object(m["a"])(e.getHalfCheckedKeys()))},handleCancel:function(){this.visible=!1,this.form.resetFields();var e=this.$refs.MenuTree;e.clearExpandedKeys(),this.checkedKeys.checked=[]},onFormSubmit:function(e){var t=this;this.confirmLoading=!0,s["c"]({roleId:this.record["role_id"],form:e}).then((function(r){t.$message.success(r.message,1.5),t.handleCancel(),t.$emit("handleSubmit",e)})).finally((function(e){t.confirmLoading=!1}))}}}),F=x,T=Object(w["a"])(F,k,_,!1,null,null,null),S=T.exports,E={name:"Index",components:{STable:d["c"],AddForm:L,EditForm:S},data:function(){return{roleList:[],queryParam:{},isLoading:!0,columns:[{title:"角色ID",dataIndex:"role_id"},{title:"角色名称",dataIndex:"role_name"},{title:"排序",dataIndex:"sort"},{title:"添加时间",dataIndex:"create_time"},{title:"操作",dataIndex:"action",width:"180px",scopedSlots:{customRender:"action"}}],menuList:[]}},created:function(){this.getRoleList()},methods:{getRoleList:function(){var e=this;this.isLoading=!0,s["d"]().then((function(t){e.roleList=t.data.list})).finally((function(t){e.isLoading=!1}))},getMenuList:function(){var e=this;return Object(o["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.menuList.length){t.next=4;break}return e.isLoading=!0,t.next=4,u().then((function(t){e.menuList=t.data.list})).finally((function(){e.isLoading=!1}));case 4:case"end":return t.stop()}}),t)})))()},handleAdd:function(){var e=this;return Object(o["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMenuList();case 2:e.$refs.AddForm.add();case 3:case"end":return t.stop()}}),t)})))()},handleEdit:function(e){var t=this;return Object(o["a"])(Object(i["a"])().mark((function r(){return Object(i["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.getMenuList();case 2:t.$refs.EditForm.edit(e);case 3:case"end":return r.stop()}}),r)})))()},handleDelete:function(e){var t=this,r=this.$confirm({title:"您确定要删除该记录吗?",content:"删除后不可恢复",onOk:function(){return s["b"]({roleId:e["role_id"]}).then((function(e){t.$message.success(e.message,1.5),t.handleRefresh()})).finally((function(e){r.destroy()}))}})},handleRefresh:function(){this.getRoleList()}}},K=E,D=Object(w["a"])(K,a,n,!1,null,null,null);t["default"]=D.exports},"782b":function(e,t,r){"use strict";r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return l}));var a=r("b775"),n={list:"/store.role/list",add:"/store.role/add",edit:"/store.role/edit",delete:"/store.role/delete"};function i(e){return Object(a["b"])({url:n.list,method:"get",params:e})}function o(e){return Object(a["b"])({url:n.add,method:"post",data:e})}function s(e){return Object(a["b"])({url:n.edit,method:"post",data:e})}function l(e){return Object(a["b"])({url:n.delete,method:"post",data:e})}},"9dce":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("content-header",{attrs:{title:"管理员设置"}}),t("a-spin",{attrs:{spinning:e.isLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"姓名",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"管理员姓名"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["real_name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['real_name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),t("a-form-item",{attrs:{label:"用户名",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"后台登录用户名"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["user_name",{rules:[{required:!0,min:4,message:"请输入至少4个字符"}]}],expression:"['user_name', {rules: [{required: true, min: 4, message: '请输入至少4个字符'}]}]"}]})],1),t("a-form-item",{attrs:{label:"用户密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"后台登录密码"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{min:6,message:"请输入至少6个字符"}]}],expression:"['password', {rules: [{min: 6, message: '请输入至少6个字符'}]}]"}],attrs:{type:"password"}})],1),t("a-form-item",{attrs:{label:"确认密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password_confirm",{rules:[{message:"请输入确认密码"},{validator:e.compareToFirstPassword}]}],expression:"['password_confirm', {rules: [\n            {message: '请输入确认密码'},\n            {validator: compareToFirstPassword}\n          ]}]"}],attrs:{type:"password"}})],1),t("a-form-item",{attrs:{wrapperCol:{span:13,offset:6}}},[t("a-button",{attrs:{type:"primary",loading:e.isLoading,disabled:e.isLoading},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)],1)],1)},n=[],i=(r("d3b7"),r("f544")),o=r("2af9"),s=r("2ef0"),l=r.n(s),c={name:"TableList",components:{ContentHeader:o["a"],STable:o["c"]},data:function(){return{labelCol:{span:6},wrapperCol:{span:13},isLoading:!1,form:this.$form.createForm(this)}},mounted:function(){this.getInfo()},methods:{getInfo:function(){var e=this;this.isLoading=!0,i["d"]().then((function(t){var r=t.data.userInfo;e.form.setFieldsValue(l.a.pick(r,"user_name","real_name"))})).finally((function(){e.isLoading=!1}))},compareToFirstPassword:function(e,t,r){var a=this.form,n=a.getFieldValue("password");return!n||t===n||new Error("您输入的确认密码不一致")},handleSubmit:function(e){var t=this;e.preventDefault();var r=this.form.validateFields;r((function(e,r){e||(t.isLoading=!0,t.onFormSubmit(r).finally((function(){t.isLoading=!1})))}))},onFormSubmit:function(e){var t=this;return i["f"]({form:e}).then((function(e){t.$message.success(e.message),setTimeout((function(){window.location.reload()}),800)}))}}},u=c,d=r("2877"),h=Object(d["a"])(u,a,n,!1,null,null,null);t["default"]=h.exports},b484:function(e,t,r){"use strict";r.r(t);r("ac1f"),r("841c");var a=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),t("div",{staticClass:"table-operator"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-button",{directives:[{name:"action",rawName:"v-action:add",arg:"add"}],attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")])],1),t("a-col",{attrs:{span:8,offset:10}},[t("a-input-search",{staticStyle:{"max-width":"300px","min-width":"150px",float:"right"},attrs:{placeholder:"请输入用户名/姓名"},on:{search:e.onSearch},model:{value:e.queryParam.search,callback:function(t){e.$set(e.queryParam,"search",t)},expression:"queryParam.search"}})],1)],1)],1),t("s-table",{ref:"table",attrs:{rowKey:"store_user_id",loading:e.isLoading,columns:e.columns,data:e.loadData,pageSize:15},scopedSlots:e._u([{key:"user_name",fn:function(r,a){return t("div",{},[t("span",{staticStyle:{"margin-right":"6px"}},[e._v(e._s(r))]),a.is_super?t("a-tag",{attrs:{color:"green"}},[e._v("超级管理员")]):e._e()],1)}},{key:"action",fn:function(r,a){return t("div",{staticClass:"actions"},[t("a",{directives:[{name:"action",rawName:"v-action:edit",arg:"edit"}],on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),a.is_super?e._e():[t("a",{directives:[{name:"action",rawName:"v-action:delete",arg:"delete"}],on:{click:function(t){return e.handleDelete(a)}}},[e._v("删除")])]],2)}}])}),t("AddForm",{ref:"AddForm",attrs:{roleList:e.roleList},on:{handleSubmit:e.handleRefresh}}),t("EditForm",{ref:"EditForm",attrs:{roleList:e.roleList},on:{handleSubmit:e.handleRefresh}})],1)},n=[],i=r("5530"),o=(r("d3b7"),r("f544")),s=r("782b"),l=r("2af9"),c=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"管理员姓名",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["real_name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['real_name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),t("a-form-item",{attrs:{label:"用户名",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"后台登录用户名"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["user_name",{rules:[{required:!0,min:4,message:"请输入至少4个字符"}]}],expression:"['user_name', {rules: [{required: true, min: 4, message: '请输入至少4个字符'}]}]"}]})],1),t("a-form-item",{attrs:{label:"所属角色",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"后台管理员角色"}},[t("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["roles",{rules:[{required:!0,message:"请至少选择一个角色"}]}],expression:"['roles', {rules: [{required: true, message: '请至少选择一个角色'}]}]"}],attrs:{treeCheckable:"",treeCheckStrictly:"",treeDefaultExpandAll:"",allowClear:"",treeData:e.roleListTreeData,dropdownStyle:{maxHeight:"500px",overflow:"auto"}}})],1),t("a-form-item",{attrs:{label:"用户密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"后台登录密码"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,min:6,message:"请输入至少6个字符"}]}],expression:"['password', {rules: [\n            {required: true, min: 6, message: '请输入至少6个字符'}\n          ]}]"}],attrs:{type:"password"}})],1),t("a-form-item",{attrs:{label:"确认密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password_confirm",{rules:[{required:!0,message:"请输入确认密码"},{validator:e.compareToFirstPassword}]}],expression:"['password_confirm', {rules: [\n            {required: true, message: '请输入确认密码'},\n            {validator: compareToFirstPassword}\n          ]}]"}],attrs:{type:"password"}})],1),t("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入至少1个数字"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入至少1个数字'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},u=[],d=(r("159b"),r("caad"),r("2532"),r("99af"),r("d81d"),{props:{roleList:{type:Array,required:!0}},data:function(){return{title:"",labelCol:{span:7},wrapperCol:{span:13},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),roleListTreeData:[]}},methods:{add:function(){this.title="新增管理员",this.visible=!0,this.getRoleList()},getRoleList:function(){var e=this.roleList,t=this.formatTreeData(e);this.roleListTreeData=t},getCheckedRoleKeys:function(){var e=this.roleList,t=this.record,r=function e(r){var a=[];return r.forEach((function(r){if(t["roleIds"].includes(r["role_id"])&&a.push({label:r["role_name"],value:r["role_id"]}),r.children&&r.children.length){var n=e(r.children);n.length&&(a=a.concat(n))}})),a};return r(e)},formatTreeData:function(e){var t=this,r=[];return e.forEach((function(e){var a={title:e.role_name,key:e.role_id,value:e.role_id};e.children&&e.children.length&&(a["children"]=t.formatTreeData(e["children"])),r.push(a)})),r},handleSubmit:function(e){var t=this;e.preventDefault();var r=this.form.validateFields;r((function(e,r){r.roles&&(r.roles=r.roles.map((function(e){return e.value}))),!e&&t.onFormSubmit(r)}))},handleCancel:function(){this.visible=!1,this.form.resetFields()},compareToFirstPassword:function(e,t,r){var a=this.form;return!t||t===a.getFieldValue("password")||new Error("您输入的确认密码不一致")},onFormSubmit:function(e){var t=this;this.confirmLoading=!0,o["a"]({form:e}).then((function(r){t.$message.success(r.message,1.5),t.handleCancel(),t.$emit("handleSubmit",e)})).finally((function(e){t.confirmLoading=!1}))}}}),h=d,f=r("2877"),m=Object(f["a"])(h,c,u,!1,null,null,null),p=m.exports,v=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"管理员姓名",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["real_name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['real_name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),t("a-form-item",{attrs:{label:"用户名",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"后台登录用户名"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["user_name",{rules:[{required:!0,min:4,message:"请输入至少4个字符"}]}],expression:"['user_name', {rules: [{required: true, min: 4, message: '请输入至少4个字符'}]}]"}]})],1),e.record.is_super?e._e():t("a-form-item",{attrs:{label:"所属角色",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"后台管理员角色"}},[t("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["roles",{rules:[{required:!0,message:"请至少选择一个角色"}]}],expression:"['roles', {rules: [{required: true, message: '请至少选择一个角色'}]}]"}],attrs:{treeCheckable:"",treeCheckStrictly:"",treeDefaultExpandAll:"",allowClear:"",treeData:e.roleListTreeData,dropdownStyle:{maxHeight:"500px",overflow:"auto"}}})],1),t("a-form-item",{attrs:{label:"用户密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"后台登录密码"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{min:6,message:"请输入至少6个字符"}]}],expression:"['password', {rules: [{min: 6, message: '请输入至少6个字符'}]}]"}],attrs:{type:"password"}})],1),t("a-form-item",{attrs:{label:"确认密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password_confirm",{rules:[{message:"请输入确认密码"},{validator:e.compareToFirstPassword}]}],expression:"['password_confirm', {rules: [\n            { message: '请输入确认密码'},\n            {validator: compareToFirstPassword}\n          ]}]"}],attrs:{type:"password"}})],1),t("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入至少1个数字"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入至少1个数字'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},g=[],b=r("2ef0"),y=r.n(b),w={props:{roleList:{type:Array,required:!0}},data:function(){return{title:"",labelCol:{span:7},wrapperCol:{span:13},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),roleListTreeData:[],record:{}}},methods:{edit:function(e){this.title="编辑管理员",this.visible=!0,this.record=e,!e["is_super"]&&this.getRoleList(),this.setFieldsValue()},setFieldsValue:function(){var e=this,t=this.form.setFieldsValue,r=this.getCheckedRoleKeys;this.$nextTick((function(){var a=y.a.pick(e.record,["user_name","real_name","sort"]);a.roles=r(),t(a)}))},getRoleList:function(){var e=this.roleList,t=this.formatTreeData(e);this.roleListTreeData=t},getCheckedRoleKeys:function(){var e=this.roleList,t=this.record,r=function e(r){var a=[];return r.forEach((function(r){if(t["roleIds"].includes(r["role_id"])&&a.push({label:r["role_name"],value:r["role_id"]}),r.children&&r.children.length){var n=e(r.children);n.length&&(a=a.concat(n))}})),a};return r(e)},formatTreeData:function(e){var t=this,r=[];return e.forEach((function(e){var a={title:e.role_name,key:e.role_id,value:e.role_id};e.children&&e.children.length&&(a["children"]=t.formatTreeData(e["children"])),r.push(a)})),r},handleSubmit:function(e){var t=this;e.preventDefault();var r=this.form.validateFields;r((function(e,r){r.roles&&(r.roles=r.roles.map((function(e){return e.value}))),!e&&t.onFormSubmit(r)}))},handleCancel:function(){this.visible=!1,this.form.resetFields()},compareToFirstPassword:function(e,t,r){var a=this.form;return!t||t===a.getFieldValue("password")||new Error("您输入的确认密码不一致")},onFormSubmit:function(e){var t=this;this.confirmLoading=!0,o["c"]({userId:this.record["store_user_id"],form:e}).then((function(r){t.$message.success(r.message,1.5),t.handleCancel(),t.$emit("handleSubmit",e)})).finally((function(e){t.confirmLoading=!1}))}}},C=w,L=Object(f["a"])(C,v,g,!1,null,null,null),k=L.exports,_={name:"Index",components:{STable:l["c"],AddForm:p,EditForm:k},data:function(){var e=this;return{roleList:[],queryParam:{},isLoading:!1,columns:[{title:"管理员ID",dataIndex:"store_user_id"},{title:"用户名",dataIndex:"user_name",scopedSlots:{customRender:"user_name"}},{title:"姓名",dataIndex:"real_name"},{title:"排序",dataIndex:"sort"},{title:"添加时间",dataIndex:"create_time"},{title:"操作",dataIndex:"action",width:"180px",scopedSlots:{customRender:"action"}}],loadData:function(t){return o["e"](Object(i["a"])(Object(i["a"])({},t),e.queryParam)).then((function(e){return e.data.list}))}}},created:function(){this.getRoleList()},methods:{handleAdd:function(){this.$refs.AddForm.add()},handleEdit:function(e){this.$refs.EditForm.edit(e)},getRoleList:function(){var e=this;this.isLoading=!0,s["d"]().then((function(t){e.roleList=t.data.list})).finally((function(){e.isLoading=!1}))},handleDelete:function(e){var t=this,r=this.$confirm({title:"您确定要删除该记录吗?",content:"删除后不可恢复",onOk:function(){return o["b"]({userId:e["store_user_id"]}).then((function(e){t.$message.success(e.message,1.5),t.handleRefresh()})).finally((function(e){r.destroy()}))}})},handleRefresh:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$refs.table.refresh(e)},onSearch:function(){this.handleRefresh(!0)}}},x=_,F=Object(f["a"])(x,a,n,!1,null,null,null);t["default"]=F.exports},c7eb:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("159b"),r("b0c0"),r("131a"),r("fb6a");var a=r("53ca");function n(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
n=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(K){u=function(e,t,r){return e[t]=r}}function d(e,t,r,a){var n=t&&t.prototype instanceof m?t:m,o=Object.create(n.prototype),s=new T(a||[]);return i(o,"_invoke",{value:k(e,r,s)}),o}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(K){return{type:"throw",arg:K}}}e.wrap=d;var f={};function m(){}function p(){}function v(){}var g={};u(g,s,(function(){return this}));var b=Object.getPrototypeOf,y=b&&b(b(S([])));y&&y!==t&&r.call(y,s)&&(g=y);var w=v.prototype=m.prototype=Object.create(g);function C(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(i,o,s,l){var c=h(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==Object(a["a"])(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,s,l)}),(function(e){n("throw",e,s,l)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,l)}))}l(c.arg)}var o;i(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return o=o?o.then(a,a):a()}})}function k(e,t,r){var a="suspendedStart";return function(n,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw i;return E()}for(r.method=n,r.arg=i;;){var o=r.delegate;if(o){var s=_(o,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=h(e,t,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}function _(e,t){var r=t.method,a=e.iterator[r];if(void 0===a)return t.delegate=null,"throw"===r&&e.iterator["return"]&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var n=h(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=v,i(w,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},C(L.prototype),u(L.prototype,l,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,a,n,i){void 0===i&&(i=Promise);var o=new L(d(t,r,a,n),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},C(w),u(w,c,"Generator"),u(w,s,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=S,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(F),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return o.type="throw",o.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),F(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;F(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}}}]);