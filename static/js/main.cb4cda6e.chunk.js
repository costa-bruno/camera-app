(this["webpackJsonpcamera-app"]=this["webpackJsonpcamera-app"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(5),c=t.n(o),s=t(3),l=t(6),i=t(1),u=t(2),m=t.n(u);t(12),t(13);var E=function(e){var a=Object(r.useState)({hasError:!1,errorMessage:""}),t=Object(i.a)(a,2),o=t[0],c=t[1],E=Object(r.useState)([]),p=Object(i.a)(E,2),f=p[0],g=p[1],b=Object(r.useState)({hasPreview:!1,previewUrl:""}),h=Object(i.a)(b,2),v=h[0],d=h[1];return Object(r.useEffect)((function(){console.log(o)}),[o]),Object(r.useEffect)((function(){console.log(f)}),[f]),Object(r.useEffect)((function(){console.log(v)}),[v]),n.a.createElement("div",{className:"app"},o.hasError&&n.a.createElement("div",{className:"errorScreen"},n.a.createElement("span",null,o.errorMessage)),n.a.createElement(m.a,{onCameraStart:console.log("STATUS::: Camera iniciada"),isFullscreen:!0,onCameraError:function(e){!function(e){console.log(e),!o.hasError&&c({hasError:!0,errorMessage:"Voc\xea precisa garantir permiss\xe3o de acesso \xe0 c\xe2mera para continuar."})}(e)},onTakePhoto:function(e){!function(e){console.log("Foto tirada"),console.log(e),g([].concat(Object(l.a)(f),[e]))}(e)},sizeFactor:1,idealFacingMode:u.FACING_MODES.ENVIRONMENT,isImageMirror:!1}),f.length>0&&n.a.createElement("div",{className:"gallery"},f.map((function(e,a){return n.a.createElement("div",{className:"photoContainer"},n.a.createElement("div",{className:"closeButton"},n.a.createElement("span",{className:"closeArrow"}),n.a.createElement("span",{className:"closeArrow"})),n.a.createElement("img",{src:e,alt:"thumbnail preview",key:a,onClick:function(){return a=e,void d(Object(s.a)({},v,{showPreview:!0,previewUrl:a}));var a}}))}))),f.length>0?n.a.createElement("button",{className:"finishButton"},"Concluir fotos"):n.a.createElement("button",{className:"returnButton"},"Voltar para Recex"))};c.a.render(n.a.createElement(E,null),document.getElementById("root"))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.cb4cda6e.chunk.js.map