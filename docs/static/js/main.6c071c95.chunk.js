(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,t,a){},51:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(19),s=a.n(n),r=a(13),l=a(5),o=a(11),i=a(6),j=a(20),d=a(10),b=(a(32),a(17)),m=a.n(b),u=a(22),h="https://buen-sabor-api.herokuapp.com/api",x=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",c="".concat(h,"/").concat(e);return"GET"===a?fetch(c):fetch(c,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},O=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",c="".concat(h,"/").concat(e),n=localStorage.getItem("token")||"";return"GET"===a?fetch(c,{method:a,headers:{"x-token":n}}):fetch(c,{method:a,headers:{"Content-type":"application/json","x-token":n},body:JSON.stringify(t)})},p="[auth] Finish cheking login state",f="[auth] login",g="[auth] Logout",v=a(26),N=a.n(v),w=function(){return{type:p}},k=function(e){return{type:f,payload:e}},y=function(){return{type:g}},S=a(1),C=function(){var e=Object(d.b)(),t=Object(c.useState)({email:"",password:""}),a=Object(j.a)(t,2),n=a[0],s=a[1],l=n.email,b=n.password,h=function(e){var t=e.target;s(Object(i.a)(Object(i.a)({},n),{},Object(o.a)({},t.name,t.value)))};return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("section",{className:"ftco-section",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsx)("div",{className:"row justify-content-center",children:Object(S.jsx)("div",{className:"col-md-12 col-lg-10",children:Object(S.jsxs)("div",{className:"wrap d-md-flex",children:[Object(S.jsx)("div",{className:"text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last",children:Object(S.jsxs)("div",{className:"text w-100",children:[Object(S.jsx)("h2",{children:"Bienvenido A El Buen Sabor"}),Object(S.jsx)("p",{children:"Aun No Tienes Una Cuenta?"}),Object(S.jsx)(r.b,{to:"/login/new-user",children:Object(S.jsx)("a",{href:"#!",className:"btn btn-white btn-outline-white",children:"Registrarse"})})]})}),Object(S.jsxs)("div",{className:"login-wrap p-4 p-lg-5",children:[Object(S.jsxs)("div",{className:"d-flex",children:[Object(S.jsx)("div",{className:"w-100",children:Object(S.jsx)("h3",{className:"mb-4",children:"Iniciar Sesi\xf3n"})}),Object(S.jsx)("div",{className:"w-100",children:Object(S.jsx)("p",{className:"social-media d-flex justify-content-end",children:Object(S.jsx)("a",{href:"#!",className:"social-icon d-flex align-items-center justify-content-center",children:Object(S.jsx)("span",{className:"fa fa-google"})})})})]}),Object(S.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(function(e,t){return function(){var a=Object(u.a)(m.a.mark((function a(c){var n,s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,x("auth/login",{email:e,password:t},"POST");case 2:return n=a.sent,a.next=5,n.json();case 5:s=a.sent,console.log(s),"Login OK"===s.msg?(localStorage.setItem("token",s.token),localStorage.setItem("token-init-date",(new Date).getTime()),c(k({uid:s.usuario.uid,name:s.usuario.nombre,resto:s.usuario}))):N.a.fire("Error","".concat(s.msg),"warning");case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(l,b))},className:"signin-form",children:[Object(S.jsxs)("div",{className:"form-group mb-3",children:[Object(S.jsx)("label",{className:"label",for:"name",children:"Email"}),Object(S.jsx)("input",{name:"email",type:"text",className:"form-control",placeholder:"Ej.email@gmail.com",required:!0,onChange:h})]}),Object(S.jsxs)("div",{className:"form-group mb-3",children:[Object(S.jsx)("label",{className:"label",for:"password",children:"Contrase\xf1a"}),Object(S.jsx)("input",{name:"password",type:"password",className:"form-control",placeholder:"Contrase\xf1a",required:!0,onChange:h})]}),Object(S.jsx)("div",{className:"form-group",children:Object(S.jsx)("button",{type:"submit",className:"form-control btn btn-primary submit px-3",children:"Iniciar Sesi\xf3n"})}),Object(S.jsxs)("div",{className:"form-group d-md-flex",children:[Object(S.jsx)("div",{className:"w-50 text-left",children:Object(S.jsxs)("label",{className:"checkbox-wrap checkbox-primary mb-0",children:["Remember Me",Object(S.jsx)("input",{type:"checkbox",checked:!0}),Object(S.jsx)("span",{className:"checkmark"})]})}),Object(S.jsx)("div",{className:"w-50 text-md-right",children:Object(S.jsx)("a",{href:"#!",children:"Forgot Password"})})]})]})]})]})})})})})})},E=function(){var e=Object(d.b)(),t=Object(c.useState)({nombre:"",apellido:"",email:"",password:"",telefono:"",rol:"USER_ROLE"}),a=Object(j.a)(t,2),n=a[0],s=a[1],l=n.nombre,b=n.apellido,h=n.email,O=n.password,p=n.telefono,f=n.rol,g=n.localidad,v=n.calle,w=n.numero,y=n.domicilio,C=function(e){var t,a,c=e.target;s(Object(i.a)(Object(i.a)({},n),{},(a={},Object(o.a)(a,c.name,c.value),Object(o.a)(a,"domicilio",(t={calle:v},Object(o.a)(t,c.name,c.value),Object(o.a)(t,"localidad",g),Object(o.a)(t,c.name,c.value),Object(o.a)(t,"numero",w),Object(o.a)(t,c.name,c.value),t)),a)))};return Object(S.jsx)("section",{className:"ftco-section",children:Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("div",{className:"row justify-content-center"}),Object(S.jsx)("div",{className:"row justify-content-center",children:Object(S.jsx)("div",{className:"col-md-12 col-lg-10",children:Object(S.jsxs)("div",{className:"wrap d-md-flex",children:[Object(S.jsx)("div",{className:"text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last",children:Object(S.jsxs)("div",{className:"text w-100",children:[Object(S.jsx)("h2",{children:"Bienvenido A El Buen Sabor"}),Object(S.jsx)("p",{children:"Si Ya Tienes Cuenta"}),Object(S.jsx)(r.b,{to:"/login",children:Object(S.jsx)("a",{href:"#!",className:"btn btn-white btn-outline-white",children:"Iniciar Sesi\xf3n"})})]})}),Object(S.jsxs)("div",{className:"login-wrap p-4 p-lg-5",children:[Object(S.jsxs)("div",{className:"d-flex",children:[Object(S.jsx)("div",{className:"w-100",children:Object(S.jsx)("h3",{className:"mb-4",children:"Registrarse"})}),Object(S.jsx)("div",{className:"w-100",children:Object(S.jsx)("p",{className:"social-media d-flex justify-content-end",children:Object(S.jsx)("a",{href:"#!",className:"social-icon d-flex align-items-center justify-content-center",children:Object(S.jsx)("span",{className:"fa fa-google"})})})})]}),Object(S.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(n),e(function(e,t,a,c,n,s,r){return function(){var l=Object(u.a)(m.a.mark((function l(o){var i,j;return m.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,x("usuarios",{nombre:e,apellido:t,email:a,password:c,telefono:n,rol:s,domicilio:r},"POST");case 2:return i=l.sent,l.next=5,i.json();case 5:"Login OK"===(j=l.sent).msg?(localStorage.setItem("token",j.token),localStorage.setItem("token-init-date",(new Date).getTime()),o(k({uid:j.usuario.uid,name:j.usuario.nombre}))):N.a.fire("","".concat(j.msg),"success");case 7:case"end":return l.stop()}}),l)})));return function(e){return l.apply(this,arguments)}}()}(l,b,h,O,p,f,y))},className:"signin-form",children:[Object(S.jsxs)("div",{className:"form-group mb-3",children:[Object(S.jsx)("label",{className:"label",for:"name",children:"Nombre"}),Object(S.jsx)("input",{name:"nombre",type:"text",className:"form-control",placeholder:"Ej. Jhon",required:!0,onChange:C})]}),Object(S.jsxs)("div",{className:"form-group mb-3",children:[Object(S.jsx)("label",{className:"label",for:"name",children:"Apellido"}),Object(S.jsx)("input",{name:"apellido",type:"text",className:"form-control",placeholder:"Ej. Doe ",required:!0,onChange:C})]}),Object(S.jsxs)("div",{className:"form-group mb-3",children:[Object(S.jsx)("label",{className:"label",for:"name",children:"Email"}),Object(S.jsx)("input",{name:"email",type:"text",className:"form-control",placeholder:"miemail@gmail.com",required:!0,onChange:C})]}),Object(S.jsxs)("div",{className:"form-group mb-3",children:[Object(S.jsx)("label",{className:"label",for:"password",children:"Contrase\xf1a"}),Object(S.jsx)("input",{name:"password",type:"password",className:"form-control",placeholder:"Contrase\xf1a",required:!0,onChange:C})]}),Object(S.jsxs)("div",{className:"form-group mb-3",children:[Object(S.jsx)("label",{className:"label",for:"name",children:"Telefono"}),Object(S.jsx)("input",{name:"telefono",type:"number",className:"form-control",placeholder:"2618754345",required:!0,onChange:C})]}),Object(S.jsx)("div",{className:"w-100",children:Object(S.jsx)("h3",{className:"mb-4",children:"Direcci\xf3n"})}),Object(S.jsxs)("div",{className:"form-group mb-3",children:[Object(S.jsx)("label",{className:"label",for:"name",children:"Localidad"}),Object(S.jsx)("input",{name:"localidad",type:"text",className:"form-control",placeholder:"Ej. Maipu",required:!0,onChange:C})]}),Object(S.jsxs)("div",{className:"form-group mb-3",children:[Object(S.jsx)("label",{className:"label",for:"name",children:"Calle"}),Object(S.jsx)("input",{name:"calle",type:"text",className:"form-control",placeholder:"Ej. Santa Teresa",required:!0,onChange:C})]}),Object(S.jsxs)("div",{className:"form-group mb-3",children:[Object(S.jsx)("label",{className:"label",for:"name",children:"Numero"}),Object(S.jsx)("input",{name:"numero",type:"number",className:"form-control",placeholder:"235",required:!0,onChange:C})]}),Object(S.jsx)("div",{className:"form-group",children:Object(S.jsx)("button",{type:"submit",className:"form-control btn btn-primary submit px-3",children:"Registrarse"})}),Object(S.jsxs)("div",{className:"form-group d-md-flex",children:[Object(S.jsx)("div",{className:"w-50 text-left",children:Object(S.jsxs)("label",{className:"checkbox-wrap checkbox-primary mb-0",children:["Recordarme",Object(S.jsx)("input",{type:"checkbox",checked:!0}),Object(S.jsx)("span",{className:"checkmark"})]})}),Object(S.jsx)("div",{className:"w-50 text-md-right",children:Object(S.jsx)("a",{href:"#!",children:"Olvide Mi Contrase\xf1a"})})]})]})]})]})})})]})})},T=(a(51),function(){var e=Object(d.c)((function(e){return e.auth.resto})),t=e.nombre,a=e.img,c=Object(d.b)();return Object(S.jsxs)("nav",{class:"navbar navbar-dark bg-dark navbar-expand-sm",children:[Object(S.jsxs)("a",{class:"navbar-brand",href:"#!",children:[Object(S.jsx)("img",{src:"https://miro.medium.com/max/320/0*_rAD9NgK7l6KSlNc.png",width:"60",height:"60",alt:"logo"}),"\xa0 El Buen Sabor"]}),Object(S.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar-list-4","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(S.jsx)("span",{class:"navbar-toggler-icon"})}),Object(S.jsx)("div",{class:"collapse navbar-collapse ml-auto",id:"navbar-list-4",children:Object(S.jsx)("ul",{class:"navbar-nav",children:Object(S.jsxs)("li",{class:"nav-item dropdown",children:[Object(S.jsx)("a",{class:"nav-link dropdown-toggle",href:"#!",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(S.jsx)("img",{src:a,width:"40",height:"40",class:"rounded-circle",alt:"profilePicture"})}),Object(S.jsxs)("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:[Object(S.jsxs)("a",{class:"dropdown-header",href:"#!",children:["Hola ",t," !"]}),Object(S.jsx)("div",{class:"dropdown-divider"}),Object(S.jsx)("a",{class:"dropdown-item",href:"#!",children:"Ver Mi Perfil"}),Object(S.jsx)("a",{class:"dropdown-item",href:"#!",onClick:function(){c((function(e){localStorage.clear(),e(y())}))},children:"Cerrar Sesi\xf3n"})]})]})})})]})}),D=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(T,{}),Object(S.jsx)("div",{children:Object(S.jsx)("h1",{children:"Lista De Comidas xD"})})]})},I=a(21),L=function(e){var t=e.isAuthenticated,a=e.component,c=Object(I.a)(e,["isAuthenticated","component"]);return Object(S.jsx)(l.b,Object(i.a)(Object(i.a)({},c),{},{component:function(e){return t?Object(S.jsx)(l.a,{to:"/"}):Object(S.jsx)(a,Object(i.a)({},e))}}))},A=function(e){var t=e.isAuthenticated,a=e.component,c=Object(I.a)(e,["isAuthenticated","component"]);return Object(S.jsx)(l.b,Object(i.a)(Object(i.a)({},c),{},{component:function(e){return t?Object(S.jsx)(a,Object(i.a)({},e)):Object(S.jsx)(l.a,{to:"/login"})}}))},q=a(34),_=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.auth})),a=t.checking,n=t.uid;return Object(c.useEffect)((function(){e(function(){var e=Object(u.a)(m.a.mark((function e(t){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth/renewtoken");case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,console.log(c),c.ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(k({uid:c._id,name:c.nombre,resto:c.usuario}))):t(w());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),console.log(a),a?Object(S.jsx)(q.MeteorRainLoading,{}):Object(S.jsx)(r.a,{children:Object(S.jsx)("div",{children:Object(S.jsxs)(l.d,{children:[Object(S.jsx)(L,{exact:!0,path:"/login",component:C,isAuthenticated:!!n}),Object(S.jsx)(L,{exact:!0,path:"/login/new-user",component:E}),Object(S.jsx)(A,{exact:!0,path:"/",component:D,isAuthenticated:!!n}),Object(S.jsx)(l.a,{path:"/"})]})})})},R=a(14),F=a(37),M={checking:!0},P=Object(R.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.payload),{},{checking:!1});case p:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});case g:return{checking:!1};default:return e}}}),B="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.d,J=Object(R.e)(P,B(Object(R.a)(F.a)));var G=function(){return Object(S.jsx)(d.a,{store:J,children:Object(S.jsx)(_,{})})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};s.a.render(Object(S.jsx)(G,{}),document.getElementById("root")),K()}},[[88,1,2]]]);
//# sourceMappingURL=main.6c071c95.chunk.js.map