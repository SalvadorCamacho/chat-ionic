(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7Jqk":function(n,e,t){"use strict";t.r(e),t.d(e,"RegistroPageModule",function(){return u});var o=t("ofXK"),i=t("3Pt+"),r=t("TEn/"),a=t("tyNb"),b=t("fXoL"),s=t("FHRc");const c=[{path:"",component:(()=>{class n{constructor(n,e){this.auth=n,this.ruta=e}ngOnInit(){}registrar(){this.auth.registrer(this.email,this.name,this.password).then(n=>{this.ruta.navigate(["/home"]),alert("Bienvenido o bienvenida ")}).catch(n=>alert("Ocurri\xf3 un error: "+n))}}return n.\u0275fac=function(e){return new(e||n)(b.Lb(s.a),b.Lb(a.g))},n.\u0275cmp=b.Fb({type:n,selectors:[["app-registro"]],decls:25,vars:3,consts:[["color","secondary"],[1,"ion-text-center"],["padding",""],["src","assets/icon/registro.svg","alt","logo",1,"icon"],["position","floating"],["type","text","name","name",3,"ngModel","ngModelChange"],["type","email",3,"ngModel","ngModelChange"],["type","password","name","password",3,"ngModel","ngModelChange"],["expand","block","color","secondary",3,"click"],["routerLink","/login"]],template:function(n,e){1&n&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar",0),b.Ob(2,"ion-title"),b.Ob(3,"div",1),b.hc(4," Registro "),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(5,"ion-content",2),b.Mb(6,"img",3),b.Ob(7,"ion-item"),b.Ob(8,"ion-label",4),b.hc(9," Nombre de usuario "),b.Nb(),b.Ob(10,"ion-input",5),b.Wb("ngModelChange",function(n){return e.name=n}),b.Nb(),b.Nb(),b.Ob(11,"ion-item"),b.Ob(12,"ion-label",4),b.hc(13," Correo electr\xf3nico "),b.Nb(),b.Ob(14,"ion-input",6),b.Wb("ngModelChange",function(n){return e.email=n}),b.Nb(),b.Nb(),b.Ob(15,"ion-item"),b.Ob(16,"ion-label",4),b.hc(17," Contrase\xf1a "),b.Nb(),b.Ob(18,"ion-input",7),b.Wb("ngModelChange",function(n){return e.password=n}),b.Nb(),b.Nb(),b.Ob(19,"ion-button",8),b.Wb("click",function(){return e.registrar()}),b.hc(20," Registrarse "),b.Nb(),b.Mb(21,"br"),b.Ob(22,"div",1),b.Ob(23,"p",9),b.hc(24,"Ya tengo cuenta"),b.Nb(),b.Nb(),b.Nb()),2&n&&(b.Bb(10),b.bc("ngModel",e.name),b.Bb(4),b.bc("ngModel",e.email),b.Bb(4),b.bc("ngModel",e.password))},directives:[r.j,r.t,r.s,r.h,r.n,r.o,r.m,r.z,i.d,i.e,r.d,r.y,a.h],styles:[""]}),n})()}];let l=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=b.Jb({type:n}),n.\u0275inj=b.Ib({imports:[[a.i.forChild(c)],a.i]}),n})(),u=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=b.Jb({type:n}),n.\u0275inj=b.Ib({imports:[[o.b,i.a,r.u,l]]}),n})()}}]);