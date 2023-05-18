!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=a()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.5a06fc2e.js","dcx8L":"bookshop.a185b304.svg","kFWPh":"ibooks.9bcaf007.svg","aN4Su":"amazon.0dffd886.svg","jZL8r":"shoping-list.1972bb13.js"}'));var a,o,s=i("bpxeT"),u=i("2TvXO"),c={};a=void 0!==t?t:"undefined"!=typeof window?window:c,o=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Success",r="Failure",i="Warning",a="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},u=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=c(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},l=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,f=function(s,l,f,v){if(!u("body"))return!1;t||d.Notify.init({});var p=c(!0,t,{});if("object"==typeof f&&!Array.isArray(f)||"object"==typeof v&&!Array.isArray(v)){var y={};"object"==typeof f?y=f:"object"==typeof v&&(y=v),t=c(!0,t,y)}var m,g,k=t[s.toLocaleLowerCase("en")];h++,"string"!=typeof l&&(l="Notiflix "+s),t.plainText&&(m=l,(g=e.document.createElement("div")).innerHTML=m,l=g.textContent||g.innerText||""),!t.plainText&&l.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>t.messageMaxLength&&(l=l.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(k.fontAwesomeIconColor=k.background),t.cssAnimation||(t.cssAnimationDuration=0);var w=e.document.getElementById(o.wrapID)||e.document.createElement("div");if(w.id=o.wrapID,w.style.width=t.width,w.style.zIndex=t.zindex,w.style.opacity=t.opacity,"center-center"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.top=t.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===t.position?(w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.left="auto"):"left-top"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===t.position?(w.style.left=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=t.distance,w.style.top=t.distance,w.style.left="auto",w.style.bottom="auto"),t.backOverlay){var b=e.document.getElementById(o.overlayID)||e.document.createElement("div");b.id=o.overlayID,b.style.width="100%",b.style.height="100%",b.style.position="fixed",b.style.zIndex=t.zindex-1,b.style.left=0,b.style.top=0,b.style.right=0,b.style.bottom=0,b.style.background=k.backOverlayColor||t.backOverlayColor,b.className=t.cssAnimation?"nx-with-animation":"",b.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(o.overlayID)||e.document.body.appendChild(b)}e.document.getElementById(o.wrapID)||e.document.body.appendChild(w);var x=e.document.createElement("div");x.id=t.ID+"-"+h,x.className=t.className+" "+k.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof f?"nx-with-close-button":"")+" "+("function"==typeof f?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),x.style.fontSize=t.fontSize,x.style.color=k.textColor,x.style.background=k.background,x.style.borderRadius=t.borderRadius,x.style.pointerEvents="all",t.rtl&&(x.setAttribute("dir","rtl"),x.classList.add("nx-rtl-on")),x.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(x.style.animationDuration=t.cssAnimationDuration+"ms");var I="";if(t.closeButton&&"function"!=typeof f&&(I='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+k.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)x.innerHTML='<i style="color:'+k.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+k.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?I:"");else{var E="";s===n?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+k.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===r?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+k.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===i?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+k.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+k.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),x.innerHTML=E+'<span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?I:"")}else x.innerHTML='<span class="nx-message">'+l+"</span>"+(t.closeButton?I:"");if("left-bottom"===t.position||"right-bottom"===t.position){var T=e.document.getElementById(o.wrapID);T.insertBefore(x,T.firstChild)}else e.document.getElementById(o.wrapID).appendChild(x);var _=e.document.getElementById(x.id);if(_){var S,C,A=function(){_.classList.add("nx-remove");var t=e.document.getElementById(o.overlayID);t&&w.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(S)},N=function(){if(_&&null!==_.parentNode&&_.parentNode.removeChild(_),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var t=e.document.getElementById(o.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(C)};if(t.closeButton&&"function"!=typeof f&&e.document.getElementById(x.id).querySelector("span.nx-close-button").addEventListener("click",(function(){A();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof f||t.clickToClose)&&_.addEventListener("click",(function(){"function"==typeof f&&f(),A();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof f){var D=function(){S=setTimeout((function(){A()}),t.timeout),C=setTimeout((function(){N()}),t.timeout+t.cssAnimationDuration)};D(),t.pauseOnHover&&(_.addEventListener("mouseenter",(function(){_.classList.add("nx-paused"),clearTimeout(S),clearTimeout(C)})),_.addEventListener("mouseleave",(function(){_.classList.remove("nx-paused"),D()})))}}if(t.showOnlyTheLastOne&&h>0)for(var R=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+h+"])"),O=0;O<R.length;O++){var L=R[O];null!==L.parentNode&&L.parentNode.removeChild(L)}t=c(!0,t,p)},d={Notify:{init:function(n){t=c(!0,o,n),function(t,n){if(!u("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(l,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,r){f(n,e,t,r)},failure:function(e,t,n){f(r,e,t,n)},warning:function(e,t,n){f(i,e,t,n)},info:function(e,t,n){f(a,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:d.Notify}):{Notify:d.Notify}},"function"==typeof define&&define.amd?define([],(function(){return o(a)})):"object"==typeof c?c=o(a):a.Notiflix=o(a);s=i("bpxeT");var l=i("8MBJY"),h=i("a2hTj"),f=i("hKHmD"),d=i("8nrFW"),v=(u=i("2TvXO"),s=i("bpxeT"),l=i("8MBJY"),h=i("a2hTj"),i("1t1Wn")),p=(d=i("8nrFW"),u=i("2TvXO"),i("ds8z5")),y=(l=i("8MBJY"),h=i("a2hTj"),i("eYQtU")),m=(v=i("1t1Wn"),d=i("8nrFW"),{});Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e){return I(e)};var g=x(i("ge8co")),k=x(i("cZGw3")),w=x(i("fVNic")),b=x(i("gD1JV"));function x(e){return e&&e.__esModule?e:{default:e}}function I(e){var t="function"==typeof Map?new Map:void 0;return I=function(e){if(null===e||!k.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return g.default(e,arguments,w.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),b.default(n,e)},I(e)}var E,T,_,S=i("2MbLg"),C=E={};function A(){throw new Error("setTimeout has not been defined")}function N(){throw new Error("clearTimeout has not been defined")}function D(e){if(T===setTimeout)return setTimeout(e,0);if((T===A||!T)&&setTimeout)return T=setTimeout,setTimeout(e,0);try{return T(e,0)}catch(t){try{return T.call(null,e,0)}catch(t){return T.call(this,e,0)}}}!function(){try{T="function"==typeof setTimeout?setTimeout:A}catch(e){T=A}try{_="function"==typeof clearTimeout?clearTimeout:N}catch(e){_=N}}();var R,O=[],L=!1,P=-1;function M(){L&&R&&(L=!1,R.length?O=R.concat(O):P=-1,O.length&&F())}function F(){if(!L){var e=D(M);L=!0;for(var t=O.length;t;){for(R=O,O=[];++P<t;)R&&R[P].run();P=-1,t=O.length}R=null,L=!1,function(e){if(_===clearTimeout)return clearTimeout(e);if((_===N||!_)&&clearTimeout)return _=clearTimeout,clearTimeout(e);try{_(e)}catch(t){try{return _.call(null,e)}catch(t){return _.call(this,e)}}}(e)}}function U(e,t){this.fun=e,this.array=t}function V(){}C.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];O.push(new U(e,t)),1!==O.length||L||D(F)},U.prototype.run=function(){this.fun.apply(null,this.array)},C.title="browser",C.browser=!0,C.env={},C.argv=[],C.version="",C.versions={},C.on=V,C.addListener=V,C.once=V,C.off=V,C.removeListener=V,C.removeAllListeners=V,C.emit=V,C.prependListener=V,C.prependOnceListener=V,C.listeners=function(e){return[]},C.binding=function(e){throw new Error("process.binding is not supported")},C.cwd=function(){return"/"},C.chdir=function(e){throw new Error("process.chdir is not supported")},C.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var j=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},B={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(j(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new z;var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},z=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){var t;return e(l)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",t}return r}(e(m)(Error)),q=function(e){return function(e){var t=j(e);return B.encodeByteArray(t,!0)}(e).replace(/\./g,"")},H=function(e){try{return B.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var W=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},K=function(){try{return W()||function(){if(void 0!==E&&void 0!==E.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&H(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},G=function(e){var t,n;return null===(n=null===(t=K())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Q=function(e){var t=G(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},Y=function(){var e;return null===(e=K())||void 0===e?void 0:e.config},J=function(e){var t;return null===(t=K())||void 0===t?void 0:t["_".concat(e)]},X=function(){"use strict";function t(){var n=this;e(l)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(h)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[q(JSON.stringify({alg:"none",type:"JWT"})),q(JSON.stringify(a)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ee(){try{return"object"==typeof indexedDB}catch(e){return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var te=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a){var o;return e(l)(this,r),(o=n.call(this,i)).code=t,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(e(p)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(p)(o),ne.prototype.create),o}return r}(e(m)(Error)),ne=function(){"use strict";function t(n,r,i){e(l)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(h)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?re(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new te(a,u,i);return c}}]),t}();function re(e,t){return e.replace(ie,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var ie=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function oe(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(se(l)&&se(h)){if(!oe(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var f=!0,d=!1,v=void 0;try{for(var p,y=r[Symbol.iterator]();!(f=(p=y.next()).done);f=!0){var m=p.value;if(!n.includes(m))return!1}}catch(e){d=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw v}}return!0}function se(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue(t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=e(v)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function ce(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(v)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function le(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he=function(){"use strict";function t(n,r){var i=this;e(l)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(h)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=fe),void 0===r.error&&(r.error=fe),void 0===r.complete&&(r.complete=fe);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function fe(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function de(e){return e&&e._delegate?e._delegate:e}var ve=function(){"use strict";function t(n,r,i){e(l)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(h)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),pe="[DEFAULT]",ye=function(){"use strict";function t(n,r){e(l)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(h)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new X;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:pe})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(v)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(s)(e(u).mark((function n(){var r;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(d)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(d)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=e(v)(c.value,2),f=h[0],d=h[1],p=this.normalizeInstanceIdentifier(f);i===p&&d.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===pe?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe;return this.component?this.component.multipleInstances?e:pe:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me,ge,ke=function(){"use strict";function t(n){e(l)(this,t),this.name=n,this.providers=new Map}return e(h)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new ye(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),we=(l=i("8MBJY"),h=i("a2hTj"),f=i("hKHmD"),d=i("8nrFW"),[]);(ge=me||(me={}))[ge.DEBUG=0]="DEBUG",ge[ge.VERBOSE=1]="VERBOSE",ge[ge.INFO=2]="INFO",ge[ge.WARN=3]="WARN",ge[ge.ERROR=4]="ERROR",ge[ge.SILENT=5]="SILENT";var be,xe={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Ie=me.INFO,Ee=(be={},e(f)(be,me.DEBUG,"log"),e(f)(be,me.VERBOSE,"log"),e(f)(be,me.INFO,"info"),e(f)(be,me.WARN,"warn"),e(f)(be,me.ERROR,"error"),be),Te=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=Ee[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(d)(i)))}},_e=function(){"use strict";function t(n){e(l)(this,t),this.name=n,this._logLevel=Ie,this._logHandler=Te,this._userLogHandler=null,we.push(this)}return e(h)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in me))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?xe[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,me.DEBUG].concat(e(d)(n))),this._logHandler.apply(this,[this,me.DEBUG].concat(e(d)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,me.VERBOSE].concat(e(d)(n))),this._logHandler.apply(this,[this,me.VERBOSE].concat(e(d)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,me.INFO].concat(e(d)(n))),this._logHandler.apply(this,[this,me.INFO].concat(e(d)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,me.WARN].concat(e(d)(n))),this._logHandler.apply(this,[this,me.WARN].concat(e(d)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,me.ERROR].concat(e(d)(n))),this._logHandler.apply(this,[this,me.ERROR].concat(e(d)(n)))}}]),t}();s=i("bpxeT");var Se={};Object.defineProperty(Se,"__esModule",{value:!0}),Se.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ae.default(e,t,n[t])}))}return e};var Ce,Ae=(Ce=i("hKHmD"))&&Ce.__esModule?Ce:{default:Ce};var Ne,De;d=i("8nrFW"),u=i("2TvXO"),d=i("8nrFW");var Re=new WeakMap,Oe=new WeakMap,Le=new WeakMap,Pe=new WeakMap,Me=new WeakMap;var Fe={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Oe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Le.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return je(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Ue(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(De||(De=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(Be(this),n),je(Re.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return je(t.apply(Be(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[Be(this),n].concat(e(d)(i)));return Le.set(s,n.sort?n.sort():[n]),je(s)}}function Ve(e){return"function"==typeof e?Ue(e):(e instanceof IDBTransaction&&function(e){if(!Oe.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Oe.set(e,t)}}(e),t=e,(Ne||(Ne=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Fe):e);var t}function je(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(je(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&Re.set(e,t)})).catch((function(){})),Me.set(n,t),n;var t,n;if(Pe.has(e))return Pe.get(e);var r=Ve(e);return r!==e&&(Pe.set(e,r),Me.set(r,e)),r}var Be=function(e){return Me.get(e)};function ze(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=je(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(je(s.result),e.oldVersion,e.newVersion,je(s.transaction),e)})),r&&s.addEventListener("blocked",(function(e){return r(e.oldVersion,e.newVersion,e)})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(e){return a(e.oldVersion,e.newVersion,e)}))})).catch((function(){})),u}var qe=["get","getKey","getAll","getAllKeys","count"],He=["put","add","delete","clear"],We=new Map;function Ke(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(We.get(n))return We.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,a=He.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(a||qe.includes(r))){var o,c=(o=e(s)(e(u).mark((function t(n){var o,s,c,l,h,f,v=arguments;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(o=v.length,s=new Array(o>1?o-1:0),c=1;c<o;c++)s[c-1]=v[c];return h=this.transaction(n,a?"readwrite":"readonly"),f=h.store,i&&(f=f.index(s.shift())),t.next=7,Promise.all([(l=f)[r].apply(l,e(d)(s)),a&&h.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return o.apply(this,arguments)});return We.set(n,c),c}}}Fe=function(t){return e(Se)({},t,{get:function(e,n,r){return Ke(e,n)||t.get(e,n,r)},has:function(e,n){return!!Ke(e,n)||t.has(e,n)}})}(Fe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ge=function(){"use strict";function t(n){e(l)(this,t),this.container=n}return e(h)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var Qe,Ye,Je="@firebase/app",Xe="0.9.10",Ze=new _e("@firebase/app"),$e="[DEFAULT]",et=(Qe={},e(f)(Qe,Je,"fire-core"),e(f)(Qe,"@firebase/app-compat","fire-core-compat"),e(f)(Qe,"@firebase/analytics","fire-analytics"),e(f)(Qe,"@firebase/analytics-compat","fire-analytics-compat"),e(f)(Qe,"@firebase/app-check","fire-app-check"),e(f)(Qe,"@firebase/app-check-compat","fire-app-check-compat"),e(f)(Qe,"@firebase/auth","fire-auth"),e(f)(Qe,"@firebase/auth-compat","fire-auth-compat"),e(f)(Qe,"@firebase/database","fire-rtdb"),e(f)(Qe,"@firebase/database-compat","fire-rtdb-compat"),e(f)(Qe,"@firebase/functions","fire-fn"),e(f)(Qe,"@firebase/functions-compat","fire-fn-compat"),e(f)(Qe,"@firebase/installations","fire-iid"),e(f)(Qe,"@firebase/installations-compat","fire-iid-compat"),e(f)(Qe,"@firebase/messaging","fire-fcm"),e(f)(Qe,"@firebase/messaging-compat","fire-fcm-compat"),e(f)(Qe,"@firebase/performance","fire-perf"),e(f)(Qe,"@firebase/performance-compat","fire-perf-compat"),e(f)(Qe,"@firebase/remote-config","fire-rc"),e(f)(Qe,"@firebase/remote-config-compat","fire-rc-compat"),e(f)(Qe,"@firebase/storage","fire-gcs"),e(f)(Qe,"@firebase/storage-compat","fire-gcs-compat"),e(f)(Qe,"@firebase/firestore","fire-fst"),e(f)(Qe,"@firebase/firestore-compat","fire-fst-compat"),e(f)(Qe,"fire-js","fire-js"),e(f)(Qe,"firebase","fire-js-all"),Qe),tt=new Map,nt=new Map;function rt(e,t){try{e.container.addComponent(t)}catch(n){Ze.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function it(e){var t=e.name;if(nt.has(t))return Ze.debug("There were multiple attempts to register component ".concat(t,".")),!1;nt.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=tt.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){rt(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function at(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ot=(Ye={},e(f)(Ye,"no-app","No Firebase App '{$appName}' has been created - call initializeApp() first"),e(f)(Ye,"bad-app-name","Illegal App name: '{$appName}"),e(f)(Ye,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(f)(Ye,"app-deleted","Firebase App named '{$appName}' already deleted"),e(f)(Ye,"no-options","Need to provide options, when not being deployed to hosting via source."),e(f)(Ye,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(f)(Ye,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(f)(Ye,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(f)(Ye,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(f)(Ye,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(f)(Ye,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Ye),st=new ne("app","Firebase",ot),ut=function(){"use strict";function t(n,r,i){var a=this;e(l)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ve("app",(function(){return a}),"PUBLIC"))}return e(h)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw st.create("app-deleted",{appName:this._name})}}]),t}(),ct="9.22.0";function lt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:$e,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw st.create("bad-app-name",{appName:String(a)});if(n||(n=Y()),!n)throw st.create("no-options");var o=tt.get(a);if(o){if(oe(n,o.options)&&oe(i,o.config))return o;throw st.create("duplicate-app",{appName:a})}var s=new ke(a),u=!0,c=!1,l=void 0;try{for(var h,f=nt.values()[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=h.value;s.addComponent(d)}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}var v=new ut(n,i,s);return tt.set(a,v),v}function ht(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=tt.get(e);if(!t&&e===$e&&Y())return lt();if(!t)throw st.create("no-app",{appName:e});return t}function ft(e,t,n){var r,i=null!==(r=et[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Ze.warn(s.join(" "))}it(new ve("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var dt="firebase-heartbeat-store",vt=null;function pt(){return vt||(vt=ze("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(dt)}}).catch((function(e){throw st.create("idb-open",{originalErrorMessage:e.message})}))),vt}function yt(e){return mt.apply(this,arguments)}function mt(){return(mt=e(s)(e(u).mark((function t(n){var r,i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pt();case 3:return r=e.sent,e.next=6,r.transaction(dt).objectStore(dt).get(wt(n));case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),e.t0 instanceof te?Ze.warn(e.t0.message):(a=st.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Ze.warn(a.message));case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function gt(e,t){return kt.apply(this,arguments)}function kt(){return(kt=e(s)(e(u).mark((function t(n,r){var i,a,o,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pt();case 3:return i=e.sent,a=i.transaction(dt,"readwrite"),o=a.objectStore(dt),e.next=8,o.put(r,wt(n));case 8:return e.next=10,a.done;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0 instanceof te?Ze.warn(e.t0.message):(s=st.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Ze.warn(s.message));case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function wt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt=function(){"use strict";function t(n){var r=this;e(l)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Tt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(h)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(s)(e(u).mark((function n(){var r,i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=xt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(s)(e(u).mark((function n(){var r,i,a,o,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=xt(),i=It(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=q(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function xt(){return(new Date).toISOString().substring(0,10)}function It(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),_t(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),_t(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var Et,Tt=function(){"use strict";function t(n){e(l)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(h)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(s)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(s)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,yt(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",gt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i,a;return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",gt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(d)(a.heartbeats).concat(e(d)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function _t(e){return q(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et="",it(new ve("platform-logger",(function(e){return new Ge(e)}),"PRIVATE")),it(new ve("heartbeat",(function(e){return new bt(e)}),"PRIVATE")),ft(Je,Xe,Et),ft(Je,Xe,"esm2017"),ft("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ft("firebase","9.22.0","app");p=i("ds8z5"),s=i("bpxeT"),l=i("8MBJY"),h=i("a2hTj"),f=i("hKHmD");var St={};Object.defineProperty(St,"__esModule",{value:!0}),St.default=function(e,t,n){return At(e,t,n)};var Ct=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function At(e,t,n){return(At="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Ct.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var Nt=i("fVNic");y=i("eYQtU"),v=i("1t1Wn"),d=i("8nrFW"),S=i("2MbLg"),u=i("2TvXO");function Dt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Rt(){return e(f)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Ot=Rt,Lt=new ne("auth","Firebase",Rt()),Pt=new _e("@firebase/auth");function Mt(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;Pt.logLevel<=me.WARN&&(a=Pt).warn.apply(a,["Auth (".concat(ct,"): ").concat(t)].concat(e(d)(r)))}function Ft(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;Pt.logLevel<=me.ERROR&&(a=Pt).error.apply(a,["Auth (".concat(ct,"): ").concat(t)].concat(e(d)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw Bt.apply(void 0,[t].concat(e(d)(r)))}function Vt(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Bt.apply(void 0,[t].concat(e(d)(r)))}function jt(t,n,r){var i=Object.assign(Object.assign({},Ot()),e(f)({},n,r));return new ne("auth","Firebase",i).create(n,{appName:t.name})}function Bt(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=r[0],u=e(d)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(d)(u)))}return(a=Lt).create.apply(a,[t].concat(e(d)(r)))}function zt(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw Bt.apply(void 0,[n].concat(e(d)(i)))}function qt(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Ft(t),new Error(t)}function Ht(e,t){e||qt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Kt(){return"http:"===Gt()||"https:"===Gt()}function Gt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Kt()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yt=function(){"use strict";function t(n,r){e(l)(this,t),this.shortDelay=n,this.longDelay=r,Ht(r>n,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(h)(t,[{key:"get",value:function(){return Qt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e,t){Ht(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt,Zt=function(){"use strict";function t(){e(l)(this,t)}return e(h)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),$t=(Xt={},e(f)(Xt,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(f)(Xt,"MISSING_CUSTOM_TOKEN","internal-error"),e(f)(Xt,"INVALID_IDENTIFIER","invalid-email"),e(f)(Xt,"MISSING_CONTINUE_URI","internal-error"),e(f)(Xt,"INVALID_PASSWORD","wrong-password"),e(f)(Xt,"MISSING_PASSWORD","missing-password"),e(f)(Xt,"EMAIL_EXISTS","email-already-in-use"),e(f)(Xt,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(f)(Xt,"INVALID_IDP_RESPONSE","invalid-credential"),e(f)(Xt,"INVALID_PENDING_TOKEN","invalid-credential"),e(f)(Xt,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(f)(Xt,"MISSING_REQ_TYPE","internal-error"),e(f)(Xt,"EMAIL_NOT_FOUND","user-not-found"),e(f)(Xt,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(f)(Xt,"EXPIRED_OOB_CODE","expired-action-code"),e(f)(Xt,"INVALID_OOB_CODE","invalid-action-code"),e(f)(Xt,"MISSING_OOB_CODE","internal-error"),e(f)(Xt,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(f)(Xt,"INVALID_ID_TOKEN","invalid-user-token"),e(f)(Xt,"TOKEN_EXPIRED","user-token-expired"),e(f)(Xt,"USER_NOT_FOUND","user-token-expired"),e(f)(Xt,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(f)(Xt,"INVALID_CODE","invalid-verification-code"),e(f)(Xt,"INVALID_SESSION_INFO","invalid-verification-id"),e(f)(Xt,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(f)(Xt,"MISSING_SESSION_INFO","missing-verification-id"),e(f)(Xt,"SESSION_EXPIRED","code-expired"),e(f)(Xt,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(f)(Xt,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(f)(Xt,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(f)(Xt,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(f)(Xt,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(f)(Xt,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(f)(Xt,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(f)(Xt,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(f)(Xt,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(f)(Xt,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(f)(Xt,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),e(f)(Xt,"RECAPTCHA_NOT_ENABLED","recaptcha-not-enabled"),e(f)(Xt,"MISSING_RECAPTCHA_TOKEN","missing-recaptcha-token"),e(f)(Xt,"INVALID_RECAPTCHA_TOKEN","invalid-recaptcha-token"),e(f)(Xt,"INVALID_RECAPTCHA_ACTION","invalid-recaptcha-action"),e(f)(Xt,"MISSING_CLIENT_TYPE","missing-client-type"),e(f)(Xt,"MISSING_RECAPTCHA_VERSION","missing-recaptcha-version"),e(f)(Xt,"INVALID_RECAPTCHA_VERSION","invalid-recaptcha-version"),e(f)(Xt,"INVALID_REQ_TYPE","invalid-req-type"),Xt),en=new Yt(3e4,6e4);function tn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function nn(e,t,n,r){return rn.apply(this,arguments)}function rn(){return rn=e(s)(e(u).mark((function t(n,r,i,a){var o,c=arguments;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",an(n,o,e(s)(e(u).mark((function t(){var o,s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),c=ue(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",Zt.fetch()(cn(n,n.config.apiHost,i,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),rn.apply(this,arguments)}function an(e,t,n){return on.apply(this,arguments)}function on(){return(on=e(s)(e(u).mark((function t(n,r,i){var a,o,s,c,l,h,f,d,p;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},$t),r),t.prev=2,o=new ln(n),t.next=6,Promise.race([i(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw hn(n,"account-exists-with-different-credential",c);case 13:if(!s.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=s.ok?c.errorMessage:c.error.message,h=e(v)(l.split(" : "),2),f=h[0],d=h[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){t.next=23;break}throw hn(n,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==f){t.next=27;break}throw hn(n,"email-already-in-use",c);case 27:if("USER_DISABLED"!==f){t.next=29;break}throw hn(n,"user-disabled",c);case 29:if(p=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!d){t.next=34;break}throw jt(n,p,d);case 34:Ut(n,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof te)){t.next=41;break}throw t.t0;case 41:Ut(n,"network-request-failed",{message:String(t.t0)});case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function sn(e,t,n,r){return un.apply(this,arguments)}function un(){return un=e(s)(e(u).mark((function t(n,r,i,a){var o,s,c=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,nn(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&Ut(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),un.apply(this,arguments)}function cn(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Jt(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var ln=function(){"use strict";function t(n){var r=this;e(l)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(Vt(n.auth,"network-request-failed"))}),en.get())}))}return e(h)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function hn(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=Vt(e,t,r);return i.customData._tokenResponse=n,i}function fn(e,t){return dn.apply(this,arguments)}function dn(){return(dn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",nn(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vn(e,t){return pn.apply(this,arguments)}function pn(){return(pn=e(s)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",nn(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return mn=e(s)(e(u).mark((function t(n){var r,i,a,o,s,c,l=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=de(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,zt((o=kn(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,c=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:yn(gn(o.auth_time)),issuedAtTime:yn(gn(o.iat)),expirationTime:yn(gn(o.exp)),signInProvider:c||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),mn.apply(this,arguments)}function gn(e){return 1e3*Number(e)}function kn(t){var n=e(v)(t.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return Ft("JWT malformed, contained fewer than 3 sections"),null;try{var o=H(i);return o?JSON.parse(o):(Ft("Failed to decode base64 JWT payload"),null)}catch(e){return Ft("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function wn(e,t){return bn.apply(this,arguments)}function bn(){return bn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(n,r){var i=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof te&&xn(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),bn.apply(this,arguments)}function xn(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var In=function(){"use strict";function t(n){e(l)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(h)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(s)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}}]),t}(),En=function(){"use strict";function t(n,r){e(l)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(h)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=yn(this.lastLoginAt),this.creationTime=yn(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(e){return _n.apply(this,arguments)}function _n(){return(_n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(n){var r,i,a,o,s,c,l,h,f,d,v;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,wn(n,vn(i,{idToken:a}));case 7:zt(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),c=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?An(s.providerUserInfo):[],l=Cn(n.providerData,c),h=n.isAnonymous,f=!(n.email&&s.passwordHash||(null==l?void 0:l.length)),d=!!h&&f,v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new En(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(n,v);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Sn(){return(Sn=e(s)(e(u).mark((function t(n){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=de(n),e.next=3,Tn(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Cn(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(d)(r).concat(e(d)(n))}function An(e){return e.map((function(e){var t=e.providerId,n=Dt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function Nn(e,t){return Dn.apply(this,arguments)}function Dn(){return(Dn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(n,r){var i;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,an(n,{},e(s)(e(u).mark((function t(){var i,a,o,s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ue({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,c=cn(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Zt.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rn=function(){"use strict";function t(){e(l)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(h)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){zt(e.idToken,"internal-error"),zt(void 0!==e.idToken,"internal-error"),zt(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,zt(n=kn(t),"internal-error"),zt(void 0!==n.exp,"internal-error"),zt(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(s)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(zt(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(s)(e(u).mark((function i(){var a,o,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Nn(t,n);case 2:a=e.sent,o=a.accessToken,s=a.refreshToken,c=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(c));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return qt("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new t;return r&&(zt("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&(zt("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(zt("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e,t){zt("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Ln=function(){"use strict";function t(n){e(l)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=Dt(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new In(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(d)(o.providerData):[],this.metadata=new En(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(h)(t,[{key:"getIdToken",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,wn(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(zt(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return mn.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Sn.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(zt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){var n=new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}},{key:"_onReload",value:function(e){zt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(s)(e(u).mark((function i(){var a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,Tn(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(s)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,wn(t,fn(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,o,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,v=null!==(o=n.photoURL)&&void 0!==o?o:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,w=n.emailVerified,b=n.isAnonymous,x=n.providerData,I=n.stsTokenManager;zt(k&&I,e,"internal-error");var E=Rn.fromJSON(this.name,I);zt("string"==typeof k,e,"internal-error"),On(h,e.name),On(f,e.name),zt("boolean"==typeof w,e,"internal-error"),zt("boolean"==typeof b,e,"internal-error"),On(d,e.name),On(v,e.name),On(p,e.name),On(y,e.name),On(m,e.name),On(g,e.name);var T=new t({uid:k,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:b,photoURL:v,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:g});return x&&Array.isArray(x)&&(T.providerData=x.map((function(e){return Object.assign({},e)}))),y&&(T._redirectEventId=y),T}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(s)(e(u).mark((function a(){var o,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new Rn).updateFromServerResponse(r),s=new t({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),e.next=5,Tn(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),Pn=new Map;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(e){Ht(e instanceof Function,"Expected a class definition");var t=Pn.get(e);return t?(Ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Pn.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fn=function(){"use strict";function t(){e(l)(this,t),this.type="NONE",this.storage={}}return e(h)(t,[{key:"_isAvailable",value:function(){return e(s)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(s)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(s)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();Fn.type="NONE";var Un=Fn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var jn=function(){"use strict";function t(n,r,i){e(l)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=Vn(this.userKey,o.apiKey,s),this.fullPersistenceKey=Vn("persistence",o.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(h)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(s)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?Ln._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(s)(e(u).mark((function a(){var o,c,l,h,f,d,v,p,y,m,g,k,w;return e(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new t(Mn(Un),n,i));case 2:return a.next=4,Promise.all(r.map(function(){var t=e(s)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:o=a.sent.filter((function(e){return e})),c=o[0]||Mn(Un),l=Vn(i,n.config.apiKey,n.name),h=null,f=!0,d=!1,v=void 0,a.prev=9,p=r[Symbol.iterator]();case 11:if(f=(y=p.next()).done){a.next=29;break}return m=y.value,a.prev=13,a.next=16,m._get(l);case 16:if(!(g=a.sent)){a.next=22;break}return k=Ln._fromJSON(n,g),m!==c&&(h=k),c=m,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:f=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),d=!0,v=a.t1;case 35:a.prev=35,a.prev=36,f||null==p.return||p.return();case 38:if(a.prev=38,!d){a.next=41;break}throw v;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(w=o.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&w.length){a.next=46;break}return a.abrupt("return",new t(c,n,i));case 46:if(c=w[0],!h){a.next=50;break}return a.next=50,c._set(l,h.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var t=e(s)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===c){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return a.abrupt("return",new t(c,n,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Wn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(zn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Gn(t))return"Blackberry";if(Qn(t))return"Webos";if(qn(t))return"Safari";if((t.includes("chrome/")||Hn(t))&&!t.includes("edge/"))return"Chrome";if(Kn(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function zn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return/firefox\//i.test(e)}function qn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Hn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return/crios\//i.test(e)}function Wn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return/iemobile/i.test(e)}function Kn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return/android/i.test(e)}function Gn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return/blackberry/i.test(e)}function Qn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return/webos/i.test(e)}function Yn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Jn(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return Yn(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Xn(){return((e=$()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Zn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return Yn(e)||Kn(e)||Qn(e)||Gn(e)||/windows phone/i.test(e)||Wn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $n(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Bn($());break;case"Worker":t="".concat(Bn($()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(ct,"/").concat(r)}function er(e,t){return tr.apply(this,arguments)}function tr(){return(tr=e(s)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",nn(n,"GET","/v2/recaptchaConfig",tn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e){return void 0!==e&&void 0!==e.enterprise}var rr=function t(n){"use strict";if(e(l)(this,t),this.siteKey="",this.emailPasswordEnabled=!1,void 0===n.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.emailPasswordEnabled=n.recaptchaEnforcementState.some((function(e){return"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState}))};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=Vt("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function ar(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}var or="https://www.google.com/recaptcha/enterprise.js?render=",sr="NO_RECAPTCHA",ur=function(){"use strict";function t(n){e(l)(this,t),this.type="recaptcha-enterprise",this.auth=dr(n)}return e(h)(t,[{key:"verify",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"verify",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(s)(e(u).mark((function i(){var a,o,c;return e(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return a=function(e){return o.apply(this,arguments)},o=function(){return o=e(s)(e(u).mark((function t(r){return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=5;break}if(null!=r.tenantId||null==r._agentRecaptchaConfig){t.next=3;break}return t.abrupt("return",r._agentRecaptchaConfig.siteKey);case 3:if(null==r.tenantId||void 0===r._tenantRecaptchaConfigs[r.tenantId]){t.next=5;break}return t.abrupt("return",r._tenantRecaptchaConfigs[r.tenantId].siteKey);case 5:return t.abrupt("return",new Promise(function(){var t=e(s)(e(u).mark((function t(n,i){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:er(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((function(e){if(void 0!==e.recaptchaKey){var t=new rr(e);return null==r.tenantId?r._agentRecaptchaConfig=t:r._tenantRecaptchaConfigs[r.tenantId]=t,n(t.siteKey)}i(new Error("recaptcha Enterprise site key undefined"))})).catch((function(e){i(e)}));case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 6:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)},c=function(e,n,r){var i=window.grecaptcha;nr(i)?i.enterprise.ready((function(){i.enterprise.execute(e,{action:t}).then((function(e){n(e)})).catch((function(){n(sr)}))})):r(Error("No reCAPTCHA enterprise script loaded."))},i.abrupt("return",new Promise((function(e,t){a(r.auth).then((function(r){if(!n&&nr(window.grecaptcha))c(r,e,t);else{if("undefined"==typeof window)return void t(new Error("RecaptchaVerifier is only supported in browser"));ir(or+r).then((function(){c(r,e,t)})).catch((function(e){t(e)}))}})).catch((function(e){t(e)}))})));case 7:case"end":return i.stop()}}),i)})))()}}]),t}();function cr(e,t,n){return lr.apply(this,arguments)}function lr(){return lr=e(s)(e(u).mark((function t(n,r,i){var a,o,s,c,l=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>3&&void 0!==l[3]&&l[3],o=new ur(n),e.prev=3,e.next=6,o.verify(i);case 6:s=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),e.next=13,o.verify(i,!0);case 13:s=e.sent;case 14:return c=Object.assign({},r),a?Object.assign(c,{captchaResp:s}):Object.assign(c,{captchaResponse:s}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),e.abrupt("return",c);case 19:case"end":return e.stop()}}),t,null,[[3,9]])}))),lr.apply(this,arguments)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hr=function(){"use strict";function t(n){e(l)(this,t),this.auth=n,this.queue=[]}return e(h)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i,a,o,s,c,l,h,f,d,v,p,y,m;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:i=[],e.prev=3,a=!0,o=!1,s=void 0,e.prev=5,c=n.queue[Symbol.iterator]();case 7:if(a=(l=c.next()).done){e.next=15;break}return h=l.value,e.next=11,h(t);case 11:h.onAbort&&i.push(h.onAbort);case 12:a=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),o=!0,s=e.t0;case 21:e.prev=21,e.prev=22,a||null==c.return||c.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),i.reverse(),f=!0,d=!1,v=void 0,e.prev=35,p=i[Symbol.iterator]();!(f=(y=p.next()).done);f=!0){m=y.value;try{m()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),d=!0,v=e.t2;case 43:e.prev=43,e.prev=44,f||null==p.return||p.return();case 46:if(e.prev=46,!d){e.next=49;break}throw v;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}(),fr=function(){"use strict";function t(n,r,i,a){e(l)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vr(this),this.idTokenSubscription=new vr(this),this.beforeStateQueue=new hr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=a.sdkClientVersion}return e(h)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=Mn(n));var r=this;return this._initializationPromise=this.queue(e(s)(e(u).mark((function i(){var a,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,jn.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(s)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i,a,o,s,c,l,h;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,s=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==o?void 0:o._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:h=e.sent,c&&c!==l||!(null==h?void 0:h.user)||(o=h.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return zt(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(o));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(s)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Tn(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 9:return e.abrupt("return",n.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?de(t):null)&&zt(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(s)(e(u).mark((function i(){return e(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&zt(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(s)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(Mn(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"initializeRecaptchaConfig",value:function(){var t=this;return e(s)(e(u).mark((function n(){var r,i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,er(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"});case 2:r=e.sent,i=new rr(r),null==t.tenantId?t._agentRecaptchaConfig=i:t._tenantRecaptchaConfigs[t.tenantId]=i,i.emailPasswordEnabled&&new ur(t).verify();case 6:case"end":return e.stop()}}),n)})))()}},{key:"_getRecaptchaConfig",value:function(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new ne("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(s)(e(u).mark((function i(){var a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return zt(i=t&&Mn(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,jn.create(n,[Mn(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i,a;return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(s)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(s)(e(u).mark((function r(){return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(s)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return zt(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(s)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return zt(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$n(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(s)(e(u).mark((function n(){var r,i,a,o;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(f)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.next=9,t._getAppCheckToken();case 9:return(o=n.sent)&&(i["X-Firebase-AppCheck"]=o),n.abrupt("return",i);case 12:case"end":return n.stop()}}),n)})))()}},{key:"_getAppCheckToken",value:function(){var t=this;return e(s)(e(u).mark((function n(){var r,i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,null===(r=t.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getToken();case 3:return(null==(i=e.sent)?void 0:i.error)&&Mt("Error while retrieving App Check token: ".concat(i.error)),e.abrupt("return",null==i?void 0:i.token);case 6:case"end":return e.stop()}}),n)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e){return de(e)}var vr=function(){"use strict";function t(n){var r,i,a=this;e(l)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new he((function(e){return a.observer=e}),r)).subscribe.bind(i)}return e(h)(t,[{key:"next",get:function(){return zt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e,t){var n=at(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(oe(n.getOptions(),null!=t?t:{}))return r;Ut(r,"already-initialized")}return n.initialize({options:t})}function yr(t,n,r){var i=dr(t);zt(i._canInitEmulator,i,"emulator-config-failed"),zt(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=mr(n),s=function(t){var n=mr(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:gr(i.substr(o.length+1))}}var s=e(v)(i.split(":"),2);return{host:s[0],port:gr(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function mr(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function gr(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var kr=function(){"use strict";function t(n,r){e(l)(this,t),this.providerId=n,this.signInMethod=r}return e(h)(t,[{key:"toJSON",value:function(){return qt("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return qt("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return qt("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return qt("not implemented")}}]),t}();function wr(e,t){return br.apply(this,arguments)}function br(){return(br=e(s)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",nn(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function xr(e,t){return Ir.apply(this,arguments)}function Ir(){return(Ir=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",sn(n,"POST","/v1/accounts:signInWithPassword",tn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Er(e,t){return Tr.apply(this,arguments)}function Tr(){return(Tr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",sn(n,"POST","/v1/accounts:signInWithEmailLink",tn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function _r(e,t){return Sr.apply(this,arguments)}function Sr(){return(Sr=e(s)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",sn(n,"POST","/v1/accounts:signInWithEmailLink",tn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cr=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(l)(this,r),(o=n.call(this,"password",a))._email=t,o._password=i,o._tenantId=s,o}return e(h)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i,a,o;return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=n.signInMethod,r.next="password"===r.t0?4:"emailLink"===r.t0?13:14;break;case 4:if(a={returnSecureToken:!0,email:n._email,password:n._password,clientType:"CLIENT_TYPE_WEB"},!(null===(i=t._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled)){r.next=12;break}return r.next=8,cr(t,a,"signInWithPassword");case 8:return o=r.sent,r.abrupt("return",xr(t,o));case 12:return r.abrupt("return",xr(t,a).catch(function(){var n=e(s)(e(u).mark((function n(r){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==r.code){e.next=8;break}return console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."),e.next=4,cr(t,a,"signInWithPassword");case 4:return i=e.sent,e.abrupt("return",xr(t,i));case 8:return e.abrupt("return",Promise.reject(r));case 9:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 13:return r.abrupt("return",Er(t,{email:n._email,oobCode:n._password}));case 14:Ut(t,"internal-error");case 15:case"end":return r.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(s)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",wr(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",_r(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:Ut(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(kr);function Ar(e,t){return Nr.apply(this,arguments)}function Nr(){return(Nr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",sn(n,"POST","/v1/accounts:signInWithIdp",tn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dr=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){var t;return e(l)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(h)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Ar(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Ar(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Ar(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ue(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ut("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=Dt(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(kr);function Rr(e,t){return Or.apply(this,arguments)}function Or(){return(Or=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",nn(n,"POST","/v1/accounts:sendVerificationCode",tn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Lr(){return(Lr=e(s)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",sn(n,"POST","/v1/accounts:signInWithPhoneNumber",tn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Pr(){return(Pr=e(s)(e(u).mark((function t(n,r){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,sn(n,"POST","/v1/accounts:signInWithPhoneNumber",tn(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw hn(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Mr=e(f)({},"USER_NOT_FOUND","user-not-found");function Fr(){return(Fr=e(s)(e(u).mark((function t(n,r){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",sn(n,"POST","/v1/accounts:signInWithPhoneNumber",tn(n,i),Mr));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ur=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t){var i;return e(l)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(h)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Lr.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Pr.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Fr.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(kr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vr=function(){"use strict";function t(n){var r,i,a,o,s,u;e(l)(this,t);var c=ce(le(n)),h=null!==(r=c.apiKey)&&void 0!==r?r:null,f=null!==(i=c.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);zt(h&&f&&d,"argument-error"),this.apiKey=h,this.operation=d,this.code=f,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(h)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=ce(le(e)).link,n=t?ce(le(t)).deep_link_id:null,r=ce(le(e)).deep_link_id;return(r?ce(le(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jr=function(){"use strict";function t(){e(l)(this,t),this.providerId=t.PROVIDER_ID}return e(h)(t,null,[{key:"credential",value:function(e,t){return Cr._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Vr.parseLink(t);return zt(n,"argument-error"),Cr._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();jr.PROVIDER_ID="password",jr.EMAIL_PASSWORD_SIGN_IN_METHOD="password",jr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Br=function(){"use strict";function t(n){e(l)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(h)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),zr=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){var t;return e(l)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(h)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(d)(this.scopes)}}]),r}(Br),qr=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.call(this,"facebook.com")}return e(h)(r,null,[{key:"credential",value:function(e){return Dr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(zr);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qr.FACEBOOK_SIGN_IN_METHOD="facebook.com",qr.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hr=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){var t;return e(l)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(h)(r,null,[{key:"credential",value:function(e,t){return Dr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(zr);Hr.GOOGLE_SIGN_IN_METHOD="google.com",Hr.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wr=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.call(this,"github.com")}return e(h)(r,null,[{key:"credential",value:function(e){return Dr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(zr);Wr.GITHUB_SIGN_IN_METHOD="github.com",Wr.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Kr=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.call(this,"twitter.com")}return e(h)(r,null,[{key:"credential",value:function(e,t){return Dr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(zr);function Gr(e,t){return Qr.apply(this,arguments)}function Qr(){return(Qr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",sn(n,"POST","/v1/accounts:signUp",tn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kr.TWITTER_SIGN_IN_METHOD="twitter.com",Kr.PROVIDER_ID="twitter.com";var Yr=function(){"use strict";function t(n){e(l)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(h)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(s)(e(u).mark((function o(){var s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ln._fromIdTokenResponse(n,i,a);case 2:return s=e.sent,c=Jr(i),l=new t({user:s,providerId:c,_tokenResponse:i,operationType:r}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,i){return e(s)(e(u).mark((function a(){var o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=Jr(i),e.abrupt("return",new t({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function Jr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xr=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a,o){var s,u;return e(l)(this,r),(s=n.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(e(p)(s),r.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return e(h)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(te);function Zr(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Xr._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(e,t){return ei.apply(this,arguments)}function ei(){return ei=e(s)(e(u).mark((function t(n,r){var i,a,o=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=wn,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Yr._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),ei.apply(this,arguments)}function ti(e,t){return ni.apply(this,arguments)}function ni(){return ni=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(n,r){var i,a,o,s,c,l,h=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=h.length>2&&void 0!==h[2]&&h[2],a=n.auth,o="reauthenticate",e.prev=3,e.next=6,wn(n,Zr(a,o,r,n),i);case 6:return zt((s=e.sent).idToken,a,"internal-error"),zt(c=kn(s.idToken),a,"internal-error"),l=c.sub,zt(n.uid===l,a,"user-mismatch"),e.abrupt("return",Yr._forOperation(n,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&Ut(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),ni.apply(this,arguments)}function ri(e,t){return ii.apply(this,arguments)}function ii(){return ii=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(n,r){var i,a,o,s,c=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,Zr(n,a,r);case 4:return o=e.sent,e.next=7,Yr._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),ii.apply(this,arguments)}function ai(e,t){return oi.apply(this,arguments)}function oi(){return(oi=e(s)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ri(dr(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function si(e,t,n){return ui.apply(this,arguments)}function ui(){return ui=e(s)(e(u).mark((function t(n,r,i){var a,o,c,l,h,f,d;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=dr(n),c={returnSecureToken:!0,email:r,password:i,clientType:"CLIENT_TYPE_WEB"},!(null===(a=o._getRecaptchaConfig())||void 0===a?void 0:a.emailPasswordEnabled)){t.next=11;break}return t.next=7,cr(o,c,"signUpPassword");case 7:h=t.sent,l=Gr(o,h),t.next=12;break;case 11:l=Gr(o,c).catch(function(){var t=e(s)(e(u).mark((function t(n){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==n.code){e.next=8;break}return console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow."),e.next=4,cr(o,c,"signUpPassword");case 4:return r=e.sent,e.abrupt("return",Gr(o,r));case 8:return e.abrupt("return",Promise.reject(n));case 9:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 12:return t.next=14,l.catch((function(e){return Promise.reject(e)}));case 14:return f=t.sent,t.next=17,Yr._fromIdTokenResponse(o,"signIn",f);case 17:return d=t.sent,t.next=20,o._updateCurrentUser(d.user);case 20:return t.abrupt("return",d);case 21:case"end":return t.stop()}}),t)}))),ui.apply(this,arguments)}function ci(e,t,n){return ai(de(e),jr.credential(t,n))}function li(e,t,n,r){return de(e).onIdTokenChanged(t,n,r)}function hi(e,t,n){return de(e).beforeAuthStateChanged(t,n)}function fi(e){return de(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function di(e,t){return nn(e,"POST","/v2/accounts/mfaEnrollment:start",tn(e,t))}function vi(e,t){return nn(e,"POST","/v2/accounts/mfaEnrollment:finalize",tn(e,t))}new WeakMap;var pi="__sak",yi=function(){"use strict";function t(n,r){e(l)(this,t),this.storageRetriever=n,this.type=r}return e(h)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(pi,"1"),this.storage.removeItem(pi),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mi=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){var t,i;return e(l)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(qn(i=$())||Yn(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=Zn(),t._shouldAllowMigration=!0,t}return e(h)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);Xn()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,a=this;return e(s)(e(u).mark((function o(){return e(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(St)(e(Nt)(r.prototype),"_set",i).call(a,t,n);case 2:a.localCache[t]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(s)(e(u).mark((function a(){var o;return e(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(St)(e(Nt)(r.prototype),"_get",n).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(s)(e(u).mark((function a(){return e(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(St)(e(Nt)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(yi);mi.type="LOCAL";var gi=mi,ki=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(h)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(yi);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ki.type="SESSION";var wi=ki;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){return Promise.all(t.map((n=e(s)(e(u).mark((function t(n){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xi=function(){"use strict";function t(n){e(l)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(h)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i,a,o,c,l,h,f,d;return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=t).data,o=a.eventId,c=a.eventType,l=a.data,null==(h=n.handlersMap[c])?void 0:h.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:o,eventType:c}),f=Array.from(h).map(function(){var t=e(s)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,bi(f);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:o,eventType:c,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ii(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xi.receivers=[];var Ei=function(){"use strict";function t(n){e(l)(this,t),this.target=n,this.handlers=new Set}return e(h)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(s)(e(u).mark((function a(){var o,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var u=Ii("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);c={messageChannel:o,onMessage:function(t){var n=t;if(n.data.eventId===u)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(c),o.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:t,eventId:u,data:n},[o.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(){return window}function _i(e){Ti().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(){return void 0!==Ti().WorkerGlobalScope&&"function"==typeof Ti().importScripts}function Ci(){return Ai.apply(this,arguments)}function Ai(){return(Ai=e(s)(e(u).mark((function t(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ni="firebaseLocalStorageDb",Di="firebaseLocalStorage",Ri="fbase_key",Oi=function(){"use strict";function t(n){e(l)(this,t),this.request=n}return e(h)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function Li(e,t){return e.transaction([Di],t?"readwrite":"readonly").objectStore(Di)}function Pi(){var e=indexedDB.deleteDatabase(Ni);return new Oi(e).toPromise()}function Mi(){var t=indexedDB.open(Ni,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Di,{keyPath:Ri})}catch(e){r(e)}})),t.addEventListener("success",e(s)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Di)){e.next=12;break}return i.close(),e.next=5,Pi();case 5:return e.t0=n,e.next=8,Mi();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function Fi(e,t,n){return Ui.apply(this,arguments)}function Ui(){return(Ui=e(s)(e(u).mark((function t(n,r,i){var a,o;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Li(n,!0).put((a={},e(f)(a,Ri,r),e(f)(a,"value",i),a)),t.abrupt("return",new Oi(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Vi(e,t){return ji.apply(this,arguments)}function ji(){return(ji=e(s)(e(u).mark((function t(n,r){var i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Li(n,!1).get(r),e.next=3,new Oi(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Bi(e,t){var n=Li(e,!0).delete(t);return new Oi(n).toPromise()}var zi=function(){"use strict";function t(){e(l)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(h)(t,[{key:"_openDb",value:function(){var t=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Mi();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Si()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=xi._getInstance(Si()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(s)(e(u).mark((function n(r,i){var a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(s)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(s)(e(u).mark((function n(){var r,i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Ci();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new Ei(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(s)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(s)(e(u).mark((function t(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Mi();case 5:return n=e.sent,e.next=8,Fi(n,pi,"1");case 8:return e.next=10,Bi(n,pi);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(s)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(s)(e(u).mark((function i(){return e(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(s)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Fi(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Vi(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(s)(e(u).mark((function r(){return e(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(s)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Bi(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(s)(e(u).mark((function n(){var r,i,a,o,s,c,l,h,f,d,v,p,y,m,g,k,w;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Li(e,!1).getAll();return new Oi(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,c=void 0,e.prev=10,l=r[Symbol.iterator]();!(o=(h=l.next()).done);o=!0)f=h.value,d=f.fbase_key,v=f.value,a.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(v)&&(t.notifyListeners(d,v),i.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,c=e.t0;case 18:e.prev=18,e.prev=19,o||null==l.return||l.return();case 21:if(e.prev=21,!s){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(p=!0,y=!1,m=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(p=(k=g.next()).done);p=!0)w=k.value,t.localCache[w]&&!a.has(w)&&(t.notifyListeners(w,null),i.push(w));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),y=!0,m=e.t1;case 35:e.prev=35,e.prev=36,p||null==g.return||g.return();case 38:if(e.prev=38,!y){e.next=41;break}throw m;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();zi.type="LOCAL";var qi=zi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(e,t){return nn(e,"POST","/v2/accounts/mfaSignIn:start",tn(e,t))}function Wi(e,t){return nn(e,"POST","/v2/accounts/mfaSignIn:finalize",tn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ar("rcb"),new Yt(3e4,6e4);var Ki="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(e,t,n){return Qi.apply(this,arguments)}function Qi(){return(Qi=e(s)(e(u).mark((function t(n,r,i){var a,o,s,c,l,h,f,d;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,zt("string"==typeof o,n,"argument-error"),zt(i.type===Ki,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=s.session,!("phoneNumber"in s)){e.next=19;break}return zt("enroll"===c.type,n,"internal-error"),e.next=15,di(n,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return zt("signin"===c.type,n,"internal-error"),zt(h=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Hi(n,{mfaPendingCredential:c.credential,mfaEnrollmentId:h,phoneSignInInfo:{recaptchaToken:o}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Rr(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yi=function(){"use strict";function t(n){e(l)(this,t),this.providerId=t.PROVIDER_ID,this.auth=dr(n)}return e(h)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Gi(this.auth,e,de(t))}}],[{key:"credential",value:function(e,t){return Ur._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Ur._fromTokenResponse(n,r):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ji(e,t){return t?Mn(t):(zt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yi.PROVIDER_ID="phone",Yi.PHONE_SIGN_IN_METHOD="phone";var Xi=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t){var i;return e(l)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(h)(r,[{key:"_getIdTokenResponse",value:function(e){return Ar(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Ar(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Ar(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(kr);function Zi(e){return ri(e.auth,new Xi(e),e.bypassAuthState)}function $i(e){var t=e.auth,n=e.user;return zt(n,t,"internal-error"),ti(n,new Xi(e),e.bypassAuthState)}function ea(e){return ta.apply(this,arguments)}function ta(){return(ta=e(s)(e(u).mark((function t(n){var r,i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,zt(i=n.user,r,"internal-error"),e.abrupt("return",$r(i,new Xi(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var na=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(l)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(h)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(s)(e(u).mark((function t(r,i){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i,a,o,s,c,l,h;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,s=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return n.reject(c),e.abrupt("return");case 4:return h={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(l)(h);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zi;case"linkViaPopup":case"linkViaRedirect":return ea;case"reauthViaPopup":case"reauthViaRedirect":return $i;default:Ut(this.auth,"internal-error")}}},{key:"resolve",value:function(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),ra=new Yt(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ia=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a,o,s){var u;return e(l)(this,r),(u=n.call(this,t,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(p)(u),u}return e(h)(r,[{key:"executeNotNull",value:function(){var t=this;return e(s)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return zt(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(s)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ht(1===t.filter.length,"Popup operations only handle one event"),r=Ii(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(Vt(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Vt(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(Vt(i.auth,"popup-closed-by-user"))}),8e3)}else e.pollId=window.setTimeout(t,ra.get())};t()}}]),r}(na);ia.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var aa=new Map,oa=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(l)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(h)(r,[{key:"execute",value:function(){var t=this,n=this;return e(s)(e(u).mark((function i(){var a,o;return e(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=aa.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,sa(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(St)(e(Nt)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:aa.set(n.auth._key(),a);case 21:return n.bypassAuthState||aa.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,a=function(){return e(St)(e(Nt)(r.prototype),"onAuthEvent",n)};return e(s)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",a().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",a().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(s)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(na);function sa(e,t){return ua.apply(this,arguments)}function ua(){return(ua=e(s)(e(u).mark((function t(n,r){var i,a,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ha(r),a=la(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ca(e,t){aa.set(e._key(),t)}function la(e){return Mn(e._redirectPersistence)}function ha(e){return Vn("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(e,t){return da.apply(this,arguments)}function da(){return da=e(s)(e(u).mark((function t(n,r){var i,a,o,s,c,l=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=dr(n),o=Ji(a,r),s=new oa(a,o,i),e.next=6,s.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),da.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var va=function(){"use strict";function t(n){e(l)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(h)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ya(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!ya(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Vt(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(pa(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(pa(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function pa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function ya(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function ma(e){return ga.apply(this,arguments)}function ga(){return ga=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(n){var r,i=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",nn(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),ga.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ka=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wa=/^https?/;function ba(){return(ba=e(s)(e(u).mark((function t(n){var r,i,a,o,s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,ma(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(c=s.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!xa(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Ut(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function xa(e){var t=Wt(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!wa.test(r))return!1;if(ka.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ia=new Yt(3e4,6e4);function Ea(){var t=Ti().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(d)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var Ta=null;function _a(e){return Ta=Ta||function(e){return new Promise((function(t,n){var r,i,a;function o(){Ea(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Ea(),n(Vt(e,"network-request-failed"))},timeout:Ia.get()})}if(null===(i=null===(r=Ti().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Ti().gapi)||void 0===a?void 0:a.load)){var s=ar("iframefcb");return Ti()[s]=function(){gapi.load?o():n(Vt(e,"network-request-failed"))},ir("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw Ta=null,e}))}(e),Ta}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sa=new Yt(5e3,15e3),Ca={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Aa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Na(e){var t=e.config;zt(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Jt(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:ct},i=Aa.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(ue(r).slice(1))}function Da(e){return Ra.apply(this,arguments)}function Ra(){return Ra=e(s)(e(u).mark((function t(n){var r,i;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_a(n);case 2:return r=t.sent,zt(i=Ti().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:Na(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ca,dontclear:!0},(function(t){return new Promise((r=e(s)(e(u).mark((function r(i,a){var o,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){Ti().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=Vt(n,"network-request-failed"),s=Ti().setTimeout((function(){a(o)}),Sa.get()),t.ping(c).then(c,(function(){a(o)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),Ra.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},La="_blank",Pa="http://localhost",Ma=function(){"use strict";function t(n){e(l)(this,t),this.window=n,this.associatedEvent=null}return e(h)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Fa(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Oa),{width:i.toString(),height:a.toString(),top:o,left:s}),l=$().toLowerCase();r&&(u=Hn(l)?La:r),zn(l)&&(n=n||Pa,c.scrollbars="yes");var h=Object.entries(c).reduce((function(t,n){var r=e(v)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(Jn(l)&&"_self"!==u)return Ua(n||"",u),new Ma(null);var f=window.open(n||"",u,h);zt(f,t,"popup-blocked");try{f.focus()}catch(e){}return new Ma(f)}function Ua(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Va=encodeURIComponent("fac");function ja(e,t,n,r,i,a){return Ba.apply(this,arguments)}function Ba(){return(Ba=e(s)(e(u).mark((function t(n,r,i,a,o,s){var c,l,h,f,d,p,y,m,g,k,w,b,x,I,E,T,_,S,C;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(zt(n.config.authDomain,n,"auth-domain-config-required"),zt(n.config.apiKey,n,"invalid-api-key"),c={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:a,v:ct,eventId:o},!(r instanceof Br)){t.next=24;break}for(r.setDefaultLanguage(n.languageCode),c.providerId=r.providerId||"",ae(r.getCustomParameters())||(c.customParameters=JSON.stringify(r.getCustomParameters())),l=!0,h=!1,f=void 0,t.prev=8,d=Object.entries(s||{})[Symbol.iterator]();!(l=(p=d.next()).done);l=!0)y=e(v)(p.value,2),m=y[0],g=y[1],c[m]=g;t.next=16;break;case 12:t.prev=12,t.t0=t.catch(8),h=!0,f=t.t0;case 16:t.prev=16,t.prev=17,l||null==d.return||d.return();case 19:if(t.prev=19,!h){t.next=22;break}throw f;case 22:return t.finish(19);case 23:return t.finish(16);case 24:for(r instanceof zr&&(k=r.getScopes().filter((function(e){return""!==e}))).length>0&&(c.scopes=k.join(",")),n.tenantId&&(c.tid=n.tenantId),w=c,b=!0,x=!1,I=void 0,t.prev=28,E=Object.keys(w)[Symbol.iterator]();!(b=(T=E.next()).done);b=!0)_=T.value,void 0===w[_]&&delete w[_];t.next=36;break;case 32:t.prev=32,t.t1=t.catch(28),x=!0,I=t.t1;case 36:t.prev=36,t.prev=37,b||null==E.return||E.return();case 39:if(t.prev=39,!x){t.next=42;break}throw I;case 42:return t.finish(39);case 43:return t.finish(36);case 44:return t.next=46,n._getAppCheckToken();case 46:return S=t.sent,C=S?"#".concat(Va,"=").concat(encodeURIComponent(S)):"",t.abrupt("return","".concat(za(n),"?").concat(ue(w).slice(1)).concat(C));case 49:case"end":return t.stop()}}),t,null,[[8,12,16,24],[17,,19,23],[28,32,36,44],[37,,39,43]])})))).apply(this,arguments)}function za(e){var t=e.config;return t.emulator?Jt(t,"emulator/auth/handler"):"https://".concat(t.authDomain,"/").concat("__/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qa="webStorageSupport",Ha=function(){"use strict";function t(){e(l)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wi,this._completeRedirectFn=fa,this._overrideRedirectResult=ca}return e(h)(t,[{key:"_openPopup",value:function(t,n,r,i){var a=this;return e(s)(e(u).mark((function o(){var s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ht(null===(s=a.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),e.next=4,ja(t,n,r,Wt(),i);case 4:return c=e.sent,e.abrupt("return",Fa(t,c,Ii()));case 6:case"end":return e.stop()}}),o)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var a=this;return e(s)(e(u).mark((function o(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._originValidation(t);case 2:return e.next=4,ja(t,n,r,Wt(),i);case 4:return _i(e.sent),e.abrupt("return",new Promise((function(){})));case 7:case"end":return e.stop()}}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(Ht(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Da(t);case 2:return i=e.sent,a=new va(t),i.register("authEvent",(function(e){return zt(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(qa,{type:qa},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Ut(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return ba.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Zn()||qn()||Yn()}}]),t}(),Wa=Ha,Ka=function(){"use strict";function t(n){e(l)(this,t),this.factorId=n}return e(h)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return qt("unexpected MultiFactorSessionType")}}}]),t}(),Ga=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t){var i;return e(l)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(h)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return nn(e,"POST","/v2/accounts/mfaEnrollment:finalize",tn(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return nn(e,"POST","/v2/accounts/mfaSignIn:finalize",tn(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(Ka);(function(){"use strict";function t(){e(l)(this,t)}return e(h)(t,null,[{key:"assertion",value:function(e){return Ga._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Qa=function(){"use strict";function t(){e(l)(this,t)}return e(h)(t,null,[{key:"assertionForEnrollment",value:function(e,t){return Ya._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return Ya._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(t){return e(s)(e(u).mark((function n(){var r,i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return zt(void 0!==(r=t).auth,"internal-error"),e.next=4,n=r.auth,a={idToken:r.credential,totpEnrollmentInfo:{}},nn(n,"POST","/v2/accounts/mfaEnrollment:start",tn(n,a));case 4:return i=e.sent,e.abrupt("return",Ja._fromStartTotpMfaEnrollmentResponse(i,r.auth));case 6:case"end":return e.stop()}var n,a}),n)})))()}}]),t}();Qa.FACTOR_ID="totp";var Ya=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a){var o;return e(l)(this,r),(o=n.call(this,"totp")).otp=t,o.enrollmentId=i,o.secret=a,o}return e(h)(r,[{key:"_finalizeEnroll",value:function(t,n,r){var i=this;return e(s)(e(u).mark((function a(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return zt(void 0!==i.secret,t,"argument-error"),e.abrupt("return",vi(t,{idToken:n,displayName:r,totpVerificationInfo:i.secret._makeTotpVerificationInfo(i.otp)}));case 2:case"end":return e.stop()}}),a)})))()}},{key:"_finalizeSignIn",value:function(t,n){var r=this;return e(s)(e(u).mark((function i(){var a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return zt(void 0!==r.enrollmentId&&void 0!==r.otp,t,"argument-error"),a={verificationCode:r.otp},e.abrupt("return",Wi(t,{mfaPendingCredential:n,mfaEnrollmentId:r.enrollmentId,totpVerificationInfo:a}));case 3:case"end":return e.stop()}}),i)})))()}}],[{key:"_fromSecret",value:function(e,t){return new r(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new r(t,e)}}]),r}(Ka),Ja=function(){"use strict";function t(n,r,i,a,o,s,u){e(l)(this,t),this.sessionInfo=s,this.auth=u,this.secretKey=n,this.hashingAlgorithm=r,this.codeLength=i,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=o}return e(h)(t,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var n,r=!1;return(Xa(e)||Xa(t))&&(r=!0),r&&(Xa(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Xa(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(e,n){return new t(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}}]),t}();function Xa(e){return void 0===e||0===(null==e?void 0:e.length)}var Za="@firebase/auth",$a="0.23.2",eo=function(){"use strict";function t(n){e(l)(this,t),this.auth=n,this.internalListeners=new Map}return e(h)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(s)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){zt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var to,no=J("authIdTokenMaxAge")||300,ro=null,io=function(t){return n=e(s)(e(u).mark((function n(r){var i,a,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>no)){e.next=9;break}return e.abrupt("return");case 9:if(o=null==i?void 0:i.token,ro!==o){e.next=12;break}return e.abrupt("return");case 12:return ro=o,e.next=15,fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};to="Browser",it(new ve("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),o=r.options,s=o.apiKey,u=o.authDomain;zt(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});var c={apiKey:s,authDomain:u,clientPlatform:to,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$n(to)},l=new fr(r,i,a,c);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),it(new ve("auth-internal",(function(e){var t=dr(e.getProvider("auth").getImmediate());return new eo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ft(Za,$a,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(to)),ft(Za,$a,"esm2017");s=i("bpxeT"),l=i("8MBJY");var ao,oo=i("ge8co"),so=(h=i("a2hTj"),Nt=i("fVNic"),y=i("eYQtU"),i("jmhxu")),uo=(v=i("1t1Wn"),d=i("8nrFW"),i("l5bVx")),co=(S=i("2MbLg"),u=i("2TvXO"),l=i("8MBJY"),h=i("a2hTj"),Nt=i("fVNic"),y=i("eYQtU"),v=i("1t1Wn"),uo=i("l5bVx"),S=i("2MbLg"),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}),lo={},ho=ho||{},fo=co||self;function vo(){}function po(t){var n=void 0===t?"undefined":e(uo)(t);return"array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length}function yo(t){var n=void 0===t?"undefined":e(uo)(t);return"object"==n&&null!=t||"function"==n}var mo="closure_uid_"+(1e9*Math.random()>>>0),go=0;function ko(e,t,n){return e.call.apply(e.bind,arguments)}function wo(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function bo(e,t,n){return(bo=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ko:wo).apply(null,arguments)}function xo(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Io(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}function Eo(){this.s=this.s,this.o=this.o}Eo.prototype.s=!1,Eo.prototype.ra=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,mo)&&e[mo]||(e[mo]=++go))},Eo.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var To=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function _o(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function So(e,t){for(var n=1;n<arguments.length;n++){var r=arguments[n];if(po(r)){var i=e.length||0,a=r.length||0;e.length=i+a;for(var o=0;o<a;o++)e[i+o]=r[o]}else e.push(r)}}function Co(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Co.prototype.h=function(){this.defaultPrevented=!0};var Ao=function(){if(!fo.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{fo.addEventListener("test",vo,t),fo.removeEventListener("test",vo,t)}catch(e){}return e}();function No(e){return/^[\s\xa0]*$/.test(e)}var Do=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ro(e,t){return e<t?-1:e>t?1:0}function Oo(){var e=fo.navigator;return e&&(e=e.userAgent)?e:""}function Lo(e){return-1!=Oo().indexOf(e)}function Po(e){return Po[" "](e),e}function Mo(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}Po[" "]=vo;var Fo,Uo,Vo=Lo("Opera"),jo=Lo("Trident")||Lo("MSIE"),Bo=Lo("Edge"),zo=Bo||jo,qo=Lo("Gecko")&&!(-1!=Oo().toLowerCase().indexOf("webkit")&&!Lo("Edge"))&&!(Lo("Trident")||Lo("MSIE"))&&!Lo("Edge"),Ho=-1!=Oo().toLowerCase().indexOf("webkit")&&!Lo("Edge");function Wo(){var e=fo.document;return e?e.documentMode:void 0}e:{var Ko="",Go=(Uo=Oo(),qo?/rv:([^\);]+)(\)|;)/.exec(Uo):Bo?/Edge\/([\d\.]+)/.exec(Uo):jo?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Uo):Ho?/WebKit\/(\S+)/.exec(Uo):Vo?/(?:Version)[ \/]?(\S+)/.exec(Uo):void 0);if(Go&&(Ko=Go?Go[1]:""),jo){var Qo=Wo();if(null!=Qo&&Qo>parseFloat(Ko)){Fo=String(Qo);break e}}Fo=Ko}var Yo,Jo={};if(fo.document&&jo){var Xo=Wo();Yo=Xo||(parseInt(Fo,10)||void 0)}else Yo=void 0;var Zo=Yo;function $o(e,t){if(Co.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(qo){e:{try{Po(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:es[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$o.$.h.call(this)}}Io($o,Co);var es={2:"touch",3:"pen",4:"mouse"};$o.prototype.h=function(){$o.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ts="closure_listenable_"+(1e6*Math.random()|0),ns=0;function rs(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++ns,this.fa=this.ia=!1}function is(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function as(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function os(e){var t={};for(var n in e)t[n]=e[n];return t}var ss="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function us(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var a=0;a<ss.length;a++)n=ss[a],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function cs(e){this.src=e,this.g={},this.h=0}function ls(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],a=To(i,t);(r=0<=a)&&Array.prototype.splice.call(i,a,1),r&&(is(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function hs(e,t,n,r){for(var i=0;i<e.length;++i){var a=e[i];if(!a.fa&&a.listener==t&&a.capture==!!n&&a.la==r)return i}return-1}cs.prototype.add=function(e,t,n,r,i){var a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);var o=hs(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new rs(t,this.src,a,!!r,i)).ia=n,e.push(t)),t};var fs="closure_lm_"+(1e6*Math.random()|0),ds={};function vs(e,t,n,r,i){if(r&&r.once)return ys(e,t,n,r,i);if(Array.isArray(t)){for(var a=0;a<t.length;a++)vs(e,t[a],n,r,i);return null}return n=Is(n),e&&e[ts]?e.O(t,n,yo(r)?!!r.capture:!!r,i):ps(e,t,n,!1,r,i)}function ps(e,t,n,r,i,a){if(!t)throw Error("Invalid event type");var o=yo(i)?!!i.capture:!!i,s=bs(e);if(s||(e[fs]=s=new cs(e)),(n=s.add(t,n,r,o,a)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=ws;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Ao||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ks(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ys(e,t,n,r,i){if(Array.isArray(t)){for(var a=0;a<t.length;a++)ys(e,t[a],n,r,i);return null}return n=Is(n),e&&e[ts]?e.P(t,n,yo(r)?!!r.capture:!!r,i):ps(e,t,n,!0,r,i)}function ms(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)ms(e,t[a],n,r,i);else r=yo(r)?!!r.capture:!!r,n=Is(n),e&&e[ts]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=hs(a=e.g[t],n,r,i))&&(is(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete e.g[t],e.h--)))):e&&(e=bs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=hs(t,n,r,i)),(n=-1<e?t[e]:null)&&gs(n))}function gs(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[ts])ls(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ks(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=bs(t))?(ls(n,e),0==n.h&&(n.src=null,t[fs]=null)):is(e)}}}function ks(e){return e in ds?ds[e]:ds[e]="on"+e}function ws(e,t){if(e.fa)e=!0;else{t=new $o(t,this);var n=e.listener,r=e.la||e.src;e.ia&&gs(e),e=n.call(r,t)}return e}function bs(e){return(e=e[fs])instanceof cs?e:null}var xs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Is(e){return"function"==typeof e?e:(e[xs]||(e[xs]=function(t){return e.handleEvent(t)}),e[xs])}function Es(){Eo.call(this),this.i=new cs(this),this.S=this,this.J=null}function Ts(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new Co(t,e);else if(t instanceof Co)t.target=t.target||e;else{var i=t;us(t=new Co(r,e),i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var o=t.g=n[a];i=_s(o,r,!0,t)&&i}if(i=_s(o=t.g=e,r,!0,t)&&i,i=_s(o,r,!1,t)&&i,n)for(a=0;a<n.length;a++)i=_s(o=t.g=n[a],r,!1,t)&&i}function _s(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,a=0;a<t.length;++a){var o=t[a];if(o&&!o.fa&&o.capture==n){var s=o.listener,u=o.la||o.src;o.ia&&ls(e.i,o),i=!1!==s.call(u,r)&&i}}return i&&!r.defaultPrevented}Io(Es,Eo),Es.prototype[ts]=!0,Es.prototype.removeEventListener=function(e,t,n,r){ms(this,e,t,n,r)},Es.prototype.N=function(){if(Es.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)is(n[r]);delete t.g[e],t.h--}}this.J=null},Es.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Es.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ss=fo.JSON.stringify;function Cs(){var e=Ms,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var As,Ns=function(){"use strict";function t(){e(l)(this,t),this.h=this.g=null}return e(h)(t,[{key:"add",value:function(e,t){var n=Ds.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}]),t}(),Ds=new(function(){"use strict";function t(n,r){e(l)(this,t),this.i=n,this.j=r,this.h=0,this.g=null}return e(h)(t,[{key:"get",value:function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}]),t}())((function(){return new Rs}),(function(e){return e.reset()})),Rs=function(){"use strict";function t(){e(l)(this,t),this.next=this.g=this.h=null}return e(h)(t,[{key:"set",value:function(e,t){this.h=e,this.g=t,this.next=null}},{key:"reset",value:function(){this.next=this.g=this.h=null}}]),t}();function Os(e){fo.setTimeout((function(){throw e}),0)}function Ls(e,t){As||function(){var e=fo.Promise.resolve(void 0);As=function(){e.then(Fs)}}(),Ps||(As(),Ps=!0),Ms.add(e,t)}var Ps=!1,Ms=new Ns;function Fs(){for(var e;e=Cs();){try{e.h.call(e.g)}catch(e){Os(e)}var t=Ds;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ps=!1}function Us(e,t){Es.call(this),this.h=e||1,this.g=t||fo,this.j=bo(this.qb,this),this.l=Date.now()}function Vs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function js(e,t,n){if("function"==typeof e)n&&(e=bo(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=bo(e.handleEvent,e)}return 2147483647<Number(t)?-1:fo.setTimeout(e,t||0)}function Bs(e){e.g=js((function(){e.g=null,e.i&&(e.i=!1,Bs(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}Io(Us,Es),(ao=Us.prototype).ga=!1,ao.T=null,ao.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ts(this,"tick"),this.ga&&(Vs(this),this.start()))}},ao.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ao.N=function(){Us.$.N.call(this),Vs(this),delete this.g};var zs=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){var a;return e(l)(this,r),(a=n.call(this)).m=t,a.j=i,a.h=null,a.i=!1,a.g=null,a}return e(h)(r,[{key:"l",value:function(e){this.h=arguments,this.g?this.i=!0:Bs(this)}},{key:"N",value:function(){e(St)(e(Nt)(r.prototype),"N",this).call(this),this.g&&(fo.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}]),r}(Eo);function qs(e){Eo.call(this),this.h=e,this.g={}}Io(qs,Eo);var Hs=[];function Ws(e,t,n,r){Array.isArray(n)||(n&&(Hs[0]=n.toString()),n=Hs);for(var i=0;i<n.length;i++){var a=vs(t,n[i],r||e.handleEvent,!1,e.h||e);if(!a)break;e.g[a.key]=a}}function Ks(e){as(e.g,(function(e,t){this.g.hasOwnProperty(t)&&gs(e)}),e),e.g={}}function Gs(){this.g=!0}function Qs(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if("noop"!=a&&"stop"!=a&&"close"!=a)for(var o=1;o<i.length;o++)i[o]=""}}}return Ss(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}qs.prototype.N=function(){qs.$.N.call(this),Ks(this)},qs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Gs.prototype.Ea=function(){this.g=!1},Gs.prototype.info=function(){};var Ys={},Js=null;function Xs(){return Js=Js||new Es}function Zs(e){Co.call(this,Ys.Ta,e)}function $s(e){var t=Xs();Ts(t,new Zs(t))}function eu(e,t){Co.call(this,Ys.STAT_EVENT,e),this.stat=t}function tu(e){var t=Xs();Ts(t,new eu(t,e))}function nu(e,t){Co.call(this,Ys.Ua,e),this.size=t}function ru(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return fo.setTimeout((function(){e()}),t)}Ys.Ta="serverreachability",Io(Zs,Co),Ys.STAT_EVENT="statevent",Io(eu,Co),Ys.Ua="timingevent",Io(nu,Co);var iu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},au={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ou(){}function su(e){return e.h||(e.h=e.i())}function uu(){}ou.prototype.h=null;var cu,lu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function hu(){Co.call(this,"d")}function fu(){Co.call(this,"c")}function du(){}function vu(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new qs(this),this.P=yu,e=zo?125:void 0,this.V=new Us(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new pu}function pu(){this.i=null,this.g="",this.h=!1}Io(hu,Co),Io(fu,Co),Io(du,ou),du.prototype.g=function(){return new XMLHttpRequest},du.prototype.i=function(){return{}},cu=new du;var yu=45e3,mu={},gu={};function ku(e,t,n){e.L=1,e.v=Uu(Ou(t)),e.s=n,e.S=!0,wu(e,null)}function wu(e,t){e.G=Date.now(),Eu(e),e.A=Ou(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Xu(n.i,"t",r),e.C=0,n=e.l.I,e.h=new pu,e.g=Xc(e.l,n?t:null,!e.s),0<e.O&&(e.M=new zs(bo(e.Pa,e,e.g),e.O)),Ws(e.U,e.g,"readystatechange",e.nb),t=e.I?os(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),$s(),function(e,t,n,r,i,a){e.info((function(){if(e.g)if(a)for(var o="",s=a.split("&"),u=0;u<s.length;u++){var c=s[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function bu(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function xu(e,t,n){for(var r,i=!0;!e.J&&e.C<n.length;){if((r=Iu(e,n))==gu){4==t&&(e.o=4,tu(14),i=!1),Qs(e.j,e.m,null,"[Incomplete Response]");break}if(r==mu){e.o=4,tu(15),Qs(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Qs(e.j,e.m,r,null),Au(e,r)}bu(e)&&r!=gu&&r!=mu&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,tu(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ca&&(e.ca=!0,(t=e.l).g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qc(t),t.L=!0,tu(11))):(Qs(e.j,e.m,n,"[Invalid Chunked Response]"),Cu(e),Su(e))}function Iu(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?gu:(n=Number(t.substring(n,r)),isNaN(n)?mu:(r+=1)+n>t.length?gu:(t=t.substr(r,n),e.C=r+n,t))}function Eu(e){e.Y=Date.now()+e.P,Tu(e,e.P)}function Tu(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ru(bo(e.lb,e),t)}function _u(e){e.B&&(fo.clearTimeout(e.B),e.B=null)}function Su(e){0==e.l.H||e.J||Kc(e.l,e)}function Cu(e){_u(e);var t=e.M;t&&"function"==typeof t.ra&&t.ra(),e.M=null,Vs(e.V),Ks(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function Au(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||ic(n.h,e)))if(!e.K&&ic(n.h,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(a){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Wc(n),Pc(n)}zc(n),tu(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&0==n.A&&!n.v&&(n.v=ru(bo(n.ib,n),6e3));if(1>=rc(n.h)&&n.na){try{n.na()}catch(a){}n.na=void 0}}else Qc(n,11)}else if((e.K||n.g==e)&&Wc(n),!No(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){var a=i[t];if(n.V=a[0],a=a[1],2==n.H)if("c"==a[0]){n.J=a[1],n.oa=a[2];var o=a[3];null!=o&&(n.qa=o,n.j.info("VER="+n.qa));var s=a[4];null!=s&&(n.Ga=s,n.j.info("SVER="+n.Ga));var u=a[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;var c=e.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.h;h.g||-1==l.indexOf("spdy")&&-1==l.indexOf("quic")&&-1==l.indexOf("h2")||(h.j=h.l,h.g=new Set,h.h&&(ac(h,h.h),h.h=null))}if(r.F){var f=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.Da=f,Fu(r.G,r.F,f))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms"));var d=e;if((r=n).wa=Jc(r,r.I?r.oa:null,r.Y),d.K){oc(r.h,d);var v=d,p=r.K;p&&v.setTimeout(p),v.B&&(_u(v),Eu(v)),r.g=d}else Bc(r);0<n.i.length&&Fc(n)}else"stop"!=a[0]&&"close"!=a[0]||Qc(n,7);else 3==n.H&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?Qc(n,7):Lc(n):"noop"!=a[0]&&n.l&&n.l.Aa(a),n.A=0)}$s()}catch(a){}}function Nu(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(po(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.sa&&"function"==typeof e.sa)return e.sa();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(po(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(var r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(po(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}(ao=vu.prototype).setTimeout=function(e){this.P=e},ao.nb=function(e){e=e.target;var t=this.M;t&&3==Cc(e)?t.l():this.Pa(e)},ao.Pa=function(e){try{if(e==this.g)e:{var t=Cc(this.g),n=this.g.Ia();this.g.da();if(!(3>t)&&(3!=t||zo||this.g&&(this.h.h||this.g.ja()||Ac(this.g)))){this.J||4!=t||7==n||$s(),_u(this);var r=this.g.da();this.aa=r;t:if(bu(this)){var i=Ac(this.g);e="";var a=i.length,o=4==Cc(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Cu(this),Su(this);var s="";break t}this.h.i=new fo.TextDecoder}for(n=0;n<a;n++)this.h.h=!0,e+=this.h.i.decode(i[n],{stream:o&&n==a-1});i.splice(0,a),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=200==r,function(e,t,n,r,i,a,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+a+" "+o}))}(this.j,this.u,this.A,this.m,this.W,t,r),this.i){if(this.ba&&!this.K){t:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!No(u)){var l=u;break t}}l=null}if(!(r=l)){this.i=!1,this.o=3,tu(12),Cu(this),Su(this);break e}Qs(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Au(this,r)}this.S?(xu(this,t,s),zo&&this.i&&3==t&&(Ws(this.U,this.V,"tick",this.mb),this.V.start())):(Qs(this.j,this.m,s,null),Au(this,s)),4==t&&Cu(this),this.i&&!this.J&&(4==t?Kc(this.l,this):(this.i=!1,Eu(this)))}else 400==r&&0<s.indexOf("Unknown SID")?(this.o=3,tu(12)):(this.o=0,tu(13)),Cu(this),Su(this)}}}catch(t){}},ao.mb=function(){if(this.g){var e=Cc(this.g),t=this.g.ja();this.C<t.length&&(_u(this),xu(this,e,t),this.i&&4!=e&&Eu(this))}},ao.cancel=function(){this.J=!0,Cu(this)},ao.lb=function(){this.B=null;var e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&($s(),tu(17)),Cu(this),this.o=2,Su(this)):Tu(this,this.Y-e)};var Du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ru(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ru){this.h=void 0!==t?t:e.h,Lu(this,e.j),this.s=e.s,this.g=e.g,Pu(this,e.m),this.l=e.l,t=e.i;var n=new Gu;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Mu(this,n),this.o=e.o}else e&&(n=String(e).match(Du))?(this.h=!!t,Lu(this,n[1]||"",!0),this.s=Vu(n[2]||""),this.g=Vu(n[3]||"",!0),Pu(this,n[4]),this.l=Vu(n[5]||"",!0),Mu(this,n[6]||"",!0),this.o=Vu(n[7]||"")):(this.h=!!t,this.i=new Gu(null,this.h))}function Ou(e){return new Ru(e)}function Lu(e,t,n){e.j=n?Vu(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Pu(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Mu(e,t,n){t instanceof Gu?(e.i=t,function(e,t){t&&!e.j&&(Qu(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Yu(this,t),Xu(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=ju(t,Wu)),e.i=new Gu(t,e.h))}function Fu(e,t,n){e.i.set(t,n)}function Uu(e){return Fu(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Vu(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ju(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Bu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Bu(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ru.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ju(t,zu,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(ju(t,zu,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ju(n,"/"==n.charAt(0)?Hu:qu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ju(n,Ku)),e.join("")};var zu=/[#\/\?@]/g,qu=/[#\?:]/g,Hu=/[#\?]/g,Wu=/[#\?@]/g,Ku=/#/g;function Gu(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Qu(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var a=e[n].substring(0,r);i=e[n].substring(r+1)}else a=e[n];t(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Yu(e,t){Qu(e),t=Zu(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ju(e,t){return Qu(e),t=Zu(e,t),e.g.has(t)}function Xu(e,t,n){Yu(e,t),0<n.length&&(e.i=null,e.g.set(Zu(e,t),_o(n)),e.h+=n.length)}function Zu(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(ao=Gu.prototype).add=function(e,t){Qu(this),this.i=null,e=Zu(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},ao.forEach=function(e,t){Qu(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},ao.sa=function(){Qu(this);for(var e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[],r=0;r<t.length;r++)for(var i=e[r],a=0;a<i.length;a++)n.push(t[r]);return n},ao.Z=function(e){Qu(this);var t=[];if("string"==typeof e)Ju(this,e)&&(t=t.concat(this.g.get(Zu(this,e))));else{e=Array.from(this.g.values());for(var n=0;n<e.length;n++)t=t.concat(e[n])}return t},ao.set=function(e,t){return Qu(this),this.i=null,Ju(this,e=Zu(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},ao.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},ao.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=Array.from(this.g.keys()),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r)),a=this.Z(r);for(r=0;r<a.length;r++){var o=i;""!==a[r]&&(o+="="+encodeURIComponent(String(a[r]))),e.push(o)}}return this.i=e.join("&")};var $u=function t(n,r){"use strict";e(l)(this,t),this.h=n,this.g=r};function ec(e){this.l=e||tc,fo.PerformanceNavigationTiming?e=0<(e=fo.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(fo.g&&fo.g.Ka&&fo.g.Ka()&&fo.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tc=10;function nc(e){return!!e.h||!!e.g&&e.g.size>=e.j}function rc(e){return e.h?1:e.g?e.g.size:0}function ic(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function ac(e,t){e.g?e.g.add(t):e.h=t}function oc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function sc(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){var t=e.i,n=!0,r=!1,i=void 0;try{for(var a,o=e.g.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;t=t.concat(s.F)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}return _o(e.i)}function uc(){}function cc(){this.g=new uc}function lc(e,t,n){var r=n||"";try{Nu(e,(function(e,n){var i=e;yo(e)&&(i=Ss(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function hc(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function fc(e){this.l=e.fc||null,this.j=e.ob||!1}function dc(e,t){Es.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=vc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ec.prototype.cancel=function(){if(this.i=sc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){var e=!0,t=!1,n=void 0;try{for(var r,i=this.g.values()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){r.value.cancel()}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}this.g.clear()}},uc.prototype.stringify=function(e){return fo.JSON.stringify(e,void 0)},uc.prototype.parse=function(e){return fo.JSON.parse(e,void 0)},Io(fc,ou),fc.prototype.g=function(){return new dc(this.l,this.j)},fc.prototype.i=function(e){return function(){return e}}({}),Io(dc,Es);var vc=0;function pc(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function yc(e){e.readyState=4,e.l=null,e.j=null,e.A=null,mc(e)}function mc(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(ao=dc.prototype).open=function(e,t){if(this.readyState!=vc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,mc(this)},ao.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||fo).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},ao.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((function(){})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,yc(this)),this.readyState=vc},ao.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,mc(this)),this.g&&(this.readyState=3,mc(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==fo.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pc(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},ao.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?yc(this):mc(this),3==this.readyState&&pc(this)}},ao.Za=function(e){this.g&&(this.response=this.responseText=e,yc(this))},ao.Ya=function(e){this.g&&(this.response=e,yc(this))},ao.ka=function(){this.g&&yc(this)},ao.setRequestHeader=function(e,t){this.v.append(e,t)},ao.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},ao.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(dc.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var gc=fo.JSON.parse;function kc(e){Es.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=wc,this.L=this.M=!1}Io(kc,Es);var wc="",bc=/^https?$/i,xc=["POST","PUT"];function Ic(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ec(e),_c(e)}function Ec(e){e.F||(e.F=!0,Ts(e,"complete"),Ts(e,"error"))}function Tc(e){if(e.h&&void 0!==ho&&(!e.C[1]||4!=Cc(e)||2!=e.da()))if(e.v&&4==Cc(e))js(e.La,0,e);else if(Ts(e,"readystatechange"),4==Cc(e)){e.h=!1;try{var t,n=e.da();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var a=String(e.I).match(Du)[1]||null;if(!a&&fo.self&&fo.self.location){var o=fo.self.location.protocol;a=o.substr(0,o.length-1)}i=!bc.test(a?a.toLowerCase():"")}t=i}if(t)Ts(e,"complete"),Ts(e,"success");else{e.m=6;try{var s=2<Cc(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",Ec(e)}}finally{_c(e)}}}function _c(e,t){if(e.g){Sc(e);var n=e.g,r=e.C[0]?vo:null;e.g=null,e.C=null,t||Ts(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Sc(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(fo.clearTimeout(e.A),e.A=null)}function Cc(e){return e.g?e.g.readyState:0}function Ac(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case wc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Nc(e){var t="";return as(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Dc(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Nc(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Fu(e,t,n))}function Rc(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Oc(e){this.Ga=0,this.i=[],this.j=new Gs,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Rc("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Rc("baseRetryDelayMs",5e3,e),this.hb=Rc("retryDelaySeedMs",1e4,e),this.eb=Rc("forwardChannelMaxRetries",2,e),this.xa=Rc("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new ec(e&&e.concurrentRequestLimit),this.Ja=new cc,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function Lc(e){if(Mc(e),3==e.H){var t=e.W++,n=Ou(e.G);Fu(n,"SID",e.J),Fu(n,"RID",t),Fu(n,"TYPE","terminate"),Vc(e,n),(t=new vu(e,e.j,t,void 0)).L=2,t.v=Uu(Ou(n)),n=!1,fo.navigator&&fo.navigator.sendBeacon&&(n=fo.navigator.sendBeacon(t.v.toString(),"")),!n&&fo.Image&&((new Image).src=t.v,n=!0),n||(t.g=Xc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Eu(t)}Yc(e)}function Pc(e){e.g&&(qc(e),e.g.cancel(),e.g=null)}function Mc(e){Pc(e),e.u&&(fo.clearTimeout(e.u),e.u=null),Wc(e),e.h.cancel(),e.m&&("number"==typeof e.m&&fo.clearTimeout(e.m),e.m=null)}function Fc(e){nc(e.h)||e.m||(e.m=!0,Ls(e.Na,e),e.C=0)}function Uc(e,t){var n;n=t?t.m:e.W++;var r=Ou(e.G);Fu(r,"SID",e.J),Fu(r,"RID",n),Fu(r,"AID",e.V),Vc(e,r),e.o&&e.s&&Dc(r,e.o,e.s),n=new vu(e,e.j,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=jc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ac(e.h,n),ku(n,r,t)}function Vc(e,t){e.ma&&as(e.ma,(function(e,n){Fu(t,n,e)})),e.l&&Nu({},(function(e,n){Fu(t,n,e)}))}function jc(e,t,n){n=Math.min(e.i.length,n);var r=e.l?bo(e.l.Va,e.l,e):null;e:for(var i=e.i,a=-1;;){var o=["count="+n];-1==a?0<n?(a=i[0].h,o.push("ofs="+a)):a=0:o.push("ofs="+a);for(var s=!0,u=0;u<n;u++){var c=i[u].h,l=i[u].g;if(0>(c-=a))a=Math.max(0,i[u].h-100),s=!1;else try{lc(l,o,"req"+c+"_")}catch(e){r&&r(l)}}if(s){r=o.join("&");break e}}return e=e.i.splice(0,n),t.F=e,r}function Bc(e){e.g||e.u||(e.ba=1,Ls(e.Ma,e),e.A=0)}function zc(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=ru(bo(e.Ma,e),Gc(e,e.A)),e.A++,!0)}function qc(e){null!=e.B&&(fo.clearTimeout(e.B),e.B=null)}function Hc(e){e.g=new vu(e,e.j,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Ou(e.wa);Fu(t,"RID","rpc"),Fu(t,"SID",e.J),Fu(t,"CI",e.M?"0":"1"),Fu(t,"AID",e.V),Fu(t,"TYPE","xmlhttp"),Vc(e,t),e.o&&e.s&&Dc(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Uu(Ou(t)),n.s=null,n.S=!0,wu(n,e)}function Wc(e){null!=e.v&&(fo.clearTimeout(e.v),e.v=null)}function Kc(e,t){var n=null;if(e.g==t){Wc(e),qc(e),e.g=null;var r=2}else{if(!ic(e.h,t))return;n=t.F,oc(e.h,t),r=1}if(0!=e.H)if(e.ta=t.aa,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;Ts(r=Xs(),new nu(r,n)),Fc(e)}else Bc(e);else if(3==(i=t.o)||0==i&&0<e.ta||!(1==r&&function(e,t){return!(rc(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.F.concat(e.i),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=ru(bo(e.Na,e,t),Gc(e,e.C)),e.C++,0)))}(e,t)||2==r&&zc(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Qc(e,5);break;case 4:Qc(e,10);break;case 3:Qc(e,6);break;default:Qc(e,2)}}function Gc(e,t){var n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Qc(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=bo(e.pb,e);n||(n=new Ru("//www.google.com/images/cleardot.gif"),fo.location&&"http"==fo.location.protocol||Lu(n,"https"),Uu(n)),function(e,t){var n=new Gs;if(fo.Image){var r=new Image;r.onload=xo(hc,n,r,"TestLoadImage: loaded",!0,t),r.onerror=xo(hc,n,r,"TestLoadImage: error",!1,t),r.onabort=xo(hc,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=xo(hc,n,r,"TestLoadImage: timeout",!1,t),fo.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else tu(2);e.H=0,e.l&&e.l.za(t),Yc(e),Mc(e)}function Yc(e){if(e.H=0,e.pa=[],e.l){var t=sc(e.h);0==t.length&&0==e.i.length||(So(e.pa,t),So(e.pa,e.i),e.h.i.length=0,_o(e.i),e.i.length=0),e.l.ya()}}function Jc(e,t,n){var r=n instanceof Ru?Ou(n):new Ru(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Pu(r,r.m);else{var i=fo.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var a=new Ru(null,void 0);r&&Lu(a,r),t&&(a.g=t),i&&Pu(a,i),n&&(a.l=n),r=a}return n=e.F,t=e.Da,n&&t&&Fu(r,n,t),Fu(r,"VER",e.qa),Vc(e,r),r}function Xc(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new kc(new fc({ob:!0})):new kc(e.va)).Oa(e.I),t}function Zc(){}function $c(){if(jo&&!(10<=Number(Zo)))throw Error("Environmental error: no available transport.")}function el(e,t){Es.call(this),this.g=new Oc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!No(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!No(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new rl(this)}function tl(e){hu.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nl(){fu.call(this),this.status=1}function rl(e){this.g=e}function il(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function al(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var a=e.g[3],o=t+(a^n&(i^a))+r[0]+3614090360&4294967295;o=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=n+(o<<7&4294967295|o>>>25))+((o=a+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^a&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(a^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(a^n&(i^a))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=a+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^a&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(a^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(a^n&(i^a))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=a+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^a&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(a^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(a^n&(i^a))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=a+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^a&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(a^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^a&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=a+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(a^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(a^t&(i^a))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^a&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=a+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(a^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(a^t&(i^a))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^a&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=a+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(a^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(a^t&(i^a))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^a&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=a+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(a^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(a^t&(i^a))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^a)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=a+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(a^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^a^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^a)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=a+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(a^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^a^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^a)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=a+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(a^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^a^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^a)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=a+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(a^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^a^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~a))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=a+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(a|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(a^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~a))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=a+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(a|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(a^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~a))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=a+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(a|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(a^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((a=(t=n+((o=t+(i^(n|~a))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=a+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=a+((o=i+(t^(a|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+a&4294967295}function ol(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var a=0|e[i];r&&a==t||(n[i]=a,r=!1)}this.g=n}(ao=kc.prototype).Oa=function(e){this.M=e},ao.ha=function(t,n,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);n=n?n.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():cu.g(),this.C=this.u?su(this.u):su(cu),this.g.onreadystatechange=bo(this.La,this);try{this.G=!0,this.g.open(n,String(t),!0),this.G=!1}catch(e){return void Ic(this,e)}if(t=r||"",r=new Map(this.headers),i){var a=!0,o=!1,s=void 0;if(Object.getPrototypeOf(i)===Object.prototype)for(var u in i)r.set(u,i[u]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));try{for(var c,l=i.keys()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=c.value;r.set(h,i.get(h))}}catch(e){o=!0,s=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw s}}}}i=Array.from(r.keys()).find((function(e){return"content-type"==e.toLowerCase()})),u=fo.FormData&&t instanceof fo.FormData,!(0<=To(xc,n))||i||u||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");var f=!0,d=!1,p=void 0;try{for(var y,m=r[Symbol.iterator]();!(f=(y=m.next()).done);f=!0){var g=e(v)(y.value,2),k=g[0],w=g[1];this.g.setRequestHeader(k,w)}}catch(e){d=!0,p=e}finally{try{f||null==m.return||m.return()}finally{if(d)throw p}}this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Sc(this),0<this.B&&((this.L=function(e){return jo&&Mo(Jo,9,(function(){for(var e=0,t=Do(String(Fo)).split("."),n=Do("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var a=t[i]||"",o=n[i]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==a[0].length&&0==o[0].length)break;e=Ro(0==a[1].length?0:parseInt(a[1],10),0==o[1].length?0:parseInt(o[1],10))||Ro(0==a[2].length,0==o[2].length)||Ro(a[2],o[2]),a=a[3],o=o[3]}while(0==e)}return 0<=e}))&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=bo(this.ua,this)):this.A=js(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(e){Ic(this,e)}},ao.ua=function(){void 0!==ho&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ts(this,"timeout"),this.abort(8))},ao.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ts(this,"complete"),Ts(this,"abort"),_c(this))},ao.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_c(this,!0)),kc.$.N.call(this)},ao.La=function(){this.s||(this.G||this.v||this.l?Tc(this):this.kb())},ao.kb=function(){Tc(this)},ao.da=function(){try{return 2<Cc(this)?this.g.status:-1}catch(e){return-1}},ao.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},ao.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),gc(t)}},ao.Ia=function(){return this.m},ao.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(ao=Oc.prototype).qa=8,ao.H=1,ao.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;var t=new vu(this,this.j,e,void 0),n=this.s;if(this.U&&(n?us(n=os(n),this.U):n=this.U),null!==this.o||this.O||(t.I=n,n=null),this.P)e:{for(var r=0,i=0;i<this.i.length;i++){var a=this.i[i];if(void 0===(a="__data__"in a.g&&"string"==typeof(a=a.g.__data__)?a.length:void 0))break;if(4096<(r+=a)){r=i;break e}if(4096===r||i===this.i.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=jc(this,t,r),Fu(i=Ou(this.G),"RID",e),Fu(i,"CVER",22),this.F&&Fu(i,"X-HTTP-Session-Id",this.F),Vc(this,i),n&&(this.O?r="headers="+encodeURIComponent(String(Nc(n)))+"&"+r:this.o&&Dc(i,this.o,n)),ac(this.h,t),this.bb&&Fu(i,"TYPE","init"),this.P?(Fu(i,"$req",r),Fu(i,"SID","null"),t.ba=!0,ku(t,i,null)):ku(t,i,r),this.H=2}}else 3==this.H&&(e?Uc(this,e):0==this.i.length||nc(this.h)||Uc(this))},ao.Ma=function(){if(this.u=null,Hc(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=ru(bo(this.jb,this),e)}},ao.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,tu(10),Pc(this),Hc(this))},ao.ib=function(){null!=this.v&&(this.v=null,Pc(this),zc(this),tu(19))},ao.pb=function(e){e?(this.j.info("Successfully pinged google.com"),tu(2)):(this.j.info("Failed to ping google.com"),tu(1))},(ao=Zc.prototype).Ba=function(){},ao.Aa=function(){},ao.za=function(){},ao.ya=function(){},ao.Va=function(){},$c.prototype.g=function(e,t){return new el(e,t)},Io(el,Es),el.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;tu(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=Jc(e,null,e.Y),Fc(e)},el.prototype.close=function(){Lc(this.g)},el.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Ss(e),e=n);t.i.push(new $u(t.fb++,e)),3==t.H&&Fc(t)},el.prototype.N=function(){this.g.l=null,delete this.j,Lc(this.g),delete this.g,el.$.N.call(this)},Io(tl,hu),Io(nl,fu),Io(rl,Zc),rl.prototype.Ba=function(){Ts(this.g,"a")},rl.prototype.Aa=function(e){Ts(this.g,new tl(e))},rl.prototype.za=function(e){Ts(this.g,new nl)},rl.prototype.ya=function(){Ts(this.g,"b")},Io(il,(function(){this.blockSize=-1})),il.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},il.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,a=0;a<t;){if(0==i)for(;a<=n;)al(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<t;)if(r[i++]=e.charCodeAt(a++),i==this.blockSize){al(this,r),i=0;break}}else for(;a<t;)if(r[i++]=e[a++],i==this.blockSize){al(this,r),i=0;break}}this.h=i,this.i+=t},il.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var sl={};function ul(e){return-128<=e&&128>e?Mo(sl,e,(function(e){return new ol([0|e],0>e?-1:0)})):new ol([0|e],0>e?-1:0)}function cl(e){if(isNaN(e)||!isFinite(e))return hl;if(0>e)return yl(cl(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ll;return new ol(t,0)}var ll=4294967296,hl=ul(0),fl=ul(1),dl=ul(16777216);function vl(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function pl(e){return-1==e.h}function yl(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ol(n,~e.h).add(fl)}function ml(e,t){return e.add(yl(t))}function gl(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function kl(e,t){this.g=e,this.h=t}function wl(e,t){if(vl(t))throw Error("division by zero");if(vl(e))return new kl(hl,hl);if(pl(e))return t=wl(yl(e),t),new kl(yl(t.g),yl(t.h));if(pl(t))return t=wl(e,yl(t)),new kl(yl(t.g),t.h);if(30<e.g.length){if(pl(e)||pl(t))throw Error("slowDivide_ only works with positive integers.");for(var n=fl,r=t;0>=r.X(e);)n=bl(n),r=bl(r);var i=xl(n,1),a=xl(r,1);for(r=xl(r,2),n=xl(n,2);!vl(r);){var o=a.add(r);0>=o.X(e)&&(i=i.add(n),a=o),r=xl(r,1),n=xl(n,1)}return t=ml(e,i.R(t)),new kl(i,t)}for(i=hl;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(a=cl(n)).R(t);pl(o)||0<o.X(e);)o=(a=cl(n-=r)).R(t);vl(a)&&(a=fl),i=i.add(a),e=ml(e,o)}return new kl(i,e)}function bl(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ol(n,e.h)}function xl(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],a=0;a<r;a++)i[a]=0<t?e.D(a+n)>>>t|e.D(a+n+1)<<32-t:e.D(a+n);return new ol(i,e.h)}(ao=ol.prototype).ea=function(){if(pl(this))return-yl(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ll+r)*t,t*=ll}return e},ao.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(vl(this))return"0";if(pl(this))return"-"+yl(this).toString(e);for(var t=cl(Math.pow(e,6)),n=this,r="";;){var i=wl(n,t).g,a=((0<(n=ml(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(vl(n=i))return a+r;for(;6>a.length;)a="0"+a;r=a+r}},ao.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},ao.X=function(e){return pl(e=ml(this,e))?-1:vl(e)?0:1},ao.abs=function(){return pl(this)?yl(this):this},ao.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var a=r+(65535&this.D(i))+(65535&e.D(i)),o=(a>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,a&=65535,o&=65535,n[i]=o<<16|a}return new ol(n,-2147483648&n[n.length-1]?-1:0)},ao.R=function(e){if(vl(this)||vl(e))return hl;if(pl(this))return pl(e)?yl(this).R(yl(e)):yl(yl(this).R(e));if(pl(e))return yl(this.R(yl(e)));if(0>this.X(dl)&&0>e.X(dl))return cl(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var a=this.D(r)>>>16,o=65535&this.D(r),s=e.D(i)>>>16,u=65535&e.D(i);n[2*r+2*i]+=o*u,gl(n,2*r+2*i),n[2*r+2*i+1]+=a*u,gl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*s,gl(n,2*r+2*i+1),n[2*r+2*i+2]+=a*s,gl(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ol(n,0)},ao.gb=function(e){return wl(this,e).h},ao.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ol(n,this.h&e.h)},ao.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ol(n,this.h|e.h)},ao.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ol(n,this.h^e.h)},$c.prototype.createWebChannel=$c.prototype.g,el.prototype.send=el.prototype.u,el.prototype.open=el.prototype.m,el.prototype.close=el.prototype.close,iu.NO_ERROR=0,iu.TIMEOUT=8,iu.HTTP_ERROR=6,au.COMPLETE="complete",uu.EventType=lu,lu.OPEN="a",lu.CLOSE="b",lu.ERROR="c",lu.MESSAGE="d",Es.prototype.listen=Es.prototype.O,kc.prototype.listenOnce=kc.prototype.P,kc.prototype.getLastError=kc.prototype.Sa,kc.prototype.getLastErrorCode=kc.prototype.Ia,kc.prototype.getStatus=kc.prototype.da,kc.prototype.getResponseJson=kc.prototype.Wa,kc.prototype.getResponseText=kc.prototype.ja,kc.prototype.send=kc.prototype.ha,kc.prototype.setWithCredentials=kc.prototype.Oa,il.prototype.digest=il.prototype.l,il.prototype.reset=il.prototype.reset,il.prototype.update=il.prototype.j,ol.prototype.add=ol.prototype.add,ol.prototype.multiply=ol.prototype.R,ol.prototype.modulo=ol.prototype.gb,ol.prototype.compare=ol.prototype.X,ol.prototype.toNumber=ol.prototype.ea,ol.prototype.toString=ol.prototype.toString,ol.prototype.getBits=ol.prototype.D,ol.fromNumber=cl,ol.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return yl(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=cl(Math.pow(n,8)),i=hl,a=0;a<t.length;a+=8){var o=Math.min(8,t.length-a),s=parseInt(t.substring(a,a+o),n);8>o?(o=cl(Math.pow(n,o)),i=i.R(o).add(cl(s))):i=(i=i.R(r)).add(cl(s))}return i};var Il=lo.createWebChannelTransport=function(){return new $c},El=lo.getStatEventTarget=function(){return Xs()},Tl=lo.ErrorCode=iu,_l=lo.EventType=au,Sl=lo.Event=Ys,Cl=lo.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Al=lo.FetchXmlHttpFactory=fc,Nl=lo.WebChannel=uu,Dl=lo.XhrIo=kc,Rl=lo.Md5=il,Ol=lo.Integer=ol,Ll="@firebase/firestore",Pl=function(){"use strict";function t(n){e(l)(this,t),this.uid=n}return e(h)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),t}();Pl.UNAUTHENTICATED=new Pl(null),Pl.GOOGLE_CREDENTIALS=new Pl("google-credentials-uid"),Pl.FIRST_PARTY=new Pl("first-party-uid"),Pl.MOCK_USER=new Pl("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ml="9.22.0",Fl=new _e("@firebase/firestore");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){return Fl.logLevel}function Vl(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Fl.logLevel<=me.DEBUG){var a,o=r.map(zl);(a=Fl).debug.apply(a,["Firestore (".concat(Ml,"): ").concat(t)].concat(e(d)(o)))}}function jl(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Fl.logLevel<=me.ERROR){var a,o=r.map(zl);(a=Fl).error.apply(a,["Firestore (".concat(Ml,"): ").concat(t)].concat(e(d)(o)))}}function Bl(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Fl.logLevel<=me.WARN){var a,o=r.map(zl);(a=Fl).warn.apply(a,["Firestore (".concat(Ml,"): ").concat(t)].concat(e(d)(o)))}}function zl(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(Ml,") INTERNAL ASSERTION FAILED: ")+e;throw jl(t),new Error(t)}function Hl(e,t){e||ql()}function Wl(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},Gl=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){var a;return e(l)(this,r),(a=n.call(this,t,i)).code=t,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},e(so)(a)}return r}(te),Ql=function t(){"use strict";var n=this;e(l)(this,t),this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))},Yl=function t(n,r){"use strict";e(l)(this,t),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},Jl=function(){"use strict";function t(){e(l)(this,t)}return e(h)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(Pl.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),Xl=function(){"use strict";function t(n){e(l)(this,t),this.token=n,this.changeListener=null}return e(h)(t,[{key:"getToken",value:function(){return Promise.resolve(this.token)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){var n=this;this.changeListener=t,e.enqueueRetryable((function(){return t(n.token.user)}))}},{key:"shutdown",value:function(){this.changeListener=null}}]),t}(),Zl=function(){"use strict";function t(n){e(l)(this,t),this.t=n,this.currentUser=Pl.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}return e(h)(t,[{key:"start",value:function(t,n){var r=this,i=this.i,a=function(e){return r.i!==i?(i=r.i,n(e)):Promise.resolve()},o=new Ql;this.o=function(){var e=r;r.i++,r.currentUser=r.u(),o.resolve(),o=new Ql,t.enqueueRetryable((function(){return a(e.currentUser)}))};var c=function(){var n=o,i=r;t.enqueueRetryable(e(s)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.promise;case 2:return e.next=4,a(i.currentUser);case 4:case"end":return e.stop()}}),t)}))))},l=function(e){Vl("FirebaseAuthCredentialsProvider","Auth detected"),r.auth=e,r.auth.addAuthTokenListener(r.o),c()};this.t.onInit((function(e){return l(e)})),setTimeout((function(){if(!r.auth){var e=r.t.getImmediate({optional:!0});e?l(e):(Vl("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ql)}}),0),c()}},{key:"getToken",value:function(){var e=this,t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((function(n){return e.i!==t?(Vl("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),e.getToken()):n?(Hl("string"==typeof n.accessToken),new Yl(n.accessToken,e.currentUser)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.auth&&this.auth.removeAuthTokenListener(this.o)}},{key:"u",value:function(){var e=this.auth&&this.auth.getUid();return Hl(null===e||"string"==typeof e),new Pl(e)}}]),t}(),$l=function(){"use strict";function t(n,r,i){e(l)(this,t),this.h=n,this.l=r,this.m=i,this.type="FirstParty",this.user=Pl.FIRST_PARTY,this.g=new Map}return e(h)(t,[{key:"p",value:function(){return this.m?this.m():null}},{key:"headers",get:function(){this.g.set("X-Goog-AuthUser",this.h);var e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}]),t}(),eh=function(){"use strict";function t(n,r,i){e(l)(this,t),this.h=n,this.l=r,this.m=i}return e(h)(t,[{key:"getToken",value:function(){return Promise.resolve(new $l(this.h,this.l,this.m))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(Pl.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),th=function t(n){"use strict";e(l)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},nh=function(){"use strict";function t(n){e(l)(this,t),this.I=n,this.forceRefresh=!1,this.appCheck=null,this.T=null}return e(h)(t,[{key:"start",value:function(e,t){var n=this;this.o=function(r){e.enqueueRetryable((function(){return function(e){null!=e.error&&Vl("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));var r=e.token!==n.T;return n.T=e.token,Vl("FirebaseAppCheckTokenProvider","Received ".concat(r?"new":"existing"," token.")),r?t(e.token):Promise.resolve()}(r)}))};var r=function(e){Vl("FirebaseAppCheckTokenProvider","AppCheck detected"),n.appCheck=e,n.appCheck.addTokenListener(n.o)};this.I.onInit((function(e){return r(e)})),setTimeout((function(){if(!n.appCheck){var e=n.I.getImmediate({optional:!0});e?r(e):Vl("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}},{key:"getToken",value:function(){var e=this,t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((function(t){return t?(Hl("string"==typeof t.token),e.T=t.token,new th(t.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rh(e){var t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(var r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ih=function(){"use strict";function t(){e(l)(this,t)}return e(h)(t,null,[{key:"A",value:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";n.length<20;)for(var r=rh(40),i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length));return n}}]),t}();function ah(e,t){return e<t?-1:e>t?1:0}function oh(e,t,n){return e.length===t.length&&e.every((function(e,r){return n(e,t[r])}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var sh=function(){"use strict";function t(n,r){if(e(l)(this,t),this.seconds=n,this.nanoseconds=r,r<0)throw new Gl(Kl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new Gl(Kl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(n<-62135596800)throw new Gl(Kl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new Gl(Kl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n)}return e(h)(t,[{key:"toDate",value:function(){return new Date(this.toMillis())}},{key:"toMillis",value:function(){return 1e3*this.seconds+this.nanoseconds/1e6}},{key:"_compareTo",value:function(e){return this.seconds===e.seconds?ah(this.nanoseconds,e.nanoseconds):ah(this.seconds,e.seconds)}},{key:"isEqual",value:function(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}},{key:"toString",value:function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}},{key:"toJSON",value:function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}},{key:"valueOf",value:function(){var e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}],[{key:"now",value:function(){return t.fromMillis(Date.now())}},{key:"fromDate",value:function(e){return t.fromMillis(e.getTime())}},{key:"fromMillis",value:function(e){var n=Math.floor(e/1e3);return new t(n,Math.floor(1e6*(e-1e3*n)))}}]),t}(),uh=function(){"use strict";function t(n){e(l)(this,t),this.timestamp=n}return e(h)(t,[{key:"compareTo",value:function(e){return this.timestamp._compareTo(e.timestamp)}},{key:"isEqual",value:function(e){return this.timestamp.isEqual(e.timestamp)}},{key:"toMicroseconds",value:function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}},{key:"toString",value:function(){return"SnapshotVersion("+this.timestamp.toString()+")"}},{key:"toTimestamp",value:function(){return this.timestamp}}],[{key:"fromTimestamp",value:function(e){return new t(e)}},{key:"min",value:function(){return new t(new sh(0,0))}},{key:"max",value:function(){return new t(new sh(253402300799,999999999))}}]),t}(),ch=function(){"use strict";function t(n,r,i){e(l)(this,t),void 0===r?r=0:r>n.length&&ql(),void 0===i?i=n.length-r:i>n.length-r&&ql(),this.segments=n,this.offset=r,this.len=i}return e(h)(t,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(e){return 0===t.comparator(this,e)}},{key:"child",value:function(e){var n=this.segments.slice(this.offset,this.limit());return e instanceof t?e.forEach((function(e){n.push(e)})):n.push(e),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(e){return this.segments[this.offset+e]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(e){if(e.length<this.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"isImmediateParentOf",value:function(e){if(this.length+1!==e.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"forEach",value:function(e){for(var t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=e.get(r),a=t.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}]),t}(),lh=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.apply(this,arguments)}return e(h)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var a=[],o=!0,s=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h,f=c.value;if(f.indexOf("//")>=0)throw new Gl(Kl.INVALID_ARGUMENT,"Invalid segment (".concat(f,"). Paths must not contain // in them."));(h=a).push.apply(h,e(d)(f.split("/").filter((function(e){return e.length>0}))))}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(ch),hh=/^[_a-zA-Z][_a-zA-Z0-9]*$/,fh=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.apply(this,arguments)}return e(h)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().map((function(e){return e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e})).join(".")}},{key:"toString",value:function(){return this.canonicalString()}},{key:"isKeyField",value:function(){return 1===this.length&&"__name__"===this.get(0)}}],[{key:"isValidIdentifier",value:function(e){return hh.test(e)}},{key:"keyField",value:function(){return new r(["__name__"])}},{key:"fromServerFormat",value:function(e){for(var t=[],n="",i=0,a=function(){if(0===n.length)throw new Gl(Kl.INVALID_ARGUMENT,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},o=!1;i<e.length;){var s=e[i];if("\\"===s){if(i+1===e.length)throw new Gl(Kl.INVALID_ARGUMENT,"Path has trailing escape character: "+e);var u=e[i+1];if("\\"!==u&&"."!==u&&"`"!==u)throw new Gl(Kl.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else"`"===s?(o=!o,i++):"."!==s||o?(n+=s,i++):(a(),i++)}if(a(),o)throw new Gl(Kl.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new r(t)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(ch),dh=function(){"use strict";function t(n){e(l)(this,t),this.path=n}return e(h)(t,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(e){return null!==e&&0===lh.comparator(this.path,e.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(e){return new t(lh.fromString(e))}},{key:"fromName",value:function(e){return new t(lh.fromString(e).popFirst(5))}},{key:"empty",value:function(){return new t(lh.emptyPath())}},{key:"comparator",value:function(e,t){return lh.comparator(e.path,t.path)}},{key:"isDocumentKey",value:function(e){return e.length%2==0}},{key:"fromSegments",value:function(e){return new t(new lh(e.slice()))}}]),t}(),vh=function t(n,r,i,a){"use strict";e(l)(this,t),this.indexId=n,this.collectionGroup=r,this.fields=i,this.indexState=a};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vh.UNKNOWN_ID=-1;function ph(e,t){var n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=uh.fromTimestamp(1e9===r?new sh(n+1,0):new sh(n,r));return new mh(i,dh.empty(),t)}function yh(e){return new mh(e.readTime,e.key,-1)}var mh=function(){"use strict";function t(n,r,i){e(l)(this,t),this.readTime=n,this.documentKey=r,this.largestBatchId=i}return e(h)(t,null,[{key:"min",value:function(){return new t(uh.min(),dh.empty(),-1)}},{key:"max",value:function(){return new t(uh.max(),dh.empty(),-1)}}]),t}();function gh(e,t){var n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=dh.comparator(e.documentKey,t.documentKey))?n:ah(e.largestBatchId,t.largestBatchId)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",wh=function(){"use strict";function t(){e(l)(this,t),this.onCommittedListeners=[]}return e(h)(t,[{key:"addOnCommittedListener",value:function(e){this.onCommittedListeners.push(e)}},{key:"raiseOnCommittedEvent",value:function(){this.onCommittedListeners.forEach((function(e){return e()}))}}]),t}();function bh(e){return xh.apply(this,arguments)}function xh(){return(xh=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.code===Kl.FAILED_PRECONDITION&&n.message===kh){e.next=2;break}throw n;case 2:Vl("LocalStore","Unexpectedly lost primary lease");case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ih=function(){"use strict";function t(n){var r=this;e(l)(this,t),this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,n((function(e){r.isDone=!0,r.result=e,r.nextCallback&&r.nextCallback(e)}),(function(e){r.isDone=!0,r.error=e,r.catchCallback&&r.catchCallback(e)}))}return e(h)(t,[{key:"catch",value:function(e){return this.next(void 0,e)}},{key:"next",value:function(e,n){var r=this;return this.callbackAttached&&ql(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new t((function(t,i){var a=r;r.nextCallback=function(n){a.wrapSuccess(e,n).next(t,i)},r.catchCallback=function(e){a.wrapFailure(n,e).next(t,i)}}))}},{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.next(t,n)}))}},{key:"wrapUserFunction",value:function(e){try{var n=e();return n instanceof t?n:t.resolve(n)}catch(e){return t.reject(e)}}},{key:"wrapSuccess",value:function(e,n){return e?this.wrapUserFunction((function(){return e(n)})):t.resolve(n)}},{key:"wrapFailure",value:function(e,n){return e?this.wrapUserFunction((function(){return e(n)})):t.reject(n)}}],[{key:"resolve",value:function(e){return new t((function(t,n){t(e)}))}},{key:"reject",value:function(e){return new t((function(t,n){n(e)}))}},{key:"waitFor",value:function(e){return new t((function(t,n){var r=0,i=0,a=!1;e.forEach((function(e){++r,e.next((function(){++i,a&&i===r&&t()}),(function(e){return n(e)}))})),a=!0,i===r&&t()}))}},{key:"or",value:function(e){var n=t.resolve(!1),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=r.value;n=n.next((function(e){return e?t.resolve(e):i()}))},u=e[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n}},{key:"forEach",value:function(e,t){var n=this,r=[];return e.forEach((function(e,i){r.push(t.call(n,e,i))})),this.waitFor(r)}},{key:"mapArray",value:function(e,n){return new t((function(t,r){for(var i=function(i){var u=i;n(e[u]).next((function(e){o[u]=e,++s===a&&t(o)}),(function(e){return r(e)}))},a=e.length,o=new Array(a),s=0,u=0;u<a;u++)i(u)}))}},{key:"doWhile",value:function(e,n){return new t((function(t,r){var i=function(){!0===e()?n().next((function(){i()}),r):t()};i()}))}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(e){return"IndexedDbTransactionError"===e.name}var Th=function(){"use strict";function t(n,r){var i=this;e(l)(this,t),this.previousValue=n,r&&(r.sequenceNumberHandler=function(e){return i.ot(e)},this.ut=function(e){return r.writeSequenceNumber(e)})}return e(h)(t,[{key:"ot",value:function(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}},{key:"next",value:function(){var e=++this.previousValue;return this.ut&&this.ut(e),e}}]),t}();function _h(e){return null==e}function Sh(e){return 0===e&&1/e==-1/0}function Ch(e){return"number"==typeof e&&Number.isInteger(e)&&!Sh(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Th.ct=-1;var Ah=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Nh=(e(d)(Ah).concat(["documentOverlays"]),["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"]),Dh=Nh;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e(d)(Dh).concat(["indexConfiguration","indexState","indexEntries"]);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rh(e){var t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Oh(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Lh(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ph=function(){"use strict";function t(n,r){e(l)(this,t),this.comparator=n,this.root=r||Fh.EMPTY}return e(h)(t,[{key:"insert",value:function(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fh.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fh.BLACK,null,null))}},{key:"get",value:function(e){for(var t=this.root;!t.isEmpty();){var n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}},{key:"indexOf",value:function(e){for(var t=0,n=this.root;!n.isEmpty();){var r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root.inorderTraversal(e)}},{key:"forEach",value:function(e){this.inorderTraversal((function(t,n){return e(t,n),!1}))}},{key:"toString",value:function(){var e=[];return this.inorderTraversal((function(t,n){return e.push("".concat(t,":").concat(n)),!1})),"{".concat(e.join(", "),"}")}},{key:"reverseTraversal",value:function(e){return this.root.reverseTraversal(e)}},{key:"getIterator",value:function(){return new Mh(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(e){return new Mh(this.root,e,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new Mh(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(e){return new Mh(this.root,e,this.comparator,!0)}}]),t}(),Mh=function(){"use strict";function t(n,r,i,a){e(l)(this,t),this.isReverse=a,this.nodeStack=[];for(var o=1;!n.isEmpty();)if(o=r?i(n.key,r):1,r&&a&&(o*=-1),o<0)n=this.isReverse?n.left:n.right;else{if(0===o){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return e(h)(t,[{key:"getNext",value:function(){var e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}]),t}(),Fh=function(){"use strict";function t(n,r,i,a,o){e(l)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:t.EMPTY,this.right=null!=o?o:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(h)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(e,i.key)){if(i.right.isEmpty())return t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw ql();if(this.right.isRed())throw ql();var e=this.left.check();if(e!==this.right.check())throw ql();return e+(this.isRed()?0:1)}}]),t}();Fh.EMPTY=null,Fh.RED=!0,Fh.BLACK=!1,Fh.EMPTY=new(function(){"use strict";function t(){e(l)(this,t),this.size=0}return e(h)(t,[{key:"key",get:function(){throw ql()}},{key:"value",get:function(){throw ql()}},{key:"color",get:function(){throw ql()}},{key:"left",get:function(){throw ql()}},{key:"right",get:function(){throw ql()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Fh(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Uh=function(){"use strict";function t(n){e(l)(this,t),this.comparator=n,this.data=new Ph(this.comparator)}return e(h)(t,[{key:"has",value:function(e){return null!==this.data.get(e)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(e){return this.data.indexOf(e)}},{key:"forEach",value:function(e){this.data.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"forEachInRange",value:function(e,t){for(var n=this.data.getIteratorFrom(e[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}},{key:"forEachWhile",value:function(e,t){var n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(e){var t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}},{key:"getIterator",value:function(){return new Vh(this.data.getIterator())}},{key:"getIteratorFrom",value:function(e){return new Vh(this.data.getIteratorFrom(e))}},{key:"add",value:function(e){return this.copy(this.data.remove(e).insert(e,!0))}},{key:"delete",value:function(e){return this.has(e)?this.copy(this.data.remove(e)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(e){var t=this;return t.size<e.size&&(t=e,e=this),e.forEach((function(e){t=t.add(e)})),t}},{key:"isEqual",value:function(e){if(!(e instanceof t))return!1;if(this.size!==e.size)return!1;for(var n=this.data.getIterator(),r=e.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var e=[];return this.forEach((function(t){e.push(t)})),e}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){return e.push(t)})),"SortedSet("+e.toString()+")"}},{key:"copy",value:function(e){var n=new t(this.comparator);return n.data=e,n}}]),t}(),Vh=function(){"use strict";function t(n){e(l)(this,t),this.iter=n}return e(h)(t,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jh=function(){"use strict";function t(n){e(l)(this,t),this.fields=n,n.sort(fh.comparator)}return e(h)(t,[{key:"unionWith",value:function(e){var n=new Uh(fh.comparator),r=!0,i=!1,a=void 0;try{for(var o,s=this.fields[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n.add(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var c=!0,l=!1,h=void 0;try{for(var f,d=e[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var v=f.value;n=n.add(v)}}catch(e){l=!0,h=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw h}}return new t(n.toArray())}},{key:"covers",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.fields[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.isPrefixOf(e))return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"isEqual",value:function(e){return oh(this.fields,e.fields,(function(e,t){return e.isEqual(t)}))}}],[{key:"empty",value:function(){return new t([])}}]),t}(),Bh=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){var t;return e(l)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="Base64DecodeError",e(so)(t)}return r}(e(m)(Error));
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zh=Symbol.iterator,qh=function(){"use strict";function t(n){e(l)(this,t),this.binaryString=n}return e(h)(t,[{key:zh,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return ah(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Bh("Invalid base64 string: "+e):e}}(e))}},{key:"fromUint8Array",value:function(e){return new t(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qh.EMPTY_BYTE_STRING=new qh("");var Hh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wh(e){if(Hl(!!e),"string"==typeof e){var t=0,n=Hh.exec(e);if(Hl(!!n),n[1]){var r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}var i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Kh(e.seconds),nanos:Kh(e.nanos)}}function Kh(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Gh(e){return"string"==typeof e?qh.fromBase64String(e):qh.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Yh(e){var t=e.mapValue.fields.__previous_value__;return Qh(t)?Yh(t):t}function Jh(e){var t=Wh(e.mapValue.fields.__local_write_time__.timestampValue);return new sh(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xh=function t(n,r,i,a,o,s,u,c,h){"use strict";e(l)(this,t),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h},Zh=function(){"use strict";function t(n,r){e(l)(this,t),this.projectId=n,this.database=r||"(default)"}return e(h)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}(),$h={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ef(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Qh(e)?4:pf(e)?9007199254740991:10:ql()}function tf(e,t){if(e===t)return!0;var n,r=ef(e);if(r!==ef(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Jh(e).isEqual(Jh(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;var n=Wh(e.timestampValue),r=Wh(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return n=t,Gh(e.bytesValue).isEqual(Gh(n.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Kh(e.geoPointValue.latitude)===Kh(t.geoPointValue.latitude)&&Kh(e.geoPointValue.longitude)===Kh(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Kh(e.integerValue)===Kh(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){var n=Kh(e.doubleValue),r=Kh(t.doubleValue);return n===r?Sh(n)===Sh(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return oh(e.arrayValue.values||[],t.arrayValue.values||[],tf);case 10:return function(e,t){var n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Rh(n)!==Rh(r))return!1;for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!tf(n[i],r[i])))return!1;return!0}(e,t);default:return ql()}}function nf(e,t){return void 0!==(e.values||[]).find((function(e){return tf(e,t)}))}function rf(e,t){if(e===t)return 0;var n,r,i,a,o=ef(e),s=ef(t);if(o!==s)return ah(o,s);switch(o){case 0:case 9007199254740991:return 0;case 1:return ah(e.booleanValue,t.booleanValue);case 2:return r=t,i=Kh((n=e).integerValue||n.doubleValue),a=Kh(r.integerValue||r.doubleValue),i<a?-1:i>a?1:i===a?0:isNaN(i)?isNaN(a)?0:-1:1;case 3:return af(e.timestampValue,t.timestampValue);case 4:return af(Jh(e),Jh(t));case 5:return ah(e.stringValue,t.stringValue);case 6:return function(e,t){var n=Gh(e),r=Gh(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){for(var n=e.split("/"),r=t.split("/"),i=0;i<n.length&&i<r.length;i++){var a=ah(n[i],r[i]);if(0!==a)return a}return ah(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){var n=ah(Kh(e.latitude),Kh(t.latitude));return 0!==n?n:ah(Kh(e.longitude),Kh(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){for(var n=e.values||[],r=t.values||[],i=0;i<n.length&&i<r.length;++i){var a=rf(n[i],r[i]);if(a)return a}return ah(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===$h.mapValue&&t===$h.mapValue)return 0;if(e===$h.mapValue)return 1;if(t===$h.mapValue)return-1;var n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(var o=0;o<r.length&&o<a.length;++o){var s=ah(r[o],a[o]);if(0!==s)return s;var u=rf(n[r[o]],i[a[o]]);if(0!==u)return u}return ah(r.length,a.length)}(e.mapValue,t.mapValue);default:throw ql()}}function af(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ah(e,t);var n=Wh(e),r=Wh(t),i=ah(n.seconds,r.seconds);return 0!==i?i:ah(n.nanos,r.nanos)}function of(e){return sf(e)}function sf(e){var t,n,r,i;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(r=e.timestampValue,i=Wh(r),"time(".concat(i.seconds,",").concat(i.nanos,")")):"stringValue"in e?e.stringValue:"bytesValue"in e?Gh(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,dh.fromName(n).toString()):"geoPointValue"in e?"geo(".concat((t=e.geoPointValue).latitude,",").concat(t.longitude,")"):"arrayValue"in e?function(e){var t="[",n=!0,r=!0,i=!1,a=void 0;try{for(var o,s=(e.values||[])[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n?n=!1:t+=",",t+=sf(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t+"]"}(e.arrayValue):"mapValue"in e?function(e){var t=Object.keys(e.fields||{}).sort(),n="{",r=!0,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r?r=!1:n+=",",n+="".concat(c,":").concat(sf(e.fields[c]))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return n+"}"}(e.mapValue):ql()}function uf(e,t){return{referenceValue:"projects/".concat(e.projectId,"/databases/").concat(e.database,"/documents/").concat(t.path.canonicalString())}}function cf(e){return!!e&&"integerValue"in e}function lf(e){return!!e&&"arrayValue"in e}function hf(e){return!!e&&"nullValue"in e}function ff(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function df(e){return!!e&&"mapValue"in e}function vf(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){var t={mapValue:{fields:{}}};return Oh(e.mapValue.fields,(function(e,n){return t.mapValue.fields[e]=vf(n)})),t}if(e.arrayValue){for(var n={arrayValue:{values:[]}},r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=vf(e.arrayValue.values[r]);return n}return Object.assign({},e)}function pf(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yf=function(){"use strict";function t(n){e(l)(this,t),this.value=n}return e(h)(t,[{key:"field",value:function(e){if(e.isEmpty())return this.value;for(var t=this.value,n=0;n<e.length-1;++n)if(!df(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}},{key:"set",value:function(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=vf(t)}},{key:"setAll",value:function(e){var t=this,n=fh.emptyPath(),r={},i=[];e.forEach((function(e,a){if(!n.isImmediateParentOf(a)){var o=t.getFieldsMap(n);t.applyChanges(o,r,i),r={},i=[],n=a.popLast()}e?r[a.lastSegment()]=vf(e):i.push(a.lastSegment())}));var a=this.getFieldsMap(n);this.applyChanges(a,r,i)}},{key:"delete",value:function(e){var t=this.field(e.popLast());df(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}},{key:"isEqual",value:function(e){return tf(this.value,e.value)}},{key:"getFieldsMap",value:function(e){var t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(var n=0;n<e.length;++n){var r=t.mapValue.fields[e.get(n)];df(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}},{key:"applyChanges",value:function(e,t,n){Oh(t,(function(t,n){return e[t]=n}));var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;delete e[u]}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"clone",value:function(){return new t(vf(this.value))}}],[{key:"empty",value:function(){return new t({mapValue:{}})}}]),t}();function mf(e){var t=[];return Oh(e.fields,(function(e,n){var r=new fh([e]);if(df(n)){var i=mf(n.mapValue).fields,a=!0,o=!1,s=void 0;if(0===i.length)t.push(r);else try{for(var u,c=i[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.push(r.child(l))}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}}else t.push(r)})),new jh(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var gf=function(){"use strict";function t(n,r,i,a,o,s,u){e(l)(this,t),this.key=n,this.documentType=r,this.version=i,this.readTime=a,this.createTime=o,this.data=s,this.documentState=u}return e(h)(t,[{key:"convertToFoundDocument",value:function(e,t){return!this.createTime.isEqual(uh.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}},{key:"convertToNoDocument",value:function(e){return this.version=e,this.documentType=2,this.data=yf.empty(),this.documentState=0,this}},{key:"convertToUnknownDocument",value:function(e){return this.version=e,this.documentType=3,this.data=yf.empty(),this.documentState=2,this}},{key:"setHasCommittedMutations",value:function(){return this.documentState=2,this}},{key:"setHasLocalMutations",value:function(){return this.documentState=1,this.version=uh.min(),this}},{key:"setReadTime",value:function(e){return this.readTime=e,this}},{key:"hasLocalMutations",get:function(){return 1===this.documentState}},{key:"hasCommittedMutations",get:function(){return 2===this.documentState}},{key:"hasPendingWrites",get:function(){return this.hasLocalMutations||this.hasCommittedMutations}},{key:"isValidDocument",value:function(){return 0!==this.documentType}},{key:"isFoundDocument",value:function(){return 1===this.documentType}},{key:"isNoDocument",value:function(){return 2===this.documentType}},{key:"isUnknownDocument",value:function(){return 3===this.documentType}},{key:"isEqual",value:function(e){return e instanceof t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}},{key:"mutableCopy",value:function(){return new t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}},{key:"toString",value:function(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}],[{key:"newInvalidDocument",value:function(e){return new t(e,0,uh.min(),uh.min(),uh.min(),yf.empty(),0)}},{key:"newFoundDocument",value:function(e,n,r,i){return new t(e,1,n,uh.min(),r,i,0)}},{key:"newNoDocument",value:function(e,n){return new t(e,2,n,uh.min(),uh.min(),yf.empty(),0)}},{key:"newUnknownDocument",value:function(e,n){return new t(e,3,n,uh.min(),uh.min(),yf.empty(),2)}}]),t}(),kf=function t(n,r){"use strict";e(l)(this,t),this.position=n,this.inclusive=r};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(e,t,n){for(var r=0,i=0;i<e.position.length;i++){var a=t[i],o=e.position[i];if(r=a.field.isKeyField()?dh.comparator(dh.fromName(o.referenceValue),n.key):rf(o,n.data.field(a.field)),"desc"===a.dir&&(r*=-1),0!==r)break}return r}function bf(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(var n=0;n<e.position.length;n++)if(!tf(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xf=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";e(l)(this,t),this.field=n,this.dir=r};function If(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ef=function t(){"use strict";e(l)(this,t)},Tf=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a){var o;return e(l)(this,r),(o=n.call(this)).field=t,o.op=i,o.value=a,e(so)(o)}return e(h)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(rf(t,this.value)):null!==t&&ef(this.value)===ef(t)&&this.matchesComparison(rf(t,this.value))}},{key:"matchesComparison",value:function(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ql()}}},{key:"isInequality",value:function(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}},{key:"getFlattenedFilters",value:function(){return[this]}},{key:"getFilters",value:function(){return[this]}},{key:"getFirstInequalityField",value:function(){return this.isInequality()?this.field:null}}],[{key:"create",value:function(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Of(e,t,n):"array-contains"===t?new Ff(e,n):"in"===t?new Uf(e,n):"not-in"===t?new Vf(e,n):"array-contains-any"===t?new jf(e,n):new r(e,t,n)}},{key:"createKeyFieldInFilter",value:function(e,t,n){return"in"===t?new Lf(e,n):new Pf(e,n)}}]),r}(Ef),_f=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){var a;return e(l)(this,r),(a=n.call(this)).filters=t,a.op=i,a.lt=null,e(so)(a)}return e(h)(r,[{key:"matches",value:function(e){return Sf(this)?void 0===this.filters.find((function(t){return!t.matches(e)})):void 0!==this.filters.find((function(t){return t.matches(e)}))}},{key:"getFlattenedFilters",value:function(){return null!==this.lt||(this.lt=this.filters.reduce((function(e,t){return e.concat(t.getFlattenedFilters())}),[])),this.lt}},{key:"getFilters",value:function(){return Object.assign([],this.filters)}},{key:"getFirstInequalityField",value:function(){var e=this.ft((function(e){return e.isInequality()}));return null!==e?e.field:null}},{key:"ft",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.getFlattenedFilters()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(e(o))return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}}],[{key:"create",value:function(e,t){return new r(e,t)}}]),r}(Ef);function Sf(e){return"and"===e.op}function Cf(e){return Af(e)&&Sf(e)}function Af(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value instanceof _f)return!1}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!0}function Nf(e){if(e instanceof Tf)return e.field.canonicalString()+e.op.toString()+of(e.value);if(Cf(e))return e.filters.map((function(e){return Nf(e)})).join(",");var t=e.filters.map((function(e){return Nf(e)})).join(",");return"".concat(e.op,"(").concat(t,")")}function Df(e,t){return e instanceof Tf?(n=e,(r=t)instanceof Tf&&n.op===r.op&&n.field.isEqual(r.field)&&tf(n.value,r.value)):e instanceof _f?function(e,t){return t instanceof _f&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((function(e,n,r){return e&&Df(n,t.filters[r])}),!0)}(e,t):void ql();var n,r}function Rf(e){return e instanceof Tf?"".concat((t=e).field.canonicalString()," ").concat(t.op," ").concat(of(t.value)):e instanceof _f?function(e){return e.op.toString()+" {"+e.getFilters().map(Rf).join(" ,")+"}"}(e):"Filter";var t}var Of=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a){var o;return e(l)(this,r),(o=n.call(this,t,i,a)).key=dh.fromName(a.referenceValue),e(so)(o)}return e(h)(r,[{key:"matches",value:function(e){var t=dh.comparator(e.key,this.key);return this.matchesComparison(t)}}]),r}(Tf),Lf=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){var a;return e(l)(this,r),(a=n.call(this,t,"in",i)).keys=Mf("in",i),e(so)(a)}return e(h)(r,[{key:"matches",value:function(e){return this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(Tf),Pf=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){var a;return e(l)(this,r),(a=n.call(this,t,"not-in",i)).keys=Mf("not-in",i),e(so)(a)}return e(h)(r,[{key:"matches",value:function(e){return!this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(Tf);function Mf(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((function(e){return dh.fromName(e.referenceValue)}))}var Ff=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){return e(l)(this,r),n.call(this,t,"array-contains",i)}return e(h)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return lf(t)&&nf(t.arrayValue,this.value)}}]),r}(Tf),Uf=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){return e(l)(this,r),n.call(this,t,"in",i)}return e(h)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return null!==t&&nf(this.value.arrayValue,t)}}]),r}(Tf),Vf=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){return e(l)(this,r),n.call(this,t,"not-in",i)}return e(h)(r,[{key:"matches",value:function(e){if(nf(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;var t=e.data.field(this.field);return null!==t&&!nf(this.value.arrayValue,t)}}]),r}(Tf),jf=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){return e(l)(this,r),n.call(this,t,"array-contains-any",i)}return e(h)(r,[{key:"matches",value:function(e){var t=this,n=e.data.field(this.field);return!(!lf(n)||!n.arrayValue.values)&&n.arrayValue.values.some((function(e){return nf(t.value.arrayValue,e)}))}}]),r}(Tf),Bf=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;e(l)(this,t),this.path=n,this.collectionGroup=r,this.orderBy=i,this.filters=a,this.limit=o,this.startAt=s,this.endAt=u,this.dt=null};function zf(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new Bf(e,t,n,r,i,a,o)}function qf(e){var t=Wl(e);if(null===t.dt){var n=t.path.canonicalString();null!==t.collectionGroup&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((function(e){return Nf(e)})).join(","),n+="|ob:",n+=t.orderBy.map((function(e){return(t=e).field.canonicalString()+t.dir;var t})).join(","),_h(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return of(e)})).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return of(e)})).join(",")),t.dt=n}return t.dt}function Hf(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(var n=0;n<e.orderBy.length;n++)if(!If(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(var r=0;r<e.filters.length;r++)if(!Df(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!bf(e.startAt,t.startAt)&&bf(e.endAt,t.endAt)}function Wf(e){return dh.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Kf=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;e(l)(this,t),this.path=n,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=a,this.limit=o,this.limitType=s,this.startAt=u,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt};function Gf(e,t,n,r,i,a,o,s){return new Kf(e,t,n,r,i,a,o,s)}function Qf(e){return new Kf(e)}function Yf(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Jf(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Xf(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value.getFirstInequalityField();if(null!==o)return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}function Zf(e){return null!==e.collectionGroup}function $f(e){var t=Wl(e);if(null===t.wt){t.wt=[];var n=Xf(t),r=Jf(t);if(null!==n&&null===r)n.isKeyField()||t.wt.push(new xf(n)),t.wt.push(new xf(fh.keyField(),"asc"));else{var i=!1,a=!0,o=!1,s=void 0;try{for(var u,c=t.explicitOrderBy[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.wt.push(l),l.field.isKeyField()&&(i=!0)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}if(!i){var h=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new xf(fh.keyField(),h))}}}return t.wt}function ed(e){var t=Wl(e);if(!t._t)if("F"===t.limitType)t._t=zf(t.path,t.collectionGroup,$f(t),t.filters,t.limit,t.startAt,t.endAt);else{var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=$f(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c="desc"===u.dir?"asc":"desc";n.push(new xf(u.field,c))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var l=t.endAt?new kf(t.endAt.position,t.endAt.inclusive):null,h=t.startAt?new kf(t.startAt.position,t.startAt.inclusive):null;t._t=zf(t.path,t.collectionGroup,n,t.filters,t.limit,l,h)}return t._t}function td(e,t){t.getFirstInequalityField(),Xf(e);var n=e.filters.concat([t]);return new Kf(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function nd(e,t,n){return new Kf(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function rd(e,t){return Hf(ed(e),ed(t))&&e.limitType===t.limitType}function id(e){return"".concat(qf(ed(e)),"|lt:").concat(e.limitType)}function ad(e){return"Query(target=".concat((t=ed(e),n=t.path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=", filters: [".concat(t.filters.map((function(e){return Rf(e)})).join(", "),"]")),_h(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=", orderBy: [".concat(t.orderBy.map((function(e){return"".concat((t=e).field.canonicalString()," (").concat(t.dir,")");var t})).join(", "),"]")),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return of(e)})).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return of(e)})).join(",")),"Target(".concat(n,")")),"; limitType=").concat(e.limitType,")");var t,n}function od(e,t){return t.isFoundDocument()&&(i=e,o=(a=t).key.path,null!==i.collectionGroup?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):dh.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o))&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=$f(e)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(!s.field.isKeyField()&&null===t.data.field(s.field))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=e.filters[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){if(!a.value.matches(t))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){var r=wf(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,$f(n),r)||n.endAt&&!function(e,t,n){var r=wf(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,$f(n),r)));var n,r,i,a,o}function sd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ud(e){return function(t,n){var r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=$f(e)[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=cd(c,t,n);if(0!==l)return l;r=r||c.field.isKeyField()}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return 0}}function cd(e,t,n){var r,i,a,o,s=e.field.isKeyField()?dh.comparator(t.key,n.key):(r=e.field,i=n,a=t.data.field(r),o=i.data.field(r),null!==a&&null!==o?rf(a,o):ql());switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return ql()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ld=function(){"use strict";function t(n,r){e(l)(this,t),this.mapKeyFn=n,this.equalsFn=r,this.inner={},this.innerSize=0}return e(h)(t,[{key:"get",value:function(t){var n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=e(v)(s.value,2),l=c[0],h=c[1];if(this.equalsFn(l,t))return h}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}}},{key:"has",value:function(e){return void 0!==this.get(e)}},{key:"set",value:function(e,t){var n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(var i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}},{key:"delete",value:function(e){var t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(var r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}},{key:"forEach",value:function(t){Oh(this.inner,(function(n,r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=e(v)(s.value,2),l=c[0],h=c[1];t(l,h)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}))}},{key:"isEmpty",value:function(){return Lh(this.inner)}},{key:"size",value:function(){return this.innerSize}}]),t}(),hd=new Ph(dh.comparator);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(){return hd}var dd=new Ph(dh.comparator);function vd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=dd,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.insert(c.key,c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}function pd(e){var t=dd;return e.forEach((function(e,n){return t=t.insert(e,n.overlayedDocument)})),t}function yd(){return gd()}function md(){return gd()}function gd(){return new ld((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)}))}var kd=new Ph(dh.comparator),wd=new Uh(dh.comparator);function bd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=wd,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.add(c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var xd=new Uh(ah);function Id(){return xd}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sh(t)?"-0":t}}function Td(e){return{integerValue:""+e}}function _d(e,t){return Ch(t)?Td(t):Ed(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sd=function t(){"use strict";e(l)(this,t),this._=void 0};function Cd(e,t,n){return e instanceof Dd?(i=t,a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:(r=n).seconds,nanos:r.nanoseconds}}}},i&&Qh(i)&&(i=Yh(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}):e instanceof Rd?Od(e,t):e instanceof Ld?Pd(e,t):function(e,t){var n=Nd(e,t),r=Fd(n)+Fd(e.gt);return cf(n)&&cf(e.gt)?Td(r):Ed(e.serializer,r)}(e,t);var r,i,a}function Ad(e,t,n){return e instanceof Rd?Od(e,t):e instanceof Ld?Pd(e,t):n}function Nd(e,t){var n,r;return e instanceof Md?cf(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}var Dd=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.apply(this,arguments)}return r}(Sd),Rd=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t){var i;return e(l)(this,r),(i=n.call(this)).elements=t,e(so)(i)}return r}(Sd);function Od(e,t){var n=Ud(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n.some((function(e){return tf(e,r)}))||n.push(r)},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var Ld=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t){var i;return e(l)(this,r),(i=n.call(this)).elements=t,e(so)(i)}return r}(Sd);function Pd(e,t){var n=Ud(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n=n.filter((function(e){return!tf(e,r)}))},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var Md=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){var a;return e(l)(this,r),(a=n.call(this)).serializer=t,a.gt=i,e(so)(a)}return r}(Sd);function Fd(e){return Kh(e.integerValue||e.doubleValue)}function Ud(e){return lf(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vd=function t(n,r){"use strict";e(l)(this,t),this.version=n,this.transformResults=r},jd=function(){"use strict";function t(n,r){e(l)(this,t),this.updateTime=n,this.exists=r}return e(h)(t,[{key:"isNone",get:function(){return void 0===this.updateTime&&void 0===this.exists}},{key:"isEqual",value:function(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}],[{key:"none",value:function(){return new t}},{key:"exists",value:function(e){return new t(void 0,e)}},{key:"updateTime",value:function(e){return new t(e)}}]),t}();function Bd(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}var zd=function t(){"use strict";e(l)(this,t)};function qd(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tv(e.key,jd.none()):new Qd(e.key,e.data,jd.none());var n=e.data,r=yf.empty(),i=new Uh(fh.comparator),a=!0,o=!1,s=void 0;try{for(var u,c=t.fields[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;if(!i.has(l)){var h=n.field(l);null===h&&l.length>1&&(l=l.popLast(),h=n.field(l)),null===h?r.delete(l):r.set(l,h),i=i.add(l)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new Yd(e.key,r,new jh(i.toArray()),jd.none())}function Hd(e,t,n){var r,i,a,o,s;e instanceof Qd?(i=t,a=n,o=(r=e).value.clone(),s=Xd(r.fieldTransforms,i,a.transformResults),o.setAll(s),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()):e instanceof Yd?function(e,t,n){if(Bd(e.precondition,t)){var r=Xd(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Jd(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}else t.convertToUnknownDocument(n.version)}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Wd(e,t,n,r){return e instanceof Qd?function(e,t,n,r){if(!Bd(e.precondition,t))return n;var i=e.value.clone(),a=Zd(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Yd?function(e,t,n,r){if(!Bd(e.precondition,t))return n;var i=Zd(e.fieldTransforms,r,t),a=t.data;return a.setAll(Jd(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((function(e){return e.field})))}(e,t,n,r):(i=t,a=n,Bd(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a);var i,a}function Kd(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.fieldTransforms[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c=t.data.field(u.field),l=Nd(u.transform,c||null);null!=l&&(null===n&&(n=yf.empty()),n.set(u.field,l))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n||null}function Gd(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&oh(n,r,(function(e,t){return function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Rd&&r instanceof Rd||n instanceof Ld&&r instanceof Ld?oh(n.elements,r.elements,tf):n instanceof Md&&r instanceof Md?tf(n.gt,r.gt):n instanceof Dd&&r instanceof Dd);var n,r}(e,t)}))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}var Qd=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return e(l)(this,r),(o=n.call(this)).key=t,o.value=i,o.precondition=a,o.fieldTransforms=s,o.type=0,e(so)(o)}return e(h)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(zd),Yd=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a,o){var s,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return e(l)(this,r),(s=n.call(this)).key=t,s.data=i,s.fieldMask=a,s.precondition=o,s.fieldTransforms=u,s.type=1,e(so)(s)}return e(h)(r,[{key:"getFieldMask",value:function(){return this.fieldMask}}]),r}(zd);function Jd(e){var t=new Map;return e.fieldMask.fields.forEach((function(n){if(!n.isEmpty()){var r=e.data.field(n);t.set(n,r)}})),t}function Xd(e,t,n){var r=new Map;Hl(e.length===n.length);for(var i=0;i<n.length;i++){var a=e[i],o=a.transform,s=t.data.field(a.field);r.set(a.field,Ad(o,s,n[i]))}return r}function Zd(e,t,n){var r=new Map,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.transform,h=n.data.field(c.field);r.set(c.field,Cd(l,h,t))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var $d,ev,tv=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){var a;return e(l)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=2,a.fieldTransforms=[],e(so)(a)}return e(h)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(zd),nv=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){var a;return e(l)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=3,a.fieldTransforms=[],e(so)(a)}return e(h)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(zd),rv=function(){"use strict";function t(n,r,i,a){e(l)(this,t),this.batchId=n,this.localWriteTime=r,this.baseMutations=i,this.mutations=a}return e(h)(t,[{key:"applyToRemoteDocument",value:function(e,t){for(var n=t.mutationResults,r=0;r<this.mutations.length;r++){var i=this.mutations[r];i.key.isEqual(e.key)&&Hd(i,e,n[r])}}},{key:"applyToLocalView",value:function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=this.baseMutations[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.key.isEqual(e.key)&&(t=Wd(s,e,t,this.localWriteTime))}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}var u=!0,c=!1,l=void 0;try{for(var h,f=this.mutations[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=h.value;d.key.isEqual(e.key)&&(t=Wd(d,e,t,this.localWriteTime))}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}return t}},{key:"applyToLocalDocumentSet",value:function(e,t){var n=this,r=md();return this.mutations.forEach((function(i){var a=e.get(i.key),o=a.overlayedDocument,s=n.applyToLocalView(o,a.mutatedFields),u=qd(o,s=t.has(i.key)?null:s);null!==u&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(uh.min())})),r}},{key:"keys",value:function(){return this.mutations.reduce((function(e,t){return e.add(t.key)}),bd())}},{key:"isEqual",value:function(e){return this.batchId===e.batchId&&oh(this.mutations,e.mutations,(function(e,t){return Gd(e,t)}))&&oh(this.baseMutations,e.baseMutations,(function(e,t){return Gd(e,t)}))}}]),t}(),iv=function(){"use strict";function t(n,r,i,a){e(l)(this,t),this.batch=n,this.commitVersion=r,this.mutationResults=i,this.docVersions=a}return e(h)(t,null,[{key:"from",value:function(e,n,r){Hl(e.mutations.length===r.length);for(var i=kd,a=e.mutations,o=0;o<a.length;o++)i=i.insert(a[o].key,r[o].version);return new t(e,n,r,i)}}]),t}(),av=function(){"use strict";function t(n,r){e(l)(this,t),this.largestBatchId=n,this.mutation=r}return e(h)(t,[{key:"getKey",value:function(){return this.mutation.key}},{key:"isEqual",value:function(e){return null!==e&&this.mutation===e.mutation}},{key:"toString",value:function(){return"Overlay{\n      largestBatchId: ".concat(this.largestBatchId,",\n      mutation: ").concat(this.mutation.toString(),"\n    }")}}]),t}(),ov=function t(n,r){"use strict";e(l)(this,t),this.count=n,this.unchangedNames=r};function sv(e){switch(e){default:return ql();case Kl.CANCELLED:case Kl.UNKNOWN:case Kl.DEADLINE_EXCEEDED:case Kl.RESOURCE_EXHAUSTED:case Kl.INTERNAL:case Kl.UNAVAILABLE:case Kl.UNAUTHENTICATED:return!1;case Kl.INVALID_ARGUMENT:case Kl.NOT_FOUND:case Kl.ALREADY_EXISTS:case Kl.PERMISSION_DENIED:case Kl.FAILED_PRECONDITION:case Kl.ABORTED:case Kl.OUT_OF_RANGE:case Kl.UNIMPLEMENTED:case Kl.DATA_LOSS:return!0}}function uv(e){if(void 0===e)return jl("GRPC error has no .code"),Kl.UNKNOWN;switch(e){case $d.OK:return Kl.OK;case $d.CANCELLED:return Kl.CANCELLED;case $d.UNKNOWN:return Kl.UNKNOWN;case $d.DEADLINE_EXCEEDED:return Kl.DEADLINE_EXCEEDED;case $d.RESOURCE_EXHAUSTED:return Kl.RESOURCE_EXHAUSTED;case $d.INTERNAL:return Kl.INTERNAL;case $d.UNAVAILABLE:return Kl.UNAVAILABLE;case $d.UNAUTHENTICATED:return Kl.UNAUTHENTICATED;case $d.INVALID_ARGUMENT:return Kl.INVALID_ARGUMENT;case $d.NOT_FOUND:return Kl.NOT_FOUND;case $d.ALREADY_EXISTS:return Kl.ALREADY_EXISTS;case $d.PERMISSION_DENIED:return Kl.PERMISSION_DENIED;case $d.FAILED_PRECONDITION:return Kl.FAILED_PRECONDITION;case $d.ABORTED:return Kl.ABORTED;case $d.OUT_OF_RANGE:return Kl.OUT_OF_RANGE;case $d.UNIMPLEMENTED:return Kl.UNIMPLEMENTED;case $d.DATA_LOSS:return Kl.DATA_LOSS;default:return ql()}}(ev=$d||($d={}))[ev.OK=0]="OK",ev[ev.CANCELLED=1]="CANCELLED",ev[ev.UNKNOWN=2]="UNKNOWN",ev[ev.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ev[ev.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ev[ev.NOT_FOUND=5]="NOT_FOUND",ev[ev.ALREADY_EXISTS=6]="ALREADY_EXISTS",ev[ev.PERMISSION_DENIED=7]="PERMISSION_DENIED",ev[ev.UNAUTHENTICATED=16]="UNAUTHENTICATED",ev[ev.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ev[ev.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ev[ev.ABORTED=10]="ABORTED",ev[ev.OUT_OF_RANGE=11]="OUT_OF_RANGE",ev[ev.UNIMPLEMENTED=12]="UNIMPLEMENTED",ev[ev.INTERNAL=13]="INTERNAL",ev[ev.UNAVAILABLE=14]="UNAVAILABLE",ev[ev.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cv=function(){"use strict";function t(){e(l)(this,t),this.onExistenceFilterMismatchCallbacks=new Map}return e(h)(t,[{key:"onExistenceFilterMismatch",value:function(e){var t=this,n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),function(){return t.onExistenceFilterMismatchCallbacks.delete(n)}}},{key:"notifyOnExistenceFilterMismatch",value:function(e){this.onExistenceFilterMismatchCallbacks.forEach((function(t){return t(e)}))}}],[{key:"instance",get:function(){return lv}},{key:"getOrCreateInstance",value:function(){return null===lv&&(lv=new t),lv}}]),t}(),lv=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hv(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fv=new Ol([4294967295,4294967295],0);function dv(e){var t=hv().encode(e),n=new Rl;return n.update(t),new Uint8Array(n.digest())}function vv(e){var t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new Ol([n,r],0),new Ol([i,a],0)]}var pv=function(){"use strict";function t(n,r,i){if(e(l)(this,t),this.bitmap=n,this.padding=r,this.hashCount=i,r<0||r>=8)throw new yv("Invalid padding: ".concat(r));if(i<0)throw new yv("Invalid hash count: ".concat(i));if(n.length>0&&0===this.hashCount)throw new yv("Invalid hash count: ".concat(i));if(0===n.length&&0!==r)throw new yv("Invalid padding when bitmap length is 0: ".concat(r));this.It=8*n.length-r,this.Tt=Ol.fromNumber(this.It)}return e(h)(t,[{key:"Et",value:function(e,t,n){var r=e.add(t.multiply(Ol.fromNumber(n)));return 1===r.compare(fv)&&(r=new Ol([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}},{key:"At",value:function(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}},{key:"vt",value:function(t){if(0===this.It)return!1;for(var n=dv(t),r=e(v)(vv(n),2),i=r[0],a=r[1],o=0;o<this.hashCount;o++){var s=this.Et(i,a,o);if(!this.At(s))return!1}return!0}},{key:"insert",value:function(t){if(0!==this.It)for(var n=dv(t),r=e(v)(vv(n),2),i=r[0],a=r[1],o=0;o<this.hashCount;o++){var s=this.Et(i,a,o);this.Rt(s)}}},{key:"Rt",value:function(e){var t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}],[{key:"create",value:function(e,n,r){var i=e%8==0?0:8-e%8,a=new t(new Uint8Array(Math.ceil(e/8)),i,n);return r.forEach((function(e){return a.insert(e)})),a}}]),t}(),yv=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){var t;return e(l)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="BloomFilterError",e(so)(t)}return r}(e(m)(Error)),mv=function(){"use strict";function t(n,r,i,a,o){e(l)(this,t),this.snapshotVersion=n,this.targetChanges=r,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=o}return e(h)(t,null,[{key:"createSynthesizedRemoteEventForCurrentChange",value:function(e,n,r){var i=new Map;return i.set(e,gv.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new t(uh.min(),i,new Ph(ah),fd(),bd())}}]),t}(),gv=function(){"use strict";function t(n,r,i,a,o){e(l)(this,t),this.resumeToken=n,this.current=r,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=o}return e(h)(t,null,[{key:"createSynthesizedTargetChangeForCurrentChange",value:function(e,n,r){return new t(r,n,bd(),bd(),bd())}}]),t}(),kv=function t(n,r,i,a){"use strict";e(l)(this,t),this.Pt=n,this.removedTargetIds=r,this.key=i,this.bt=a},wv=function t(n,r){"use strict";e(l)(this,t),this.targetId=n,this.Vt=r},bv=function t(n,r){"use strict";var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:qh.EMPTY_BYTE_STRING,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e(l)(this,t),this.state=n,this.targetIds=r,this.resumeToken=i,this.cause=a},xv=function(){"use strict";function t(){e(l)(this,t),this.St=0,this.Dt=Tv(),this.Ct=qh.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}return e(h)(t,[{key:"current",get:function(){return this.xt}},{key:"resumeToken",get:function(){return this.Ct}},{key:"kt",get:function(){return 0!==this.St}},{key:"Mt",get:function(){return this.Nt}},{key:"$t",value:function(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}},{key:"Ot",value:function(){var e=bd(),t=bd(),n=bd();return this.Dt.forEach((function(r,i){switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ql()}})),new gv(this.Ct,this.xt,e,t,n)}},{key:"Ft",value:function(){this.Nt=!1,this.Dt=Tv()}},{key:"Bt",value:function(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}},{key:"Lt",value:function(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}},{key:"qt",value:function(){this.St+=1}},{key:"Ut",value:function(){this.St-=1}},{key:"Kt",value:function(){this.Nt=!0,this.xt=!0}}]),t}(),Iv=function(){"use strict";function t(n){e(l)(this,t),this.Gt=n,this.Qt=new Map,this.jt=fd(),this.zt=Ev(),this.Wt=new Ph(ah)}return e(h)(t,[{key:"Ht",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.Pt[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;e.bt&&e.bt.isFoundDocument()?this.Jt(o,e.bt):this.Yt(o,e.key,e.bt)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}var s=!0,u=!1,c=void 0;try{for(var l,h=e.removedTargetIds[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;this.Yt(f,e.key,e.bt)}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}}},{key:"Xt",value:function(e){var t=this;this.forEachTarget(e,(function(n){var r=t.Zt(n);switch(e.state){case 0:t.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||t.removeTarget(n);break;case 3:t.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:t.te(n)&&(t.ee(n),r.$t(e.resumeToken));break;default:ql()}}))}},{key:"forEachTarget",value:function(e,t){var n=this;e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((function(e,r){n.te(r)&&t(r)}))}},{key:"ne",value:function(e){var t,n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){var a=i.target;if(Wf(a))if(0===r){var o=new dh(a.path);this.Yt(n,o,gf.newNoDocument(o,uh.min()))}else Hl(1===r);else{var s=this.ie(n);if(s!==r){var u=this.re(e,s);if(0!==u){this.ee(n);var c=2===u?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,c)}null===(t=cv.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,a,o,s,u,c={localCacheCount:t,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(c.bloomFilter={applied:0===e,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(a=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===a?void 0:a.length)&&void 0!==o?o:0,padding:null!==(u=null===(s=null==l?void 0:l.bits)||void 0===s?void 0:s.padding)&&void 0!==u?u:0}),c}(u,s,e.Vt))}}}}},{key:"re",value:function(e,t){var n=e.Vt,r=n.unchangedNames,i=n.count;if(!r||!r.bits)return 1;var a,o,s=r.bits,u=s.bitmap,c=void 0===u?"":u,l=s.padding,h=void 0===l?0:l,f=r.hashCount,d=void 0===f?0:f;try{a=Gh(c).toUint8Array()}catch(e){if(e instanceof Bh)return Bl("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{o=new pv(a,h,d)}catch(e){return Bl(e instanceof yv?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===o.It?1:i!==t-this.oe(e.targetId,o)?2:0}},{key:"oe",value:function(e,t){var n=this,r=this.Gt.getRemoteKeysForTarget(e),i=0;return r.forEach((function(r){var a=n.Gt.ue(),o="projects/".concat(a.projectId,"/databases/").concat(a.database,"/documents/").concat(r.path.canonicalString());t.vt(o)||(n.Yt(e,r,null),i++)})),i}},{key:"ce",value:function(e){var t=this,n=new Map;this.Qt.forEach((function(r,i){var a=t.se(i);if(a){if(r.current&&Wf(a.target)){var o=new dh(a.target.path);null!==t.jt.get(o)||t.ae(i,o)||t.Yt(i,o,gf.newNoDocument(o,e))}r.Mt&&(n.set(i,r.Ot()),r.Ft())}}));var r=bd();this.zt.forEach((function(e,n){var i=t,a=!0;n.forEachWhile((function(e){var t=i.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(a=!1,!1)})),a&&(r=r.add(e))})),this.jt.forEach((function(t,n){return n.setReadTime(e)}));var i=new mv(e,n,this.Wt,this.jt,r);return this.jt=fd(),this.zt=Ev(),this.Wt=new Ph(ah),i}},{key:"Jt",value:function(e,t){if(this.te(e)){var n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}}},{key:"Yt",value:function(e,t,n){if(this.te(e)){var r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}}},{key:"removeTarget",value:function(e){this.Qt.delete(e)}},{key:"ie",value:function(e){var t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}},{key:"qt",value:function(e){this.Zt(e).qt()}},{key:"Zt",value:function(e){var t=this.Qt.get(e);return t||(t=new xv,this.Qt.set(e,t)),t}},{key:"he",value:function(e){var t=this.zt.get(e);return t||(t=new Uh(ah),this.zt=this.zt.insert(e,t)),t}},{key:"te",value:function(e){var t=null!==this.se(e);return t||Vl("WatchChangeAggregator","Detected inactive target",e),t}},{key:"se",value:function(e){var t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}},{key:"ee",value:function(e){var t=this;this.Qt.set(e,new xv),this.Gt.getRemoteKeysForTarget(e).forEach((function(n){t.Yt(e,n,null)}))}},{key:"ae",value:function(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}]),t}();function Ev(){return new Ph(dh.comparator)}function Tv(){return new Ph(dh.comparator)}var _v={asc:"ASCENDING",desc:"DESCENDING"},Sv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cv={and:"AND",or:"OR"},Av=function t(n,r){"use strict";e(l)(this,t),this.databaseId=n,this.useProto3Json=r};function Nv(e,t){return e.useProto3Json||_h(t)?t:{value:t}}function Dv(e,t){return e.useProto3Json?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rv(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ov(e,t){return Dv(e,t.toTimestamp())}function Lv(e){return Hl(!!e),uh.fromTimestamp((t=Wh(e),new sh(t.seconds,t.nanos)));var t}function Pv(e,t){return(n=e,new lh(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Mv(e){var t=lh.fromString(e);return Hl(ep(t)),t}function Fv(e,t){return Pv(e.databaseId,t.path)}function Uv(e,t){var n=Mv(t);if(n.get(1)!==e.databaseId.projectId)throw new Gl(Kl.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Gl(Kl.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new dh(zv(n))}function Vv(e,t){return Pv(e.databaseId,t)}function jv(e){var t=Mv(e);return 4===t.length?lh.emptyPath():zv(t)}function Bv(e){return new lh(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function zv(e){return Hl(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function qv(e,t,n){return{name:Fv(e,t),fields:n.value.mapValue.fields}}function Hv(e,t){var n,r,i;if(t instanceof Qd)n={update:qv(e,t.key,t.value)};else if(t instanceof tv)n={delete:Fv(e,t.key)};else if(t instanceof Yd)n={update:qv(e,t.key,t.data),updateMask:(r=t.fieldMask,i=[],r.fields.forEach((function(e){return i.push(e.canonicalString())})),{fieldPaths:i})};else{if(!(t instanceof nv))return ql();n={verify:Fv(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((function(e){return function(e,t){var n=t.transform;if(n instanceof Dd)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Rd)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ld)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Md)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw ql()}(0,e)}))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ov(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ql()}(e,t.precondition)),n}function Wv(e,t){return{documents:[Vv(e,t.path)]}}function Kv(e,t){var n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Vv(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Vv(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);var i=function(e){if(0!==e.length)return $v(_f.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);var a=function(e){if(0!==e.length)return e.map((function(e){return{field:Xv((t=e).field),direction:Yv(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);var o,s,u=Nv(e,t.limit);return null!==u&&(n.structuredQuery.limit=u),t.startAt&&(n.structuredQuery.startAt={before:(o=t.startAt).inclusive,values:o.position}),t.endAt&&(n.structuredQuery.endAt={before:!(s=t.endAt).inclusive,values:s.position}),n}function Gv(e){var t=jv(e.parent),n=e.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){Hl(1===r);var a=n.from[0];a.allDescendants?i=a.collectionId:t=t.child(a.collectionId)}var o,s,u=[];n.where&&(o=n.where,u=(s=Qv(o))instanceof _f&&Cf(s)?s.getFilters():[s]);var c=[];n.orderBy&&(c=n.orderBy.map((function(e){return new xf(Zv((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));var l=null;n.limit&&(l=function(e){var t;return _h(t="object"==typeof e?e.value:e)?null:t}(n.limit));var h=null;n.startAt&&(h=function(e){var t=!!e.before,n=e.values||[];return new kf(n,t)}(n.startAt));var f=null;return n.endAt&&(f=function(e){var t=!e.before,n=e.values||[];return new kf(n,t)}(n.endAt)),Gf(t,i,c,u,l,"F",h,f)}function Qv(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":var t=Zv(e.unaryFilter.field);return Tf.create(t,"==",{doubleValue:NaN});case"IS_NULL":var n=Zv(e.unaryFilter.field);return Tf.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":var r=Zv(e.unaryFilter.field);return Tf.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":var i=Zv(e.unaryFilter.field);return Tf.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ql()}}(e):void 0!==e.fieldFilter?(n=e,Tf.create(Zv(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ql()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,_f.create(t.compositeFilter.filters.map((function(e){return Qv(e)})),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ql()}}(t.compositeFilter.op))):ql();var t,n}function Yv(e){return _v[e]}function Jv(e){return Sv[e]}function Xv(e){return{fieldPath:e.canonicalString()}}function Zv(e){return fh.fromServerFormat(e.fieldPath)}function $v(e){return e instanceof Tf?function(e){if("=="===e.op){if(ff(e.value))return{unaryFilter:{field:Xv(e.field),op:"IS_NAN"}};if(hf(e.value))return{unaryFilter:{field:Xv(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ff(e.value))return{unaryFilter:{field:Xv(e.field),op:"IS_NOT_NAN"}};if(hf(e.value))return{unaryFilter:{field:Xv(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xv(e.field),op:Jv(e.op),value:e.value}}}(e):e instanceof _f?(r=(t=e).getFilters().map((function(e){return $v(e)})),1===r.length?r[0]:{compositeFilter:{op:(n=t.op,Cv[n]),filters:r}}):ql();var t,n,r}function ep(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tp=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:uh.min(),s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:uh.min(),u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:qh.EMPTY_BYTE_STRING,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;e(l)(this,t),this.target=n,this.targetId=r,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=u,this.expectedCount=c}return e(h)(t,[{key:"withSequenceNumber",value:function(e){return new t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}},{key:"withResumeToken",value:function(e,n){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}},{key:"withExpectedCount",value:function(e){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}},{key:"withLastLimboFreeSnapshotVersion",value:function(e){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}]),t}(),np=function t(n){"use strict";e(l)(this,t),this.fe=n};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(e){var t=Gv({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?nd(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ip=function(){"use strict";function t(){e(l)(this,t)}return e(h)(t,[{key:"_e",value:function(e,t){this.me(e,t),t.ge()}},{key:"me",value:function(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Kh(e.integerValue));else if("doubleValue"in e){var n=Kh(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),Sh(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){var r=e.timestampValue;this.ye(t,20),"string"==typeof r?t.Ie(r):(t.Ie("".concat(r.seconds||"")),t.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Gh(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){var i=e.geoPointValue;this.ye(t,45),t.pe(i.latitude||0),t.pe(i.longitude||0)}else"mapValue"in e?pf(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):ql()}},{key:"Te",value:function(e,t){this.ye(t,25),this.be(e,t)}},{key:"be",value:function(e,t){t.Ie(e)}},{key:"Re",value:function(e,t){var n=e.fields||{};this.ye(t,55);var r=!0,i=!1,a=void 0;try{for(var o,s=Object.keys(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.Te(u,t),this.me(n[u],t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"Pe",value:function(e,t){var n=e.values||[];this.ye(t,50);var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.me(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"ve",value:function(e,t){var n=this;this.ye(t,37),dh.fromName(e).path.forEach((function(e){n.ye(t,60),n.be(e,t)}))}},{key:"ye",value:function(e,t){e.pe(t)}},{key:"Ee",value:function(e){e.pe(2)}}]),t}();ip.Ve=new ip;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ap=function(){"use strict";function t(){e(l)(this,t),this.rn=new op}return e(h)(t,[{key:"addToCollectionParentIndex",value:function(e,t){return this.rn.add(t),Ih.resolve()}},{key:"getCollectionParents",value:function(e,t){return Ih.resolve(this.rn.getEntries(t))}},{key:"addFieldIndex",value:function(e,t){return Ih.resolve()}},{key:"deleteFieldIndex",value:function(e,t){return Ih.resolve()}},{key:"getDocumentsMatchingTarget",value:function(e,t){return Ih.resolve(null)}},{key:"getIndexType",value:function(e,t){return Ih.resolve(0)}},{key:"getFieldIndexes",value:function(e,t){return Ih.resolve([])}},{key:"getNextCollectionGroupToUpdate",value:function(e){return Ih.resolve(null)}},{key:"getMinOffset",value:function(e,t){return Ih.resolve(mh.min())}},{key:"getMinOffsetFromCollectionGroup",value:function(e,t){return Ih.resolve(mh.min())}},{key:"updateCollectionGroup",value:function(e,t,n){return Ih.resolve()}},{key:"updateIndexEntries",value:function(e,t){return Ih.resolve()}}]),t}(),op=function(){"use strict";function t(){e(l)(this,t),this.index={}}return e(h)(t,[{key:"add",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Uh(lh.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}},{key:"has",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}},{key:"getEntries",value:function(e){return(this.index[e]||new Uh(lh.comparator)).toArray()}}]),t}();new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var sp=function(){"use strict";function t(n,r,i){e(l)(this,t),this.cacheSizeCollectionThreshold=n,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=i}return e(h)(t,null,[{key:"withCacheSize",value:function(e){return new t(e,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sp.DEFAULT_COLLECTION_PERCENTILE=10,sp.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sp.DEFAULT=new sp(41943040,sp.DEFAULT_COLLECTION_PERCENTILE,sp.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sp.DISABLED=new sp(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var up=function(){"use strict";function t(n){e(l)(this,t),this.Nn=n}return e(h)(t,[{key:"next",value:function(){return this.Nn+=2,this.Nn}}],[{key:"kn",value:function(){return new t(0)}},{key:"Mn",value:function(){return new t(-1)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cp=function(){"use strict";function t(){e(l)(this,t),this.changes=new ld((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)})),this.changesApplied=!1}return e(h)(t,[{key:"addEntry",value:function(e){this.assertNotApplied(),this.changes.set(e.key,e)}},{key:"removeEntry",value:function(e,t){this.assertNotApplied(),this.changes.set(e,gf.newInvalidDocument(e).setReadTime(t))}},{key:"getEntry",value:function(e,t){this.assertNotApplied();var n=this.changes.get(t);return void 0!==n?Ih.resolve(n):this.getFromCache(e,t)}},{key:"getEntries",value:function(e,t){return this.getAllFromCache(e,t)}},{key:"apply",value:function(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}},{key:"assertNotApplied",value:function(){}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var lp=function t(n,r){"use strict";e(l)(this,t),this.overlayedDocument=n,this.mutatedFields=r},hp=function(){"use strict";function t(n,r,i,a){e(l)(this,t),this.remoteDocumentCache=n,this.mutationQueue=r,this.documentOverlayCache=i,this.indexManager=a}return e(h)(t,[{key:"getDocument",value:function(e,t){var n=this,r=null;return this.documentOverlayCache.getOverlay(e,t).next((function(i){return r=i,n.remoteDocumentCache.getEntry(e,t)})).next((function(e){return null!==r&&Wd(r.mutation,e,jh.empty(),sh.now()),e}))}},{key:"getDocuments",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.getLocalViewOfDocuments(e,t,bd()).next((function(){return t}))}))}},{key:"getLocalViewOfDocuments",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:bd(),r=this,i=yd();return this.populateOverlays(e,i,t).next((function(){return r.computeViews(e,t,i,n).next((function(e){var t=vd();return e.forEach((function(e,n){t=t.insert(e,n.overlayedDocument)})),t}))}))}},{key:"getOverlayedDocuments",value:function(e,t){var n=this,r=yd();return this.populateOverlays(e,r,t).next((function(){return n.computeViews(e,t,r,bd())}))}},{key:"populateOverlays",value:function(e,t,n){var r=[];return n.forEach((function(e){t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((function(e){e.forEach((function(e,n){t.set(e,n)}))}))}},{key:"computeViews",value:function(e,t,n,r){var i=fd(),a=gd(),o=gd();return t.forEach((function(e,t){var o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Yd)?i=i.insert(t.key,t):void 0!==o?(a.set(t.key,o.mutation.getFieldMask()),Wd(o.mutation,t,o.mutation.getFieldMask(),sh.now())):a.set(t.key,jh.empty())})),this.recalculateAndSaveOverlays(e,i).next((function(e){return e.forEach((function(e,t){return a.set(e,t)})),t.forEach((function(e,t){var n;return o.set(e,new lp(t,null!==(n=a.get(e))&&void 0!==n?n:null))})),o}))}},{key:"recalculateAndSaveOverlays",value:function(e,t){var n=this,r=gd(),i=new Ph((function(e,t){return e-t})),a=bd();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((function(e){var n=!0,a=!1,o=void 0;try{for(var s,u=function(e,n){var a=n.value;a.keys().forEach((function(e){var n=t.get(e);if(null!==n){var o=r.get(e)||jh.empty();o=a.applyToLocalView(n,o),r.set(e,o);var s=(i.get(a.batchId)||bd()).add(e);i=i.insert(a.batchId,s)}}))},c=e[Symbol.iterator]();!(n=(s=c.next()).done);n=!0)u(0,s)}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}})).next((function(){for(var o=[],s=i.getReverseIterator();s.hasNext();){var u=s.getNext(),c=u.key,l=u.value,h=md();l.forEach((function(e){if(!a.has(e)){var n=qd(t.get(e),r.get(e));null!==n&&h.set(e,n),a=a.add(e)}})),o.push(n.documentOverlayCache.saveOverlays(e,c,h))}return Ih.waitFor(o)})).next((function(){return r}))}},{key:"recalculateAndSaveOverlaysForDocumentKeys",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.recalculateAndSaveOverlays(e,t)}))}},{key:"getDocumentsMatchingQuery",value:function(e,t,n){return r=t,dh.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Zf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var r}},{key:"getNextDocuments",value:function(e,t,n,r){var i=this;return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((function(a){var o=i,s=r-a.size>0?i.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-a.size):Ih.resolve(yd()),u=-1,c=a;return s.next((function(t){return Ih.forEach(t,(function(t,n){return u<n.largestBatchId&&(u=n.largestBatchId),a.get(t)?Ih.resolve():o.remoteDocumentCache.getEntry(e,t).next((function(e){c=c.insert(t,e)}))})).next((function(){return o.populateOverlays(e,t,a)})).next((function(){return o.computeViews(e,c,t,bd())})).next((function(e){return{batchId:u,changes:pd(e)}}))}))}))}},{key:"getDocumentsMatchingDocumentQuery",value:function(e,t){return this.getDocument(e,new dh(t)).next((function(e){var t=vd();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}},{key:"getDocumentsMatchingCollectionGroupQuery",value:function(e,t,n){var r=this,i=t.collectionGroup,a=vd();return this.indexManager.getCollectionParents(e,i).next((function(o){return Ih.forEach(o,(function(o){var s,u,c=(s=t,u=o.child(i),new Kf(u,null,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt));return r.getDocumentsMatchingCollectionQuery(e,c,n).next((function(e){e.forEach((function(e,t){a=a.insert(e,t)}))}))})).next((function(){return a}))}))}},{key:"getDocumentsMatchingCollectionQuery",value:function(e,t,n){var r,i=this;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((function(a){return r=a,i.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)})).next((function(e){r.forEach((function(t,n){var r=n.getKey();null===e.get(r)&&(e=e.insert(r,gf.newInvalidDocument(r)))}));var n=vd();return e.forEach((function(e,i){var a=r.get(e);void 0!==a&&Wd(a.mutation,i,jh.empty(),sh.now()),od(t,i)&&(n=n.insert(e,i))})),n}))}}]),t}(),fp=function(){"use strict";function t(n){e(l)(this,t),this.serializer=n,this.cs=new Map,this.hs=new Map}return e(h)(t,[{key:"getBundleMetadata",value:function(e,t){return Ih.resolve(this.cs.get(t))}},{key:"saveBundleMetadata",value:function(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:Lv(n.createTime)}),Ih.resolve()}},{key:"getNamedQuery",value:function(e,t){return Ih.resolve(this.hs.get(t))}},{key:"saveNamedQuery",value:function(e,t){return this.hs.set(t.name,{name:(n=t).name,query:rp(n.bundledQuery),readTime:Lv(n.readTime)}),Ih.resolve();var n}}]),t}(),dp=function(){"use strict";function t(){e(l)(this,t),this.overlays=new Ph(dh.comparator),this.ls=new Map}return e(h)(t,[{key:"getOverlay",value:function(e,t){return Ih.resolve(this.overlays.get(t))}},{key:"getOverlays",value:function(e,t){var n=this,r=yd();return Ih.forEach(t,(function(t){return n.getOverlay(e,t).next((function(e){null!==e&&r.set(t,e)}))})).next((function(){return r}))}},{key:"saveOverlays",value:function(e,t,n){var r=this;return n.forEach((function(n,i){r.we(e,t,i)})),Ih.resolve()}},{key:"removeOverlaysForBatchId",value:function(e,t,n){var r=this,i=this.ls.get(n);return void 0!==i&&(i.forEach((function(e){return r.overlays=r.overlays.remove(e)})),this.ls.delete(n)),Ih.resolve()}},{key:"getOverlaysForCollection",value:function(e,t,n){for(var r=yd(),i=t.length+1,a=new dh(t.child("")),o=this.overlays.getIteratorFrom(a);o.hasNext();){var s=o.getNext().value,u=s.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&s.largestBatchId>n&&r.set(s.getKey(),s)}return Ih.resolve(r)}},{key:"getOverlaysForCollectionGroup",value:function(e,t,n,r){for(var i=new Ph((function(e,t){return e-t})),a=this.overlays.getIterator();a.hasNext();){var o=a.getNext().value;if(o.getKey().getCollectionGroup()===t&&o.largestBatchId>n){var s=i.get(o.largestBatchId);null===s&&(s=yd(),i=i.insert(o.largestBatchId,s)),s.set(o.getKey(),o)}}for(var u=yd(),c=i.getIterator();c.hasNext()&&(c.getNext().value.forEach((function(e,t){return u.set(e,t)})),!(u.size()>=r)););return Ih.resolve(u)}},{key:"we",value:function(e,t,n){var r=this.overlays.get(n.key);if(null!==r){var i=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new av(t,n));var a=this.ls.get(t);void 0===a&&(a=bd(),this.ls.set(t,a)),this.ls.set(t,a.add(n.key))}}]),t}(),vp=function(){"use strict";function t(){e(l)(this,t),this.fs=new Uh(pp.ds),this.ws=new Uh(pp._s)}return e(h)(t,[{key:"isEmpty",value:function(){return this.fs.isEmpty()}},{key:"addReference",value:function(e,t){var n=new pp(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}},{key:"gs",value:function(e,t){var n=this;e.forEach((function(e){return n.addReference(e,t)}))}},{key:"removeReference",value:function(e,t){this.ys(new pp(e,t))}},{key:"ps",value:function(e,t){var n=this;e.forEach((function(e){return n.removeReference(e,t)}))}},{key:"Is",value:function(e){var t=this,n=new dh(new lh([])),r=new pp(n,e),i=new pp(n,e+1),a=[];return this.ws.forEachInRange([r,i],(function(e){t.ys(e),a.push(e.key)})),a}},{key:"Ts",value:function(){var e=this;this.fs.forEach((function(t){return e.ys(t)}))}},{key:"ys",value:function(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}},{key:"Es",value:function(e){var t=new dh(new lh([])),n=new pp(t,e),r=new pp(t,e+1),i=bd();return this.ws.forEachInRange([n,r],(function(e){i=i.add(e.key)})),i}},{key:"containsKey",value:function(e){var t=new pp(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}]),t}(),pp=function(){"use strict";function t(n,r){e(l)(this,t),this.key=n,this.As=r}return e(h)(t,null,[{key:"ds",value:function(e,t){return dh.comparator(e.key,t.key)||ah(e.As,t.As)}},{key:"_s",value:function(e,t){return ah(e.As,t.As)||dh.comparator(e.key,t.key)}}]),t}(),yp=function(){"use strict";function t(n,r){e(l)(this,t),this.indexManager=n,this.referenceDelegate=r,this.mutationQueue=[],this.vs=1,this.Rs=new Uh(pp.ds)}return e(h)(t,[{key:"checkEmpty",value:function(e){return Ih.resolve(0===this.mutationQueue.length)}},{key:"addMutationBatch",value:function(e,t,n,r){var i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];var a=new rv(i,t,n,r);this.mutationQueue.push(a);var o=!0,s=!1,u=void 0;try{for(var c,l=r[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value;this.Rs=this.Rs.add(new pp(h.key,i)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast())}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return Ih.resolve(a)}},{key:"lookupMutationBatch",value:function(e,t){return Ih.resolve(this.Ps(t))}},{key:"getNextMutationBatchAfterBatchId",value:function(e,t){var n=t+1,r=this.bs(n),i=r<0?0:r;return Ih.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}},{key:"getHighestUnacknowledgedBatchId",value:function(){return Ih.resolve(0===this.mutationQueue.length?-1:this.vs-1)}},{key:"getAllMutationBatches",value:function(e){return Ih.resolve(this.mutationQueue.slice())}},{key:"getAllMutationBatchesAffectingDocumentKey",value:function(e,t){var n=this,r=new pp(t,0),i=new pp(t,Number.POSITIVE_INFINITY),a=[];return this.Rs.forEachInRange([r,i],(function(e){var t=n.Ps(e.As);a.push(t)})),Ih.resolve(a)}},{key:"getAllMutationBatchesAffectingDocumentKeys",value:function(e,t){var n=this,r=new Uh(ah);return t.forEach((function(e){var t=new pp(e,0),i=new pp(e,Number.POSITIVE_INFINITY);n.Rs.forEachInRange([t,i],(function(e){r=r.add(e.As)}))})),Ih.resolve(this.Vs(r))}},{key:"getAllMutationBatchesAffectingQuery",value:function(e,t){var n=t.path,r=n.length+1,i=n;dh.isDocumentKey(i)||(i=i.child(""));var a=new pp(new dh(i),0),o=new Uh(ah);return this.Rs.forEachWhile((function(e){var t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.As)),!0)}),a),Ih.resolve(this.Vs(o))}},{key:"Vs",value:function(e){var t=this,n=[];return e.forEach((function(e){var r=t.Ps(e);null!==r&&n.push(r)})),n}},{key:"removeMutationBatch",value:function(e,t){var n=this;Hl(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();var r=this.Rs;return Ih.forEach(t.mutations,(function(i){var a=new pp(i.key,t.batchId);return r=r.delete(a),n.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((function(){n.Rs=r}))}},{key:"Cn",value:function(e){}},{key:"containsKey",value:function(e,t){var n=new pp(t,0),r=this.Rs.firstAfterOrEqual(n);return Ih.resolve(t.isEqual(r&&r.key))}},{key:"performConsistencyCheck",value:function(e){return this.mutationQueue.length,Ih.resolve()}},{key:"Ss",value:function(e,t){return this.bs(e)}},{key:"bs",value:function(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}},{key:"Ps",value:function(e){var t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}]),t}(),mp=function(){"use strict";function t(n){e(l)(this,t),this.Ds=n,this.docs=new Ph(dh.comparator),this.size=0}return e(h)(t,[{key:"setIndexManager",value:function(e){this.indexManager=e}},{key:"addEntry",value:function(e,t){var n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}},{key:"removeEntry",value:function(e){var t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}},{key:"getEntry",value:function(e,t){var n=this.docs.get(t);return Ih.resolve(n?n.document.mutableCopy():gf.newInvalidDocument(t))}},{key:"getEntries",value:function(e,t){var n=this,r=fd();return t.forEach((function(e){var t=n.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():gf.newInvalidDocument(e))})),Ih.resolve(r)}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){for(var i=fd(),a=t.path,o=new dh(a.child("")),s=this.docs.getIteratorFrom(o);s.hasNext();){var u=s.getNext(),c=u.key,l=u.value.document;if(!a.isPrefixOf(c.path))break;c.path.length>a.length+1||gh(yh(l),n)<=0||(r.has(l.key)||od(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return Ih.resolve(i)}},{key:"getAllFromCollectionGroup",value:function(e,t,n,r){ql()}},{key:"Cs",value:function(e,t){return Ih.forEach(this.docs,(function(e){return t(e)}))}},{key:"newChangeBuffer",value:function(e){return new gp(this)}},{key:"getSize",value:function(e){return Ih.resolve(this.size)}}]),t}(),gp=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t){var i;return e(l)(this,r),(i=n.call(this)).os=t,e(so)(i)}return e(h)(r,[{key:"applyChanges",value:function(e){var t=this,n=[];return this.changes.forEach((function(r,i){i.isValidDocument()?n.push(t.os.addEntry(e,i)):t.os.removeEntry(r)})),Ih.waitFor(n)}},{key:"getFromCache",value:function(e,t){return this.os.getEntry(e,t)}},{key:"getAllFromCache",value:function(e,t){return this.os.getEntries(e,t)}}]),r}(cp),kp=function(){"use strict";function t(n){e(l)(this,t),this.persistence=n,this.xs=new ld((function(e){return qf(e)}),Hf),this.lastRemoteSnapshotVersion=uh.min(),this.highestTargetId=0,this.Ns=0,this.ks=new vp,this.targetCount=0,this.Ms=up.kn()}return e(h)(t,[{key:"forEachTarget",value:function(e,t){return this.xs.forEach((function(e,n){return t(n)})),Ih.resolve()}},{key:"getLastRemoteSnapshotVersion",value:function(e){return Ih.resolve(this.lastRemoteSnapshotVersion)}},{key:"getHighestSequenceNumber",value:function(e){return Ih.resolve(this.Ns)}},{key:"allocateTargetId",value:function(e){return this.highestTargetId=this.Ms.next(),Ih.resolve(this.highestTargetId)}},{key:"setTargetsMetadata",value:function(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),Ih.resolve()}},{key:"Fn",value:function(e){this.xs.set(e.target,e);var t=e.targetId;t>this.highestTargetId&&(this.Ms=new up(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}},{key:"addTargetData",value:function(e,t){return this.Fn(t),this.targetCount+=1,Ih.resolve()}},{key:"updateTargetData",value:function(e,t){return this.Fn(t),Ih.resolve()}},{key:"removeTargetData",value:function(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,Ih.resolve()}},{key:"removeTargets",value:function(e,t,n){var r=this,i=0,a=[];return this.xs.forEach((function(o,s){s.sequenceNumber<=t&&null===n.get(s.targetId)&&(r.xs.delete(o),a.push(r.removeMatchingKeysForTargetId(e,s.targetId)),i++)})),Ih.waitFor(a).next((function(){return i}))}},{key:"getTargetCount",value:function(e){return Ih.resolve(this.targetCount)}},{key:"getTargetData",value:function(e,t){var n=this.xs.get(t)||null;return Ih.resolve(n)}},{key:"addMatchingKeys",value:function(e,t,n){return this.ks.gs(t,n),Ih.resolve()}},{key:"removeMatchingKeys",value:function(e,t,n){this.ks.ps(t,n);var r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((function(t){i.push(r.markPotentiallyOrphaned(e,t))})),Ih.waitFor(i)}},{key:"removeMatchingKeysForTargetId",value:function(e,t){return this.ks.Is(t),Ih.resolve()}},{key:"getMatchingKeysForTargetId",value:function(e,t){var n=this.ks.Es(t);return Ih.resolve(n)}},{key:"containsKey",value:function(e,t){return Ih.resolve(this.ks.containsKey(t))}}]),t}(),wp=function(){"use strict";function t(n,r){var i=this;e(l)(this,t),this.$s={},this.overlays={},this.Os=new Th(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=n(this),this.Bs=new kp(this),this.indexManager=new ap,this.remoteDocumentCache=new mp((function(e){return i.referenceDelegate.Ls(e)})),this.serializer=new np(r),this.qs=new fp(this.serializer)}return e(h)(t,[{key:"start",value:function(){return Promise.resolve()}},{key:"shutdown",value:function(){return this.Fs=!1,Promise.resolve()}},{key:"started",get:function(){return this.Fs}},{key:"setDatabaseDeletedListener",value:function(){}},{key:"setNetworkEnabled",value:function(){}},{key:"getIndexManager",value:function(e){return this.indexManager}},{key:"getDocumentOverlayCache",value:function(e){var t=this.overlays[e.toKey()];return t||(t=new dp,this.overlays[e.toKey()]=t),t}},{key:"getMutationQueue",value:function(e,t){var n=this.$s[e.toKey()];return n||(n=new yp(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}},{key:"getTargetCache",value:function(){return this.Bs}},{key:"getRemoteDocumentCache",value:function(){return this.remoteDocumentCache}},{key:"getBundleCache",value:function(){return this.qs}},{key:"runTransaction",value:function(e,t,n){var r=this;Vl("MemoryPersistence","Starting transaction:",e);var i=new bp(this.Os.next());return this.referenceDelegate.Us(),n(i).next((function(e){return r.referenceDelegate.Ks(i).next((function(){return e}))})).toPromise().then((function(e){return i.raiseOnCommittedEvent(),e}))}},{key:"Gs",value:function(e,t){return Ih.or(Object.values(this.$s).map((function(n){return function(){return n.containsKey(e,t)}})))}}]),t}(),bp=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t){var i;return e(l)(this,r),(i=n.call(this)).currentSequenceNumber=t,e(so)(i)}return r}(wh),xp=function(){"use strict";function t(n){e(l)(this,t),this.persistence=n,this.Qs=new vp,this.js=null}return e(h)(t,[{key:"Ws",get:function(){if(this.js)return this.js;throw ql()}},{key:"addReference",value:function(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),Ih.resolve()}},{key:"removeReference",value:function(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),Ih.resolve()}},{key:"markPotentiallyOrphaned",value:function(e,t){return this.Ws.add(t.toString()),Ih.resolve()}},{key:"removeTarget",value:function(e,t){var n=this;this.Qs.Is(t.targetId).forEach((function(e){return n.Ws.add(e.toString())}));var r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((function(e){var t=n;e.forEach((function(e){return t.Ws.add(e.toString())}))})).next((function(){return r.removeTargetData(e,t)}))}},{key:"Us",value:function(){this.js=new Set}},{key:"Ks",value:function(e){var t=this,n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ih.forEach(this.Ws,(function(r){var i=dh.fromPath(r);return t.Hs(e,i).next((function(e){e||n.removeEntry(i,uh.min())}))})).next((function(){return t.js=null,n.apply(e)}))}},{key:"updateLimboDocument",value:function(e,t){var n=this;return this.Hs(e,t).next((function(e){e?n.Ws.delete(t.toString()):n.Ws.add(t.toString())}))}},{key:"Ls",value:function(e){return 0}},{key:"Hs",value:function(e,t){var n=this;return Ih.or([function(){return Ih.resolve(n.Qs.containsKey(t))},function(){return n.persistence.getTargetCache().containsKey(e,t)},function(){return n.persistence.Gs(e,t)}])}}],[{key:"zs",value:function(e){return new t(e)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ip=function(){"use strict";function t(n,r,i,a){e(l)(this,t),this.targetId=n,this.fromCache=r,this.Fi=i,this.Bi=a}return e(h)(t,null,[{key:"Li",value:function(e,n){var r=bd(),i=bd(),a=!0,o=!1,s=void 0;try{for(var u,c=n.docChanges[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:i=i.add(l.doc.key)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new t(e,n.fromCache,r,i)}}]),t}(),Ep=function(){"use strict";function t(){e(l)(this,t),this.qi=!1}return e(h)(t,[{key:"initialize",value:function(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){var i=this;return this.Ki(e,t).next((function(a){return a||i.Gi(e,t,r,n)})).next((function(n){return n||i.Qi(e,t)}))}},{key:"Ki",value:function(t,n){var r=this;if(Yf(n))return Ih.resolve(null);var i=ed(n);return this.indexManager.getIndexType(t,i).next((function(a){return 0===a?null:(null!==n.limit&&1===a&&(n=nd(n,null,"F"),i=ed(n)),r.indexManager.getDocumentsMatchingTarget(t,i).next((function(a){var o=r,s=bd.apply(void 0,e(d)(a));return r.Ui.getDocuments(t,s).next((function(e){return o.indexManager.getMinOffset(t,i).next((function(r){var i=o.ji(n,e);return o.zi(n,i,s,r.readTime)?o.Ki(t,nd(n,null,"F")):o.Wi(t,i,n,r)}))}))})))}))}},{key:"Gi",value:function(e,t,n,r){var i=this;return Yf(t)||r.isEqual(uh.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((function(a){var o=i.ji(t,a);return i.zi(t,o,n,r)?i.Qi(e,t):(Ul()<=me.DEBUG&&Vl("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ad(t)),i.Wi(e,o,t,ph(r,-1)))}))}},{key:"ji",value:function(e,t){var n=new Uh(ud(e));return t.forEach((function(t,r){od(e,r)&&(n=n.add(r))})),n}},{key:"zi",value:function(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;var i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}},{key:"Qi",value:function(e,t){return Ul()<=me.DEBUG&&Vl("QueryEngine","Using full collection scan to execute query:",ad(t)),this.Ui.getDocumentsMatchingQuery(e,t,mh.min())}},{key:"Wi",value:function(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next((function(e){return t.forEach((function(t){e=e.insert(t.key,t)})),e}))}}]),t}(),Tp=function(){"use strict";function t(n,r,i,a){e(l)(this,t),this.persistence=n,this.Hi=r,this.serializer=a,this.Ji=new Ph(ah),this.Yi=new ld((function(e){return qf(e)}),Hf),this.Xi=new Map,this.Zi=n.getRemoteDocumentCache(),this.Bs=n.getTargetCache(),this.qs=n.getBundleCache(),this.tr(i)}return e(h)(t,[{key:"tr",value:function(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hp(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}},{key:"collectGarbage",value:function(e){var t=this;return this.persistence.runTransaction("Collect garbage","readwrite-primary",(function(n){return e.collect(n,t.Ji)}))}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(e,t,n,r){return new Tp(e,t,n,r)}function Sp(e,t){return Cp.apply(this,arguments)}function Cp(){return(Cp=e(s)(e(u).mark((function t(n,r){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Wl(n),e.next=3,i.persistence.runTransaction("Handle user change","readonly",(function(e){var t;return i.mutationQueue.getAllMutationBatches(e).next((function(n){return t=n,i.tr(r),i.mutationQueue.getAllMutationBatches(e)})).next((function(n){var r=[],a=[],o=bd(),s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;r.push(f.batchId);var d=!0,v=!1,p=void 0;try{for(var y,m=f.mutations[Symbol.iterator]();!(d=(y=m.next()).done);d=!0){var g=y.value;o=o.add(g.key)}}catch(e){v=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(v)throw p}}}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}var k=!0,w=!1,b=void 0;try{for(var x,I=n[Symbol.iterator]();!(k=(x=I.next()).done);k=!0){var E=x.value;a.push(E.batchId);var T=!0,_=!1,S=void 0;try{for(var C,A=E.mutations[Symbol.iterator]();!(T=(C=A.next()).done);T=!0){var N=C.value;o=o.add(N.key)}}catch(e){_=!0,S=e}finally{try{T||null==A.return||A.return()}finally{if(_)throw S}}}}catch(e){w=!0,b=e}finally{try{k||null==I.return||I.return()}finally{if(w)throw b}}return i.localDocuments.getDocuments(e,o).next((function(e){return{er:e,removedBatchIds:r,addedBatchIds:a}}))}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ap(e,t){var n=Wl(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(function(e){var r,i,a,o,s,u,c,l=t.batch.keys(),h=n.Zi.newChangeBuffer({trackRemovals:!0});return(r=n,i=e,a=t,o=h,s=a.batch,u=s.keys(),c=Ih.resolve(),u.forEach((function(e){c=c.next((function(){return o.getEntry(i,e)})).next((function(t){var n=a.docVersions.get(e);Hl(null!==n),t.version.compareTo(n)<0&&(s.applyToRemoteDocument(t,a),t.isValidDocument()&&(t.setReadTime(a.commitVersion),o.addEntry(t)))}))})),c.next((function(){return r.mutationQueue.removeMutationBatch(i,s)}))).next((function(){return h.apply(e)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,l,t.batch.batchId)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){for(var t=bd(),n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))})).next((function(){return n.localDocuments.getDocuments(e,l)}))}))}function Np(e){var t=Wl(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(function(e){return t.Bs.getLastRemoteSnapshotVersion(e)}))}function Dp(e,t){var n=Wl(e),r=t.snapshotVersion,i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(function(e){var a=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;var o=[];t.targetChanges.forEach((function(a,s){var u=i.get(s);if(u){o.push(n.Bs.removeMatchingKeys(e,a.removedDocuments,s).next((function(){return n.Bs.addMatchingKeys(e,a.addedDocuments,s)})));var c,l,h,f=u.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(s)?f=f.withResumeToken(qh.EMPTY_BYTE_STRING,uh.min()).withLastLimboFreeSnapshotVersion(uh.min()):a.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(a.resumeToken,r)),i=i.insert(s,f),l=f,h=a,(0===(c=u).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.Bs.updateTargetData(e,f))}}));var s=fd(),u=bd();if(t.documentUpdates.forEach((function(r){t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Rp(e,a,t.documentUpdates).next((function(e){s=e.nr,u=e.sr}))),!r.isEqual(uh.min())){var c=n.Bs.getLastRemoteSnapshotVersion(e).next((function(t){return n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r)}));o.push(c)}return Ih.waitFor(o).next((function(){return a.apply(e)})).next((function(){return n.localDocuments.getLocalViewOfDocuments(e,s,u)})).next((function(){return s}))})).then((function(e){return n.Ji=i,e}))}function Rp(e,t,n){var r=bd(),i=bd();return n.forEach((function(e){return r=r.add(e)})),t.getEntries(e,r).next((function(e){var r=fd();return n.forEach((function(n,a){var o=e.get(n);a.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),a.isNoDocument()&&a.version.isEqual(uh.min())?(t.removeEntry(n,a.readTime),r=r.insert(n,a)):!o.isValidDocument()||a.version.compareTo(o.version)>0||0===a.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(a),r=r.insert(n,a)):Vl("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",a.version)})),{nr:r,sr:i}}))}function Op(e,t){var n=Wl(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(function(e){return void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)}))}function Lp(e,t){var n=Wl(e);return n.persistence.runTransaction("Allocate target","readwrite",(function(e){var r;return n.Bs.getTargetData(e,t).next((function(i){return i?(r=i,Ih.resolve(r)):n.Bs.allocateTargetId(e).next((function(i){return r=new tp(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next((function(){return r}))}))}))})).then((function(e){var r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}function Pp(e,t,n){return Mp.apply(this,arguments)}function Mp(){return(Mp=e(s)(e(u).mark((function t(n,r,i){var a,o,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Wl(n),o=a.Ji.get(r),s=i?"readwrite":"readwrite-primary",e.prev=1,e.t0=i,e.t0){e.next=6;break}return e.next=6,a.persistence.runTransaction("Release target",s,(function(e){return a.persistence.referenceDelegate.removeTarget(e,o)}));case 6:e.next=13;break;case 8:if(e.prev=8,e.t1=e.catch(1),Eh(e.t1)){e.next=12;break}throw e.t1;case 12:Vl("LocalStore","Failed to update sequence numbers for target ".concat(r,": ").concat(e.t1));case 13:a.Ji=a.Ji.remove(r),a.Yi.delete(o.target);case 14:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function Fp(e,t,n){var r=Wl(e),i=uh.min(),a=bd();return r.persistence.runTransaction("Execute query","readonly",(function(e){return(o=r,s=e,u=ed(t),c=Wl(o),l=c.Yi.get(u),void 0!==l?Ih.resolve(c.Ji.get(l)):c.Bs.getTargetData(s,u)).next((function(t){if(t)return i=t.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(e,t.targetId).next((function(e){a=e}))})).next((function(){return r.Hi.getDocumentsMatchingQuery(e,t,n?i:uh.min(),n?a:bd())})).next((function(e){return Up(r,sd(t),e),{documents:e,ir:a}}));var o,s,u,c,l}))}function Up(e,t,n){var r=e.Xi.get(t)||uh.min();n.forEach((function(e,t){t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Xi.set(t,r)}var Vp=function(){"use strict";function t(){e(l)(this,t),this.activeTargetIds=Id()}return e(h)(t,[{key:"lr",value:function(e){this.activeTargetIds=this.activeTargetIds.add(e)}},{key:"dr",value:function(e){this.activeTargetIds=this.activeTargetIds.delete(e)}},{key:"hr",value:function(){var e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}]),t}(),jp=function(){"use strict";function t(){e(l)(this,t),this.Hr=new Vp,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}return e(h)(t,[{key:"addPendingMutation",value:function(e){}},{key:"updateMutationState",value:function(e,t,n){}},{key:"addLocalQueryTarget",value:function(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}},{key:"updateQueryState",value:function(e,t,n){this.Jr[e]=t}},{key:"removeLocalQueryTarget",value:function(e){this.Hr.dr(e)}},{key:"isLocalQueryTarget",value:function(e){return this.Hr.activeTargetIds.has(e)}},{key:"clearQueryState",value:function(e){delete this.Jr[e]}},{key:"getAllActiveQueryTargets",value:function(){return this.Hr.activeTargetIds}},{key:"isActiveQueryTarget",value:function(e){return this.Hr.activeTargetIds.has(e)}},{key:"start",value:function(){return this.Hr=new Vp,Promise.resolve()}},{key:"handleUserChange",value:function(e,t,n){}},{key:"setOnlineState",value:function(e){}},{key:"shutdown",value:function(){}},{key:"writeSequenceNumber",value:function(e){}},{key:"notifyBundleLoaded",value:function(e){}}]),t}(),Bp=function(){"use strict";function t(){e(l)(this,t)}return e(h)(t,[{key:"Yr",value:function(e){}},{key:"shutdown",value:function(){}}]),t}(),zp=function(){"use strict";function t(){var n=this;e(l)(this,t),this.Xr=function(){return n.Zr()},this.eo=function(){return n.no()},this.so=[],this.io()}return e(h)(t,[{key:"Yr",value:function(e){this.so.push(e)}},{key:"shutdown",value:function(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}},{key:"io",value:function(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}},{key:"Zr",value:function(){Vl("ConnectivityMonitor","Network connectivity changed: AVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.so[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(0)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"no",value:function(){Vl("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.so[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(1)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}}],[{key:"D",value:function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}]),t}(),qp=null;function Hp(){return null===qp?qp=268435456+Math.round(2147483648*Math.random()):qp++,"0x"+qp.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var Wp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},Kp=function(){"use strict";function t(n){e(l)(this,t),this.ro=n.ro,this.oo=n.oo}return e(h)(t,[{key:"uo",value:function(e){this.co=e}},{key:"ao",value:function(e){this.ho=e}},{key:"onMessage",value:function(e){this.lo=e}},{key:"close",value:function(){this.oo()}},{key:"send",value:function(e){this.ro(e)}},{key:"fo",value:function(){this.co()}},{key:"wo",value:function(e){this.ho(e)}},{key:"_o",value:function(e){this.lo(e)}}]),t}(),Gp="WebChannelConnection",Qp=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t){var i;return e(l)(this,r),(i=n.call(this,t)).forceLongPolling=t.forceLongPolling,i.autoDetectLongPolling=t.autoDetectLongPolling,i.useFetchStreams=t.useFetchStreams,i.longPollingOptions=t.longPollingOptions,e(so)(i)}return e(h)(r,[{key:"Ao",value:function(e,t,n,r){var i=Hp();return new Promise((function(a,o){var s=new Dl;s.setWithCredentials(!0),s.listenOnce(_l.COMPLETE,(function(){try{switch(s.getLastErrorCode()){case Tl.NO_ERROR:var t=s.getResponseJson();Vl(Gp,"XHR for RPC '".concat(e,"' ").concat(i," received:"),JSON.stringify(t)),a(t);break;case Tl.TIMEOUT:Vl(Gp,"RPC '".concat(e,"' ").concat(i," timed out")),o(new Gl(Kl.DEADLINE_EXCEEDED,"Request time out"));break;case Tl.HTTP_ERROR:var n=s.getStatus();if(Vl(Gp,"RPC '".concat(e,"' ").concat(i," failed with status:"),n,"response text:",s.getResponseText()),n>0){var r=s.getResponseJson();Array.isArray(r)&&(r=r[0]);var u=null==r?void 0:r.error;if(u&&u.status&&u.message){var c=(l=u.status,h=l.toLowerCase().replace(/_/g,"-"),Object.values(Kl).indexOf(h)>=0?h:Kl.UNKNOWN);o(new Gl(c,u.message))}else o(new Gl(Kl.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new Gl(Kl.UNAVAILABLE,"Connection failed."));break;default:ql()}}finally{Vl(Gp,"RPC '".concat(e,"' ").concat(i," completed."))}var l,h}));var u=JSON.stringify(r);Vl(Gp,"RPC '".concat(e,"' ").concat(i," sending request:"),r),s.send(t,"POST",u,n,15)}))}},{key:"Ro",value:function(e,t,n){var r=Hp(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Il(),o=El(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/".concat(this.databaseId.projectId,"/databases/").concat(this.databaseId.database)},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(s.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(s.xmlHttpFactory=new Al({})),this.Eo(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;var c=i.join("");Vl(Gp,"Creating RPC '".concat(e,"' stream ").concat(r,": ").concat(c),s);var l=a.createWebChannel(c,s),h=!1,f=!1,d=new Kp({ro:function(t){f?Vl(Gp,"Not sending because RPC '".concat(e,"' stream ").concat(r," is closed:"),t):(h||(Vl(Gp,"Opening RPC '".concat(e,"' stream ").concat(r," transport.")),l.open(),h=!0),Vl(Gp,"RPC '".concat(e,"' stream ").concat(r," sending:"),t),l.send(t))},oo:function(){return l.close()}}),v=function(e,t,n){e.listen(t,(function(e){try{n(e)}catch(e){setTimeout((function(){throw e}),0)}}))};return v(l,Nl.EventType.OPEN,(function(){f||Vl(Gp,"RPC '".concat(e,"' stream ").concat(r," transport opened."))})),v(l,Nl.EventType.CLOSE,(function(){f||(f=!0,Vl(Gp,"RPC '".concat(e,"' stream ").concat(r," transport closed")),d.wo())})),v(l,Nl.EventType.ERROR,(function(t){f||(f=!0,Bl(Gp,"RPC '".concat(e,"' stream ").concat(r," transport errored:"),t),d.wo(new Gl(Kl.UNAVAILABLE,"The operation could not be completed")))})),v(l,Nl.EventType.MESSAGE,(function(t){var n;if(!f){var i=t.data[0];Hl(!!i);var a=i,o=a.error||(null===(n=a[0])||void 0===n?void 0:n.error);if(o){Vl(Gp,"RPC '".concat(e,"' stream ").concat(r," received error:"),o);var s=o.status,u=function(e){var t=$d[e];if(void 0!==t)return uv(t)}(s),c=o.message;void 0===u&&(u=Kl.INTERNAL,c="Unknown error status: "+s+" with message "+o.message),f=!0,d.wo(new Gl(u,c)),l.close()}else Vl(Gp,"RPC '".concat(e,"' stream ").concat(r," received:"),i),d._o(i)}})),v(o,Sl.STAT_EVENT,(function(t){t.stat===Cl.PROXY?Vl(Gp,"RPC '".concat(e,"' stream ").concat(r," detected buffering proxy")):t.stat===Cl.NOPROXY&&Vl(Gp,"RPC '".concat(e,"' stream ").concat(r," detected no buffering proxy"))})),setTimeout((function(){d.fo()}),0),d}}]),r}(function(){"use strict";function t(n){e(l)(this,t),this.databaseInfo=n,this.databaseId=n.databaseId;var r=n.ssl?"https":"http";this.mo=r+"://"+n.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}return e(h)(t,[{key:"po",get:function(){return!1}},{key:"Io",value:function(e,t,n,r,i){var a=Hp(),o=this.To(e,t);Vl("RestConnection","Sending RPC '".concat(e,"' ").concat(a,":"),o,n);var s={};return this.Eo(s,r,i),this.Ao(e,o,s,n).then((function(t){return Vl("RestConnection","Received RPC '".concat(e,"' ").concat(a,": "),t),t}),(function(t){throw Bl("RestConnection","RPC '".concat(e,"' ").concat(a," failed with error: "),t,"url: ",o,"request:",n),t}))}},{key:"vo",value:function(e,t,n,r,i,a){return this.Io(e,t,n,r,i)}},{key:"Eo",value:function(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ml,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((function(t,n){return e[n]=t})),n&&n.headers.forEach((function(t,n){return e[n]=t}))}},{key:"To",value:function(e,t){var n=Wp[e];return"".concat(this.mo,"/v1/").concat(t,":").concat(n)}}]),t}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(e){return new Av(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xp=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;e(l)(this,t),this.ii=n,this.timerId=r,this.Po=i,this.bo=a,this.Vo=o,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}return e(h)(t,[{key:"reset",value:function(){this.So=0}},{key:"xo",value:function(){this.So=this.Vo}},{key:"No",value:function(e){var t=this;this.cancel();var n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&Vl("ExponentialBackoff","Backing off for ".concat(i," ms (base delay: ").concat(this.So," ms, delay with jitter: ").concat(n," ms, last attempt: ").concat(r," ms ago)")),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,(function(){return t.Co=Date.now(),e()})),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}},{key:"Mo",value:function(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}},{key:"cancel",value:function(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}},{key:"ko",value:function(){return(Math.random()-.5)*this.So}}]),t}(),Zp=function(){"use strict";function t(n,r,i,a,o,s,u,c){e(l)(this,t),this.ii=n,this.$o=i,this.Oo=a,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Xp(n,r)}return e(h)(t,[{key:"Uo",value:function(){return 1===this.state||5===this.state||this.Ko()}},{key:"Ko",value:function(){return 2===this.state||3===this.state}},{key:"start",value:function(){4!==this.state?this.auth():this.Go()}},{key:"stop",value:function(){var t=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t.Uo(),!e.t0){e.next=4;break}return e.next=4,t.close(0);case 4:case"end":return e.stop()}}),n)})))()}},{key:"Qo",value:function(){this.state=0,this.qo.reset()}},{key:"jo",value:function(){var e=this;this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(function(){return e.zo()})))}},{key:"Wo",value:function(e){this.Ho(),this.stream.send(e)}},{key:"zo",value:function(){var t=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.Ko()){e.next=2;break}return e.abrupt("return",t.close(0));case 2:case"end":return e.stop()}}),n)})))()}},{key:"Ho",value:function(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}},{key:"Jo",value:function(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}},{key:"close",value:function(t,n){var r=this;return e(s)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.Ho(),r.Jo(),r.qo.cancel(),r.Fo++,4!==t?r.qo.reset():n&&n.code===Kl.RESOURCE_EXHAUSTED?(jl(n.toString()),jl("Using maximum backoff delay to prevent overloading the backend."),r.qo.xo()):n&&n.code===Kl.UNAUTHENTICATED&&3!==r.state&&(r.authCredentialsProvider.invalidateToken(),r.appCheckCredentialsProvider.invalidateToken()),null!==r.stream&&(r.Yo(),r.stream.close(),r.stream=null),r.state=t,e.next=9,r.listener.ao(n);case 9:case"end":return e.stop()}}),i)})))()}},{key:"Yo",value:function(){}},{key:"auth",value:function(){var t=this;this.state=1;var n=this.Xo(this.Fo),r=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((function(n){var i=e(v)(n,2),a=i[0],o=i[1];t.Fo===r&&t.Zo(a,o)}),(function(e){var r=t;n((function(){var t=new Gl(Kl.UNKNOWN,"Fetching auth token failed: "+e.message);return r.tu(t)}))}))}},{key:"Zo",value:function(e,t){var n=this,r=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((function(){var e=n;r((function(){return e.state=2,e.Lo=e.ii.enqueueAfterDelay(e.Oo,1e4,(function(){return e.Ko()&&(e.state=3),Promise.resolve()})),e.listener.uo()}))})),this.stream.ao((function(e){var t=n;r((function(){return t.tu(e)}))})),this.stream.onMessage((function(e){var t=n;r((function(){return t.onMessage(e)}))}))}},{key:"Go",value:function(){var t=this;this.state=5,this.qo.No(e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.state=0,t.start();case 1:case"end":return e.stop()}}),n)}))))}},{key:"tu",value:function(e){return Vl("PersistentStream","close with error: ".concat(e)),this.stream=null,this.close(4,e)}},{key:"Xo",value:function(e){var t=this;return function(n){var r=t;t.ii.enqueueAndForget((function(){return r.Fo===e?n():(Vl("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())}))}}}]),t}(),$p=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a,o,s,u){var c;return e(l)(this,r),(c=n.call(this,t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,o,u)).serializer=s,e(so)(c)}return e(h)(r,[{key:"eu",value:function(e,t){return this.connection.Ro("Listen",e,t)}},{key:"onMessage",value:function(e){this.qo.reset();var t=function(e,t){var n,r;if("targetChange"in t){t.targetChange;var i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:ql(),a=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(Hl(void 0===t||"string"==typeof t),qh.fromBase64String(t||"")):(Hl(void 0===t||t instanceof Uint8Array),qh.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,u=s&&function(e){var t=void 0===e.code?Kl.UNKNOWN:uv(e.code);return new Gl(t,e.message||"")}(s);n=new bv(i,a,o,u||null)}else if("documentChange"in t){t.documentChange;var c=t.documentChange;c.document,c.document.name,c.document.updateTime;var l=Uv(e,c.document.name),h=Lv(c.document.updateTime),f=c.document.createTime?Lv(c.document.createTime):uh.min(),d=new yf({mapValue:{fields:c.document.fields}}),v=gf.newFoundDocument(l,h,f,d),p=c.targetIds||[],y=c.removedTargetIds||[];n=new kv(p,y,v.key,v)}else if("documentDelete"in t){t.documentDelete;var m=t.documentDelete;m.document;var g=Uv(e,m.document),k=m.readTime?Lv(m.readTime):uh.min(),w=gf.newNoDocument(g,k),b=m.removedTargetIds||[];n=new kv([],b,w.key,w)}else if("documentRemove"in t){t.documentRemove;var x=t.documentRemove;x.document;var I=Uv(e,x.document),E=x.removedTargetIds||[];n=new kv([],E,I,null)}else{if(!("filter"in t))return ql();t.filter;var T=t.filter;T.targetId;var _=T.count,S=void 0===_?0:_,C=T.unchangedNames,A=new ov(S,C),N=T.targetId;n=new wv(N,A)}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return uh.min();var t=e.targetChange;return t.targetIds&&t.targetIds.length?uh.min():t.readTime?Lv(t.readTime):uh.min()}(e);return this.listener.nu(t,n)}},{key:"su",value:function(e){var t={};t.database=Bv(this.serializer),t.addTarget=function(e,t){var n,r=t.target;if((n=Wf(r)?{documents:Wv(e,r)}:{query:Kv(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Rv(e,t.resumeToken);var i=Nv(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(uh.min())>0){n.readTime=Dv(e,t.snapshotVersion.toTimestamp());var a=Nv(e,t.expectedCount);null!==a&&(n.expectedCount=a)}return n}(this.serializer,e);var n,r=(this.serializer,null==(n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ql()}}(e.purpose))?null:{"goog-listen-tags":n});r&&(t.labels=r),this.Wo(t)}},{key:"iu",value:function(e){var t={};t.database=Bv(this.serializer),t.removeTarget=e,this.Wo(t)}}]),r}(Zp),ey=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a,o,s,u){var c;return e(l)(this,r),(c=n.call(this,t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,o,u)).serializer=s,c.ru=!1,e(so)(c)}return e(h)(r,[{key:"ou",get:function(){return this.ru}},{key:"start",value:function(){this.ru=!1,this.lastStreamToken=void 0,e(St)(e(Nt)(r.prototype),"start",this).call(this)}},{key:"Yo",value:function(){this.ru&&this.uu([])}},{key:"eu",value:function(e,t){return this.connection.Ro("Write",e,t)}},{key:"onMessage",value:function(e){if(Hl(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();var t=(r=e.writeResults,i=e.commitTime,r&&r.length>0?(Hl(void 0!==i),r.map((function(e){return n=i,(r=(t=e).updateTime?Lv(t.updateTime):Lv(n)).isEqual(uh.min())&&(r=Lv(n)),new Vd(r,t.transformResults||[]);var t,n,r}))):[]),n=Lv(e.commitTime);return this.listener.cu(n,t)}var r,i;return Hl(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}},{key:"hu",value:function(){var e={};e.database=Bv(this.serializer),this.Wo(e)}},{key:"uu",value:function(e){var t=this,n={streamToken:this.lastStreamToken,writes:e.map((function(e){return Hv(t.serializer,e)}))};this.Wo(n)}}]),r}(Zp),ty=function(t){"use strict";e(y)(r,(function t(){e(l)(this,t)}));var n=e(S)(r);function r(t,i,a,o){var s;return e(l)(this,r),(s=n.call(this)).authCredentials=t,s.appCheckCredentials=i,s.connection=a,s.serializer=o,s.lu=!1,e(so)(s)}return e(h)(r,[{key:"fu",value:function(){if(this.lu)throw new Gl(Kl.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"Io",value:function(t,n,r){var i=this;return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var o=e(v)(a,2),s=o[0],u=o[1];return i.connection.Io(t,n,r,s,u)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===Kl.UNAUTHENTICATED&&(i.authCredentials.invalidateToken(),i.appCheckCredentials.invalidateToken()),e):new Gl(Kl.UNKNOWN,e.toString())}))}},{key:"vo",value:function(t,n,r,i){var a=this;return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(o){var s=e(v)(o,2),u=s[0],c=s[1];return a.connection.vo(t,n,r,u,c,i)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===Kl.UNAUTHENTICATED&&(a.authCredentials.invalidateToken(),a.appCheckCredentials.invalidateToken()),e):new Gl(Kl.UNKNOWN,e.toString())}))}},{key:"terminate",value:function(){this.lu=!0}}]),r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ny=function(){"use strict";function t(n,r){e(l)(this,t),this.asyncQueue=n,this.onlineStateHandler=r,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}return e(h)(t,[{key:"gu",value:function(){var e=this;0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(function(){return e._u=null,e.pu("Backend didn't respond within 10 seconds."),e.yu("Offline"),Promise.resolve()})))}},{key:"Iu",value:function(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu("Connection failed 1 times. Most recent error: ".concat(e.toString())),this.yu("Offline")))}},{key:"set",value:function(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}},{key:"yu",value:function(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}},{key:"pu",value:function(e){var t="Could not reach Cloud Firestore backend. ".concat(e,"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");this.mu?(jl(t),this.mu=!1):Vl("OnlineStateTracker",t)}},{key:"Tu",value:function(){null!==this._u&&(this._u.cancel(),this._u=null)}}]),t}(),ry=function t(n,r,i,a,o){"use strict";var c=this;e(l)(this,t),this.localStore=n,this.datastore=r,this.asyncQueue=i,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=o,this.Pu.Yr((function(t){var n=c;i.enqueueAndForget(e(s)(e(u).mark((function t(){return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=vy(n),!t.t0){t.next=5;break}return Vl("RemoteStore","Restarting streams for network reachability change."),t.next=5,function(){var t=e(s)(e(u).mark((function t(n){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=Wl(n)).vu.add(4),e.next=4,oy(r);case 4:return r.bu.set("Unknown"),r.vu.delete(4),e.next=8,iy(r);case 8:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()(n);case 5:case"end":return t.stop()}}),t)}))))})),this.bu=new ny(i,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(e){return ay.apply(this,arguments)}function ay(){return(ay=e(s)(e(u).mark((function t(n){var r,i,a,o,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!0,i=!1,a=void 0,!vy(n)){e.next=25;break}e.prev=2,o=n.Ru[Symbol.iterator]();case 4:if(r=(s=o.next()).done){e.next=11;break}return c=s.value,e.next=8,c(!0);case 8:r=!0,e.next=4;break;case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),i=!0,a=e.t0;case 17:e.prev=17,e.prev=18,r||null==o.return||o.return();case 20:if(e.prev=20,!i){e.next=23;break}throw a;case 23:return e.finish(20);case 24:return e.finish(17);case 25:case"end":return e.stop()}}),t,null,[[2,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function oy(e){return sy.apply(this,arguments)}function sy(){return(sy=e(s)(e(u).mark((function t(n){var r,i,a,o,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,i=!1,a=void 0,e.prev=1,o=n.Ru[Symbol.iterator]();case 3:if(r=(s=o.next()).done){e.next=10;break}return c=s.value,e.next=7,c(!1);case 7:r=!0,e.next=3;break;case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),i=!0,a=e.t0;case 16:e.prev=16,e.prev=17,r||null==o.return||o.return();case 19:if(e.prev=19,!i){e.next=22;break}throw a;case 22:return e.finish(19);case 23:return e.finish(16);case 24:case"end":return e.stop()}}),t,null,[[1,12,16,24],[17,,19,23]])})))).apply(this,arguments)}function uy(e,t){var n=Wl(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),dy(n)?fy(n):qy(n).Ko()&&ly(n,t))}function cy(e,t){var n=Wl(e),r=qy(n);n.Au.delete(t),r.Ko()&&hy(n,t),0===n.Au.size&&(r.Ko()?r.jo():vy(n)&&n.bu.set("Unknown"))}function ly(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(uh.min())>0){var n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}qy(e).su(t)}function hy(e,t){e.Vu.qt(t),qy(e).iu(t)}function fy(e){e.Vu=new Iv({getRemoteKeysForTarget:function(t){return e.remoteSyncer.getRemoteKeysForTarget(t)},le:function(t){return e.Au.get(t)||null},ue:function(){return e.datastore.serializer.databaseId}}),qy(e).start(),e.bu.gu()}function dy(e){return vy(e)&&!qy(e).Uo()&&e.Au.size>0}function vy(e){return 0===Wl(e).vu.size}function py(e){e.Vu=void 0}function yy(e){return my.apply(this,arguments)}function my(){return(my=e(s)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.Au.forEach((function(e,t){ly(n,e)}));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function gy(e,t){return ky.apply(this,arguments)}function ky(){return(ky=e(s)(e(u).mark((function t(n,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:py(n),dy(n)?(n.bu.Iu(r),fy(n)):n.bu.set("Unknown");case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function wy(e,t,n){return by.apply(this,arguments)}function by(){return by=e(s)(e(u).mark((function t(n,r,i){var a;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.bu.set("Online"),!(r instanceof bv&&2===r.state&&r.cause)){t.next=13;break}return t.prev=1,t.next=4,function(){var t=e(s)(e(u).mark((function t(n,r){var i,a,o,s,c,l,h;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.cause,a=!0,o=!1,s=void 0,e.prev=2,c=r.targetIds[Symbol.iterator]();case 4:if(a=(l=c.next()).done){e.next=15;break}if(h=l.value,e.t0=n.Au.has(h),!e.t0){e.next=12;break}return e.next=10,n.remoteSyncer.rejectListen(h,i);case 10:n.Au.delete(h),n.Vu.removeTarget(h);case 12:a=!0,e.next=4;break;case 15:e.next=21;break;case 17:e.prev=17,e.t1=e.catch(2),o=!0,s=e.t1;case 21:e.prev=21,e.prev=22,a||null==c.return||c.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:case"end":return e.stop()}}),t,null,[[2,17,21,29],[22,,24,28]])})));return function(e,n){return t.apply(this,arguments)}}()(n,r);case 4:t.next=11;break;case 6:return t.prev=6,t.t0=t.catch(1),Vl("RemoteStore","Failed to remove targets %s: %s ",r.targetIds.join(","),t.t0),t.next=11,xy(n,t.t0);case 11:case 22:t.next=29;break;case 13:if(r instanceof kv?n.Vu.Ht(r):r instanceof wv?n.Vu.ne(r):n.Vu.Xt(r),i.isEqual(uh.min())){t.next=29;break}return t.prev=14,t.next=17,Np(n.localStore);case 17:if(a=t.sent,t.t1=i.compareTo(a)>=0,!t.t1){t.next=22;break}return t.next=22,function(e,t){var n=e.Vu.ce(t);return n.targetChanges.forEach((function(n,r){if(n.resumeToken.approximateByteSize()>0){var i=e.Au.get(r);i&&e.Au.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((function(t,n){var r=e.Au.get(t);if(r){e.Au.set(t,r.withResumeToken(qh.EMPTY_BYTE_STRING,r.snapshotVersion)),hy(e,t);var i=new tp(r.target,t,n,r.sequenceNumber);ly(e,i)}})),e.remoteSyncer.applyRemoteEvent(n)}(n,i);case 24:return t.prev=24,t.t2=t.catch(14),Vl("RemoteStore","Failed to raise snapshot:",t.t2),t.next=29,xy(n,t.t2);case 29:case"end":return t.stop()}}),t,null,[[1,6],[14,24]])}))),by.apply(this,arguments)}function xy(e,t,n){return Iy.apply(this,arguments)}function Iy(){return(Iy=e(s)(e(u).mark((function t(n,r,i){return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Eh(r)){t.next=2;break}throw r;case 2:return n.vu.add(1),t.next=5,oy(n);case 5:n.bu.set("Offline"),i||(i=function(){return Np(n.localStore)}),n.asyncQueue.enqueueRetryable(e(s)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Vl("RemoteStore","Retrying IndexedDB access"),e.next=3,i();case 3:return n.vu.delete(1),e.next=6,iy(n);case 6:case"end":return e.stop()}}),t)}))));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Ey(e,t){return t().catch((function(n){return xy(e,n,t)}))}function Ty(e){return _y.apply(this,arguments)}function _y(){return(_y=e(s)(e(u).mark((function t(n){var r,i,a,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=Wl(n),i=Hy(r),a=r.Eu.length>0?r.Eu[r.Eu.length-1].batchId:-1;case 2:if(!Sy(r)){e.next=19;break}return e.prev=3,e.next=6,Op(r.localStore,a);case 6:if(null!==(o=e.sent)){e.next=10;break}return 0===r.Eu.length&&i.jo(),e.abrupt("break",19);case 10:a=o.batchId,Cy(r,o),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(3),e.next=17,xy(r,e.t0);case 17:e.next=2;break;case 19:Ay(r)&&Ny(r);case 20:case"end":return e.stop()}}),t,null,[[3,13]])})))).apply(this,arguments)}function Sy(e){return vy(e)&&e.Eu.length<10}function Cy(e,t){e.Eu.push(t);var n=Hy(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Ay(e){return vy(e)&&!Hy(e).Uo()&&e.Eu.length>0}function Ny(e){Hy(e).start()}function Dy(e){return Ry.apply(this,arguments)}function Ry(){return(Ry=e(s)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Hy(n).hu();case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Oy(e){return Ly.apply(this,arguments)}function Ly(){return(Ly=e(s)(e(u).mark((function t(n){var r,i,a,o,s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=Hy(n),i=!0,a=!1,o=void 0,e.prev=2,s=n.Eu[Symbol.iterator]();!(i=(c=s.next()).done);i=!0)l=c.value,r.uu(l.mutations);e.next=10;break;case 6:e.prev=6,e.t0=e.catch(2),a=!0,o=e.t0;case 10:e.prev=10,e.prev=11,i||null==s.return||s.return();case 13:if(e.prev=13,!a){e.next=16;break}throw o;case 16:return e.finish(13);case 17:return e.finish(10);case 18:case"end":return e.stop()}}),t,null,[[2,6,10,18],[11,,13,17]])})))).apply(this,arguments)}function Py(e,t,n){return My.apply(this,arguments)}function My(){return(My=e(s)(e(u).mark((function t(n,r,i){var a,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.Eu.shift(),o=iv.from(a,r,i),e.next=3,Ey(n,(function(){return n.remoteSyncer.applySuccessfulWrite(o)}));case 3:return e.next=5,Ty(n);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Fy(e,t){return Uy.apply(this,arguments)}function Uy(){return Uy=e(s)(e(u).mark((function t(n,r){return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r&&Hy(n).ou,!t.t0){t.next=4;break}return t.next=4,function(){var t=e(s)(e(u).mark((function t(n,r){var i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!sv(a=r.code)||a===Kl.ABORTED){e.next=7;break}return i=n.Eu.shift(),Hy(n).Qo(),e.next=5,Ey(n,(function(){return n.remoteSyncer.rejectFailedWrite(i.batchId,r)}));case 5:return e.next=7,Ty(n);case 7:case 8:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()(n,r);case 4:Ay(n)&&Ny(n);case 5:case"end":return t.stop()}}),t)}))),Uy.apply(this,arguments)}function Vy(e,t){return jy.apply(this,arguments)}function jy(){return(jy=e(s)(e(u).mark((function t(n,r){var i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=Wl(n)).asyncQueue.verifyOperationInProgress(),Vl("RemoteStore","RemoteStore received new credentials"),a=vy(i),i.vu.add(3),e.next=6,oy(i);case 6:return a&&i.bu.set("Unknown"),e.next=9,i.remoteSyncer.handleCredentialChange(r);case 9:return i.vu.delete(3),e.next=12,iy(i);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function By(e,t){return zy.apply(this,arguments)}function zy(){return(zy=e(s)(e(u).mark((function t(n,r){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Wl(n),!r){e.next=7;break}return i.vu.delete(2),e.next=5,iy(i);case 5:e.next=13;break;case 7:if(e.t0=r,e.t0){e.next=13;break}return i.vu.add(2),e.next=12,oy(i);case 12:i.bu.set("Unknown");case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function qy(t){return t.Su||(t.Su=(r=t.datastore,i=t.asyncQueue,a={uo:yy.bind(null,t),ao:gy.bind(null,t),nu:wy.bind(null,t)},(o=Wl(r)).fu(),new $p(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)),t.Ru.push((n=e(s)(e(u).mark((function n(r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=4;break}t.Su.Qo(),dy(t)?fy(t):t.bu.set("Unknown"),e.next=7;break;case 4:return e.next=6,t.Su.stop();case 6:py(t);case 7:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)}))),t.Su;var n,r,i,a,o}function Hy(t){return t.Du||(t.Du=(r=t.datastore,i=t.asyncQueue,a={uo:Dy.bind(null,t),ao:Fy.bind(null,t),au:Oy.bind(null,t),cu:Py.bind(null,t)},(o=Wl(r)).fu(),new ey(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)),t.Ru.push((n=e(s)(e(u).mark((function n(r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=6;break}return t.Du.Qo(),e.next=4,Ty(t);case 4:e.next=9;break;case 6:return e.next=8,t.Du.stop();case 8:t.Eu.length>0&&(Vl("RemoteStore","Stopping write stream with ".concat(t.Eu.length," pending writes")),t.Eu=[]);case 9:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)}))),t.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;var n,r,i,a,o}var Wy=function(){"use strict";function t(n,r,i,a,o){e(l)(this,t),this.asyncQueue=n,this.timerId=r,this.targetTimeMs=i,this.op=a,this.removalCallback=o,this.deferred=new Ql,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((function(e){}))}return e(h)(t,[{key:"start",value:function(e){var t=this;this.timerHandle=setTimeout((function(){return t.handleDelayElapsed()}),e)}},{key:"skipDelay",value:function(){return this.handleDelayElapsed()}},{key:"cancel",value:function(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Gl(Kl.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}},{key:"handleDelayElapsed",value:function(){var e=this;this.asyncQueue.enqueueAndForget((function(){return null!==e.timerHandle?(e.clearTimeout(),e.op().then((function(t){return e.deferred.resolve(t)}))):Promise.resolve()}))}},{key:"clearTimeout",value:function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}],[{key:"createAndSchedule",value:function(e,n,r,i,a){var o=new t(e,n,Date.now()+r,i,a);return o.start(r),o}}]),t}();function Ky(e,t){if(jl("AsyncQueue","".concat(t,": ").concat(e)),Eh(e))return new Gl(Kl.UNAVAILABLE,"".concat(t,": ").concat(e));throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gy=function(){"use strict";function t(n){e(l)(this,t),this.comparator=n?function(e,t){return n(e,t)||dh.comparator(e.key,t.key)}:function(e,t){return dh.comparator(e.key,t.key)},this.keyedMap=vd(),this.sortedSet=new Ph(this.comparator)}return e(h)(t,[{key:"has",value:function(e){return null!=this.keyedMap.get(e)}},{key:"get",value:function(e){return this.keyedMap.get(e)}},{key:"first",value:function(){return this.sortedSet.minKey()}},{key:"last",value:function(){return this.sortedSet.maxKey()}},{key:"isEmpty",value:function(){return this.sortedSet.isEmpty()}},{key:"indexOf",value:function(e){var t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}},{key:"size",get:function(){return this.sortedSet.size}},{key:"forEach",value:function(e){this.sortedSet.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"add",value:function(e){var t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}},{key:"delete",value:function(e){var t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}},{key:"isEqual",value:function(e){if(!(e instanceof t))return!1;if(this.size!==e.size)return!1;for(var n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}},{key:"copy",value:function(e,n){var r=new t;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}],[{key:"emptySet",value:function(e){return new t(e.comparator)}}]),t}(),Qy=function(){"use strict";function t(){e(l)(this,t),this.Cu=new Ph(dh.comparator)}return e(h)(t,[{key:"track",value:function(e){var t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):ql():this.Cu=this.Cu.insert(t,e)}},{key:"xu",value:function(){var e=[];return this.Cu.inorderTraversal((function(t,n){e.push(n)})),e}}]),t}(),Yy=function(){"use strict";function t(n,r,i,a,o,s,u,c,h){e(l)(this,t),this.query=n,this.docs=r,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=h}return e(h)(t,[{key:"hasPendingWrites",get:function(){return!this.mutatedKeys.isEmpty()}},{key:"isEqual",value:function(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;var t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(var r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}],[{key:"fromInitialDocuments",value:function(e,n,r,i,a){var o=[];return n.forEach((function(e){o.push({type:0,doc:e})})),new t(e,n,Gy.emptySet(n),o,r,i,!0,!1,a)}}]),t}(),Jy=function t(){"use strict";e(l)(this,t),this.Nu=void 0,this.listeners=[]},Xy=function t(){"use strict";e(l)(this,t),this.queries=new ld((function(e){return id(e)}),rd),this.onlineState="Unknown",this.ku=new Set};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(e,t){return $y.apply(this,arguments)}function $y(){return($y=e(s)(e(u).mark((function t(n,r){var i,a,o,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Wl(n),a=r.query,o=!1,(s=i.queries.get(a))||(o=!0,s=new Jy),!o){e.next=13;break}return e.prev=3,e.next=6,i.onListen(a);case 6:s.Nu=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),c=Ky(e.t0,"Initialization of query '".concat(ad(r.query),"' failed")),e.abrupt("return",void r.onError(c));case 13:i.queries.set(a,s),s.listeners.push(r),r.Mu(i.onlineState),s.Nu&&r.$u(s.Nu)&&im(i);case 14:case"end":return e.stop()}}),t,null,[[3,9]])})))).apply(this,arguments)}function em(e,t){return tm.apply(this,arguments)}function tm(){return(tm=e(s)(e(u).mark((function t(n,r){var i,a,o,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Wl(n),a=r.query,o=!1,(s=i.queries.get(a))&&(c=s.listeners.indexOf(r))>=0&&(s.listeners.splice(c,1),o=0===s.listeners.length),!o){e.next=6;break}return e.abrupt("return",(i.queries.delete(a),i.onUnlisten(a)));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function nm(e,t){var n=Wl(e),r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.query,h=n.queries.get(l);if(h){var f=!0,d=!1,v=void 0;try{for(var p,y=h.listeners[Symbol.iterator]();!(f=(p=y.next()).done);f=!0){p.value.$u(c)&&(r=!0)}}catch(e){d=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw v}}h.Nu=c}}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}r&&im(n)}function rm(e,t,n){var r=Wl(e),i=r.queries.get(t),a=!0,o=!1,s=void 0;if(i)try{for(var u,c=i.listeners[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){u.value.onError(n)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}r.queries.delete(t)}function im(e){e.ku.forEach((function(e){e.next()}))}var am=function(){"use strict";function t(n,r,i){e(l)(this,t),this.query=n,this.Ou=r,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=i||{}}return e(h)(t,[{key:"$u",value:function(e){if(!this.options.includeMetadataChanges){var t=[],n=!0,r=!1,i=void 0;try{for(var a,o=e.docChanges[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;3!==s.type&&t.push(s)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}e=new Yy(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}var u=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),u=!0):this.qu(e,this.onlineState)&&(this.Uu(e),u=!0),this.Bu=e,u}},{key:"onError",value:function(e){this.Ou.error(e)}},{key:"Mu",value:function(e){this.onlineState=e;var t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}},{key:"qu",value:function(e,t){if(!e.fromCache)return!0;var n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}},{key:"Lu",value:function(e){if(e.docChanges.length>0)return!0;var t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}},{key:"Uu",value:function(e){e=Yy.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var om=function t(n){"use strict";e(l)(this,t),this.key=n},sm=function t(n){"use strict";e(l)(this,t),this.key=n},um=function(){"use strict";function t(n,r){e(l)(this,t),this.query=n,this.Yu=r,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=bd(),this.mutatedKeys=bd(),this.tc=ud(n),this.ec=new Gy(this.tc)}return e(h)(t,[{key:"nc",get:function(){return this.Yu}},{key:"sc",value:function(e,t){var n=this,r=t?t.ic:new Qy,i=t?t.ec:this.ec,a=t?t.mutatedKeys:this.mutatedKeys,o=i,s=!1,u="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((function(e,t){var l=i.get(e),h=od(n.query,t)?t:null,f=!!l&&n.mutatedKeys.has(l.key),d=!!h&&(h.hasLocalMutations||n.mutatedKeys.has(h.key)&&h.hasCommittedMutations),v=!1;l&&h?l.data.isEqual(h.data)?f!==d&&(r.track({type:3,doc:h}),v=!0):n.rc(l,h)||(r.track({type:2,doc:h}),v=!0,(u&&n.tc(h,u)>0||c&&n.tc(h,c)<0)&&(s=!0)):!l&&h?(r.track({type:0,doc:h}),v=!0):l&&!h&&(r.track({type:1,doc:l}),v=!0,(u||c)&&(s=!0)),v&&(h?(o=o.add(h),a=d?a.add(e):a.delete(e)):(o=o.delete(e),a=a.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){var l="F"===this.query.limitType?o.last():o.first();o=o.delete(l.key),a=a.delete(l.key),r.track({type:1,doc:l})}return{ec:o,ic:r,zi:s,mutatedKeys:a}}},{key:"rc",value:function(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}},{key:"applyChanges",value:function(e,t,n){var r=this,i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;var a=e.ic.xu();a.sort((function(e,t){return n=e.type,i=t.type,(a=function(e){switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ql()}})(n)-a(i)||r.tc(e.doc,t.doc);var n,i,a})),this.oc(n);var o=t?this.uc():[],s=0===this.Zu.size&&this.current?1:0,u=s!==this.Xu;return this.Xu=s,0!==a.length||u?{snapshot:new Yy(this.query,e.ec,i,a,e.mutatedKeys,0===s,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}},{key:"Mu",value:function(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Qy,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}},{key:"ac",value:function(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}},{key:"oc",value:function(e){var t=this;e&&(e.addedDocuments.forEach((function(e){return t.Yu=t.Yu.add(e)})),e.modifiedDocuments.forEach((function(e){})),e.removedDocuments.forEach((function(e){return t.Yu=t.Yu.delete(e)})),this.current=e.current)}},{key:"uc",value:function(){var e=this;if(!this.current)return[];var t=this.Zu;this.Zu=bd(),this.ec.forEach((function(t){e.ac(t.key)&&(e.Zu=e.Zu.add(t.key))}));var n=[];return t.forEach((function(t){e.Zu.has(t)||n.push(new sm(t))})),this.Zu.forEach((function(e){t.has(e)||n.push(new om(e))})),n}},{key:"hc",value:function(e){this.Yu=e.ir,this.Zu=bd();var t=this.sc(e.documents);return this.applyChanges(t,!0)}},{key:"lc",value:function(){return Yy.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}]),t}(),cm=function t(n,r,i){"use strict";e(l)(this,t),this.query=n,this.targetId=r,this.view=i},lm=function t(n){"use strict";e(l)(this,t),this.key=n,this.fc=!1},hm=function(){"use strict";function t(n,r,i,a,o,s){e(l)(this,t),this.localStore=n,this.remoteStore=r,this.eventManager=i,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new ld((function(e){return id(e)}),rd),this._c=new Map,this.mc=new Set,this.gc=new Ph(dh.comparator),this.yc=new Map,this.Ic=new vp,this.Tc={},this.Ec=new Map,this.Ac=up.Mn(),this.onlineState="Unknown",this.vc=void 0}return e(h)(t,[{key:"isPrimaryClient",get:function(){return!0===this.vc}}]),t}();function fm(e,t){return dm.apply(this,arguments)}function dm(){return(dm=e(s)(e(u).mark((function t(n,r){var i,a,o,s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Bm(n),!(s=i.wc.get(r))){e.next=7;break}a=s.targetId,i.sharedClientState.addLocalQueryTarget(a),o=s.view.lc(),e.next=16;break;case 7:return e.next=9,Lp(i.localStore,ed(r));case 9:return c=e.sent,l=i.sharedClientState.addLocalQueryTarget(c.targetId),a=c.targetId,e.next=14,vm(i,r,a,"current"===l,c.resumeToken);case 14:o=e.sent,i.isPrimaryClient&&uy(i.remoteStore,c);case 16:return e.abrupt("return",o);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vm(e,t,n,r,i){return pm.apply(this,arguments)}function pm(){return pm=e(s)(e(u).mark((function t(n,r,i,a,o){var c,l,h,f,d,v;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.Rc=function(t,r,i){return(a=e(s)(e(u).mark((function t(n,r,i,a){var o,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.view.sc(i),e.t0=o.zi,!e.t0){e.next=6;break}return e.next=5,Fp(n.localStore,r.query,!1).then((function(e){var t=e.documents;return r.view.sc(t,o)}));case 5:o=e.sent;case 6:return s=a&&a.targetChanges.get(r.targetId),c=r.view.applyChanges(o,n.isPrimaryClient,s),e.abrupt("return",(Om(n,r.targetId,c.cc),c.snapshot));case 8:case"end":return e.stop()}}),t)}))),function(e,t,n,r){return a.apply(this,arguments)})(n,t,r,i);var a},t.next=3,Fp(n.localStore,r,!0);case 3:return c=t.sent,l=new um(r,c.ir),h=l.sc(c.documents),f=gv.createSynthesizedTargetChangeForCurrentChange(i,a&&"Offline"!==n.onlineState,o),d=l.applyChanges(h,n.isPrimaryClient,f),Om(n,i,d.cc),v=new cm(r,i,l),t.abrupt("return",(n.wc.set(r,v),n._c.has(i)?n._c.get(i).push(r):n._c.set(i,[r]),d.snapshot));case 11:case"end":return t.stop()}}),t)}))),pm.apply(this,arguments)}function ym(e,t){return mm.apply(this,arguments)}function mm(){return(mm=e(s)(e(u).mark((function t(n,r){var i,a,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Wl(n),a=i.wc.get(r),!((o=i._c.get(a.targetId)).length>1)){e.next=3;break}return e.abrupt("return",(i._c.set(a.targetId,o.filter((function(e){return!rd(e,r)}))),void i.wc.delete(r)));case 3:if(!i.isPrimaryClient){e.next=11;break}if(i.sharedClientState.removeLocalQueryTarget(a.targetId),e.t0=i.sharedClientState.isActiveQueryTarget(a.targetId),e.t0){e.next=9;break}return e.next=9,Pp(i.localStore,a.targetId,!1).then((function(){i.sharedClientState.clearQueryState(a.targetId),cy(i.remoteStore,a.targetId),Dm(i,a.targetId)})).catch(bh);case 9:e.next=14;break;case 11:return Dm(i,a.targetId),e.next=14,Pp(i.localStore,a.targetId,!0);case 14:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function gm(e,t,n){return km.apply(this,arguments)}function km(){return(km=e(s)(e(u).mark((function t(n,r,i){var a,o,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=zm(n),e.prev=1,e.next=4,function(e,t){var n,r,i=Wl(e),a=sh.now(),o=t.reduce((function(e,t){return e.add(t.key)}),bd());return i.persistence.runTransaction("Locally write mutations","readwrite",(function(e){var s=fd(),u=bd();return i.Zi.getEntries(e,o).next((function(e){(s=e).forEach((function(e,t){t.isValidDocument()||(u=u.add(e))}))})).next((function(){return i.localDocuments.getOverlayedDocuments(e,s)})).next((function(r){n=r;var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value,d=Kd(f,n.get(f.key).overlayedDocument);null!=d&&o.push(new Yd(f.key,d,mf(d.value.mapValue),jd.exists(!0)))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return i.mutationQueue.addMutationBatch(e,a,o,t)})).next((function(t){r=t;var a=t.applyToLocalDocumentSet(n,u);return i.documentOverlayCache.saveOverlays(e,t.batchId,a)}))})).then((function(){return{batchId:r.batchId,changes:pd(n)}}))}(a.localStore,r);case 4:return o=e.sent,a.sharedClientState.addPendingMutation(o.batchId),t=a,u=o.batchId,c=i,l=void 0,(l=t.Tc[t.currentUser.toKey()])||(l=new Ph(ah)),l=l.insert(u,c),t.Tc[t.currentUser.toKey()]=l,e.next=9,Mm(a,o.changes);case 9:return e.next=11,Ty(a.remoteStore);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),s=Ky(e.t0,"Failed to persist write"),i.reject(s);case 17:case"end":return e.stop()}var t,u,c,l}),t,null,[[1,13]])})))).apply(this,arguments)}function wm(e,t){return bm.apply(this,arguments)}function bm(){return(bm=e(s)(e(u).mark((function t(n,r){var i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Wl(n),e.prev=1,e.next=4,Dp(i.localStore,r);case 4:return a=e.sent,r.targetChanges.forEach((function(e,t){var n=i.yc.get(t);n&&(Hl(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?n.fc=!0:e.modifiedDocuments.size>0?Hl(n.fc):e.removedDocuments.size>0&&(Hl(n.fc),n.fc=!1))})),e.next=8,Mm(i,a,r);case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,bh(e.t0);case 14:case"end":return e.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}function xm(e,t,n){var r=Wl(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){var i=[];r.wc.forEach((function(e,n){var r=n.view.Mu(t);r.snapshot&&i.push(r.snapshot)})),function(e,t){var n=Wl(e);n.onlineState=t;var r=!1;n.queries.forEach((function(e,n){var i=!0,a=!1,o=void 0;try{for(var s,u=n.listeners[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){s.value.Mu(t)&&(r=!0)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}})),r&&im(n)}(r.eventManager,t),i.length&&r.dc.nu(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}function Im(e,t,n){return Em.apply(this,arguments)}function Em(){return(Em=e(s)(e(u).mark((function t(n,r,i){var a,o,s,c,l,h;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=Wl(n)).sharedClientState.updateQueryState(r,"rejected",i),o=a.yc.get(r),!(s=o&&o.key)){e.next=14;break}return c=(c=new Ph(dh.comparator)).insert(s,gf.newNoDocument(s,uh.min())),l=bd().add(s),h=new mv(uh.min(),new Map,new Ph(ah),c,l),e.next=9,wm(a,h);case 9:a.gc=a.gc.remove(s),a.yc.delete(r),Pm(a),e.next=16;break;case 14:return e.next=16,Pp(a.localStore,r,!1).then((function(){return Dm(a,r,i)})).catch(bh);case 16:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Tm(e,t){return _m.apply(this,arguments)}function _m(){return(_m=e(s)(e(u).mark((function t(n,r){var i,a,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Wl(n),a=r.batch.batchId,e.prev=1,e.next=4,Ap(i.localStore,r);case 4:return o=e.sent,Nm(i,a,null),Am(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),e.next=10,Mm(i,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,bh(e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Sm(e,t,n){return Cm.apply(this,arguments)}function Cm(){return(Cm=e(s)(e(u).mark((function t(n,r,i){var a,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Wl(n),e.prev=1,e.next=4,function(e,t){var n=Wl(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(function(e){var r;return n.mutationQueue.lookupMutationBatch(e,t).next((function(t){return Hl(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)})).next((function(){return n.localDocuments.getDocuments(e,r)}))}))}(a.localStore,r);case 4:return o=e.sent,Nm(a,r,i),Am(a,r),a.sharedClientState.updateMutationState(r,"rejected",i),e.next=10,Mm(a,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,bh(e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Am(e,t){(e.Ec.get(t)||[]).forEach((function(e){e.resolve()})),e.Ec.delete(t)}function Nm(e,t,n){var r=Wl(e),i=r.Tc[r.currentUser.toKey()];if(i){var a=i.get(t);a&&(n?a.reject(n):a.resolve(),i=i.remove(t)),r.Tc[r.currentUser.toKey()]=i}}function Dm(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.sharedClientState.removeLocalQueryTarget(t);var r=!0,i=!1,a=void 0;try{for(var o,s=e._c.get(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;e.wc.delete(u),n&&e.dc.Pc(u,n)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((function(t){e.Ic.containsKey(t)||Rm(e,t)}))}function Rm(e,t){e.mc.delete(t.path.canonicalString());var n=e.gc.get(t);null!==n&&(cy(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Pm(e))}function Om(e,t,n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;u instanceof om?(e.Ic.addReference(u.key,t),Lm(e,u)):u instanceof sm?(Vl("SyncEngine","Document no longer in limbo: "+u.key),e.Ic.removeReference(u.key,t),e.Ic.containsKey(u.key)||Rm(e,u.key)):ql()}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}function Lm(e,t){var n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(Vl("SyncEngine","New document in limbo: "+n),e.mc.add(r),Pm(e))}function Pm(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){var t=e.mc.values().next().value;e.mc.delete(t);var n=new dh(lh.fromString(t)),r=e.Ac.next();e.yc.set(r,new lm(n)),e.gc=e.gc.insert(n,r),uy(e.remoteStore,new tp(ed(Qf(n.path)),r,"TargetPurposeLimboResolution",Th.ct))}}function Mm(e,t,n){return Fm.apply(this,arguments)}function Fm(){return Fm=e(s)(e(u).mark((function t(n,r,i){var a,o,c,l;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=Wl(n),o=[],c=[],l=[],t.t0=a.wc.isEmpty(),t.t0){t.next=9;break}return a.wc.forEach((function(e,t){l.push(a.Rc(t,r,i).then((function(e){if((e||i)&&a.isPrimaryClient&&a.sharedClientState.updateQueryState(t.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){o.push(e);var n=Ip.Li(t.targetId,e);c.push(n)}})))})),t.next=6,Promise.all(l);case 6:return a.dc.nu(o),t.next=9,function(){var t=e(s)(e(u).mark((function t(n,r){var i,a,o,s,c,l,h,f,d,v,p;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Wl(n),e.prev=1,e.next=4,i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(function(e){return Ih.forEach(r,(function(t){return Ih.forEach(t.Fi,(function(n){return i.persistence.referenceDelegate.addReference(e,t.targetId,n)})).next((function(){return Ih.forEach(t.Bi,(function(n){return i.persistence.referenceDelegate.removeReference(e,t.targetId,n)}))}))}))}));case 4:e.next=11;break;case 6:if(e.prev=6,e.t0=e.catch(1),Eh(e.t0)){e.next=10;break}throw e.t0;case 10:Vl("LocalStore","Failed to update sequence numbers: "+e.t0);case 11:for(a=!0,o=!1,s=void 0,e.prev=12,c=r[Symbol.iterator]();!(a=(l=c.next()).done);a=!0)h=l.value,f=h.targetId,h.fromCache||(d=i.Ji.get(f),v=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(v),i.Ji=i.Ji.insert(f,p));e.next=20;break;case 16:e.prev=16,e.t1=e.catch(12),o=!0,s=e.t1;case 20:e.prev=20,e.prev=21,a||null==c.return||c.return();case 23:if(e.prev=23,!o){e.next=26;break}throw s;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}}),t,null,[[1,6],[12,16,20,28],[21,,23,27]])})));return function(e,n){return t.apply(this,arguments)}}()(a.localStore,c);case 9:case"end":return t.stop()}}),t)}))),Fm.apply(this,arguments)}function Um(e,t){return Vm.apply(this,arguments)}function Vm(){return(Vm=e(s)(e(u).mark((function t(n,r){var i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=Wl(n)).currentUser.isEqual(r)){e.next=11;break}return Vl("SyncEngine","User change. New user:",r.toKey()),e.next=5,Sp(i.localStore,r);case 5:return a=e.sent,i.currentUser=r,(t=i).Ec.forEach((function(e){e.forEach((function(e){e.reject(new Gl(Kl.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.Ec.clear(),i.sharedClientState.handleUserChange(r,a.removedBatchIds,a.addedBatchIds),e.next=11,Mm(i,a.er);case 11:case"end":return e.stop()}var t}),t)})))).apply(this,arguments)}function jm(e,t){var n=Wl(e),r=n.yc.get(t);if(r&&r.fc)return bd().add(r.key);var i=bd(),a=n._c.get(t);if(!a)return i;var o=!0,s=!1,u=void 0;try{for(var c,l=a[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value,f=n.wc.get(h);i=i.unionWith(f.view.nc)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return i}function Bm(e){var t=Wl(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=wm.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Im.bind(null,t),t.dc.nu=nm.bind(null,t.eventManager),t.dc.Pc=rm.bind(null,t.eventManager),t}function zm(e){var t=Wl(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Tm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Sm.bind(null,t),t}var qm=function(){"use strict";function t(){e(l)(this,t),this.synchronizeTabs=!1}return e(h)(t,[{key:"initialize",value:function(t){var n=this;return e(s)(e(u).mark((function r(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.serializer=Jp(t.databaseInfo.databaseId),n.sharedClientState=n.createSharedClientState(t),n.persistence=n.createPersistence(t),e.next=5,n.persistence.start();case 5:n.localStore=n.createLocalStore(t),n.gcScheduler=n.createGarbageCollectionScheduler(t,n.localStore),n.indexBackfillerScheduler=n.createIndexBackfillerScheduler(t,n.localStore);case 8:case"end":return e.stop()}}),r)})))()}},{key:"createGarbageCollectionScheduler",value:function(e,t){return null}},{key:"createIndexBackfillerScheduler",value:function(e,t){return null}},{key:"createLocalStore",value:function(e){return _p(this.persistence,new Ep,e.initialUser,this.serializer)}},{key:"createPersistence",value:function(e){return new wp(xp.zs,this.serializer)}},{key:"createSharedClientState",value:function(e){return new jp}},{key:"terminate",value:function(){var t=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.gcScheduler&&t.gcScheduler.stop(),e.next=3,t.sharedClientState.shutdown();case 3:return e.next=5,t.persistence.shutdown();case 5:case"end":return e.stop()}}),n)})))()}}]),t}(),Hm=function(){"use strict";function t(){e(l)(this,t)}return e(h)(t,[{key:"initialize",value:function(t,n){var r=this;return e(s)(e(u).mark((function i(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r.localStore,e.t0){e.next=12;break}return r.localStore=t.localStore,r.sharedClientState=t.sharedClientState,r.datastore=r.createDatastore(n),r.remoteStore=r.createRemoteStore(n),r.eventManager=r.createEventManager(n),r.syncEngine=r.createSyncEngine(n,!t.synchronizeTabs),r.sharedClientState.onlineStateHandler=function(e){return xm(r.syncEngine,e,1)},r.remoteStore.remoteSyncer.handleCredentialChange=Um.bind(null,r.syncEngine),e.next=12,By(r.remoteStore,r.syncEngine.isPrimaryClient);case 12:case"end":return e.stop()}}),i)})))()}},{key:"createEventManager",value:function(e){return new Xy}},{key:"createDatastore",value:function(e){var t,n,r,i=Jp(e.databaseInfo.databaseId),a=(t=e.databaseInfo,new Qp(t));return n=e.authCredentials,r=e.appCheckCredentials,new ty(n,r,a,i)}},{key:"createRemoteStore",value:function(e){var t,n,r,i,a,o=this;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=function(e){return xm(o.syncEngine,e,0)},a=zp.D()?new zp:new Bp,new ry(t,n,r,i,a)}},{key:"createSyncEngine",value:function(e,t){return n=this.localStore,r=this.remoteStore,i=this.eventManager,a=this.sharedClientState,o=e.initialUser,s=e.maxConcurrentLimboResolutions,u=t,c=new hm(n,r,i,a,o,s),u&&(c.vc=!0),c;var n,r,i,a,o,s,u,c}},{key:"terminate",value:function(){return(t=e(s)(e(u).mark((function t(n){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Wl(n),Vl("RemoteStore","RemoteStore shutting down."),r.vu.add(5),e.next=5,oy(r);case 5:r.Pu.shutdown(),r.bu.set("Unknown");case 7:case"end":return e.stop()}}),t)}))),function(e){return t.apply(this,arguments)})(this.remoteStore);var t}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wm=function(){"use strict";function t(n){e(l)(this,t),this.observer=n,this.muted=!1}return e(h)(t,[{key:"next",value:function(e){this.observer.next&&this.Sc(this.observer.next,e)}},{key:"error",value:function(e){this.observer.error?this.Sc(this.observer.error,e):jl("Uncaught Error in snapshot listener:",e.toString())}},{key:"Dc",value:function(){this.muted=!0}},{key:"Sc",value:function(e,t){var n=this;this.muted||setTimeout((function(){n.muted||e(t)}),0)}}]),t}(),Km=function(){"use strict";function t(n,r,i,a){var o=this;e(l)(this,t);var c,h=this;this.authCredentials=n,this.appCheckCredentials=r,this.asyncQueue=i,this.databaseInfo=a,this.user=Pl.UNAUTHENTICATED,this.clientId=ih.A(),this.authCredentialListener=function(){return Promise.resolve()},this.appCheckCredentialListener=function(){return Promise.resolve()},this.authCredentials.start(i,(c=e(s)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Vl("FirestoreClient","Received user=",n.uid),e.next=3,h.authCredentialListener(n);case 3:h.user=n;case 4:case"end":return e.stop()}}),t)}))),function(e){return c.apply(this,arguments)})),this.appCheckCredentials.start(i,(function(e){return Vl("FirestoreClient","Received new app check token=",e),o.appCheckCredentialListener(e,o.user)}))}return e(h)(t,[{key:"getConfiguration",value:function(){var t=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{asyncQueue:t.asyncQueue,databaseInfo:t.databaseInfo,clientId:t.clientId,authCredentials:t.authCredentials,appCheckCredentials:t.appCheckCredentials,initialUser:t.user,maxConcurrentLimboResolutions:100});case 1:case"end":return e.stop()}}),n)})))()}},{key:"setCredentialChangeListener",value:function(e){this.authCredentialListener=e}},{key:"setAppCheckTokenChangeListener",value:function(e){this.appCheckCredentialListener=e}},{key:"verifyNotTerminated",value:function(){if(this.asyncQueue.isShuttingDown)throw new Gl(Kl.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"terminate",value:function(){this.asyncQueue.enterRestrictedMode();var t=new Ql,n=this;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(e(s)(e(u).mark((function r(){var i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=n._onlineComponents,!e.t0){e.next=5;break}return e.next=5,n._onlineComponents.terminate();case 5:if(e.t1=n._offlineComponents,!e.t1){e.next=9;break}return e.next=9,n._offlineComponents.terminate();case 9:n.authCredentials.shutdown(),n.appCheckCredentials.shutdown(),t.resolve(),e.next=18;break;case 14:e.prev=14,e.t2=e.catch(0),i=Ky(e.t2,"Failed to shutdown persistence"),t.reject(i);case 18:case"end":return e.stop()}}),r,null,[[0,14]])})))),t.promise}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(e,t){return Qm.apply(this,arguments)}function Qm(){return Qm=e(s)(e(u).mark((function t(n,r){var i,a;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.asyncQueue.verifyOperationInProgress(),Vl("FirestoreClient","Initializing OfflineComponentProvider"),t.next=3,n.getConfiguration();case 3:return i=t.sent,t.next=6,r.initialize(i);case 6:a=i.initialUser,n.setCredentialChangeListener(function(){var t=e(s)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=a.isEqual(n),e.t0){e.next=5;break}return e.next=4,Sp(r.localStore,n);case 4:a=n;case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.persistence.setDatabaseDeletedListener((function(){return n.terminate()})),n._offlineComponents=r;case 8:case"end":return t.stop()}}),t)}))),Qm.apply(this,arguments)}function Ym(e,t){return Jm.apply(this,arguments)}function Jm(){return(Jm=e(s)(e(u).mark((function t(n,r){var i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.asyncQueue.verifyOperationInProgress(),e.next=3,Zm(n);case 3:return i=e.sent,Vl("FirestoreClient","Initializing OnlineComponentProvider"),e.next=7,n.getConfiguration();case 7:return a=e.sent,e.next=10,r.initialize(i,a);case 10:n.setCredentialChangeListener((function(e){return Vy(r.remoteStore,e)})),n.setAppCheckTokenChangeListener((function(e,t){return Vy(r.remoteStore,t)})),n._onlineComponents=r;case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xm(e){return"FirebaseError"===e.name?e.code===Kl.FAILED_PRECONDITION||e.code===Kl.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}function Zm(e){return $m.apply(this,arguments)}function $m(){return($m=e(s)(e(u).mark((function t(n){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n._offlineComponents){e.next=21;break}if(!n._uninitializedComponentsProvider){e.next=18;break}return Vl("FirestoreClient","Using user provided OfflineComponentProvider"),e.prev=3,e.next=6,Gm(n,n._uninitializedComponentsProvider._offline);case 6:e.next=16;break;case 8:if(e.prev=8,e.t0=e.catch(3),Xm(r=e.t0)){e.next=13;break}throw r;case 13:return Bl("Error using user provided cache. Falling back to memory cache: "+r),e.next=16,Gm(n,new qm);case 16:e.next=21;break;case 18:return Vl("FirestoreClient","Using default OfflineComponentProvider"),e.next=21,Gm(n,new qm);case 21:return e.abrupt("return",n._offlineComponents);case 22:case"end":return e.stop()}}),t,null,[[3,8]])})))).apply(this,arguments)}function eg(e){return tg.apply(this,arguments)}function tg(){return(tg=e(s)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n._onlineComponents,e.t0){e.next=11;break}if(!n._uninitializedComponentsProvider){e.next=8;break}return Vl("FirestoreClient","Using user provided OnlineComponentProvider"),e.next=6,Ym(n,n._uninitializedComponentsProvider._online);case 6:e.next=11;break;case 8:return Vl("FirestoreClient","Using default OnlineComponentProvider"),e.next=11,Ym(n,new Hm);case 11:return e.abrupt("return",(e.t0,n._onlineComponents));case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ng(e){return eg(e).then((function(e){return e.syncEngine}))}function rg(e){return ig.apply(this,arguments)}function ig(){return(ig=e(s)(e(u).mark((function t(n){var r,i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,eg(n);case 2:return r=e.sent,i=r.eventManager,e.abrupt("return",(i.onListen=fm.bind(null,r.syncEngine),i.onUnlisten=ym.bind(null,r.syncEngine),i));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ag(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=new Ql;return t.asyncQueue.enqueueAndForget(e(s)(e(u).mark((function a(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=function(e,t,n,r,i){var a=new Wm({next:function(a){t.enqueueAndForget((function(){return em(e,o)}));var s=a.docs.has(n);!s&&a.fromCache?i.reject(new Gl(Kl.UNAVAILABLE,"Failed to get document because the client is offline.")):s&&a.fromCache&&r&&"server"===r.source?i.reject(new Gl(Kl.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:function(e){return i.reject(e)}}),o=new am(Qf(n.path),a,{includeMetadataChanges:!0,Ku:!0});return Zy(e,o)},e.next=3,rg(t);case 3:return e.t1=e.sent,e.t2=t.asyncQueue,e.t3=n,e.t4=r,e.t5=i,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3,e.t4,e.t5));case 9:case"end":return e.stop()}}),a)})))),i.promise}function og(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=new Ql;return t.asyncQueue.enqueueAndForget(e(s)(e(u).mark((function a(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=function(e,t,n,r,i){var a=new Wm({next:function(n){t.enqueueAndForget((function(){return em(e,o)})),n.fromCache&&"server"===r.source?i.reject(new Gl(Kl.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:function(e){return i.reject(e)}}),o=new am(n,a,{includeMetadataChanges:!0,Ku:!0});return Zy(e,o)},e.next=3,rg(t);case 3:return e.t1=e.sent,e.t2=t.asyncQueue,e.t3=n,e.t4=r,e.t5=i,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3,e.t4,e.t5));case 9:case"end":return e.stop()}}),a)})))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sg(e){var t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var ug=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(e,t,n){if(!n)throw new Gl(Kl.INVALID_ARGUMENT,"Function ".concat(e,"() cannot be called with an empty ").concat(t,"."))}function lg(e){if(!dh.isDocumentKey(e))throw new Gl(Kl.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function hg(e){if(dh.isDocumentKey(e))throw new Gl(Kl.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but ".concat(e," has ").concat(e.length,"."))}function fg(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";var t=(n=e).constructor?n.constructor.name:null;return t?"a custom ".concat(t," object"):"an object"}var n;return"function"==typeof e?"a function":ql()}function dg(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Gl(Kl.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=fg(e);throw new Gl(Kl.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(n))}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vg=function(){"use strict";function t(n){var r,i;if(e(l)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new Gl(Kl.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,this.cache=n.localCache,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new Gl(Kl.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Gl(Kl.INVALID_ARGUMENT,"".concat(e," and ").concat(n," cannot be used together."))})("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===n.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sg(null!==(i=n.experimentalLongPollingOptions)&&void 0!==i?i:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Gl(Kl.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (must not be NaN)"));if(e.timeoutSeconds<5)throw new Gl(Kl.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (minimum allowed value is 5)"));if(e.timeoutSeconds>30)throw new Gl(Kl.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (maximum allowed value is 30)"))}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!n.useFetchStreams}return e(h)(t,[{key:"isEqual",value:function(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),t}(),pg=function(){"use strict";function t(n,r,i,a){e(l)(this,t),this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vg({}),this._settingsFrozen=!1}return e(h)(t,[{key:"app",get:function(){if(!this._app)throw new Gl(Kl.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new Gl(Kl.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vg(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Jl;switch(e.type){case"firstParty":return new eh(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Gl(Kl.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=ug.get(e))&&(Vl("ComponentProvider","Removing Datastore"),ug.delete(e),t.terminate()),Promise.resolve();var e,t}}]),t}();function yg(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=(e=dg(e,pg))._getSettings();if("firestore.googleapis.com"!==a.host&&a.host!==t&&Bl("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},a),{host:"".concat(t,":").concat(n),ssl:!1})),i.mockUserToken){var o,s;if("string"==typeof i.mockUserToken)o=i.mockUserToken,s=Pl.MOCK_USER;else{o=Z(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);var u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new Gl(Kl.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");s=new Pl(u)}e._authCredentials=new Xl(new Yl(o,s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mg=function(){"use strict";function t(n,r,i){e(l)(this,t),this.converter=r,this._key=i,this.type="document",this.firestore=n}return e(h)(t,[{key:"_path",get:function(){return this._key.path}},{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"path",get:function(){return this._key.path.canonicalString()}},{key:"parent",get:function(){return new kg(this.firestore,this.converter,this._key.path.popLast())}},{key:"withConverter",value:function(e){return new t(this.firestore,e,this._key)}}]),t}(),gg=function(){"use strict";function t(n,r,i){e(l)(this,t),this.converter=r,this._query=i,this.type="query",this.firestore=n}return e(h)(t,[{key:"withConverter",value:function(e){return new t(this.firestore,e,this._query)}}]),t}(),kg=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a){var o;return e(l)(this,r),(o=n.call(this,t,i,Qf(a)))._path=a,o.type="collection",e(so)(o)}return e(h)(r,[{key:"id",get:function(){return this._query.path.lastSegment()}},{key:"path",get:function(){return this._query.path.canonicalString()}},{key:"parent",get:function(){var e=this._path.popLast();return e.isEmpty()?null:new mg(this.firestore,null,new dh(e))}},{key:"withConverter",value:function(e){return new r(this.firestore,e,this._path)}}]),r}(gg);function wg(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(t=de(t),cg("collection","path",n),t instanceof pg){var o,s=(o=lh).fromString.apply(o,[n].concat(e(d)(i)));return hg(s),new kg(t,null,s)}var u;if(!(t instanceof mg||t instanceof kg))throw new Gl(Kl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=t._path.child((u=lh).fromString.apply(u,[n].concat(e(d)(i))));return hg(c),new kg(t.firestore,null,c)}function bg(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(t=de(t),1===arguments.length&&(n=ih.A()),cg("doc","path",n),t instanceof pg){var o,s=(o=lh).fromString.apply(o,[n].concat(e(d)(i)));return lg(s),new mg(t,null,new dh(s))}var u;if(!(t instanceof mg||t instanceof kg))throw new Gl(Kl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=t._path.child((u=lh).fromString.apply(u,[n].concat(e(d)(i))));return lg(c),new mg(t.firestore,t instanceof kg?t.converter:null,new dh(c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xg=function(){"use strict";function t(){var n=this;e(l)(this,t),this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Xp(this,"async_queue_retry"),this.Xc=function(){var e=Yp();e&&Vl("AsyncQueue","Visibility state changed to "+e.visibilityState),n.qo.Mo()};var r=Yp();r&&"function"==typeof r.addEventListener&&r.addEventListener("visibilitychange",this.Xc)}return e(h)(t,[{key:"isShuttingDown",get:function(){return this.jc}},{key:"enqueueAndForget",value:function(e){this.enqueue(e)}},{key:"enqueueAndForgetEvenWhileRestricted",value:function(e){this.Zc(),this.ta(e)}},{key:"enterRestrictedMode",value:function(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;var t=Yp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}},{key:"enqueue",value:function(e){var t=this;if(this.Zc(),this.jc)return new Promise((function(){}));var n=new Ql;return this.ta((function(){return t.jc&&t.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)})).then((function(){return n.promise}))}},{key:"enqueueRetryable",value:function(e){var t=this;this.enqueueAndForget((function(){return t.Qc.push(e),t.ea()}))}},{key:"ea",value:function(){var t=this;return e(s)(e(u).mark((function n(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t.Qc.length){e.next=14;break}return e.prev=1,e.next=4,t.Qc[0]();case 4:t.Qc.shift(),t.qo.reset(),e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(1),Eh(e.t0)){e.next=12;break}throw e.t0;case 12:Vl("AsyncQueue","Operation failed with retryable error: "+e.t0);case 13:t.Qc.length>0&&t.qo.No((function(){return t.ea()}));case 14:case"end":return e.stop()}}),n,null,[[1,8]])})))()}},{key:"ta",value:function(e){var t=this,n=this.Gc.then((function(){return t.Hc=!0,e().catch((function(e){var n,r;throw t.Wc=e,t.Hc=!1,jl("INTERNAL UNHANDLED ERROR: ",(r=(n=e).message||"",n.stack&&(r=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),r)),e})).then((function(e){return t.Hc=!1,e}))}));return this.Gc=n,n}},{key:"enqueueAfterDelay",value:function(e,t,n){var r=this;this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);var i=Wy.createAndSchedule(this,e,t,n,(function(e){return r.na(e)}));return this.zc.push(i),i}},{key:"Zc",value:function(){this.Wc&&ql()}},{key:"verifyOperationInProgress",value:function(){}},{key:"sa",value:function(){var t=this;return e(s)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:return r=t.Gc,e.next=4,r;case 4:if(r!==t.Gc){e.next=1;break}case 5:case"end":return e.stop()}}),n)})))()}},{key:"ia",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.zc[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.timerId===e)return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"ra",value:function(e){var t=this;return this.sa().then((function(){t.zc.sort((function(e,t){return e.targetTimeMs-t.targetTimeMs}));var n=!0,r=!1,i=void 0;try{for(var a,o=t.zc[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s.skipDelay(),"all"!==e&&s.timerId===e)break}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t.sa()}))}},{key:"oa",value:function(e){this.Yc.push(e)}},{key:"na",value:function(e){var t=this.zc.indexOf(e);this.zc.splice(t,1)}}]),t}();var Ig=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a,o){var s;return e(l)(this,r),(s=n.call(this,t,i,a,o)).type="firestore",s._queue=new xg,s._persistenceKey=(null==o?void 0:o.name)||"[DEFAULT]",e(so)(s)}return e(h)(r,[{key:"_terminate",value:function(){return this._firestoreClient||Tg(this),this._firestoreClient.terminate()}}]),r}(pg);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(e){return e._firestoreClient||Tg(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Tg(e){var t,n,r,i,a,o,s,u=e._freezeSettings(),c=(i=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new Xh(i,a,o,(s=u).host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,sg(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new Km(e._authCredentials,e._appCheckCredentials,e._queue,c),(null===(n=u.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=u.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:u.cache.kind,_offline:u.cache._offlineComponentProvider,_online:u.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _g=function(){"use strict";function t(n){e(l)(this,t),this._byteString=n}return e(h)(t,[{key:"toBase64",value:function(){return this._byteString.toBase64()}},{key:"toUint8Array",value:function(){return this._byteString.toUint8Array()}},{key:"toString",value:function(){return"Bytes(base64: "+this.toBase64()+")"}},{key:"isEqual",value:function(e){return this._byteString.isEqual(e._byteString)}}],[{key:"fromBase64String",value:function(e){try{return new t(qh.fromBase64String(e))}catch(e){throw new Gl(Kl.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}},{key:"fromUint8Array",value:function(e){return new t(qh.fromUint8Array(e))}}]),t}(),Sg=function(){"use strict";function t(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e(l)(this,t);for(var a=0;a<r.length;++a)if(0===r[a].length)throw new Gl(Kl.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fh(r)}return e(h)(t,[{key:"isEqual",value:function(e){return this._internalPath.isEqual(e._internalPath)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Cg=function t(n){"use strict";e(l)(this,t),this._methodName=n},Ag=function(){"use strict";function t(n,r){if(e(l)(this,t),!isFinite(n)||n<-90||n>90)throw new Gl(Kl.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(r)||r<-180||r>180)throw new Gl(Kl.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=n,this._long=r}return e(h)(t,[{key:"latitude",get:function(){return this._lat}},{key:"longitude",get:function(){return this._long}},{key:"isEqual",value:function(e){return this._lat===e._lat&&this._long===e._long}},{key:"toJSON",value:function(){return{latitude:this._lat,longitude:this._long}}},{key:"_compareTo",value:function(e){return ah(this._lat,e._lat)||ah(this._long,e._long)}}]),t}(),Ng=/^__.*__$/,Dg=function(){"use strict";function t(n,r,i){e(l)(this,t),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return e(h)(t,[{key:"toMutation",value:function(e,t){return null!==this.fieldMask?new Yd(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qd(e,this.data,t,this.fieldTransforms)}}]),t}(),Rg=function(){"use strict";function t(n,r,i){e(l)(this,t),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return e(h)(t,[{key:"toMutation",value:function(e,t){return new Yd(e,this.data,this.fieldMask,t,this.fieldTransforms)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ql()}}var Lg=function(){"use strict";function t(n,r,i,a,o,s){e(l)(this,t),this.settings=n,this.databaseId=r,this.serializer=i,this.ignoreUndefinedProperties=a,void 0===o&&this.ua(),this.fieldTransforms=o||[],this.fieldMask=s||[]}return e(h)(t,[{key:"path",get:function(){return this.settings.path}},{key:"ca",get:function(){return this.settings.ca}},{key:"aa",value:function(e){return new t(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}},{key:"ha",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}},{key:"da",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}},{key:"wa",value:function(e){return this.aa({path:void 0,la:!0})}},{key:"_a",value:function(e){return Yg(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}},{key:"contains",value:function(e){return void 0!==this.fieldMask.find((function(t){return e.isPrefixOf(t)}))||void 0!==this.fieldTransforms.find((function(t){return e.isPrefixOf(t.field)}))}},{key:"ua",value:function(){if(this.path)for(var e=0;e<this.path.length;e++)this.fa(this.path.get(e))}},{key:"fa",value:function(e){if(0===e.length)throw this._a("Document fields must not be empty");if(Og(this.ca)&&Ng.test(e))throw this._a('Document fields cannot begin and end with "__"')}}]),t}(),Pg=function(){"use strict";function t(n,r,i){e(l)(this,t),this.databaseId=n,this.ignoreUndefinedProperties=r,this.serializer=i||Jp(n)}return e(h)(t,[{key:"ya",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Lg({ca:e,methodName:t,ga:n,path:fh.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}]),t}();function Mg(e){var t=e._freezeSettings(),n=Jp(e._databaseId);return new Pg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Fg(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=e.ya(a.merge||a.mergeFields?2:0,t,n,i);Wg("Data must be an object, but it was:",o,r);var s,u,c=qg(r,o);if(a.merge)s=new jh(o.fieldMask),u=o.fieldTransforms;else if(a.mergeFields){var l=[],h=!0,f=!1,d=void 0;try{for(var v,p=a.mergeFields[Symbol.iterator]();!(h=(v=p.next()).done);h=!0){var y=v.value,m=Kg(t,y,n);if(!o.contains(m))throw new Gl(Kl.INVALID_ARGUMENT,"Field '".concat(m,"' is specified in your field mask but missing from your input data."));Jg(l,m)||l.push(m)}}catch(e){f=!0,d=e}finally{try{h||null==p.return||p.return()}finally{if(f)throw d}}s=new jh(l),u=o.fieldTransforms.filter((function(e){return s.covers(e.field)}))}else s=null,u=o.fieldTransforms;return new Dg(new yf(c),s,u)}var Ug=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.apply(this,arguments)}return e(h)(r,[{key:"_toFieldTransform",value:function(e){if(2!==e.ca)throw 1===e.ca?e._a("".concat(this._methodName,"() can only appear at the top level of your update data")):e._a("".concat(this._methodName,"() cannot be used with set() unless you pass {merge:true}"));return e.fieldMask.push(e.path),null}},{key:"isEqual",value:function(e){return e instanceof r}}]),r}(Cg);function Vg(e,t,n,r){var i=e.ya(1,t,n);Wg("Data must be an object, but it was:",i,r);var a=[],o=yf.empty();Oh(r,(function(e,r){var s=Qg(t,e,n);r=de(r);var u=i.da(s);if(r instanceof Ug)a.push(s);else{var c=zg(r,u);null!=c&&(a.push(s),o.set(s,c))}}));var s=new jh(a);return new Rg(o,s,i.fieldTransforms)}function jg(e,t,n,r,i,a){var o=e.ya(1,t,n),s=[Kg(t,r,n)],u=[i];if(a.length%2!=0)throw new Gl(Kl.INVALID_ARGUMENT,"Function ".concat(t,"() needs to be called with an even number of arguments that alternate between field names and values."));for(var c=0;c<a.length;c+=2)s.push(Kg(t,a[c])),u.push(a[c+1]);for(var l=[],h=yf.empty(),f=s.length-1;f>=0;--f)if(!Jg(l,s[f])){var d=s[f],v=u[f];v=de(v);var p=o.da(d);if(v instanceof Ug)l.push(d);else{var y=zg(v,p);null!=y&&(l.push(d),h.set(d,y))}}var m=new jh(l);return new Rg(h,m,o.fieldTransforms)}function Bg(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return zg(n,e.ya(r?4:3,t))}function zg(e,t){if(Hg(e=de(e)))return Wg("Unsupported field value:",t,e),qg(e,t);if(e instanceof Cg)return function(e,t){if(!Og(t.ca))throw t._a("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t._a("".concat(e._methodName,"() is not currently supported inside arrays"));var n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){var n=[],r=0,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=zg(s.value,t.wa(r));null==c&&(c={nullValue:"NULL_VALUE"}),n.push(c),r++}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=de(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return _d(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){var n=sh.fromDate(e);return{timestampValue:Dv(t.serializer,n)}}if(e instanceof sh){var r=new sh(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Dv(t.serializer,r)}}if(e instanceof Ag)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof _g)return{bytesValue:Rv(t.serializer,e._byteString)};if(e instanceof mg){var i=t.databaseId,a=e.firestore._databaseId;if(!a.isEqual(i))throw t._a("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(i.projectId,"/").concat(i.database));return{referenceValue:Pv(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a("Unsupported field value: ".concat(fg(e)))}(e,t)}function qg(e,t){var n={};return Lh(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Oh(e,(function(e,r){var i=zg(r,t.ha(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Hg(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof sh||e instanceof Ag||e instanceof _g||e instanceof mg||e instanceof Cg)}function Wg(e,t,n){if(!Hg(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){var r=fg(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}var i}function Kg(e,t,n){if((t=de(t))instanceof Sg)return t._internalPath;if("string"==typeof t)return Qg(e,t);throw Yg("Field path arguments must be of type string or ",e,!1,void 0,n)}var Gg=new RegExp("[~\\*/\\[\\]]");function Qg(t,n,r){if(n.search(Gg)>=0)throw Yg("Invalid field path (".concat(n,"). Paths must not contain '~', '*', '/', '[', or ']'"),t,!1,void 0,r);try{return e(oo)(Sg,e(d)(n.split(".")))._internalPath}catch(e){throw Yg("Invalid field path (".concat(n,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),t,!1,void 0,r)}}function Yg(e,t,n,r,i){var a=r&&!r.isEmpty(),o=void 0!==i,s="Function ".concat(t,"() called with invalid data");n&&(s+=" (via `toFirestore()`)"),s+=". ";var u="";return(a||o)&&(u+=" (found",a&&(u+=" in field ".concat(r)),o&&(u+=" in document ".concat(i)),u+=")"),new Gl(Kl.INVALID_ARGUMENT,s+e+u)}function Jg(e,t){return e.some((function(e){return e.isEqual(t)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xg=function(){"use strict";function t(n,r,i,a,o){e(l)(this,t),this._firestore=n,this._userDataWriter=r,this._key=i,this._document=a,this._converter=o}return e(h)(t,[{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"ref",get:function(){return new mg(this._firestore,this._converter,this._key)}},{key:"exists",value:function(){return null!==this._document}},{key:"data",value:function(){if(this._document){if(this._converter){var e=new Zg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}},{key:"get",value:function(e){if(this._document){var t=this._document.data.field($g("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}]),t}(),Zg=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.apply(this,arguments)}return e(h)(r,[{key:"data",value:function(){return e(St)(e(Nt)(r.prototype),"data",this).call(this)}}]),r}(Xg);function $g(e,t){return"string"==typeof t?Qg(e,t):t instanceof Sg?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Gl(Kl.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var tk=function t(){"use strict";e(l)(this,t)},nk=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.apply(this,arguments)}return r}(tk);function rk(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=[];t instanceof tk&&a.push(t),function(e){var t=e.filter((function(e){return e instanceof ak})).length,n=e.filter((function(e){return e instanceof ik})).length;if(t>1||t>0&&n>0)throw new Gl(Kl.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(a=a.concat(r));var o=!0,s=!1,u=void 0;try{for(var c,l=a[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value;e=h._apply(e)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return e}var ik=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a){var o;return e(l)(this,r),(o=n.call(this))._field=t,o._op=i,o._value=a,o.type="where",e(so)(o)}return e(h)(r,[{key:"_apply",value:function(e){var t=this._parse(e);return uk(e._query,t),new gg(e.firestore,e.converter,td(e._query,t))}},{key:"_parse",value:function(e){var t=Mg(e.firestore);return function(e,t,n,r,i,a,o){var s;if(i.isKeyField()){if("array-contains"===a||"array-contains-any"===a)throw new Gl(Kl.INVALID_ARGUMENT,"Invalid Query. You can't perform '".concat(a,"' queries on documentId()."));if("in"===a||"not-in"===a){sk(o,a);var u=[],c=!0,l=!1,h=void 0;try{for(var f,d=o[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var v=f.value;u.push(ok(r,e,v))}}catch(e){l=!0,h=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw h}}s={arrayValue:{values:u}}}else s=ok(r,e,o)}else"in"!==a&&"not-in"!==a&&"array-contains-any"!==a||sk(o,a),s=Bg(n,"where",o,"in"===a||"not-in"===a);return Tf.create(i,a,s)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value)}}],[{key:"_create",value:function(e,t,n){return new r(e,t,n)}}]),r}(nk);var ak=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){var a;return e(l)(this,r),(a=n.call(this)).type=t,a._queryConstraints=i,e(so)(a)}return e(h)(r,[{key:"_parse",value:function(e){var t=this._queryConstraints.map((function(t){return t._parse(e)})).filter((function(e){return e.getFilters().length>0}));return 1===t.length?t[0]:_f.create(t,this._getOperator())}},{key:"_apply",value:function(e){var t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){var n=e,r=t.getFlattenedFilters(),i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;uk(n,c),n=td(n,c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}(e._query,t),new gg(e.firestore,e.converter,td(e._query,t)))}},{key:"_getQueryConstraints",value:function(){return this._queryConstraints}},{key:"_getOperator",value:function(){return"and"===this.type?"and":"or"}}],[{key:"_create",value:function(e,t){return new r(e,t)}}]),r}(tk);function ok(e,t,n){if("string"==typeof(n=de(n))){if(""===n)throw new Gl(Kl.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zf(t)&&-1!==n.indexOf("/"))throw new Gl(Kl.INVALID_ARGUMENT,"Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '".concat(n,"' contains a '/' character."));var r=t.path.child(lh.fromString(n));if(!dh.isDocumentKey(r))throw new Gl(Kl.INVALID_ARGUMENT,"Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '".concat(r,"' is not because it has an odd number of segments (").concat(r.length,")."));return uf(e,new dh(r))}if(n instanceof mg)return uf(e,n._key);throw new Gl(Kl.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ".concat(fg(n),"."))}function sk(e,t){if(!Array.isArray(e)||0===e.length)throw new Gl(Kl.INVALID_ARGUMENT,"Invalid Query. A non-empty array is required for '".concat(t.toString(),"' filters."))}function uk(e,t){if(t.isInequality()){var n=Xf(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new Gl(Kl.INVALID_ARGUMENT,"Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '".concat(n.toString(),"' and '").concat(r.toString(),"'"));var i=Jf(e);null!==i&&ck(e,r,i)}var a=function(e,t){var n=!0,r=!1,i=void 0,a=!0,o=!1,s=void 0;try{for(var u,c=e[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;try{for(var h,f=l.getFlattenedFilters()[Symbol.iterator]();!(n=(h=f.next()).done);n=!0){var d=h.value;if(t.indexOf(d.op)>=0)return d.op}}catch(e){r=!0,i=e}finally{try{n||null==f.return||f.return()}finally{if(r)throw i}}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==a)throw a===t.op?new Gl(Kl.INVALID_ARGUMENT,"Invalid query. You cannot use more than one '".concat(t.op.toString(),"' filter.")):new Gl(Kl.INVALID_ARGUMENT,"Invalid query. You cannot use '".concat(t.op.toString(),"' filters with '").concat(a.toString(),"' filters."))}function ck(e,t,n){if(!n.isEqual(t))throw new Gl(Kl.INVALID_ARGUMENT,"Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '".concat(t.toString(),"' and so you must also use '").concat(t.toString(),"' as your first argument to orderBy(), but your first orderBy() is on field '").concat(n.toString(),"' instead."))}var lk=function(){"use strict";function t(){e(l)(this,t)}return e(h)(t,[{key:"convertValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(ef(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Kh(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gh(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ql()}}},{key:"convertObject",value:function(e,t){return this.convertObjectMap(e.fields,t)}},{key:"convertObjectMap",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",n=this,r={};return Oh(e,(function(e,i){r[e]=n.convertValue(i,t)})),r}},{key:"convertGeoPoint",value:function(e){return new Ag(Kh(e.latitude),Kh(e.longitude))}},{key:"convertArray",value:function(e,t){var n=this;return(e.values||[]).map((function(e){return n.convertValue(e,t)}))}},{key:"convertServerTimestamp",value:function(e,t){switch(t){case"previous":var n=Yh(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Jh(e));default:return null}}},{key:"convertTimestamp",value:function(e){var t=Wh(e);return new sh(t.seconds,t.nanos)}},{key:"convertDocumentKey",value:function(e,t){var n=lh.fromString(e);Hl(ep(n));var r=new Zh(n.get(1),n.get(3)),i=new dh(n.popFirst(5));return r.isEqual(t)||jl("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId,"/").concat(t.database,") instead.")),i}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fk=function(){"use strict";function t(n,r){e(l)(this,t),this.hasPendingWrites=n,this.fromCache=r}return e(h)(t,[{key:"isEqual",value:function(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}]),t}(),dk=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a,o,s,u){var c;return e(l)(this,r),(c=n.call(this,t,i,a,o,u))._firestore=t,c._firestoreImpl=t,c.metadata=s,e(so)(c)}return e(h)(r,[{key:"exists",value:function(){return e(St)(e(Nt)(r.prototype),"exists",this).call(this)}},{key:"data",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._document){if(this._converter){var t=new vk(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._document){var n=this._document.data.field($g("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}]),r}(Xg),vk=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.apply(this,arguments)}return e(h)(r,[{key:"data",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(St)(e(Nt)(r.prototype),"data",this).call(this,t)}}]),r}(dk),pk=function(){"use strict";function t(n,r,i,a){e(l)(this,t),this._firestore=n,this._userDataWriter=r,this._snapshot=a,this.metadata=new fk(a.hasPendingWrites,a.fromCache),this.query=i}return e(h)(t,[{key:"docs",get:function(){var e=[];return this.forEach((function(t){return e.push(t)})),e}},{key:"size",get:function(){return this._snapshot.docs.size}},{key:"empty",get:function(){return 0===this.size}},{key:"forEach",value:function(e,t){var n=this;this._snapshot.docs.forEach((function(r){e.call(t,new vk(n._firestore,n._userDataWriter,r.key,r,new fk(n._snapshot.mutatedKeys.has(r.key),n._snapshot.fromCache),n.query.converter))}))}},{key:"docChanges",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Gl(Kl.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){var n=0;return e._snapshot.docChanges.map((function(t){var r=new vk(e._firestore,e._userDataWriter,t.doc.key,t.doc,new fk(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);return t.doc,{type:"added",doc:r,oldIndex:-1,newIndex:n++}}))}var r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((function(e){return t||3!==e.type})).map((function(t){var n=new vk(e._firestore,e._userDataWriter,t.doc.key,t.doc,new fk(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,a=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(a=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:yk(t.type),doc:n,oldIndex:i,newIndex:a}}))}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}]),t}();function yk(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ql()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mk(e){e=dg(e,mg);var t=dg(e.firestore,Ig);return ag(Eg(t),e._key).then((function(n){return Ik(t,e,n)}))}var gk=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t){var i;return e(l)(this,r),(i=n.call(this)).firestore=t,e(so)(i)}return e(h)(r,[{key:"convertBytes",value:function(e){return new _g(e)}},{key:"convertReference",value:function(e){var t=this.convertDocumentKey(e,this.firestore._databaseId);return new mg(this.firestore,null,t)}}]),r}(lk);function kk(e){e=dg(e,gg);var t=dg(e.firestore,Ig),n=Eg(t),r=new gk(t);return ek(e._query),og(n,e._query).then((function(n){return new pk(t,r,e,n)}))}function wk(e,t,n){e=dg(e,mg);var r=dg(e.firestore,Ig),i=hk(e.converter,t,n);return xk(r,[Fg(Mg(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,jd.none())])}function bk(e,t,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),a=3;a<r;a++)i[a-3]=arguments[a];e=dg(e,mg);var o=dg(e.firestore,Ig),s=Mg(o);return xk(o,[("string"==typeof(t=de(t))||t instanceof Sg?jg(s,"updateDoc",e._key,t,n,i):Vg(s,"updateDoc",e._key,t)).toMutation(e._key,jd.exists(!0))])}function xk(t,n){return r=Eg(t),i=n,a=new Ql,r.asyncQueue.enqueueAndForget(e(s)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=gm,e.next=3,ng(r);case 3:return e.t1=e.sent,e.t2=i,e.t3=a,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),t)})))),a.promise;var r,i,a}function Ik(e,t,n){var r=n.docs.get(t._key),i=new gk(e);return new dk(e,i,t._key,r,new fk(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Ml=ct,it(new ve("firestore",(function(e,n){var r=n.instanceIdentifier,i=n.options,a=e.getProvider("app").getImmediate(),o=new Ig(new Zl(e.getProvider("auth-internal")),new nh(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Gl(Kl.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zh(e.options.projectId,t)}(a,r),a);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),ft(Ll,"3.12.0",e),ft(Ll,"3.12.0","esm2017")}();var Ek,Tk,_k,Sk=lt({apiKey:"AIzaSyAYO4Ie3dyg57FYXwv2s34tOoBXm3UaMzg",authDomain:"users-bookshelf.firebaseapp.com",projectId:"users-bookshelf",storageBucket:"users-bookshelf.appspot.com",messagingSenderId:"1093946480659",appId:"1:1093946480659:web:6fdb7ef580bf859789c7e6"}),Ck=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht(),t=at(e,"auth");if(t.isInitialized())return t.getImmediate();var n=pr(e,{popupRedirectResolver:Wa,persistence:[qi,gi,wi]}),r=J("authTokenSyncURL");if(r){var i=io(r);hi(n,i,(function(){return i(n.currentUser)})),li(n,(function(e){return i(e)}))}var a=G("auth");return a&&yr(n,"http://".concat(a)),n}(),Ak=function(t,n){var r="string"==typeof t?t:n||"(default)",i=at("object"==typeof t?t:ht(),"firestore").getImmediate({identifier:r});if(!i._initialized){var a=Q("firestore");a&&yg.apply(void 0,[i].concat(e(d)(a)))}return i}(Sk),Nk="customers",Dk="info-shopping-list",Rk=!1,Ok="",Lk="customer_name";Ek=function(e){e&&(e.uid,Rk=!0,Ok=e.uid),localStorage.setItem("IS_CUSTOMER_LOGGED_IN",Rk)},de(Ck).onAuthStateChanged(Ek,Tk,_k);var Pk=document.querySelector(".signin-cont"),Mk=document.querySelector(".signup-cont"),Fk=document.querySelector(".signup"),Uk=document.querySelector(".signin"),Vk=document.querySelector(".tabs");function jk(e){return new Promise((function(t){return setTimeout(t,e)}))}!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.addEventListener("click",n),e.modal.classList.toggle("hidden"),document.addEventListener("keydown",(function t(n){"Escape"===n.code&&(e.modal.classList.add("hidden"),document.removeEventListener("keydown",t))}))}function n(t){t.currentTarget===t.target&&(e.modal.classList.toggle("hidden"),e.modal.removeEventListener("click",n))}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),Vk.addEventListener("click",(function(e){Uk.classList.toggle("active"),Fk.classList.toggle("active"),Pk.classList.toggle("hidden"),Mk.classList.toggle("hidden")})),document.querySelector(".js-form-signup").addEventListener("submit",(function(t){t.preventDefault();var n=t.currentTarget.elements,r=n.name,i=n.email,a=n.password;si(Ck,i.value,a.value).then((o=e(s)(e(u).mark((function t(n){var a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.user,e.next=3,wk(bg(Ak,Nk,i.value),{customer_name:r.value,customer_email:i.value,shopping_list:[],customer_avatar:"",session_id:a.uid});case 3:c.Notify.success("Your account was successfully registered!"),jk(1e3).then((function(){return document.location.href="/"}));case 5:case"end":return e.stop()}}),t)}))),function(e){return o.apply(this,arguments)})).catch((function(e){var t=e.message;c.Notify.failure(t)}));var o})),document.querySelector(".js-form-signin").addEventListener("submit",(function(t){t.preventDefault();var n=t.currentTarget.elements,r=n.email,i=n.password;ci(Ck,r.value,i.value).then((a=e(s)(e(u).mark((function t(n){var i,a,o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.user,a=bg(Ak,Nk,r.value),e.next=4,bk(a,{session_id:i.uid});case 4:return e.next=6,mk(a);case 6:(o=e.sent).exists()&&(localStorage.setItem(Lk,o.data().customer_name),localStorage.setItem(Dk,o.data().shopping_list)),c.Notify.success("Welcome!"),jk(1e3).then((function(){return document.location.href="/"}));case 10:case"end":return e.stop()}}),t)}))),function(e){return a.apply(this,arguments)})).catch((function(e){var t=e.message;c.Notify.failure(t)}));var a})),document.querySelector(".js-signout").addEventListener("click",(function(){fi(Ck).then(e(s)(e(u).mark((function t(){var n,r,i,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=Ok){e.next=2;break}return e.abrupt("return",!0);case 2:return n=rk(wg(Ak,Nk),(t=Ok,o=void 0,s=void 0,o="==",s=$g("where","session_id"),ik._create(s,o,t))),e.next=5,kk(n);case 5:if(r=e.sent,i="",r.forEach((function(e){i=e.data().customer_email})),!i){e.next=12;break}return a=bg(Ak,Nk,i),e.next=12,bk(a,{shopping_list:localStorage.getItem(Dk)});case 12:localStorage.removeItem(Lk),localStorage.removeItem(Dk),localStorage.setItem("IS_CUSTOMER_LOGGED_IN",!1),c.Notify.warning("Have a nice day!"),jk(1e3).then((function(){return document.location.href="/"}));case 17:case"end":return e.stop()}var t,o,s}),t)})))).catch((function(e){var t=e.message;c.Notify.failure(t)}))})),i("i8Q71"),i("fveBt"),i("6N62V"),i("2Y3SG"),i("8Veln");s=i("bpxeT"),u=i("2TvXO");var Bk="https://books-backend.p.goit.global/books/";function zk(){return(zk=e(s)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Bk,"/").concat(n)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var qk,Hk={fetchBookById:function(e){return zk.apply(this,arguments)}};qk=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("dcx8L");var Wk;Wk=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("kFWPh");var Kk;Kk=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("aN4Su");var Gk={div:document.querySelector(".bookShell"),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),bookCard:document.querySelector(".js-book-card"),shoppingListBtn:document.querySelector('[data-action="shopping-list-modal"]'),text:document.querySelector(".js-modal-text")},Qk="info-shopping-list",Yk={},Jk=localStorage.getItem(Qk),Xk=JSON.parse(Jk)||[];function Zk(){window.removeEventListener("keydown",$k),document.body.classList.remove("js-show-modal")}function $k(e){"Escape"===e.code&&Zk()}function ew(t){var n=t.book_image,r=t.author,i=t.title,a=t.description,o=t.buy_links,s=t._id,u=t.list_name;Yk.bookId=s,Yk.bookAuthor=r,Yk.bookTitle=i,Yk.bookDescription=a,Yk.bookCategory=u,Yk.bookImage=n,Yk.bookAmazon=o[0].url,Yk.bookOpenBook=o[1].url,Yk.bookShop=o[4].url;var c='<img class="book-image"" src="'.concat(n,'" alt="').concat(i,'" loading="lazy" data-id="').concat(s,'"/>\n    <div class="book-description-thumb">\n    <p class="book-title">').concat(i,'</p>\n    <p class="book-author">').concat(r,'</p>\n    <p class="book-description">').concat(a,'</p>\n    <div class="book-links">\n    <a class="book-buy-url" href="').concat(o[0].url,'" target="_blank" rel="noreferrer noopener">\n    <svg class="book-buy-icon" width="62" height="19">\n    <use href="').concat(e(Kk),'#svg1936"></use>\n    </svg>\n    </a>\n    <a class="book-buy-url" href="').concat(o[1].url,'" target="_blank" rel="noreferrer noopener">\n    <img src="').concat(e(Wk),'" width="33px" height="32px"/>\n    </a>\n    <a class="book-buy-url" href="').concat(o[4].url,'" target="_blank" rel="noreferrer noopener">\n    <img src="').concat(e(qk),'" width="38px" height="36px"/>\n    </a>\n    </div>\n    </div>');Gk.bookCard.innerHTML=c}Gk.div.addEventListener("click",(function(e){e.preventDefault();var t=e.target.classList.contains("quick-view");if(!e.target.classList.contains("js-gallery-image")&&!t)return;var n=e.target.dataset.id;0!==Xk.length&&Xk.find((function(e){return e.bookId===n}))?(Gk.shoppingListBtn.textContent="remove from the shopping list",Gk.shoppingListBtn.classList.add("modal__button-shopping-list--remove"),Gk.text.classList.remove("visually-hidden")):(Gk.shoppingListBtn.textContent="add to shopping list",Gk.text.classList.add("visually-hidden"),Gk.shoppingListBtn.classList.remove("modal__button-shopping-list--remove"));Gk.bookCard.innerHTML="",Hk.fetchBookById(n).then(ew).catch((function(e){return console.err("Ooops! Something went wrong!")})),window.addEventListener("keydown",$k),document.body.classList.add("js-show-modal")})),Gk.closeModalBtn.addEventListener("click",Zk),Gk.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&Zk()})),Gk.shoppingListBtn.addEventListener("click",(function(t){try{var n=Xk.findIndex((function(e){return e.bookId===Yk.bookId}));-1!==n?(Xk.splice(n,1),localStorage.removeItem(Qk),localStorage.setItem(Qk,JSON.stringify(Xk))):(Xk.push(e(Se)({},Yk)),localStorage.setItem(Qk,JSON.stringify(Xk)))}catch(e){console.err("Ooops! Something went wrong!")}Zk()}))}();
//# sourceMappingURL=index.5a06fc2e.js.map
