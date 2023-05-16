function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var r={},i={},s=e.parcelRequired7c6;null==s&&((s=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},e.parcelRequired7c6=s),s.register("kyEFX",(function(e,n){var r,i;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return i}),(function(t){return i=t}));var s={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)s[e[n]]=t[e[n]]},i=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.fe2f67f6.js","jDPoR":"save-the-children.f3449026.png","6uEBG":"project-hope.2984f7de.png","k1r7D":"united-24.4c1c8691.png","fp3fh":"international-medical-corps.11c3a1fd.png","gQHiG":"medecins-sans-frontieres.b651900c.png","6dHKE":"razom.a52e8612.png","4XQzn":"action-against-hunger.6b5411e6.png","6jpBN":"world-vision.9e0125e2.png","5PSBZ":"sergiy-prytula.a0719334.png","fGJyr":"amazon.b3892198.svg","1HTp7":"bookshop.a185b304.svg","aSJpf":"ibooks.9bcaf007.svg"}')),(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function e(){t.modal.classList.toggle("hidden")}t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e)})();var o,a,c,u=o={};function l(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function d(t){if(a===setTimeout)return setTimeout(t,0);if((a===l||!a)&&setTimeout)return a=setTimeout,setTimeout(t,0);try{return a(t,0)}catch(e){try{return a.call(null,t,0)}catch(e){return a.call(this,t,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:l}catch(t){a=l}try{c="function"==typeof clearTimeout?clearTimeout:h}catch(t){c=h}}();var f,p=[],g=!1,m=-1;function y(){g&&f&&(g=!1,f.length?p=f.concat(p):m=-1,p.length&&v())}function v(){if(!g){var t=d(y);g=!0;for(var e=p.length;e;){for(f=p,p=[];++m<e;)f&&f[m].run();m=-1,e=p.length}f=null,g=!1,function(t){if(c===clearTimeout)return clearTimeout(t);if((c===h||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(t);try{c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}(t)}}function w(t,e){this.fun=t,this.array=e}function b(){}u.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new w(t,e)),1!==p.length||g||d(v)},w.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=b,u.addListener=b,u.once=b,u.off=b,u.removeListener=b,u.removeAllListeners=b,u.emit=b,u.prependListener=b,u.prependOnceListener=b,u.listeners=function(t){return[]},u.binding=function(t){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(t){throw new Error("process.chdir is not supported")},u.umask=function(){return 0};
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
const E=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},I={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(E(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==a)throw new _;const c=i<<2|s>>4;if(r.push(c),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
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
 */class _ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const T=function(t){return function(t){const e=E(t);return I.encodeByteArray(e,!0)}(t).replace(/\./g,"")},S=function(t){try{return I.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
const C=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,A=()=>{try{return C()||(()=>{if(void 0===o||void 0===o.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&S(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},k=t=>{var e,n;return null===(n=null===(e=A())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},R=t=>{const e=k(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},N=()=>{var t;return null===(t=A())||void 0===t?void 0:t.config},O=t=>{var e;return null===(e=A())||void 0===e?void 0:e[`_${t}`]};
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
class D{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */function L(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[T(JSON.stringify({alg:"none",type:"JWT"})),T(JSON.stringify(s)),""].join(".")}
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
 */function P(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function x(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function M(){const t=P();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function U(){try{return"object"==typeof indexedDB}catch(t){return!1}}class F extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,F.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,B.prototype.create)}}class B{create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(V,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new F(r,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const V=/\{\$([^}]+)}/g;
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
 */function j(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function q(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if($(n)&&$(s)){if(!q(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function $(t){return null!==t&&"object"==typeof t}
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
function z(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function H(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function K(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function G(t,e){const n=new W(t,e);return n.subscribe.bind(n)}class W{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=Q),void 0===r.error&&(r.error=Q),void 0===r.complete&&(r.complete=Q);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function Q(){}
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
function J(t){return t&&t._delegate?t._delegate:t}class X{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class Y{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new D;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,"[DEFAULT]"===r?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Z{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Y(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
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
 */const tt=[];var et,nt;(nt=et||(et={}))[nt.DEBUG=0]="DEBUG",nt[nt.VERBOSE=1]="VERBOSE",nt[nt.INFO=2]="INFO",nt[nt.WARN=3]="WARN",nt[nt.ERROR=4]="ERROR",nt[nt.SILENT=5]="SILENT";const rt={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},it=et.INFO,st={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},ot=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=st[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class at{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in et))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?rt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...t),this._logHandler(this,et.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...t),this._logHandler(this,et.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,et.INFO,...t),this._logHandler(this,et.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,et.WARN,...t),this._logHandler(this,et.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...t),this._logHandler(this,et.ERROR,...t)}constructor(t){this.name=t,this._logLevel=it,this._logHandler=ot,this._userLogHandler=null,tt.push(this)}}let ct,ut;const lt=new WeakMap,ht=new WeakMap,dt=new WeakMap,ft=new WeakMap,pt=new WeakMap;let gt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return ht.get(t);if("objectStoreNames"===e)return t.objectStoreNames||dt.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function mt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ut||(ut=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(wt(this),e),vt(lt.get(this))}:function(...e){return vt(t.apply(wt(this),e))}:function(e,...n){const r=t.call(wt(this),e,...n);return dt.set(r,e.sort?e.sort():[e]),vt(r)}}function yt(t){return"function"==typeof t?mt(t):(t instanceof IDBTransaction&&function(t){if(ht.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));ht.set(t,e)}(t),e=t,(ct||(ct=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,gt):t);var e}function vt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(vt(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&lt.set(e,t)})).catch((()=>{})),pt.set(e,t),e}(t);if(ft.has(t))return ft.get(t);const e=yt(t);return e!==t&&(ft.set(t,e),pt.set(e,t)),e}const wt=t=>pt.get(t);function bt(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=vt(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(vt(o.result),t.oldVersion,t.newVersion,vt(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const Et=["get","getKey","getAll","getAllKeys","count"],It=["put","add","delete","clear"],_t=new Map;function Tt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(_t.get(e))return _t.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=It.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Et.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return _t.set(e,s),s}gt=(t=>({...t,get:(e,n,r)=>Tt(e,n)||t.get(e,n,r),has:(e,n)=>!!Tt(e,n)||t.has(e,n)}))(gt);
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
class St{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const Ct=new at("@firebase/app"),At={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},kt=new Map,Rt=new Map;function Nt(t,e){try{t.container.addComponent(e)}catch(n){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ot(t){const e=t.name;if(Rt.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;Rt.set(e,t);for(const e of kt.values())Nt(e,t);return!0}function Dt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const Lt=new B("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Pt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new X("app",(()=>this),"PUBLIC"))}}
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
 */function xt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!=typeof i||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(n||(n=N()),!n)throw Lt.create("no-options");const s=kt.get(i);if(s){if(q(n,s.options)&&q(r,s.config))return s;throw Lt.create("duplicate-app",{appName:i})}const o=new Z(i);for(const t of Rt.values())o.addComponent(t);const a=new Pt(n,r,o);return kt.set(i,a),a}function Mt(t="[DEFAULT]"){const e=kt.get(t);if(!e&&"[DEFAULT]"===t&&N())return xt();if(!e)throw Lt.create("no-app",{appName:t});return e}function Ut(t,e,n){var r;let i=null!==(r=At[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Ct.warn(t.join(" "))}Ot(new X(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}let Ft=null;function Bt(){return Ft||(Ft=bt("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})}))),Ft}async function Vt(t,e){try{const n=(await Bt()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");await r.put(e,jt(t)),await n.done}catch(t){if(t instanceof F)Ct.warn(t.message);else{const e=Lt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Ct.warn(e.message)}}}function jt(t){return`${t.name}!${t.options.appId}`}
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
 */class qt{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=$t();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=$t(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Ht(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ht(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=T(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new zt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function $t(){return(new Date).toISOString().substring(0,10)}class zt{async runIndexedDBEnvironmentCheck(){return!!U()&&new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{const e=await Bt();return await e.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(jt(t))}catch(t){if(t instanceof F)Ct.warn(t.message);else{const e=Lt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Ct.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Vt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Vt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Ht(t){return T(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var Kt;Kt="",Ot(new X("platform-logger",(t=>new St(t)),"PRIVATE")),Ot(new X("heartbeat",(t=>new qt(t)),"PRIVATE")),Ut("@firebase/app","0.9.10",Kt),Ut("@firebase/app","0.9.10","esm2017"),Ut("fire-js","");
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
Ut("firebase","9.22.0","app");function Gt(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;function Wt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qt=Wt,Jt=new B("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Xt=new at("@firebase/auth");function Yt(t,...e){Xt.logLevel<=et.ERROR&&Xt.error(`Auth (9.22.0): ${t}`,...e)}
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
 */function Zt(t,...e){throw ne(t,...e)}function te(t,...e){return ne(t,...e)}function ee(t,e,n){const r=Object.assign(Object.assign({},Qt()),{[e]:n});return new B("auth","Firebase",r).create(e,{appName:t.name})}function ne(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jt.create(t,...e)}function re(t,e,...n){if(!t)throw ne(e,...n)}function ie(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yt(e),new Error(e)}function se(t,e){t||ie(e)}
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
 */function oe(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function ae(){return"http:"===ce()||"https:"===ce()}function ce(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
 */function ue(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ae()||x()||"connection"in navigator))||navigator.onLine}
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
class le{get(){return ue()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(t,e){this.shortDelay=t,this.longDelay=e,se(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(P())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
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
 */function he(t,e){se(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class de{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const fe={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},pe=new le(3e4,6e4);
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
 */function ge(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function me(t,e,n,r,i={}){return ye(t,i,(async()=>{let i={},s={};r&&("GET"===e?s=r:i={body:JSON.stringify(r)});const o=z(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),de.fetch()(we(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function ye(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fe),e);try{const e=new be(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Ee(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ee(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Ee(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw Ee(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ee(t,a,o);Zt(t,a)}}catch(e){if(e instanceof F)throw e;Zt(t,"network-request-failed",{message:String(e)})}}async function ve(t,e,n,r,i={}){const s=await me(t,e,n,r,i);return"mfaPendingCredential"in s&&Zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function we(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?he(t.config,i):`${t.config.apiScheme}://${i}`}class be{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(te(this.auth,"network-request-failed"))),pe.get())}))}}function Ee(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=te(t,e,r);return i.customData._tokenResponse=n,i}
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
function Ie(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
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
 */function _e(t){return 1e3*Number(t)}function Te(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return Yt("JWT malformed, contained fewer than 3 sections"),null;try{const t=S(n);return t?JSON.parse(t):(Yt("Failed to decode base64 JWT payload"),null)}catch(t){return Yt("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
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
async function Se(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof F&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Ce{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class Ae{_initializeTime(){this.lastSignInTime=Ie(this.lastLoginAt),this.creationTime=Ie(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
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
 */async function ke(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Se(t,async function(t,e){return me(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));re(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=Gt(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,u=o,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const l=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ae(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
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
class Re{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){re(t.idToken,"internal-error"),re(void 0!==t.idToken,"internal-error"),re(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Te(t);return re(e,"internal-error"),re(void 0!==e.exp,"internal-error"),re(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return re(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(t,e){const n=await ye(t,{},(async()=>{const n=z({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,s=we(t,r,"/v1/token",`key=${i}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",de.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new Re;return n&&(re("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(re("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(re("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Re,this.toJSON())}_performRefresh(){return ie("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function Ne(t,e){re("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Oe{async getIdToken(t){const e=await Se(this,this.stsTokenManager.getToken(this.auth,t));return re(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=J(t),r=await n.getIdToken(e),i=Te(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ie(_e(i.auth_time)),issuedAtTime:Ie(_e(i.iat)),expirationTime:Ie(_e(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=J(t);await ke(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(re(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Oe(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await ke(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Se(this,async function(t,e){return me(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:I}=e;re(v&&I,t,"internal-error");const _=Re.fromJSON(this.name,I);re("string"==typeof v,t,"internal-error"),Ne(l,t.name),Ne(h,t.name),re("boolean"==typeof w,t,"internal-error"),re("boolean"==typeof b,t,"internal-error"),Ne(d,t.name),Ne(f,t.name),Ne(p,t.name),Ne(g,t.name),Ne(m,t.name),Ne(y,t.name);const T=new Oe({uid:v,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map((t=>Object.assign({},t)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(t,e,n=!1){const r=new Re;r.updateFromServerResponse(e);const i=new Oe({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await ke(i),i}constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=Gt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ce(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ae(i.createdAt||void 0,i.lastLoginAt||void 0)}}
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
 */const De=new Map;function Le(t){se(t instanceof Function,"Expected a class definition");let e=De.get(t);return e?(se(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,De.set(t,e),e)}
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
 */class Pe{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}Pe.type="NONE";const xe=Pe;
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
 */function Me(t,e,n){return`firebase:${t}:${e}:${n}`}class Ue{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Oe._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Ue(Le(xe),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||Le(xe);const s=Me(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const r=Oe._fromJSON(t,e);n!==i&&(o=r),i=n;break}}catch(t){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(t){}}))),new Ue(i,t,n)):new Ue(i,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Me(this.userKey,r.apiKey,i),this.fullPersistenceKey=Me("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Fe(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qe(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Be(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ze(e))return"Blackberry";if(He(e))return"Webos";if(Ve(e))return"Safari";if((e.includes("chrome/")||je(e))&&!e.includes("edge/"))return"Chrome";if($e(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Be(t=P()){return/firefox\//i.test(t)}function Ve(t=P()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function je(t=P()){return/crios\//i.test(t)}function qe(t=P()){return/iemobile/i.test(t)}function $e(t=P()){return/android/i.test(t)}function ze(t=P()){return/blackberry/i.test(t)}function He(t=P()){return/webos/i.test(t)}function Ke(t=P()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ge(){return M()&&10===document.documentMode}function We(t=P()){return Ke(t)||$e(t)||He(t)||ze(t)||/windows phone/i.test(t)||qe(t)}
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
function Qe(t,e=[]){let n;switch(t){case"Browser":n=Fe(P());break;case"Worker":n=`${Fe(P())}-${t}`;break;default:n=t}return`${n}/JsCore/9.22.0/${e.length?e.join(","):"FirebaseCore-web"}`}
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
 */async function Je(t,e){return me(t,"GET","/v2/recaptchaConfig",ge(t,e))}
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
 */function Xe(t){return void 0!==t&&void 0!==t.enterprise}class Ye{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
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
 */function Ze(t){return new Promise(((e,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=te("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function tn(t){return`__${t}${Math.floor(1e6*Math.random())}`}class en{async verify(t="verify",e=!1){function n(e,n,r){const i=window.grecaptcha;Xe(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,r)=>{(async function(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{Je(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Ye(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))})(this.auth).then((i=>{if(!e&&Xe(window.grecaptcha))n(i,t,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));Ze("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,t,r)})).catch((t=>{r(t)}))}})).catch((t=>{r(t)}))}))}constructor(t){this.type="recaptcha-enterprise",this.auth=on(t)}}async function nn(t,e,n,r=!1){const i=new en(t);let s;try{s=await i.verify(n)}catch(t){s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */class rn{pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{n(t(e))}catch(t){r(t)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}constructor(t){this.auth=t,this.queue=[]}}
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
 */class sn{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Le(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Ue.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(t){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ke(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?J(t):null;return e&&re(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&re(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Le(t))}))}async initializeRecaptchaConfig(){const t=await Je(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new Ye(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){new en(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new B("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Le(t)||this._popupRedirectResolver;re(e,this,"argument-error"),this.redirectPersistenceManager=await Ue.create(this,[Le(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return re(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Qe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==e?void 0:e.error)&&function(t,...e){Xt.logLevel<=et.WARN&&Xt.warn(`Auth (9.22.0): ${t}`,...e)}(`Error while retrieving App Check token: ${e.error}`),null==e?void 0:e.token}constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new an(this),this.idTokenSubscription=new an(this),this.beforeStateQueue=new rn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}}function on(t){return J(t)}class an{get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=G((t=>this.observer=t))}}
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
 */function cn(t,e,n){const r=on(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=un(e),{host:o,port:a}=function(t){const e=un(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:ln(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:ln(e)}}}(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */()}function un(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ln(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class hn{toJSON(){return ie("not implemented")}_getIdTokenResponse(t){return ie("not implemented")}_linkToIdToken(t,e){return ie("not implemented")}_getReauthenticationResolver(t){return ie("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
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
 */async function dn(t,e){return me(t,"POST","/v1/accounts:update",e)}
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
async function fn(t,e){return ve(t,"POST","/v1/accounts:signInWithPassword",ge(t,e))}
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
class pn extends hn{static _fromEmailAndPassword(t,e){return new pn(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new pn(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await nn(t,n,"signInWithPassword");return fn(t,e)}return fn(t,n).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await nn(t,n,"signInWithPassword");return fn(t,e)}return Promise.reject(e)}));case"emailLink":
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
return async function(t,e){return ve(t,"POST","/v1/accounts:signInWithEmailLink",ge(t,e))}(t,{email:this._email,oobCode:this._password});default:Zt(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return dn(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return ve(t,"POST","/v1/accounts:signInWithEmailLink",ge(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:Zt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}}
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
 */async function gn(t,e){return ve(t,"POST","/v1/accounts:signInWithIdp",ge(t,e))}
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
 */class mn extends hn{static _fromParams(t){const e=new mn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Zt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=Gt(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new mn(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){return gn(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,gn(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,gn(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=z(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const yn={USER_NOT_FOUND:"user-not-found"};
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
class vn extends hn{static _fromVerification(t,e){return new vn({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new vn({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return ve(t,"POST","/v1/accounts:signInWithPhoneNumber",ge(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await ve(t,"POST","/v1/accounts:signInWithPhoneNumber",ge(t,e));if(n.temporaryProof)throw Ee(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return ve(t,"POST","/v1/accounts:signInWithPhoneNumber",ge(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),yn)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new vn({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(t){super("phone","phone"),this.params=t}}
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
 */class wn{static parseLink(t){const e=function(t){const e=H(K(t)).link,n=e?H(K(e)).deep_link_id:null,r=H(K(t)).deep_link_id;return(r?H(K(r)).link:null)||r||n||e||t}(t);try{return new wn(e)}catch(t){return null}}constructor(t){var e,n,r,i,s,o;const a=H(K(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);re(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class bn{static credential(t,e){return pn._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=wn.parseLink(e);return re(n,"argument-error"),pn._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=bn.PROVIDER_ID}}bn.PROVIDER_ID="password",bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class En{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class In extends En{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class _n extends In{static credential(t){return mn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _n.credentialFromTaggedObject(t)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return _n.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com",_n.PROVIDER_ID="facebook.com";
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
class Tn extends In{static credential(t,e){return mn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Tn.credentialFromTaggedObject(t)}static credentialFromError(t){return Tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Tn.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}Tn.GOOGLE_SIGN_IN_METHOD="google.com",Tn.PROVIDER_ID="google.com";
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
class Sn extends In{static credential(t){return mn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Sn.credentialFromTaggedObject(t)}static credentialFromError(t){return Sn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Sn.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}Sn.GITHUB_SIGN_IN_METHOD="github.com",Sn.PROVIDER_ID="github.com";
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
class Cn extends In{static credential(t,e){return mn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Cn.credentialFromTaggedObject(t)}static credentialFromError(t){return Cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Cn.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}
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
async function An(t,e){return ve(t,"POST","/v1/accounts:signUp",ge(t,e))}
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
 */Cn.TWITTER_SIGN_IN_METHOD="twitter.com",Cn.PROVIDER_ID="twitter.com";class kn{static async _fromIdTokenResponse(t,e,n,r=!1){const i=await Oe._fromIdTokenResponse(t,n,r),s=Rn(n);return new kn({user:i,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Rn(n);return new kn({user:t,providerId:r,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function Rn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class Nn extends F{static _fromErrorAndOperation(t,e,n,r){return new Nn(t,e,n,r)}constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Nn.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function On(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Nn._fromErrorAndOperation(t,n,e,r);throw n}))}
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
 */async function Dn(t,e,n=!1){const r=await Se(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kn._forOperation(t,"link",r)}
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
async function Ln(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Se(t,On(r,i,e,t),n);re(s.idToken,r,"internal-error");const o=Te(s.idToken);re(o,r,"internal-error");const{sub:a}=o;return re(t.uid===a,r,"user-mismatch"),kn._forOperation(t,i,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Zt(r,"user-mismatch"),t}}
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
 */async function Pn(t,e,n=!1){const r="signIn",i=await On(t,r,e),s=await kn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xn(t,e){return Pn(on(t),e)}async function Mn(t,e,n){var r;const i=on(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const t=await nn(i,s,"signUpPassword");o=An(i,t)}else o=An(i,s).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const t=await nn(i,s,"signUpPassword");return An(i,t)}return Promise.reject(t)}));const a=await o.catch((t=>Promise.reject(t))),c=await kn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Un(t,e,n){return xn(J(t),bn.credential(e,n))}
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
 */function Fn(t){return J(t).signOut()}new WeakMap;
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
class Bn{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
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
 */class Vn extends Bn{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);Ge()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=P();return Ve(t)||Ke(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=We(),this._shouldAllowMigration=!0}}Vn.type="LOCAL";const jn=Vn;
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
 */class qn extends Bn{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}qn.type="SESSION";const $n=qn;
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
class zn{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new zn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function Hn(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
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
 */zn.receivers=[];class Kn{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Hn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(t){this.target=t,this.handlers=new Set}}
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
 */function Gn(){return window}
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
 */
function Wn(){return void 0!==Gn().WorkerGlobalScope&&"function"==typeof Gn().importScripts}class Qn{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function Jn(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Xn(){const t=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Qn(t).toPromise()}(),e(await Xn()))}))}))}async function Yn(t,e,n){const r=Jn(t,!0).put({fbase_key:e,value:n});return new Qn(r).toPromise()}function Zn(t,e){const n=Jn(t,!0).delete(e);return new Qn(n).toPromise()}class tr{async _openDb(){return this.db||(this.db=await Xn()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zn._getInstance(Wn()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Kn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Xn();return await Yn(t,"__sak","1"),await Zn(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Yn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Jn(t,!1).get(e),r=await new Qn(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Zn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Jn(t,!1).getAll();return new Qn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}tr.type="LOCAL";const er=tr;
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
tn("rcb"),new le(3e4,6e4);async function nr(t,e,n){var r;const i=await n.verify();try{let s;if(re("string"==typeof i,t,"argument-error"),re("recaptcha"===n.type,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){re("enroll"===e.type,t,"internal-error");const n=await
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
function(t,e){return me(t,"POST","/v2/accounts/mfaEnrollment:start",ge(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{re("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;re(n,t,"missing-multi-factor-info");const o=await function(t,e){return me(t,"POST","/v2/accounts/mfaSignIn:start",ge(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return me(t,"POST","/v1/accounts:sendVerificationCode",ge(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
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
class rr{verifyPhoneNumber(t,e){return nr(this.auth,t,J(e))}static credential(t,e){return vn._fromVerification(t,e)}static credentialFromResult(t){const e=t;return rr.credentialFromTaggedObject(e)}static credentialFromError(t){return rr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?vn._fromTokenResponse(e,n):null}constructor(t){this.providerId=rr.PROVIDER_ID,this.auth=on(t)}}
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
function ir(t,e){return e?Le(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */rr.PROVIDER_ID="phone",rr.PHONE_SIGN_IN_METHOD="phone";class sr extends hn{_getIdTokenResponse(t){return gn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return gn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return gn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function or(t){return Pn(t.auth,new sr(t),t.bypassAuthState)}function ar(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),Ln(n,new sr(t),t.bypassAuthState)}async function cr(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),Dn(n,new sr(t),t.bypassAuthState)}
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
 */class ur{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return or;case"linkViaPopup":case"linkViaRedirect":return cr;case"reauthViaPopup":case"reauthViaRedirect":return ar;default:Zt(this.auth,"internal-error")}}resolve(t){se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
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
 */const lr=new le(2e3,1e4);class hr extends ur{async executeNotNull(){const t=await this.execute();return re(t,this.auth,"internal-error"),t}async onExecution(){se(1===this.filter.length,"Popup operations only handle one event");const t=Hn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(te(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(te(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,lr.get())};t()}constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}}hr.currentPopupAction=null;
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
const dr=new Map;class fr extends ur{async execute(){let t=dr.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=mr(e),r=gr(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}dr.set(this.auth._key(),t)}return this.bypassAuthState||dr.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function pr(t,e){dr.set(t._key(),e)}function gr(t){return Le(t._redirectPersistence)}function mr(t){return Me("pendingRedirect",t.config.apiKey,t.name)}
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
 */async function yr(t,e,n=!1){const r=on(t),i=ir(r,e),s=new fr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}class vr{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return br(t);default:return!1}}
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!br(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(te(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(wr(t))}saveEventToCache(t){this.cachedEventUids.add(wr(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function wr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function br({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
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
const Er=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ir=/^https?/;async function _r(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return me(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Tr(t))return}catch(t){}Zt(t,"unauthorized-domain")}function Tr(t){const e=oe(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ir.test(n))return!1;if(Er.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Sr=new le(3e4,6e4);function Cr(){const t=Gn().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Ar=null;function kr(t){return Ar=Ar||function(t){return new Promise(((e,n)=>{var r,i,s;function o(){Cr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cr(),n(te(t,"network-request-failed"))},timeout:Sr.get()})}if(null===(i=null===(r=Gn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Gn().gapi)||void 0===s?void 0:s.load)){const e=tn("iframefcb");return Gn()[e]=()=>{gapi.load?o():n(te(t,"network-request-failed"))},Ze(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Ar=null,t}))}(t),Ar}
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
 */const Rr=new le(5e3,15e3),Nr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Or=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dr(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?he(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:"9.22.0"},i=Or.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${z(r).slice(1)}`}
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
 */
const Lr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Pr{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function xr(t,e,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Lr),{width:r.toString(),height:i.toString(),top:s,left:o}),u=P().toLowerCase();n&&(a=je(u)?"_blank":n),Be(u)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=P()){var e;return Ke(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(e||"",a),new Pr(null);const h=window.open(e||"",a,l);re(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Pr(h)}const Mr=encodeURIComponent("fac");async function Ur(t,e,n,r,i,s){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:"9.22.0",eventId:i};if(e instanceof En){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",j(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof In){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];const c=await t._getAppCheckToken(),u=c?`#${Mr}=${encodeURIComponent(c)}`:"";return`${function({config:t}){return t.emulator?he(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
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
 */(t)}?${z(a).slice(1)}${u}`}const Fr=class{async _openPopup(t,e,n,r){var i;se(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return xr(t,await Ur(t,e,n,oe(),r),Hn())}async _openRedirect(t,e,n,r){await this._originValidation(t);return function(t){Gn().location.href=t}(await Ur(t,e,n,oe(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(se(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await kr(t),n=Gn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:Dr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nr,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=te(t,"network-request-failed"),s=Gn().setTimeout((()=>{r(i)}),Rr.get());function o(){Gn().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}(t),n=new vr(t);return e.register("authEvent",(e=>{re(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&e(!!i),Zt(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=_r(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return We()||Ve()||Ke()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$n,this._completeRedirectFn=yr,this._overrideRedirectResult=pr}};
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
class Br{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
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
const Vr=O("authIdTokenMaxAge")||300;let jr=null;var qr;qr="Browser",Ot(new X("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;re(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:qr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qe(qr)},c=new sn(n,r,i,a);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Le);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(c,e),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Ot(new X("auth-internal",(t=>{const e=on(t.getProvider("auth").getImmediate());return new Br(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ut("@firebase/auth","0.23.2",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(qr)),Ut("@firebase/auth","0.23.2","esm2017");var $r,zr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},Hr={},Kr=Kr||{},Gr=zr||self;function Wr(){}function Qr(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Jr(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Xr="closure_uid_"+(1e9*Math.random()>>>0),Yr=0;function Zr(t,e,n){return t.call.apply(t.bind,arguments)}function ti(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ei(t,e,n){return(ei=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Zr:ti).apply(null,arguments)}function ni(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ri(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function ii(){this.s=this.s,this.o=this.o}ii.prototype.s=!1,ii.prototype.ra=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Xr)&&t[Xr]||(t[Xr]=++Yr))},ii.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const si=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function oi(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ai(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Qr(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function ci(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ci.prototype.h=function(){this.defaultPrevented=!0};var ui=function(){if(!Gr.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Gr.addEventListener("test",Wr,e),Gr.removeEventListener("test",Wr,e)}catch(t){}return t}();function li(t){return/^[\s\xa0]*$/.test(t)}var hi=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function di(t,e){return t<e?-1:t>e?1:0}function fi(){var t=Gr.navigator;return t&&(t=t.userAgent)?t:""}function pi(t){return-1!=fi().indexOf(t)}function gi(t){return gi[" "](t),t}function mi(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}gi[" "]=Wr;var yi,vi,wi=pi("Opera"),bi=pi("Trident")||pi("MSIE"),Ei=pi("Edge"),Ii=Ei||bi,_i=pi("Gecko")&&!(-1!=fi().toLowerCase().indexOf("webkit")&&!pi("Edge"))&&!(pi("Trident")||pi("MSIE"))&&!pi("Edge"),Ti=-1!=fi().toLowerCase().indexOf("webkit")&&!pi("Edge");function Si(){var t=Gr.document;return t?t.documentMode:void 0}t:{var Ci="",Ai=(vi=fi(),_i?/rv:([^\);]+)(\)|;)/.exec(vi):Ei?/Edge\/([\d\.]+)/.exec(vi):bi?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(vi):Ti?/WebKit\/(\S+)/.exec(vi):wi?/(?:Version)[ \/]?(\S+)/.exec(vi):void 0);if(Ai&&(Ci=Ai?Ai[1]:""),bi){var ki=Si();if(null!=ki&&ki>parseFloat(Ci)){yi=String(ki);break t}}yi=Ci}var Ri,Ni={};if(Gr.document&&bi){var Oi=Si();Ri=Oi||(parseInt(yi,10)||void 0)}else Ri=void 0;var Di=Ri;function Li(t,e){if(ci.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(_i){t:{try{gi(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Pi[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Li.$.h.call(this)}}ri(Li,ci);var Pi={2:"touch",3:"pen",4:"mouse"};Li.prototype.h=function(){Li.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xi="closure_listenable_"+(1e6*Math.random()|0),Mi=0;function Ui(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Mi,this.fa=this.ia=!1}function Fi(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Bi(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Vi(t){const e={};for(const n in t)e[n]=t[n];return e}const ji="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qi(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<ji.length;e++)n=ji[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $i(t){this.src=t,this.g={},this.h=0}function zi(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=si(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Fi(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Hi(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}$i.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Hi(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new Ui(e,this.src,s,!!r,i)).ia=n,t.push(e)),e};var Ki="closure_lm_"+(1e6*Math.random()|0),Gi={};function Wi(t,e,n,r,i){if(r&&r.once)return Ji(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Wi(t,e[s],n,r,i);return null}return n=rs(n),t&&t[xi]?t.O(e,n,Jr(r)?!!r.capture:!!r,i):Qi(t,e,n,!1,r,i)}function Qi(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Jr(i)?!!i.capture:!!i,a=es(t);if(a||(t[Ki]=a=new $i(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=ts;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ui||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Zi(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Ji(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ji(t,e[s],n,r,i);return null}return n=rs(n),t&&t[xi]?t.P(e,n,Jr(r)?!!r.capture:!!r,i):Qi(t,e,n,!0,r,i)}function Xi(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Xi(t,e[s],n,r,i);else r=Jr(r)?!!r.capture:!!r,n=rs(n),t&&t[xi]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Hi(s=t.g[e],n,r,i))&&(Fi(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=es(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hi(e,n,r,i)),(n=-1<t?e[t]:null)&&Yi(n))}function Yi(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[xi])zi(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Zi(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=es(e))?(zi(n,t),0==n.h&&(n.src=null,e[Ki]=null)):Fi(t)}}}function Zi(t){return t in Gi?Gi[t]:Gi[t]="on"+t}function ts(t,e){if(t.fa)t=!0;else{e=new Li(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Yi(t),t=n.call(r,e)}return t}function es(t){return(t=t[Ki])instanceof $i?t:null}var ns="__closure_events_fn_"+(1e9*Math.random()>>>0);function rs(t){return"function"==typeof t?t:(t[ns]||(t[ns]=function(e){return t.handleEvent(e)}),t[ns])}function is(){ii.call(this),this.i=new $i(this),this.S=this,this.J=null}function ss(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"==typeof e)e=new ci(e,t);else if(e instanceof ci)e.target=e.target||t;else{var i=e;qi(e=new ci(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=os(o,r,!0,e)&&i}if(i=os(o=e.g=t,r,!0,e)&&i,i=os(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=os(o=e.g=n[s],r,!1,e)&&i}function os(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&zi(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}ri(is,ii),is.prototype[xi]=!0,is.prototype.removeEventListener=function(t,e,n,r){Xi(this,t,e,n,r)},is.prototype.N=function(){if(is.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Fi(n[r]);delete e.g[t],e.h--}}this.J=null},is.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},is.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var as=Gr.JSON.stringify;function cs(){var t=gs;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var us,ls=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new hs),(t=>t.reset()));class hs{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function ds(t){Gr.setTimeout((()=>{throw t}),0)}function fs(t,e){us||function(){var t=Gr.Promise.resolve(void 0);us=function(){t.then(ms)}}(),ps||(us(),ps=!0),gs.add(t,e)}var ps=!1,gs=new class{add(t,e){const n=ls.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function ms(){for(var t;t=cs();){try{t.h.call(t.g)}catch(t){ds(t)}var e=ls;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ps=!1}function ys(t,e){is.call(this),this.h=t||1,this.g=e||Gr,this.j=ei(this.qb,this),this.l=Date.now()}function vs(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function ws(t,e,n){if("function"==typeof t)n&&(t=ei(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ei(t.handleEvent,t)}return 2147483647<Number(e)?-1:Gr.setTimeout(t,e||0)}function bs(t){t.g=ws((()=>{t.g=null,t.i&&(t.i=!1,bs(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ri(ys,is),($r=ys.prototype).ga=!1,$r.T=null,$r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ss(this,"tick"),this.ga&&(vs(this),this.start()))}},$r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},$r.N=function(){ys.$.N.call(this),vs(this),delete this.g};class Es extends ii{l(t){this.h=arguments,this.g?this.i=!0:bs(this)}N(){super.N(),this.g&&(Gr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Is(t){ii.call(this),this.h=t,this.g={}}ri(Is,ii);var _s=[];function Ts(t,e,n,r){Array.isArray(n)||(n&&(_s[0]=n.toString()),n=_s);for(var i=0;i<n.length;i++){var s=Wi(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ss(t){Bi(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Yi(t)}),t),t.g={}}function Cs(){this.g=!0}function As(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return as(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Is.prototype.N=function(){Is.$.N.call(this),Ss(this)},Is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Cs.prototype.Ea=function(){this.g=!1},Cs.prototype.info=function(){};var ks={},Rs=null;function Ns(){return Rs=Rs||new is}function Os(t){ci.call(this,ks.Ta,t)}function Ds(t){const e=Ns();ss(e,new Os(e))}function Ls(t,e){ci.call(this,ks.STAT_EVENT,t),this.stat=e}function Ps(t){const e=Ns();ss(e,new Ls(e,t))}function xs(t,e){ci.call(this,ks.Ua,t),this.size=e}function Ms(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Gr.setTimeout((function(){t()}),e)}ks.Ta="serverreachability",ri(Os,ci),ks.STAT_EVENT="statevent",ri(Ls,ci),ks.Ua="timingevent",ri(xs,ci);var Us={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Fs={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bs(){}function Vs(t){return t.h||(t.h=t.i())}function js(){}Bs.prototype.h=null;var qs,$s={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function zs(){ci.call(this,"d")}function Hs(){ci.call(this,"c")}function Ks(){}function Gs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Is(this),this.P=Qs,t=Ii?125:void 0,this.V=new ys(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Ws}function Ws(){this.i=null,this.g="",this.h=!1}ri(zs,ci),ri(Hs,ci),ri(Ks,Bs),Ks.prototype.g=function(){return new XMLHttpRequest},Ks.prototype.i=function(){return{}},qs=new Ks;var Qs=45e3,Js={},Xs={};function Ys(t,e,n){t.L=1,t.v=vo(fo(e)),t.s=n,t.S=!0,Zs(t,null)}function Zs(t,e){t.G=Date.now(),ro(t),t.A=fo(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Oo(n.i,"t",r),t.C=0,n=t.l.I,t.h=new Ws,t.g=Na(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Es(ei(t.Pa,t,t.g),t.O)),Ts(t.U,t.g,"readystatechange",t.nb),e=t.I?Vi(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ds(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function to(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function eo(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=no(t,n),r==Xs){4==e&&(t.o=4,Ps(14),i=!1),As(t.j,t.m,null,"[Incomplete Response]");break}if(r==Js){t.o=4,Ps(15),As(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}As(t.j,t.m,r,null),co(t,r)}to(t)&&r!=Xs&&r!=Js&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Ps(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ca&&(t.ca=!0,(e=t.l).g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ia(e),e.L=!0,Ps(11))):(As(t.j,t.m,n,"[Invalid Chunked Response]"),ao(t),oo(t))}function no(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Xs:(n=Number(e.substring(n,r)),isNaN(n)?Js:(r+=1)+n>e.length?Xs:(e=e.substr(r,n),t.C=r+n,e))}function ro(t){t.Y=Date.now()+t.P,io(t,t.P)}function io(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ms(ei(t.lb,t),e)}function so(t){t.B&&(Gr.clearTimeout(t.B),t.B=null)}function oo(t){0==t.l.H||t.J||Sa(t.l,t)}function ao(t){so(t);var e=t.M;e&&"function"==typeof e.ra&&e.ra(),t.M=null,vs(t.V),Ss(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function co(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||Uo(n.h,t)))if(!t.K&&Uo(n.h,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;Ta(n),pa(n)}Ea(n),Ps(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&0==n.A&&!n.v&&(n.v=Ms(ei(n.ib,n),6e3));if(1>=Mo(n.h)&&n.na){try{n.na()}catch(t){}n.na=void 0}}else Aa(n,11)}else if((t.K||n.g==t)&&Ta(n),!li(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.J=u[1],n.oa=u[2];const e=u[3];null!=e&&(n.qa=e,n.j.info("VER="+n.qa));const i=u[4];null!=i&&(n.Ga=i,n.j.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Fo(s,s.h),s.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,yo(r.G,r.F,t))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms"));var o=t;if((r=n).wa=Ra(r,r.I?r.oa:null,r.Y),o.K){Bo(r.h,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(so(a),ro(a)),r.g=o}else ba(r);0<n.i.length&&ma(n)}else"stop"!=u[0]&&"close"!=u[0]||Aa(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Aa(n,7):fa(n):"noop"!=u[0]&&n.l&&n.l.Aa(u),n.A=0)}Ds()}catch(t){}}function uo(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Qr(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.sa&&"function"==typeof t.sa)return t.sa();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Qr(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Qr(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}($r=Gs.prototype).setTimeout=function(t){this.P=t},$r.nb=function(t){t=t.target;const e=this.M;e&&3==aa(t)?e.l():this.Pa(t)},$r.Pa=function(t){try{if(t==this.g)t:{const l=aa(this.g);var e=this.g.Ia();this.g.da();if(!(3>l)&&(3!=l||Ii||this.g&&(this.h.h||this.g.ja()||ca(this.g)))){this.J||4!=l||7==e||Ds(),so(this);var n=this.g.da();this.aa=n;e:if(to(this)){var r=ca(this.g);t="";var i=r.length,s=4==aa(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ao(this),oo(this);var o="";break e}this.h.i=new Gr.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.ba&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!li(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Ps(12),ao(this),oo(this);break t}As(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,co(this,n)}this.S?(eo(this,l,o),Ii&&this.i&&3==l&&(Ts(this.U,this.V,"tick",this.mb),this.V.start())):(As(this.j,this.m,o,null),co(this,o)),4==l&&ao(this),this.i&&!this.J&&(4==l?Sa(this.l,this):(this.i=!1,ro(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ps(12)):(this.o=0,Ps(13)),ao(this),oo(this)}}}catch(t){}},$r.mb=function(){if(this.g){var t=aa(this.g),e=this.g.ja();this.C<e.length&&(so(this),eo(this,t,e),this.i&&4!=t&&ro(this))}},$r.cancel=function(){this.J=!0,ao(this)},$r.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(Ds(),Ps(17)),ao(this),this.o=2,oo(this)):io(this,this.Y-t)};var lo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ho(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ho){this.h=void 0!==e?e:t.h,po(this,t.j),this.s=t.s,this.g=t.g,go(this,t.m),this.l=t.l,e=t.i;var n=new Ao;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),mo(this,n),this.o=t.o}else t&&(n=String(t).match(lo))?(this.h=!!e,po(this,n[1]||"",!0),this.s=wo(n[2]||""),this.g=wo(n[3]||"",!0),go(this,n[4]),this.l=wo(n[5]||"",!0),mo(this,n[6]||"",!0),this.o=wo(n[7]||"")):(this.h=!!e,this.i=new Ao(null,this.h))}function fo(t){return new ho(t)}function po(t,e,n){t.j=n?wo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function go(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function mo(t,e,n){e instanceof Ao?(t.i=e,function(t,e){e&&!t.j&&(ko(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ro(this,e),Oo(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=bo(e,So)),t.i=new Ao(e,t.h))}function yo(t,e,n){t.i.set(e,n)}function vo(t){return yo(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function wo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function bo(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Eo),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Eo(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ho.prototype.toString=function(){var t=[],e=this.j;e&&t.push(bo(e,Io,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(bo(e,Io,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(bo(n,"/"==n.charAt(0)?To:_o,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",bo(n,Co)),t.join("")};var Io=/[#\/\?@]/g,_o=/[#\?:]/g,To=/[#\?]/g,So=/[#\?@]/g,Co=/#/g;function Ao(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ko(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ro(t,e){ko(t),e=Do(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function No(t,e){return ko(t),e=Do(t,e),t.g.has(e)}function Oo(t,e,n){Ro(t,e),0<n.length&&(t.i=null,t.g.set(Do(t,e),oi(n)),t.h+=n.length)}function Do(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}($r=Ao.prototype).add=function(t,e){ko(this),this.i=null,t=Do(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},$r.forEach=function(t,e){ko(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},$r.sa=function(){ko(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},$r.Z=function(t){ko(this);let e=[];if("string"==typeof t)No(this,t)&&(e=e.concat(this.g.get(Do(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},$r.set=function(t,e){return ko(this),this.i=null,No(this,t=Do(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},$r.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},$r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Lo(t){this.l=t||Po,Gr.PerformanceNavigationTiming?t=0<(t=Gr.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Gr.g&&Gr.g.Ka&&Gr.g.Ka()&&Gr.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Po=10;function xo(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Mo(t){return t.h?1:t.g?t.g.size:0}function Uo(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Fo(t,e){t.g?t.g.add(e):t.h=e}function Bo(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Vo(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return oi(t.i)}function jo(){}function qo(){this.g=new jo}function $o(t,e,n){const r=n||"";try{uo(t,(function(t,n){let i=t;Jr(t)&&(i=as(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function zo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function Ho(t){this.l=t.fc||null,this.j=t.ob||!1}function Ko(t,e){is.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Go,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Lo.prototype.cancel=function(){if(this.i=Vo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},jo.prototype.stringify=function(t){return Gr.JSON.stringify(t,void 0)},jo.prototype.parse=function(t){return Gr.JSON.parse(t,void 0)},ri(Ho,Bs),Ho.prototype.g=function(){return new Ko(this.l,this.j)},Ho.prototype.i=function(t){return function(){return t}}({}),ri(Ko,is);var Go=0;function Wo(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Qo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Jo(t)}function Jo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}($r=Ko.prototype).open=function(t,e){if(this.readyState!=Go)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Jo(this)},$r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Gr).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},$r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Qo(this)),this.readyState=Go},$r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Jo(this)),this.g&&(this.readyState=3,Jo(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Gr.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wo(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},$r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qo(this):Jo(this),3==this.readyState&&Wo(this)}},$r.Za=function(t){this.g&&(this.response=this.responseText=t,Qo(this))},$r.Ya=function(t){this.g&&(this.response=t,Qo(this))},$r.ka=function(){this.g&&Qo(this)},$r.setRequestHeader=function(t,e){this.v.append(t,e)},$r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},$r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ko.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Xo=Gr.JSON.parse;function Yo(t){is.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Zo,this.L=this.M=!1}ri(Yo,is);var Zo="",ta=/^https?$/i,ea=["POST","PUT"];function na(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ra(t),sa(t)}function ra(t){t.F||(t.F=!0,ss(t,"complete"),ss(t,"error"))}function ia(t){if(t.h&&void 0!==Kr&&(!t.C[1]||4!=aa(t)||2!=t.da()))if(t.v&&4==aa(t))ws(t.La,0,t);else if(ss(t,"readystatechange"),4==aa(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.I).match(lo)[1]||null;if(!i&&Gr.self&&Gr.self.location){var s=Gr.self.location.protocol;i=s.substr(0,s.length-1)}r=!ta.test(i?i.toLowerCase():"")}n=r}if(n)ss(t,"complete"),ss(t,"success");else{t.m=6;try{var o=2<aa(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.da()+"]",ra(t)}}finally{sa(t)}}}function sa(t,e){if(t.g){oa(t);const n=t.g,r=t.C[0]?Wr:null;t.g=null,t.C=null,e||ss(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function oa(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Gr.clearTimeout(t.A),t.A=null)}function aa(t){return t.g?t.g.readyState:0}function ca(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Zo:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ua(t){let e="";return Bi(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function la(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=ua(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):yo(t,e,n))}function ha(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function da(t){this.Ga=0,this.i=[],this.j=new Cs,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ha("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ha("baseRetryDelayMs",5e3,t),this.hb=ha("retryDelaySeedMs",1e4,t),this.eb=ha("forwardChannelMaxRetries",2,t),this.xa=ha("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new Lo(t&&t.concurrentRequestLimit),this.Ja=new qo,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function fa(t){if(ga(t),3==t.H){var e=t.W++,n=fo(t.G);yo(n,"SID",t.J),yo(n,"RID",e),yo(n,"TYPE","terminate"),va(t,n),(e=new Gs(t,t.j,e,void 0)).L=2,e.v=vo(fo(n)),n=!1,Gr.navigator&&Gr.navigator.sendBeacon&&(n=Gr.navigator.sendBeacon(e.v.toString(),"")),!n&&Gr.Image&&((new Image).src=e.v,n=!0),n||(e.g=Na(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ro(e)}ka(t)}function pa(t){t.g&&(Ia(t),t.g.cancel(),t.g=null)}function ga(t){pa(t),t.u&&(Gr.clearTimeout(t.u),t.u=null),Ta(t),t.h.cancel(),t.m&&("number"==typeof t.m&&Gr.clearTimeout(t.m),t.m=null)}function ma(t){xo(t.h)||t.m||(t.m=!0,fs(t.Na,t),t.C=0)}function ya(t,e){var n;n=e?e.m:t.W++;const r=fo(t.G);yo(r,"SID",t.J),yo(r,"RID",n),yo(r,"AID",t.V),va(t,r),t.o&&t.s&&la(r,t.o,t.s),n=new Gs(t,t.j,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=wa(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Fo(t.h,n),Ys(n,r,e)}function va(t,e){t.ma&&Bi(t.ma,(function(t,n){yo(e,n,t)})),t.l&&uo({},(function(t,n){yo(e,n,t)}))}function wa(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ei(t.l.Va,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{$o(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.F=t,r}function ba(t){t.g||t.u||(t.ba=1,fs(t.Ma,t),t.A=0)}function Ea(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Ms(ei(t.Ma,t),Ca(t,t.A)),t.A++,!0)}function Ia(t){null!=t.B&&(Gr.clearTimeout(t.B),t.B=null)}function _a(t){t.g=new Gs(t,t.j,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=fo(t.wa);yo(e,"RID","rpc"),yo(e,"SID",t.J),yo(e,"CI",t.M?"0":"1"),yo(e,"AID",t.V),yo(e,"TYPE","xmlhttp"),va(t,e),t.o&&t.s&&la(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=vo(fo(e)),n.s=null,n.S=!0,Zs(n,t)}function Ta(t){null!=t.v&&(Gr.clearTimeout(t.v),t.v=null)}function Sa(t,e){var n=null;if(t.g==e){Ta(t),Ia(t),t.g=null;var r=2}else{if(!Uo(t.h,e))return;n=e.F,Bo(t.h,e),r=1}if(0!=t.H)if(t.ta=e.aa,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;ss(r=Ns(),new xs(r,n)),ma(t)}else ba(t);else if(3==(i=e.o)||0==i&&0<t.ta||!(1==r&&function(t,e){return!(Mo(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.F.concat(t.i),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=Ms(ei(t.Na,t,e),Ca(t,t.C)),t.C++,0)))}(t,e)||2==r&&Ea(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Aa(t,5);break;case 4:Aa(t,10);break;case 3:Aa(t,6);break;default:Aa(t,2)}}function Ca(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Aa(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=ei(t.pb,t);n||(n=new ho("//www.google.com/images/cleardot.gif"),Gr.location&&"http"==Gr.location.protocol||po(n,"https"),vo(n)),function(t,e){const n=new Cs;if(Gr.Image){const r=new Image;r.onload=ni(zo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ni(zo,n,r,"TestLoadImage: error",!1,e),r.onabort=ni(zo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ni(zo,n,r,"TestLoadImage: timeout",!1,e),Gr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Ps(2);t.H=0,t.l&&t.l.za(e),ka(t),ga(t)}function ka(t){if(t.H=0,t.pa=[],t.l){const e=Vo(t.h);0==e.length&&0==t.i.length||(ai(t.pa,e),ai(t.pa,t.i),t.h.i.length=0,oi(t.i),t.i.length=0),t.l.ya()}}function Ra(t,e,n){var r=n instanceof ho?fo(n):new ho(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),go(r,r.m);else{var i=Gr.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ho(null,void 0);r&&po(s,r),e&&(s.g=e),i&&go(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&yo(r,n,e),yo(r,"VER",t.qa),va(t,r),r}function Na(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new Yo(new Ho({ob:!0})):new Yo(t.va)).Oa(t.I),e}function Oa(){}function Da(){if(bi&&!(10<=Number(Di)))throw Error("Environmental error: no available transport.")}function La(t,e){is.call(this),this.g=new da(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!li(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!li(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ma(this)}function Pa(t){zs.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function xa(){Hs.call(this),this.status=1}function Ma(t){this.g=t}function Ua(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Fa(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(e^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function Ba(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}($r=Yo.prototype).Oa=function(t){this.M=t},$r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qs.g(),this.C=this.u?Vs(this.u):Vs(qs),this.g.onreadystatechange=ei(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void na(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=Gr.FormData&&t instanceof Gr.FormData,!(0<=si(ea,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{oa(this),0<this.B&&((this.L=function(t){return bi&&mi(Ni,9,(function(){let t=0;const e=hi(String(yi)).split("."),n=hi("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=di(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||di(0==i[2].length,0==s[2].length)||di(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ei(this.ua,this)):this.A=ws(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){na(this,t)}},$r.ua=function(){void 0!==Kr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ss(this,"timeout"),this.abort(8))},$r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ss(this,"complete"),ss(this,"abort"),sa(this))},$r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sa(this,!0)),Yo.$.N.call(this)},$r.La=function(){this.s||(this.G||this.v||this.l?ia(this):this.kb())},$r.kb=function(){ia(this)},$r.da=function(){try{return 2<aa(this)?this.g.status:-1}catch(t){return-1}},$r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},$r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Xo(e)}},$r.Ia=function(){return this.m},$r.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},($r=da.prototype).qa=8,$r.H=1,$r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Gs(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=Vi(s),qi(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=wa(this,i,e),yo(n=fo(this.G),"RID",t),yo(n,"CVER",22),this.F&&yo(n,"X-HTTP-Session-Id",this.F),va(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(ua(s)))+"&"+e:this.o&&la(n,this.o,s)),Fo(this.h,i),this.bb&&yo(n,"TYPE","init"),this.P?(yo(n,"$req",e),yo(n,"SID","null"),i.ba=!0,Ys(i,n,null)):Ys(i,n,e),this.H=2}}else 3==this.H&&(t?ya(this,t):0==this.i.length||xo(this.h)||ya(this))},$r.Ma=function(){if(this.u=null,_a(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Ms(ei(this.jb,this),t)}},$r.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Ps(10),pa(this),_a(this))},$r.ib=function(){null!=this.v&&(this.v=null,pa(this),Ea(this),Ps(19))},$r.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Ps(2)):(this.j.info("Failed to ping google.com"),Ps(1))},($r=Oa.prototype).Ba=function(){},$r.Aa=function(){},$r.za=function(){},$r.ya=function(){},$r.Va=function(){},Da.prototype.g=function(t,e){return new La(t,e)},ri(La,is),La.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Ps(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Ra(t,null,t.Y),ma(t)},La.prototype.close=function(){fa(this.g)},La.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=as(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.fb++,t)),3==e.H&&ma(e)},La.prototype.N=function(){this.g.l=null,delete this.j,fa(this.g),delete this.g,La.$.N.call(this)},ri(Pa,zs),ri(xa,Hs),ri(Ma,Oa),Ma.prototype.Ba=function(){ss(this.g,"a")},Ma.prototype.Aa=function(t){ss(this.g,new Pa(t))},Ma.prototype.za=function(t){ss(this.g,new xa)},Ma.prototype.ya=function(){ss(this.g,"b")},ri(Ua,(function(){this.blockSize=-1})),Ua.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Ua.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)Fa(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Fa(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Fa(this,r),i=0;break}}this.h=i,this.i+=e},Ua.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var Va={};function ja(t){return-128<=t&&128>t?mi(Va,t,(function(t){return new Ba([0|t],0>t?-1:0)})):new Ba([0|t],0>t?-1:0)}function qa(t){if(isNaN(t)||!isFinite(t))return za;if(0>t)return Qa(qa(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=$a;return new Ba(e,0)}var $a=4294967296,za=ja(0),Ha=ja(1),Ka=ja(16777216);function Ga(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Wa(t){return-1==t.h}function Qa(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ba(n,~t.h).add(Ha)}function Ja(t,e){return t.add(Qa(e))}function Xa(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ya(t,e){this.g=t,this.h=e}function Za(t,e){if(Ga(e))throw Error("division by zero");if(Ga(t))return new Ya(za,za);if(Wa(t))return e=Za(Qa(t),e),new Ya(Qa(e.g),Qa(e.h));if(Wa(e))return e=Za(t,Qa(e)),new Ya(Qa(e.g),e.h);if(30<t.g.length){if(Wa(t)||Wa(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ha,r=e;0>=r.X(t);)n=tc(n),r=tc(r);var i=ec(n,1),s=ec(r,1);for(r=ec(r,2),n=ec(n,2);!Ga(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ec(r,1),n=ec(n,1)}return e=Ja(t,i.R(e)),new Ya(i,e)}for(i=za;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(s=qa(n)).R(e);Wa(o)||0<o.X(t);)o=(s=qa(n-=r)).R(e);Ga(s)&&(s=Ha),i=i.add(s),t=Ja(t,o)}return new Ya(i,t)}function tc(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ba(n,t.h)}function ec(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ba(i,t.h)}($r=Ba.prototype).ea=function(){if(Wa(this))return-Qa(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:$a+r)*e,e*=$a}return t},$r.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(Ga(this))return"0";if(Wa(this))return"-"+Qa(this).toString(t);for(var e=qa(Math.pow(t,6)),n=this,r="";;){var i=Za(n,e).g,s=((0<(n=Ja(n,i.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(Ga(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},$r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},$r.X=function(t){return Wa(t=Ja(this,t))?-1:Ga(t)?0:1},$r.abs=function(){return Wa(this)?Qa(this):this},$r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ba(n,-2147483648&n[n.length-1]?-1:0)},$r.R=function(t){if(Ga(this)||Ga(t))return za;if(Wa(this))return Wa(t)?Qa(this).R(Qa(t)):Qa(Qa(this).R(t));if(Wa(t))return Qa(this.R(Qa(t)));if(0>this.X(Ka)&&0>t.X(Ka))return qa(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=o*c,Xa(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Xa(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Xa(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Xa(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ba(n,0)},$r.gb=function(t){return Za(this,t).h},$r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ba(n,this.h&t.h)},$r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ba(n,this.h|t.h)},$r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ba(n,this.h^t.h)},Da.prototype.createWebChannel=Da.prototype.g,La.prototype.send=La.prototype.u,La.prototype.open=La.prototype.m,La.prototype.close=La.prototype.close,Us.NO_ERROR=0,Us.TIMEOUT=8,Us.HTTP_ERROR=6,Fs.COMPLETE="complete",js.EventType=$s,$s.OPEN="a",$s.CLOSE="b",$s.ERROR="c",$s.MESSAGE="d",is.prototype.listen=is.prototype.O,Yo.prototype.listenOnce=Yo.prototype.P,Yo.prototype.getLastError=Yo.prototype.Sa,Yo.prototype.getLastErrorCode=Yo.prototype.Ia,Yo.prototype.getStatus=Yo.prototype.da,Yo.prototype.getResponseJson=Yo.prototype.Wa,Yo.prototype.getResponseText=Yo.prototype.ja,Yo.prototype.send=Yo.prototype.ha,Yo.prototype.setWithCredentials=Yo.prototype.Oa,Ua.prototype.digest=Ua.prototype.l,Ua.prototype.reset=Ua.prototype.reset,Ua.prototype.update=Ua.prototype.j,Ba.prototype.add=Ba.prototype.add,Ba.prototype.multiply=Ba.prototype.R,Ba.prototype.modulo=Ba.prototype.gb,Ba.prototype.compare=Ba.prototype.X,Ba.prototype.toNumber=Ba.prototype.ea,Ba.prototype.toString=Ba.prototype.toString,Ba.prototype.getBits=Ba.prototype.D,Ba.fromNumber=qa,Ba.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return Qa(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=qa(Math.pow(n,8)),i=za,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=qa(Math.pow(n,o)),i=i.R(o).add(qa(a))):i=(i=i.R(r)).add(qa(a))}return i};var nc=Hr.createWebChannelTransport=function(){return new Da},rc=Hr.getStatEventTarget=function(){return Ns()},ic=Hr.ErrorCode=Us,sc=Hr.EventType=Fs,oc=Hr.Event=ks,ac=Hr.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},cc=Hr.FetchXmlHttpFactory=Ho,uc=Hr.WebChannel=js,lc=Hr.XhrIo=Yo,hc=Hr.Md5=Ua,dc=Hr.Integer=Ba;
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
class fc{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}fc.UNAUTHENTICATED=new fc(null),fc.GOOGLE_CREDENTIALS=new fc("google-credentials-uid"),fc.FIRST_PARTY=new fc("first-party-uid"),fc.MOCK_USER=new fc("mock-user");
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
let pc="9.22.0";
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
 */const gc=new at("@firebase/firestore");function mc(){return gc.logLevel}function yc(t,...e){if(gc.logLevel<=et.DEBUG){const n=e.map(bc);gc.debug(`Firestore (${pc}): ${t}`,...n)}}function vc(t,...e){if(gc.logLevel<=et.ERROR){const n=e.map(bc);gc.error(`Firestore (${pc}): ${t}`,...n)}}function wc(t,...e){if(gc.logLevel<=et.WARN){const n=e.map(bc);gc.warn(`Firestore (${pc}): ${t}`,...n)}}function bc(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */var e}
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
 */function Ec(t="Unexpected state"){const e=`FIRESTORE (${pc}) INTERNAL ASSERTION FAILED: `+t;throw vc(e),new Error(e)}function Ic(t,e){t||Ec()}function _c(t,e){return t}
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
 */const Tc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Sc extends F{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Cc{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class Ac{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class kc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(fc.UNAUTHENTICATED)))}shutdown(){}}class Rc{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class Nc{start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Cc;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Cc,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{yc("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(yc("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Cc)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(yc("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ic("string"==typeof e.accessToken),new Ac(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ic(null===t||"string"==typeof t),new fc(t)}constructor(t){this.t=t,this.currentUser=fc.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Oc{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=fc.FIRST_PARTY,this.g=new Map}}class Dc{getToken(){return Promise.resolve(new Oc(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(fc.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.h=t,this.l=e,this.m=n}}class Lc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pc{start(t,e){const n=t=>{null!=t.error&&yc("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,yc("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{yc("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?r(t):yc("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ic("string"==typeof t.token),this.T=t.token,new Lc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
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
function xc(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class Mc{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=xc(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function Uc(t,e){return t<e?-1:t>e?1:0}function Fc(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
class Bc{static now(){return Bc.fromMillis(Date.now())}static fromDate(t){return Bc.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Bc(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Uc(this.nanoseconds,t.nanoseconds):Uc(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Sc(Tc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Sc(Tc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Sc(Tc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Sc(Tc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
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
 */class Vc{static fromTimestamp(t){return new Vc(t)}static min(){return new Vc(new Bc(0,0))}static max(){return new Vc(new Bc(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
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
 */class jc{get length(){return this.len}isEqual(t){return 0===jc.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof jc?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&Ec(),void 0===n?n=t.length-e:n>t.length-e&&Ec(),this.segments=t,this.offset=e,this.len=n}}class qc extends jc{construct(t,e,n){return new qc(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Sc(Tc.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new qc(e)}static emptyPath(){return new qc([])}}const $c=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zc extends jc{construct(t,e,n){return new zc(t,e,n)}static isValidIdentifier(t){return $c.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zc.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new zc(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Sc(Tc.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Sc(Tc.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Sc(Tc.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Sc(Tc.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new zc(e)}static emptyPath(){return new zc([])}}
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
 */class Hc{static fromPath(t){return new Hc(qc.fromString(t))}static fromName(t){return new Hc(qc.fromString(t).popFirst(5))}static empty(){return new Hc(qc.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===qc.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return qc.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Hc(new qc(t.slice()))}constructor(t){this.path=t}}
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
 */class Kc{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Kc.UNKNOWN_ID=-1;function Gc(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Vc.fromTimestamp(1e9===r?new Bc(n+1,0):new Bc(n,r));return new Qc(i,Hc.empty(),e)}function Wc(t){return new Qc(t.readTime,t.key,-1)}class Qc{static min(){return new Qc(Vc.min(),Hc.empty(),-1)}static max(){return new Qc(Vc.max(),Hc.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function Jc(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Hc.comparator(t.documentKey,e.documentKey),0!==n?n:Uc(t.largestBatchId,e.largestBatchId))}
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
 */const Xc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yc{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
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
 */async function Zc(t){if(t.code!==Tc.FAILED_PRECONDITION||t.message!==Xc)throw t;yc("LocalStore","Unexpectedly lost primary lease")}
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
 */class tu{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ec(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new tu(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof tu?e:tu.resolve(e)}catch(t){return tu.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):tu.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):tu.reject(e)}static resolve(t){return new tu(((e,n)=>{e(t)}))}static reject(t){return new tu(((e,n)=>{n(t)}))}static waitFor(t){return new tu(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=tu.resolve(!1);for(const n of t)e=e.next((t=>t?tu.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new tu(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new tu(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
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
 */function eu(t){return"IndexedDbTransactionError"===t.name}
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
class nu{ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}}function ru(t){return null==t}function iu(t){return 0===t&&1/t==-1/0}function su(t){return"number"==typeof t&&Number.isInteger(t)&&!iu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */nu.ct=-1;const ou=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],au=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],cu=au;
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
function uu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function lu(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class du{insert(t,e){return new du(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pu.BLACK,null,null))}remove(t){return new du(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pu.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fu(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fu(this.root,t,this.comparator,!1)}getReverseIterator(){return new fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fu(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||pu.EMPTY}}class fu{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class pu{copy(t,e,n,r,i){return new pu(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return pu.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return pu.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pu.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ec();if(this.right.isRed())throw Ec();const t=this.left.check();if(t!==this.right.check())throw Ec();return t+(this.isRed()?0:1)}constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:pu.RED,this.left=null!=r?r:pu.EMPTY,this.right=null!=i?i:pu.EMPTY,this.size=this.left.size+1+this.right.size}}pu.EMPTY=null,pu.RED=!0,pu.BLACK=!1,pu.EMPTY=new class{get key(){throw Ec()}get value(){throw Ec()}get color(){throw Ec()}get left(){throw Ec()}get right(){throw Ec()}copy(t,e,n,r,i){return this}insert(t,e,n){return new pu(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class gu{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new mu(this.data.getIterator())}getIteratorFrom(t){return new mu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof gu))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new gu(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new du(this.comparator)}}class mu{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
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
class yu{static empty(){return new yu([])}unionWith(t){let e=new gu(zc.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new yu(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Fc(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(zc.comparator)}}
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
 */class vu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */let wu=Symbol.iterator;
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
 */class bu{static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new vu("Invalid base64 string: "+t):t}}(t);return new bu(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new bu(e)}[wu](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Uc(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}bu.EMPTY_BYTE_STRING=new bu("");const Eu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Iu(t){if(Ic(!!t),"string"==typeof t){let e=0;const n=Eu.exec(t);if(Ic(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_u(t.seconds),nanos:_u(t.nanos)}}function _u(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Tu(t){return"string"==typeof t?bu.fromBase64String(t):bu.fromUint8Array(t)}
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
 */function Su(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Cu(t){const e=t.mapValue.fields.__previous_value__;return Su(e)?Cu(e):e}function Au(t){const e=Iu(t.mapValue.fields.__local_write_time__.timestampValue);return new Bc(e.seconds,e.nanos)}
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
 */class ku{constructor(t,e,n,r,i,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Ru{static empty(){return new Ru("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ru&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
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
 */const Nu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ou(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Su(t)?4:Hu(t)?9007199254740991:10:Ec()}function Du(t,e){if(t===e)return!0;const n=Ou(t);if(n!==Ou(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Au(t).isEqual(Au(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Iu(t.timestampValue),r=Iu(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,Tu(t.bytesValue).isEqual(Tu(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return _u(t.geoPointValue.latitude)===_u(e.geoPointValue.latitude)&&_u(t.geoPointValue.longitude)===_u(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return _u(t.integerValue)===_u(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=_u(t.doubleValue),r=_u(e.doubleValue);return n===r?iu(n)===iu(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Fc(t.arrayValue.values||[],e.arrayValue.values||[],Du);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(uu(n)!==uu(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!Du(n[t],r[t])))return!1;return!0}(t,e);default:return Ec()}var r}function Lu(t,e){return void 0!==(t.values||[]).find((t=>Du(t,e)))}function Pu(t,e){if(t===e)return 0;const n=Ou(t),r=Ou(e);if(n!==r)return Uc(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Uc(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=_u(t.integerValue||t.doubleValue),r=_u(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return xu(t.timestampValue,e.timestampValue);case 4:return xu(Au(t),Au(e));case 5:return Uc(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Tu(t),r=Tu(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=Uc(n[t],r[t]);if(0!==e)return e}return Uc(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Uc(_u(t.latitude),_u(e.latitude));return 0!==n?n:Uc(_u(t.longitude),_u(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=Pu(n[t],r[t]);if(e)return e}return Uc(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Nu.mapValue&&e===Nu.mapValue)return 0;if(t===Nu.mapValue)return 1;if(e===Nu.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=Uc(r[t],s[t]);if(0!==e)return e;const o=Pu(n[r[t]],i[s[t]]);if(0!==o)return o}return Uc(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Ec()}}function xu(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Uc(t,e);const n=Iu(t),r=Iu(e),i=Uc(n.seconds,r.seconds);return 0!==i?i:Uc(n.nanos,r.nanos)}function Mu(t){return Uu(t)}function Uu(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Iu(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Tu(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Hc.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Uu(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Uu(t.fields[i])}`;return n+"}"}(t.mapValue):Ec()}function Fu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bu(t){return!!t&&"integerValue"in t}function Vu(t){return!!t&&"arrayValue"in t}function ju(t){return!!t&&"nullValue"in t}function qu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $u(t){return!!t&&"mapValue"in t}function zu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return lu(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=zu(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zu(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Hu(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Ku{static empty(){return new Ku({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!$u(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=zu(e)}setAll(t){let e=zc.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=zu(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());$u(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Du(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];$u(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){lu(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Ku(zu(this.value))}constructor(t){this.value=t}}function Gu(t){const e=[];return lu(t.fields,((t,n)=>{const r=new zc([t]);if($u(n)){const t=Gu(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new yu(e)
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
 */}class Wu{static newInvalidDocument(t){return new Wu(t,0,Vc.min(),Vc.min(),Vc.min(),Ku.empty(),0)}static newFoundDocument(t,e,n,r){return new Wu(t,1,e,Vc.min(),n,r,0)}static newNoDocument(t,e){return new Wu(t,2,e,Vc.min(),Vc.min(),Ku.empty(),0)}static newUnknownDocument(t,e){return new Wu(t,3,e,Vc.min(),Vc.min(),Ku.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Vc.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ku.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ku.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Vc.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Wu&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Wu(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}}
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
 */class Qu{constructor(t,e){this.position=t,this.inclusive=e}}function Ju(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Hc.comparator(Hc.fromName(o.referenceValue),n.key):Pu(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Xu(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Du(t.position[n],e.position[n]))return!1;return!0}
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
 */class Yu{constructor(t,e="asc"){this.field=t,this.dir=e}}function Zu(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class tl{}class el extends tl{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new ul(t,e,n):"array-contains"===e?new fl(t,n):"in"===e?new pl(t,n):"not-in"===e?new gl(t,n):"array-contains-any"===e?new ml(t,n):new el(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new ll(t,n):new hl(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Pu(e,this.value)):null!==e&&Ou(this.value)===Ou(e)&&this.matchesComparison(Pu(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ec()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class nl extends tl{static create(t,e){return new nl(t,e)}matches(t){return rl(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft((t=>t.isInequality()));return null!==t?t.field:null}ft(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}}function rl(t){return"and"===t.op}function il(t){return sl(t)&&rl(t)}function sl(t){for(const e of t.filters)if(e instanceof nl)return!1;return!0}function ol(t){if(t instanceof el)return t.field.canonicalString()+t.op.toString()+Mu(t.value);if(il(t))return t.filters.map((t=>ol(t))).join(",");{const e=t.filters.map((t=>ol(t))).join(",");return`${t.op}(${e})`}}function al(t,e){return t instanceof el?(n=t,(r=e)instanceof el&&n.op===r.op&&n.field.isEqual(r.field)&&Du(n.value,r.value)):t instanceof nl?function(t,e){return e instanceof nl&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&al(n,e.filters[r])),!0)}(t,e):void Ec();var n,r}function cl(t){return t instanceof el?`${(e=t).field.canonicalString()} ${e.op} ${Mu(e.value)}`:t instanceof nl?function(t){return t.op.toString()+" {"+t.getFilters().map(cl).join(" ,")+"}"}(t):"Filter";var e}class ul extends el{matches(t){const e=Hc.comparator(t.key,this.key);return this.matchesComparison(e)}constructor(t,e,n){super(t,e,n),this.key=Hc.fromName(n.referenceValue)}}class ll extends el{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=dl("in",e)}}class hl extends el{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=dl("not-in",e)}}function dl(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Hc.fromName(t.referenceValue)))}class fl extends el{matches(t){const e=t.data.field(this.field);return Vu(e)&&Lu(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class pl extends el{matches(t){const e=t.data.field(this.field);return null!==e&&Lu(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class gl extends el{matches(t){if(Lu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Lu(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class ml extends el{matches(t){const e=t.data.field(this.field);return!(!Vu(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Lu(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}
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
 */class yl{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.dt=null}}function vl(t,e=null,n=[],r=[],i=null,s=null,o=null){return new yl(t,e,n,r,i,s,o)}function wl(t){const e=_c(t);if(null===e.dt){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ol(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),ru(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Mu(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Mu(t))).join(",")),e.dt=t}return e.dt}function bl(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zu(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!al(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xu(t.startAt,e.startAt)&&Xu(t.endAt,e.endAt)}function El(t){return Hc.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class Il{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function _l(t,e,n,r,i,s,o,a){return new Il(t,e,n,r,i,s,o,a)}function Tl(t){return new Il(t)}function Sl(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Cl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Al(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function kl(t){return null!==t.collectionGroup}function Rl(t){const e=_c(t);if(null===e.wt){e.wt=[];const t=Al(e),n=Cl(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new Yu(t)),e.wt.push(new Yu(zc.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Yu(zc.keyField(),t))}}}return e.wt}function Nl(t){const e=_c(t);if(!e._t)if("F"===e.limitType)e._t=vl(e.path,e.collectionGroup,Rl(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Rl(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Yu(n.field,e))}const n=e.endAt?new Qu(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Qu(e.startAt.position,e.startAt.inclusive):null;e._t=vl(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function Ol(t,e){e.getFirstInequalityField(),Al(t);const n=t.filters.concat([e]);return new Il(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Dl(t,e,n){return new Il(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ll(t,e){return bl(Nl(t),Nl(e))&&t.limitType===e.limitType}function Pl(t){return`${wl(Nl(t))}|lt:${t.limitType}`}function xl(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>cl(t))).join(", ")}]`),ru(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Mu(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Mu(t))).join(",")),`Target(${e})`}(Nl(t))}; limitType=${t.limitType})`}function Ml(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Hc.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Rl(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!function(t,e,n){const r=Ju(t,e,n);return t.inclusive?r<=0:r<0}(n.startAt,Rl(n),r)||n.endAt&&!function(t,e,n){const r=Ju(t,e,n);return t.inclusive?r>=0:r>0}(n.endAt,Rl(n),r)));var n,r}function Ul(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fl(t){return(e,n)=>{let r=!1;for(const i of Rl(t)){const t=Bl(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Bl(t,e,n){const r=t.field.isKeyField()?Hc.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Pu(r,i):Ec()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ec()}}
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
 */class Vl{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){lu(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return hu(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
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
 */const jl=new du(Hc.comparator);function ql(){return jl}const $l=new du(Hc.comparator);function zl(...t){let e=$l;for(const n of t)e=e.insert(n.key,n);return e}function Hl(t){let e=$l;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Kl(){return Wl()}function Gl(){return Wl()}function Wl(){return new Vl((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ql=new du(Hc.comparator),Jl=new gu(Hc.comparator);function Xl(...t){let e=Jl;for(const n of t)e=e.add(n);return e}const Yl=new gu(Uc);function Zl(){return Yl}
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
 */function th(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:iu(e)?"-0":e}}function eh(t){return{integerValue:""+t}}function nh(t,e){return su(e)?eh(e):th(t,e)}
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
 */class rh{constructor(){this._=void 0}}function ih(t,e,n){return t instanceof ah?ch(t,e):t instanceof uh?lh(t,e):n}function sh(t,e){var n,r;return t instanceof hh?Bu(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null}class oh extends rh{}class ah extends rh{constructor(t){super(),this.elements=t}}function ch(t,e){const n=fh(e);for(const e of t.elements)n.some((t=>Du(t,e)))||n.push(e);return{arrayValue:{values:n}}}class uh extends rh{constructor(t){super(),this.elements=t}}function lh(t,e){let n=fh(e);for(const e of t.elements)n=n.filter((t=>!Du(t,e)));return{arrayValue:{values:n}}}class hh extends rh{constructor(t,e){super(),this.serializer=t,this.gt=e}}function dh(t){return _u(t.integerValue||t.doubleValue)}function fh(t){return Vu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class ph{constructor(t,e){this.version=t,this.transformResults=e}}class gh{static none(){return new gh}static exists(t){return new gh(void 0,t)}static updateTime(t){return new gh(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function mh(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class yh{}function vh(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new kh(t.key,gh.none()):new _h(t.key,t.data,gh.none());{const n=t.data,r=Ku.empty();let i=new gu(zc.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Th(t.key,r,new yu(i.toArray()),gh.none())}}function wh(t,e,n){var r;t instanceof _h?function(t,e,n){const r=t.value.clone(),i=Ch(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Th?function(t,e,n){if(!mh(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ch(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Sh(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function bh(t,e,n,r){return t instanceof _h?function(t,e,n,r){if(!mh(t.precondition,e))return n;const i=t.value.clone(),s=Ah(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Th?function(t,e,n,r){if(!mh(t.precondition,e))return n;const i=Ah(t.fieldTransforms,r,e),s=e.data;return s.setAll(Sh(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):(i=e,s=n,mh(t.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function Eh(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=sh(r.transform,t||null);null!=i&&(null===n&&(n=Ku.empty()),n.set(r.field,i))}return n||null}function Ih(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Fc(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof ah&&r instanceof ah||n instanceof uh&&r instanceof uh?Fc(n.elements,r.elements,Du):n instanceof hh&&r instanceof hh?Du(n.gt,r.gt):n instanceof oh&&r instanceof oh);var n,r}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,r}class _h extends yh{getFieldMask(){return null}constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Th extends yh{getFieldMask(){return this.fieldMask}constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Sh(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Ch(t,e,n){const r=new Map;Ic(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ih(o,a,n[i]))}return r}function Ah(t,e,n){const r=new Map;for(const a of t){const t=a.transform,c=n.data.field(a.field);r.set(a.field,(s=c,o=e,(i=t)instanceof oh?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Su(e)&&(e=Cu(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):i instanceof ah?ch(i,s):i instanceof uh?lh(i,s):function(t,e){const n=sh(t,e),r=dh(n)+dh(t.gt);return Bu(n)&&Bu(t.gt)?eh(r):th(t.serializer,r)}(i,s)))}var i,s,o;return r}class kh extends yh{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Rh extends yh{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */class Nh{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&wh(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=bh(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=bh(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Gl();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=vh(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Vc.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Xl())}isEqual(t){return this.batchId===t.batchId&&Fc(this.mutations,t.mutations,((t,e)=>Ih(t,e)))&&Fc(this.baseMutations,t.baseMutations,((t,e)=>Ih(t,e)))}constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}}class Oh{static from(t,e,n){Ic(t.mutations.length===n.length);let r=Ql;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new Oh(t,e,n,r)}constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}}
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
 */class Dh{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
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
class Lh{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
 */var Ph,xh;function Mh(t){switch(t){default:return Ec();case Tc.CANCELLED:case Tc.UNKNOWN:case Tc.DEADLINE_EXCEEDED:case Tc.RESOURCE_EXHAUSTED:case Tc.INTERNAL:case Tc.UNAVAILABLE:case Tc.UNAUTHENTICATED:return!1;case Tc.INVALID_ARGUMENT:case Tc.NOT_FOUND:case Tc.ALREADY_EXISTS:case Tc.PERMISSION_DENIED:case Tc.FAILED_PRECONDITION:case Tc.ABORTED:case Tc.OUT_OF_RANGE:case Tc.UNIMPLEMENTED:case Tc.DATA_LOSS:return!0}}function Uh(t){if(void 0===t)return vc("GRPC error has no .code"),Tc.UNKNOWN;switch(t){case Ph.OK:return Tc.OK;case Ph.CANCELLED:return Tc.CANCELLED;case Ph.UNKNOWN:return Tc.UNKNOWN;case Ph.DEADLINE_EXCEEDED:return Tc.DEADLINE_EXCEEDED;case Ph.RESOURCE_EXHAUSTED:return Tc.RESOURCE_EXHAUSTED;case Ph.INTERNAL:return Tc.INTERNAL;case Ph.UNAVAILABLE:return Tc.UNAVAILABLE;case Ph.UNAUTHENTICATED:return Tc.UNAUTHENTICATED;case Ph.INVALID_ARGUMENT:return Tc.INVALID_ARGUMENT;case Ph.NOT_FOUND:return Tc.NOT_FOUND;case Ph.ALREADY_EXISTS:return Tc.ALREADY_EXISTS;case Ph.PERMISSION_DENIED:return Tc.PERMISSION_DENIED;case Ph.FAILED_PRECONDITION:return Tc.FAILED_PRECONDITION;case Ph.ABORTED:return Tc.ABORTED;case Ph.OUT_OF_RANGE:return Tc.OUT_OF_RANGE;case Ph.UNIMPLEMENTED:return Tc.UNIMPLEMENTED;case Ph.DATA_LOSS:return Tc.DATA_LOSS;default:return Ec()}}(xh=Ph||(Ph={}))[xh.OK=0]="OK",xh[xh.CANCELLED=1]="CANCELLED",xh[xh.UNKNOWN=2]="UNKNOWN",xh[xh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xh[xh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xh[xh.NOT_FOUND=5]="NOT_FOUND",xh[xh.ALREADY_EXISTS=6]="ALREADY_EXISTS",xh[xh.PERMISSION_DENIED=7]="PERMISSION_DENIED",xh[xh.UNAUTHENTICATED=16]="UNAUTHENTICATED",xh[xh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xh[xh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xh[xh.ABORTED=10]="ABORTED",xh[xh.OUT_OF_RANGE=11]="OUT_OF_RANGE",xh[xh.UNIMPLEMENTED=12]="UNIMPLEMENTED",xh[xh.INTERNAL=13]="INTERNAL",xh[xh.UNAVAILABLE=14]="UNAVAILABLE",xh[xh.DATA_LOSS=15]="DATA_LOSS";
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
class Fh{static get instance(){return Bh}static getOrCreateInstance(){return null===Bh&&(Bh=new Fh),Bh}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}constructor(){this.onExistenceFilterMismatchCallbacks=new Map}}let Bh=null;
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
 */function Vh(){return new TextEncoder}
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
 */const jh=new dc([4294967295,4294967295],0);function qh(t){const e=Vh().encode(t),n=new hc;return n.update(e),new Uint8Array(n.digest())}function $h(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new dc([n,r],0),new dc([i,s],0)]}class zh{Et(t,e,n){let r=t.add(e.multiply(dc.fromNumber(n)));return 1===r.compare(jh)&&(r=new dc([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}vt(t){if(0===this.It)return!1;const e=qh(t),[n,r]=$h(e);for(let t=0;t<this.hashCount;t++){const e=this.Et(n,r,t);if(!this.At(e))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new zh(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.It)return;const e=qh(t),[n,r]=$h(e);for(let t=0;t<this.hashCount;t++){const e=this.Et(n,r,t);this.Rt(e)}}Rt(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Hh(`Invalid padding: ${e}`);if(n<0)throw new Hh(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Hh(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Hh(`Invalid padding when bitmap length is 0: ${e}`);this.It=8*t.length-e,this.Tt=dc.fromNumber(this.It)}}class Hh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class Kh{static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Gh.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Kh(Vc.min(),r,new du(Uc),ql(),Xl())}constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class Gh{static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Gh(n,e,Xl(),Xl(),Xl())}constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}
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
 */class Wh{constructor(t,e,n,r){this.Pt=t,this.removedTargetIds=e,this.key=n,this.bt=r}}class Qh{constructor(t,e){this.targetId=t,this.Vt=e}}class Jh{constructor(t,e,n=bu.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Xh{get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=Xl(),e=Xl(),n=Xl();return this.Dt.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Ec()}})),new Gh(this.Ct,this.xt,t,e,n)}Ft(){this.Nt=!1,this.Dt=td()}Bt(t,e){this.Nt=!0,this.Dt=this.Dt.insert(t,e)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}constructor(){this.St=0,this.Dt=td(),this.Ct=bu.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}}class Yh{Ht(t){for(const e of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(e,t.bt):this.Yt(e,t.key,t.bt);for(const e of t.removedTargetIds)this.Yt(e,t.key,t.bt)}Xt(t){this.forEachTarget(t,(e=>{const n=this.Zt(e);switch(t.state){case 0:this.te(e)&&n.$t(t.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(t.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(e);break;case 3:this.te(e)&&(n.Kt(),n.$t(t.resumeToken));break;case 4:this.te(e)&&(this.ee(e),n.$t(t.resumeToken));break;default:Ec()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qt.forEach(((t,n)=>{this.te(n)&&e(n)}))}ne(t){var e;const n=t.targetId,r=t.Vt.count,i=this.se(n);if(i){const s=i.target;if(El(s))if(0===r){const t=new Hc(s.path);this.Yt(n,t,Wu.newNoDocument(t,Vc.min()))}else Ic(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(t,i);if(0!==r){this.ee(n);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,t)}null===(e=Fh.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n){var r,i,s,o,a,c;const u={localCacheCount:e,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===t,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}(r,i,t.Vt))}}}}re(t,e){const{unchangedNames:n,count:r}=t.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=Tu(i).toUint8Array()}catch(t){if(t instanceof vu)return wc("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw t}try{c=new zh(a,s,o)}catch(t){return wc(t instanceof Hh?"BloomFilter error: ":"Applying bloom filter failed: ",t),1}return 0===c.It?1:r!==e-this.oe(t.targetId,c)?2:0}oe(t,e){const n=this.Gt.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.vt(s)||(this.Yt(t,n,null),r++)})),r}ce(t){const e=new Map;this.Qt.forEach(((n,r)=>{const i=this.se(r);if(i){if(n.current&&El(i.target)){const e=new Hc(i.target.path);null!==this.jt.get(e)||this.ae(r,e)||this.Yt(r,e,Wu.newNoDocument(e,t))}n.Mt&&(e.set(r,n.Ot()),n.Ft())}}));let n=Xl();this.zt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.se(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.jt.forEach(((e,n)=>n.setReadTime(t)));const r=new Kh(t,e,this.Wt,this.jt,n);return this.jt=ql(),this.zt=Zh(),this.Wt=new du(Uc),r}Jt(t,e){if(!this.te(t))return;const n=this.ae(t,e.key)?2:0;this.Zt(t).Bt(e.key,n),this.jt=this.jt.insert(e.key,e),this.zt=this.zt.insert(e.key,this.he(e.key).add(t))}Yt(t,e,n){if(!this.te(t))return;const r=this.Zt(t);this.ae(t,e)?r.Bt(e,1):r.Lt(e),this.zt=this.zt.insert(e,this.he(e).delete(t)),n&&(this.jt=this.jt.insert(e,n))}removeTarget(t){this.Qt.delete(t)}ie(t){const e=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let e=this.Qt.get(t);return e||(e=new Xh,this.Qt.set(t,e)),e}he(t){let e=this.zt.get(t);return e||(e=new gu(Uc),this.zt=this.zt.insert(t,e)),e}te(t){const e=null!==this.se(t);return e||yc("WatchChangeAggregator","Detected inactive target",t),e}se(t){const e=this.Qt.get(t);return e&&e.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new Xh),this.Gt.getRemoteKeysForTarget(t).forEach((e=>{this.Yt(t,e,null)}))}ae(t,e){return this.Gt.getRemoteKeysForTarget(t).has(e)}constructor(t){this.Gt=t,this.Qt=new Map,this.jt=ql(),this.zt=Zh(),this.Wt=new du(Uc)}}function Zh(){return new du(Hc.comparator)}function td(){return new du(Hc.comparator)}const ed={asc:"ASCENDING",desc:"DESCENDING"},nd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rd={and:"AND",or:"OR"};class id{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function sd(t,e){return t.useProto3Json||ru(e)?e:{value:e}}function od(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ad(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function cd(t,e){return od(t,e.toTimestamp())}function ud(t){return Ic(!!t),Vc.fromTimestamp(function(t){const e=Iu(t);return new Bc(e.seconds,e.nanos)}(t))}function ld(t,e){return(n=t,new qc(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function hd(t){const e=qc.fromString(t);return Ic(Nd(e)),e}function dd(t,e){return ld(t.databaseId,e.path)}function fd(t,e){const n=hd(e);if(n.get(1)!==t.databaseId.projectId)throw new Sc(Tc.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Sc(Tc.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Hc(yd(n))}function pd(t,e){return ld(t.databaseId,e)}function gd(t){const e=hd(t);return 4===e.length?qc.emptyPath():yd(e)}function md(t){return new qc(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yd(t){return Ic(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function vd(t,e,n){return{name:dd(t,e),fields:n.value.mapValue.fields}}function wd(t,e){let n;if(e instanceof _h)n={update:vd(t,e.key,e.value)};else if(e instanceof kh)n={delete:dd(t,e.key)};else if(e instanceof Th)n={update:vd(t,e.key,e.data),updateMask:Rd(e.fieldMask)};else{if(!(e instanceof Rh))return Ec();n={verify:dd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof oh)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ah)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof uh)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof hh)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw Ec()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:cd(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Ec())),n;var r,i}function bd(t,e){return{documents:[pd(t,e.path)]}}function Ed(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=pd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=pd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return kd(nl.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:Cd((e=t).field),direction:Td(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=sd(t,e.limit);var a,c;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt={before:!(c=e.endAt).inclusive,values:c.position}),n}function Id(t){let e=gd(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ic(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=_d(t);return e instanceof nl&&il(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new Yu(Ad((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ru(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Qu(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Qu(n,e)}(n.endAt)),_l(e,i,o,s,a,"F",c,u)}function _d(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ad(t.unaryFilter.field);return el.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ad(t.unaryFilter.field);return el.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ad(t.unaryFilter.field);return el.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ad(t.unaryFilter.field);return el.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ec()}}(t):void 0!==t.fieldFilter?(n=t,el.create(Ad(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ec()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,nl.create(e.compositeFilter.filters.map((t=>_d(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Ec()}}(e.compositeFilter.op))):Ec();var e,n}function Td(t){return ed[t]}function Sd(t){return nd[t]}function Cd(t){return{fieldPath:t.canonicalString()}}function Ad(t){return zc.fromServerFormat(t.fieldPath)}function kd(t){return t instanceof el?function(t){if("=="===t.op){if(qu(t.value))return{unaryFilter:{field:Cd(t.field),op:"IS_NAN"}};if(ju(t.value))return{unaryFilter:{field:Cd(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(qu(t.value))return{unaryFilter:{field:Cd(t.field),op:"IS_NOT_NAN"}};if(ju(t.value))return{unaryFilter:{field:Cd(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cd(t.field),op:Sd(t.op),value:t.value}}}(t):t instanceof nl?function(t){const e=t.getFilters().map((t=>kd(t)));return 1===e.length?e[0]:{compositeFilter:{op:(n=t.op,rd[n]),filters:e}};var n}(t):Ec()}function Rd(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Nd(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class Od{withSequenceNumber(t){return new Od(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Od(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Od(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Od(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}constructor(t,e,n,r,i=Vc.min(),s=Vc.min(),o=bu.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}}
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
 */class Dd{constructor(t){this.fe=t}}function Ld(t){const e=Id({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Dl(e,e.limit,"L"):e}
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
 */class Pd{_e(t,e){this.me(t,e),e.ge()}me(t,e){if("nullValue"in t)this.ye(e,5);else if("booleanValue"in t)this.ye(e,10),e.pe(t.booleanValue?1:0);else if("integerValue"in t)this.ye(e,15),e.pe(_u(t.integerValue));else if("doubleValue"in t){const n=_u(t.doubleValue);isNaN(n)?this.ye(e,13):(this.ye(e,15),iu(n)?e.pe(0):e.pe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ye(e,20),"string"==typeof n?e.Ie(n):(e.Ie(`${n.seconds||""}`),e.pe(n.nanos||0))}else if("stringValue"in t)this.Te(t.stringValue,e),this.Ee(e);else if("bytesValue"in t)this.ye(e,30),e.Ae(Tu(t.bytesValue)),this.Ee(e);else if("referenceValue"in t)this.ve(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ye(e,45),e.pe(n.latitude||0),e.pe(n.longitude||0)}else"mapValue"in t?Hu(t)?this.ye(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Ee(e)):"arrayValue"in t?(this.Pe(t.arrayValue,e),this.Ee(e)):Ec()}Te(t,e){this.ye(e,25),this.be(t,e)}be(t,e){e.Ie(t)}Re(t,e){const n=t.fields||{};this.ye(e,55);for(const t of Object.keys(n))this.Te(t,e),this.me(n[t],e)}Pe(t,e){const n=t.values||[];this.ye(e,50);for(const t of n)this.me(t,e)}ve(t,e){this.ye(e,37),Hc.fromName(t).path.forEach((t=>{this.ye(e,60),this.be(t,e)}))}ye(t,e){t.pe(e)}Ee(t){t.pe(2)}constructor(){}}Pd.Ve=new Pd;
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
class xd{addToCollectionParentIndex(t,e){return this.rn.add(e),tu.resolve()}getCollectionParents(t,e){return tu.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){return tu.resolve()}deleteFieldIndex(t,e){return tu.resolve()}getDocumentsMatchingTarget(t,e){return tu.resolve(null)}getIndexType(t,e){return tu.resolve(0)}getFieldIndexes(t,e){return tu.resolve([])}getNextCollectionGroupToUpdate(t){return tu.resolve(null)}getMinOffset(t,e){return tu.resolve(Qc.min())}getMinOffsetFromCollectionGroup(t,e){return tu.resolve(Qc.min())}updateCollectionGroup(t,e,n){return tu.resolve()}updateIndexEntries(t,e){return tu.resolve()}constructor(){this.rn=new Md}}class Md{add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new gu(qc.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new gu(qc.comparator)).toArray()}constructor(){this.index={}}}
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
 */new Uint8Array(0);class Ud{static withCacheSize(t){return new Ud(t,Ud.DEFAULT_COLLECTION_PERCENTILE,Ud.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
 */Ud.DEFAULT_COLLECTION_PERCENTILE=10,Ud.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ud.DEFAULT=new Ud(41943040,Ud.DEFAULT_COLLECTION_PERCENTILE,Ud.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ud.DISABLED=new Ud(-1,0,0);
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
class Fd{next(){return this.Nn+=2,this.Nn}static kn(){return new Fd(0)}static Mn(){return new Fd(-1)}constructor(t){this.Nn=t}}
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
class Bd{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Wu.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?tu.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new Vl((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
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
class Vd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class jd{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&bh(n.mutation,t,yu.empty(),Bc.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Xl()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Xl()){const r=Kl();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=zl();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Kl();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Xl())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=ql();const s=Wl(),o=Wl();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Th)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),bh(o.mutation,e,o.mutation.getFieldMask(),Bc.now())):s.set(e.key,yu.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Vd(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Wl();let r=new du(((t,e)=>t-e)),i=Xl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||yu.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Xl()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Gl();c.forEach((t=>{if(!i.has(t)){const r=vh(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return tu.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return r=e,Hc.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):kl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var r}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):tu.resolve(Kl());let o=-1,a=i;return s.next((e=>tu.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?tu.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Xl()))).next((t=>({batchId:o,changes:Hl(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Hc(e)).next((t=>{let e=zl();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=zl();return this.indexManager.getCollectionParents(t,r).next((s=>tu.forEach(s,(s=>{const o=(a=e,c=s.child(r),new Il(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r)))).next((t=>{r.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Wu.newInvalidDocument(r)))}));let n=zl();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&bh(s.mutation,i,yu.empty(),Bc.now()),Ml(e,i)&&(n=n.insert(t,i))})),n}))}constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}}
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
 */class qd{getBundleMetadata(t,e){return tu.resolve(this.cs.get(e))}saveBundleMetadata(t,e){var n;return this.cs.set(e.id,{id:(n=e).id,version:n.version,createTime:ud(n.createTime)}),tu.resolve()}getNamedQuery(t,e){return tu.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,{name:(n=e).name,query:Ld(n.bundledQuery),readTime:ud(n.readTime)}),tu.resolve();var n}constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}}
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
 */class $d{getOverlay(t,e){return tu.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Kl();return tu.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.we(t,e,r)})),tu.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.ls.delete(n)),tu.resolve()}getOverlaysForCollection(t,e,n){const r=Kl(),i=e.length+1,s=new Hc(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return tu.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new du(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Kl(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Kl(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return tu.resolve(o)}we(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Dh(e,n));let i=this.ls.get(e);void 0===i&&(i=Xl(),this.ls.set(e,i)),this.ls.set(e,i.add(n.key))}constructor(){this.overlays=new du(Hc.comparator),this.ls=new Map}}
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
 */class zd{isEmpty(){return this.fs.isEmpty()}addReference(t,e){const n=new Hd(t,e);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ys(new Hd(t,e))}ps(t,e){t.forEach((t=>this.removeReference(t,e)))}Is(t){const e=new Hc(new qc([])),n=new Hd(e,t),r=new Hd(e,t+1),i=[];return this.ws.forEachInRange([n,r],(t=>{this.ys(t),i.push(t.key)})),i}Ts(){this.fs.forEach((t=>this.ys(t)))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const e=new Hc(new qc([])),n=new Hd(e,t),r=new Hd(e,t+1);let i=Xl();return this.ws.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Hd(t,0),n=this.fs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.fs=new gu(Hd.ds),this.ws=new gu(Hd._s)}}class Hd{static ds(t,e){return Hc.comparator(t.key,e.key)||Uc(t.As,e.As)}static _s(t,e){return Uc(t.As,e.As)||Hc.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.As=e}}
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
 */class Kd{checkEmpty(t){return tu.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Nh(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.Rs=this.Rs.add(new Hd(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return tu.resolve(s)}lookupMutationBatch(t,e){return tu.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.bs(n),i=r<0?0:r;return tu.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return tu.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(t){return tu.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Hd(e,0),r=new Hd(e,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(t=>{const e=this.Ps(t.As);i.push(e)})),tu.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new gu(Uc);return e.forEach((t=>{const e=new Hd(t,0),r=new Hd(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,r],(t=>{n=n.add(t.As)}))})),tu.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Hc.isDocumentKey(i)||(i=i.child(""));const s=new Hd(new Hc(i),0);let o=new gu(Uc);return this.Rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.As)),!0)}),s),tu.resolve(this.Vs(o))}Vs(t){const e=[];return t.forEach((t=>{const n=this.Ps(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ic(0===this.Ss(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return tu.forEach(e.mutations,(r=>{const i=new Hd(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Rs=n}))}Cn(t){}containsKey(t,e){const n=new Hd(e,0),r=this.Rs.firstAfterOrEqual(n);return tu.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,tu.resolve()}Ss(t,e){return this.bs(t)}bs(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Ps(t){const e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.vs=1,this.Rs=new gu(Hd.ds)}}
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
 */class Gd{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return tu.resolve(n?n.document.mutableCopy():Wu.newInvalidDocument(e))}getEntries(t,e){let n=ql();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Wu.newInvalidDocument(t))})),tu.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=ql();const s=e.path,o=new Hc(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Jc(Wc(o),n)<=0||(r.has(o.key)||Ml(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return tu.resolve(i)}getAllFromCollectionGroup(t,e,n,r){Ec()}Cs(t,e){return tu.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Wd(this)}getSize(t){return tu.resolve(this.size)}constructor(t){this.Ds=t,this.docs=new du(Hc.comparator),this.size=0}}class Wd extends Bd{applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.os.addEntry(t,r)):this.os.removeEntry(n)})),tu.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}constructor(t){super(),this.os=t}}
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
 */class Qd{forEachTarget(t,e){return this.xs.forEach(((t,n)=>e(n))),tu.resolve()}getLastRemoteSnapshotVersion(t){return tu.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return tu.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),tu.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ns&&(this.Ns=e),tu.resolve()}Fn(t){this.xs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ms=new Fd(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,tu.resolve()}updateTargetData(t,e){return this.Fn(e),tu.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,tu.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.xs.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),tu.waitFor(i).next((()=>r))}getTargetCount(t){return tu.resolve(this.targetCount)}getTargetData(t,e){const n=this.xs.get(e)||null;return tu.resolve(n)}addMatchingKeys(t,e,n){return this.ks.gs(e,n),tu.resolve()}removeMatchingKeys(t,e,n){this.ks.ps(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),tu.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),tu.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ks.Es(e);return tu.resolve(n)}containsKey(t,e){return tu.resolve(this.ks.containsKey(e))}constructor(t){this.persistence=t,this.xs=new Vl((t=>wl(t)),bl),this.lastRemoteSnapshotVersion=Vc.min(),this.highestTargetId=0,this.Ns=0,this.ks=new zd,this.targetCount=0,this.Ms=Fd.kn()}}
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
 */class Jd{start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new $d,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.$s[t.toKey()];return n||(n=new Kd(e,this.referenceDelegate),this.$s[t.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,n){yc("MemoryPersistence","Starting transaction:",t);const r=new Xd(this.Os.next());return this.referenceDelegate.Us(),n(r).next((t=>this.referenceDelegate.Ks(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Gs(t,e){return tu.or(Object.values(this.$s).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.$s={},this.overlays={},this.Os=new nu(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Qd(this),this.indexManager=new xd,this.remoteDocumentCache=new Gd((t=>this.referenceDelegate.Ls(t))),this.serializer=new Dd(e),this.qs=new qd(this.serializer)}}class Xd extends Yc{constructor(t){super(),this.currentSequenceNumber=t}}class Yd{static zs(t){return new Yd(t)}get Ws(){if(this.js)return this.js;throw Ec()}addReference(t,e,n){return this.Qs.addReference(n,e),this.Ws.delete(n.toString()),tu.resolve()}removeReference(t,e,n){return this.Qs.removeReference(n,e),this.Ws.add(n.toString()),tu.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),tu.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach((t=>this.Ws.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ws.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Us(){this.js=new Set}Ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return tu.forEach(this.Ws,(n=>{const r=Hc.fromPath(n);return this.Hs(t,r).next((t=>{t||e.removeEntry(r,Vc.min())}))})).next((()=>(this.js=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hs(t,e).next((t=>{t?this.Ws.delete(e.toString()):this.Ws.add(e.toString())}))}Ls(t){return 0}Hs(t,e){return tu.or([()=>tu.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}constructor(t){this.persistence=t,this.Qs=new zd,this.js=null}}
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
class Zd{static Li(t,e){let n=Xl(),r=Xl();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Zd(t,e.fromCache,n,r)}constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Fi=n,this.Bi=r}}
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
 */class tf{initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ki(t,e).next((i=>i||this.Gi(t,e,r,n))).next((n=>n||this.Qi(t,e)))}Ki(t,e){if(Sl(e))return tu.resolve(null);let n=Nl(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Dl(e,null,"F"),n=Nl(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Xl(...r);return this.Ui.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.ji(e,r);return this.zi(e,s,i,n.readTime)?this.Ki(t,Dl(e,null,"F")):this.Wi(t,s,e,n)}))))})))))}Gi(t,e,n,r){return Sl(e)||r.isEqual(Vc.min())?this.Qi(t,e):this.Ui.getDocuments(t,n).next((i=>{const s=this.ji(e,i);return this.zi(e,s,n,r)?this.Qi(t,e):(mc()<=et.DEBUG&&yc("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xl(e)),this.Wi(t,s,e,Gc(r,-1)))}))}ji(t,e){let n=new gu(Fl(t));return e.forEach(((e,r)=>{Ml(t,r)&&(n=n.add(r))})),n}zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(t,e){return mc()<=et.DEBUG&&yc("QueryEngine","Using full collection scan to execute query:",xl(e)),this.Ui.getDocumentsMatchingQuery(t,e,Qc.min())}Wi(t,e,n,r){return this.Ui.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.qi=!1}}
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
 */class ef{tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jd(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}constructor(t,e,n,r){this.persistence=t,this.Hi=e,this.serializer=r,this.Ji=new du(Uc),this.Yi=new Vl((t=>wl(t)),bl),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(n)}}function nf(t,e,n,r){return new ef(t,e,n,r)}async function rf(t,e){const n=_c(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Xl();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({er:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function sf(t){const e=_c(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Bs.getLastRemoteSnapshotVersion(t)))}function of(t,e,n){let r=Xl(),i=Xl();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=ql();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Vc.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):yc("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{nr:r,sr:i}}))}function af(t,e){const n=_c(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function cf(t,e){const n=_c(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Bs.getTargetData(t,e).next((i=>i?(r=i,tu.resolve(r)):n.Bs.allocateTargetId(t).next((i=>(r=new Od(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Bs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ji.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t}))}async function uf(t,e,n){const r=_c(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!eu(t))throw t;yc("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function lf(t,e,n){const r=_c(t);let i=Vc.min(),s=Xl();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=_c(t),i=r.Yi.get(n);return void 0!==i?tu.resolve(r.Ji.get(i)):r.Bs.getTargetData(e,n)}(r,t,Nl(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Hi.getDocumentsMatchingQuery(t,e,n?i:Vc.min(),n?s:Xl()))).next((t=>(hf(r,Ul(e),t),{documents:t,ir:s})))))}function hf(t,e,n){let r=t.Xi.get(e)||Vc.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Xi.set(e,r)}class df{lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=Zl()}}class ff{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,n){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new df,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Hr=new df,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
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
 */class pf{Yr(t){}shutdown(){}}
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
 */class gf{Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){yc("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){yc("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}}
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
 */let mf=null;function yf(){return null===mf?mf=268435456+Math.round(2147483648*Math.random()):mf++,"0x"+mf.toString(16)
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
 */}const vf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class wf{uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}constructor(t){this.ro=t.ro,this.oo=t.oo}}
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
 */class bf extends class{get po(){return!1}Io(t,e,n,r,i){const s=yf(),o=this.To(t,e);yc("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={};return this.Eo(a,r,i),this.Ao(t,o,a,n).then((e=>(yc("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw wc("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,r,i,s){return this.Io(t,e,n,r,i)}Eo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+pc,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}To(t,e){const n=vf[t];return`${this.mo}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{Ao(t,e,n,r){const i=yf();return new Promise(((s,o)=>{const a=new lc;a.setWithCredentials(!0),a.listenOnce(sc.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case ic.NO_ERROR:const e=a.getResponseJson();yc("WebChannelConnection",`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case ic.TIMEOUT:yc("WebChannelConnection",`RPC '${t}' ${i} timed out`),o(new Sc(Tc.DEADLINE_EXCEEDED,"Request time out"));break;case ic.HTTP_ERROR:const n=a.getStatus();if(yc("WebChannelConnection",`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Tc).indexOf(e)>=0?e:Tc.UNKNOWN}(e.status);o(new Sc(t,e.message))}else o(new Sc(Tc.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Sc(Tc.UNAVAILABLE,"Connection failed."));break;default:Ec()}}finally{yc("WebChannelConnection",`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);yc("WebChannelConnection",`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}Ro(t,e,n){const r=yf(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=nc(),o=rc(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new cc({})),this.Eo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");yc("WebChannelConnection",`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new wf({ro:e=>{d?yc("WebChannelConnection",`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(yc("WebChannelConnection",`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),yc("WebChannelConnection",`RPC '${t}' stream ${r} sending:`,e),l.send(e))},oo:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,uc.EventType.OPEN,(()=>{d||yc("WebChannelConnection",`RPC '${t}' stream ${r} transport opened.`)})),p(l,uc.EventType.CLOSE,(()=>{d||(d=!0,yc("WebChannelConnection",`RPC '${t}' stream ${r} transport closed`),f.wo())})),p(l,uc.EventType.ERROR,(e=>{d||(d=!0,wc("WebChannelConnection",`RPC '${t}' stream ${r} transport errored:`,e),f.wo(new Sc(Tc.UNAVAILABLE,"The operation could not be completed")))})),p(l,uc.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];Ic(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){yc("WebChannelConnection",`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Ph[t];if(void 0!==e)return Uh(e)}(e),i=o.message;void 0===n&&(n=Tc.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.wo(new Sc(n,i)),l.close()}else yc("WebChannelConnection",`RPC '${t}' stream ${r} received:`,i),f._o(i)}})),p(o,oc.STAT_EVENT,(e=>{e.stat===ac.PROXY?yc("WebChannelConnection",`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===ac.NOPROXY&&yc("WebChannelConnection",`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}}
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
 */function Ef(){return"undefined"!=typeof document?document:null}
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
 */function If(t){return new id(t,!0)}
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
 */class _f{reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,e-n);r>0&&yc("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),t()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}constructor(t,e,n=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}}
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
 */class Tf{Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,e){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==t?this.qo.reset():e&&e.code===Tc.RESOURCE_EXHAUSTED?(vc(e.toString()),vc("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===Tc.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(e)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),e=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Fo===e&&this.Zo(t,n)}),(e=>{t((()=>{const t=new Sc(Tc.UNKNOWN,"Fetching auth token failed: "+e.message);return this.tu(t)}))}))}Zo(t,e){const n=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((t=>{n((()=>this.tu(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(t){return yc("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.Fo===t?e():(yc("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,r,i,s,o,a){this.ii=t,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new _f(t,e)}}class Sf extends Tf{eu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.qo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Ec(),s=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(Ic(void 0===e||"string"==typeof e),bu.fromBase64String(e||"")):(Ic(void 0===e||e instanceof Uint8Array),bu.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?Tc.UNKNOWN:Uh(t.code);return new Sc(e,t.message||"")}(a);n=new Jh(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fd(t,r.document.name),s=ud(r.document.updateTime),o=r.document.createTime?ud(r.document.createTime):Vc.min(),a=new Ku({mapValue:{fields:r.document.fields}}),c=Wu.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Wh(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fd(t,r.document),s=r.readTime?ud(r.readTime):Vc.min(),o=Wu.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Wh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fd(t,r.document),s=r.removedTargetIds||[];n=new Wh([],s,i,null)}else{if(!("filter"in e))return Ec();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new Lh(r,i),o=t.targetId;n=new Qh(o,s)}}var r;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return Vc.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Vc.min():e.readTime?ud(e.readTime):Vc.min()}(t);return this.listener.nu(e,n)}su(t){const e={};e.database=md(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=El(r)?{documents:bd(t,r)}:{query:Ed(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=ad(t,e.resumeToken);const r=sd(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Vc.min())>0){n.readTime=od(t,e.snapshotVersion.toTimestamp());const r=sd(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ec()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.Wo(e)}iu(t){const e={};e.database=md(this.serializer),e.removeTarget=t,this.Wo(e)}constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}}class Cf extends Tf{get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){if(Ic(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const r=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(Ic(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?ud(t.updateTime):ud(e);return n.isEqual(Vc.min())&&(n=ud(e)),new ph(n,t.transformResults||[])}(t,n)))):[]),i=ud(t.commitTime);return this.listener.cu(i,r)}var e,n;return Ic(!t.writeResults||0===t.writeResults.length),this.ru=!0,this.listener.au()}hu(){const t={};t.database=md(this.serializer),this.Wo(t)}uu(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>wd(this.serializer,t)))};this.Wo(e)}constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i,this.ru=!1}}
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
 */class Af extends class{}{fu(){if(this.lu)throw new Sc(Tc.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,e,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Io(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Tc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Sc(Tc.UNKNOWN,t.toString())}))}vo(t,e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.vo(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Tc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Sc(Tc.UNKNOWN,t.toString())}))}terminate(){this.lu=!0}constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.lu=!1}}class kf{gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(t){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,"Online"===t&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(vc(e),this.mu=!1):yc("OnlineStateTracker",e)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}}
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
 */class Rf{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((t=>{n.enqueueAndForget((async()=>{Ff(this)&&(yc("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=_c(t);e.vu.add(4),await Of(e),e.bu.set("Unknown"),e.vu.delete(4),await Nf(e)}(this))}))})),this.bu=new kf(n,r)}}async function Nf(t){if(Ff(t))for(const e of t.Ru)await e(!0)}async function Of(t){for(const e of t.Ru)await e(!1)}function Df(t,e){const n=_c(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Uf(n)?Mf(n):np(n).Ko()&&Pf(n,e))}function Lf(t,e){const n=_c(t),r=np(n);n.Au.delete(e),r.Ko()&&xf(n,e),0===n.Au.size&&(r.Ko()?r.jo():Ff(n)&&n.bu.set("Unknown"))}function Pf(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Vc.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}np(t).su(e)}function xf(t,e){t.Vu.qt(e),np(t).iu(e)}function Mf(t){t.Vu=new Yh({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),np(t).start(),t.bu.gu()}function Uf(t){return Ff(t)&&!np(t).Uo()&&t.Au.size>0}function Ff(t){return 0===_c(t).vu.size}function Bf(t){t.Vu=void 0}async function Vf(t){t.Au.forEach(((e,n)=>{Pf(t,e)}))}async function jf(t,e){Bf(t),Uf(t)?(t.bu.Iu(e),Mf(t)):t.bu.set("Unknown")}async function qf(t,e,n){if(t.bu.set("Online"),e instanceof Jh&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Au.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Au.delete(r),t.Vu.removeTarget(r))}(t,e)}catch(n){yc("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await $f(t,n)}else if(e instanceof Wh?t.Vu.Ht(e):e instanceof Qh?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(Vc.min()))try{const e=await sf(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Vu.ce(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Au.get(r);i&&t.Au.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.Au.get(e);if(!r)return;t.Au.set(e,r.withResumeToken(bu.EMPTY_BYTE_STRING,r.snapshotVersion)),xf(t,e);const i=new Od(r.target,e,n,r.sequenceNumber);Pf(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){yc("RemoteStore","Failed to raise snapshot:",e),await $f(t,e)}}async function $f(t,e,n){if(!eu(e))throw e;t.vu.add(1),await Of(t),t.bu.set("Offline"),n||(n=()=>sf(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{yc("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Nf(t)}))}function zf(t,e){return e().catch((n=>$f(t,n,e)))}async function Hf(t){const e=_c(t),n=rp(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Kf(e);)try{const t=await af(e.localStore,r);if(null===t){0===e.Eu.length&&n.jo();break}r=t.batchId,Gf(e,t)}catch(t){await $f(e,t)}Wf(e)&&Qf(e)}function Kf(t){return Ff(t)&&t.Eu.length<10}function Gf(t,e){t.Eu.push(e);const n=rp(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Wf(t){return Ff(t)&&!rp(t).Uo()&&t.Eu.length>0}function Qf(t){rp(t).start()}async function Jf(t){rp(t).hu()}async function Xf(t){const e=rp(t);for(const n of t.Eu)e.uu(n.mutations)}async function Yf(t,e,n){const r=t.Eu.shift(),i=Oh.from(r,e,n);await zf(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Hf(t)}async function Zf(t,e){e&&rp(t).ou&&await async function(t,e){if(Mh(n=e.code)&&n!==Tc.ABORTED){const n=t.Eu.shift();rp(t).Qo(),await zf(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Hf(t)}var n}(t,e),Wf(t)&&Qf(t)}async function tp(t,e){const n=_c(t);n.asyncQueue.verifyOperationInProgress(),yc("RemoteStore","RemoteStore received new credentials");const r=Ff(n);n.vu.add(3),await Of(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Nf(n)}async function ep(t,e){const n=_c(t);e?(n.vu.delete(2),await Nf(n)):e||(n.vu.add(2),await Of(n),n.bu.set("Unknown"))}function np(t){return t.Su||(t.Su=function(t,e,n){const r=_c(t);return r.fu(),new Sf(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{uo:Vf.bind(null,t),ao:jf.bind(null,t),nu:qf.bind(null,t)}),t.Ru.push((async e=>{e?(t.Su.Qo(),Uf(t)?Mf(t):t.bu.set("Unknown")):(await t.Su.stop(),Bf(t))}))),t.Su}function rp(t){return t.Du||(t.Du=function(t,e,n){const r=_c(t);return r.fu(),new Cf(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{uo:Jf.bind(null,t),ao:Zf.bind(null,t),au:Xf.bind(null,t),cu:Yf.bind(null,t)}),t.Ru.push((async e=>{e?(t.Du.Qo(),await Hf(t)):(await t.Du.stop(),t.Eu.length>0&&(yc("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))}))),t.Du
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
 */}class ip{static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new ip(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Sc(Tc.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Cc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function sp(t,e){if(vc("AsyncQueue",`${e}: ${t}`),eu(t))return new Sc(Tc.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class op{static emptySet(t){return new op(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof op))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new op;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||Hc.comparator(e.key,n.key):(t,e)=>Hc.comparator(t.key,e.key),this.keyedMap=zl(),this.sortedSet=new du(this.comparator)}}
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
 */class ap{track(t){const e=t.doc.key,n=this.Cu.get(e);n?0!==t.type&&3===n.type?this.Cu=this.Cu.insert(e,t):3===t.type&&1!==n.type?this.Cu=this.Cu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Cu=this.Cu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Cu=this.Cu.remove(e):1===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):Ec():this.Cu=this.Cu.insert(e,t)}xu(){const t=[];return this.Cu.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.Cu=new du(Hc.comparator)}}class cp{static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new cp(t,e,op.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ll(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}}
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
 */class up{constructor(){this.Nu=void 0,this.listeners=[]}}class lp{constructor(){this.queries=new Vl((t=>Pl(t)),Ll),this.onlineState="Unknown",this.ku=new Set}}async function hp(t,e){const n=_c(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new up),i)try{s.Nu=await n.onListen(r)}catch(t){const n=sp(t,`Initialization of query '${xl(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&gp(n)}async function dp(t,e){const n=_c(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function fp(t,e){const n=_c(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.$u(t)&&(r=!0);i.Nu=t}}r&&gp(n)}function pp(t,e,n){const r=_c(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function gp(t){t.ku.forEach((t=>{t.next()}))}class mp{$u(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new cp(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),e=!0):this.qu(t,this.onlineState)&&(this.Uu(t),e=!0),this.Bu=t,e}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let e=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),e=!0),e}qu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Lu(t){if(t.docChanges.length>0)return!0;const e=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Uu(t){t=cp.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}constructor(t,e,n){this.query=t,this.Ou=e,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}}
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
class yp{constructor(t){this.key=t}}class vp{constructor(t){this.key=t}}class wp{get nc(){return this.Yu}sc(t,e){const n=e?e.ic:new ap,r=e?e.ec:this.ec;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Ml(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.rc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ec:s,ic:n,zi:o,mutatedKeys:i}}rc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ec()}};return n(t)-n(e)}(t.type,e.type)||this.tc(t.doc,e.doc))),this.oc(n);const s=e?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new cp(this.query,t.ec,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ec:this.ec,ic:new ap,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach((t=>this.Yu=this.Yu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Yu=this.Yu.delete(t))),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=Xl(),this.ec.forEach((t=>{this.ac(t.key)&&(this.Zu=this.Zu.add(t.key))}));const e=[];return t.forEach((t=>{this.Zu.has(t)||e.push(new vp(t))})),this.Zu.forEach((n=>{t.has(n)||e.push(new yp(n))})),e}hc(t){this.Yu=t.ir,this.Zu=Xl();const e=this.sc(t.documents);return this.applyChanges(e,!0)}lc(){return cp.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}constructor(t,e){this.query=t,this.Yu=e,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Xl(),this.mutatedKeys=Xl(),this.tc=Fl(t),this.ec=new op(this.tc)}}class bp{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ep{constructor(t){this.key=t,this.fc=!1}}class Ip{get isPrimaryClient(){return!0===this.vc}constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new Vl((t=>Pl(t)),Ll),this._c=new Map,this.mc=new Set,this.gc=new du(Hc.comparator),this.yc=new Map,this.Ic=new zd,this.Tc={},this.Ec=new Map,this.Ac=Fd.Mn(),this.onlineState="Unknown",this.vc=void 0}}async function _p(t,e){const n=jp(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const t=await cf(n.localStore,Nl(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Tp(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&Df(n.remoteStore,t)}return i}async function Tp(t,e,n,r,i){t.Rc=(e,n,r)=>async function(t,e,n,r){let i=e.view.sc(n);i.zi&&(i=await lf(t.localStore,e.query,!1).then((({documents:t})=>e.view.sc(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return xp(t,e.targetId,o.cc),o.snapshot}(t,e,n,r);const s=await lf(t.localStore,e,!0),o=new wp(e,s.ir),a=o.sc(s.documents),c=Gh.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);xp(t,n,u.cc);const l=new bp(e,n,o);return t.wc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function Sp(t,e){const n=_c(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((t=>!Ll(t,e)))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await uf(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Lf(n.remoteStore,r.targetId),Lp(n,r.targetId)})).catch(Zc)):(Lp(n,r.targetId),await uf(n.localStore,r.targetId,!0))}async function Cp(t,e){const n=_c(t);try{const t=await function(t,e){const n=_c(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);var l,h,d;null!==e.targetMismatches.get(a)?u=u.withResumeToken(bu.EMPTY_BYTE_STRING,Vc.min()).withLastLimboFreeSnapshotVersion(Vc.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),h=u,d=s,(0===(l=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Bs.updateTargetData(t,u))}));let a=ql(),c=Xl();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(of(t,s,e.documentUpdates).next((t=>{a=t.nr,c=t.sr}))),!r.isEqual(Vc.min())){const e=n.Bs.getLastRemoteSnapshotVersion(t).next((e=>n.Bs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return tu.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ji=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.yc.get(e);r&&(Ic(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.fc=!0:t.modifiedDocuments.size>0?Ic(r.fc):t.removedDocuments.size>0&&(Ic(r.fc),r.fc=!1))})),await Fp(n,t,e)}catch(t){await Zc(t)}}function Ap(t,e,n){const r=_c(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.wc.forEach(((n,r)=>{const i=r.view.Mu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=_c(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Mu(e)&&(r=!0)})),r&&gp(n)}(r.eventManager,e),t.length&&r.dc.nu(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kp(t,e,n){const r=_c(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let t=new du(Hc.comparator);t=t.insert(s,Wu.newNoDocument(s,Vc.min()));const n=Xl().add(s),i=new Kh(Vc.min(),new Map,new du(Uc),t,n);await Cp(r,i),r.gc=r.gc.remove(s),r.yc.delete(e),Up(r)}else await uf(r.localStore,e,!1).then((()=>Lp(r,e,n))).catch(Zc)}async function Rp(t,e){const n=_c(t),r=e.batch.batchId;try{const t=await function(t,e){const n=_c(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=tu.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Ic(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Xl();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);Dp(n,r,null),Op(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fp(n,t)}catch(t){await Zc(t)}}async function Np(t,e,n){const r=_c(t);try{const t=await function(t,e){const n=_c(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Ic(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Dp(r,e,n),Op(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fp(r,t)}catch(t){await Zc(t)}}function Op(t,e){(t.Ec.get(e)||[]).forEach((t=>{t.resolve()})),t.Ec.delete(e)}function Dp(t,e,n){const r=_c(t);let i=r.Tc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Lp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach((e=>{t.Ic.containsKey(e)||Pp(t,e)}))}function Pp(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);null!==n&&(Lf(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Up(t))}function xp(t,e,n){for(const r of n)r instanceof yp?(t.Ic.addReference(r.key,e),Mp(t,r)):r instanceof vp?(yc("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||Pp(t,r.key)):Ec()}function Mp(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(yc("SyncEngine","New document in limbo: "+n),t.mc.add(r),Up(t))}function Up(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new Hc(qc.fromString(e)),r=t.Ac.next();t.yc.set(r,new Ep(n)),t.gc=t.gc.insert(n,r),Df(t.remoteStore,new Od(Nl(Tl(n.path)),r,"TargetPurposeLimboResolution",nu.ct))}}async function Fp(t,e,n){const r=_c(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach(((t,a)=>{o.push(r.Rc(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Zd.Li(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.dc.nu(i),await async function(t,e){const n=_c(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>tu.forEach(e,(e=>tu.forEach(e.Fi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>tu.forEach(e.Bi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!eu(t))throw t;yc("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ji.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(e,i)}}}(r.localStore,s))}async function Bp(t,e){const n=_c(t);if(!n.currentUser.isEqual(e)){yc("SyncEngine","User change. New user:",e.toKey());const t=await rf(n.localStore,e);n.currentUser=e,(r=n).Ec.forEach((t=>{t.forEach((t=>{t.reject(new Sc(Tc.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.Ec.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Fp(n,t.er)}var r}function Vp(t,e){const n=_c(t),r=n.yc.get(e);if(r&&r.fc)return Xl().add(r.key);{let t=Xl();const r=n._c.get(e);if(!r)return t;for(const e of r){const r=n.wc.get(e);t=t.unionWith(r.view.nc)}return t}}function jp(t){const e=_c(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kp.bind(null,e),e.dc.nu=fp.bind(null,e.eventManager),e.dc.Pc=pp.bind(null,e.eventManager),e}function qp(t){const e=_c(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Rp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Np.bind(null,e),e}class $p{async initialize(t){this.serializer=If(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return nf(this.persistence,new tf,t.initialUser,this.serializer)}createPersistence(t){return new Jd(Yd.zs,this.serializer)}createSharedClientState(t){return new ff}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class zp{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ap(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bp.bind(null,this.syncEngine),await ep(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new lp}createDatastore(t){const e=If(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new bf(r));var r,i,s;return i=t.authCredentials,s=t.appCheckCredentials,new Af(i,s,n,e)}createRemoteStore(t){var e,n,r,i,s;return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Ap(this.syncEngine,t,0),s=gf.D()?new gf:new pf,new Rf(e,n,r,i,s)}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Ip(t,e,n,r,i,s);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=_c(t);yc("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await Of(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}}
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
class Hp{next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):vc("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
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
class Kp{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Sc(Tc.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Cc;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=sp(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=fc.UNAUTHENTICATED,this.clientId=Mc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{yc("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(yc("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function Gp(t,e){t.asyncQueue.verifyOperationInProgress(),yc("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await rf(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Wp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Jp(t);yc("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>tp(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>tp(e.remoteStore,n))),t._onlineComponents=e}function Qp(t){return"FirebaseError"===t.name?t.code===Tc.FAILED_PRECONDITION||t.code===Tc.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Jp(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){yc("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Qp(n))throw n;wc("Error using user provided cache. Falling back to memory cache: "+n),await Gp(t,new $p)}}else yc("FirestoreClient","Using default OfflineComponentProvider"),await Gp(t,new $p);return t._offlineComponents}async function Xp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(yc("FirestoreClient","Using user provided OnlineComponentProvider"),await Wp(t,t._uninitializedComponentsProvider._online)):(yc("FirestoreClient","Using default OnlineComponentProvider"),await Wp(t,new zp))),t._onlineComponents}function Yp(t){return Xp(t).then((t=>t.syncEngine))}async function Zp(t){const e=await Xp(t),n=e.eventManager;return n.onListen=_p.bind(null,e.syncEngine),n.onUnlisten=Sp.bind(null,e.syncEngine),n}function tg(t,e,n={}){const r=new Cc;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Hp({next:s=>{e.enqueueAndForget((()=>dp(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Sc(Tc.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Sc(Tc.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new mp(Tl(n.path),s,{includeMetadataChanges:!0,Ku:!0});return hp(t,o)}(await Zp(t),t.asyncQueue,e,n,r))),r.promise}function eg(t,e,n={}){const r=new Cc;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Hp({next:n=>{e.enqueueAndForget((()=>dp(t,o))),n.fromCache&&"server"===r.source?i.reject(new Sc(Tc.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new mp(n,s,{includeMetadataChanges:!0,Ku:!0});return hp(t,o)}(await Zp(t),t.asyncQueue,e,n,r))),r.promise}
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
function ng(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const rg=new Map;
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
 */function ig(t,e,n){if(!n)throw new Sc(Tc.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sg(t){if(!Hc.isDocumentKey(t))throw new Sc(Tc.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function og(t){if(Hc.isDocumentKey(t))throw new Sc(Tc.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ag(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Ec()}function cg(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Sc(Tc.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ag(t);throw new Sc(Tc.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class ug{isEqual(t){var e,n;return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Sc(Tc.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Sc(Tc.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new Sc(Tc.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ng(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Sc(Tc.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Sc(Tc.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Sc(Tc.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}}class lg{get app(){if(!this._app)throw new Sc(Tc.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Sc(Tc.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ug(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new kc;switch(t.type){case"firstParty":return new Dc(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Sc(Tc.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=rg.get(t);e&&(yc("ComponentProvider","Removing Datastore"),rg.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ug({}),this._settingsFrozen=!1}}function hg(t,e,n,r={}){var i;const s=(t=cg(t,lg))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&wc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=fc.MOCK_USER;else{e=L(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Sc(Tc.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new fc(s)}t._authCredentials=new Rc(new Ac(e,n))}}
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
 */class dg{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pg(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new dg(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class fg{withConverter(t){return new fg(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class pg extends fg{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new dg(this.firestore,null,new Hc(t))}withConverter(t){return new pg(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,Tl(n)),this._path=n,this.type="collection"}}function gg(t,e,...n){if(t=J(t),ig("collection","path",e),t instanceof lg){const r=qc.fromString(e,...n);return og(r),new pg(t,null,r)}{if(!(t instanceof dg||t instanceof pg))throw new Sc(Tc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qc.fromString(e,...n));return og(r),new pg(t.firestore,null,r)}}function mg(t,e,...n){if(t=J(t),1===arguments.length&&(e=Mc.A()),ig("doc","path",e),t instanceof lg){const r=qc.fromString(e,...n);return sg(r),new dg(t,null,new Hc(r))}{if(!(t instanceof dg||t instanceof pg))throw new Sc(Tc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qc.fromString(e,...n));return sg(r),new dg(t.firestore,t instanceof pg?t.converter:null,new Hc(r))}}
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
class yg{get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const e=Ef();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise((()=>{}));const e=new Cc;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Qc.push(t),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!eu(t))throw t;yc("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(t){const e=this.Gc.then((()=>(this.Hc=!0,t().catch((t=>{this.Wc=t,this.Hc=!1;throw vc("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Hc=!1,t))))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);const r=ip.createAndSchedule(this,t,e,n,(t=>this.na(t)));return this.zc.push(r),r}Zc(){this.Wc&&Ec()}verifyOperationInProgress(){}async sa(){let t;do{t=this.Gc,await t}while(t!==this.Gc)}ia(t){for(const e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then((()=>{this.zc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.zc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.sa()}))}oa(t){this.Yc.push(t)}na(t){const e=this.zc.indexOf(t);this.zc.splice(e,1)}constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new _f(this,"async_queue_retry"),this.Xc=()=>{const t=Ef();t&&yc("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const t=Ef();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}}class vg extends lg{_terminate(){return this._firestoreClient||bg(this),this._firestoreClient.terminate()}constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new yg,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function wg(t){return t._firestoreClient||bg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bg(t){var e,n,r;const i=t._freezeSettings(),s=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",c=t._persistenceKey,new ku(o,a,c,(u=i).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,ng(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,c,u;t._firestoreClient=new Kp(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
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
class Eg{static fromBase64String(t){try{return new Eg(bu.fromBase64String(t))}catch(t){throw new Sc(Tc.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Eg(bu.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
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
 */class Ig{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Sc(Tc.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zc(t)}}
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
class _g{constructor(t){this._methodName=t}}
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
 */class Tg{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Uc(this._lat,t._lat)||Uc(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Sc(Tc.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Sc(Tc.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
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
 */const Sg=/^__.*__$/;class Cg{toMutation(t,e){return null!==this.fieldMask?new Th(t,this.data,this.fieldMask,e,this.fieldTransforms):new _h(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}class Ag{toMutation(t,e){return new Th(t,this.data,this.fieldMask,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function kg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ec()}}class Rg{get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new Rg(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.aa({path:n,la:!1});return r.fa(t),r}da(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.aa({path:n,la:!1});return r.ua(),r}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return zg(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(0===t.length)throw this._a("Document fields must not be empty");if(kg(this.ca)&&Sg.test(t))throw this._a('Document fields cannot begin and end with "__"')}constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class Ng{ya(t,e,n,r=!1){return new Rg({ca:t,methodName:e,ga:n,path:zc.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||If(t)}}function Og(t){const e=t._freezeSettings(),n=If(t._databaseId);return new Ng(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Dg(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);Vg("Data must be an object, but it was:",o,r);const a=Fg(r,o);let c,u;if(s.merge)c=new yu(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=jg(e,r,n);if(!o.contains(i))throw new Sc(Tc.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Hg(t,i)||t.push(i)}c=new yu(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Cg(new Ku(a),c,u)}class Lg extends _g{_toFieldTransform(t){if(2!==t.ca)throw 1===t.ca?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Lg}}function Pg(t,e,n,r){const i=t.ya(1,e,n);Vg("Data must be an object, but it was:",i,r);const s=[],o=Ku.empty();lu(r,((t,r)=>{const a=$g(e,t,n);r=J(r);const c=i.da(a);if(r instanceof Lg)s.push(a);else{const t=Ug(r,c);null!=t&&(s.push(a),o.set(a,t))}}));const a=new yu(s);return new Ag(o,a,i.fieldTransforms)}function xg(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[jg(e,r,n)],c=[i];if(s.length%2!=0)throw new Sc(Tc.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)a.push(jg(e,s[t])),c.push(s[t+1]);const u=[],l=Ku.empty();for(let t=a.length-1;t>=0;--t)if(!Hg(u,a[t])){const e=a[t];let n=c[t];n=J(n);const r=o.da(e);if(n instanceof Lg)u.push(e);else{const t=Ug(n,r);null!=t&&(u.push(e),l.set(e,t))}}const h=new yu(u);return new Ag(l,h,o.fieldTransforms)}function Mg(t,e,n,r=!1){return Ug(n,t.ya(r?4:3,e))}function Ug(t,e){if(Bg(t=J(t)))return Vg("Unsupported field value:",e,t),Fg(t,e);if(t instanceof _g)return function(t,e){if(!kg(e.ca))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&4!==e.ca)throw e._a("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Ug(i,e.wa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=J(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return nh(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Bc.fromDate(t);return{timestampValue:od(e.serializer,n)}}if(t instanceof Bc){const n=new Bc(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:od(e.serializer,n)}}if(t instanceof Tg)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Eg)return{bytesValue:ad(e.serializer,t._byteString)};if(t instanceof dg){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ld(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${ag(t)}`)}(t,e)}function Fg(t,e){const n={};return hu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):lu(t,((t,r)=>{const i=Ug(r,e.ha(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Bg(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Bc||t instanceof Tg||t instanceof Eg||t instanceof dg||t instanceof _g)}function Vg(t,e,n){if(!Bg(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=ag(n);throw"an object"===r?e._a(t+" a custom object"):e._a(t+" "+r)}var r}function jg(t,e,n){if((e=J(e))instanceof Ig)return e._internalPath;if("string"==typeof e)return $g(t,e);throw zg("Field path arguments must be of type string or ",t,!1,void 0,n)}const qg=new RegExp("[~\\*/\\[\\]]");function $g(t,e,n){if(e.search(qg)>=0)throw zg(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ig(...e.split("."))._internalPath}catch(r){throw zg(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zg(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Sc(Tc.INVALID_ARGUMENT,a+t+c)}function Hg(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class Kg{get id(){return this._key.path.lastSegment()}get ref(){return new dg(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Gg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Wg("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}}class Gg extends Kg{data(){return super.data()}}function Wg(t,e){return"string"==typeof e?$g(t,e):e instanceof Ig?e._internalPath:e._delegate._internalPath}
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
 */function Qg(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Sc(Tc.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jg{}class Xg extends Jg{}function Yg(t,e,...n){let r=[];e instanceof Jg&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof em)).length,n=t.filter((t=>t instanceof Zg)).length;if(e>1||e>0&&n>0)throw new Sc(Tc.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const e of r)t=e._apply(t);return t}class Zg extends Xg{static _create(t,e,n){return new Zg(t,e,n)}_apply(t){const e=this._parse(t);return im(t._query,e),new fg(t.firestore,t.converter,Ol(t._query,e))}_parse(t){const e=Og(t.firestore);return function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Sc(Tc.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){rm(o,s);const e=[];for(const n of o)e.push(nm(r,t,n));a={arrayValue:{values:e}}}else a=nm(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||rm(o,s),a=Mg(n,"where",o,"in"===s||"not-in"===s);return el.create(i,s,a)}(t._query,0,e,t.firestore._databaseId,this._field,this._op,this._value)}constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}}function tm(t,e,n){const r=e,i=Wg("where",t);return Zg._create(i,r,n)}class em extends Jg{static _create(t,e){return new em(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:nl.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const t of r)im(n,t),n=Ol(n,t)}(t._query,e),new fg(t.firestore,t.converter,Ol(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}constructor(t,e){super(),this.type=t,this._queryConstraints=e}}function nm(t,e,n){if("string"==typeof(n=J(n))){if(""===n)throw new Sc(Tc.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kl(e)&&-1!==n.indexOf("/"))throw new Sc(Tc.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(qc.fromString(n));if(!Hc.isDocumentKey(r))throw new Sc(Tc.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fu(t,new Hc(r))}if(n instanceof dg)return Fu(t,n._key);throw new Sc(Tc.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ag(n)}.`)}function rm(t,e){if(!Array.isArray(t)||0===t.length)throw new Sc(Tc.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function im(t,e){if(e.isInequality()){const n=Al(t),r=e.field;if(null!==n&&!n.isEqual(r))throw new Sc(Tc.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=Cl(t);null!==i&&sm(t,r,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Sc(Tc.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Sc(Tc.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function sm(t,e,n){if(!n.isEqual(e))throw new Sc(Tc.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class om{convertValue(t,e="none"){switch(Ou(t)){case 0:return null;case 1:return t.booleanValue;case 2:return _u(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Tu(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ec()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return lu(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Tg(_u(t.latitude),_u(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Cu(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Au(t));default:return null}}convertTimestamp(t){const e=Iu(t);return new Bc(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=qc.fromString(t);Ic(Nd(n));const r=new Ru(n.get(1),n.get(3)),i=new Hc(n.popFirst(5));return r.isEqual(e)||vc(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function am(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
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
class cm{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class um extends Kg{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new lm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Wg("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}}class lm extends um{data(t={}){return super.data(t)}}class hm{get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new lm(this._firestore,this._userDataWriter,n.key,n,new cm(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Sc(Tc.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new lm(t._firestore,t._userDataWriter,n.doc.key,n.doc,new cm(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new lm(t._firestore,t._userDataWriter,e.doc.key,e.doc,new cm(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:dm(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new cm(r.hasPendingWrites,r.fromCache),this.query=n}}function dm(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ec()}}
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
function fm(t){t=cg(t,dg);const e=cg(t.firestore,vg);return tg(wg(e),t._key).then((n=>wm(e,t,n)))}class pm extends om{convertBytes(t){return new Eg(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new dg(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function gm(t){t=cg(t,fg);const e=cg(t.firestore,vg),n=wg(e),r=new pm(e);return Qg(t._query),eg(n,t._query).then((n=>new hm(e,r,t,n)))}function mm(t,e,n){t=cg(t,dg);const r=cg(t.firestore,vg),i=am(t.converter,e,n);return vm(r,[Dg(Og(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,gh.none())])}function ym(t,e,n,...r){t=cg(t,dg);const i=cg(t.firestore,vg),s=Og(i);let o;return o="string"==typeof(e=J(e))||e instanceof Ig?xg(s,"updateDoc",t._key,e,n,r):Pg(s,"updateDoc",t._key,e),vm(i,[o.toMutation(t._key,gh.exists(!0))])}function vm(t,e){return function(t,e){const n=new Cc;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const r=qp(t);try{const t=await function(t,e){const n=_c(t),r=Bc.now(),i=e.reduce(((t,e)=>t.add(e.key)),Xl());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=ql(),c=Xl();return n.Zi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=Eh(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Th(t.key,e,Gu(e.value.mapValue),gh.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Hl(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Tc[t.currentUser.toKey()];r||(r=new du(Uc)),r=r.insert(e,n),t.Tc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Fp(r,t.changes),await Hf(r.remoteStore)}catch(t){const e=sp(t,"Failed to persist write");n.reject(e)}}(await Yp(t),e,n))),n.promise}(wg(t),e)}function wm(t,e,n){const r=n.docs.get(e._key),i=new pm(t);return new um(t,i,e._key,r,new cm(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */!function(t,e=!0){pc="9.22.0",Ot(new X("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new vg(new Nc(t.getProvider("auth-internal")),new Pc(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Sc(Tc.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ru(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Ut("@firebase/firestore","3.12.0",t),Ut("@firebase/firestore","3.12.0","esm2017")}();const bm=xt({apiKey:"AIzaSyAYO4Ie3dyg57FYXwv2s34tOoBXm3UaMzg",authDomain:"users-bookshelf.firebaseapp.com",projectId:"users-bookshelf",storageBucket:"users-bookshelf.appspot.com",messagingSenderId:"1093946480659",appId:"1:1093946480659:web:6fdb7ef580bf859789c7e6"}),Em=function(t=Mt()){const e=Dt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=Dt(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(q(n.getOptions(),null!=e?e:{}))return t;Zt(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Fr,persistence:[er,jn,$n]}),r=O("authTokenSyncURL");if(r){const t=(i=r,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>Vr)return;const r=null==e?void 0:e.token;jr!==r&&(jr=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(t,e,n){J(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,r){J(t).onIdTokenChanged(e,n,r)}(n,(e=>t(e)))}var i;const s=k("auth");return s&&cn(n,`http://${s}`),n}(),Im=function(t,e){const n="string"==typeof t?t:e||"(default)",r=Dt("object"==typeof t?t:Mt(),"firestore").getImmediate({identifier:n});if(!r._initialized){const t=R("firestore");t&&hg(r,...t)}return r}(bm);var _m=!1;let Tm="";var Sm,Cm,Am;Sm=t=>{t&&(t.uid,_m=!0,Tm=t.uid),localStorage.setItem("IS_CUSTOMER_LOGGED_IN",_m)},J(Em).onAuthStateChanged(Sm,Cm,Am);const km=document.querySelector(".signin-cont"),Rm=document.querySelector(".signup-cont"),Nm=document.querySelector(".signup"),Om=document.querySelector(".signin"),Dm=document.querySelector(".js-signup-btn"),Lm=document.querySelector(".content"),Pm=document.querySelector(".tabs");Dm.addEventListener("click",(()=>{Lm.hidden})),Pm.addEventListener("click",(function(t){Om.classList.toggle("active"),Nm.classList.toggle("active"),km.classList.toggle("hidden"),Rm.classList.toggle("hidden")}));document.querySelector(".js-form-signup").addEventListener("submit",(function(t){t.preventDefault();const{name:e,email:n,password:r}=t.currentTarget.elements;Mn(Em,n.value,r.value).then((t=>{const r=t.user;mm(mg(Im,"customers",n.value),{customer_name:e.value,customer_email:n.value,shopping_list:"",customer_avatar:"",session_id:r.uid}),window.open("/")})).catch((t=>{t.code;const e=t.message;alert(e)}))}));document.querySelector(".js-form-signin").addEventListener("submit",(function(t){t.preventDefault();const{email:e,password:n}=t.currentTarget.elements;Un(Em,e.value,n.value).then((async t=>{const n=t.user,r=mg(Im,"customers",e.value);await ym(r,{session_id:n.uid});const i=await fm(r);i.exists()&&(console.log("Document data (Shoping list):",i.data().shopping_list),localStorage.setItem("bookId",i.data().shopping_list)),window.open("/")})).catch((t=>{t.code;const e=t.message;alert(e)}))}));document.querySelector(".js-signout").addEventListener("click",(function(){Fn(Em).then((async()=>{if(""==Tm)return!0;const t=Yg(gg(Im,"customers"),tm("session_id","==",Tm)),e=await gm(t);let n="";if(e.forEach((t=>{n=t.data().customer_email})),n){const t=mg(Im,"customers",n);await ym(t,{shopping_list:localStorage.getItem("bookId")})}localStorage.removeItem("bookId"),window.open("/")})).catch((t=>{}))}));const xm=document.querySelector(".open-menu-icon"),Mm=document.querySelector(".close-menu-icon"),Um=document.querySelector(".burger-menu");xm.addEventListener("click",(function(){Um.classList.remove("is-hidden"),xm.classList.add("is-hidden"),Mm.classList.remove("is-hidden"),Um.innerHTML='<div class="burger-conteiner">\n  <div class="user-burger">\n    <div class="avatar">\n      <img class="avatar_img" src="" alt="">\n    </div>\n    <p class="user-name">Stephen</p>\n  </div>\n\n  <nav class="navigation-burger">\n    <ul class="navigation-burger-list">\n      <li class="navigation-item navigation-burger-item"><a class="navigation-link" href="#">Home</a></li>\n      <li class="navigation-item navigation-burger-item">\n        <a class="navigation-link" href="#">Shopping List\n          <svg width="20" height="20">\n            <use href="./images/icons.svg#icon-lock"></use>\n          </svg>\n        </a>\n      </li>\n    </ul>\n  </nav>\n\n  <button class="button_logout btn-logout-burger">Log out\n    <svg width="20" height="20">\n      <use href="./images/icons.svg#icon-arrow-narrow-right"></use>\n    </svg>\n  </button>\n</div>'})),Mm.addEventListener("click",(function(){Um.classList.add("is-hidden"),xm.classList.remove("is-hidden"),Mm.classList.add("is-hidden")}));const Fm=document.querySelector("body"),Bm=document.querySelector("#theme-switch-toggle");Bm.addEventListener("change",(t=>{Fm.classList.contains("dark")?(Fm.classList.remove("dark"),localStorage.removeItem("darkTheme")):(Fm.classList.add("dark"),localStorage.setItem("darkTheme","true"))}));localStorage.getItem("darkTheme");function Vm(t,e){return function(){return t.apply(e,arguments)}}localStorage.getItem("darkTheme")&&(Fm.classList.add("dark"),Bm.checked=!0);const{toString:jm}=Object.prototype,{getPrototypeOf:qm}=Object,$m=(zm=Object.create(null),t=>{const e=jm.call(t);return zm[e]||(zm[e]=e.slice(8,-1).toLowerCase())});var zm;const Hm=t=>(t=t.toLowerCase(),e=>$m(e)===t),Km=t=>e=>typeof e===t,{isArray:Gm}=Array,Wm=Km("undefined");const Qm=Hm("ArrayBuffer");const Jm=Km("string"),Xm=Km("function"),Ym=Km("number"),Zm=t=>null!==t&&"object"==typeof t,ty=t=>{if("object"!==$m(t))return!1;const e=qm(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},ey=Hm("Date"),ny=Hm("File"),ry=Hm("Blob"),iy=Hm("FileList"),sy=Hm("URLSearchParams");function oy(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let r,i;if("object"!=typeof t&&(t=[t]),Gm(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;let o;for(r=0;r<s;r++)o=i[r],e.call(null,t[o],o,t)}}function ay(t,e){e=e.toLowerCase();const n=Object.keys(t);let r,i=n.length;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const cy="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:e,uy=t=>!Wm(t)&&t!==cy;const ly=(hy="undefined"!=typeof Uint8Array&&qm(Uint8Array),t=>hy&&t instanceof hy);var hy;const dy=Hm("HTMLFormElement"),fy=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),py=Hm("RegExp"),gy=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};oy(n,((n,i)=>{!1!==e(n,i,t)&&(r[i]=n)})),Object.defineProperties(t,r)},my={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};const yy=Hm("AsyncFunction");var vy={isArray:Gm,isArrayBuffer:Qm,isBuffer:function(t){return null!==t&&!Wm(t)&&null!==t.constructor&&!Wm(t.constructor)&&Xm(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||Xm(t.append)&&("formdata"===(e=$m(t))||"object"===e&&Xm(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&Qm(t.buffer),e},isString:Jm,isNumber:Ym,isBoolean:t=>!0===t||!1===t,isObject:Zm,isPlainObject:ty,isUndefined:Wm,isDate:ey,isFile:ny,isBlob:ry,isRegExp:py,isFunction:Xm,isStream:t=>Zm(t)&&Xm(t.pipe),isURLSearchParams:sy,isTypedArray:ly,isFileList:iy,forEach:oy,merge:function t(){const{caseless:e}=uy(this)&&this||{},n={},r=(r,i)=>{const s=e&&ay(n,i)||i;ty(n[s])&&ty(r)?n[s]=t(n[s],r):ty(r)?n[s]=t({},r):Gm(r)?n[s]=r.slice():n[s]=r};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&oy(arguments[t],r);return n},extend:(t,e,n,{allOwnKeys:r}={})=>(oy(e,((e,r)=>{n&&Xm(e)?t[r]=Vm(e,n):t[r]=e}),{allOwnKeys:r}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},null==t)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],r&&!r(o,t,e)||a[o]||(e[o]=t[o],a[o]=!0);t=!1!==n&&qm(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:$m,kindOfTest:Hm,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},toArray:t=>{if(!t)return null;if(Gm(t))return t;let e=t.length;if(!Ym(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=n.next())&&!r.done;){const n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const r=[];for(;null!==(n=t.exec(e));)r.push(n);return r},isHTMLForm:dy,hasOwnProperty:fy,hasOwnProp:fy,reduceDescriptors:gy,freezeMethods:t=>{gy(t,((e,n)=>{if(Xm(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=t[n];Xm(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},r=t=>{t.forEach((t=>{n[t]=!0}))};return Gm(t)?r(t):r(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:ay,global:cy,isContextDefined:uy,ALPHABET:my,generateString:(t=16,e=my.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n},isSpecCompliantForm:function(t){return!!(t&&Xm(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,r)=>{if(Zm(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;const i=Gm(t)?[]:{};return oy(t,((t,e)=>{const s=n(t,r+1);!Wm(s)&&(i[e]=s)})),e[r]=void 0,i}}return t};return n(t,0)},isAsyncFn:yy,isThenable:t=>t&&(Zm(t)||Xm(t))&&Xm(t.then)&&Xm(t.catch)};function wy(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}vy.inherits(wy,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:vy.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const by=wy.prototype,Ey={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{Ey[t]={value:t}})),Object.defineProperties(wy,Ey),Object.defineProperty(by,"isAxiosError",{value:!0}),wy.from=(t,e,n,r,i,s)=>{const o=Object.create(by);return vy.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),wy.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var Iy,_y,Ty,Sy=wy;_y=function(t){var e,n,r=Py(t),i=r[0],s=r[1],o=new Ny(function(t,e,n){return 3*(e+n)/4-n}(0,i,s)),a=0,c=s>0?i-4:i;for(n=0;n<c;n+=4)e=Ry[t.charCodeAt(n)]<<18|Ry[t.charCodeAt(n+1)]<<12|Ry[t.charCodeAt(n+2)]<<6|Ry[t.charCodeAt(n+3)],o[a++]=e>>16&255,o[a++]=e>>8&255,o[a++]=255&e;2===s&&(e=Ry[t.charCodeAt(n)]<<2|Ry[t.charCodeAt(n+1)]>>4,o[a++]=255&e);1===s&&(e=Ry[t.charCodeAt(n)]<<10|Ry[t.charCodeAt(n+1)]<<4|Ry[t.charCodeAt(n+2)]>>2,o[a++]=e>>8&255,o[a++]=255&e);return o},Ty=function(t){for(var e,n=t.length,r=n%3,i=[],s=16383,o=0,a=n-r;o<a;o+=s)i.push(xy(t,o,o+s>a?a:o+s));1===r?(e=t[n-1],i.push(ky[e>>2]+ky[e<<4&63]+"==")):2===r&&(e=(t[n-2]<<8)+t[n-1],i.push(ky[e>>10]+ky[e>>4&63]+ky[e<<2&63]+"="));return i.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var Cy,Ay,ky=[],Ry=[],Ny="undefined"!=typeof Uint8Array?Uint8Array:Array,Oy="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Dy=0,Ly=Oy.length;Dy<Ly;++Dy)ky[Dy]=Oy[Dy],Ry[Oy.charCodeAt(Dy)]=Dy;function Py(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function xy(t,e,n){for(var r,i,s=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),s.push(ky[(i=r)>>18&63]+ky[i>>12&63]+ky[i>>6&63]+ky[63&i]);return s.join("")}Ry["-".charCodeAt(0)]=62,Ry["_".charCodeAt(0)]=63,Cy=function(t,e,n,r,i){var s,o,a=8*i-r-1,c=(1<<a)-1,u=c>>1,l=-7,h=n?i-1:0,d=n?-1:1,f=t[e+h];for(h+=d,s=f&(1<<-l)-1,f>>=-l,l+=a;l>0;s=256*s+t[e+h],h+=d,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=r;l>0;o=256*o+t[e+h],h+=d,l-=8);if(0===s)s=1-u;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=u}return(f?-1:1)*o*Math.pow(2,s-r)},Ay=function(t,e,n,r,i,s){var o,a,c,u=8*s-i-1,l=(1<<u)-1,h=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=l):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),(e+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=l?(a=0,o=l):o+h>=1?(a=(e*c-1)*Math.pow(2,i),o+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;t[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;t[n+f]=255&o,f+=p,o/=256,u-=8);t[n+f-p]|=128*g};const My="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;Iy=Fy;function Uy(t){if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,Fy.prototype),e}function Fy(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return jy(t)}return By(t,e,n)}function By(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!Fy.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|Hy(t,e);let r=Uy(n);const i=r.write(t,e);i!==n&&(r=r.slice(0,i));return r}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Tv(t,Uint8Array)){const e=new Uint8Array(t);return $y(e.buffer,e.byteOffset,e.byteLength)}return qy(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Tv(t,ArrayBuffer)||t&&Tv(t.buffer,ArrayBuffer))return $y(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(Tv(t,SharedArrayBuffer)||t&&Tv(t.buffer,SharedArrayBuffer)))return $y(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return Fy.from(r,e,n);const i=function(t){if(Fy.isBuffer(t)){const e=0|zy(t.length),n=Uy(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Sv(t.length)?Uy(0):qy(t);if("Buffer"===t.type&&Array.isArray(t.data))return qy(t.data)}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return Fy.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function Vy(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function jy(t){return Vy(t),Uy(t<0?0:0|zy(t))}function qy(t){const e=t.length<0?0:0|zy(t.length),n=Uy(e);for(let r=0;r<e;r+=1)n[r]=255&t[r];return n}function $y(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(r,Fy.prototype),r}function zy(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|t}function Hy(t,e){if(Fy.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Tv(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Ev(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Iv(t).length;default:if(i)return r?-1:Ev(t).length;e=(""+e).toLowerCase(),i=!0}}function Ky(t,e,n){let r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return sv(this,e,n);case"utf8":case"utf-8":return nv(this,e,n);case"ascii":return rv(this,e,n);case"latin1":case"binary":return iv(this,e,n);case"base64":return ev(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ov(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function Gy(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function Wy(t,e,n,r,i){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Sv(n=+n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof e&&(e=Fy.from(e,r)),Fy.isBuffer(e))return 0===e.length?-1:Qy(t,e,n,r,i);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):Qy(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function Qy(t,e,n,r,i){let s,o=1,a=t.length,c=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;o=2,a/=2,c/=2,n/=2}function u(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(i){let r=-1;for(s=n;s<a;s++)if(u(t,s)===u(e,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===c)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let r=0;r<c;r++)if(u(t,s+r)!==u(e,r)){n=!1;break}if(n)return s}return-1}function Jy(t,e,n,r){n=Number(n)||0;const i=t.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=e.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(e.substr(2*o,2),16);if(Sv(r))return o;t[n+o]=r}return o}function Xy(t,e,n,r){return _v(Ev(e,t.length-n),t,n,r)}function Yy(t,e,n,r){return _v(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function Zy(t,e,n,r){return _v(Iv(e),t,n,r)}function tv(t,e,n,r){return _v(function(t,e){let n,r,i;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(e,t.length-n),t,n,r)}function ev(t,e,n){return 0===e&&n===t.length?Ty(t):Ty(t.slice(e,n))}function nv(t,e,n){n=Math.min(t.length,n);const r=[];let i=e;for(;i<n;){const e=t[i];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(i+o<=n){let n,r,a,c;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[i+1],128==(192&n)&&(c=(31&e)<<6|63&n,c>127&&(s=c));break;case 3:n=t[i+1],r=t[i+2],128==(192&n)&&128==(192&r)&&(c=(15&e)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=t[i+1],r=t[i+2],a=t[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(c=(15&e)<<18|(63&n)<<12|(63&r)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(t){const e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=4096));return n}(r)}Fy.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),Fy.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Fy.prototype,"parent",{enumerable:!0,get:function(){if(Fy.isBuffer(this))return this.buffer}}),Object.defineProperty(Fy.prototype,"offset",{enumerable:!0,get:function(){if(Fy.isBuffer(this))return this.byteOffset}}),Fy.poolSize=8192,Fy.from=function(t,e,n){return By(t,e,n)},Object.setPrototypeOf(Fy.prototype,Uint8Array.prototype),Object.setPrototypeOf(Fy,Uint8Array),Fy.alloc=function(t,e,n){return function(t,e,n){return Vy(t),t<=0?Uy(t):void 0!==e?"string"==typeof n?Uy(t).fill(e,n):Uy(t).fill(e):Uy(t)}(t,e,n)},Fy.allocUnsafe=function(t){return jy(t)},Fy.allocUnsafeSlow=function(t){return jy(t)},Fy.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==Fy.prototype},Fy.compare=function(t,e){if(Tv(t,Uint8Array)&&(t=Fy.from(t,t.offset,t.byteLength)),Tv(e,Uint8Array)&&(e=Fy.from(e,e.offset,e.byteLength)),!Fy.isBuffer(t)||!Fy.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,r=e.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},Fy.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Fy.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Fy.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const r=Fy.allocUnsafe(e);let i=0;for(n=0;n<t.length;++n){let e=t[n];if(Tv(e,Uint8Array))i+e.length>r.length?(Fy.isBuffer(e)||(e=Fy.from(e)),e.copy(r,i)):Uint8Array.prototype.set.call(r,e,i);else{if(!Fy.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(r,i)}i+=e.length}return r},Fy.byteLength=Hy,Fy.prototype._isBuffer=!0,Fy.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)Gy(this,e,e+1);return this},Fy.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)Gy(this,e,e+3),Gy(this,e+1,e+2);return this},Fy.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)Gy(this,e,e+7),Gy(this,e+1,e+6),Gy(this,e+2,e+5),Gy(this,e+3,e+4);return this},Fy.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?nv(this,0,t):Ky.apply(this,arguments)},Fy.prototype.toLocaleString=Fy.prototype.toString,Fy.prototype.equals=function(t){if(!Fy.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Fy.compare(this,t)},Fy.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},My&&(Fy.prototype[My]=Fy.prototype.inspect),Fy.prototype.compare=function(t,e,n,r,i){if(Tv(t,Uint8Array)&&(t=Fy.from(t,t.offset,t.byteLength)),!Fy.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),c=this.slice(r,i),u=t.slice(e,n);for(let t=0;t<a;++t)if(c[t]!==u[t]){s=c[t],o=u[t];break}return s<o?-1:o<s?1:0},Fy.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},Fy.prototype.indexOf=function(t,e,n){return Wy(this,t,e,n,!0)},Fy.prototype.lastIndexOf=function(t,e,n){return Wy(this,t,e,n,!1)},Fy.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return Jy(this,t,e,n);case"utf8":case"utf-8":return Xy(this,t,e,n);case"ascii":case"latin1":case"binary":return Yy(this,t,e,n);case"base64":return Zy(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return tv(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},Fy.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function rv(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function iv(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function sv(t,e,n){const r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=e;r<n;++r)i+=Cv[t[r]];return i}function ov(t,e,n){const r=t.slice(e,n);let i="";for(let t=0;t<r.length-1;t+=2)i+=String.fromCharCode(r[t]+256*r[t+1]);return i}function av(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function cv(t,e,n,r,i,s){if(!Fy.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function uv(t,e,n,r,i){yv(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function lv(t,e,n,r,i){yv(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function hv(t,e,n,r,i,s){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function dv(t,e,n,r,i){return e=+e,n>>>=0,i||hv(t,0,n,4),Ay(t,e,n,r,23,4),n+4}function fv(t,e,n,r,i){return e=+e,n>>>=0,i||hv(t,0,n,8),Ay(t,e,n,r,52,8),n+8}Fy.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const r=this.subarray(t,e);return Object.setPrototypeOf(r,Fy.prototype),r},Fy.prototype.readUintLE=Fy.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||av(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return r},Fy.prototype.readUintBE=Fy.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||av(t,e,this.length);let r=this[t+--e],i=1;for(;e>0&&(i*=256);)r+=this[t+--e]*i;return r},Fy.prototype.readUint8=Fy.prototype.readUInt8=function(t,e){return t>>>=0,e||av(t,1,this.length),this[t]},Fy.prototype.readUint16LE=Fy.prototype.readUInt16LE=function(t,e){return t>>>=0,e||av(t,2,this.length),this[t]|this[t+1]<<8},Fy.prototype.readUint16BE=Fy.prototype.readUInt16BE=function(t,e){return t>>>=0,e||av(t,2,this.length),this[t]<<8|this[t+1]},Fy.prototype.readUint32LE=Fy.prototype.readUInt32LE=function(t,e){return t>>>=0,e||av(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Fy.prototype.readUint32BE=Fy.prototype.readUInt32BE=function(t,e){return t>>>=0,e||av(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Fy.prototype.readBigUInt64LE=Av((function(t){vv(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||wv(t,this.length-8);const r=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),Fy.prototype.readBigUInt64BE=Av((function(t){vv(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||wv(t,this.length-8);const r=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),Fy.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||av(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},Fy.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||av(t,e,this.length);let r=e,i=1,s=this[t+--r];for(;r>0&&(i*=256);)s+=this[t+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*e)),s},Fy.prototype.readInt8=function(t,e){return t>>>=0,e||av(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},Fy.prototype.readInt16LE=function(t,e){t>>>=0,e||av(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},Fy.prototype.readInt16BE=function(t,e){t>>>=0,e||av(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},Fy.prototype.readInt32LE=function(t,e){return t>>>=0,e||av(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Fy.prototype.readInt32BE=function(t,e){return t>>>=0,e||av(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Fy.prototype.readBigInt64LE=Av((function(t){vv(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||wv(t,this.length-8);const r=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),Fy.prototype.readBigInt64BE=Av((function(t){vv(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||wv(t,this.length-8);const r=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),Fy.prototype.readFloatLE=function(t,e){return t>>>=0,e||av(t,4,this.length),Cy(this,t,!0,23,4)},Fy.prototype.readFloatBE=function(t,e){return t>>>=0,e||av(t,4,this.length),Cy(this,t,!1,23,4)},Fy.prototype.readDoubleLE=function(t,e){return t>>>=0,e||av(t,8,this.length),Cy(this,t,!0,52,8)},Fy.prototype.readDoubleBE=function(t,e){return t>>>=0,e||av(t,8,this.length),Cy(this,t,!1,52,8)},Fy.prototype.writeUintLE=Fy.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){cv(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[e]=255&t;++s<n&&(i*=256);)this[e+s]=t/i&255;return e+n},Fy.prototype.writeUintBE=Fy.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){cv(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+n},Fy.prototype.writeUint8=Fy.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||cv(this,t,e,1,255,0),this[e]=255&t,e+1},Fy.prototype.writeUint16LE=Fy.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||cv(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},Fy.prototype.writeUint16BE=Fy.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||cv(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},Fy.prototype.writeUint32LE=Fy.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||cv(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},Fy.prototype.writeUint32BE=Fy.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||cv(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Fy.prototype.writeBigUInt64LE=Av((function(t,e=0){return uv(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Fy.prototype.writeBigUInt64BE=Av((function(t,e=0){return lv(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Fy.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);cv(this,t,e,n,r-1,-r)}let i=0,s=1,o=0;for(this[e]=255&t;++i<n&&(s*=256);)t<0&&0===o&&0!==this[e+i-1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},Fy.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);cv(this,t,e,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===o&&0!==this[e+i+1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},Fy.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||cv(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},Fy.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||cv(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},Fy.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||cv(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},Fy.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||cv(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},Fy.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||cv(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Fy.prototype.writeBigInt64LE=Av((function(t,e=0){return uv(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Fy.prototype.writeBigInt64BE=Av((function(t,e=0){return lv(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Fy.prototype.writeFloatLE=function(t,e,n){return dv(this,t,e,!0,n)},Fy.prototype.writeFloatBE=function(t,e,n){return dv(this,t,e,!1,n)},Fy.prototype.writeDoubleLE=function(t,e,n){return fv(this,t,e,!0,n)},Fy.prototype.writeDoubleBE=function(t,e,n){return fv(this,t,e,!1,n)},Fy.prototype.copy=function(t,e,n,r){if(!Fy.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);const i=r-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,r):Uint8Array.prototype.set.call(t,this.subarray(n,r),e),i},Fy.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!Fy.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===t.length){const e=t.charCodeAt(0);("utf8"===r&&e<128||"latin1"===r)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let i;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{const s=Fy.isBuffer(t)?t:Fy.from(t,r),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<n-e;++i)this[i+e]=s[i%o]}return this};const pv={};function gv(t,e,n){pv[t]=class extends n{get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}}}function mv(t){let e="",n=t.length;const r="-"===t[0]?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function yv(t,e,n,r,i,s){if(t>n||t<e){const r="bigint"==typeof e?"n":"";let i;throw i=s>3?0===e||e===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${e}${r} and <= ${n}${r}`,new pv.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,n){vv(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||wv(e,t.length-(n+1))}(r,i,s)}function vv(t,e){if("number"!=typeof t)throw new pv.ERR_INVALID_ARG_TYPE(e,"number",t)}function wv(t,e,n){if(Math.floor(t)!==t)throw vv(t,n),new pv.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new pv.ERR_BUFFER_OUT_OF_BOUNDS;throw new pv.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}gv("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),gv("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),gv("ERR_OUT_OF_RANGE",(function(t,e,n){let r=`The value of "${t}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=mv(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=mv(i)),i+="n"),r+=` It must be ${e}. Received ${i}`,r}),RangeError);const bv=/[^+/0-9A-Za-z-_]/g;function Ev(t,e){let n;e=e||1/0;const r=t.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(e-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Iv(t){return _y(function(t){if((t=(t=t.split("=")[0]).trim().replace(bv,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function _v(t,e,n,r){let i;for(i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i];return i}function Tv(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Sv(t){return t!=t}const Cv=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)e[r+i]=t[n]+t[i]}return e}();function Av(t){return"undefined"==typeof BigInt?kv:t}function kv(){throw new Error("BigInt not supported")}var Rv=Iy;function Nv(t){return vy.isPlainObject(t)||vy.isArray(t)}function Ov(t){return vy.endsWith(t,"[]")?t.slice(0,-2):t}function Dv(t,e,n){return t?t.concat(e).map((function(t,e){return t=Ov(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const Lv=vy.toFlatObject(vy,{},null,(function(t){return/^is[A-Z]/.test(t)}));var Pv=function(t,e,n){if(!vy.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const r=(n=vy.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!vy.isUndefined(e[t])}))).metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&vy.isSpecCompliantForm(e);if(!vy.isFunction(i))throw new TypeError("visitor must be a function");function c(t){if(null===t)return"";if(vy.isDate(t))return t.toISOString();if(!a&&vy.isBlob(t))throw new Sy("Blob is not supported. Use a Buffer instead.");return vy.isArrayBuffer(t)||vy.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Rv.from(t):t}function u(t,n,i){let a=t;if(t&&!i&&"object"==typeof t)if(vy.endsWith(n,"{}"))n=r?n:n.slice(0,-2),t=JSON.stringify(t);else if(vy.isArray(t)&&function(t){return vy.isArray(t)&&!t.some(Nv)}(t)||(vy.isFileList(t)||vy.endsWith(n,"[]"))&&(a=vy.toArray(t)))return n=Ov(n),a.forEach((function(t,r){!vy.isUndefined(t)&&null!==t&&e.append(!0===o?Dv([n],r,s):null===o?n:n+"[]",c(t))})),!1;return!!Nv(t)||(e.append(Dv(i,n,s),c(t)),!1)}const l=[],h=Object.assign(Lv,{defaultVisitor:u,convertValue:c,isVisitable:Nv});if(!vy.isObject(t))throw new TypeError("data must be an object");return function t(n,r){if(!vy.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),vy.forEach(n,(function(n,s){!0===(!(vy.isUndefined(n)||null===n)&&i.call(e,n,vy.isString(s)?s.trim():s,r,h))&&t(n,r?r.concat(s):[s])})),l.pop()}}(t),e};function xv(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function Mv(t,e){this._pairs=[],t&&Pv(t,this,e)}const Uv=Mv.prototype;Uv.append=function(t,e){this._pairs.push([t,e])},Uv.toString=function(t){const e=t?function(e){return t.call(this,e,xv)}:xv;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var Fv=Mv;function Bv(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Vv(t,e,n){if(!e)return t;const r=n&&n.encode||Bv,i=n&&n.serialize;let s;if(s=i?i(e,n):vy.isURLSearchParams(e)?e.toString():new Fv(e,n).toString(r),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}var jv=class{use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){vy.forEach(this.handlers,(function(e){null!==e&&t(e)}))}constructor(){this.handlers=[]}},qv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var $v={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Fv,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function zv(t,e){return Pv(t,new $v.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,r){return $v.isNode&&vy.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}var Hv=function(t){function e(t,n,r,i){let s=t[i++];const o=Number.isFinite(+s),a=i>=t.length;if(s=!s&&vy.isArray(r)?r.length:s,a)return vy.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&vy.isObject(r[s])||(r[s]=[]);return e(t,n,r[s],i)&&vy.isArray(r[s])&&(r[s]=function(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}(r[s])),!o}if(vy.isFormData(t)&&vy.isFunction(t.entries)){const n={};return vy.forEachEntry(t,((t,r)=>{e(function(t){return vy.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),r,n,0)})),n}return null};const Kv={"Content-Type":void 0};const Gv={transitional:qv,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",r=n.indexOf("application/json")>-1,i=vy.isObject(t);i&&vy.isHTMLForm(t)&&(t=new FormData(t));if(vy.isFormData(t))return r&&r?JSON.stringify(Hv(t)):t;if(vy.isArrayBuffer(t)||vy.isBuffer(t)||vy.isStream(t)||vy.isFile(t)||vy.isBlob(t))return t;if(vy.isArrayBufferView(t))return t.buffer;if(vy.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return zv(t,this.formSerializer).toString();if((s=vy.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return Pv(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||r?(e.setContentType("application/json",!1),function(t,e,n){if(vy.isString(t))try{return(e||JSON.parse)(t),vy.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||Gv.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(t&&vy.isString(t)&&(n&&!this.responseType||r)){const n=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw Sy.from(t,Sy.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$v.classes.FormData,Blob:$v.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};vy.forEach(["delete","get","head"],(function(t){Gv.headers[t]={}})),vy.forEach(["post","put","patch"],(function(t){Gv.headers[t]=vy.merge(Kv)}));var Wv=Gv;const Qv=vy.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Jv=t=>{const e={};let n,r,i;return t&&t.split("\n").forEach((function(t){i=t.indexOf(":"),n=t.substring(0,i).trim().toLowerCase(),r=t.substring(i+1).trim(),!n||e[n]&&Qv[n]||("set-cookie"===n?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)})),e};const Xv=Symbol("internals");function Yv(t){return t&&String(t).trim().toLowerCase()}function Zv(t){return!1===t||null==t?t:vy.isArray(t)?t.map(Zv):String(t)}function tw(t,e,n,r,i){return vy.isFunction(r)?r.call(this,e,n):(i&&(e=n),vy.isString(e)?vy.isString(r)?-1!==e.indexOf(r):vy.isRegExp(r)?r.test(e):void 0:void 0)}let ew=Symbol.iterator,nw=Symbol.toStringTag;class rw{set(t,e,n){const r=this;function i(t,e,n){const i=Yv(e);if(!i)throw new Error("header name must be a non-empty string");const s=vy.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||e]=Zv(t))}const s=(t,e)=>vy.forEach(t,((t,n)=>i(t,n,e)));return vy.isPlainObject(t)||t instanceof this.constructor?s(t,e):vy.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?s(Jv(t),e):null!=t&&i(e,t,n),this}get(t,e){if(t=Yv(t)){const n=vy.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}(t);if(vy.isFunction(e))return e.call(this,t,n);if(vy.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Yv(t)){const n=vy.findKey(this,t);return!(!n||void 0===this[n]||e&&!tw(0,this[n],n,e))}return!1}delete(t,e){const n=this;let r=!1;function i(t){if(t=Yv(t)){const i=vy.findKey(n,t);!i||e&&!tw(0,n[i],i,e)||(delete n[i],r=!0)}}return vy.isArray(t)?t.forEach(i):i(t),r}clear(t){const e=Object.keys(this);let n=e.length,r=!1;for(;n--;){const i=e[n];t&&!tw(0,this[i],i,t,!0)||(delete this[i],r=!0)}return r}normalize(t){const e=this,n={};return vy.forEach(this,((r,i)=>{const s=vy.findKey(n,i);if(s)return e[s]=Zv(r),void delete e[i];const o=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete e[i],e[o]=Zv(r),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return vy.forEach(this,((n,r)=>{null!=n&&!1!==n&&(e[r]=t&&vy.isArray(n)?n.join(", "):n)})),e}[ew](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[nw](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[Xv]=this[Xv]={accessors:{}}).accessors,n=this.prototype;function r(t){const r=Yv(t);e[r]||(!function(t,e){const n=vy.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})}))}(n,t),e[r]=!0)}return vy.isArray(t)?t.forEach(r):r(t),this}constructor(t){t&&this.set(t)}}rw.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),vy.freezeMethods(rw.prototype),vy.freezeMethods(rw);var iw=rw;function sw(t,e){const n=this||Wv,r=e||n,i=iw.from(r.headers);let s=r.data;return vy.forEach(t,(function(t){s=t.call(n,s,i.normalize(),e?e.status:void 0)})),i.normalize(),s}function ow(t){return!(!t||!t.__CANCEL__)}function aw(t,e,n){Sy.call(this,null==t?"canceled":t,Sy.ERR_CANCELED,e,n),this.name="CanceledError"}vy.inherits(aw,Sy,{__CANCEL__:!0});var cw=aw;function uw(t,e,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new Sy("Request failed with status code "+n.status,[Sy.ERR_BAD_REQUEST,Sy.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var lw=$v.isStandardBrowserEnv?{write:function(t,e,n,r,i,s){const o=[];o.push(t+"="+encodeURIComponent(e)),vy.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),vy.isString(r)&&o.push("path="+r),vy.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function hw(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function dw(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?hw(t,e):e}var fw=$v.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function r(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=r(window.location.href),function(t){const e=vy.isString(t)?r(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function pw(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var gw=function(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=r[o];i||(i=c),n[s]=a,r[s]=c;let l=o,h=0;for(;l!==s;)h+=n[l++],l%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),c-i<e)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}};function mw(t,e){let n=0;const r=gw(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:i};u[e?"download":"upload"]=!0,t(u)}}const yw={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let r=t.data;const i=iw.from(t.headers).normalize(),s=t.responseType;let o;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}vy.isFormData(r)&&($v.isStandardBrowserEnv||$v.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(e+":"+n))}const u=dw(t.baseURL,t.url);function l(){if(!c)return;const r=iw.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());uw((function(t){e(t),a()}),(function(t){n(t),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:t,request:c}),c=null}if(c.open(t.method.toUpperCase(),Vv(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new Sy("Request aborted",Sy.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new Sy("Network Error",Sy.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const r=t.transitional||qv;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new Sy(e,r.clarifyTimeoutError?Sy.ETIMEDOUT:Sy.ECONNABORTED,t,c)),c=null},$v.isStandardBrowserEnv){const e=(t.withCredentials||fw(u))&&t.xsrfCookieName&&lw.read(t.xsrfCookieName);e&&i.set(t.xsrfHeaderName,e)}void 0===r&&i.setContentType(null),"setRequestHeader"in c&&vy.forEach(i.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),vy.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),s&&"json"!==s&&(c.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&c.addEventListener("progress",mw(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",mw(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=e=>{c&&(n(!e||e.type?new cw(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const h=pw(u);h&&-1===$v.protocols.indexOf(h)?n(new Sy("Unsupported protocol "+h+":",Sy.ERR_BAD_REQUEST,t)):c.send(r||null)}))}};vy.forEach(yw,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var vw={getAdapter:t=>{t=vy.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let i=0;i<e&&(n=t[i],!(r=vy.isString(n)?yw[n.toLowerCase()]:n));i++);if(!r){if(!1===r)throw new Sy(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(vy.hasOwnProp(yw,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!vy.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:yw};function ww(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new cw(null,t)}function bw(t){ww(t),t.headers=iw.from(t.headers),t.data=sw.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return vw.getAdapter(t.adapter||Wv.adapter)(t).then((function(e){return ww(t),e.data=sw.call(t,t.transformResponse,e),e.headers=iw.from(e.headers),e}),(function(e){return ow(e)||(ww(t),e&&e.response&&(e.response.data=sw.call(t,t.transformResponse,e.response),e.response.headers=iw.from(e.response.headers))),Promise.reject(e)}))}const Ew=t=>t instanceof iw?t.toJSON():t;function Iw(t,e){e=e||{};const n={};function r(t,e,n){return vy.isPlainObject(t)&&vy.isPlainObject(e)?vy.merge.call({caseless:n},t,e):vy.isPlainObject(e)?vy.merge({},e):vy.isArray(e)?e.slice():e}function i(t,e,n){return vy.isUndefined(e)?vy.isUndefined(t)?void 0:r(void 0,t,n):r(t,e,n)}function s(t,e){if(!vy.isUndefined(e))return r(void 0,e)}function o(t,e){return vy.isUndefined(e)?vy.isUndefined(t)?void 0:r(void 0,t):r(void 0,e)}function a(n,i,s){return s in e?r(n,i):s in t?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>i(Ew(t),Ew(e),!0)};return vy.forEach(Object.keys(Object.assign({},t,e)),(function(r){const s=c[r]||i,o=s(t[r],e[r],r);vy.isUndefined(o)&&s!==a||(n[r]=o)})),n}const _w={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{_w[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Tw={};_w.transitional=function(t,e,n){function r(t,e){return"[Axios v1.4.0] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,i,s)=>{if(!1===t)throw new Sy(r(i," has been removed"+(e?" in "+e:"")),Sy.ERR_DEPRECATED);return e&&!Tw[i]&&(Tw[i]=!0,console.warn(r(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,s)}};var Sw={assertOptions:function(t,e,n){if("object"!=typeof t)throw new Sy("options must be an object",Sy.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new Sy("option "+s+" must be "+n,Sy.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Sy("Unknown option "+s,Sy.ERR_BAD_OPTION)}},validators:_w};const Cw=Sw.validators;class Aw{request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=Iw(this.defaults,e);const{transitional:n,paramsSerializer:r,headers:i}=e;let s;void 0!==n&&Sw.assertOptions(n,{silentJSONParsing:Cw.transitional(Cw.boolean),forcedJSONParsing:Cw.transitional(Cw.boolean),clarifyTimeoutError:Cw.transitional(Cw.boolean)},!1),null!=r&&(vy.isFunction(r)?e.paramsSerializer={serialize:r}:Sw.assertOptions(r,{encode:Cw.function,serialize:Cw.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=i&&vy.merge(i.common,i[e.method]),s&&vy.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete i[t]})),e.headers=iw.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let l,h=0;if(!a){const t=[bw.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,c),l=t.length,u=Promise.resolve(e);h<l;)u=u.then(t[h++],t[h++]);return u}l=o.length;let d=e;for(h=0;h<l;){const t=o[h++],e=o[h++];try{d=t(d)}catch(t){e.call(this,t);break}}try{u=bw.call(this,d)}catch(t){return Promise.reject(t)}for(h=0,l=c.length;h<l;)u=u.then(c[h++],c[h++]);return u}getUri(t){return Vv(dw((t=Iw(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}constructor(t){this.defaults=t,this.interceptors={request:new jv,response:new jv}}}vy.forEach(["delete","get","head","options"],(function(t){Aw.prototype[t]=function(e,n){return this.request(Iw(n||{},{method:t,url:e,data:(n||{}).data}))}})),vy.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(Iw(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Aw.prototype[t]=e(),Aw.prototype[t+"Form"]=e(!0)}));var kw=Aw;class Rw{throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new Rw((function(e){t=e})),cancel:t}}constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t,r,i){n.reason||(n.reason=new cw(t,r,i),e(n.reason))}))}}var Nw=Rw;const Ow={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ow).forEach((([t,e])=>{Ow[e]=t}));var Dw=Ow;const Lw=function t(e){const n=new kw(e),r=Vm(kw.prototype.request,n);return vy.extend(r,kw.prototype,n,{allOwnKeys:!0}),vy.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return t(Iw(e,n))},r}(Wv);Lw.Axios=kw,Lw.CanceledError=cw,Lw.CancelToken=Nw,Lw.isCancel=ow,Lw.VERSION="1.4.0",Lw.toFormData=Pv,Lw.AxiosError=Sy,Lw.Cancel=Lw.CanceledError,Lw.all=function(t){return Promise.all(t)},Lw.spread=function(t){return function(e){return t.apply(null,e)}},Lw.isAxiosError=function(t){return vy.isObject(t)&&!0===t.isAxiosError},Lw.mergeConfig=Iw,Lw.AxiosHeaders=iw,Lw.formToJSON=t=>Hv(vy.isHTMLForm(t)?new FormData(t):t),Lw.HttpStatusCode=Dw,Lw.default=Lw;var Pw=Lw;const{Axios:xw,AxiosError:Mw,CanceledError:Uw,isCancel:Fw,CancelToken:Bw,VERSION:Vw,all:jw,Cancel:qw,isAxiosError:$w,spread:zw,toFormData:Hw,AxiosHeaders:Kw,HttpStatusCode:Gw,formToJSON:Ww,mergeConfig:Qw}=Pw,Jw=(document.querySelector(".scrollbar"),document.querySelector(".aside-list"));Jw.addEventListener("wheel",(function(t){t.preventDefault();var e=t.deltaY||t.detail||t.wheelDelta;Jw.scrollTop+=e})),async function(){await Pw.get("https://books-backend.p.goit.global/books/category-list").then((t=>{console.log(t.data);let e=1;Jw.insertAdjacentHTML("afterbegin",`<li class="category-aside-list"><button type="button" id="${e}" class="aside-list-button selected-category">All categories</button></li>`);for(let n=0;n<t.data.length;n++)e+=1,Jw.insertAdjacentHTML("beforeend",`<li class="category-aside-list"><button type="button" id="btnAsideListId${e}" class="aside-list-button">${t.data[n].list_name}</button></li>`);!function(){const t=document.querySelectorAll(".aside-list-button");t.forEach((e=>{e.addEventListener("click",(function(){t.forEach((t=>{t.classList.remove("selected-category")})),Xw=this.textContent,this.classList.add("selected-category"),console.log(Xw)}))}))}()}))}();let Xw="All categories";async function Yw(){try{const t=(await Pw.get("https://books-backend.p.goit.global/books/top-books")).data,e=document.querySelector(".bookShell");return t.forEach((n=>{const r=function(t){const{list_name:e,books:n}=t,r=document.createElement("div");r.className="book",r.classList.add("card");const i=document.createElement("div");i.className="book__body";const s=document.createElement("h2");s.textContent=e,s.className="book__category",i.appendChild(s);const o=document.createElement("ul");o.className="book__list",Array.isArray(n)&&n.slice(0,5).forEach((t=>{const e=document.createElement("li");e.className="book__item",e.addEventListener("click",(()=>{console.log(`Book ${t.title} clicked`)}));const n=document.createElement("div");n.classList.add("book-image-container");const r=document.createElement("img");r.src=t.book_image,r.alt=t.title,r.loading="lazy",r.className="book__img",r.classList.add("js-gallery-image"),r.setAttribute("data-id",t._id),n.appendChild(r);const i=document.createElement("div");i.classList.add("quick-view"),i.textContent="QUICK VIEW",i.setAttribute("data-id",t._id),n.appendChild(i),e.appendChild(n);const s=document.createElement("p");s.textContent=t.title,s.className="book__title",t.title.length>15?s.textContent=t.title.substring(0,15)+"...":s.textContent=t.title,e.appendChild(s);const a=document.createElement("p");a.textContent=`${t.author}`,a.className="book__author",e.appendChild(a),o.appendChild(e)}));i.appendChild(o),r.appendChild(i);const a=document.createElement("button");return a.textContent="See more",a.addEventListener("click",(async()=>{const t=e;!function(){const t=document.querySelector(".bookShell");for(;t.firstChild;)t.removeChild(t.firstChild)}();try{await async function(t){const e=`https://books-backend.p.goit.global/books/category?category=${t}`;try{const n=(await Pw.get(e)).data,r=document.querySelector(".bookShell");if(r.classList.add("bookShell-category"),function(t){const e=document.querySelector(".bookShell__title"),n=t.split(" "),r=n.shift();e.innerHTML=`${r} <span class="bookShell__title_span">${n.join(" ")}</span>`}(t),n.forEach((t=>{const{_id:e,book_image:n,title:i,author:s}=t,o=function(t,e,n,r){const i=document.createElement("div");i.className="book",i.addEventListener("click",(()=>{console.log(`Book ${e} clicked, ID: ${r}`)}));const s=document.createElement("div");s.classList.add("book-image-container");const o=document.createElement("img");o.src=t,o.alt=e,o.loading="lazy",o.className="book__img",o.classList.add("js-gallery-image"),o.setAttribute("data-id",r),s.appendChild(o);const a=document.createElement("div");a.classList.add("quick-view"),a.textContent="QUICK VIEW",a.setAttribute("data-id",r),s.appendChild(a),i.appendChild(s);const c=document.createElement("p");c.textContent=e,c.className="book__title",e.length>15?c.textContent=e.substring(0,15)+"...":c.textContent=e;i.appendChild(c);const u=document.createElement("p");u.textContent=n,u.classList.add("book__author","author"),n.length>15?u.textContent=n.substring(0,15)+"...":u.textContent=n;return i.appendChild(u),i}(n,i,s,e);o&&r.appendChild(o)})),0===n.length){const t=document.createElement("div");t.textContent="No books found",t.style.textAlign="center",r.appendChild(t)}return n}catch(t){throw console.error(t),t}}(t)}catch(t){console.error(t)}Zw()})),a.className="book__button",r.appendChild(a),r}(n);if(r&&e.appendChild(r),0===t.length){const t=document.querySelector(".bookShell"),e=document.createElement("div");e.textContent="No books found",e.style.textAlign="center",t.appendChild(e)}})),t}catch(t){throw console.error(t),t}}function Zw(){const t=window.innerWidth,e=t<480?1:t<780?3:5;document.querySelectorAll(".book__body ul").forEach((t=>{const n=t.querySelectorAll("li");for(let t=0;t<n.length;t++)n[t].style.display=t<e?"block":"none"}))}window.addEventListener("resize",Zw),Zw(),document.addEventListener("DOMContentLoaded",(async()=>{const t=document.createElement("div");t.classList.add("bookShell"),document.body.appendChild(t),Zw();try{await Yw()}catch(t){console.error(t)}Zw()}));var tb;tb=new URL(s("kyEFX").resolve("jDPoR"),import.meta.url).toString();var eb;eb=new URL(s("kyEFX").resolve("6uEBG"),import.meta.url).toString();var nb;nb=new URL(s("kyEFX").resolve("k1r7D"),import.meta.url).toString();var rb;rb=new URL(s("kyEFX").resolve("fp3fh"),import.meta.url).toString();var ib;ib=new URL(s("kyEFX").resolve("gQHiG"),import.meta.url).toString();var sb;sb=new URL(s("kyEFX").resolve("6dHKE"),import.meta.url).toString();var ob;ob=new URL(s("kyEFX").resolve("4XQzn"),import.meta.url).toString();var ab;ab=new URL(s("kyEFX").resolve("6jpBN"),import.meta.url).toString();var cb;cb=new URL(s("kyEFX").resolve("5PSBZ"),import.meta.url).toString();const ub=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:n(tb)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:n(eb)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:n(nb)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:n(rb)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:n(ib)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:n(sb)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:n(ob)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:n(ab)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:n(cb)}];console.log(ub);const lb=document.querySelector(".support__list");ub.map(((t,e)=>{!function({title:t,url:e,img:n},r){const i=r+1;lb.insertAdjacentHTML("beforeend",`<li class="support__item"><a href="${e}" class="support__link"><span class="support__number">${String(i).padStart(2,"0")}</span><img src="${n}" alt="${t}" class="support__img"></a></li>`)}(t,e)}));var hb,db={fetchBookById:async function(t){return await fetch(`https://books-backend.p.goit.global/books//${t}`).then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}))}};hb=new URL(s("kyEFX").resolve("fGJyr"),import.meta.url).toString();var fb;fb=new URL(s("kyEFX").resolve("1HTp7"),import.meta.url).toString();var pb;pb=new URL(s("kyEFX").resolve("aSJpf"),import.meta.url).toString();const gb={div:document.querySelector(".bookShell"),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),bookCard:document.querySelector(".js-book-card"),shoppingListBtn:document.querySelector('[data-action="shopping-list-modal"]'),text:document.querySelector(".js-modal-text")};let mb={};const yb=localStorage.getItem("info-shopping-list");let vb=JSON.parse(yb)||[];function wb(){window.removeEventListener("keydown",bb),document.body.classList.remove("js-show-modal")}function bb(t){"Escape"===t.code&&wb()}function Eb(t){const{book_image:e,author:r,title:i,description:s,buy_links:o,_id:a,list_name:c}=t;mb.bookId=a,mb.bookAuthor=r,mb.bookTitle=i,mb.bookDescription=s,mb.bookCategory=c,mb.bookImage=e,mb.bookAmazon=o[0].url,mb.bookOpenBook=o[1].url,mb.bookShop=o[4].url;const u=`<img class="book-image"" src="${e}" alt="${i}" loading="lazy" data-id="${a}"/>\n    <div class="book-description-thumb">\n    <p class="book-title">${i}</p>\n    <p class="book-author">${r}</p>\n    <p class="book-description">${s}</p>\n    <div class="book-links">\n    <a class="book-buy-url" href="${o[0].url}" target="_blank" rel="noreferrer noopener">\n    <img src="${n(hb)}" width="62px" height="19px"/>\n    </a>\n    <a class="book-buy-url" href="${o[1].url}" target="_blank" rel="noreferrer noopener">\n    <img src="${n(pb)}" width="33px" height="32px"/>\n    </a>\n    <a class="book-buy-url" href="${o[4].url}" target="_blank" rel="noreferrer noopener">\n    <img src="${n(fb)}" width="38px" height="36px"/>\n    </a>\n    </div>\n    </div>`;gb.bookCard.innerHTML=u}gb.div.addEventListener("click",(function(t){t.preventDefault();const e=t.target.classList.contains("quick-view");if(!t.target.classList.contains("js-gallery-image")&&!e)return;const n=t.target.dataset.id;0!==vb.length&&vb.find((t=>t.bookId===n))?(gb.shoppingListBtn.textContent="remove from the shopping list",gb.shoppingListBtn.classList.add("modal__button-shopping-list--remove"),gb.text.classList.remove("visually-hidden")):(gb.shoppingListBtn.textContent="add to shopping list",gb.text.classList.add("visually-hidden"),gb.shoppingListBtn.classList.remove("modal__button-shopping-list--remove"));gb.bookCard.innerHTML="",db.fetchBookById(n).then(Eb).catch((t=>console.err("Ooops! Something went wrong!"))),window.addEventListener("keydown",bb),document.body.classList.add("js-show-modal")})),gb.closeModalBtn.addEventListener("click",wb),gb.backdrop.addEventListener("click",(function(t){t.currentTarget===t.target&&wb()})),gb.shoppingListBtn.addEventListener("click",(function(t){try{const t=vb.findIndex((t=>t.bookId===mb.bookId));-1!==t?(vb.splice(t,1),localStorage.removeItem("info-shopping-list"),localStorage.setItem("info-shopping-list",JSON.stringify(vb))):(vb.push({...mb}),localStorage.setItem("info-shopping-list",JSON.stringify(vb)))}catch{console.err("Ooops! Something went wrong!")}wb()}));
//# sourceMappingURL=index.fe2f67f6.js.map
