!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/platform/6f9372f84543d2e419bb/",n(n.s=1)}({"./src/olo-widget.js":function(e,t){
/**
 * @preserve
 * @example: <script src="olo_widget.js?shorty-goldsteins-san-francisco" type="text/javascript" id="upserve-olo-script"><\/script>
 * the script element above uses the SPU in the query string to identify the store.
 * it's also important that the script element has id="upserve-olo-script"
 * secondly, clickable elements to open up the OLO widget should have class "upserve-olo-opener"
 # @author: upserve.com
 * @version: 0.1.0
 */
!function(e,t,n){var r={},o="https://app.upserve.com/s/",s="Upserve Widget: please check the script element that was copied--it should include id='upserve-olo-script'.",i="Upserve Widget: unable to determine store. Please check the code snippet copied from the Breadcrumb Online Ordering settings.",l="Upserve Widget: unable to find click targets. Make sure links or buttons have 'upserve-olo-opener' as a class.";try{var a=function(t){if(t.preventDefault(),e.screen.width<400||!r.cssLoaded){var n=e.open();return n.opener=null,n.location=o+r.spu,!1}c(t)},c=function(){r&&r.container||(r.container=u()),r.container.style.visibility="visible",r.container.style.display="flex",setTimeout((function(){r.section.classList.add("slide-in"),r.overlay.classList.add("fade-in")}),10)},d=function(){r.closer.classList.add("fade-out"),r.section.classList.add("slide-out"),r.section.classList.remove("slide-in"),r.overlay.classList.remove("fade-in"),setTimeout((function(){r.container.style.visibility="hidden",r.container.style.display="none",r.section.classList.remove("slide-out"),r.closer.classList.remove("fade-out")}),350)},u=function(){return r.container=t.createElement("div"),r.container.className="up-olo-container",r.overlay=t.createElement("div"),r.overlay.className="up-olo-overlay",r.section=t.createElement("section"),r.section.className="up-olo-section",r.iframe=t.createElement("iframe"),r.iframe.className="up-olo-iframe",r.iframe.setAttribute("frameborder",0),r.closer=t.createElement("div"),r.closer.className="up-olo-closer",r.closer.innerHTML="&times;",r.closer.setAttribute("role","button"),r.closer.setAttribute("aria-label","Close online ordering widget"),r.closer.addEventListener("click",d),r.spinner=t.createElement("div"),r.spinner.className="up-olo-spinner",r.spinnerLogo=t.createElement("div"),r.spinnerLogo.className="up-olo-logo",r.spinner.appendChild(r.spinnerLogo),r.section.appendChild(r.iframe),r.section.appendChild(r.spinner),r.container.appendChild(r.overlay),r.container.appendChild(r.section),r.container.appendChild(r.closer),r.iframe.src=o+r.spu,r.iframe.onload=function(e){r.spinner.classList.add("fade-out"),setTimeout((function(){r.spinner.style.visibility="hidden",r.spinner.style.display="none"}),450)},t.body.appendChild(r.container),r.container},p=t.getElementById("upserve-olo-script");if(!p)throw new Error(s);if(r.spu=p.getAttribute("src")&&p.getAttribute("src").split("?")[1],!r.spu||r.spu.length<3)throw new Error(i);r.style=t.createElement("link"),r.style.rel="stylesheet",r.style.media="all",r.style.crossOrigin="anonymous";var f=new URL(p.getAttribute("src")).origin;r.style.href="".concat(f,"/platform/6f9372f84543d2e419bb/olo-widget.6f9372f84543d2e419bb.css"),p.parentNode.appendChild(r.style);var m=0,v=setInterval((function(){r.style.sheet&&r.style.sheet.cssRules&&(r.cssLoaded=!0,clearInterval(v)),m>300&&clearInterval(v),m+=1}),50),y=t.querySelectorAll(".upserve-olo-MT-opener");if(y.length<1)throw new Error(l);y.forEach((function(e){e.addEventListener("click",a)}))}catch(t){e.console&&e.console.warn(t)}}(window,document)},"./styles/olo-widget.css":function(e,t,n){},1:function(e,t,n){n("./src/olo-widget.js"),e.exports=n("./styles/olo-widget.css")}});
//# sourceMappingURL=olo-widget.6f9372f84543d2e419bb.js.map