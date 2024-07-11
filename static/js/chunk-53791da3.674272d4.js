(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53791da3","chunk-ed37dce4","chunk-39413ce8","chunk-3a08d90c"],{"15cd":function(e,t,r){},"1e8b":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户昵称",prop:"nickName"}},[r("el-input",{attrs:{maxlength:"30"},model:{value:e.form.nickName,callback:function(t){e.$set(e.form,"nickName",t)},expression:"form.nickName"}})],1),r("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[r("el-input",{attrs:{maxlength:"11"},model:{value:e.form.phonenumber,callback:function(t){e.$set(e.form,"phonenumber",t)},expression:"form.phonenumber"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{maxlength:"50"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"性别"}},[r("el-radio-group",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[r("el-radio",{attrs:{label:"0"}},[e._v("男")]),r("el-radio",{attrs:{label:"1"}},[e._v("女")])],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.close}},[e._v("关闭")])],1)],1)},n=[],a=r("c0c7"),i={props:{user:{type:Object}},data:function(){return{form:{},rules:{nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱地址不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phonenumber:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},watch:{user:{handler:function(e){e&&(this.form={nickName:e.nickName,phonenumber:e.phonenumber,email:e.email,sex:e.sex})},immediate:!0}},methods:{submit:function(){var e=this;this.$refs["form"].validate((function(t){t&&Object(a["l"])(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.user.phonenumber=e.form.phonenumber,e.user.email=e.form.email}))}))},close:function(){this.$tab.closePage()}}},o=i,l=r("2877"),u=Object(l["a"])(o,s,n,!1,null,null,null);t["default"]=u.exports},"4c1b":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,xs:24}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("个人信息")])]),r("div",[r("div",{staticClass:"text-center"},[r("userAvatar")],1),r("ul",{staticClass:"list-group list-group-striped"},[r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"user"}}),e._v("用户名称 "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.userName))])],1),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"phone"}}),e._v("手机号码 "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.phonenumber))])],1),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"email"}}),e._v("用户邮箱 "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.email))])],1),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"tree"}}),e._v("所属部门 "),e.user.dept?r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.dept.deptName)+" / "+e._s(e.postGroup))]):e._e()],1),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"peoples"}}),e._v("所属角色 "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.roleGroup))])],1),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"date"}}),e._v("创建日期 "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.createTime))])],1)])])])],1),r("el-col",{attrs:{span:18,xs:24}},[r("el-card",[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("基本资料")])]),r("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[r("el-tab-pane",{attrs:{label:"基本资料",name:"userinfo"}},[r("userInfo",{attrs:{user:e.user}})],1),r("el-tab-pane",{attrs:{label:"修改密码",name:"resetPwd"}},[r("resetPwd")],1)],1)],1)],1)],1)],1)},n=[],a=r("9429"),i=r("1e8b"),o=r("ee46"),l=r("c0c7"),u={name:"Profile",components:{userAvatar:a["default"],userInfo:i["default"],resetPwd:o["default"]},data:function(){return{user:{},roleGroup:{},postGroup:{},activeTab:"userinfo"}},created:function(){this.getUser()},methods:{getUser:function(){var e=this;Object(l["g"])().then((function(t){e.user=t.data,e.roleGroup=t.roleGroup,e.postGroup=t.postGroup}))}}},c=u,d=r("2877"),p=Object(d["a"])(c,s,n,!1,null,null,null);t["default"]=p.exports},9429:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"user-info-head",on:{click:function(t){return e.editCropper()}}},[r("img",{staticClass:"img-circle img-lg",attrs:{src:e.options.img,title:"点击上传头像"}})]),r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"800px","append-to-body":""},on:{"update:visible":function(t){e.open=t},opened:e.modalOpened,close:e.closeDialog}},[r("el-row",[r("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[e.visible?r("vue-cropper",{ref:"cropper",attrs:{img:e.options.img,info:!0,autoCrop:e.options.autoCrop,autoCropWidth:e.options.autoCropWidth,autoCropHeight:e.options.autoCropHeight,fixedBox:e.options.fixedBox,outputType:e.options.outputType},on:{realTime:e.realTime}}):e._e()],1),r("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[r("div",{staticClass:"avatar-upload-preview"},[r("img",{style:e.previews.img,attrs:{src:e.previews.url}})])])],1),r("br"),r("el-row",[r("el-col",{attrs:{lg:2,sm:3,xs:3}},[r("el-upload",{attrs:{action:"#","http-request":e.requestUpload,"show-file-list":!1,"before-upload":e.beforeUpload}},[r("el-button",{attrs:{size:"small"}},[e._v(" 选择 "),r("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1),r("el-col",{attrs:{lg:{span:1,offset:2},sm:2,xs:2}},[r("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(t){return e.changeScale(1)}}})],1),r("el-col",{attrs:{lg:{span:1,offset:1},sm:2,xs:2}},[r("el-button",{attrs:{icon:"el-icon-minus",size:"small"},on:{click:function(t){return e.changeScale(-1)}}})],1),r("el-col",{attrs:{lg:{span:1,offset:1},sm:2,xs:2}},[r("el-button",{attrs:{icon:"el-icon-refresh-left",size:"small"},on:{click:function(t){return e.rotateLeft()}}})],1),r("el-col",{attrs:{lg:{span:1,offset:1},sm:2,xs:2}},[r("el-button",{attrs:{icon:"el-icon-refresh-right",size:"small"},on:{click:function(t){return e.rotateRight()}}})],1),r("el-col",{attrs:{lg:{span:2,offset:6},sm:2,xs:2}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.uploadImg()}}},[e._v("提 交")])],1)],1)],1)],1)},n=[],a=(r("b0c0"),r("4360")),i=r("7e79"),o=r("c0c7"),l=r("ed08"),u={components:{VueCropper:i["VueCropper"]},data:function(){return{open:!1,visible:!1,title:"修改头像",options:{img:a["a"].getters.avatar,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0,outputType:"png",filename:"avatar"},previews:{},resizeHandler:null}},methods:{editCropper:function(){this.open=!0},modalOpened:function(){var e=this;this.visible=!0,this.resizeHandler||(this.resizeHandler=Object(l["b"])((function(){e.refresh()}),100)),window.addEventListener("resize",this.resizeHandler)},refresh:function(){this.$refs.cropper.refresh()},requestUpload:function(){},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},changeScale:function(e){e=e||1,this.$refs.cropper.changeScale(e)},beforeUpload:function(e){var t=this;if(-1==e.type.indexOf("image/"))this.$modal.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");else{var r=new FileReader;r.readAsDataURL(e),r.onload=function(){t.options.img=r.result,t.options.filename=e.name}}},uploadImg:function(){var e=this;this.$refs.cropper.getCropBlob((function(t){var r=new FormData;r.append("avatarfile",t,e.options.filename),Object(o["n"])(r).then((function(t){e.open=!1,e.options.img="/prod-api"+t.imgUrl,a["a"].commit("SET_AVATAR",e.options.img),e.$modal.msgSuccess("修改成功"),e.visible=!1}))}))},realTime:function(e){this.previews=e},closeDialog:function(){this.options.img=a["a"].getters.avatar,this.visible=!1,window.removeEventListener("resize",this.resizeHandler)}}},c=u,d=(r("d749"),r("2877")),p=Object(d["a"])(c,s,n,!1,null,"07624ce5",null);t["default"]=p.exports},c0c7:function(e,t,r){"use strict";r.d(t,"h",(function(){return a})),r.d(t,"f",(function(){return i})),r.d(t,"a",(function(){return o})),r.d(t,"k",(function(){return l})),r.d(t,"c",(function(){return u})),r.d(t,"i",(function(){return c})),r.d(t,"b",(function(){return d})),r.d(t,"g",(function(){return p})),r.d(t,"l",(function(){return m})),r.d(t,"m",(function(){return f})),r.d(t,"n",(function(){return h})),r.d(t,"e",(function(){return b})),r.d(t,"j",(function(){return g})),r.d(t,"d",(function(){return v}));var s=r("b775"),n=r("c38a");function a(e){return Object(s["a"])({url:"/system/user/list",method:"get",params:e})}function i(e){return Object(s["a"])({url:"/system/user/"+Object(n["e"])(e),method:"get"})}function o(e){return Object(s["a"])({url:"/system/user",method:"post",data:e})}function l(e){return Object(s["a"])({url:"/system/user",method:"put",data:e})}function u(e){return Object(s["a"])({url:"/system/user/"+e,method:"delete"})}function c(e,t){var r={userId:e,password:t};return Object(s["a"])({url:"/system/user/resetPwd",method:"put",data:r})}function d(e,t){var r={userId:e,status:t};return Object(s["a"])({url:"/system/user/changeStatus",method:"put",data:r})}function p(){return Object(s["a"])({url:"/system/user/profile",method:"get"})}function m(e){return Object(s["a"])({url:"/system/user/profile",method:"put",data:e})}function f(e,t){var r={oldPassword:e,newPassword:t};return Object(s["a"])({url:"/system/user/profile/updatePwd",method:"put",params:r})}function h(e){return Object(s["a"])({url:"/system/user/profile/avatar",method:"post",data:e})}function b(e){return Object(s["a"])({url:"/system/user/authRole/"+e,method:"get"})}function g(e){return Object(s["a"])({url:"/system/user/authRole",method:"put",params:e})}function v(){return Object(s["a"])({url:"/system/user/deptTree",method:"get"})}},d749:function(e,t,r){"use strict";r("15cd")},ed08:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"e",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"f",(function(){return o})),r.d(t,"d",(function(){return l}));r("53ca"),r("d9e2"),r("a630"),r("a15b"),r("d81d"),r("14d9"),r("fb6a"),r("b64b"),r("d3b7"),r("4d63"),r("c607"),r("ac1f"),r("2c3e"),r("00b4"),r("25f0"),r("6062"),r("3ca3"),r("466d"),r("5319"),r("159b"),r("ddb0"),r("c38a");function s(e,t,r){var s,n,a,i,o,l=function l(){var u=+new Date-i;u<t&&u>0?s=setTimeout(l,t-u):(s=null,r||(o=e.apply(a,n),s||(a=n=null)))};return function(){for(var n=arguments.length,u=new Array(n),c=0;c<n;c++)u[c]=arguments[c];a=this,i=+new Date;var d=r&&!s;return s||(s=setTimeout(l,t)),d&&(o=e.apply(a,u),a=u=null),o}}function n(e,t){for(var r=Object.create(null),s=e.split(","),n=0;n<s.length;n++)r[s[n]]=!0;return t?function(e){return r[e.toLowerCase()]}:function(e){return r[e]}}var a="export default ",i={html:{indent_size:"2",indent_char:" ",max_preserve_newlines:"-1",preserve_newlines:!1,keep_array_indentation:!1,break_chained_methods:!1,indent_scripts:"separate",brace_style:"end-expand",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!1,end_with_newline:!0,wrap_line_length:"110",indent_inner_html:!0,comma_first:!1,e4x:!0,indent_empty_lines:!0},js:{indent_size:"2",indent_char:" ",max_preserve_newlines:"-1",preserve_newlines:!1,keep_array_indentation:!1,break_chained_methods:!1,indent_scripts:"normal",brace_style:"end-expand",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!0,end_with_newline:!0,wrap_line_length:"110",indent_inner_html:!0,comma_first:!1,e4x:!0,indent_empty_lines:!0}};function o(e){return e.replace(/( |^)[a-z]/g,(function(e){return e.toUpperCase()}))}function l(e){return/^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(e)}},ee46:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.user,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"旧密码",prop:"oldPassword"}},[r("el-input",{attrs:{placeholder:"请输入旧密码",type:"password","show-password":""},model:{value:e.user.oldPassword,callback:function(t){e.$set(e.user,"oldPassword",t)},expression:"user.oldPassword"}})],1),r("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[r("el-input",{attrs:{placeholder:"请输入新密码",type:"password","show-password":""},model:{value:e.user.newPassword,callback:function(t){e.$set(e.user,"newPassword",t)},expression:"user.newPassword"}})],1),r("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword"}},[r("el-input",{attrs:{placeholder:"请确认新密码",type:"password","show-password":""},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.close}},[e._v("关闭")])],1)],1)},n=[],a=(r("d9e2"),r("c0c7")),i={data:function(){var e=this,t=function(t,r,s){e.user.newPassword!==r?s(new Error("两次输入的密码不一致")):s()};return{user:{oldPassword:void 0,newPassword:void 0,confirmPassword:void 0},rules:{oldPassword:[{required:!0,message:"旧密码不能为空",trigger:"blur"}],newPassword:[{required:!0,message:"新密码不能为空",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"},{pattern:/^[^<>"'|\\]+$/,message:"不能包含非法字符：< > \" ' \\ |",trigger:"blur"}],confirmPassword:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{required:!0,validator:t,trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs["form"].validate((function(t){t&&Object(a["m"])(e.user.oldPassword,e.user.newPassword).then((function(t){e.$modal.msgSuccess("修改成功")}))}))},close:function(){this.$tab.closePage()}}},o=i,l=r("2877"),u=Object(l["a"])(o,s,n,!1,null,null,null);t["default"]=u.exports}}]);