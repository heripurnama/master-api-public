var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var d=0;return function(){return d<a.length?{done:!1,value:a[d++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,d,b){if(a==Array.prototype||a==Object.prototype)return a;a[d]=b.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var d=0;d<a.length;++d){var b=a[d];if(b&&b.Math==Math)return b}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,d){var b=$jscomp.propertyToPolyfillSymbol[d];if(null==b)return a[d];b=a[b];return void 0!==b?b:a[d]};$jscomp.polyfill=function(a,d,b,e){d&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,d,b,e):$jscomp.polyfillUnisolated(a,d,b,e))};$jscomp.polyfillUnisolated=function(a,d,b,e){b=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var f=a[e];if(!(f in b))return;b=b[f]}a=a[a.length-1];e=b[a];d=d(e);d!=e&&null!=d&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:d})};$jscomp.polyfillIsolated=function(a,d,b,e){var f=a.split(".");a=1===f.length;e=f[0];e=!a&&e in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var l=0;l<f.length-1;l++){var r=f[l];if(!(r in e))return;e=e[r]}f=f[f.length-1];b=$jscomp.IS_SYMBOL_NATIVE&&"es6"===b?e[f]:null;d=d(b);null!=d&&(a?$jscomp.defineProperty($jscomp.polyfills,f,{configurable:!0,writable:!0,value:d}):d!==b&&(void 0===$jscomp.propertyToPolyfillSymbol[f]&&(b=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[f]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(f):$jscomp.POLYFILL_PREFIX+b+"$"+f),$jscomp.defineProperty(e,$jscomp.propertyToPolyfillSymbol[f],{configurable:!0,writable:!0,value:d})))};$jscomp.initSymbol=function(){};$jscomp.polyfill("Symbol",function(a){if(a)return a;var d=function(l,r){this.$jscomp$symbol$id_=l;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:r})};d.prototype.toString=function(){return this.$jscomp$symbol$id_};var b="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0,f=function(l){if(this instanceof f)throw new TypeError("Symbol is not a constructor");return new d(b+(l||"")+"_"+e++,l)};return f},"es6","es3");$jscomp.polyfill("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var d="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),b=0;b<d.length;b++){var e=$jscomp.global[d[b]];"function"===typeof e&&"function"!=typeof e.prototype[a]&&$jscomp.defineProperty(e.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return a},"es6","es3");$jscomp.iteratorPrototype=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a};(function(a){function d(e){if(b[e])return b[e].exports;var f=b[e]={index:e,l:!1,exports:{}};return a[e].call(f.exports,f,f.exports,d),f.l=!0,f.exports}var b={};d(2)})([function(a,d,b){a.exports=b(1)},function(a,d,b){function e(c,g,h,k){return function(){if(-1===h.indexOf(v))throw Error("Public function Duitku payment (checkout."+c+") can't called at this time. Please reload page to call public funtion again.");var p=g.apply(null,arguments);return v=k,p}}function f(c){if(c.origin===w)switch(c=c.data,c.event){case "hide":n.isVisible()&&m.closeEvent&&m.closeEvent(c.data);t.hide();break;case "sendKey":u&&(n.postMessage({event:"key",key:u,lang:m.hasOwnProperty("defaultLanguage")?"string"===typeof m.defaultLanguage?m.defaultLanguage:"":""}),n.show(),v=x);break;case "result":c=c.data;var g=String(c.resultCode);try{"00"===g&&m.successEvent?m.successEvent(c):"01"===g&&m.pendingEvent?m.pendingEvent(c):-1===["00","01","OpenUrl"].indexOf(g)&&m.errorEvent?m.errorEvent(c):c.finish_redirect_url&&(window.location.href=c.finish_redirect_url)}catch(h){console.error(h)}t.hide();break;case "debug":break;default:throw Error("Invalid event data: "+c.event);}}function l(c){return function(g,h){if("defaultLanguage"!==g){var k=void 0===h?"undefined":r(h);if(c!==k)throw Error(g+" should be of type "+c);return!0}}}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(c){return typeof c}:function(c){return c&&"function"==typeof Symbol&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},B=function(){function c(g,h){for(var k=0;k<h.length;k++){var p=h[k];p.enumerable=p.enumerable||!1;p.configurable=!0;"value"in p&&(p.writable=!0);Object.defineProperty(g,p.key,p)}}return function(g,h,k){return h&&c(g.prototype,h),k&&c(g,k),g}}();a=(a=b(3))&&a.__esModule?a:{"default":a};var w=a["default"].host,y=w+a["default"].path,q=void 0,C=function(){function c(g){var h=document.createElement("iframe");h.src=y;h.id="duitku-payment";h.style.cssText="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 999999; border: 0;";this.pageUrl=y;this.clientKey=g;this.iframe=h;this.attached=!1}return B(c,[{key:"goHome",value:function(){return this.iframe.src=this.pageUrl,this.ensureAttached(),this}},{key:"postMessage",value:function(g){return this.ensureAttached(),setTimeout(function(){document.getElementById("duitku-payment").contentWindow.postMessage(g,w)},1E3),this}},{key:"hide",value:function(){return this.iframe.style.display="none",c.setParentStyle(!1),this.goHome(),this.detach(),this}},{key:"show",value:function(){return this.ensureAttached(),this.iframe.style.display="block",c.setParentStyle(!0),this}},{key:"isVisible",value:function(){return"none"!==this.iframe.style.display}},{key:"ensureAttached",value:function(){this.attached||this.attach()}},{key:"attach",value:function(g){this.attached||!document.body||"interactive"!==document.readyState&&"complete"!==document.readyState||(this.iframe.name=g?"payment_duitku"+g:"payment_duitku",document.body.appendChild(this.iframe),this.attached=!0)}},{key:"detach",value:function(){this.attached&&(this.iframe.parentNode.removeChild(this.iframe),this.attached=!1)}}],[{key:"setParentStyle",value:function(g){g?(q||(q={position:c.isMobile()?document.body.style.position:null,overflow:document.body.style.overflow,width:document.body.style.width,height:document.body.style.height,pageXOffset:window.pageXOffset,pageYOffset:window.pageYOffset}),document.body.style.overflow="hidden",document.body.style.width="100vw",document.body.style.height="100vh",c.isMobile()&&(document.body.style.position="fixed"),window.scroll(0,0)):q&&(c.isMobile()&&(document.body.style.position=q.position),document.body.style.overflow=q.overflow,document.body.style.width=q.width,document.body.style.height=q.height,window.scroll(q.pageXOffset,q.pageYOffset))}},{key:"isMobile",value:function(){return 568>window.innerWidth}}]),c}(),x="PopupView",v="unInitialized",n=void 0,u=void 0,z=void 0,m={},A={successEvent:l("function"),pendingEvent:l("function"),errorEvent:l("function"),closeEvent:l("function"),defaultLanguage:l("string")},t={hide:e("hide",function(){n.hide();u=null},["initialized","loading",x],"initialized"),init:e("init",function(c){console.log("Menyiapkan Duitku Payment ...");n=new C(c);n.attach();window.addEventListener("message",f)},["unInitialized"],"initialized"),process:e("process",function(c,g){if(!c)throw Error("referenceNumber is required");var h=m=g||{},k;for(k in h)if(h.hasOwnProperty(k)){if(!A[k])throw Error("Unsupported option "+k);(0,A[k])(k,h[k])}u=c;z=+new Date;n.attach(z);n.attached&&n.goHome().postMessage({event:"notify"})},["initialized","loading"],x)};t.init("duitku-pop");(function g(){"complete"===document.readyState?n&&n.attach():setTimeout(g,1E3)})();window.checkout=t},function(a,d,b){a.exports=b(0)},function(a){a.exports={host:"https://app-sandbox.duitku.com",path:"/checkout_duitku"}}]);
