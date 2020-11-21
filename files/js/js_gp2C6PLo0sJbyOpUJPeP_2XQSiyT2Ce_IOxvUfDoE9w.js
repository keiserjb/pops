/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.11.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(n){var i={};function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=11)}([,,function(e,t,n){"use strict";e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},,function(n,e,t){"use strict";(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},n.exports=t}).call(this,t(5))},function(e,t,n){"use strict";var i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(i=window)}e.exports=i},,,,,,function(e,t,n){e.exports=n(12)},function(e,t,n){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=l(n(2)),a=n(4),r=l(n(13));function l(e){return e&&e.__esModule?e:{default:e}}var s=a.window.jarallax;if(a.window.jarallax=r.default,a.window.jarallax.noConflict=function(){return a.window.jarallax=s,this},void 0!==a.jQuery){var c=function(){var e=arguments||[];Array.prototype.unshift.call(e,this);var t=r.default.apply(a.window,e);return"object"!==(void 0===t?"undefined":i(t))?t:this};c.constructor=r.default.constructor;var u=a.jQuery.fn.jarallax;a.jQuery.fn.jarallax=c,a.jQuery.fn.jarallax.noConflict=function(){return a.jQuery.fn.jarallax=u,this}}(0,o.default)(function(){(0,r.default)(document.querySelectorAll("[data-jarallax]"))})},function(e,I,P){"use strict";(function(e){Object.defineProperty(I,"__esModule",{value:!0});var s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(i=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&l.return&&l.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},t=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e};function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=r(P(2)),o=r(P(14)),a=P(4);function r(e){return e&&e.__esModule?e:{default:e}}var u=-1<navigator.userAgent.indexOf("MSIE ")||-1<navigator.userAgent.indexOf("Trident/")||-1<navigator.userAgent.indexOf("Edge/"),l=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),d=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),n=0;n<e.length;n++)if(t&&void 0!==t.style[e[n]])return e[n];return!1}(),m=void 0;var v=void 0,b=void 0,p=void 0,f=!1,g=!1;function y(e){v=a.window.innerWidth||document.documentElement.clientWidth,b=l?(!m&&document.body&&((m=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(m)),(m?m.clientHeight:0)||a.window.innerHeight||document.documentElement.clientHeight):a.window.innerHeight||document.documentElement.clientHeight,"object"!==(void 0===e?"undefined":c(e))||"load"!==e.type&&"dom-loaded"!==e.type||(f=!0)}y(),a.window.addEventListener("resize",y),a.window.addEventListener("orientationchange",y),a.window.addEventListener("load",y),(0,n.default)(function(){y({type:"dom-loaded"})});var h=[],x=!1;function w(){if(h.length){p=void 0!==a.window.pageYOffset?a.window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;var t=f||!x||x.width!==v||x.height!==b,n=g||t||!x||x.y!==p;g=f=!1,(t||n)&&(h.forEach(function(e){t&&e.onResize(),n&&e.onScroll()}),x={width:v,height:b,y:p}),(0,o.default)(w)}}var A=!!e.ResizeObserver&&new e.ResizeObserver(function(e){e&&e.length&&(0,o.default)(function(){e.forEach(function(e){e.target&&e.target.jarallax&&(f||e.target.jarallax.onResize(),g=!0)})})}),$=0,S=(t(j,[{key:"css",value:function(t,n){return"string"==typeof n?a.window.getComputedStyle(t).getPropertyValue(n):(n.transform&&d&&(n[d]=n.transform),Object.keys(n).forEach(function(e){t.style[e]=n[e]}),t)}},{key:"extend",value:function(n){var i=arguments;return n=n||{},Object.keys(arguments).forEach(function(t){i[t]&&Object.keys(i[t]).forEach(function(e){n[e]=i[t][e]})}),n}},{key:"getWindowData",value:function(){return{width:v,height:b,y:p}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return t&&"string"==typeof t&&(t=e.$item.querySelector(t)),t instanceof Element||(t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!(!e.image.$item&&(null===e.image.src&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.image.bgImage=e.css(e.$item,"background-image")),!e.image.bgImage||"none"===e.image.bgImage))}},{key:"canInitParallax",value:function(){return d&&!this.options.disableParallax()}},{key:"init",value:function(){var e=this,t={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},n={};if(!e.options.keepImg){var i=e.$item.getAttribute("style");if(i&&e.$item.setAttribute("data-jarallax-original-styles",i),e.image.useImgTag){var o=e.image.$item.getAttribute("style");o&&e.image.$item.setAttribute("data-jarallax-original-styles",o)}}if("static"===e.css(e.$item,"position")&&e.css(e.$item,{position:"relative"}),"auto"===e.css(e.$item,"z-index")&&e.css(e.$item,{zIndex:0}),e.image.$container=document.createElement("div"),e.css(e.image.$container,t),e.css(e.image.$container,{"z-index":e.options.zIndex}),u&&e.css(e.image.$container,{opacity:.9999}),e.image.$container.setAttribute("id","jarallax-container-"+e.instanceID),e.$item.appendChild(e.image.$container),e.image.useImgTag?n=e.extend({"object-fit":e.options.imgSize,"object-position":e.options.imgPosition,"font-family":"object-fit: "+e.options.imgSize+"; object-position: "+e.options.imgPosition+";","max-width":"none"},t,n):(e.image.$item=document.createElement("div"),e.image.src&&(n=e.extend({"background-position":e.options.imgPosition,"background-size":e.options.imgSize,"background-repeat":e.options.imgRepeat,"background-image":e.image.bgImage||'url("'+e.image.src+'")'},t,n))),"opacity"!==e.options.type&&"scale"!==e.options.type&&"scale-opacity"!==e.options.type&&1!==e.options.speed||(e.image.position="absolute"),"fixed"===e.image.position)for(var a=0,r=e.$item;null!==r&&r!==document&&0===a;){var l=e.css(r,"-webkit-transform")||e.css(r,"-moz-transform")||e.css(r,"transform");l&&"none"!==l&&(a=1,e.image.position="absolute"),r=r.parentNode}n.position=e.image.position,e.css(e.image.$item,n),e.image.$container.appendChild(e.image.$item),e.onResize(),e.onScroll(!0),e.options.automaticResize&&A&&A.observe(e.$item),e.options.onInit&&e.options.onInit.call(e),"none"!==e.css(e.$item,"background-image")&&e.css(e.$item,{"background-image":"none"}),e.addToParallaxList()}},{key:"addToParallaxList",value:function(){h.push(this),1===h.length&&w()}},{key:"removeFromParallaxList",value:function(){var n=this;h.forEach(function(e,t){e.instanceID===n.instanceID&&h.splice(t,1)})}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t=e.$item.getAttribute("data-jarallax-original-styles");if(e.$item.removeAttribute("data-jarallax-original-styles"),t?e.$item.setAttribute("style",t):e.$item.removeAttribute("style"),e.image.useImgTag){var n=e.image.$item.getAttribute("data-jarallax-original-styles");e.image.$item.removeAttribute("data-jarallax-original-styles"),n?e.image.$item.setAttribute("style",t):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)}e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){if("fixed"===this.image.position){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.width,i=t.height;e.$clipStyles||(e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-"+e.instanceID),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles));var o="#jarallax-container-"+e.instanceID+" {\n           clip: rect(0 "+n+"px "+i+"px 0);\n           clip: rect(0, "+n+"px, "+i+"px, 0);\n        }";e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=o:e.$clipStyles.innerHTML=o}}},{key:"coverImage",value:function(){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.height,i=e.options.speed,o="scroll"===e.options.type||"scroll-opacity"===e.options.type,a=0,r=n,l=0;return o&&(i<0?(a=i*Math.max(n,b),b<n&&(a-=i*(n-b))):a=i*(n+b),1<i?r=Math.abs(a-b):i<0?r=a/i+Math.abs(a):r+=(b-n)*(1-i),a/=2),e.parallaxScrollDistance=a,l=o?(b-r)/2:(n-r)/2,e.css(e.image.$item,{height:r+"px",marginTop:l+"px",left:"fixed"===e.image.position?t.left+"px":"0",width:t.width+"px"}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:r,marginTop:l},container:t}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t=this,n=t.$item.getBoundingClientRect(),i=n.top,o=n.height,a={},r=n;if(t.options.elementInViewport&&(r=t.options.elementInViewport.getBoundingClientRect()),t.isElementInViewport=0<=r.bottom&&0<=r.right&&r.top<=b&&r.left<=v,e||t.isElementInViewport){var l=Math.max(0,i),s=Math.max(0,o+i),c=Math.max(0,-i),u=Math.max(0,i+o-b),d=Math.max(0,o-(i+o-b)),m=Math.max(0,-i+b-o),p=1-2*(b-i)/(b+o),f=1;if(o<b?f=1-(c||u)/o:s<=b?f=s/b:d<=b&&(f=d/b),"opacity"!==t.options.type&&"scale-opacity"!==t.options.type&&"scroll-opacity"!==t.options.type||(a.transform="translate3d(0,0,0)",a.opacity=f),"scale"===t.options.type||"scale-opacity"===t.options.type){var g=1;t.options.speed<0?g-=t.options.speed*f:g+=t.options.speed*(1-f),a.transform="scale("+g+") translate3d(0,0,0)"}if("scroll"===t.options.type||"scroll-opacity"===t.options.type){var y=t.parallaxScrollDistance*p;"absolute"===t.image.position&&(y-=i),a.transform="translate3d(0,"+y+"px,0)"}t.css(t.image.$item,a),t.options.onScroll&&t.options.onScroll.call(t,{section:n,beforeTop:l,beforeTopEnd:s,afterTop:c,beforeBottom:u,beforeBottomEnd:d,afterBottom:m,visiblePercent:f,fromViewportCenter:p})}}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}]),j);function j(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,j);var n=this;n.instanceID=$++,n.$item=e,n.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,automaticResize:!0,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var i=n.$item.dataset||{},o={};if(Object.keys(i).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==n.defaults[t]&&(o[t]=i[e])}),n.options=n.extend({},n.defaults,o,t),n.pureOptions=n.extend({},n.options),Object.keys(n.options).forEach(function(e){"true"===n.options[e]?n.options[e]=!0:"false"===n.options[e]&&(n.options[e]=!1)}),n.options.speed=Math.min(2,Math.max(-1,parseFloat(n.options.speed))),"string"==typeof n.options.disableParallax&&(n.options.disableParallax=new RegExp(n.options.disableParallax)),n.options.disableParallax instanceof RegExp){var a=n.options.disableParallax;n.options.disableParallax=function(){return a.test(navigator.userAgent)}}if("function"!=typeof n.options.disableParallax&&(n.options.disableParallax=function(){return!1}),"string"==typeof n.options.disableVideo&&(n.options.disableVideo=new RegExp(n.options.disableVideo)),n.options.disableVideo instanceof RegExp){var r=n.options.disableVideo;n.options.disableVideo=function(){return r.test(navigator.userAgent)}}"function"!=typeof n.options.disableVideo&&(n.options.disableVideo=function(){return!1});var l=n.options.elementInViewport;l&&"object"===(void 0===l?"undefined":c(l))&&void 0!==l.length&&(l=s(l,1)[0]);l instanceof Element||(l=null),n.options.elementInViewport=l,n.image={src:n.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(navigator.userAgent)?"absolute":"fixed"},n.initImg()&&n.canInitParallax()&&n.init()}function E(e,t){("object"===("undefined"==typeof HTMLElement?"undefined":c(HTMLElement))?e instanceof HTMLElement:e&&"object"===(void 0===e?"undefined":c(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);for(var n=t,i=Array.prototype.slice.call(arguments,2),o=e.length,a=0,r=void 0;a<o;a++)if("object"===(void 0===n?"undefined":c(n))||void 0===n?e[a].jarallax||(e[a].jarallax=new S(e[a],n)):e[a].jarallax&&(r=e[a].jarallax[n].apply(e[a].jarallax,i)),void 0!==r)return r;return e}E.constructor=S,I.default=E}).call(this,P(5))},function(e,t,n){"use strict";var i=n(15),o=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||function(e){var t=+new Date,n=Math.max(0,16-(t-a)),i=setTimeout(e,n);return a=t,i},a=+new Date;var r=i.cancelAnimationFrame||i.webkitCancelAnimationFrame||i.mozCancelAnimationFrame||clearTimeout;Function.prototype.bind&&(o=o.bind(i),r=r.bind(i)),(e.exports=o).cancel=r},function(n,e,t){"use strict";(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},n.exports=t}).call(this,t(5))}]);
//# sourceMappingURL=jarallax.min.js.map
;
/*!
 * Name    : Elements Extension for Jarallax
 * Version : 1.0.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";var o=r(n(2));function r(t){return t&&t.__esModule?t:{default:t}}(0,r(n(3)).default)(),(0,o.default)(function(){"undefined"!=typeof jarallax&&jarallax(document.querySelectorAll("[data-jarallax-element]"))})},function(t,e,n){"use strict";t.exports=function(t){"complete"===document.readyState||"interactive"===document.readyState?t.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&t.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i.default.jarallax;if(void 0===t)return;var e=t.constructor;["initImg","canInitParallax","init","destroy","clipContainer","coverImage","isVisible","onScroll","onResize"].forEach(function(f){var y=e.prototype[f];e.prototype[f]=function(){var t=this,e=arguments||[];if("initImg"===f&&null!==t.$item.getAttribute("data-jarallax-element")&&(t.options.type="element",t.pureOptions.speed=t.$item.getAttribute("data-jarallax-element")||t.pureOptions.speed),"element"!==t.options.type)return y.apply(t,e);switch(t.pureOptions.threshold=t.$item.getAttribute("data-threshold")||"",f){case"init":var n=t.pureOptions.speed.split(" ");t.options.speed=t.pureOptions.speed||0,t.options.speedY=n[0]?parseFloat(n[0]):0,t.options.speedX=n[1]?parseFloat(n[1]):0;var o=t.pureOptions.threshold.split(" ");t.options.thresholdY=o[0]?parseFloat(o[0]):null,t.options.thresholdX=o[1]?parseFloat(o[1]):null,y.apply(t,e);var r=t.$item.getAttribute("data-jarallax-original-styles");return r&&t.$item.setAttribute("style",r),!0;case"onResize":var i=t.css(t.$item,"transform");t.css(t.$item,{transform:""});var a=t.$item.getBoundingClientRect();t.itemData={width:a.width,height:a.height,y:a.top+t.getWindowData().y,x:a.left},t.css(t.$item,{transform:i});break;case"onScroll":var l=t.getWindowData(),s=(l.y+l.height/2-t.itemData.y-t.itemData.height/2)/(l.height/2),u=s*t.options.speedY,c=s*t.options.speedX,d=u,p=c;null!==t.options.thresholdY&&u>t.options.thresholdY&&(d=0),null!==t.options.thresholdX&&c>t.options.thresholdX&&(p=0),t.css(t.$item,{transform:"translate3d("+p+"px,"+d+"px,0)"});break;case"initImg":case"isVisible":case"clipContainer":case"coverImage":return!0}return y.apply(t,e)}})};var o,r=n(4),i=(o=r)&&o.__esModule?o:{default:o}},function(n,t,e){"use strict";(function(t){var e;e="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},n.exports=e}).call(this,e(5))},function(t,e,n){"use strict";var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(o=window)}t.exports=o}]);
//# sourceMappingURL=jarallax-element.min.js.map
;
/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(o){var i={};function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=o,n.c=i,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([,,function(e,t,o){"use strict";e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},,function(o,e,t){"use strict";(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o.exports=t}).call(this,t(5))},function(e,t,o){"use strict";var i,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(i=window)}e.exports=i},function(e,t,o){e.exports=o(7)},function(e,t,o){"use strict";var i=l(o(8)),n=l(o(4)),a=l(o(2)),r=l(o(10));function l(e){return e&&e.__esModule?e:{default:e}}n.default.VideoWorker=n.default.VideoWorker||i.default,(0,r.default)(),(0,a.default)(function(){"undefined"!=typeof jarallax&&jarallax(document.querySelectorAll("[data-jarallax-video]"))})},function(e,t,o){"use strict";e.exports=o(9)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t,o){return t&&a(e.prototype,t),o&&a(e,o),e};function a(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(){this._done=[],this._fail=[]}r.prototype={execute:function(e,t){var o=e.length;for(t=Array.prototype.slice.call(t);o--;)e[o].apply(null,t)},resolve:function(){this.execute(this._done,arguments)},reject:function(){this.execute(this._fail,arguments)},done:function(e){this._done.push(e)},fail:function(e){this._fail.push(e)}};var l=0,p=0,u=0,d=0,s=0,y=new r,c=new r,v=(n(m,[{key:"extend",value:function(o){var i=arguments;return o=o||{},Object.keys(arguments).forEach(function(t){i[t]&&Object.keys(i[t]).forEach(function(e){o[e]=i[t][e]})}),o}},{key:"parseURL",value:function(e){var t,o,i,n,a,r=!(!(t=e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/))||11!==t[1].length)&&t[1],l=!(!(o=e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/))||!o[3])&&o[3],p=(i=e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),n={},a=0,i.forEach(function(e){var t=e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);t&&t[1]&&t[2]&&(n["ogv"===t[1]?"ogg":t[1]]=t[2],a=1)}),!!a&&n);return r?(this.type="youtube",r):l?(this.type="vimeo",l):!!p&&(this.type="local",p)}},{key:"isValid",value:function(){return!!this.videoID}},{key:"on",value:function(e,t){this.userEventsList=this.userEventsList||[],(this.userEventsList[e]||(this.userEventsList[e]=[])).push(t)}},{key:"off",value:function(o,i){var n=this;this.userEventsList&&this.userEventsList[o]&&(i?this.userEventsList[o].forEach(function(e,t){e===i&&(n.userEventsList[o][t]=!1)}):delete this.userEventsList[o])}},{key:"fire",value:function(e){var t=this,o=[].slice.call(arguments,1);this.userEventsList&&void 0!==this.userEventsList[e]&&this.userEventsList[e].forEach(function(e){e&&e.apply(t,o)})}},{key:"play",value:function(e){var t=this;t.player&&("youtube"===t.type&&t.player.playVideo&&(void 0!==e&&t.player.seekTo(e||0),YT.PlayerState.PLAYING!==t.player.getPlayerState()&&t.player.playVideo()),"vimeo"===t.type&&(void 0!==e&&t.player.setCurrentTime(e),t.player.getPaused().then(function(e){e&&t.player.play()})),"local"===t.type&&(void 0!==e&&(t.player.currentTime=e),t.player.paused&&t.player.play()))}},{key:"pause",value:function(){var t=this;t.player&&("youtube"===t.type&&t.player.pauseVideo&&YT.PlayerState.PLAYING===t.player.getPlayerState()&&t.player.pauseVideo(),"vimeo"===t.type&&t.player.getPaused().then(function(e){e||t.player.pause()}),"local"===t.type&&(t.player.paused||t.player.pause()))}},{key:"mute",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.mute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(0),"local"===e.type&&(e.$video.muted=!0))}},{key:"unmute",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.unMute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(e.options.volume),"local"===e.type&&(e.$video.muted=!1))}},{key:"setVolume",value:function(e){var t=0<arguments.length&&void 0!==e&&e,o=this;o.player&&t&&("youtube"===o.type&&o.player.setVolume&&o.player.setVolume(t),"vimeo"===o.type&&o.player.setVolume&&o.player.setVolume(t),"local"===o.type&&(o.$video.volume=t/100))}},{key:"getVolume",value:function(t){var e=this;e.player?("youtube"===e.type&&e.player.getVolume&&t(e.player.getVolume()),"vimeo"===e.type&&e.player.getVolume&&e.player.getVolume().then(function(e){t(e)}),"local"===e.type&&t(100*e.$video.volume)):t(!1)}},{key:"getMuted",value:function(t){var e=this;e.player?("youtube"===e.type&&e.player.isMuted&&t(e.player.isMuted()),"vimeo"===e.type&&e.player.getVolume&&e.player.getVolume().then(function(e){t(!!e)}),"local"===e.type&&t(e.$video.muted)):t(null)}},{key:"getImageURL",value:function(t){var o=this;if(o.videoImage)t(o.videoImage);else{if("youtube"===o.type){var e=["maxresdefault","sddefault","hqdefault","0"],i=0,n=new Image;n.onload=function(){120!==(this.naturalWidth||this.width)||i===e.length-1?(o.videoImage="https://img.youtube.com/vi/"+o.videoID+"/"+e[i]+".jpg",t(o.videoImage)):(i++,this.src="https://img.youtube.com/vi/"+o.videoID+"/"+e[i]+".jpg")},n.src="https://img.youtube.com/vi/"+o.videoID+"/"+e[i]+".jpg"}if("vimeo"===o.type){var a=new XMLHttpRequest;a.open("GET","https://vimeo.com/api/v2/video/"+o.videoID+".json",!0),a.onreadystatechange=function(){if(4===this.readyState&&200<=this.status&&this.status<400){var e=JSON.parse(this.responseText);o.videoImage=e[0].thumbnail_large,t(o.videoImage)}},a.send(),a=null}}}},{key:"getIframe",value:function(e){this.getVideo(e)}},{key:"getVideo",value:function(p){var u=this;u.$video?p(u.$video):u.onAPIready(function(){var e=void 0;if(u.$video||((e=document.createElement("div")).style.display="none"),"youtube"===u.type){u.playerOptions={},u.playerOptions.videoId=u.videoID,u.playerOptions.playerVars={autohide:1,rel:0,autoplay:0,playsinline:1},u.options.showContols||(u.playerOptions.playerVars.iv_load_policy=3,u.playerOptions.playerVars.modestbranding=1,u.playerOptions.playerVars.controls=0,u.playerOptions.playerVars.showinfo=0,u.playerOptions.playerVars.disablekb=1);var t=void 0,o=void 0;u.playerOptions.events={onReady:function(t){u.options.mute?t.target.mute():u.options.volume&&t.target.setVolume(u.options.volume),u.options.autoplay&&u.play(u.options.startTime),u.fire("ready",t),u.options.loop&&!u.options.endTime&&(u.options.endTime=u.player.getDuration()-.1),setInterval(function(){u.getVolume(function(e){u.options.volume!==e&&(u.options.volume=e,u.fire("volumechange",t))})},150)},onStateChange:function(e){u.options.loop&&e.data===YT.PlayerState.ENDED&&u.play(u.options.startTime),t||e.data!==YT.PlayerState.PLAYING||(t=1,u.fire("started",e)),e.data===YT.PlayerState.PLAYING&&u.fire("play",e),e.data===YT.PlayerState.PAUSED&&u.fire("pause",e),e.data===YT.PlayerState.ENDED&&u.fire("ended",e),e.data===YT.PlayerState.PLAYING?o=setInterval(function(){u.fire("timeupdate",e),u.options.endTime&&u.player.getCurrentTime()>=u.options.endTime&&(u.options.loop?u.play(u.options.startTime):u.pause())},150):clearInterval(o)}};var i=!u.$video;if(i){var n=document.createElement("div");n.setAttribute("id",u.playerID),e.appendChild(n),document.body.appendChild(e)}u.player=u.player||new window.YT.Player(u.playerID,u.playerOptions),i&&(u.$video=document.getElementById(u.playerID),u.videoWidth=parseInt(u.$video.getAttribute("width"),10)||1280,u.videoHeight=parseInt(u.$video.getAttribute("height"),10)||720)}if("vimeo"===u.type){if(u.playerOptions={id:u.videoID,autopause:0,transparent:0,autoplay:u.options.autoplay?1:0,loop:u.options.loop?1:0,muted:u.options.mute?1:0},u.options.volume&&(u.playerOptions.volume=u.options.volume),u.options.showContols||(u.playerOptions.badge=0,u.playerOptions.byline=0,u.playerOptions.portrait=0,u.playerOptions.title=0),!u.$video){var a="";Object.keys(u.playerOptions).forEach(function(e){""!==a&&(a+="&"),a+=e+"="+encodeURIComponent(u.playerOptions[e])}),u.$video=document.createElement("iframe"),u.$video.setAttribute("id",u.playerID),u.$video.setAttribute("src","https://player.vimeo.com/video/"+u.videoID+"?"+a),u.$video.setAttribute("frameborder","0"),u.$video.setAttribute("mozallowfullscreen",""),u.$video.setAttribute("allowfullscreen",""),e.appendChild(u.$video),document.body.appendChild(e)}u.player=u.player||new Vimeo.Player(u.$video,u.playerOptions),u.options.startTime&&u.options.autoplay&&u.player.setCurrentTime(u.options.startTime),u.player.getVideoWidth().then(function(e){u.videoWidth=e||1280}),u.player.getVideoHeight().then(function(e){u.videoHeight=e||720});var r=void 0;u.player.on("timeupdate",function(e){r||(u.fire("started",e),r=1),u.fire("timeupdate",e),u.options.endTime&&u.options.endTime&&e.seconds>=u.options.endTime&&(u.options.loop?u.play(u.options.startTime):u.pause())}),u.player.on("play",function(e){u.fire("play",e),u.options.startTime&&0===e.seconds&&u.play(u.options.startTime)}),u.player.on("pause",function(e){u.fire("pause",e)}),u.player.on("ended",function(e){u.fire("ended",e)}),u.player.on("loaded",function(e){u.fire("ready",e)}),u.player.on("volumechange",function(e){u.fire("volumechange",e)})}if("local"===u.type){u.$video||(u.$video=document.createElement("video"),u.options.showContols&&(u.$video.controls=!0),u.options.mute?u.$video.muted=!0:u.$video.volume&&(u.$video.volume=u.options.volume/100),u.options.loop&&(u.$video.loop=!0),u.$video.setAttribute("playsinline",""),u.$video.setAttribute("webkit-playsinline",""),u.$video.setAttribute("id",u.playerID),e.appendChild(u.$video),document.body.appendChild(e),Object.keys(u.videoID).forEach(function(e){!function(e,t,o){var i=document.createElement("source");i.src=t,i.type=o,e.appendChild(i)}(u.$video,u.videoID[e],"video/"+e)})),u.player=u.player||u.$video;var l=void 0;u.player.addEventListener("playing",function(e){l||u.fire("started",e),l=1}),u.player.addEventListener("timeupdate",function(e){u.fire("timeupdate",e),u.options.endTime&&u.options.endTime&&this.currentTime>=u.options.endTime&&(u.options.loop?u.play(u.options.startTime):u.pause())}),u.player.addEventListener("play",function(e){u.fire("play",e)}),u.player.addEventListener("pause",function(e){u.fire("pause",e)}),u.player.addEventListener("ended",function(e){u.fire("ended",e)}),u.player.addEventListener("loadedmetadata",function(){u.videoWidth=this.videoWidth||1280,u.videoHeight=this.videoHeight||720,u.fire("ready"),u.options.autoplay&&u.play(u.options.startTime)}),u.player.addEventListener("volumechange",function(e){u.getVolume(function(e){u.options.volume=e}),u.fire("volumechange",e)})}p(u.$video)})}},{key:"init",value:function(){this.playerID="VideoWorker-"+this.ID}},{key:"loadAPI",value:function(){if(!p||!u){var e="";if("youtube"!==this.type||p||(p=1,e="https://www.youtube.com/iframe_api"),"vimeo"!==this.type||u||(u=1,e="https://player.vimeo.com/api/player.js"),e){var t=document.createElement("script"),o=document.getElementsByTagName("head")[0];t.src=e,o.appendChild(t),t=o=null}}}},{key:"onAPIready",value:function(e){if("youtube"===this.type&&("undefined"!=typeof YT&&0!==YT.loaded||d?"object"===("undefined"==typeof YT?"undefined":i(YT))&&1===YT.loaded?e():y.done(function(){e()}):(d=1,window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady=null,y.resolve("done"),e()})),"vimeo"===this.type)if("undefined"!=typeof Vimeo||s)"undefined"!=typeof Vimeo?e():c.done(function(){e()});else{s=1;var t=setInterval(function(){"undefined"!=typeof Vimeo&&(clearInterval(t),c.resolve("done"),e())},20)}"local"===this.type&&e()}}]),m);function m(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m);var o=this;o.url=e,o.options_default={autoplay:!1,loop:!1,mute:!1,volume:100,showContols:!0,startTime:0,endTime:0},o.options=o.extend({},o.options_default,t),o.videoID=o.parseURL(e),o.videoID&&(o.ID=l++,o.loadAPI(),o.init())}t.default=v},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:p.default.jarallax;if(void 0===e)return;var t=e.constructor,i=t.prototype.onScroll;t.prototype.onScroll=function(){var o=this;i.apply(o),o.isVideoInserted||!o.video||o.options.videoLazyLoading&&!o.isElementInViewport||o.options.disableVideo()||(o.isVideoInserted=!0,o.video.getVideo(function(e){var t=e.parentNode;o.css(e,{position:o.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",margin:0,zIndex:-1}),o.$video=e,o.image.$container.appendChild(e),t.parentNode.removeChild(t)}))};var l=t.prototype.coverImage;t.prototype.coverImage=function(){var e=this,t=l.apply(e),o=!!e.image.$item&&e.image.$item.nodeName;if(t&&e.video&&o&&("IFRAME"===o||"VIDEO"===o)){var i=t.image.height,n=i*e.image.width/e.image.height,a=(t.container.width-n)/2,r=t.image.marginTop;t.container.width>n&&(i=(n=t.container.width)*e.image.height/e.image.width,a=0,r+=(t.image.height-i)/2),"IFRAME"===o&&(i+=400,r-=200),e.css(e.$video,{width:n+"px",marginLeft:a+"px",height:i+"px",marginTop:r+"px"})}return t};var o=t.prototype.initImg;t.prototype.initImg=function(){var e=this,t=o.apply(e);return e.options.videoSrc||(e.options.videoSrc=e.$item.getAttribute("data-jarallax-video")||null),e.options.videoSrc?(e.defaultInitImgResult=t,!0):t};var n=t.prototype.canInitParallax;t.prototype.canInitParallax=function(){var o=this,e=n.apply(o);if(!o.options.videoSrc)return e;var t=new r.default(o.options.videoSrc,{autoplay:!0,loop:o.options.videoLoop,showContols:!1,startTime:o.options.videoStartTime||0,endTime:o.options.videoEndTime||0,mute:o.options.videoVolume?0:1,volume:o.options.videoVolume||0});if(t.isValid())if(e){if(t.on("ready",function(){if(o.options.videoPlayOnlyVisible){var e=o.onScroll;o.onScroll=function(){e.apply(o),!o.options.videoLoop&&(o.options.videoLoop||o.videoEnded)||(o.isVisible()?t.play():t.pause())}}else t.play()}),t.on("started",function(){o.image.$default_item=o.image.$item,o.image.$item=o.$video,o.image.width=o.video.videoWidth||1280,o.image.height=o.video.videoHeight||720,o.coverImage(),o.clipContainer(),o.onScroll(),o.image.$default_item&&(o.image.$default_item.style.display="none")}),t.on("ended",function(){o.videoEnded=!0,o.options.videoLoop||o.image.$default_item&&(o.image.$item=o.image.$default_item,o.image.$item.style.display="block",o.coverImage(),o.clipContainer(),o.onScroll())}),o.video=t,!o.defaultInitImgResult)return o.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7","local"===t.type||(t.getImageURL(function(e){o.image.bgImage='url("'+e+'")',o.init()}),!1)}else o.defaultInitImgResult||t.getImageURL(function(e){var t=o.$item.getAttribute("style");t&&o.$item.setAttribute("data-jarallax-original-styles",t),o.css(o.$item,{"background-image":'url("'+e+'")',"background-position":"center","background-size":"cover"})});return e};var a=t.prototype.destroy;t.prototype.destroy=function(){var e=this;e.image.$default_item&&(e.image.$item=e.image.$default_item,delete e.image.$default_item),a.apply(e)}};var r=i(o(8)),p=i(o(4));function i(e){return e&&e.__esModule?e:{default:e}}}]);
//# sourceMappingURL=jarallax-video.min.js.map
;
