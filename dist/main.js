!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=function(){let e=document.getElementById("Content"),t=document.createElement("div");t.setAttribute("class","projectContainer");let r=document.createElement("div");r.setAttribute("class","projectHolder");let n=document.createElement("div");n.setAttribute("class","projectItemHolder");let o=document.createElement("h1");o.setAttribute("class","projectTitle"),o.innerHTML="Projects";let l=document.createElement("button");l.setAttribute("class","projectAdd"),l.setAttribute("id","projectAdd"),l.innerHTML="+",r.appendChild(o),r.appendChild(l),t.appendChild(r),t.appendChild(n),e.appendChild(t);let c=document.createElement("div");c.setAttribute("class","taskContainer");let a=document.createElement("h1");a.setAttribute("class","taskTitle"),a.innerHTML="Tasks",c.appendChild(a),e.appendChild(c)}},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);var l=class{constructor(e,t,r,n){this.Title=e,this.Date=t,this.Description=r,this.Urgency=n}};var c=class{constructor(e,t){this.Title=e,this.currentTasks=[]||!1}createNewTask(e,t,r,n){let o=new l(e,t,r,n);this.currentTasks.push(o)}};o()();let a=document.querySelector("#projectAdd");const s=document.querySelectorAll("#ModalClose"),d=document.querySelector("#Submit");let i=new c("Default");i.createNewTask("Default Tasks","Today","a task to do today","4"),console.log(i),a.addEventListener("click",e=>{document.querySelector("#myModalProject").style.display="block"}),s.forEach(e=>{e.addEventListener("click",e=>{document.querySelector("#myModalProject").style.display="none";document.querySelector("#myModalTask").style.display="none"})}),d.addEventListener("click",e=>{document.querySelector("#myModalProject").style.display="none",addBookToLibrary()})}]);