(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"5WY0":function(e,a,t){e.exports={main:"antd-pro-pages-user-register-main",getCaptcha:"antd-pro-pages-user-register-getCaptcha",submit:"antd-pro-pages-user-register-submit",login:"antd-pro-pages-user-register-login",error:"antd-pro-pages-user-register-error",success:"antd-pro-pages-user-register-success",warning:"antd-pro-pages-user-register-warning","progress-pass":"antd-pro-pages-user-register-progress-pass",progress:"antd-pro-pages-user-register-progress"}},cq3J:function(e,a,t){"use strict";t.r(a);t("14J3");var r,s,i,n,o=t("BMrR"),l=(t("+L6B"),t("2/Rp")),c=(t("jCWc"),t("kPKH")),m=(t("Q9mQ"),t("diRs")),d=(t("MXD1"),t("CFYs")),p=t("MVZn"),g=t.n(p),u=t("lwsE"),f=t.n(u),h=t("W8MJ"),v=t.n(h),E=t("a1gu"),b=t.n(E),w=t("Nsbk"),M=t.n(w),y=t("7W2i"),O=t.n(y),k=(t("5NDa"),t("5rEg")),j=(t("OaEy"),t("2fM7")),F=(t("y8nQ"),t("Vl3Y")),C=t("q1tI"),P=t.n(C),S=t("MuoO"),N=t("LLXN"),q=t("mOP9"),x=t("usdK"),D=t("5WY0"),z=t.n(D),W=F["a"].Item,I=j["a"].Option,V=k["a"].Group,J={ok:P.a.createElement("div",{className:z.a.success},P.a.createElement(N["FormattedMessage"],{id:"validation.password.strength.strong"})),pass:P.a.createElement("div",{className:z.a.warning},P.a.createElement(N["FormattedMessage"],{id:"validation.password.strength.medium"})),poor:P.a.createElement("div",{className:z.a.error},P.a.createElement(N["FormattedMessage"],{id:"validation.password.strength.short"}))},L={ok:"success",pass:"normal",poor:"exception"},Y=(r=Object(S["connect"])(function(e){var a=e.register,t=e.loading;return{register:a,submitting:t.effects["register/submit"]}}),s=F["a"].create(),r(i=s((n=function(e){function a(){var e,t;f()(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return t=b()(this,(e=M()(a)).call.apply(e,[this].concat(s))),t.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86"},t.onGetCaptcha=function(){var e=59;t.setState({count:e}),t.interval=setInterval(function(){e-=1,t.setState({count:e}),0===e&&clearInterval(t.interval)},1e3)},t.getPasswordStatus=function(){var e=t.props.form,a=e.getFieldValue("password");return a&&a.length>9?"ok":a&&a.length>5?"pass":"poor"},t.handleSubmit=function(e){e.preventDefault();var a=t.props,r=a.form,s=a.dispatch;r.validateFields({force:!0},function(e,a){if(!e){var r=t.state.prefix;s({type:"register/submit",payload:g()({},a,{prefix:r})})}})},t.handleConfirmBlur=function(e){var a=e.target.value,r=t.state.confirmDirty;t.setState({confirmDirty:r||!!a})},t.checkConfirm=function(e,a,r){var s=t.props.form;a&&a!==s.getFieldValue("password")?r(Object(N["formatMessage"])({id:"validation.password.twice"})):r()},t.checkPassword=function(e,a,r){var s=t.state,i=s.visible,n=s.confirmDirty;if(a)if(t.setState({help:""}),i||t.setState({visible:!!a}),a.length<6)r("error");else{var o=t.props.form;a&&n&&o.validateFields(["confirm"],{force:!0}),r()}else t.setState({help:Object(N["formatMessage"])({id:"validation.password.required"}),visible:!!a}),r("error")},t.changePrefix=function(e){t.setState({prefix:e})},t.renderPasswordProgress=function(){var e=t.props.form,a=e.getFieldValue("password"),r=t.getPasswordStatus();return a&&a.length?P.a.createElement("div",{className:z.a["progress-".concat(r)]},P.a.createElement(d["a"],{status:L[r],className:z.a.progress,strokeWidth:6,percent:10*a.length>100?100:10*a.length,showInfo:!1})):null},t}return O()(a,e),v()(a,[{key:"componentDidUpdate",value:function(){var e=this.props,a=e.form,t=e.register,r=a.getFieldValue("mail");"ok"===t.status&&x["a"].push({pathname:"/user/register-result",state:{account:r}})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,a=e.form,t=e.submitting,r=a.getFieldDecorator,s=this.state,i=s.count,n=s.prefix,d=s.help,p=s.visible;return P.a.createElement("div",{className:z.a.main},P.a.createElement("h3",null,P.a.createElement(N["FormattedMessage"],{id:"app.register.register"})),P.a.createElement(F["a"],{onSubmit:this.handleSubmit},P.a.createElement(W,null,r("mail",{rules:[{required:!0,message:Object(N["formatMessage"])({id:"validation.email.required"})},{type:"email",message:Object(N["formatMessage"])({id:"validation.email.wrong-format"})}]})(P.a.createElement(k["a"],{size:"large",placeholder:Object(N["formatMessage"])({id:"form.email.placeholder"})}))),P.a.createElement(W,{help:d},P.a.createElement(m["a"],{getPopupContainer:function(e){return e.parentNode},content:P.a.createElement("div",{style:{padding:"4px 0"}},J[this.getPasswordStatus()],this.renderPasswordProgress(),P.a.createElement("div",{style:{marginTop:10}},P.a.createElement(N["FormattedMessage"],{id:"validation.password.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:p},r("password",{rules:[{validator:this.checkPassword}]})(P.a.createElement(k["a"],{size:"large",type:"password",placeholder:Object(N["formatMessage"])({id:"form.password.placeholder"})})))),P.a.createElement(W,null,r("confirm",{rules:[{required:!0,message:Object(N["formatMessage"])({id:"validation.confirm-password.required"})},{validator:this.checkConfirm}]})(P.a.createElement(k["a"],{size:"large",type:"password",placeholder:Object(N["formatMessage"])({id:"form.confirm-password.placeholder"})}))),P.a.createElement(W,null,P.a.createElement(V,{compact:!0},P.a.createElement(j["a"],{size:"large",value:n,onChange:this.changePrefix,style:{width:"20%"}},P.a.createElement(I,{value:"86"},"+86"),P.a.createElement(I,{value:"87"},"+87")),r("mobile",{rules:[{required:!0,message:Object(N["formatMessage"])({id:"validation.phone-number.required"})},{pattern:/^\d{11}$/,message:Object(N["formatMessage"])({id:"validation.phone-number.wrong-format"})}]})(P.a.createElement(k["a"],{size:"large",style:{width:"80%"},placeholder:Object(N["formatMessage"])({id:"form.phone-number.placeholder"})})))),P.a.createElement(W,null,P.a.createElement(o["a"],{gutter:8},P.a.createElement(c["a"],{span:16},r("captcha",{rules:[{required:!0,message:Object(N["formatMessage"])({id:"validation.verification-code.required"})}]})(P.a.createElement(k["a"],{size:"large",placeholder:Object(N["formatMessage"])({id:"form.verification-code.placeholder"})}))),P.a.createElement(c["a"],{span:8},P.a.createElement(l["a"],{size:"large",disabled:i,className:z.a.getCaptcha,onClick:this.onGetCaptcha},i?"".concat(i," s"):Object(N["formatMessage"])({id:"app.register.get-verification-code"}))))),P.a.createElement(W,null,P.a.createElement(l["a"],{size:"large",loading:t,className:z.a.submit,type:"primary",htmlType:"submit"},P.a.createElement(N["FormattedMessage"],{id:"app.register.register"})),P.a.createElement(q["a"],{className:z.a.login,to:"/User/Login"},P.a.createElement(N["FormattedMessage"],{id:"app.register.sign-in"})))))}}]),a}(C["Component"]),i=n))||i)||i);a["default"]=Y}}]);