(this["webpackJsonpdoge-web"]=this["webpackJsonpdoge-web"]||[]).push([[0],{58:function(e,t,c){},59:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(21),r=c.n(s),i=(c(58),c(59),c(60),c(98)),l=c(96),o=c(99),j=c(22),u=c(1);var b=function(){return Object(u.jsx)("div",{className:"Info",children:Object(u.jsx)(i.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(i.a.Brand,{href:"/",children:"Doge-Web"}),Object(u.jsx)(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsx)(i.a.Collapse,{id:"responsive-navbar-nav",children:Object(u.jsxs)(o.a,{className:"me-auto",children:[Object(u.jsx)(j.b,{to:"/",children:"\ud648"}),Object(u.jsx)(j.b,{to:"/accountInfo",children:"\ud68c\uc6d0 \uc815\ubcf4"}),Object(u.jsx)(j.b,{to:"/account?register=customer",children:"\ud68c\uc6d0\uac00\uc785"}),Object(u.jsx)(j.b,{to:"/login",children:"\ub85c\uadf8\uc778"})]})})]})})})},d=c(18),h=c.n(d),p=c(27),m=c(26),x=c.n(m),O=c(97);c(90);var f=function(){function e(){return(e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://doge-shopping-api.herokuapp.com/");case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){e.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"background",children:Object(u.jsxs)("div",{className:"background-content",children:[Object(u.jsx)("h1",{children:"20% Season Off"}),Object(u.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(u.jsx)("p",{children:Object(u.jsx)(O.a,{variant:"primary",children:"Learn more"})})]})})};c(91);var g=function(){return Object(u.jsx)("div",{className:"account",children:Object(u.jsxs)("div",{className:"center",children:[Object(u.jsx)("h3",{className:"title",children:"\ud68c\uc6d0 \uc815\ubcf4 \uc218\uc815"}),Object(u.jsx)("form",{children:Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("input",{placeholder:"\uc774\ub984"}),Object(u.jsx)("input",{placeholder:"\uc544\uc774\ub514"}),Object(u.jsx)("input",{placeholder:"\ub2c9\ub124\uc784"}),Object(u.jsx)("input",{placeholder:"\uc774\uba54\uc77c"}),Object(u.jsx)("input",{placeholder:"\uc804\ud654\ubc88\ud638"}),Object(u.jsx)("input",{type:"submit",value:"\uc218\uc815\ud558\uae30"})]})})]})})},v=c(6);c(92);var N=function(){var e=n.a.useState(""),t=Object(v.a)(e,2),c=t[0],s=t[1],r=n.a.useState(""),i=Object(v.a)(r,2),l=i[0],o=i[1],j=n.a.useState(""),b=Object(v.a)(j,2),d=b[0],m=b[1],O=n.a.useState(""),f=Object(v.a)(O,2),g=f[0],N=f[1],k=n.a.useState(""),w=Object(v.a)(k,2),y=w[0],C=w[1],S=Object(a.useState)(""),I=Object(v.a)(S,2),q=I[0],B=I[1],D=n.a.useState(""),A=Object(v.a)(D,2),L=A[0],T=A[1],E=n.a.useState(""),J=Object(v.a)(E,2),_=J[0],z=J[1],F=function(e){var t=e.target,c=t.name,a=t.value;"name"===c?s(a):"email"===c?o(a):"nickName"===c?m(a):"id"===c?N(a):"password"===c?C(a):"password2"===c?B(a):"phoneNumber"===c&&T(a)},G=function(){var e=Object(p.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.a.get("".concat("https://doge-shopping-api.herokuapp.com","/account/check?id=").concat(g,"&register=customer"),{id:g});case 4:c=e.sent,console.log(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(p.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),y===q){e.next=3;break}return e.abrupt("return",alert("\ube44\ubc00\ubc88\ud638\uc640 \ube44\ubc00\ubc88\ud638 \ud655\uc778\uc774 \ub2e4\ub985\ub2c8\ub2e4."));case 3:return z("customer"),e.prev=4,e.next=7,x.a.post("".concat("https://doge-shopping-api.herokuapp.com","/account?register=customer"),{name:c,email:l,nickname:d,id:g,password:y,phoneNumber:L,register:_});case 7:a=e.sent,console.log(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"register",children:[Object(u.jsx)("h3",{children:"\ud68c\uc6d0\uac00\uc785"}),Object(u.jsx)("form",{children:Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsxs)("ul",{className:"container",children:[Object(u.jsx)("li",{className:"item center",children:"\uc774\ub984"}),Object(u.jsx)("li",{className:"item",children:Object(u.jsx)("input",{type:"text",name:"name",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694.",autofocus:!0,required:!0,onChange:F})})]}),Object(u.jsxs)("ul",{className:"container",children:[Object(u.jsx)("li",{className:"item center",children:"\uc774\uba54\uc77c"}),Object(u.jsx)("li",{className:"item",children:Object(u.jsx)("input",{type:"email",name:"email",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694.",autofocus:!0,required:!0,onChange:F})})]}),Object(u.jsxs)("ul",{className:"container",children:[Object(u.jsx)("li",{className:"item center",children:"\ub2c9\ub124\uc784"}),Object(u.jsx)("li",{className:"item",children:Object(u.jsx)("input",{type:"text",name:"nickName",placeholder:"\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud558\uc138\uc694.",autofocus:!0,required:!0,onChange:F})}),Object(u.jsx)("li",{className:"item"})]}),Object(u.jsxs)("ul",{className:"container",children:[Object(u.jsx)("li",{className:"item center",children:"\uc544\uc774\ub514"}),Object(u.jsx)("li",{className:"item",children:Object(u.jsx)("input",{type:"text",name:"id",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694.",required:!0,onChange:F})}),Object(u.jsx)("li",{className:"item",children:Object(u.jsx)("button",{className:"idcheck",onClick:G,children:"\uc911\ubcf5\ud655\uc778"})})]}),Object(u.jsxs)("ul",{className:"container",children:[Object(u.jsx)("li",{className:"item center",children:"\ube44\ubc00\ubc88\ud638"}),Object(u.jsx)("li",{className:"item",children:Object(u.jsx)("input",{type:"password",name:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",required:!0,onChange:F})})]}),Object(u.jsxs)("ul",{className:"container",children:[Object(u.jsx)("li",{className:"item center",children:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"}),Object(u.jsx)("li",{className:"item",children:Object(u.jsx)("input",{type:"password",name:"password2",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",required:!0,onChange:F})})]}),Object(u.jsxs)("ul",{className:"container",children:[Object(u.jsx)("li",{className:"item center",children:"\uc804\ud654\ubc88\ud638"}),Object(u.jsx)("li",{className:"item",children:Object(u.jsx)("input",{type:"tel",name:"phoneNumber",placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",required:!0,onChange:F})})]}),Object(u.jsxs)("ul",{className:"container",children:[Object(u.jsx)("li",{className:"item center"}),Object(u.jsx)("li",{className:"item",children:Object(u.jsx)("input",{value:"\uac00\uc785\ud558\uae30",type:"submit",className:"submit",onClick:function(e){return P(e)}})})]})]})}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"loginSwitch",children:[Object(u.jsx)("span",{children:" Already have an account? "}),Object(u.jsx)("a",{href:"/login",children:"Log in now"})," \u2192"]}),Object(u.jsxs)("div",{className:"social-login",children:[Object(u.jsx)("i",{className:"fab fa-github"}),Object(u.jsx)("a",{href:"/",children:" Continue with Github"})," \u2192"]})]})},k=c(9);c(93);var w=function(){var e=Object(k.f)(),t=n.a.useState(""),c=Object(v.a)(t,2),a=c[0],s=c[1],r=n.a.useState(""),i=Object(v.a)(r,2),l=i[0],o=i[1],j=function(){var t=Object(p.a)(h.a.mark((function t(c){var n,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,x.a.post("".concat("https://doge-shopping-api.herokuapp.com","/login"),{loginId:a,password:l},{withCredentials:!0});case 4:n=t.sent,console.log(n.data.nickname),s=n.data.accessToken,x.a.defaults.headers.common.Authorization="Bearer ".concat(s),e.push("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"login-container",children:[Object(u.jsx)("img",{src:"https://image.newsis.com/2021/11/01/NISI20211101_0000859131_web.jpg",alt:"\ub3c4\uc9c0"}),Object(u.jsxs)("form",{action:"/",className:"login-form",children:[Object(u.jsx)("div",{className:"input-box",children:Object(u.jsx)("input",{type:"text",placeholder:"ID",onChange:function(e){s(e.target.value)}})}),Object(u.jsx)("div",{className:"input-box",children:Object(u.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){o(e.target.value)}})}),Object(u.jsx)("div",{className:"submitBtnForm",children:Object(u.jsx)("button",{className:"submitBtn",type:"submit",onClick:j,children:"Log In"})})]})]})};var y=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b,{}),Object(u.jsxs)(k.c,{children:[Object(u.jsx)(k.a,{exact:!0,path:"/",children:Object(u.jsx)(f,{})}),Object(u.jsx)(k.a,{exact:!0,path:"/accountInfo",children:Object(u.jsx)(g,{})}),Object(u.jsx)(k.a,{exact:!0,path:"/account",children:Object(u.jsx)(N,{})}),Object(u.jsx)(k.a,{exact:!0,path:"/login",children:Object(u.jsx)(w,{})})]})]})};r.a.render(Object(u.jsx)(j.a,{basename:"/doge-web",children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.da451fb4.chunk.js.map