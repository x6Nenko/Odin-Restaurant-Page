(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n#content {\n    height: 100vh;\n}\n\n.hero-container {\n    display: flex;\n}\n\n.hero-image {\n    margin: 40px;\n    max-height: calc(100vh - 80px);\n}\n\n.hero-text {\n    margin: 60px;\n}\n\n.hero-text h1 {\n    font-size: 4rem;\n}\n\n.hero-text p {\n    font-size: 2rem;\n    margin-top: 20px;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"6beffe3b3f9cdea8e98d.jpg";var n=t(379),r=t.n(n),o=t(795),a=t.n(o),c=t(569),i=t.n(c),s=t(565),d=t.n(s),l=t(216),u=t.n(l),p=t(589),m=t.n(p),f=t(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,document.getElementById("content").appendChild(document.createElement("nav"));const y=document.querySelector("nav");(function(){document.getElementById("content").appendChild(document.createElement("main")).classList.add("hero-container");const n=document.querySelector(".hero-container");n.appendChild(document.createElement("img")).classList.add("hero-image");const t=document.querySelector(".hero-image");t.src=e,t.alt="Restaurant",n.appendChild(document.createElement("article")).classList.add("hero-text");const r=document.querySelector(".hero-text");r.appendChild(document.createElement("h1")).innerHTML="Savor Culinary Delights for the Internet Cowboys!",r.appendChild(document.createElement("p")).innerHTML="Indulge in Exquisite Flavors and Unforgettable Dining Experiences."})(),document.getElementById("content").appendChild(document.createElement("div")).classList.add("menu-container"),document.querySelector(".menu-container").appendChild(document.createElement("h1")).innerText="Menu page",document.getElementById("content").appendChild(document.createElement("div")).classList.add("contact-container"),document.querySelector(".contact-container").appendChild(document.createElement("h1")).innerText="Contact page";const v=document.querySelector(".hero-container"),g=document.querySelector(".menu-container");g.style.display="none";const x=document.querySelector(".contact-container");x.style.display="none",y.appendChild(document.createElement("a")).id="heroLink";const E=document.getElementById("heroLink");E.innerText="Home",E.href="#",E.addEventListener("click",(function(){v.style.display="flex",g.style.display="none",x.style.display="none"})),y.appendChild(document.createElement("a")).id="menuLink";const b=document.getElementById("menuLink");b.innerText="Menu",b.href="#",b.addEventListener("click",(function(){v.style.display="none",g.style.display="block",x.style.display="none"})),y.appendChild(document.createElement("a")).id="contactLink";const C=document.getElementById("contactLink");C.innerText="Contact",C.href="#",C.addEventListener("click",(function(){v.style.display="none",g.style.display="none",x.style.display="block"}))})()})();