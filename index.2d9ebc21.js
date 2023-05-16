function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},s={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},t.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var r,s;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},s=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.2d9ebc21.js","jDPoR":"save-the-children.f3449026.png","6uEBG":"project-hope.2984f7de.png","k1r7D":"united-24.4c1c8691.png","fp3fh":"international-medical-corps.11c3a1fd.png","gQHiG":"medecins-sans-frontieres.b651900c.png","6dHKE":"razom.a52e8612.png","4XQzn":"action-against-hunger.6b5411e6.png","6jpBN":"world-vision.9e0125e2.png","5PSBZ":"sergiy-prytula.a0719334.png","j8TBH":"save-the-children@2x.6d2d66fa.png","4QcYO":"project-hope@2x.746c1364.png","cuKVH":"united-24@2x.37107713.png","cPZ13":"international-medical-corps@2x.dae37217.png","fQSFO":"medecins-sans-frontieres@2x.8ad1827b.png","jYmqR":"razom@2x.57b9cad1.png","3xzbG":"action-against-hunger@2x.f670b5f9.png","6T9rv":"world-vision@2x.cd8a59aa.png","kSFhs":"sergiy-prytula@2x.2a4aef91.png","fGJyr":"amazon.b3892198.svg","1HTp7":"bookshop.a185b304.svg","aSJpf":"ibooks.9bcaf007.svg"}')),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();var o,a,l,c=o={};function u(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function d(e){if(a===setTimeout)return setTimeout(e,0);if((a===u||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:u}catch(e){a=u}try{l="function"==typeof clearTimeout?clearTimeout:h}catch(e){l=h}}();var p,f=[],m=!1,g=-1;function y(){m&&p&&(m=!1,p.length?f=p.concat(f):g=-1,f.length&&v())}function v(){if(!m){var e=d(y);m=!0;for(var t=f.length;t;){for(p=f,f=[];++g<t;)p&&p[g].run();g=-1,t=f.length}p=null,m=!1,function(e){if(l===clearTimeout)return clearTimeout(e);if((l===h||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}(e)}}function w(e,t){this.fun=e,this.array=t}function b(){}c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new w(e,t)),1!==f.length||m||d(v)},w.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=b,c.addListener=b,c.once=b,c.off=b,c.removeListener=b,c.removeAllListeners=b,c.emit=b,c.prependListener=b,c.prependOnceListener=b,c.listeners=function(e){return[]},c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0};
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
const E=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},T={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const s=e[t],i=t+1<e.length,o=i?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,u=(3&s)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,i||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(E(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==i||null==o||null==a)throw new S;const l=s<<2|i>>4;if(r.push(l),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I=function(e){return function(e){const t=E(e);return T.encodeByteArray(t,!0)}(e).replace(/\./g,"")},C=function(e){try{return T.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
const _=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,A=()=>{try{return _()||(()=>{if(void 0===o||void 0===o.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&C(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},k=e=>{var t,n;return null===(n=null===(t=A())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},x=e=>{const t=k(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},M=()=>{var e;return null===(e=A())||void 0===e?void 0:e.config},L=e=>{var t;return null===(t=A())||void 0===t?void 0:t[`_${e}`]};
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
class O{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */function R(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[I(JSON.stringify({alg:"none",type:"JWT"})),I(JSON.stringify(i)),""].join(".")}
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
 */function N(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function D(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function P(){const e=N();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function F(){try{return"object"==typeof indexedDB}catch(e){return!1}}class U extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,U.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,B.prototype.create)}}class B{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){return e.replace(V,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new U(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const V=/\{\$([^}]+)}/g;
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
 */function $(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function z(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(j(n)&&j(i)){if(!z(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function j(e){return null!==e&&"object"==typeof e}
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
function q(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function H(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function G(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function W(e,t){const n=new K(e,t);return n.subscribe.bind(n)}class K{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=X),void 0===r.error&&(r.error=X),void 0===r.complete&&(r.complete=X);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function X(){}
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
function Y(e){return e&&e._delegate?e._delegate:e}class Q{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class J{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new O;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Z{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new J(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const ee=[];var te,ne;(ne=te||(te={}))[ne.DEBUG=0]="DEBUG",ne[ne.VERBOSE=1]="VERBOSE",ne[ne.INFO=2]="INFO",ne[ne.WARN=3]="WARN",ne[ne.ERROR=4]="ERROR",ne[ne.SILENT=5]="SILENT";const re={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},se=te.INFO,ie={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},oe=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=ie[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class ae{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?re[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}constructor(e){this.name=e,this._logLevel=se,this._logHandler=oe,this._userLogHandler=null,ee.push(this)}}let le,ce;const ue=new WeakMap,he=new WeakMap,de=new WeakMap,pe=new WeakMap,fe=new WeakMap;let me={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return he.get(e);if("objectStoreNames"===t)return e.objectStoreNames||de.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ve(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ge(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ce||(ce=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(we(this),t),ve(ue.get(this))}:function(...t){return ve(e.apply(we(this),t))}:function(t,...n){const r=e.call(we(this),t,...n);return de.set(r,t.sort?t.sort():[t]),ve(r)}}function ye(e){return"function"==typeof e?ge(e):(e instanceof IDBTransaction&&function(e){if(he.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));he.set(e,t)}(e),t=e,(le||(le=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,me):e);var t}function ve(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(ve(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&ue.set(t,e)})).catch((()=>{})),fe.set(t,e),t}(e);if(pe.has(e))return pe.get(e);const t=ye(e);return t!==e&&(pe.set(e,t),fe.set(t,e)),t}const we=e=>fe.get(e);function be(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=ve(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(ve(o.result),e.oldVersion,e.newVersion,ve(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{i&&e.addEventListener("close",(()=>i())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Ee=["get","getKey","getAll","getAllKeys","count"],Te=["put","add","delete","clear"],Se=new Map;function Ie(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Se.get(t))return Se.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Te.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!Ee.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return Se.set(t,i),i}me=(e=>({...e,get:(t,n,r)=>Ie(t,n)||e.get(t,n,r),has:(t,n)=>!!Ie(t,n)||e.has(t,n)}))(me);
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
class Ce{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const _e=new ae("@firebase/app"),Ae={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ke=new Map,xe=new Map;function Me(e,t){try{e.container.addComponent(t)}catch(n){_e.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Le(e){const t=e.name;if(xe.has(t))return _e.debug(`There were multiple attempts to register component ${t}.`),!1;xe.set(t,e);for(const t of ke.values())Me(t,e);return!0}function Oe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const Re=new B("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Ne{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Re.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Q("app",(()=>this),"PUBLIC"))}}
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
 */function De(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),s=r.name;if("string"!=typeof s||!s)throw Re.create("bad-app-name",{appName:String(s)});if(n||(n=M()),!n)throw Re.create("no-options");const i=ke.get(s);if(i){if(z(n,i.options)&&z(r,i.config))return i;throw Re.create("duplicate-app",{appName:s})}const o=new Z(s);for(const e of xe.values())o.addComponent(e);const a=new Ne(n,r,o);return ke.set(s,a),a}function Pe(e="[DEFAULT]"){const t=ke.get(e);if(!t&&"[DEFAULT]"===e&&M())return De();if(!t)throw Re.create("no-app",{appName:e});return t}function Fe(e,t,n){var r;let s=null!==(r=Ae[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${s}" with version "${t}":`];return i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void _e.warn(e.join(" "))}Le(new Q(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}let Ue=null;function Be(){return Ue||(Ue=be("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Re.create("idb-open",{originalErrorMessage:e.message})}))),Ue}async function Ve(e,t){try{const n=(await Be()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");await r.put(t,$e(e)),await n.done}catch(e){if(e instanceof U)_e.warn(e.message);else{const t=Re.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});_e.warn(t.message)}}}function $e(e){return`${e.name}!${e.options.appId}`}
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
 */class ze{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=je();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=je(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),He(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),He(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=I(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function je(){return(new Date).toISOString().substring(0,10)}class qe{async runIndexedDBEnvironmentCheck(){return!!F()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await Be();return await t.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get($e(e))}catch(e){if(e instanceof U)_e.warn(e.message);else{const t=Re.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});_e.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ve(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ve(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function He(e){return I(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var Ge;Ge="",Le(new Q("platform-logger",(e=>new Ce(e)),"PRIVATE")),Le(new Q("heartbeat",(e=>new ze(e)),"PRIVATE")),Fe("@firebase/app","0.9.10",Ge),Fe("@firebase/app","0.9.10","esm2017"),Fe("fire-js","");
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
Fe("firebase","9.22.0","app");function We(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}Object.create;Object.create;function Ke(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xe=Ke,Ye=new B("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Qe=new ae("@firebase/auth");function Je(e,...t){Qe.logLevel<=te.ERROR&&Qe.error(`Auth (9.22.0): ${e}`,...t)}
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
 */function Ze(e,...t){throw nt(e,...t)}function et(e,...t){return nt(e,...t)}function tt(e,t,n){const r=Object.assign(Object.assign({},Xe()),{[t]:n});return new B("auth","Firebase",r).create(t,{appName:e.name})}function nt(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ye.create(e,...t)}function rt(e,t,...n){if(!e)throw nt(t,...n)}function st(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Je(t),new Error(t)}function it(e,t){e||st(t)}
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
 */function ot(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function at(){return"http:"===lt()||"https:"===lt()}function lt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function ct(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(at()||D()||"connection"in navigator))||navigator.onLine}
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
class ut{get(){return ct()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,it(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
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
 */function ht(e,t){it(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class dt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const pt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},ft=new ut(3e4,6e4);
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
 */function mt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function gt(e,t,n,r,s={}){return yt(e,s,(async()=>{let s={},i={};r&&("GET"===t?i=r:s={body:JSON.stringify(r)});const o=q(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),dt.fetch()(wt(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function yt(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},pt),t);try{const t=new bt(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw Et(e,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const t=s.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Et(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw Et(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw Et(e,"user-disabled",i);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw tt(e,a,o);Ze(e,a)}}catch(t){if(t instanceof U)throw t;Ze(e,"network-request-failed",{message:String(t)})}}async function vt(e,t,n,r,s={}){const i=await gt(e,t,n,r,s);return"mfaPendingCredential"in i&&Ze(e,"multi-factor-auth-required",{_serverResponse:i}),i}function wt(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?ht(e.config,s):`${e.config.apiScheme}://${s}`}class bt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(et(this.auth,"network-request-failed"))),ft.get())}))}}function Et(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=et(e,t,r);return s.customData._tokenResponse=n,s}
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
function Tt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function St(e){return 1e3*Number(e)}function It(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Je("JWT malformed, contained fewer than 3 sections"),null;try{const e=C(n);return e?JSON.parse(e):(Je("Failed to decode base64 JWT payload"),null)}catch(e){return Je("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function Ct(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof U&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class _t{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class At{_initializeTime(){this.lastSignInTime=Tt(this.lastLoginAt),this.creationTime=Tt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function kt(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Ct(e,async function(e,t){return gt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));rt(null==s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?i.providerUserInfo.map((e=>{var{providerId:t}=e,n=We(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&i.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new At(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
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
class xt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){rt(e.idToken,"internal-error"),rt(void 0!==e.idToken,"internal-error"),rt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=It(e);return rt(t,"internal-error"),rt(void 0!==t.exp,"internal-error"),rt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return rt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await
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
async function(e,t){const n=await yt(e,{},(async()=>{const n=q({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,i=wt(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",dt.fetch()(i,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new xt;return n&&(rt("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(rt("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(rt("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xt,this.toJSON())}_performRefresh(){return st("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function Mt(e,t){rt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Lt{async getIdToken(e){const t=await Ct(this,this.stsTokenManager.getToken(this.auth,e));return rt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Y(e),r=await n.getIdToken(t),s=It(r);rt(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i="object"==typeof s.firebase?s.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Tt(St(s.auth_time)),issuedAtTime:Tt(St(s.iat)),expirationTime:Tt(St(s.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Y(e);await kt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(rt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){rt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await kt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ct(this,async function(e,t){return gt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,i,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,p=null!==(i=t.photoURL)&&void 0!==i?i:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:T}=t;rt(v&&T,e,"internal-error");const S=xt.fromJSON(this.name,T);rt("string"==typeof v,e,"internal-error"),Mt(u,e.name),Mt(h,e.name),rt("boolean"==typeof w,e,"internal-error"),rt("boolean"==typeof b,e,"internal-error"),Mt(d,e.name),Mt(p,e.name),Mt(f,e.name),Mt(m,e.name),Mt(g,e.name),Mt(y,e.name);const I=new Lt({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:S,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(I.providerData=E.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new xt;r.updateFromServerResponse(t);const s=new Lt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await kt(s),s}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=We(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _t(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new At(s.createdAt||void 0,s.lastLoginAt||void 0)}}
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
 */const Ot=new Map;function Rt(e){it(e instanceof Function,"Expected a class definition");let t=Ot.get(e);return t?(it(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ot.set(e,t),t)}
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
 */class Nt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Nt.type="NONE";const Dt=Nt;
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
 */function Pt(e,t,n){return`firebase:${e}:${t}:${n}`}class Ft{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ft(Rt(Dt),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||Rt(Dt);const i=Pt(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(i);if(t){const r=Lt._fromJSON(e,t);n!==s&&(o=r),s=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(i)}catch(e){}}))),new Ft(s,e,n)):new Ft(s,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=Pt(this.userKey,r.apiKey,s),this.fullPersistenceKey=Pt("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Ut(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(zt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Bt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(qt(t))return"Blackberry";if(Ht(t))return"Webos";if(Vt(t))return"Safari";if((t.includes("chrome/")||$t(t))&&!t.includes("edge/"))return"Chrome";if(jt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Bt(e=N()){return/firefox\//i.test(e)}function Vt(e=N()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function $t(e=N()){return/crios\//i.test(e)}function zt(e=N()){return/iemobile/i.test(e)}function jt(e=N()){return/android/i.test(e)}function qt(e=N()){return/blackberry/i.test(e)}function Ht(e=N()){return/webos/i.test(e)}function Gt(e=N()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Wt(){return P()&&10===document.documentMode}function Kt(e=N()){return Gt(e)||jt(e)||Ht(e)||qt(e)||/windows phone/i.test(e)||zt(e)}
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
function Xt(e,t=[]){let n;switch(e){case"Browser":n=Ut(N());break;case"Worker":n=`${Ut(N())}-${e}`;break;default:n=e}return`${n}/JsCore/9.22.0/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */async function Yt(e,t){return gt(e,"GET","/v2/recaptchaConfig",mt(e,t))}
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
 */function Qt(e){return void 0!==e&&void 0!==e.enterprise}class Jt{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function Zt(e){return new Promise(((t,n)=>{const r=document.createElement("script");var s,i;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=et("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(i=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==i?i:document).appendChild(r)}))}function en(e){return`__${e}${Math.floor(1e6*Math.random())}`}class tn{async verify(e="verify",t=!1){function n(t,n,r){const s=window.grecaptcha;Qt(s)?s.enterprise.ready((()=>{s.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Yt(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Jt(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((s=>{if(!t&&Qt(window.grecaptcha))n(s,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));Zt("https://www.google.com/recaptcha/enterprise.js?render="+s).then((()=>{n(s,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=on(e)}}async function nn(e,t,n,r=!1){const s=new tn(e);let i;try{i=await s.verify(n)}catch(e){i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */class rn{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class sn{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rt(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Ft.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null==o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return rt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await kt(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Y(e):null;return t&&rt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&rt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Rt(e))}))}async initializeRecaptchaConfig(){const e=await Yt(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Jt(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new tn(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new B("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rt(e)||this._popupRedirectResolver;rt(t,this,"argument-error"),this.redirectPersistenceManager=await Ft.create(this,[Rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return rt(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return rt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Qe.logLevel<=te.WARN&&Qe.warn(`Auth (9.22.0): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new an(this),this.idTokenSubscription=new an(this),this.beforeStateQueue=new rn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ye,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}}function on(e){return Y(e)}class an{get next(){return rt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=W((e=>this.observer=e))}}
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
 */function ln(e,t,n){const r=on(e);rt(r._canInitEmulator,r,"emulator-config-failed"),rt(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),i=cn(t),{host:o,port:a}=function(e){const t=cn(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const e=s[1];return{host:e,port:un(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:un(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function cn(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function un(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class hn{toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function dn(e,t){return gt(e,"POST","/v1/accounts:update",t)}
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
async function pn(e,t){return vt(e,"POST","/v1/accounts:signInWithPassword",mt(e,t))}
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
class fn extends hn{static _fromEmailAndPassword(e,t){return new fn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new fn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await nn(e,n,"signInWithPassword");return pn(e,t)}return pn(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await nn(e,n,"signInWithPassword");return pn(e,t)}return Promise.reject(t)}));case"emailLink":
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
return async function(e,t){return vt(e,"POST","/v1/accounts:signInWithEmailLink",mt(e,t))}(e,{email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return dn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return vt(e,"POST","/v1/accounts:signInWithEmailLink",mt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
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
 */async function mn(e,t){return vt(e,"POST","/v1/accounts:signInWithIdp",mt(e,t))}
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
 */class gn extends hn{static _fromParams(e){const t=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=We(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new gn(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return mn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,mn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=q(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
class vn extends hn{static _fromVerification(e,t){return new vn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new vn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return vt(e,"POST","/v1/accounts:signInWithPhoneNumber",mt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await vt(e,"POST","/v1/accounts:signInWithPhoneNumber",mt(e,t));if(n.temporaryProof)throw Et(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return vt(e,"POST","/v1/accounts:signInWithPhoneNumber",mt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),yn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}=e;return n||t||r||s?new vn({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class wn{static parseLink(e){const t=function(e){const t=H(G(e)).link,n=t?H(G(t)).deep_link_id:null,r=H(G(e)).deep_link_id;return(r?H(G(r)).link:null)||r||n||t||e}(e);try{return new wn(t)}catch(e){return null}}constructor(e){var t,n,r,s,i,o;const a=H(G(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);rt(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(i=a.languageCode)&&void 0!==i?i:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class bn{static credential(e,t){return fn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=wn.parseLink(t);return rt(n,"argument-error"),fn._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=bn.PROVIDER_ID}}bn.PROVIDER_ID="password",bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class En{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class Tn extends En{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class Sn extends Tn{static credential(e){return gn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Sn.PROVIDER_ID="facebook.com";
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
class In extends Tn{static credential(e,t){return gn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return In.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}In.GOOGLE_SIGN_IN_METHOD="google.com",In.PROVIDER_ID="google.com";
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
class Cn extends Tn{static credential(e){return gn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Cn.GITHUB_SIGN_IN_METHOD="github.com",Cn.PROVIDER_ID="github.com";
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
class _n extends Tn{static credential(e,t){return gn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _n.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
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
async function An(e,t){return vt(e,"POST","/v1/accounts:signUp",mt(e,t))}
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
 */_n.TWITTER_SIGN_IN_METHOD="twitter.com",_n.PROVIDER_ID="twitter.com";class kn{static async _fromIdTokenResponse(e,t,n,r=!1){const s=await Lt._fromIdTokenResponse(e,n,r),i=xn(n);return new kn({user:s,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=xn(n);return new kn({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function xn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Mn extends U{static _fromErrorAndOperation(e,t,n,r){return new Mn(e,t,n,r)}constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Mn.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Ln(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Mn._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function On(e,t,n=!1){const r=await Ct(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return kn._forOperation(e,"link",r)}
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
async function Rn(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await Ct(e,Ln(r,s,t,e),n);rt(i.idToken,r,"internal-error");const o=It(i.idToken);rt(o,r,"internal-error");const{sub:a}=o;return rt(e.uid===a,r,"user-mismatch"),kn._forOperation(e,s,i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ze(r,"user-mismatch"),e}}
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
 */async function Nn(e,t,n=!1){const r="signIn",s=await Ln(e,r,t),i=await kn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function Dn(e,t){return Nn(on(e),t)}async function Pn(e,t,n){var r;const s=on(e),i={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=s._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await nn(s,i,"signUpPassword");o=An(s,e)}else o=An(s,i).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await nn(s,i,"signUpPassword");return An(s,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),l=await kn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function Fn(e,t,n){return Dn(Y(e),bn.credential(t,n))}
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
 */function Un(e){return Y(e).signOut()}new WeakMap;
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
class Bn{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class Vn extends Bn{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Wt()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=N();return Vt(e)||Gt(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Kt(),this._shouldAllowMigration=!0}}Vn.type="LOCAL";const $n=Vn;
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
 */class zn extends Bn{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}zn.type="SESSION";const jn=zn;
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
class qn{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new qn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function Hn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */qn.receivers=[];class Gn{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const l=Hn("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function Wn(){return window}
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
function Kn(){return void 0!==Wn().WorkerGlobalScope&&"function"==typeof Wn().importScripts}class Xn{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Yn(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Qn(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Xn(e).toPromise()}(),t(await Qn()))}))}))}async function Jn(e,t,n){const r=Yn(e,!0).put({fbase_key:t,value:n});return new Xn(r).toPromise()}function Zn(e,t){const n=Yn(e,!0).delete(t);return new Xn(n).toPromise()}class er{async _openDb(){return this.db||(this.db=await Qn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qn._getInstance(Kn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Gn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qn();return await Jn(e,"__sak","1"),await Zn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Jn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Yn(e,!1).get(t),r=await new Xn(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Zn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Yn(e,!1).getAll();return new Xn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}er.type="LOCAL";const tr=er;
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
en("rcb"),new ut(3e4,6e4);async function nr(e,t,n){var r;const s=await n.verify();try{let i;if(rt("string"==typeof s,e,"argument-error"),rt("recaptcha"===n.type,e,"argument-error"),i="string"==typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){rt("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return gt(e,"POST","/v2/accounts/mfaEnrollment:start",mt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{rt("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;rt(n,e,"missing-multi-factor-info");const o=await function(e,t){return gt(e,"POST","/v2/accounts/mfaSignIn:start",mt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return gt(e,"POST","/v1/accounts:sendVerificationCode",mt(e,t))}(e,{phoneNumber:i.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
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
class rr{verifyPhoneNumber(e,t){return nr(this.auth,e,Y(t))}static credential(e,t){return vn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return rr.credentialFromTaggedObject(t)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?vn._fromTokenResponse(t,n):null}constructor(e){this.providerId=rr.PROVIDER_ID,this.auth=on(e)}}
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
function sr(e,t){return t?Rt(t):(rt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */rr.PROVIDER_ID="phone",rr.PHONE_SIGN_IN_METHOD="phone";class ir extends hn{_getIdTokenResponse(e){return mn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function or(e){return Nn(e.auth,new ir(e),e.bypassAuthState)}function ar(e){const{auth:t,user:n}=e;return rt(n,t,"internal-error"),Rn(n,new ir(e),e.bypassAuthState)}async function lr(e){const{auth:t,user:n}=e;return rt(n,t,"internal-error"),On(n,new ir(e),e.bypassAuthState)}
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
 */class cr{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return or;case"linkViaPopup":case"linkViaRedirect":return lr;case"reauthViaPopup":case"reauthViaRedirect":return ar;default:Ze(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const ur=new ut(2e3,1e4);class hr extends cr{async executeNotNull(){const e=await this.execute();return rt(e,this.auth,"internal-error"),e}async onExecution(){it(1===this.filter.length,"Popup operations only handle one event");const e=Hn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(et(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,ur.get())};e()}constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}}hr.currentPopupAction=null;
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
const dr=new Map;class pr extends cr{async execute(){let e=dr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=gr(t),r=mr(e);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}dr.set(this.auth._key(),e)}return this.bypassAuthState||dr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function fr(e,t){dr.set(e._key(),t)}function mr(e){return Rt(e._redirectPersistence)}function gr(e){return Pt("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function yr(e,t,n=!1){const r=on(e),s=sr(r,t),i=new pr(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class vr{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return br(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!br(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(et(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(wr(e))}saveEventToCache(e){this.cachedEventUids.add(wr(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function wr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function br({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Er=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tr=/^https?/;async function Sr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return gt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ir(e))return}catch(e){}Ze(e,"unauthorized-domain")}function Ir(e){const t=ot(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Tr.test(n))return!1;if(Er.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
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
 */const Cr=new ut(3e4,6e4);function _r(){const e=Wn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Ar=null;function kr(e){return Ar=Ar||function(e){return new Promise(((t,n)=>{var r,s,i;function o(){_r(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_r(),n(et(e,"network-request-failed"))},timeout:Cr.get()})}if(null===(s=null===(r=Wn().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Wn().gapi)||void 0===i?void 0:i.load)){const t=en("iframefcb");return Wn()[t]=()=>{gapi.load?o():n(et(e,"network-request-failed"))},Zt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Ar=null,e}))}(e),Ar}
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
 */const xr=new ut(5e3,15e3),Mr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Or(e){const t=e.config;rt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ht(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.22.0"},s=Lr.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${q(r).slice(1)}`}
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
const Rr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Nr{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Dr(e,t,n,r=500,s=600){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Rr),{width:r.toString(),height:s.toString(),top:i,left:o}),c=N().toLowerCase();n&&(a=$t(c)?"_blank":n),Bt(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=N()){var t;return Gt(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new Nr(null);const h=window.open(t||"",a,u);rt(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Nr(h)}const Pr=encodeURIComponent("fac");async function Fr(e,t,n,r,s,i){rt(e.config.authDomain,e,"auth-domain-config-required"),rt(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.22.0",eventId:s};if(t instanceof En){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",$(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof Tn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${Pr}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?ht(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${q(a).slice(1)}${c}`}const Ur=class{async _openPopup(e,t,n,r){var s;it(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Dr(e,await Fr(e,t,n,ot(),r),Hn())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Wn().location.href=e}(await Fr(e,t,n,ot(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(it(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await kr(e),n=Wn().gapi;return rt(n,e,"internal-error"),t.open({where:document.body,url:Or(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=et(e,"network-request-failed"),i=Wn().setTimeout((()=>{r(s)}),xr.get());function o(){Wn().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{r(s)}))}))))}(e),n=new vr(e);return t.register("authEvent",(t=>{rt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const s=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==s&&t(!!s),Ze(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kt()||Vt()||Gt()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jn,this._completeRedirectFn=yr,this._overrideRedirectResult=fr}};
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
class Br{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){rt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const Vr=L("authIdTokenMaxAge")||300;let $r=null;var zr;zr="Browser",Le(new Q("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:i,authDomain:o}=n.options;rt(i&&!i.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:i,authDomain:o,clientPlatform:zr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xt(zr)},l=new sn(n,r,s,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Le(new Q("auth-internal",(e=>{const t=on(e.getProvider("auth").getImmediate());return new Br(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Fe("@firebase/auth","0.23.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(zr)),Fe("@firebase/auth","0.23.2","esm2017");var jr,qr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Hr={},Gr=Gr||{},Wr=qr||self;function Kr(){}function Xr(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Yr(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Qr="closure_uid_"+(1e9*Math.random()>>>0),Jr=0;function Zr(e,t,n){return e.call.apply(e.bind,arguments)}function es(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function ts(e,t,n){return(ts=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Zr:es).apply(null,arguments)}function ns(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function rs(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function ss(){this.s=this.s,this.o=this.o}ss.prototype.s=!1,ss.prototype.ra=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,Qr)&&e[Qr]||(e[Qr]=++Jr))},ss.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const is=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function os(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function as(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(Xr(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let s=0;s<r;s++)e[t+s]=n[s]}else e.push(n)}}function ls(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ls.prototype.h=function(){this.defaultPrevented=!0};var cs=function(){if(!Wr.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Wr.addEventListener("test",Kr,t),Wr.removeEventListener("test",Kr,t)}catch(e){}return e}();function us(e){return/^[\s\xa0]*$/.test(e)}var hs=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ds(e,t){return e<t?-1:e>t?1:0}function ps(){var e=Wr.navigator;return e&&(e=e.userAgent)?e:""}function fs(e){return-1!=ps().indexOf(e)}function ms(e){return ms[" "](e),e}function gs(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}ms[" "]=Kr;var ys,vs,ws=fs("Opera"),bs=fs("Trident")||fs("MSIE"),Es=fs("Edge"),Ts=Es||bs,Ss=fs("Gecko")&&!(-1!=ps().toLowerCase().indexOf("webkit")&&!fs("Edge"))&&!(fs("Trident")||fs("MSIE"))&&!fs("Edge"),Is=-1!=ps().toLowerCase().indexOf("webkit")&&!fs("Edge");function Cs(){var e=Wr.document;return e?e.documentMode:void 0}e:{var _s="",As=(vs=ps(),Ss?/rv:([^\);]+)(\)|;)/.exec(vs):Es?/Edge\/([\d\.]+)/.exec(vs):bs?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(vs):Is?/WebKit\/(\S+)/.exec(vs):ws?/(?:Version)[ \/]?(\S+)/.exec(vs):void 0);if(As&&(_s=As?As[1]:""),bs){var ks=Cs();if(null!=ks&&ks>parseFloat(_s)){ys=String(ks);break e}}ys=_s}var xs,Ms={};if(Wr.document&&bs){var Ls=Cs();xs=Ls||(parseInt(ys,10)||void 0)}else xs=void 0;var Os=xs;function Rs(e,t){if(ls.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ss){e:{try{ms(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Ns[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Rs.$.h.call(this)}}rs(Rs,ls);var Ns={2:"touch",3:"pen",4:"mouse"};Rs.prototype.h=function(){Rs.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ds="closure_listenable_"+(1e6*Math.random()|0),Ps=0;function Fs(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++Ps,this.fa=this.ia=!1}function Us(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Bs(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Vs(e){const t={};for(const n in e)t[n]=e[n];return t}const $s="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zs(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<$s.length;t++)n=$s[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function js(e){this.src=e,this.g={},this.h=0}function qs(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=is(s,t);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Us(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Hs(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}js.prototype.add=function(e,t,n,r,s){var i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);var o=Hs(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new Fs(t,this.src,i,!!r,s)).ia=n,e.push(t)),t};var Gs="closure_lm_"+(1e6*Math.random()|0),Ws={};function Ks(e,t,n,r,s){if(r&&r.once)return Ys(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ks(e,t[i],n,r,s);return null}return n=ri(n),e&&e[Ds]?e.O(t,n,Yr(r)?!!r.capture:!!r,s):Xs(e,t,n,!1,r,s)}function Xs(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Yr(s)?!!s.capture:!!s,a=ti(e);if(a||(e[Gs]=a=new js(e)),(n=a.add(t,n,r,o,i)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=ei;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)cs||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Zs(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Ys(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ys(e,t[i],n,r,s);return null}return n=ri(n),e&&e[Ds]?e.P(t,n,Yr(r)?!!r.capture:!!r,s):Xs(e,t,n,!0,r,s)}function Qs(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Qs(e,t[i],n,r,s);else r=Yr(r)?!!r.capture:!!r,n=ri(n),e&&e[Ds]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Hs(i=e.g[t],n,r,s))&&(Us(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=ti(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Hs(t,n,r,s)),(n=-1<e?t[e]:null)&&Js(n))}function Js(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Ds])qs(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Zs(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ti(t))?(qs(n,e),0==n.h&&(n.src=null,t[Gs]=null)):Us(e)}}}function Zs(e){return e in Ws?Ws[e]:Ws[e]="on"+e}function ei(e,t){if(e.fa)e=!0;else{t=new Rs(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Js(e),e=n.call(r,t)}return e}function ti(e){return(e=e[Gs])instanceof js?e:null}var ni="__closure_events_fn_"+(1e9*Math.random()>>>0);function ri(e){return"function"==typeof e?e:(e[ni]||(e[ni]=function(t){return e.handleEvent(t)}),e[ni])}function si(){ss.call(this),this.i=new js(this),this.S=this,this.J=null}function ii(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new ls(t,e);else if(t instanceof ls)t.target=t.target||e;else{var s=t;zs(t=new ls(r,e),s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=oi(o,r,!0,t)&&s}if(s=oi(o=t.g=e,r,!0,t)&&s,s=oi(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)s=oi(o=t.g=n[i],r,!1,t)&&s}function oi(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&qs(e.i,o),s=!1!==a.call(l,r)&&s}}return s&&!r.defaultPrevented}rs(si,ss),si.prototype[Ds]=!0,si.prototype.removeEventListener=function(e,t,n,r){Qs(this,e,t,n,r)},si.prototype.N=function(){if(si.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Us(n[r]);delete t.g[e],t.h--}}this.J=null},si.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},si.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ai=Wr.JSON.stringify;function li(){var e=mi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var ci,ui=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new hi),(e=>e.reset()));class hi{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function di(e){Wr.setTimeout((()=>{throw e}),0)}function pi(e,t){ci||function(){var e=Wr.Promise.resolve(void 0);ci=function(){e.then(gi)}}(),fi||(ci(),fi=!0),mi.add(e,t)}var fi=!1,mi=new class{add(e,t){const n=ui.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function gi(){for(var e;e=li();){try{e.h.call(e.g)}catch(e){di(e)}var t=ui;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}fi=!1}function yi(e,t){si.call(this),this.h=e||1,this.g=t||Wr,this.j=ts(this.qb,this),this.l=Date.now()}function vi(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function wi(e,t,n){if("function"==typeof e)n&&(e=ts(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=ts(e.handleEvent,e)}return 2147483647<Number(t)?-1:Wr.setTimeout(e,t||0)}function bi(e){e.g=wi((()=>{e.g=null,e.i&&(e.i=!1,bi(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}rs(yi,si),(jr=yi.prototype).ga=!1,jr.T=null,jr.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ii(this,"tick"),this.ga&&(vi(this),this.start()))}},jr.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},jr.N=function(){yi.$.N.call(this),vi(this),delete this.g};class Ei extends ss{l(e){this.h=arguments,this.g?this.i=!0:bi(this)}N(){super.N(),this.g&&(Wr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function Ti(e){ss.call(this),this.h=e,this.g={}}rs(Ti,ss);var Si=[];function Ii(e,t,n,r){Array.isArray(n)||(n&&(Si[0]=n.toString()),n=Si);for(var s=0;s<n.length;s++){var i=Ks(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Ci(e){Bs(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Js(e)}),e),e.g={}}function _i(){this.g=!0}function Ai(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return ai(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Ti.prototype.N=function(){Ti.$.N.call(this),Ci(this)},Ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},_i.prototype.Ea=function(){this.g=!1},_i.prototype.info=function(){};var ki={},xi=null;function Mi(){return xi=xi||new si}function Li(e){ls.call(this,ki.Ta,e)}function Oi(e){const t=Mi();ii(t,new Li(t))}function Ri(e,t){ls.call(this,ki.STAT_EVENT,e),this.stat=t}function Ni(e){const t=Mi();ii(t,new Ri(t,e))}function Di(e,t){ls.call(this,ki.Ua,e),this.size=t}function Pi(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Wr.setTimeout((function(){e()}),t)}ki.Ta="serverreachability",rs(Li,ls),ki.STAT_EVENT="statevent",rs(Ri,ls),ki.Ua="timingevent",rs(Di,ls);var Fi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ui={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bi(){}function Vi(e){return e.h||(e.h=e.i())}function $i(){}Bi.prototype.h=null;var zi,ji={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function qi(){ls.call(this,"d")}function Hi(){ls.call(this,"c")}function Gi(){}function Wi(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ti(this),this.P=Xi,e=Ts?125:void 0,this.V=new yi(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Ki}function Ki(){this.i=null,this.g="",this.h=!1}rs(qi,ls),rs(Hi,ls),rs(Gi,Bi),Gi.prototype.g=function(){return new XMLHttpRequest},Gi.prototype.i=function(){return{}},zi=new Gi;var Xi=45e3,Yi={},Qi={};function Ji(e,t,n){e.L=1,e.v=vo(po(t)),e.s=n,e.S=!0,Zi(e,null)}function Zi(e,t){e.G=Date.now(),ro(e),e.A=po(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Lo(n.i,"t",r),e.C=0,n=e.l.I,e.h=new Ki,e.g=Ma(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Ei(ts(e.Pa,e,e.g),e.O)),Ii(e.U,e.g,"readystatechange",e.nb),t=e.I?Vs(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Oi(),function(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function eo(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function to(e,t,n){let r,s=!0;for(;!e.J&&e.C<n.length;){if(r=no(e,n),r==Qi){4==t&&(e.o=4,Ni(14),s=!1),Ai(e.j,e.m,null,"[Incomplete Response]");break}if(r==Yi){e.o=4,Ni(15),Ai(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Ai(e.j,e.m,r,null),lo(e,r)}eo(e)&&r!=Qi&&r!=Yi&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ni(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ca&&(e.ca=!0,(t=e.l).g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ta(t),t.L=!0,Ni(11))):(Ai(e.j,e.m,n,"[Invalid Chunked Response]"),ao(e),oo(e))}function no(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Qi:(n=Number(t.substring(n,r)),isNaN(n)?Yi:(r+=1)+n>t.length?Qi:(t=t.substr(r,n),e.C=r+n,t))}function ro(e){e.Y=Date.now()+e.P,so(e,e.P)}function so(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Pi(ts(e.lb,e),t)}function io(e){e.B&&(Wr.clearTimeout(e.B),e.B=null)}function oo(e){0==e.l.H||e.J||Ca(e.l,e)}function ao(e){io(e);var t=e.M;t&&"function"==typeof t.ra&&t.ra(),e.M=null,vi(e.V),Ci(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function lo(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Fo(n.h,e)))if(!e.K&&Fo(n.h,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Ia(n),fa(n)}Ea(n),Ni(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&0==n.A&&!n.v&&(n.v=Pi(ts(n.ib,n),6e3));if(1>=Po(n.h)&&n.na){try{n.na()}catch(e){}n.na=void 0}}else Aa(n,11)}else if((e.K||n.g==e)&&Ia(n),!us(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.J=c[1],n.oa=c[2];const t=c[3];null!=t&&(n.qa=t,n.j.info("VER="+n.qa));const s=c[4];null!=s&&(n.Ga=s,n.j.info("SVER="+n.Ga));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Uo(i,i.h),i.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,yo(r.G,r.F,e))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms"));var o=e;if((r=n).wa=xa(r,r.I?r.oa:null,r.Y),o.K){Bo(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(io(a),ro(a)),r.g=o}else ba(r);0<n.i.length&&ga(n)}else"stop"!=c[0]&&"close"!=c[0]||Aa(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Aa(n,7):pa(n):"noop"!=c[0]&&n.l&&n.l.Aa(c),n.A=0)}Oi()}catch(e){}}function co(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Xr(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.sa&&"function"==typeof e.sa)return e.sa();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(Xr(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(Xr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}(jr=Wi.prototype).setTimeout=function(e){this.P=e},jr.nb=function(e){e=e.target;const t=this.M;t&&3==aa(e)?t.l():this.Pa(e)},jr.Pa=function(e){try{if(e==this.g)e:{const u=aa(this.g);var t=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||Ts||this.g&&(this.h.h||this.g.ja()||la(this.g)))){this.J||4!=u||7==t||Oi(),io(this);var n=this.g.da();this.aa=n;t:if(eo(this)){var r=la(this.g);e="";var s=r.length,i=4==aa(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ao(this),oo(this);var o="";break t}this.h.i=new Wr.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!us(a)){var c=a;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,Ni(12),ao(this),oo(this);break e}Ai(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lo(this,n)}this.S?(to(this,u,o),Ts&&this.i&&3==u&&(Ii(this.U,this.V,"tick",this.mb),this.V.start())):(Ai(this.j,this.m,o,null),lo(this,o)),4==u&&ao(this),this.i&&!this.J&&(4==u?Ca(this.l,this):(this.i=!1,ro(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ni(12)):(this.o=0,Ni(13)),ao(this),oo(this)}}}catch(e){}},jr.mb=function(){if(this.g){var e=aa(this.g),t=this.g.ja();this.C<t.length&&(io(this),to(this,e,t),this.i&&4!=e&&ro(this))}},jr.cancel=function(){this.J=!0,ao(this)},jr.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(Oi(),Ni(17)),ao(this),this.o=2,oo(this)):so(this,this.Y-e)};var uo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ho(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ho){this.h=void 0!==t?t:e.h,fo(this,e.j),this.s=e.s,this.g=e.g,mo(this,e.m),this.l=e.l,t=e.i;var n=new Ao;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),go(this,n),this.o=e.o}else e&&(n=String(e).match(uo))?(this.h=!!t,fo(this,n[1]||"",!0),this.s=wo(n[2]||""),this.g=wo(n[3]||"",!0),mo(this,n[4]),this.l=wo(n[5]||"",!0),go(this,n[6]||"",!0),this.o=wo(n[7]||"")):(this.h=!!t,this.i=new Ao(null,this.h))}function po(e){return new ho(e)}function fo(e,t,n){e.j=n?wo(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function mo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function go(e,t,n){t instanceof Ao?(e.i=t,function(e,t){t&&!e.j&&(ko(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(xo(this,t),Lo(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=bo(t,Co)),e.i=new Ao(t,e.h))}function yo(e,t,n){e.i.set(t,n)}function vo(e){return yo(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function wo(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function bo(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Eo),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Eo(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ho.prototype.toString=function(){var e=[],t=this.j;t&&e.push(bo(t,To,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(bo(t,To,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(bo(n,"/"==n.charAt(0)?Io:So,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",bo(n,_o)),e.join("")};var To=/[#\/\?@]/g,So=/[#\?:]/g,Io=/[#\?]/g,Co=/[#\?@]/g,_o=/#/g;function Ao(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ko(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function xo(e,t){ko(e),t=Oo(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Mo(e,t){return ko(e),t=Oo(e,t),e.g.has(t)}function Lo(e,t,n){xo(e,t),0<n.length&&(e.i=null,e.g.set(Oo(e,t),os(n)),e.h+=n.length)}function Oo(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(jr=Ao.prototype).add=function(e,t){ko(this),this.i=null,e=Oo(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},jr.forEach=function(e,t){ko(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},jr.sa=function(){ko(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let e=0;e<s.length;e++)n.push(t[r])}return n},jr.Z=function(e){ko(this);let t=[];if("string"==typeof e)Mo(this,e)&&(t=t.concat(this.g.get(Oo(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},jr.set=function(e,t){return ko(this),this.i=null,Mo(this,e=Oo(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},jr.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},jr.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function Ro(e){this.l=e||No,Wr.PerformanceNavigationTiming?e=0<(e=Wr.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Wr.g&&Wr.g.Ka&&Wr.g.Ka()&&Wr.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var No=10;function Do(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Po(e){return e.h?1:e.g?e.g.size:0}function Fo(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Uo(e,t){e.g?e.g.add(t):e.h=t}function Bo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Vo(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return os(e.i)}function $o(){}function zo(){this.g=new $o}function jo(e,t,n){const r=n||"";try{co(e,(function(e,n){let s=e;Yr(e)&&(s=ai(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function qo(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch(e){}}function Ho(e){this.l=e.fc||null,this.j=e.ob||!1}function Go(e,t){si.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Wo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ro.prototype.cancel=function(){if(this.i=Vo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},$o.prototype.stringify=function(e){return Wr.JSON.stringify(e,void 0)},$o.prototype.parse=function(e){return Wr.JSON.parse(e,void 0)},rs(Ho,Bi),Ho.prototype.g=function(){return new Go(this.l,this.j)},Ho.prototype.i=function(e){return function(){return e}}({}),rs(Go,si);var Wo=0;function Ko(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Xo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Yo(e)}function Yo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(jr=Go.prototype).open=function(e,t){if(this.readyState!=Wo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Yo(this)},jr.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Wr).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},jr.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Xo(this)),this.readyState=Wo},jr.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Yo(this)),this.g&&(this.readyState=3,Yo(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Wr.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ko(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},jr.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Xo(this):Yo(this),3==this.readyState&&Ko(this)}},jr.Za=function(e){this.g&&(this.response=this.responseText=e,Xo(this))},jr.Ya=function(e){this.g&&(this.response=e,Xo(this))},jr.ka=function(){this.g&&Xo(this)},jr.setRequestHeader=function(e,t){this.v.append(e,t)},jr.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},jr.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Go.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Qo=Wr.JSON.parse;function Jo(e){si.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Zo,this.L=this.M=!1}rs(Jo,si);var Zo="",ea=/^https?$/i,ta=["POST","PUT"];function na(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ra(e),ia(e)}function ra(e){e.F||(e.F=!0,ii(e,"complete"),ii(e,"error"))}function sa(e){if(e.h&&void 0!==Gr&&(!e.C[1]||4!=aa(e)||2!=e.da()))if(e.v&&4==aa(e))wi(e.La,0,e);else if(ii(e,"readystatechange"),4==aa(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var s=String(e.I).match(uo)[1]||null;if(!s&&Wr.self&&Wr.self.location){var i=Wr.self.location.protocol;s=i.substr(0,i.length-1)}r=!ea.test(s?s.toLowerCase():"")}n=r}if(n)ii(e,"complete"),ii(e,"success");else{e.m=6;try{var o=2<aa(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.da()+"]",ra(e)}}finally{ia(e)}}}function ia(e,t){if(e.g){oa(e);const n=e.g,r=e.C[0]?Kr:null;e.g=null,e.C=null,t||ii(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function oa(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Wr.clearTimeout(e.A),e.A=null)}function aa(e){return e.g?e.g.readyState:0}function la(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Zo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ca(e){let t="";return Bs(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function ua(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ca(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):yo(e,t,n))}function ha(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function da(e){this.Ga=0,this.i=[],this.j=new _i,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ha("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ha("baseRetryDelayMs",5e3,e),this.hb=ha("retryDelaySeedMs",1e4,e),this.eb=ha("forwardChannelMaxRetries",2,e),this.xa=ha("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new Ro(e&&e.concurrentRequestLimit),this.Ja=new zo,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function pa(e){if(ma(e),3==e.H){var t=e.W++,n=po(e.G);yo(n,"SID",e.J),yo(n,"RID",t),yo(n,"TYPE","terminate"),va(e,n),(t=new Wi(e,e.j,t,void 0)).L=2,t.v=vo(po(n)),n=!1,Wr.navigator&&Wr.navigator.sendBeacon&&(n=Wr.navigator.sendBeacon(t.v.toString(),"")),!n&&Wr.Image&&((new Image).src=t.v,n=!0),n||(t.g=Ma(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ro(t)}ka(e)}function fa(e){e.g&&(Ta(e),e.g.cancel(),e.g=null)}function ma(e){fa(e),e.u&&(Wr.clearTimeout(e.u),e.u=null),Ia(e),e.h.cancel(),e.m&&("number"==typeof e.m&&Wr.clearTimeout(e.m),e.m=null)}function ga(e){Do(e.h)||e.m||(e.m=!0,pi(e.Na,e),e.C=0)}function ya(e,t){var n;n=t?t.m:e.W++;const r=po(e.G);yo(r,"SID",e.J),yo(r,"RID",n),yo(r,"AID",e.V),va(e,r),e.o&&e.s&&ua(r,e.o,e.s),n=new Wi(e,e.j,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=wa(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Uo(e.h,n),Ji(n,r,t)}function va(e,t){e.ma&&Bs(e.ma,(function(e,n){yo(t,n,e)})),e.l&&co({},(function(e,n){yo(t,n,e)}))}function wa(e,t,n){n=Math.min(e.i.length,n);var r=e.l?ts(e.l.Va,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),i=!1;else try{jo(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(i){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,r}function ba(e){e.g||e.u||(e.ba=1,pi(e.Ma,e),e.A=0)}function Ea(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Pi(ts(e.Ma,e),_a(e,e.A)),e.A++,!0)}function Ta(e){null!=e.B&&(Wr.clearTimeout(e.B),e.B=null)}function Sa(e){e.g=new Wi(e,e.j,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=po(e.wa);yo(t,"RID","rpc"),yo(t,"SID",e.J),yo(t,"CI",e.M?"0":"1"),yo(t,"AID",e.V),yo(t,"TYPE","xmlhttp"),va(e,t),e.o&&e.s&&ua(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=vo(po(t)),n.s=null,n.S=!0,Zi(n,e)}function Ia(e){null!=e.v&&(Wr.clearTimeout(e.v),e.v=null)}function Ca(e,t){var n=null;if(e.g==t){Ia(e),Ta(e),e.g=null;var r=2}else{if(!Fo(e.h,t))return;n=t.F,Bo(e.h,t),r=1}if(0!=e.H)if(e.ta=t.aa,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;ii(r=Mi(),new Di(r,n)),ga(e)}else ba(e);else if(3==(s=t.o)||0==s&&0<e.ta||!(1==r&&function(e,t){return!(Po(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.F.concat(e.i),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Pi(ts(e.Na,e,t),_a(e,e.C)),e.C++,0)))}(e,t)||2==r&&Ea(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:Aa(e,5);break;case 4:Aa(e,10);break;case 3:Aa(e,6);break;default:Aa(e,2)}}function _a(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Aa(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=ts(e.pb,e);n||(n=new ho("//www.google.com/images/cleardot.gif"),Wr.location&&"http"==Wr.location.protocol||fo(n,"https"),vo(n)),function(e,t){const n=new _i;if(Wr.Image){const r=new Image;r.onload=ns(qo,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ns(qo,n,r,"TestLoadImage: error",!1,t),r.onabort=ns(qo,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ns(qo,n,r,"TestLoadImage: timeout",!1,t),Wr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Ni(2);e.H=0,e.l&&e.l.za(t),ka(e),ma(e)}function ka(e){if(e.H=0,e.pa=[],e.l){const t=Vo(e.h);0==t.length&&0==e.i.length||(as(e.pa,t),as(e.pa,e.i),e.h.i.length=0,os(e.i),e.i.length=0),e.l.ya()}}function xa(e,t,n){var r=n instanceof ho?po(n):new ho(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),mo(r,r.m);else{var s=Wr.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new ho(null,void 0);r&&fo(i,r),t&&(i.g=t),s&&mo(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&yo(r,n,t),yo(r,"VER",e.qa),va(e,r),r}function Ma(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new Jo(new Ho({ob:!0})):new Jo(e.va)).Oa(e.I),t}function La(){}function Oa(){if(bs&&!(10<=Number(Os)))throw Error("Environmental error: no available transport.")}function Ra(e,t){si.call(this),this.g=new da(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!us(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!us(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Pa(this)}function Na(e){qi.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Da(){Hi.call(this),this.status=1}function Pa(e){this.g=e}function Fa(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Ua(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;o=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=n+(o<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(s^i))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(s^i))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(s^i))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^i&(n^s))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^i&(n^s))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^i&(n^s))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^i&(n^s))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^s^i)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^i)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^i)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^i)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(s^(n|~i))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(i|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~i))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(i|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~i))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(i|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((i=(t=n+((o=t+(s^(n|~i))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=i+((o=s+(t^(i|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}function Ba(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=0|e[s];r&&i==t||(n[s]=i,r=!1)}this.g=n}(jr=Jo.prototype).Oa=function(e){this.M=e},jr.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():zi.g(),this.C=this.u?Vi(this.u):Vi(zi),this.g.onreadystatechange=ts(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void na(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=Wr.FormData&&e instanceof Wr.FormData,!(0<=is(ta,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{oa(this),0<this.B&&((this.L=function(e){return bs&&gs(Ms,9,(function(){let e=0;const t=hs(String(ys)).split("."),n=hs("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;e=ds(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||ds(0==s[2].length,0==i[2].length)||ds(s[2],i[2]),s=s[3],i=i[3]}while(0==e)}return 0<=e}))&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ts(this.ua,this)):this.A=wi(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){na(this,e)}},jr.ua=function(){void 0!==Gr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ii(this,"timeout"),this.abort(8))},jr.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ii(this,"complete"),ii(this,"abort"),ia(this))},jr.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ia(this,!0)),Jo.$.N.call(this)},jr.La=function(){this.s||(this.G||this.v||this.l?sa(this):this.kb())},jr.kb=function(){sa(this)},jr.da=function(){try{return 2<aa(this)?this.g.status:-1}catch(e){return-1}},jr.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},jr.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Qo(t)}},jr.Ia=function(){return this.m},jr.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(jr=da.prototype).qa=8,jr.H=1,jr.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Wi(this,this.j,e,void 0);let i=this.s;if(this.U&&(i?(i=Vs(i),zs(i,this.U)):i=this.U),null!==this.o||this.O||(s.I=i,i=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=wa(this,s,t),yo(n=po(this.G),"RID",e),yo(n,"CVER",22),this.F&&yo(n,"X-HTTP-Session-Id",this.F),va(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(ca(i)))+"&"+t:this.o&&ua(n,this.o,i)),Uo(this.h,s),this.bb&&yo(n,"TYPE","init"),this.P?(yo(n,"$req",t),yo(n,"SID","null"),s.ba=!0,Ji(s,n,null)):Ji(s,n,t),this.H=2}}else 3==this.H&&(e?ya(this,e):0==this.i.length||Do(this.h)||ya(this))},jr.Ma=function(){if(this.u=null,Sa(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=Pi(ts(this.jb,this),e)}},jr.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Ni(10),fa(this),Sa(this))},jr.ib=function(){null!=this.v&&(this.v=null,fa(this),Ea(this),Ni(19))},jr.pb=function(e){e?(this.j.info("Successfully pinged google.com"),Ni(2)):(this.j.info("Failed to ping google.com"),Ni(1))},(jr=La.prototype).Ba=function(){},jr.Aa=function(){},jr.za=function(){},jr.ya=function(){},jr.Va=function(){},Oa.prototype.g=function(e,t){return new Ra(e,t)},rs(Ra,si),Ra.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;Ni(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=xa(e,null,e.Y),ga(e)},Ra.prototype.close=function(){pa(this.g)},Ra.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ai(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.fb++,e)),3==t.H&&ga(t)},Ra.prototype.N=function(){this.g.l=null,delete this.j,pa(this.g),delete this.g,Ra.$.N.call(this)},rs(Na,qi),rs(Da,Hi),rs(Pa,La),Pa.prototype.Ba=function(){ii(this.g,"a")},Pa.prototype.Aa=function(e){ii(this.g,new Na(e))},Pa.prototype.za=function(e){ii(this.g,new Da)},Pa.prototype.ya=function(){ii(this.g,"b")},rs(Fa,(function(){this.blockSize=-1})),Fa.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Fa.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(0==s)for(;i<=n;)Ua(this,e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Ua(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Ua(this,r),s=0;break}}this.h=s,this.i+=t},Fa.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var Va={};function $a(e){return-128<=e&&128>e?gs(Va,e,(function(e){return new Ba([0|e],0>e?-1:0)})):new Ba([0|e],0>e?-1:0)}function za(e){if(isNaN(e)||!isFinite(e))return qa;if(0>e)return Xa(za(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ja;return new Ba(t,0)}var ja=4294967296,qa=$a(0),Ha=$a(1),Ga=$a(16777216);function Wa(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Ka(e){return-1==e.h}function Xa(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Ba(n,~e.h).add(Ha)}function Ya(e,t){return e.add(Xa(t))}function Qa(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ja(e,t){this.g=e,this.h=t}function Za(e,t){if(Wa(t))throw Error("division by zero");if(Wa(e))return new Ja(qa,qa);if(Ka(e))return t=Za(Xa(e),t),new Ja(Xa(t.g),Xa(t.h));if(Ka(t))return t=Za(e,Xa(t)),new Ja(Xa(t.g),t.h);if(30<e.g.length){if(Ka(e)||Ka(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ha,r=t;0>=r.X(e);)n=el(n),r=el(r);var s=tl(n,1),i=tl(r,1);for(r=tl(r,2),n=tl(n,2);!Wa(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=tl(r,1),n=tl(n,1)}return t=Ya(e,s.R(t)),new Ja(s,t)}for(s=qa;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(i=za(n)).R(t);Ka(o)||0<o.X(e);)o=(i=za(n-=r)).R(t);Wa(i)&&(i=Ha),s=s.add(i),e=Ya(e,o)}return new Ja(s,e)}function el(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Ba(n,e.h)}function tl(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new Ba(s,e.h)}(jr=Ba.prototype).ea=function(){if(Ka(this))return-Xa(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ja+r)*t,t*=ja}return e},jr.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(Wa(this))return"0";if(Ka(this))return"-"+Xa(this).toString(e);for(var t=za(Math.pow(e,6)),n=this,r="";;){var s=Za(n,t).g,i=((0<(n=Ya(n,s.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(Wa(n=s))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},jr.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},jr.X=function(e){return Ka(e=Ya(this,e))?-1:Wa(e)?0:1},jr.abs=function(){return Ka(this)?Xa(this):this},jr.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(65535&this.D(s))+(65535&e.D(s)),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ba(n,-2147483648&n[n.length-1]?-1:0)},jr.R=function(e){if(Wa(this)||Wa(e))return qa;if(Ka(this))return Ka(e)?Xa(this).R(Xa(e)):Xa(Xa(this).R(e));if(Ka(e))return Xa(this.R(Xa(e)));if(0>this.X(Ga)&&0>e.X(Ga))return za(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=65535&this.D(r),a=e.D(s)>>>16,l=65535&e.D(s);n[2*r+2*s]+=o*l,Qa(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Qa(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Qa(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Qa(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Ba(n,0)},jr.gb=function(e){return Za(this,e).h},jr.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Ba(n,this.h&e.h)},jr.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Ba(n,this.h|e.h)},jr.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Ba(n,this.h^e.h)},Oa.prototype.createWebChannel=Oa.prototype.g,Ra.prototype.send=Ra.prototype.u,Ra.prototype.open=Ra.prototype.m,Ra.prototype.close=Ra.prototype.close,Fi.NO_ERROR=0,Fi.TIMEOUT=8,Fi.HTTP_ERROR=6,Ui.COMPLETE="complete",$i.EventType=ji,ji.OPEN="a",ji.CLOSE="b",ji.ERROR="c",ji.MESSAGE="d",si.prototype.listen=si.prototype.O,Jo.prototype.listenOnce=Jo.prototype.P,Jo.prototype.getLastError=Jo.prototype.Sa,Jo.prototype.getLastErrorCode=Jo.prototype.Ia,Jo.prototype.getStatus=Jo.prototype.da,Jo.prototype.getResponseJson=Jo.prototype.Wa,Jo.prototype.getResponseText=Jo.prototype.ja,Jo.prototype.send=Jo.prototype.ha,Jo.prototype.setWithCredentials=Jo.prototype.Oa,Fa.prototype.digest=Fa.prototype.l,Fa.prototype.reset=Fa.prototype.reset,Fa.prototype.update=Fa.prototype.j,Ba.prototype.add=Ba.prototype.add,Ba.prototype.multiply=Ba.prototype.R,Ba.prototype.modulo=Ba.prototype.gb,Ba.prototype.compare=Ba.prototype.X,Ba.prototype.toNumber=Ba.prototype.ea,Ba.prototype.toString=Ba.prototype.toString,Ba.prototype.getBits=Ba.prototype.D,Ba.fromNumber=za,Ba.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return Xa(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=za(Math.pow(n,8)),s=qa,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),a=parseInt(t.substring(i,i+o),n);8>o?(o=za(Math.pow(n,o)),s=s.R(o).add(za(a))):s=(s=s.R(r)).add(za(a))}return s};var nl=Hr.createWebChannelTransport=function(){return new Oa},rl=Hr.getStatEventTarget=function(){return Mi()},sl=Hr.ErrorCode=Fi,il=Hr.EventType=Ui,ol=Hr.Event=ki,al=Hr.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ll=Hr.FetchXmlHttpFactory=Ho,cl=Hr.WebChannel=$i,ul=Hr.XhrIo=Jo,hl=Hr.Md5=Fa,dl=Hr.Integer=Ba;
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
class pl{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}pl.UNAUTHENTICATED=new pl(null),pl.GOOGLE_CREDENTIALS=new pl("google-credentials-uid"),pl.FIRST_PARTY=new pl("first-party-uid"),pl.MOCK_USER=new pl("mock-user");
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
let fl="9.22.0";
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
 */const ml=new ae("@firebase/firestore");function gl(){return ml.logLevel}function yl(e,...t){if(ml.logLevel<=te.DEBUG){const n=t.map(bl);ml.debug(`Firestore (${fl}): ${e}`,...n)}}function vl(e,...t){if(ml.logLevel<=te.ERROR){const n=t.map(bl);ml.error(`Firestore (${fl}): ${e}`,...n)}}function wl(e,...t){if(ml.logLevel<=te.WARN){const n=t.map(bl);ml.warn(`Firestore (${fl}): ${e}`,...n)}}function bl(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function El(e="Unexpected state"){const t=`FIRESTORE (${fl}) INTERNAL ASSERTION FAILED: `+e;throw vl(t),new Error(t)}function Tl(e,t){e||El()}function Sl(e,t){return e}
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
 */const Il={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Cl extends U{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class _l{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class Al{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(pl.UNAUTHENTICATED)))}shutdown(){}}class xl{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class Ml{start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new _l;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _l,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{yl("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(yl("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _l)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(yl("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Tl("string"==typeof t.accessToken),new Al(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Tl(null===e||"string"==typeof e),new pl(e)}constructor(e){this.t=e,this.currentUser=pl.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Ll{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=pl.FIRST_PARTY,this.g=new Map}}class Ol{getToken(){return Promise.resolve(new Ll(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(pl.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.h=e,this.l=t,this.m=n}}class Rl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nl{start(e,t){const n=e=>{null!=e.error&&yl("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,yl("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{yl("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):yl("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Tl("string"==typeof e.token),this.T=e.token,new Rl(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
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
function Dl(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class Pl{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Dl(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function Fl(e,t){return e<t?-1:e>t?1:0}function Ul(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
class Bl{static now(){return Bl.fromMillis(Date.now())}static fromDate(e){return Bl.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Bl(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Fl(this.nanoseconds,e.nanoseconds):Fl(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Cl(Il.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Cl(Il.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Cl(Il.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Cl(Il.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
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
 */class Vl{static fromTimestamp(e){return new Vl(e)}static min(){return new Vl(new Bl(0,0))}static max(){return new Vl(new Bl(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
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
 */class $l{get length(){return this.len}isEqual(e){return 0===$l.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $l?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&El(),void 0===n?n=e.length-t:n>e.length-t&&El(),this.segments=e,this.offset=t,this.len=n}}class zl extends $l{construct(e,t,n){return new zl(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Cl(Il.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new zl(t)}static emptyPath(){return new zl([])}}const jl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ql extends $l{construct(e,t,n){return new ql(e,t,n)}static isValidIdentifier(e){return jl.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ql.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ql(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Cl(Il.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Cl(Il.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Cl(Il.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new Cl(Il.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ql(t)}static emptyPath(){return new ql([])}}
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
 */class Hl{static fromPath(e){return new Hl(zl.fromString(e))}static fromName(e){return new Hl(zl.fromString(e).popFirst(5))}static empty(){return new Hl(zl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===zl.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return zl.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Hl(new zl(e.slice()))}constructor(e){this.path=e}}
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
 */class Gl{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Gl.UNKNOWN_ID=-1;function Wl(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=Vl.fromTimestamp(1e9===r?new Bl(n+1,0):new Bl(n,r));return new Xl(s,Hl.empty(),t)}function Kl(e){return new Xl(e.readTime,e.key,-1)}class Xl{static min(){return new Xl(Vl.min(),Hl.empty(),-1)}static max(){return new Xl(Vl.max(),Hl.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function Yl(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Hl.comparator(e.documentKey,t.documentKey),0!==n?n:Fl(e.largestBatchId,t.largestBatchId))}
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
 */const Ql="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jl{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
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
 */async function Zl(e){if(e.code!==Il.FAILED_PRECONDITION||e.message!==Ql)throw e;yl("LocalStore","Unexpectedly lost primary lease")}
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
 */class ec{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&El(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ec(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ec?t:ec.resolve(t)}catch(e){return ec.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ec.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ec.reject(t)}static resolve(e){return new ec(((t,n)=>{t(e)}))}static reject(e){return new ec(((t,n)=>{n(e)}))}static waitFor(e){return new ec(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=ec.resolve(!1);for(const n of e)t=t.next((e=>e?ec.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new ec(((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const l=a;t(e[l]).next((e=>{i[l]=e,++o,o===s&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new ec(((n,r)=>{const s=()=>{!0===e()?t().next((()=>{s()}),r):n()};s()}))}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
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
 */function tc(e){return"IndexedDbTransactionError"===e.name}
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
class nc{ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}}function rc(e){return null==e}function sc(e){return 0===e&&1/e==-1/0}function ic(e){return"number"==typeof e&&Number.isInteger(e)&&!sc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */nc.ct=-1;const oc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ac=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],lc=ac;
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
function cc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function uc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function hc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class dc{insert(e,t){return new dc(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fc.BLACK,null,null))}remove(e){return new dc(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fc.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pc(this.root,e,this.comparator,!1)}getReverseIterator(){return new pc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pc(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||fc.EMPTY}}class pc{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class fc{copy(e,t,n,r,s){return new fc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return fc.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return fc.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw El();if(this.right.isRed())throw El();const e=this.left.check();if(e!==this.right.check())throw El();return e+(this.isRed()?0:1)}constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:fc.RED,this.left=null!=r?r:fc.EMPTY,this.right=null!=s?s:fc.EMPTY,this.size=this.left.size+1+this.right.size}}fc.EMPTY=null,fc.RED=!0,fc.BLACK=!1,fc.EMPTY=new class{get key(){throw El()}get value(){throw El()}get color(){throw El()}get left(){throw El()}get right(){throw El()}copy(e,t,n,r,s){return this}insert(e,t,n){return new fc(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class mc{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gc(this.data.getIterator())}getIteratorFrom(e){return new gc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof mc))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new mc(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new dc(this.comparator)}}class gc{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
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
class yc{static empty(){return new yc([])}unionWith(e){let t=new mc(ql.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new yc(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ul(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(ql.comparator)}}
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
 */class vc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */let wc=Symbol.iterator;
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
 */class bc{static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new vc("Invalid base64 string: "+e):e}}(e);return new bc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new bc(t)}[wc](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fl(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}bc.EMPTY_BYTE_STRING=new bc("");const Ec=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tc(e){if(Tl(!!e),"string"==typeof e){let t=0;const n=Ec.exec(e);if(Tl(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Sc(e.seconds),nanos:Sc(e.nanos)}}function Sc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ic(e){return"string"==typeof e?bc.fromBase64String(e):bc.fromUint8Array(e)}
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
 */function Cc(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function _c(e){const t=e.mapValue.fields.__previous_value__;return Cc(t)?_c(t):t}function Ac(e){const t=Tc(e.mapValue.fields.__local_write_time__.timestampValue);return new Bl(t.seconds,t.nanos)}
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
 */class kc{constructor(e,t,n,r,s,i,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class xc{static empty(){return new xc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof xc&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
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
 */const Mc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Lc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Cc(e)?4:Hc(e)?9007199254740991:10:El()}function Oc(e,t){if(e===t)return!0;const n=Lc(e);if(n!==Lc(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ac(e).isEqual(Ac(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Tc(e.timestampValue),r=Tc(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Ic(e.bytesValue).isEqual(Ic(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Sc(e.geoPointValue.latitude)===Sc(t.geoPointValue.latitude)&&Sc(e.geoPointValue.longitude)===Sc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Sc(e.integerValue)===Sc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Sc(e.doubleValue),r=Sc(t.doubleValue);return n===r?sc(n)===sc(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ul(e.arrayValue.values||[],t.arrayValue.values||[],Oc);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(cc(n)!==cc(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Oc(n[e],r[e])))return!1;return!0}(e,t);default:return El()}var r}function Rc(e,t){return void 0!==(e.values||[]).find((e=>Oc(e,t)))}function Nc(e,t){if(e===t)return 0;const n=Lc(e),r=Lc(t);if(n!==r)return Fl(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fl(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Sc(e.integerValue||e.doubleValue),r=Sc(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Dc(e.timestampValue,t.timestampValue);case 4:return Dc(Ac(e),Ac(t));case 5:return Fl(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ic(e),r=Ic(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Fl(n[e],r[e]);if(0!==t)return t}return Fl(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Fl(Sc(e.latitude),Sc(t.latitude));return 0!==n?n:Fl(Sc(e.longitude),Sc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Nc(n[e],r[e]);if(t)return t}return Fl(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Mc.mapValue&&t===Mc.mapValue)return 0;if(e===Mc.mapValue)return 1;if(t===Mc.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let e=0;e<r.length&&e<i.length;++e){const t=Fl(r[e],i[e]);if(0!==t)return t;const o=Nc(n[r[e]],s[i[e]]);if(0!==o)return o}return Fl(r.length,i.length)}(e.mapValue,t.mapValue);default:throw El()}}function Dc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Fl(e,t);const n=Tc(e),r=Tc(t),s=Fl(n.seconds,r.seconds);return 0!==s?s:Fl(n.nanos,r.nanos)}function Pc(e){return Fc(e)}function Fc(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Tc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ic(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Hl.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Fc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${Fc(e.fields[s])}`;return n+"}"}(e.mapValue):El()}function Uc(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Bc(e){return!!e&&"integerValue"in e}function Vc(e){return!!e&&"arrayValue"in e}function $c(e){return!!e&&"nullValue"in e}function zc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function jc(e){return!!e&&"mapValue"in e}function qc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return uc(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=qc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=qc(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Hc(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Gc{static empty(){return new Gc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!jc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qc(t)}setAll(e){let t=ql.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=qc(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());jc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Oc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];jc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){uc(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Gc(qc(this.value))}constructor(e){this.value=e}}function Wc(e){const t=[];return uc(e.fields,((e,n)=>{const r=new ql([e]);if(jc(n)){const e=Wc(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new yc(t)
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
 */}class Kc{static newInvalidDocument(e){return new Kc(e,0,Vl.min(),Vl.min(),Vl.min(),Gc.empty(),0)}static newFoundDocument(e,t,n,r){return new Kc(e,1,t,Vl.min(),n,r,0)}static newNoDocument(e,t){return new Kc(e,2,t,Vl.min(),Vl.min(),Gc.empty(),0)}static newUnknownDocument(e,t){return new Kc(e,3,t,Vl.min(),Vl.min(),Gc.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Vl.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Vl.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Kc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Kc(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,r,s,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}}
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
 */class Xc{constructor(e,t){this.position=e,this.inclusive=t}}function Yc(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?Hl.comparator(Hl.fromName(o.referenceValue),n.key):Nc(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Qc(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Oc(e.position[n],t.position[n]))return!1;return!0}
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
 */class Jc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Zc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class eu{}class tu extends eu{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new cu(e,t,n):"array-contains"===t?new pu(e,n):"in"===t?new fu(e,n):"not-in"===t?new mu(e,n):"array-contains-any"===t?new gu(e,n):new tu(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new uu(e,n):new hu(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Nc(t,this.value)):null!==t&&Lc(this.value)===Lc(t)&&this.matchesComparison(Nc(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return El()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class nu extends eu{static create(e,t){return new nu(e,t)}matches(e){return ru(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}}function ru(e){return"and"===e.op}function su(e){return iu(e)&&ru(e)}function iu(e){for(const t of e.filters)if(t instanceof nu)return!1;return!0}function ou(e){if(e instanceof tu)return e.field.canonicalString()+e.op.toString()+Pc(e.value);if(su(e))return e.filters.map((e=>ou(e))).join(",");{const t=e.filters.map((e=>ou(e))).join(",");return`${e.op}(${t})`}}function au(e,t){return e instanceof tu?(n=e,(r=t)instanceof tu&&n.op===r.op&&n.field.isEqual(r.field)&&Oc(n.value,r.value)):e instanceof nu?function(e,t){return t instanceof nu&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&au(n,t.filters[r])),!0)}(e,t):void El();var n,r}function lu(e){return e instanceof tu?`${(t=e).field.canonicalString()} ${t.op} ${Pc(t.value)}`:e instanceof nu?function(e){return e.op.toString()+" {"+e.getFilters().map(lu).join(" ,")+"}"}(e):"Filter";var t}class cu extends tu{matches(e){const t=Hl.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,n){super(e,t,n),this.key=Hl.fromName(n.referenceValue)}}class uu extends tu{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=du("in",t)}}class hu extends tu{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=du("not-in",t)}}function du(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Hl.fromName(e.referenceValue)))}class pu extends tu{matches(e){const t=e.data.field(this.field);return Vc(t)&&Rc(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class fu extends tu{matches(e){const t=e.data.field(this.field);return null!==t&&Rc(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class mu extends tu{matches(e){if(Rc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Rc(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class gu extends tu{matches(e){const t=e.data.field(this.field);return!(!Vc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Rc(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}
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
 */class yu{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.dt=null}}function vu(e,t=null,n=[],r=[],s=null,i=null,o=null){return new yu(e,t,n,r,s,i,o)}function wu(e){const t=Sl(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>ou(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),rc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Pc(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Pc(e))).join(",")),t.dt=e}return t.dt}function bu(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Zc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!au(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Qc(e.startAt,t.startAt)&&Qc(e.endAt,t.endAt)}function Eu(e){return Hl.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
class Tu{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function Su(e,t,n,r,s,i,o,a){return new Tu(e,t,n,r,s,i,o,a)}function Iu(e){return new Tu(e)}function Cu(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function _u(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Au(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function ku(e){return null!==e.collectionGroup}function xu(e){const t=Sl(e);if(null===t.wt){t.wt=[];const e=Au(t),n=_u(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new Jc(e)),t.wt.push(new Jc(ql.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Jc(ql.keyField(),e))}}}return t.wt}function Mu(e){const t=Sl(e);if(!t._t)if("F"===t.limitType)t._t=vu(t.path,t.collectionGroup,xu(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of xu(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Jc(n.field,t))}const n=t.endAt?new Xc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xc(t.startAt.position,t.startAt.inclusive):null;t._t=vu(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function Lu(e,t){t.getFirstInequalityField(),Au(e);const n=e.filters.concat([t]);return new Tu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Ou(e,t,n){return new Tu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ru(e,t){return bu(Mu(e),Mu(t))&&e.limitType===t.limitType}function Nu(e){return`${wu(Mu(e))}|lt:${e.limitType}`}function Du(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>lu(e))).join(", ")}]`),rc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Pc(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Pc(e))).join(",")),`Target(${t})`}(Mu(e))}; limitType=${e.limitType})`}function Pu(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Hl.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of xu(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Yc(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,xu(n),r)||n.endAt&&!function(e,t,n){const r=Yc(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,xu(n),r)));var n,r}function Fu(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Uu(e){return(t,n)=>{let r=!1;for(const s of xu(e)){const e=Bu(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function Bu(e,t,n){const r=e.field.isKeyField()?Hl.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?Nc(r,s):El()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return El()}}
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
 */class Vu{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){uc(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return hc(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
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
 */const $u=new dc(Hl.comparator);function zu(){return $u}const ju=new dc(Hl.comparator);function qu(...e){let t=ju;for(const n of e)t=t.insert(n.key,n);return t}function Hu(e){let t=ju;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Gu(){return Ku()}function Wu(){return Ku()}function Ku(){return new Vu((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Xu=new dc(Hl.comparator),Yu=new mc(Hl.comparator);function Qu(...e){let t=Yu;for(const n of e)t=t.add(n);return t}const Ju=new mc(Fl);function Zu(){return Ju}
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
 */function eh(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sc(t)?"-0":t}}function th(e){return{integerValue:""+e}}function nh(e,t){return ic(t)?th(t):eh(e,t)}
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
 */class rh{constructor(){this._=void 0}}function sh(e,t,n){return e instanceof ah?lh(e,t):e instanceof ch?uh(e,t):n}function ih(e,t){var n,r;return e instanceof hh?Bc(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}class oh extends rh{}class ah extends rh{constructor(e){super(),this.elements=e}}function lh(e,t){const n=ph(t);for(const t of e.elements)n.some((e=>Oc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class ch extends rh{constructor(e){super(),this.elements=e}}function uh(e,t){let n=ph(t);for(const t of e.elements)n=n.filter((e=>!Oc(e,t)));return{arrayValue:{values:n}}}class hh extends rh{constructor(e,t){super(),this.serializer=e,this.gt=t}}function dh(e){return Sc(e.integerValue||e.doubleValue)}function ph(e){return Vc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class fh{constructor(e,t){this.version=e,this.transformResults=t}}class mh{static none(){return new mh}static exists(e){return new mh(void 0,e)}static updateTime(e){return new mh(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function gh(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class yh{}function vh(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new kh(e.key,mh.none()):new Sh(e.key,e.data,mh.none());{const n=e.data,r=Gc.empty();let s=new mc(ql.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new Ih(e.key,r,new yc(s.toArray()),mh.none())}}function wh(e,t,n){var r;e instanceof Sh?function(e,t,n){const r=e.value.clone(),s=_h(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Ih?function(e,t,n){if(!gh(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=_h(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Ch(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function bh(e,t,n,r){return e instanceof Sh?function(e,t,n,r){if(!gh(e.precondition,t))return n;const s=e.value.clone(),i=Ah(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ih?function(e,t,n,r){if(!gh(e.precondition,t))return n;const s=Ah(e.fieldTransforms,r,t),i=t.data;return i.setAll(Ch(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(s=t,i=n,gh(e.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):i);var s,i}function Eh(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=ih(r.transform,e||null);null!=s&&(null===n&&(n=Gc.empty()),n.set(r.field,s))}return n||null}function Th(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Ul(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof ah&&r instanceof ah||n instanceof ch&&r instanceof ch?Ul(n.elements,r.elements,Oc):n instanceof hh&&r instanceof hh?Oc(n.gt,r.gt):n instanceof oh&&r instanceof oh);var n,r}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}class Sh extends yh{getFieldMask(){return null}constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ih extends yh{getFieldMask(){return this.fieldMask}constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}}function Ch(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function _h(e,t,n){const r=new Map;Tl(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,sh(o,a,n[s]))}return r}function Ah(e,t,n){const r=new Map;for(const a of e){const e=a.transform,l=n.data.field(a.field);r.set(a.field,(i=l,o=t,(s=e)instanceof oh?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Cc(t)&&(t=_c(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,i):s instanceof ah?lh(s,i):s instanceof ch?uh(s,i):function(e,t){const n=ih(e,t),r=dh(n)+dh(e.gt);return Bc(n)&&Bc(e.gt)?th(r):eh(e.serializer,r)}(s,i)))}var s,i,o;return r}class kh extends yh{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class xh extends yh{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */class Mh{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&wh(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=bh(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=bh(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Wu();return this.mutations.forEach((r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=vh(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(Vl.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Qu())}isEqual(e){return this.batchId===e.batchId&&Ul(this.mutations,e.mutations,((e,t)=>Th(e,t)))&&Ul(this.baseMutations,e.baseMutations,((e,t)=>Th(e,t)))}constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}}class Lh{static from(e,t,n){Tl(e.mutations.length===n.length);let r=Xu;const s=e.mutations;for(let e=0;e<s.length;e++)r=r.insert(s[e].key,n[e].version);return new Lh(e,t,n,r)}constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}}
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
 */class Oh{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
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
class Rh{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var Nh,Dh;function Ph(e){switch(e){default:return El();case Il.CANCELLED:case Il.UNKNOWN:case Il.DEADLINE_EXCEEDED:case Il.RESOURCE_EXHAUSTED:case Il.INTERNAL:case Il.UNAVAILABLE:case Il.UNAUTHENTICATED:return!1;case Il.INVALID_ARGUMENT:case Il.NOT_FOUND:case Il.ALREADY_EXISTS:case Il.PERMISSION_DENIED:case Il.FAILED_PRECONDITION:case Il.ABORTED:case Il.OUT_OF_RANGE:case Il.UNIMPLEMENTED:case Il.DATA_LOSS:return!0}}function Fh(e){if(void 0===e)return vl("GRPC error has no .code"),Il.UNKNOWN;switch(e){case Nh.OK:return Il.OK;case Nh.CANCELLED:return Il.CANCELLED;case Nh.UNKNOWN:return Il.UNKNOWN;case Nh.DEADLINE_EXCEEDED:return Il.DEADLINE_EXCEEDED;case Nh.RESOURCE_EXHAUSTED:return Il.RESOURCE_EXHAUSTED;case Nh.INTERNAL:return Il.INTERNAL;case Nh.UNAVAILABLE:return Il.UNAVAILABLE;case Nh.UNAUTHENTICATED:return Il.UNAUTHENTICATED;case Nh.INVALID_ARGUMENT:return Il.INVALID_ARGUMENT;case Nh.NOT_FOUND:return Il.NOT_FOUND;case Nh.ALREADY_EXISTS:return Il.ALREADY_EXISTS;case Nh.PERMISSION_DENIED:return Il.PERMISSION_DENIED;case Nh.FAILED_PRECONDITION:return Il.FAILED_PRECONDITION;case Nh.ABORTED:return Il.ABORTED;case Nh.OUT_OF_RANGE:return Il.OUT_OF_RANGE;case Nh.UNIMPLEMENTED:return Il.UNIMPLEMENTED;case Nh.DATA_LOSS:return Il.DATA_LOSS;default:return El()}}(Dh=Nh||(Nh={}))[Dh.OK=0]="OK",Dh[Dh.CANCELLED=1]="CANCELLED",Dh[Dh.UNKNOWN=2]="UNKNOWN",Dh[Dh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Dh[Dh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Dh[Dh.NOT_FOUND=5]="NOT_FOUND",Dh[Dh.ALREADY_EXISTS=6]="ALREADY_EXISTS",Dh[Dh.PERMISSION_DENIED=7]="PERMISSION_DENIED",Dh[Dh.UNAUTHENTICATED=16]="UNAUTHENTICATED",Dh[Dh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Dh[Dh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Dh[Dh.ABORTED=10]="ABORTED",Dh[Dh.OUT_OF_RANGE=11]="OUT_OF_RANGE",Dh[Dh.UNIMPLEMENTED=12]="UNIMPLEMENTED",Dh[Dh.INTERNAL=13]="INTERNAL",Dh[Dh.UNAVAILABLE=14]="UNAVAILABLE",Dh[Dh.DATA_LOSS=15]="DATA_LOSS";
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
class Uh{static get instance(){return Bh}static getOrCreateInstance(){return null===Bh&&(Bh=new Uh),Bh}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}constructor(){this.onExistenceFilterMismatchCallbacks=new Map}}let Bh=null;
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
 */const $h=new dl([4294967295,4294967295],0);function zh(e){const t=Vh().encode(e),n=new hl;return n.update(t),new Uint8Array(n.digest())}function jh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new dl([n,r],0),new dl([s,i],0)]}class qh{Et(e,t,n){let r=e.add(t.multiply(dl.fromNumber(n)));return 1===r.compare($h)&&(r=new dl([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=zh(e),[n,r]=jh(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,r,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),i=new qh(s,r,t);return n.forEach((e=>i.insert(e))),i}insert(e){if(0===this.It)return;const t=zh(e),[n,r]=jh(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,r,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Hh(`Invalid padding: ${t}`);if(n<0)throw new Hh(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Hh(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Hh(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=dl.fromNumber(this.It)}}class Hh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class Gh{static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Wh.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Gh(Vl.min(),r,new dc(Fl),zu(),Qu())}constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}}class Wh{static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Wh(n,t,Qu(),Qu(),Qu())}constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}}
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
 */class Kh{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class Xh{constructor(e,t){this.targetId=e,this.Vt=t}}class Yh{constructor(e,t,n=bc.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Qh{get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Qu(),t=Qu(),n=Qu();return this.Dt.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:El()}})),new Wh(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=ed()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}constructor(){this.St=0,this.Dt=ed(),this.Ct=bc.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}}class Jh{Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:El()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,r=e.Vt.count,s=this.se(n);if(s){const i=s.target;if(Eu(i))if(0===r){const e=new Hl(i.path);this.Yt(n,e,Kc.newNoDocument(e,Vl.min()))}else Tl(1===r);else{const s=this.ie(n);if(s!==r){const r=this.re(e,s);if(0!==r){this.ee(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Uh.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,s,i,o,a,l;const c={localCacheCount:t,existenceFilterCount:n.count},u=n.unchangedNames;return u&&(c.bloomFilter={applied:0===e,hashCount:null!==(r=null==u?void 0:u.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(i=null===(s=null==u?void 0:u.bits)||void 0===s?void 0:s.bitmap)||void 0===i?void 0:i.length)&&void 0!==o?o:0,padding:null!==(l=null===(a=null==u?void 0:u.bits)||void 0===a?void 0:a.padding)&&void 0!==l?l:0}),c}(r,s,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:s="",padding:i=0},hashCount:o=0}=n;let a,l;try{a=Ic(s).toUint8Array()}catch(e){if(e instanceof vc)return wl("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{l=new qh(a,i,o)}catch(e){return wl(e instanceof Hh?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===l.It?1:r!==t-this.oe(e.targetId,l)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const s=this.Gt.ue(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.vt(i)||(this.Yt(e,n,null),r++)})),r}ce(e){const t=new Map;this.Qt.forEach(((n,r)=>{const s=this.se(r);if(s){if(n.current&&Eu(s.target)){const t=new Hl(s.target.path);null!==this.jt.get(t)||this.ae(r,t)||this.Yt(r,t,Kc.newNoDocument(t,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}}));let n=Qu();this.zt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const r=new Gh(e,t,this.Wt,this.jt,n);return this.jt=zu(),this.zt=Zh(),this.Wt=new dc(Fl),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Qh,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new mc(Fl),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||yl("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Qh),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}constructor(e){this.Gt=e,this.Qt=new Map,this.jt=zu(),this.zt=Zh(),this.Wt=new dc(Fl)}}function Zh(){return new dc(Hl.comparator)}function ed(){return new dc(Hl.comparator)}const td={asc:"ASCENDING",desc:"DESCENDING"},nd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rd={and:"AND",or:"OR"};class sd{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function id(e,t){return e.useProto3Json||rc(t)?t:{value:t}}function od(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ad(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ld(e,t){return od(e,t.toTimestamp())}function cd(e){return Tl(!!e),Vl.fromTimestamp(function(e){const t=Tc(e);return new Bl(t.seconds,t.nanos)}(e))}function ud(e,t){return(n=e,new zl(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function hd(e){const t=zl.fromString(e);return Tl(Md(t)),t}function dd(e,t){return ud(e.databaseId,t.path)}function pd(e,t){const n=hd(t);if(n.get(1)!==e.databaseId.projectId)throw new Cl(Il.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Cl(Il.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Hl(yd(n))}function fd(e,t){return ud(e.databaseId,t)}function md(e){const t=hd(e);return 4===t.length?zl.emptyPath():yd(t)}function gd(e){return new zl(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function yd(e){return Tl(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function vd(e,t,n){return{name:dd(e,t),fields:n.value.mapValue.fields}}function wd(e,t){let n;if(t instanceof Sh)n={update:vd(e,t.key,t.value)};else if(t instanceof kh)n={delete:dd(e,t.key)};else if(t instanceof Ih)n={update:vd(e,t.key,t.data),updateMask:xd(t.fieldMask)};else{if(!(t instanceof xh))return El();n={verify:dd(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof oh)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ah)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ch)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof hh)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw El()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(s=t.precondition).updateTime?{updateTime:ld(r,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:El())),n;var r,s}function bd(e,t){return{documents:[fd(e,t.path)]}}function Ed(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=fd(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=fd(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0!==e.length)return kd(nu.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>{return{field:_d((t=e).field),direction:Id(t.dir)};var t}))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=id(e,t.limit);var a,l;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt={before:!(l=t.endAt).inclusive,values:l.position}),n}function Td(e){let t=md(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Tl(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=Sd(e);return t instanceof nu&&su(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new Jc(Ad((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,rc(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Xc(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Xc(n,t)}(n.endAt)),Su(t,s,o,i,a,"F",l,c)}function Sd(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ad(e.unaryFilter.field);return tu.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ad(e.unaryFilter.field);return tu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ad(e.unaryFilter.field);return tu.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ad(e.unaryFilter.field);return tu.create(s,"!=",{nullValue:"NULL_VALUE"});default:return El()}}(e):void 0!==e.fieldFilter?(n=e,tu.create(Ad(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return El()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,nu.create(t.compositeFilter.filters.map((e=>Sd(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return El()}}(t.compositeFilter.op))):El();var t,n}function Id(e){return td[e]}function Cd(e){return nd[e]}function _d(e){return{fieldPath:e.canonicalString()}}function Ad(e){return ql.fromServerFormat(e.fieldPath)}function kd(e){return e instanceof tu?function(e){if("=="===e.op){if(zc(e.value))return{unaryFilter:{field:_d(e.field),op:"IS_NAN"}};if($c(e.value))return{unaryFilter:{field:_d(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(zc(e.value))return{unaryFilter:{field:_d(e.field),op:"IS_NOT_NAN"}};if($c(e.value))return{unaryFilter:{field:_d(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_d(e.field),op:Cd(e.op),value:e.value}}}(e):e instanceof nu?function(e){const t=e.getFilters().map((e=>kd(e)));return 1===t.length?t[0]:{compositeFilter:{op:(n=e.op,rd[n]),filters:t}};var n}(e):El()}function xd(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Md(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class Ld{withSequenceNumber(e){return new Ld(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ld(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ld(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ld(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}constructor(e,t,n,r,s=Vl.min(),i=Vl.min(),o=bc.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}}
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
 */class Od{constructor(e){this.fe=e}}function Rd(e){const t=Td({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Ou(t,t.limit,"L"):t}
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
 */class Nd{_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Sc(e.integerValue));else if("doubleValue"in e){const n=Sc(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),sc(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Ic(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?Hc(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):El()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const e of Object.keys(n))this.Te(e,t),this.me(n[e],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const e of n)this.me(e,t)}ve(e,t){this.ye(t,37),Hl.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}constructor(){}}Nd.Ve=new Nd;
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
class Dd{addToCollectionParentIndex(e,t){return this.rn.add(t),ec.resolve()}getCollectionParents(e,t){return ec.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return ec.resolve()}deleteFieldIndex(e,t){return ec.resolve()}getDocumentsMatchingTarget(e,t){return ec.resolve(null)}getIndexType(e,t){return ec.resolve(0)}getFieldIndexes(e,t){return ec.resolve([])}getNextCollectionGroupToUpdate(e){return ec.resolve(null)}getMinOffset(e,t){return ec.resolve(Xl.min())}getMinOffsetFromCollectionGroup(e,t){return ec.resolve(Xl.min())}updateCollectionGroup(e,t,n){return ec.resolve()}updateIndexEntries(e,t){return ec.resolve()}constructor(){this.rn=new Pd}}class Pd{add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new mc(zl.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new mc(zl.comparator)).toArray()}constructor(){this.index={}}}
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
 */new Uint8Array(0);class Fd{static withCacheSize(e){return new Fd(e,Fd.DEFAULT_COLLECTION_PERCENTILE,Fd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
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
 */Fd.DEFAULT_COLLECTION_PERCENTILE=10,Fd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fd.DEFAULT=new Fd(41943040,Fd.DEFAULT_COLLECTION_PERCENTILE,Fd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fd.DISABLED=new Fd(-1,0,0);
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
class Ud{next(){return this.Nn+=2,this.Nn}static kn(){return new Ud(0)}static Mn(){return new Ud(-1)}constructor(e){this.Nn=e}}
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
class Bd{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Kc.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ec.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new Vu((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
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
class Vd{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class $d{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&bh(n.mutation,e,yc.empty(),Bl.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Qu()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Qu()){const r=Gu();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=qu();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Gu();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Qu())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let s=zu();const i=Ku(),o=Ku();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Ih)?s=s.insert(t.key,t):void 0!==o?(i.set(t.key,o.mutation.getFieldMask()),bh(o.mutation,t,o.mutation.getFieldMask(),Bl.now())):i.set(t.key,yc.empty())})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Vd(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Ku();let r=new dc(((e,t)=>e-t)),s=Qu();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||yc.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||Qu()).add(e);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,c=Wu();l.forEach((e=>{if(!s.has(e)){const r=vh(t.get(e),n.get(e));null!==r&&c.set(e,r),s=s.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,c))}return ec.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return r=t,Hl.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):ku(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var r}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):ec.resolve(Gu());let o=-1,a=s;return i.next((t=>ec.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?ec.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,Qu()))).next((e=>({batchId:o,changes:Hu(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Hl(t)).next((e=>{let t=qu();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let s=qu();return this.indexManager.getCollectionParents(e,r).next((i=>ec.forEach(i,(i=>{const o=(a=t,l=i.child(r),new Tu(l,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,l;return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Kc.newInvalidDocument(r)))}));let n=qu();return e.forEach(((e,s)=>{const i=r.get(e);void 0!==i&&bh(i.mutation,s,yc.empty(),Bl.now()),Pu(t,s)&&(n=n.insert(e,s))})),n}))}constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}}
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
 */class zd{getBundleMetadata(e,t){return ec.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:cd(n.createTime)}),ec.resolve()}getNamedQuery(e,t){return ec.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,{name:(n=t).name,query:Rd(n.bundledQuery),readTime:cd(n.readTime)}),ec.resolve();var n}constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}}
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
 */class jd{getOverlay(e,t){return ec.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Gu();return ec.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.we(e,t,r)})),ec.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),ec.resolve()}getOverlaysForCollection(e,t,n){const r=Gu(),s=t.length+1,i=new Hl(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ec.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new dc(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=Gu(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Gu(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return ec.resolve(o)}we(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Oh(t,n));let s=this.ls.get(t);void 0===s&&(s=Qu(),this.ls.set(t,s)),this.ls.set(t,s.add(n.key))}constructor(){this.overlays=new dc(Hl.comparator),this.ls=new Map}}
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
 */class qd{isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new Hd(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new Hd(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new Hl(new zl([])),n=new Hd(t,e),r=new Hd(t,e+1),s=[];return this.ws.forEachInRange([n,r],(e=>{this.ys(e),s.push(e.key)})),s}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new Hl(new zl([])),n=new Hd(t,e),r=new Hd(t,e+1);let s=Qu();return this.ws.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Hd(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.fs=new mc(Hd.ds),this.ws=new mc(Hd._s)}}class Hd{static ds(e,t){return Hl.comparator(e.key,t.key)||Fl(e.As,t.As)}static _s(e,t){return Fl(e.As,t.As)||Hl.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.As=t}}
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
 */class Gd{checkEmpty(e){return ec.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Mh(s,t,n,r);this.mutationQueue.push(i);for(const t of r)this.Rs=this.Rs.add(new Hd(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ec.resolve(i)}lookupMutationBatch(e,t){return ec.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),s=r<0?0:r;return ec.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ec.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return ec.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Hd(t,0),r=new Hd(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([n,r],(e=>{const t=this.Ps(e.As);s.push(t)})),ec.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new mc(Fl);return t.forEach((e=>{const t=new Hd(e,0),r=new Hd(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],(e=>{n=n.add(e.As)}))})),ec.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;Hl.isDocumentKey(s)||(s=s.child(""));const i=new Hd(new Hl(s),0);let o=new mc(Fl);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.As)),!0)}),i),ec.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Tl(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return ec.forEach(t.mutations,(r=>{const s=new Hd(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new Hd(t,0),r=this.Rs.firstAfterOrEqual(n);return ec.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ec.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new mc(Hd.ds)}}
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
 */class Wd{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ec.resolve(n?n.document.mutableCopy():Kc.newInvalidDocument(t))}getEntries(e,t){let n=zu();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Kc.newInvalidDocument(e))})),ec.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=zu();const i=t.path,o=new Hl(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||Yl(Kl(o),n)<=0||(r.has(o.key)||Pu(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return ec.resolve(s)}getAllFromCollectionGroup(e,t,n,r){El()}Cs(e,t){return ec.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Kd(this)}getSize(e){return ec.resolve(this.size)}constructor(e){this.Ds=e,this.docs=new dc(Hl.comparator),this.size=0}}class Kd extends Bd{applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)})),ec.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}constructor(e){super(),this.os=e}}
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
 */class Xd{forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),ec.resolve()}getLastRemoteSnapshotVersion(e){return ec.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ec.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),ec.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),ec.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Ud(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,ec.resolve()}updateTargetData(e,t){return this.Fn(t),ec.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,ec.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.xs.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),ec.waitFor(s).next((()=>r))}getTargetCount(e){return ec.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return ec.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),ec.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),ec.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),ec.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return ec.resolve(n)}containsKey(e,t){return ec.resolve(this.ks.containsKey(t))}constructor(e){this.persistence=e,this.xs=new Vu((e=>wu(e)),bu),this.lastRemoteSnapshotVersion=Vl.min(),this.highestTargetId=0,this.Ns=0,this.ks=new qd,this.targetCount=0,this.Ms=Ud.kn()}}
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
 */class Yd{start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jd,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new Gd(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){yl("MemoryPersistence","Starting transaction:",e);const r=new Qd(this.Os.next());return this.referenceDelegate.Us(),n(r).next((e=>this.referenceDelegate.Ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gs(e,t){return ec.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.$s={},this.overlays={},this.Os=new nc(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Xd(this),this.indexManager=new Dd,this.remoteDocumentCache=new Wd((e=>this.referenceDelegate.Ls(e))),this.serializer=new Od(t),this.qs=new zd(this.serializer)}}class Qd extends Jl{constructor(e){super(),this.currentSequenceNumber=e}}class Jd{static zs(e){return new Jd(e)}get Ws(){if(this.js)return this.js;throw El()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),ec.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),ec.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),ec.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ec.forEach(this.Ws,(n=>{const r=Hl.fromPath(n);return this.Hs(e,r).next((e=>{e||t.removeEntry(r,Vl.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return ec.or([()=>ec.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}constructor(e){this.persistence=e,this.Qs=new qd,this.js=null}}
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
class Zd{static Li(e,t){let n=Qu(),r=Qu();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Zd(e,t.fromCache,n,r)}constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}}
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
 */class ep{initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next((s=>s||this.Gi(e,t,r,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(Cu(t))return ec.resolve(null);let n=Mu(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Ou(t,null,"F"),n=Mu(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const s=Qu(...r);return this.Ui.getDocuments(e,s).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.ji(t,r);return this.zi(t,i,s,n.readTime)?this.Ki(e,Ou(t,null,"F")):this.Wi(e,i,t,n)}))))})))))}Gi(e,t,n,r){return Cu(t)||r.isEqual(Vl.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((s=>{const i=this.ji(t,s);return this.zi(t,i,n,r)?this.Qi(e,t):(gl()<=te.DEBUG&&yl("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Du(t)),this.Wi(e,i,t,Wl(r,-1)))}))}ji(e,t){let n=new mc(Uu(e));return t.forEach(((t,r)=>{Pu(e,r)&&(n=n.add(r))})),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Qi(e,t){return gl()<=te.DEBUG&&yl("QueryEngine","Using full collection scan to execute query:",Du(t)),this.Ui.getDocumentsMatchingQuery(e,t,Xl.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.qi=!1}}
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
 */class tp{tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $d(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new dc(Fl),this.Yi=new Vu((e=>wu(e)),bu),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}}function np(e,t,n,r){return new tp(e,t,n,r)}async function rp(e,t){const n=Sl(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((s=>(r=s,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],i=[];let o=Qu();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:s,addedBatchIds:i})))}))}))}function sp(e){const t=Sl(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function ip(e,t,n){let r=Qu(),s=Qu();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=zu();return n.forEach(((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(Vl.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):yl("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{nr:r,sr:s}}))}function op(e,t){const n=Sl(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function ap(e,t){const n=Sl(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Bs.getTargetData(e,t).next((s=>s?(r=s,ec.resolve(r)):n.Bs.allocateTargetId(e).next((s=>(r=new Ld(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function lp(e,t,n){const r=Sl(e),s=r.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!tc(e))throw e;yl("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(s.target)}function cp(e,t,n){const r=Sl(e);let s=Vl.min(),i=Qu();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Sl(e),s=r.Yi.get(n);return void 0!==s?ec.resolve(r.Ji.get(s)):r.Bs.getTargetData(t,n)}(r,e,Mu(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Hi.getDocumentsMatchingQuery(e,t,n?s:Vl.min(),n?i:Qu()))).next((e=>(up(r,Fu(t),e),{documents:e,ir:i})))))}function up(e,t,n){let r=e.Xi.get(t)||Vl.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Xi.set(t,r)}class hp{lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=Zu()}}class dp{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new hp,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Hr=new hp,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
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
 */class pp{Yr(e){}shutdown(){}}
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
 */class fp{Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){yl("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){yl("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}}
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
 */let mp=null;function gp(){return null===mp?mp=268435456+Math.round(2147483648*Math.random()):mp++,"0x"+mp.toString(16)
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
 */}const yp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class vp{uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}constructor(e){this.ro=e.ro,this.oo=e.oo}}
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
 */class wp extends class{get po(){return!1}Io(e,t,n,r,s){const i=gp(),o=this.To(e,t);yl("RestConnection",`Sending RPC '${e}' ${i}:`,o,n);const a={};return this.Eo(a,r,s),this.Ao(e,o,a,n).then((t=>(yl("RestConnection",`Received RPC '${e}' ${i}: `,t),t)),(t=>{throw wl("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,r,s,i){return this.Io(e,t,n,r,s)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+fl,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=yp[e];return`${this.mo}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{Ao(e,t,n,r){const s=gp();return new Promise(((i,o)=>{const a=new ul;a.setWithCredentials(!0),a.listenOnce(il.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case sl.NO_ERROR:const t=a.getResponseJson();yl("WebChannelConnection",`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case sl.TIMEOUT:yl("WebChannelConnection",`RPC '${e}' ${s} timed out`),o(new Cl(Il.DEADLINE_EXCEEDED,"Request time out"));break;case sl.HTTP_ERROR:const n=a.getStatus();if(yl("WebChannelConnection",`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Il).indexOf(t)>=0?t:Il.UNKNOWN}(t.status);o(new Cl(e,t.message))}else o(new Cl(Il.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Cl(Il.UNAVAILABLE,"Connection failed."));break;default:El()}}finally{yl("WebChannelConnection",`RPC '${e}' ${s} completed.`)}}));const l=JSON.stringify(r);yl("WebChannelConnection",`RPC '${e}' ${s} sending request:`,r),a.send(t,"POST",l,n,15)}))}Ro(e,t,n){const r=gp(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=nl(),o=rl(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.xmlHttpFactory=new ll({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=s.join("");yl("WebChannelConnection",`Creating RPC '${e}' stream ${r}: ${c}`,a);const u=i.createWebChannel(c,a);let h=!1,d=!1;const p=new vp({ro:t=>{d?yl("WebChannelConnection",`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(yl("WebChannelConnection",`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),yl("WebChannelConnection",`RPC '${e}' stream ${r} sending:`,t),u.send(t))},oo:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,cl.EventType.OPEN,(()=>{d||yl("WebChannelConnection",`RPC '${e}' stream ${r} transport opened.`)})),f(u,cl.EventType.CLOSE,(()=>{d||(d=!0,yl("WebChannelConnection",`RPC '${e}' stream ${r} transport closed`),p.wo())})),f(u,cl.EventType.ERROR,(t=>{d||(d=!0,wl("WebChannelConnection",`RPC '${e}' stream ${r} transport errored:`,t),p.wo(new Cl(Il.UNAVAILABLE,"The operation could not be completed")))})),f(u,cl.EventType.MESSAGE,(t=>{var n;if(!d){const s=t.data[0];Tl(!!s);const i=s,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){yl("WebChannelConnection",`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Nh[e];if(void 0!==t)return Fh(t)}(t),s=o.message;void 0===n&&(n=Il.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),d=!0,p.wo(new Cl(n,s)),u.close()}else yl("WebChannelConnection",`RPC '${e}' stream ${r} received:`,s),p._o(s)}})),f(o,ol.STAT_EVENT,(t=>{t.stat===al.PROXY?yl("WebChannelConnection",`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===al.NOPROXY&&yl("WebChannelConnection",`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{p.fo()}),0),p}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}}
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
 */function bp(){return"undefined"!=typeof document?document:null}
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
 */function Ep(e){return new sd(e,!0)}
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
 */class Tp{reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&yl("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}constructor(e,t,n=1e3,r=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}}
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
 */class Sp{Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===Il.RESOURCE_EXHAUSTED?(vl(t.toString()),vl("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===Il.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new Cl(Il.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return yl("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(yl("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,r,s,i,o,a){this.ii=e,this.$o=n,this.Oo=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Tp(e,t)}}class Ip extends Sp{eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:El(),i=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(Tl(void 0===t||"string"==typeof t),bc.fromBase64String(t||"")):(Tl(void 0===t||t instanceof Uint8Array),bc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(e){const t=void 0===e.code?Il.UNKNOWN:Fh(e.code);return new Cl(t,e.message||"")}(a);n=new Yh(s,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=pd(e,r.document.name),i=cd(r.document.updateTime),o=r.document.createTime?cd(r.document.createTime):Vl.min(),a=new Gc({mapValue:{fields:r.document.fields}}),l=Kc.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Kh(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=pd(e,r.document),i=r.readTime?cd(r.readTime):Vl.min(),o=Kc.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Kh([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=pd(e,r.document),i=r.removedTargetIds||[];n=new Kh([],i,s,null)}else{if(!("filter"in t))return El();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:s}=e,i=new Rh(r,s),o=e.targetId;n=new Xh(o,i)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Vl.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Vl.min():t.readTime?cd(t.readTime):Vl.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=gd(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Eu(r)?{documents:bd(e,r)}:{query:Ed(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=ad(e,t.resumeToken);const r=id(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Vl.min())>0){n.readTime=od(e,t.snapshotVersion.toTimestamp());const r=id(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return El()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=gd(this.serializer),t.removeTarget=e,this.Wo(t)}constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}}class Cp extends Sp{get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(Tl(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(Tl(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?cd(e.updateTime):cd(t);return n.isEqual(Vl.min())&&(n=cd(t)),new fh(n,e.transformResults||[])}(e,n)))):[]),s=cd(e.commitTime);return this.listener.cu(s,r)}var t,n;return Tl(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=gd(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>wd(this.serializer,e)))};this.Wo(t)}constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s,this.ru=!1}}
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
 */class _p extends class{}{fu(){if(this.lu)throw new Cl(Il.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.Io(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Il.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Cl(Il.UNKNOWN,e.toString())}))}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.vo(e,t,n,s,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Il.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Cl(Il.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}}class Ap{gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(vl(t),this.mu=!1):yl("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}}
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
 */class kp{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{Fp(this)&&(yl("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Sl(e);t.vu.add(4),await Mp(t),t.bu.set("Unknown"),t.vu.delete(4),await xp(t)}(this))}))})),this.bu=new Ap(n,r)}}async function xp(e){if(Fp(e))for(const t of e.Ru)await t(!0)}async function Mp(e){for(const t of e.Ru)await t(!1)}function Lp(e,t){const n=Sl(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Pp(n)?Dp(n):tf(n).Ko()&&Rp(n,t))}function Op(e,t){const n=Sl(e),r=tf(n);n.Au.delete(t),r.Ko()&&Np(n,t),0===n.Au.size&&(r.Ko()?r.jo():Fp(n)&&n.bu.set("Unknown"))}function Rp(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Vl.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}tf(e).su(t)}function Np(e,t){e.Vu.qt(t),tf(e).iu(t)}function Dp(e){e.Vu=new Jh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),tf(e).start(),e.bu.gu()}function Pp(e){return Fp(e)&&!tf(e).Uo()&&e.Au.size>0}function Fp(e){return 0===Sl(e).vu.size}function Up(e){e.Vu=void 0}async function Bp(e){e.Au.forEach(((t,n)=>{Rp(e,t)}))}async function Vp(e,t){Up(e),Pp(e)?(e.bu.Iu(t),Dp(e)):e.bu.set("Unknown")}async function $p(e,t,n){if(e.bu.set("Online"),t instanceof Yh&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(n){yl("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await zp(e,n)}else if(t instanceof Kh?e.Vu.Ht(t):t instanceof Xh?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(Vl.min()))try{const t=await sp(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.Au.get(r);s&&e.Au.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(bc.EMPTY_BYTE_STRING,r.snapshotVersion)),Np(e,t);const s=new Ld(r.target,t,n,r.sequenceNumber);Rp(e,s)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){yl("RemoteStore","Failed to raise snapshot:",t),await zp(e,t)}}async function zp(e,t,n){if(!tc(t))throw t;e.vu.add(1),await Mp(e),e.bu.set("Offline"),n||(n=()=>sp(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{yl("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await xp(e)}))}function jp(e,t){return t().catch((n=>zp(e,n,t)))}async function qp(e){const t=Sl(e),n=nf(t);let r=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Hp(t);)try{const e=await op(t.localStore,r);if(null===e){0===t.Eu.length&&n.jo();break}r=e.batchId,Gp(t,e)}catch(e){await zp(t,e)}Wp(t)&&Kp(t)}function Hp(e){return Fp(e)&&e.Eu.length<10}function Gp(e,t){e.Eu.push(t);const n=nf(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Wp(e){return Fp(e)&&!nf(e).Uo()&&e.Eu.length>0}function Kp(e){nf(e).start()}async function Xp(e){nf(e).hu()}async function Yp(e){const t=nf(e);for(const n of e.Eu)t.uu(n.mutations)}async function Qp(e,t,n){const r=e.Eu.shift(),s=Lh.from(r,t,n);await jp(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await qp(e)}async function Jp(e,t){t&&nf(e).ou&&await async function(e,t){if(Ph(n=t.code)&&n!==Il.ABORTED){const n=e.Eu.shift();nf(e).Qo(),await jp(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await qp(e)}var n}(e,t),Wp(e)&&Kp(e)}async function Zp(e,t){const n=Sl(e);n.asyncQueue.verifyOperationInProgress(),yl("RemoteStore","RemoteStore received new credentials");const r=Fp(n);n.vu.add(3),await Mp(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await xp(n)}async function ef(e,t){const n=Sl(e);t?(n.vu.delete(2),await xp(n)):t||(n.vu.add(2),await Mp(n),n.bu.set("Unknown"))}function tf(e){return e.Su||(e.Su=function(e,t,n){const r=Sl(e);return r.fu(),new Ip(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:Bp.bind(null,e),ao:Vp.bind(null,e),nu:$p.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),Pp(e)?Dp(e):e.bu.set("Unknown")):(await e.Su.stop(),Up(e))}))),e.Su}function nf(e){return e.Du||(e.Du=function(e,t,n){const r=Sl(e);return r.fu(),new Cp(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:Xp.bind(null,e),ao:Jp.bind(null,e),au:Yp.bind(null,e),cu:Qp.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await qp(e)):(await e.Du.stop(),e.Eu.length>0&&(yl("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
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
 */}class rf{static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new rf(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Cl(Il.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new _l,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function sf(e,t){if(vl("AsyncQueue",`${t}: ${e}`),tc(e))return new Cl(Il.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class of{static emptySet(e){return new of(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof of))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new of;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Hl.comparator(t.key,n.key):(e,t)=>Hl.comparator(e.key,t.key),this.keyedMap=qu(),this.sortedSet=new dc(this.comparator)}}
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
 */class af{track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):El():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.Cu=new dc(Hl.comparator)}}class lf{static fromInitialDocuments(e,t,n,r,s){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new lf(e,t,of.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ru(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,r,s,i,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}}
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
 */class cf{constructor(){this.Nu=void 0,this.listeners=[]}}class uf{constructor(){this.queries=new Vu((e=>Nu(e)),Ru),this.onlineState="Unknown",this.ku=new Set}}async function hf(e,t){const n=Sl(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new cf),s)try{i.Nu=await n.onListen(r)}catch(e){const n=sf(e,`Initialization of query '${Du(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.Mu(n.onlineState),i.Nu&&t.$u(i.Nu)&&mf(n)}async function df(e,t){const n=Sl(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function pf(e,t){const n=Sl(e);let r=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.listeners)t.$u(e)&&(r=!0);s.Nu=e}}r&&mf(n)}function ff(e,t,n){const r=Sl(e),s=r.queries.get(t);if(s)for(const e of s.listeners)e.onError(n);r.queries.delete(t)}function mf(e){e.ku.forEach((e=>{e.next()}))}class gf{$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new lf(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=lf.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}}
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
class yf{constructor(e){this.key=e}}class vf{constructor(e){this.key=e}}class wf{get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new af,r=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const c=r.get(e),u=Pu(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),p=!0):this.rc(c,u)||(n.track({type:2,doc:u}),p=!0,(a&&this.tc(u,a)>0||l&&this.tc(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),p=!0):c&&!u&&(n.track({type:1,doc:c}),p=!0,(a||l)&&(o=!0)),p&&(u?(i=i.add(u),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{ec:i,ic:n,zi:o,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return El()}};return n(e)-n(t)}(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const i=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==s.length||a?{snapshot:new lf(this.query,e.ec,r,s,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:i}:{cc:i}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new af,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Qu(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new vf(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new yf(n))})),t}hc(e){this.Yu=e.ir,this.Zu=Qu();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return lf.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Qu(),this.mutatedKeys=Qu(),this.tc=Uu(e),this.ec=new of(this.tc)}}class bf{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ef{constructor(e){this.key=e,this.fc=!1}}class Tf{get isPrimaryClient(){return!0===this.vc}constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.dc={},this.wc=new Vu((e=>Nu(e)),Ru),this._c=new Map,this.mc=new Set,this.gc=new dc(Hl.comparator),this.yc=new Map,this.Ic=new qd,this.Tc={},this.Ec=new Map,this.Ac=Ud.Mn(),this.onlineState="Unknown",this.vc=void 0}}async function Sf(e,t){const n=$f(e);let r,s;const i=n.wc.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.lc();else{const e=await ap(n.localStore,Mu(t)),i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await If(n,t,r,"current"===i,e.resumeToken),n.isPrimaryClient&&Lp(n.remoteStore,e)}return s}async function If(e,t,n,r,s){e.Rc=(t,n,r)=>async function(e,t,n,r){let s=t.view.sc(n);s.zi&&(s=await cp(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return Df(e,t.targetId,o.cc),o.snapshot}(e,t,n,r);const i=await cp(e.localStore,t,!0),o=new wf(t,i.ir),a=o.sc(i.documents),l=Wh.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),c=o.applyChanges(a,e.isPrimaryClient,l);Df(e,n,c.cc);const u=new bf(t,n,o);return e.wc.set(t,u),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function Cf(e,t){const n=Sl(e),r=n.wc.get(t),s=n._c.get(r.targetId);if(s.length>1)return n._c.set(r.targetId,s.filter((e=>!Ru(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await lp(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Op(n.remoteStore,r.targetId),Rf(n,r.targetId)})).catch(Zl)):(Rf(n,r.targetId),await lp(n.localStore,r.targetId,!0))}async function _f(e,t){const n=Sl(e);try{const e=await function(e,t){const n=Sl(e),r=t.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const o=[];t.targetChanges.forEach(((i,a)=>{const l=s.get(a);if(!l)return;o.push(n.Bs.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,i.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);var u,h,d;null!==t.targetMismatches.get(a)?c=c.withResumeToken(bc.EMPTY_BYTE_STRING,Vl.min()).withLastLimboFreeSnapshotVersion(Vl.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,r)),s=s.insert(a,c),h=c,d=i,(0===(u=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Bs.updateTargetData(e,c))}));let a=zu(),l=Qu();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(ip(e,i,t.documentUpdates).next((e=>{a=e.nr,l=e.sr}))),!r.isEqual(Vl.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return ec.waitFor(o).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Ji=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.yc.get(t);r&&(Tl(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.fc=!0:e.modifiedDocuments.size>0?Tl(r.fc):e.removedDocuments.size>0&&(Tl(r.fc),r.fc=!1))})),await Uf(n,e,t)}catch(e){await Zl(e)}}function Af(e,t,n){const r=Sl(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wc.forEach(((n,r)=>{const s=r.view.Mu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Sl(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(r=!0)})),r&&mf(n)}(r.eventManager,t),e.length&&r.dc.nu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function kf(e,t,n){const r=Sl(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.yc.get(t),i=s&&s.key;if(i){let e=new dc(Hl.comparator);e=e.insert(i,Kc.newNoDocument(i,Vl.min()));const n=Qu().add(i),s=new Gh(Vl.min(),new Map,new dc(Fl),e,n);await _f(r,s),r.gc=r.gc.remove(i),r.yc.delete(t),Ff(r)}else await lp(r.localStore,t,!1).then((()=>Rf(r,t,n))).catch(Zl)}async function xf(e,t){const n=Sl(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Sl(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=ec.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);Tl(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Qu();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);Of(n,r,null),Lf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Uf(n,e)}catch(e){await Zl(e)}}async function Mf(e,t,n){const r=Sl(e);try{const e=await function(e,t){const n=Sl(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Tl(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Of(r,t,n),Lf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Uf(r,e)}catch(e){await Zl(e)}}function Lf(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function Of(e,t,n){const r=Sl(e);let s=r.Tc[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.Tc[r.currentUser.toKey()]=s}}function Rf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||Nf(e,t)}))}function Nf(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(Op(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Ff(e))}function Df(e,t,n){for(const r of n)r instanceof yf?(e.Ic.addReference(r.key,t),Pf(e,r)):r instanceof vf?(yl("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||Nf(e,r.key)):El()}function Pf(e,t){const n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(yl("SyncEngine","New document in limbo: "+n),e.mc.add(r),Ff(e))}function Ff(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new Hl(zl.fromString(t)),r=e.Ac.next();e.yc.set(r,new Ef(n)),e.gc=e.gc.insert(n,r),Lp(e.remoteStore,new Ld(Mu(Iu(n.path)),r,"TargetPurposeLimboResolution",nc.ct))}}async function Uf(e,t,n){const r=Sl(e),s=[],i=[],o=[];r.wc.isEmpty()||(r.wc.forEach(((e,a)=>{o.push(r.Rc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=Zd.Li(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.dc.nu(s),await async function(e,t){const n=Sl(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ec.forEach(t,(t=>ec.forEach(t.Fi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>ec.forEach(t.Bi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!tc(e))throw e;yl("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(t,s)}}}(r.localStore,i))}async function Bf(e,t){const n=Sl(e);if(!n.currentUser.isEqual(t)){yl("SyncEngine","User change. New user:",t.toKey());const e=await rp(n.localStore,t);n.currentUser=t,(r=n).Ec.forEach((e=>{e.forEach((e=>{e.reject(new Cl(Il.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.Ec.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Uf(n,e.er)}var r}function Vf(e,t){const n=Sl(e),r=n.yc.get(t);if(r&&r.fc)return Qu().add(r.key);{let e=Qu();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.wc.get(t);e=e.unionWith(r.view.nc)}return e}}function $f(e){const t=Sl(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=_f.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kf.bind(null,t),t.dc.nu=pf.bind(null,t.eventManager),t.dc.Pc=ff.bind(null,t.eventManager),t}function zf(e){const t=Sl(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Mf.bind(null,t),t}class jf{async initialize(e){this.serializer=Ep(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return np(this.persistence,new ep,e.initialUser,this.serializer)}createPersistence(e){return new Yd(Jd.zs,this.serializer)}createSharedClientState(e){return new dp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class qf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Af(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bf.bind(null,this.syncEngine),await ef(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new uf}createDatastore(e){const t=Ep(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new wp(r));var r,s,i;return s=e.authCredentials,i=e.appCheckCredentials,new _p(s,i,n,t)}createRemoteStore(e){var t,n,r,s,i;return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Af(this.syncEngine,e,0),i=fp.D()?new fp:new pp,new kp(t,n,r,s,i)}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new Tf(e,t,n,r,s,i);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Sl(e);yl("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Mp(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
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
class Hf{next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):vl("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
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
class Gf{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Cl(Il.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _l;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=sf(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=pl.UNAUTHENTICATED,this.clientId=Pl.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{yl("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(yl("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function Wf(e,t){e.asyncQueue.verifyOperationInProgress(),yl("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await rp(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Kf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Yf(e);yl("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Zp(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Zp(t.remoteStore,n))),e._onlineComponents=t}function Xf(e){return"FirebaseError"===e.name?e.code===Il.FAILED_PRECONDITION||e.code===Il.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Yf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){yl("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Xf(n))throw n;wl("Error using user provided cache. Falling back to memory cache: "+n),await Wf(e,new jf)}}else yl("FirestoreClient","Using default OfflineComponentProvider"),await Wf(e,new jf);return e._offlineComponents}async function Qf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(yl("FirestoreClient","Using user provided OnlineComponentProvider"),await Kf(e,e._uninitializedComponentsProvider._online)):(yl("FirestoreClient","Using default OnlineComponentProvider"),await Kf(e,new qf))),e._onlineComponents}function Jf(e){return Qf(e).then((e=>e.syncEngine))}async function Zf(e){const t=await Qf(e),n=t.eventManager;return n.onListen=Sf.bind(null,t.syncEngine),n.onUnlisten=Cf.bind(null,t.syncEngine),n}function em(e,t,n={}){const r=new _l;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new Hf({next:i=>{t.enqueueAndForget((()=>df(e,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new Cl(Il.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new Cl(Il.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),o=new gf(Iu(n.path),i,{includeMetadataChanges:!0,Ku:!0});return hf(e,o)}(await Zf(e),e.asyncQueue,t,n,r))),r.promise}function tm(e,t,n={}){const r=new _l;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new Hf({next:n=>{t.enqueueAndForget((()=>df(e,o))),n.fromCache&&"server"===r.source?s.reject(new Cl(Il.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new gf(n,i,{includeMetadataChanges:!0,Ku:!0});return hf(e,o)}(await Zf(e),e.asyncQueue,t,n,r))),r.promise}
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
function nm(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const rm=new Map;
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
 */function sm(e,t,n){if(!n)throw new Cl(Il.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function im(e){if(!Hl.isDocumentKey(e))throw new Cl(Il.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function om(e){if(Hl.isDocumentKey(e))throw new Cl(Il.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function am(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":El()}function lm(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Cl(Il.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=am(e);throw new Cl(Il.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class cm{isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Cl(Il.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Cl(Il.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Cl(Il.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nm(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Cl(Il.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Cl(Il.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Cl(Il.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}}class um{get app(){if(!this._app)throw new Cl(Il.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Cl(Il.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cm(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new kl;switch(e.type){case"firstParty":return new Ol(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Cl(Il.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=rm.get(e);t&&(yl("ComponentProvider","Removing Datastore"),rm.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cm({}),this._settingsFrozen=!1}}function hm(e,t,n,r={}){var s;const i=(e=lm(e,um))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&wl("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=pl.MOCK_USER;else{t=R(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new Cl(Il.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new pl(i)}e._authCredentials=new xl(new Al(t,n))}}
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
 */class dm{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fm(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dm(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class pm{withConverter(e){return new pm(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class fm extends pm{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dm(this.firestore,null,new Hl(e))}withConverter(e){return new fm(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,Iu(n)),this._path=n,this.type="collection"}}function mm(e,t,...n){if(e=Y(e),sm("collection","path",t),e instanceof um){const r=zl.fromString(t,...n);return om(r),new fm(e,null,r)}{if(!(e instanceof dm||e instanceof fm))throw new Cl(Il.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(zl.fromString(t,...n));return om(r),new fm(e.firestore,null,r)}}function gm(e,t,...n){if(e=Y(e),1===arguments.length&&(t=Pl.A()),sm("doc","path",t),e instanceof um){const r=zl.fromString(t,...n);return im(r),new dm(e,null,new Hl(r))}{if(!(e instanceof dm||e instanceof fm))throw new Cl(Il.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(zl.fromString(t,...n));return im(r),new dm(e.firestore,e instanceof fm?e.converter:null,new Hl(r))}}
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
class ym{get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=bp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new _l;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!tc(e))throw e;yl("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;throw vl("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=rf.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(r),r}Zc(){this.Wc&&El()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Tp(this,"async_queue_retry"),this.Xc=()=>{const e=bp();e&&yl("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=bp();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}}class vm extends um{_terminate(){return this._firestoreClient||bm(this),this._firestoreClient.terminate()}constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ym,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function wm(e){return e._firestoreClient||bm(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function bm(e){var t,n,r;const s=e._freezeSettings(),i=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,new kc(o,a,l,(c=s).host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,nm(c.experimentalLongPollingOptions),c.useFetchStreams));var o,a,l,c;e._firestoreClient=new Gf(e._authCredentials,e._appCheckCredentials,e._queue,i),(null===(n=s.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}
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
class Em{static fromBase64String(e){try{return new Em(bc.fromBase64String(e))}catch(e){throw new Cl(Il.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Em(bc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
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
 */class Tm{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Cl(Il.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ql(e)}}
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
class Sm{constructor(e){this._methodName=e}}
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
 */class Im{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Fl(this._lat,e._lat)||Fl(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Cl(Il.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Cl(Il.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
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
 */const Cm=/^__.*__$/;class _m{toMutation(e,t){return null!==this.fieldMask?new Ih(e,this.data,this.fieldMask,t,this.fieldTransforms):new Sh(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}class Am{toMutation(e,t){return new Ih(e,this.data,this.fieldMask,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function km(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw El()}}class xm{get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new xm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return qm(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(km(this.ca)&&Cm.test(e))throw this._a('Document fields cannot begin and end with "__"')}constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=i||[]}}class Mm{ya(e,t,n,r=!1){return new xm({ca:e,methodName:t,ga:n,path:ql.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ep(e)}}function Lm(e){const t=e._freezeSettings(),n=Ep(e._databaseId);return new Mm(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Om(e,t,n,r,s,i={}){const o=e.ya(i.merge||i.mergeFields?2:0,t,n,s);Vm("Data must be an object, but it was:",o,r);const a=Um(r,o);let l,c;if(i.merge)l=new yc(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=$m(t,r,n);if(!o.contains(s))throw new Cl(Il.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Hm(e,s)||e.push(s)}l=new yc(e),c=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=o.fieldTransforms;return new _m(new Gc(a),l,c)}class Rm extends Sm{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Rm}}function Nm(e,t,n,r){const s=e.ya(1,t,n);Vm("Data must be an object, but it was:",s,r);const i=[],o=Gc.empty();uc(r,((e,r)=>{const a=jm(t,e,n);r=Y(r);const l=s.da(a);if(r instanceof Rm)i.push(a);else{const e=Fm(r,l);null!=e&&(i.push(a),o.set(a,e))}}));const a=new yc(i);return new Am(o,a,s.fieldTransforms)}function Dm(e,t,n,r,s,i){const o=e.ya(1,t,n),a=[$m(t,r,n)],l=[s];if(i.length%2!=0)throw new Cl(Il.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<i.length;e+=2)a.push($m(t,i[e])),l.push(i[e+1]);const c=[],u=Gc.empty();for(let e=a.length-1;e>=0;--e)if(!Hm(c,a[e])){const t=a[e];let n=l[e];n=Y(n);const r=o.da(t);if(n instanceof Rm)c.push(t);else{const e=Fm(n,r);null!=e&&(c.push(t),u.set(t,e))}}const h=new yc(c);return new Am(u,h,o.fieldTransforms)}function Pm(e,t,n,r=!1){return Fm(n,e.ya(r?4:3,t))}function Fm(e,t){if(Bm(e=Y(e)))return Vm("Unsupported field value:",t,e),Um(e,t);if(e instanceof Sm)return function(e,t){if(!km(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=Fm(s,t.wa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Y(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return nh(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Bl.fromDate(e);return{timestampValue:od(t.serializer,n)}}if(e instanceof Bl){const n=new Bl(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:od(t.serializer,n)}}if(e instanceof Im)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Em)return{bytesValue:ad(t.serializer,e._byteString)};if(e instanceof dm){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ud(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${am(e)}`)}(e,t)}function Um(e,t){const n={};return hc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):uc(e,((e,r)=>{const s=Fm(r,t.ha(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Bm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Bl||e instanceof Im||e instanceof Em||e instanceof dm||e instanceof Sm)}function Vm(e,t,n){if(!Bm(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=am(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}var r}function $m(e,t,n){if((t=Y(t))instanceof Tm)return t._internalPath;if("string"==typeof t)return jm(e,t);throw qm("Field path arguments must be of type string or ",e,!1,void 0,n)}const zm=new RegExp("[~\\*/\\[\\]]");function jm(e,t,n){if(t.search(zm)>=0)throw qm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Tm(...t.split("."))._internalPath}catch(r){throw qm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function qm(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Cl(Il.INVALID_ARGUMENT,a+e+l)}function Hm(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class Gm{get id(){return this._key.path.lastSegment()}get ref(){return new dm(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Wm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Km("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}}class Wm extends Gm{data(){return super.data()}}function Km(e,t){return"string"==typeof t?jm(e,t):t instanceof Tm?t._internalPath:t._delegate._internalPath}
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
 */function Xm(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Cl(Il.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ym{}class Qm extends Ym{}function Jm(e,t,...n){let r=[];t instanceof Ym&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof tg)).length,n=e.filter((e=>e instanceof Zm)).length;if(t>1||t>0&&n>0)throw new Cl(Il.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const t of r)e=t._apply(e);return e}class Zm extends Qm{static _create(e,t,n){return new Zm(e,t,n)}_apply(e){const t=this._parse(e);return sg(e._query,t),new pm(e.firestore,e.converter,Lu(e._query,t))}_parse(e){const t=Lm(e.firestore);return function(e,t,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new Cl(Il.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){rg(o,i);const t=[];for(const n of o)t.push(ng(r,e,n));a={arrayValue:{values:t}}}else a=ng(r,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||rg(o,i),a=Pm(n,"where",o,"in"===i||"not-in"===i);return tu.create(s,i,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value)}constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}}function eg(e,t,n){const r=t,s=Km("where",e);return Zm._create(s,r,n)}class tg extends Ym{static _create(e,t){return new tg(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:nu.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)sg(n,e),n=Lu(n,e)}(e._query,t),new pm(e.firestore,e.converter,Lu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}constructor(e,t){super(),this.type=e,this._queryConstraints=t}}function ng(e,t,n){if("string"==typeof(n=Y(n))){if(""===n)throw new Cl(Il.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ku(t)&&-1!==n.indexOf("/"))throw new Cl(Il.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(zl.fromString(n));if(!Hl.isDocumentKey(r))throw new Cl(Il.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Uc(e,new Hl(r))}if(n instanceof dm)return Uc(e,n._key);throw new Cl(Il.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${am(n)}.`)}function rg(e,t){if(!Array.isArray(e)||0===e.length)throw new Cl(Il.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function sg(e,t){if(t.isInequality()){const n=Au(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new Cl(Il.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const s=_u(e);null!==s&&ig(e,r,s)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Cl(Il.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Cl(Il.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function ig(e,t,n){if(!n.isEqual(t))throw new Cl(Il.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class og{convertValue(e,t="none"){switch(Lc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Sc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ic(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw El()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return uc(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Im(Sc(e.latitude),Sc(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=_c(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ac(e));default:return null}}convertTimestamp(e){const t=Tc(e);return new Bl(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=zl.fromString(e);Tl(Md(n));const r=new xc(n.get(1),n.get(3)),s=new Hl(n.popFirst(5));return r.isEqual(t)||vl(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
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
 */function ag(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
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
class lg{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class cg extends Gm{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ug(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Km("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}}class ug extends cg{data(e={}){return super.data(e)}}class hg{get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ug(this._firestore,this._userDataWriter,n.key,n,new lg(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Cl(Il.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new ug(e._firestore,e._userDataWriter,n.doc.key,n.doc,new lg(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new ug(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lg(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:dg(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new lg(r.hasPendingWrites,r.fromCache),this.query=n}}function dg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return El()}}
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
function pg(e){e=lm(e,dm);const t=lm(e.firestore,vm);return em(wm(t),e._key).then((n=>wg(t,e,n)))}class fg extends og{convertBytes(e){return new Em(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new dm(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function mg(e){e=lm(e,pm);const t=lm(e.firestore,vm),n=wm(t),r=new fg(t);return Xm(e._query),tm(n,e._query).then((n=>new hg(t,r,e,n)))}function gg(e,t,n){e=lm(e,dm);const r=lm(e.firestore,vm),s=ag(e.converter,t,n);return vg(r,[Om(Lm(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,mh.none())])}function yg(e,t,n,...r){e=lm(e,dm);const s=lm(e.firestore,vm),i=Lm(s);let o;return o="string"==typeof(t=Y(t))||t instanceof Tm?Dm(i,"updateDoc",e._key,t,n,r):Nm(i,"updateDoc",e._key,t),vg(s,[o.toMutation(e._key,mh.exists(!0))])}function vg(e,t){return function(e,t){const n=new _l;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=zf(e);try{const e=await function(e,t){const n=Sl(e),r=Bl.now(),s=t.reduce(((e,t)=>e.add(t.key)),Qu());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=zu(),l=Qu();return n.Zi.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{i=s;const o=[];for(const e of t){const t=Eh(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new Ih(e.key,t,Wc(t.value.mapValue),mh.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(i,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Hu(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Tc[e.currentUser.toKey()];r||(r=new dc(Fl)),r=r.insert(t,n),e.Tc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Uf(r,e.changes),await qp(r.remoteStore)}catch(e){const t=sf(e,"Failed to persist write");n.reject(t)}}(await Jf(e),t,n))),n.promise}(wm(e),t)}function wg(e,t,n){const r=n.docs.get(t._key),s=new fg(e);return new cg(e,s,t._key,r,new lg(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */!function(e,t=!0){fl="9.22.0",Le(new Q("firestore",((e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new vm(new Ml(e.getProvider("auth-internal")),new Nl(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Cl(Il.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xc(e.options.projectId,t)}(s,n),s);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),Fe("@firebase/firestore","3.12.0",e),Fe("@firebase/firestore","3.12.0","esm2017")}();const bg=De({apiKey:"AIzaSyAYO4Ie3dyg57FYXwv2s34tOoBXm3UaMzg",authDomain:"users-bookshelf.firebaseapp.com",projectId:"users-bookshelf",storageBucket:"users-bookshelf.appspot.com",messagingSenderId:"1093946480659",appId:"1:1093946480659:web:6fdb7ef580bf859789c7e6"}),Eg=function(e=Pe()){const t=Oe(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Oe(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(z(n.getOptions(),null!=t?t:{}))return e;Ze(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Ur,persistence:[tr,$n,jn]}),r=L("authTokenSyncURL");if(r){const e=(s=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Vr)return;const r=null==t?void 0:t.token;$r!==r&&($r=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Y(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){Y(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var s;const i=k("auth");return i&&ln(n,`http://${i}`),n}(),Tg=function(e,t){const n="string"==typeof e?e:t||"(default)",r=Oe("object"==typeof e?e:Pe(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=x("firestore");e&&hm(r,...e)}return r}(bg);var Sg=!1;let Ig="";var Cg,_g,Ag;Cg=e=>{e&&(e.uid,Sg=!0,Ig=e.uid),localStorage.setItem("IS_CUSTOMER_LOGGED_IN",Sg)},Y(Eg).onAuthStateChanged(Cg,_g,Ag);const kg=document.querySelector(".signin-cont"),xg=document.querySelector(".signup-cont"),Mg=document.querySelector(".signup"),Lg=document.querySelector(".signin"),Og=document.querySelector(".js-signup-btn"),Rg=document.querySelector(".content"),Ng=document.querySelector(".tabs");Og.addEventListener("click",(()=>{Rg.hidden})),Ng.addEventListener("click",(function(e){Lg.classList.toggle("active"),Mg.classList.toggle("active"),kg.classList.toggle("hidden"),xg.classList.toggle("hidden")}));document.querySelector(".js-form-signup").addEventListener("submit",(function(e){e.preventDefault();const{name:t,email:n,password:r}=e.currentTarget.elements;Pn(Eg,n.value,r.value).then((e=>{const r=e.user;gg(gm(Tg,"customers",n.value),{customer_name:t.value,customer_email:n.value,shopping_list:"",customer_avatar:"",session_id:r.uid}),window.open("/")})).catch((e=>{e.code;const t=e.message;alert(t)}))}));document.querySelector(".js-form-signin").addEventListener("submit",(function(e){e.preventDefault();const{email:t,password:n}=e.currentTarget.elements;Fn(Eg,t.value,n.value).then((async e=>{const n=e.user,r=gm(Tg,"customers",t.value);await yg(r,{session_id:n.uid});const s=await pg(r);s.exists()&&(console.log("Document data (Shoping list):",s.data().shopping_list),localStorage.setItem("bookId",s.data().shopping_list)),window.open("/")})).catch((e=>{e.code;const t=e.message;alert(t)}))}));document.querySelector(".js-signout").addEventListener("click",(function(){Un(Eg).then((async()=>{if(""==Ig)return!0;const e=Jm(mm(Tg,"customers"),eg("session_id","==",Ig)),t=await mg(e);let n="";if(t.forEach((e=>{n=e.data().customer_email})),n){const e=gm(Tg,"customers",n);await yg(e,{shopping_list:localStorage.getItem("bookId")})}localStorage.removeItem("bookId"),window.open("/")})).catch((e=>{}))}));const Dg=document.querySelector(".open-menu-icon"),Pg=document.querySelector(".close-menu-icon"),Fg=document.querySelector(".burger-menu");Dg.addEventListener("click",(function(){Fg.classList.remove("is-hidden"),Dg.classList.add("is-hidden"),Pg.classList.remove("is-hidden"),Fg.innerHTML='<div class="burger-conteiner">\n  <div class="user-burger">\n    <div class="avatar">\n      <img class="avatar_img" src="" alt="">\n    </div>\n    <p class="user-name">Stephen</p>\n  </div>\n\n  <nav class="navigation-burger">\n    <ul class="navigation-burger-list">\n      <li class="navigation-item navigation-burger-item"><a class="navigation-link" href="#">Home</a></li>\n      <li class="navigation-item navigation-burger-item">\n        <a class="navigation-link" href="#">Shopping List\n          <svg width="20" height="20">\n            <use href="./images/icons.svg#icon-lock"></use>\n          </svg>\n        </a>\n      </li>\n    </ul>\n  </nav>\n\n  <button class="button_logout btn-logout-burger">Log out\n    <svg width="20" height="20">\n      <use href="./images/icons.svg#icon-arrow-narrow-right"></use>\n    </svg>\n  </button>\n</div>'})),Pg.addEventListener("click",(function(){Fg.classList.add("is-hidden"),Dg.classList.remove("is-hidden"),Pg.classList.add("is-hidden")}));const Ug=document.querySelector("body"),Bg=document.querySelector("#theme-switch-toggle");Bg.addEventListener("change",(e=>{Ug.classList.contains("dark")?(Ug.classList.remove("dark"),localStorage.removeItem("darkTheme")):(Ug.classList.add("dark"),localStorage.setItem("darkTheme","true"))}));localStorage.getItem("darkTheme");function Vg(e,t){return function(){return e.apply(t,arguments)}}localStorage.getItem("darkTheme")&&(Ug.classList.add("dark"),Bg.checked=!0);const{toString:$g}=Object.prototype,{getPrototypeOf:zg}=Object,jg=(qg=Object.create(null),e=>{const t=$g.call(e);return qg[t]||(qg[t]=t.slice(8,-1).toLowerCase())});var qg;const Hg=e=>(e=e.toLowerCase(),t=>jg(t)===e),Gg=e=>t=>typeof t===e,{isArray:Wg}=Array,Kg=Gg("undefined");const Xg=Hg("ArrayBuffer");const Yg=Gg("string"),Qg=Gg("function"),Jg=Gg("number"),Zg=e=>null!==e&&"object"==typeof e,ey=e=>{if("object"!==jg(e))return!1;const t=zg(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},ty=Hg("Date"),ny=Hg("File"),ry=Hg("Blob"),sy=Hg("FileList"),iy=Hg("URLSearchParams");function oy(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,s;if("object"!=typeof e&&(e=[e]),Wg(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let o;for(r=0;r<i;r++)o=s[r],t.call(null,e[o],o,e)}}function ay(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,s=n.length;for(;s-- >0;)if(r=n[s],t===r.toLowerCase())return r;return null}const ly="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,cy=e=>!Kg(e)&&e!==ly;const uy=(hy="undefined"!=typeof Uint8Array&&zg(Uint8Array),e=>hy&&e instanceof hy);var hy;const dy=Hg("HTMLFormElement"),py=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),fy=Hg("RegExp"),my=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};oy(n,((n,s)=>{!1!==t(n,s,e)&&(r[s]=n)})),Object.defineProperties(e,r)},gy={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};const yy=Hg("AsyncFunction");var vy={isArray:Wg,isArrayBuffer:Xg,isBuffer:function(e){return null!==e&&!Kg(e)&&null!==e.constructor&&!Kg(e.constructor)&&Qg(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||Qg(e.append)&&("formdata"===(t=jg(e))||"object"===t&&Qg(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Xg(e.buffer),t},isString:Yg,isNumber:Jg,isBoolean:e=>!0===e||!1===e,isObject:Zg,isPlainObject:ey,isUndefined:Kg,isDate:ty,isFile:ny,isBlob:ry,isRegExp:fy,isFunction:Qg,isStream:e=>Zg(e)&&Qg(e.pipe),isURLSearchParams:iy,isTypedArray:uy,isFileList:sy,forEach:oy,merge:function e(){const{caseless:t}=cy(this)&&this||{},n={},r=(r,s)=>{const i=t&&ay(n,s)||s;ey(n[i])&&ey(r)?n[i]=e(n[i],r):ey(r)?n[i]=e({},r):Wg(r)?n[i]=r.slice():n[i]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&oy(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(oy(t,((t,r)=>{n&&Qg(t)?e[r]=Vg(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],r&&!r(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&zg(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:jg,kindOfTest:Hg,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(Wg(e))return e;let t=e.length;if(!Jg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:dy,hasOwnProperty:py,hasOwnProp:py,reduceDescriptors:my,freezeMethods:e=>{my(e,((t,n)=>{if(Qg(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];Qg(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return Wg(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:ay,global:ly,isContextDefined:cy,ALPHABET:gy,generateString:(e=16,t=gy.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&Qg(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(Zg(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const s=Wg(e)?[]:{};return oy(e,((e,t)=>{const i=n(e,r+1);!Kg(i)&&(s[t]=i)})),t[r]=void 0,s}}return e};return n(e,0)},isAsyncFn:yy,isThenable:e=>e&&(Zg(e)||Qg(e))&&Qg(e.then)&&Qg(e.catch)};function wy(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}vy.inherits(wy,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:vy.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const by=wy.prototype,Ey={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Ey[e]={value:e}})),Object.defineProperties(wy,Ey),Object.defineProperty(by,"isAxiosError",{value:!0}),wy.from=(e,t,n,r,s,i)=>{const o=Object.create(by);return vy.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),wy.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var Ty,Sy,Iy,Cy=wy;Sy=function(e){var t,n,r=Ny(e),s=r[0],i=r[1],o=new My(function(e,t,n){return 3*(t+n)/4-n}(0,s,i)),a=0,l=i>0?s-4:s;for(n=0;n<l;n+=4)t=xy[e.charCodeAt(n)]<<18|xy[e.charCodeAt(n+1)]<<12|xy[e.charCodeAt(n+2)]<<6|xy[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===i&&(t=xy[e.charCodeAt(n)]<<2|xy[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===i&&(t=xy[e.charCodeAt(n)]<<10|xy[e.charCodeAt(n+1)]<<4|xy[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},Iy=function(e){for(var t,n=e.length,r=n%3,s=[],i=16383,o=0,a=n-r;o<a;o+=i)s.push(Dy(e,o,o+i>a?a:o+i));1===r?(t=e[n-1],s.push(ky[t>>2]+ky[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],s.push(ky[t>>10]+ky[t>>4&63]+ky[t<<2&63]+"="));return s.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var _y,Ay,ky=[],xy=[],My="undefined"!=typeof Uint8Array?Uint8Array:Array,Ly="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Oy=0,Ry=Ly.length;Oy<Ry;++Oy)ky[Oy]=Ly[Oy],xy[Ly.charCodeAt(Oy)]=Oy;function Ny(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function Dy(e,t,n){for(var r,s,i=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),i.push(ky[(s=r)>>18&63]+ky[s>>12&63]+ky[s>>6&63]+ky[63&s]);return i.join("")}xy["-".charCodeAt(0)]=62,xy["_".charCodeAt(0)]=63,_y=function(e,t,n,r,s){var i,o,a=8*s-r-1,l=(1<<a)-1,c=l>>1,u=-7,h=n?s-1:0,d=n?-1:1,p=e[t+h];for(h+=d,i=p&(1<<-u)-1,p>>=-u,u+=a;u>0;i=256*i+e[t+h],h+=d,u-=8);for(o=i&(1<<-u)-1,i>>=-u,u+=r;u>0;o=256*o+e[t+h],h+=d,u-=8);if(0===i)i=1-c;else{if(i===l)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,r),i-=c}return(p?-1:1)*o*Math.pow(2,i-r)},Ay=function(e,t,n,r,s,i){var o,a,l,c=8*i-s-1,u=(1<<c)-1,h=u>>1,d=23===s?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:i-1,f=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+h>=1?d/l:d*Math.pow(2,1-h))*l>=2&&(o++,l/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(t*l-1)*Math.pow(2,s),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,s),o=0));s>=8;e[n+p]=255&a,p+=f,a/=256,s-=8);for(o=o<<s|a,c+=s;c>0;e[n+p]=255&o,p+=f,o/=256,c-=8);e[n+p-f]|=128*m};const Py="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;Ty=Uy;function Fy(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,Uy.prototype),t}function Uy(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return $y(e)}return By(e,t,n)}function By(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!Uy.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|Hy(e,t);let r=Fy(n);const s=r.write(e,t);s!==n&&(r=r.slice(0,s));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Iv(e,Uint8Array)){const t=new Uint8Array(e);return jy(t.buffer,t.byteOffset,t.byteLength)}return zy(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Iv(e,ArrayBuffer)||e&&Iv(e.buffer,ArrayBuffer))return jy(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Iv(e,SharedArrayBuffer)||e&&Iv(e.buffer,SharedArrayBuffer)))return jy(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return Uy.from(r,t,n);const s=function(e){if(Uy.isBuffer(e)){const t=0|qy(e.length),n=Fy(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Cv(e.length)?Fy(0):zy(e);if("Buffer"===e.type&&Array.isArray(e.data))return zy(e.data)}(e);if(s)return s;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Uy.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function Vy(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function $y(e){return Vy(e),Fy(e<0?0:0|qy(e))}function zy(e){const t=e.length<0?0:0|qy(e.length),n=Fy(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function jy(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,Uy.prototype),r}function qy(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function Hy(e,t){if(Uy.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Iv(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let s=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Ev(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Tv(e).length;default:if(s)return r?-1:Ev(e).length;t=(""+t).toLowerCase(),s=!0}}function Gy(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return iv(this,t,n);case"utf8":case"utf-8":return nv(this,t,n);case"ascii":return rv(this,t,n);case"latin1":case"binary":return sv(this,t,n);case"base64":return tv(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ov(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function Wy(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function Ky(e,t,n,r,s){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Cv(n=+n)&&(n=s?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(s)return-1;n=e.length-1}else if(n<0){if(!s)return-1;n=0}if("string"==typeof t&&(t=Uy.from(t,r)),Uy.isBuffer(t))return 0===t.length?-1:Xy(e,t,n,r,s);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?s?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):Xy(e,[t],n,r,s);throw new TypeError("val must be string, number or Buffer")}function Xy(e,t,n,r,s){let i,o=1,a=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(s){let r=-1;for(i=n;i<a;i++)if(c(e,i)===c(t,-1===r?0:i-r)){if(-1===r&&(r=i),i-r+1===l)return r*o}else-1!==r&&(i-=i-r),r=-1}else for(n+l>a&&(n=a-l),i=n;i>=0;i--){let n=!0;for(let r=0;r<l;r++)if(c(e,i+r)!==c(t,r)){n=!1;break}if(n)return i}return-1}function Yy(e,t,n,r){n=Number(n)||0;const s=e.length-n;r?(r=Number(r))>s&&(r=s):r=s;const i=t.length;let o;for(r>i/2&&(r=i/2),o=0;o<r;++o){const r=parseInt(t.substr(2*o,2),16);if(Cv(r))return o;e[n+o]=r}return o}function Qy(e,t,n,r){return Sv(Ev(t,e.length-n),e,n,r)}function Jy(e,t,n,r){return Sv(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function Zy(e,t,n,r){return Sv(Tv(t),e,n,r)}function ev(e,t,n,r){return Sv(function(e,t){let n,r,s;const i=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,s=n%256,i.push(s),i.push(r);return i}(t,e.length-n),e,n,r)}function tv(e,t,n){return 0===t&&n===e.length?Iy(e):Iy(e.slice(t,n))}function nv(e,t,n){n=Math.min(e.length,n);const r=[];let s=t;for(;s<n;){const t=e[s];let i=null,o=t>239?4:t>223?3:t>191?2:1;if(s+o<=n){let n,r,a,l;switch(o){case 1:t<128&&(i=t);break;case 2:n=e[s+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(i=l));break;case 3:n=e[s+1],r=e[s+2],128==(192&n)&&128==(192&r)&&(l=(15&t)<<12|(63&n)<<6|63&r,l>2047&&(l<55296||l>57343)&&(i=l));break;case 4:n=e[s+1],r=e[s+2],a=e[s+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(l=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,l>65535&&l<1114112&&(i=l))}}null===i?(i=65533,o=1):i>65535&&(i-=65536,r.push(i>>>10&1023|55296),i=56320|1023&i),r.push(i),s+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}Uy.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),Uy.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Uy.prototype,"parent",{enumerable:!0,get:function(){if(Uy.isBuffer(this))return this.buffer}}),Object.defineProperty(Uy.prototype,"offset",{enumerable:!0,get:function(){if(Uy.isBuffer(this))return this.byteOffset}}),Uy.poolSize=8192,Uy.from=function(e,t,n){return By(e,t,n)},Object.setPrototypeOf(Uy.prototype,Uint8Array.prototype),Object.setPrototypeOf(Uy,Uint8Array),Uy.alloc=function(e,t,n){return function(e,t,n){return Vy(e),e<=0?Fy(e):void 0!==t?"string"==typeof n?Fy(e).fill(t,n):Fy(e).fill(t):Fy(e)}(e,t,n)},Uy.allocUnsafe=function(e){return $y(e)},Uy.allocUnsafeSlow=function(e){return $y(e)},Uy.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Uy.prototype},Uy.compare=function(e,t){if(Iv(e,Uint8Array)&&(e=Uy.from(e,e.offset,e.byteLength)),Iv(t,Uint8Array)&&(t=Uy.from(t,t.offset,t.byteLength)),!Uy.isBuffer(e)||!Uy.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let s=0,i=Math.min(n,r);s<i;++s)if(e[s]!==t[s]){n=e[s],r=t[s];break}return n<r?-1:r<n?1:0},Uy.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Uy.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Uy.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=Uy.allocUnsafe(t);let s=0;for(n=0;n<e.length;++n){let t=e[n];if(Iv(t,Uint8Array))s+t.length>r.length?(Uy.isBuffer(t)||(t=Uy.from(t)),t.copy(r,s)):Uint8Array.prototype.set.call(r,t,s);else{if(!Uy.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,s)}s+=t.length}return r},Uy.byteLength=Hy,Uy.prototype._isBuffer=!0,Uy.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Wy(this,t,t+1);return this},Uy.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Wy(this,t,t+3),Wy(this,t+1,t+2);return this},Uy.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Wy(this,t,t+7),Wy(this,t+1,t+6),Wy(this,t+2,t+5),Wy(this,t+3,t+4);return this},Uy.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?nv(this,0,e):Gy.apply(this,arguments)},Uy.prototype.toLocaleString=Uy.prototype.toString,Uy.prototype.equals=function(e){if(!Uy.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===Uy.compare(this,e)},Uy.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},Py&&(Uy.prototype[Py]=Uy.prototype.inspect),Uy.prototype.compare=function(e,t,n,r,s){if(Iv(e,Uint8Array)&&(e=Uy.from(e,e.offset,e.byteLength)),!Uy.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===s&&(s=this.length),t<0||n>e.length||r<0||s>this.length)throw new RangeError("out of range index");if(r>=s&&t>=n)return 0;if(r>=s)return-1;if(t>=n)return 1;if(this===e)return 0;let i=(s>>>=0)-(r>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(i,o),l=this.slice(r,s),c=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==c[e]){i=l[e],o=c[e];break}return i<o?-1:o<i?1:0},Uy.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},Uy.prototype.indexOf=function(e,t,n){return Ky(this,e,t,n,!0)},Uy.prototype.lastIndexOf=function(e,t,n){return Ky(this,e,t,n,!1)},Uy.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const s=this.length-t;if((void 0===n||n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let i=!1;for(;;)switch(r){case"hex":return Yy(this,e,t,n);case"utf8":case"utf-8":return Qy(this,e,t,n);case"ascii":case"latin1":case"binary":return Jy(this,e,t,n);case"base64":return Zy(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ev(this,e,t,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},Uy.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function rv(e,t,n){let r="";n=Math.min(e.length,n);for(let s=t;s<n;++s)r+=String.fromCharCode(127&e[s]);return r}function sv(e,t,n){let r="";n=Math.min(e.length,n);for(let s=t;s<n;++s)r+=String.fromCharCode(e[s]);return r}function iv(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let s="";for(let r=t;r<n;++r)s+=_v[e[r]];return s}function ov(e,t,n){const r=e.slice(t,n);let s="";for(let e=0;e<r.length-1;e+=2)s+=String.fromCharCode(r[e]+256*r[e+1]);return s}function av(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function lv(e,t,n,r,s,i){if(!Uy.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>s||t<i)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function cv(e,t,n,r,s){yv(t,r,s,e,n,7);let i=Number(t&BigInt(4294967295));e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function uv(e,t,n,r,s){yv(t,r,s,e,n,7);let i=Number(t&BigInt(4294967295));e[n+7]=i,i>>=8,e[n+6]=i,i>>=8,e[n+5]=i,i>>=8,e[n+4]=i;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function hv(e,t,n,r,s,i){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function dv(e,t,n,r,s){return t=+t,n>>>=0,s||hv(e,0,n,4),Ay(e,t,n,r,23,4),n+4}function pv(e,t,n,r,s){return t=+t,n>>>=0,s||hv(e,0,n,8),Ay(e,t,n,r,52,8),n+8}Uy.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,Uy.prototype),r},Uy.prototype.readUintLE=Uy.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||av(e,t,this.length);let r=this[e],s=1,i=0;for(;++i<t&&(s*=256);)r+=this[e+i]*s;return r},Uy.prototype.readUintBE=Uy.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||av(e,t,this.length);let r=this[e+--t],s=1;for(;t>0&&(s*=256);)r+=this[e+--t]*s;return r},Uy.prototype.readUint8=Uy.prototype.readUInt8=function(e,t){return e>>>=0,t||av(e,1,this.length),this[e]},Uy.prototype.readUint16LE=Uy.prototype.readUInt16LE=function(e,t){return e>>>=0,t||av(e,2,this.length),this[e]|this[e+1]<<8},Uy.prototype.readUint16BE=Uy.prototype.readUInt16BE=function(e,t){return e>>>=0,t||av(e,2,this.length),this[e]<<8|this[e+1]},Uy.prototype.readUint32LE=Uy.prototype.readUInt32LE=function(e,t){return e>>>=0,t||av(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Uy.prototype.readUint32BE=Uy.prototype.readUInt32BE=function(e,t){return e>>>=0,t||av(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Uy.prototype.readBigUInt64LE=Av((function(e){vv(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||wv(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,s=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(s)<<BigInt(32))})),Uy.prototype.readBigUInt64BE=Av((function(e){vv(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||wv(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],s=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(s)})),Uy.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||av(e,t,this.length);let r=this[e],s=1,i=0;for(;++i<t&&(s*=256);)r+=this[e+i]*s;return s*=128,r>=s&&(r-=Math.pow(2,8*t)),r},Uy.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||av(e,t,this.length);let r=t,s=1,i=this[e+--r];for(;r>0&&(s*=256);)i+=this[e+--r]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i},Uy.prototype.readInt8=function(e,t){return e>>>=0,t||av(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},Uy.prototype.readInt16LE=function(e,t){e>>>=0,t||av(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},Uy.prototype.readInt16BE=function(e,t){e>>>=0,t||av(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},Uy.prototype.readInt32LE=function(e,t){return e>>>=0,t||av(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Uy.prototype.readInt32BE=function(e,t){return e>>>=0,t||av(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Uy.prototype.readBigInt64LE=Av((function(e){vv(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||wv(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),Uy.prototype.readBigInt64BE=Av((function(e){vv(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||wv(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),Uy.prototype.readFloatLE=function(e,t){return e>>>=0,t||av(e,4,this.length),_y(this,e,!0,23,4)},Uy.prototype.readFloatBE=function(e,t){return e>>>=0,t||av(e,4,this.length),_y(this,e,!1,23,4)},Uy.prototype.readDoubleLE=function(e,t){return e>>>=0,t||av(e,8,this.length),_y(this,e,!0,52,8)},Uy.prototype.readDoubleBE=function(e,t){return e>>>=0,t||av(e,8,this.length),_y(this,e,!1,52,8)},Uy.prototype.writeUintLE=Uy.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){lv(this,e,t,n,Math.pow(2,8*n)-1,0)}let s=1,i=0;for(this[t]=255&e;++i<n&&(s*=256);)this[t+i]=e/s&255;return t+n},Uy.prototype.writeUintBE=Uy.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){lv(this,e,t,n,Math.pow(2,8*n)-1,0)}let s=n-1,i=1;for(this[t+s]=255&e;--s>=0&&(i*=256);)this[t+s]=e/i&255;return t+n},Uy.prototype.writeUint8=Uy.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||lv(this,e,t,1,255,0),this[t]=255&e,t+1},Uy.prototype.writeUint16LE=Uy.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||lv(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},Uy.prototype.writeUint16BE=Uy.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||lv(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},Uy.prototype.writeUint32LE=Uy.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||lv(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},Uy.prototype.writeUint32BE=Uy.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||lv(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Uy.prototype.writeBigUInt64LE=Av((function(e,t=0){return cv(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Uy.prototype.writeBigUInt64BE=Av((function(e,t=0){return uv(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Uy.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);lv(this,e,t,n,r-1,-r)}let s=0,i=1,o=0;for(this[t]=255&e;++s<n&&(i*=256);)e<0&&0===o&&0!==this[t+s-1]&&(o=1),this[t+s]=(e/i>>0)-o&255;return t+n},Uy.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);lv(this,e,t,n,r-1,-r)}let s=n-1,i=1,o=0;for(this[t+s]=255&e;--s>=0&&(i*=256);)e<0&&0===o&&0!==this[t+s+1]&&(o=1),this[t+s]=(e/i>>0)-o&255;return t+n},Uy.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||lv(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},Uy.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||lv(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},Uy.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||lv(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},Uy.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||lv(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},Uy.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||lv(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Uy.prototype.writeBigInt64LE=Av((function(e,t=0){return cv(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Uy.prototype.writeBigInt64BE=Av((function(e,t=0){return uv(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Uy.prototype.writeFloatLE=function(e,t,n){return dv(this,e,t,!0,n)},Uy.prototype.writeFloatBE=function(e,t,n){return dv(this,e,t,!1,n)},Uy.prototype.writeDoubleLE=function(e,t,n){return pv(this,e,t,!0,n)},Uy.prototype.writeDoubleBE=function(e,t,n){return pv(this,e,t,!1,n)},Uy.prototype.copy=function(e,t,n,r){if(!Uy.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const s=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),s},Uy.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!Uy.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let s;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(s=t;s<n;++s)this[s]=e;else{const i=Uy.isBuffer(e)?e:Uy.from(e,r),o=i.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<n-t;++s)this[s+t]=i[s%o]}return this};const fv={};function mv(e,t,n){fv[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function gv(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function yv(e,t,n,r,s,i){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let s;throw s=i>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(i+1)}${r}`:`>= -(2${r} ** ${8*(i+1)-1}${r}) and < 2 ** ${8*(i+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new fv.ERR_OUT_OF_RANGE("value",s,e)}!function(e,t,n){vv(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||wv(t,e.length-(n+1))}(r,s,i)}function vv(e,t){if("number"!=typeof e)throw new fv.ERR_INVALID_ARG_TYPE(t,"number",e)}function wv(e,t,n){if(Math.floor(e)!==e)throw vv(e,n),new fv.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new fv.ERR_BUFFER_OUT_OF_BOUNDS;throw new fv.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}mv("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),mv("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),mv("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,s=n;return Number.isInteger(n)&&Math.abs(n)>2**32?s=gv(String(n)):"bigint"==typeof n&&(s=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(s=gv(s)),s+="n"),r+=` It must be ${t}. Received ${s}`,r}),RangeError);const bv=/[^+/0-9A-Za-z-_]/g;function Ev(e,t){let n;t=t||1/0;const r=e.length;let s=null;const i=[];for(let o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!s){if(n>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&i.push(239,191,189);continue}s=n;continue}if(n<56320){(t-=3)>-1&&i.push(239,191,189),s=n;continue}n=65536+(s-55296<<10|n-56320)}else s&&(t-=3)>-1&&i.push(239,191,189);if(s=null,n<128){if((t-=1)<0)break;i.push(n)}else if(n<2048){if((t-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function Tv(e){return Sy(function(e){if((e=(e=e.split("=")[0]).trim().replace(bv,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Sv(e,t,n,r){let s;for(s=0;s<r&&!(s+n>=t.length||s>=e.length);++s)t[s+n]=e[s];return s}function Iv(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Cv(e){return e!=e}const _v=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let s=0;s<16;++s)t[r+s]=e[n]+e[s]}return t}();function Av(e){return"undefined"==typeof BigInt?kv:e}function kv(){throw new Error("BigInt not supported")}var xv=Ty;function Mv(e){return vy.isPlainObject(e)||vy.isArray(e)}function Lv(e){return vy.endsWith(e,"[]")?e.slice(0,-2):e}function Ov(e,t,n){return e?e.concat(t).map((function(e,t){return e=Lv(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Rv=vy.toFlatObject(vy,{},null,(function(e){return/^is[A-Z]/.test(e)}));var Nv=function(e,t,n){if(!vy.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=vy.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!vy.isUndefined(t[e])}))).metaTokens,s=n.visitor||c,i=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&vy.isSpecCompliantForm(t);if(!vy.isFunction(s))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(vy.isDate(e))return e.toISOString();if(!a&&vy.isBlob(e))throw new Cy("Blob is not supported. Use a Buffer instead.");return vy.isArrayBuffer(e)||vy.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):xv.from(e):e}function c(e,n,s){let a=e;if(e&&!s&&"object"==typeof e)if(vy.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(vy.isArray(e)&&function(e){return vy.isArray(e)&&!e.some(Mv)}(e)||(vy.isFileList(e)||vy.endsWith(n,"[]"))&&(a=vy.toArray(e)))return n=Lv(n),a.forEach((function(e,r){!vy.isUndefined(e)&&null!==e&&t.append(!0===o?Ov([n],r,i):null===o?n:n+"[]",l(e))})),!1;return!!Mv(e)||(t.append(Ov(s,n,i),l(e)),!1)}const u=[],h=Object.assign(Rv,{defaultVisitor:c,convertValue:l,isVisitable:Mv});if(!vy.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!vy.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),vy.forEach(n,(function(n,i){!0===(!(vy.isUndefined(n)||null===n)&&s.call(t,n,vy.isString(i)?i.trim():i,r,h))&&e(n,r?r.concat(i):[i])})),u.pop()}}(e),t};function Dv(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Pv(e,t){this._pairs=[],e&&Nv(e,this,t)}const Fv=Pv.prototype;Fv.append=function(e,t){this._pairs.push([e,t])},Fv.toString=function(e){const t=e?function(t){return e.call(this,t,Dv)}:Dv;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Uv=Pv;function Bv(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Vv(e,t,n){if(!t)return e;const r=n&&n.encode||Bv,s=n&&n.serialize;let i;if(i=s?s(t,n):vy.isURLSearchParams(t)?t.toString():new Uv(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}var $v=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){vy.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},zv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var jv={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Uv,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function qv(e,t){return Nv(e,new jv.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return jv.isNode&&vy.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}var Hv=function(e){function t(e,n,r,s){let i=e[s++];const o=Number.isFinite(+i),a=s>=e.length;if(i=!i&&vy.isArray(r)?r.length:i,a)return vy.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!o;r[i]&&vy.isObject(r[i])||(r[i]=[]);return t(e,n,r[i],s)&&vy.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}(r[i])),!o}if(vy.isFormData(e)&&vy.isFunction(e.entries)){const n={};return vy.forEachEntry(e,((e,r)=>{t(function(e){return vy.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const Gv={"Content-Type":void 0};const Wv={transitional:zv,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,s=vy.isObject(e);s&&vy.isHTMLForm(e)&&(e=new FormData(e));if(vy.isFormData(e))return r&&r?JSON.stringify(Hv(e)):e;if(vy.isArrayBuffer(e)||vy.isBuffer(e)||vy.isStream(e)||vy.isFile(e)||vy.isBlob(e))return e;if(vy.isArrayBufferView(e))return e.buffer;if(vy.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return qv(e,this.formSerializer).toString();if((i=vy.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Nv(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),function(e,t,n){if(vy.isString(e))try{return(t||JSON.parse)(e),vy.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Wv.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&vy.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw Cy.from(e,Cy.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jv.classes.FormData,Blob:jv.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};vy.forEach(["delete","get","head"],(function(e){Wv.headers[e]={}})),vy.forEach(["post","put","patch"],(function(e){Wv.headers[e]=vy.merge(Gv)}));var Kv=Wv;const Xv=vy.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Yv=e=>{const t={};let n,r,s;return e&&e.split("\n").forEach((function(e){s=e.indexOf(":"),n=e.substring(0,s).trim().toLowerCase(),r=e.substring(s+1).trim(),!n||t[n]&&Xv[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const Qv=Symbol("internals");function Jv(e){return e&&String(e).trim().toLowerCase()}function Zv(e){return!1===e||null==e?e:vy.isArray(e)?e.map(Zv):String(e)}function ew(e,t,n,r,s){return vy.isFunction(r)?r.call(this,t,n):(s&&(t=n),vy.isString(t)?vy.isString(r)?-1!==t.indexOf(r):vy.isRegExp(r)?r.test(t):void 0:void 0)}let tw=Symbol.iterator,nw=Symbol.toStringTag;class rw{set(e,t,n){const r=this;function s(e,t,n){const s=Jv(t);if(!s)throw new Error("header name must be a non-empty string");const i=vy.findKey(r,s);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=Zv(e))}const i=(e,t)=>vy.forEach(e,((e,n)=>s(e,n,t)));return vy.isPlainObject(e)||e instanceof this.constructor?i(e,t):vy.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?i(Yv(e),t):null!=e&&s(t,e,n),this}get(e,t){if(e=Jv(e)){const n=vy.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(vy.isFunction(t))return t.call(this,e,n);if(vy.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Jv(e)){const n=vy.findKey(this,e);return!(!n||void 0===this[n]||t&&!ew(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function s(e){if(e=Jv(e)){const s=vy.findKey(n,e);!s||t&&!ew(0,n[s],s,t)||(delete n[s],r=!0)}}return vy.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const s=t[n];e&&!ew(0,this[s],s,e,!0)||(delete this[s],r=!0)}return r}normalize(e){const t=this,n={};return vy.forEach(this,((r,s)=>{const i=vy.findKey(n,s);if(i)return t[i]=Zv(r),void delete t[s];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(s):String(s).trim();o!==s&&delete t[s],t[o]=Zv(r),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return vy.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&vy.isArray(n)?n.join(", "):n)})),t}[tw](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[nw](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Qv]=this[Qv]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Jv(e);t[r]||(!function(e,t){const n=vy.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,s){return this[r].call(this,t,e,n,s)},configurable:!0})}))}(n,e),t[r]=!0)}return vy.isArray(e)?e.forEach(r):r(e),this}constructor(e){e&&this.set(e)}}rw.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),vy.freezeMethods(rw.prototype),vy.freezeMethods(rw);var sw=rw;function iw(e,t){const n=this||Kv,r=t||n,s=sw.from(r.headers);let i=r.data;return vy.forEach(e,(function(e){i=e.call(n,i,s.normalize(),t?t.status:void 0)})),s.normalize(),i}function ow(e){return!(!e||!e.__CANCEL__)}function aw(e,t,n){Cy.call(this,null==e?"canceled":e,Cy.ERR_CANCELED,t,n),this.name="CanceledError"}vy.inherits(aw,Cy,{__CANCEL__:!0});var lw=aw;function cw(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Cy("Request failed with status code "+n.status,[Cy.ERR_BAD_REQUEST,Cy.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var uw=jv.isStandardBrowserEnv?{write:function(e,t,n,r,s,i){const o=[];o.push(e+"="+encodeURIComponent(t)),vy.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),vy.isString(r)&&o.push("path="+r),vy.isString(s)&&o.push("domain="+s),!0===i&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function hw(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function dw(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?hw(e,t):t}var pw=jv.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=vy.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function fw(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var mw=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s,i=0,o=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=r[o];s||(s=l),n[i]=a,r[i]=l;let u=o,h=0;for(;u!==i;)h+=n[u++],u%=e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),l-s<t)return;const d=c&&l-c;return d?Math.round(1e3*h/d):void 0}};function gw(e,t){let n=0;const r=mw(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,l=r(a);n=i;const c={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&i<=o?(o-i)/l:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const yw={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const s=sw.from(e.headers).normalize(),i=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}vy.isFormData(r)&&(jv.isStandardBrowserEnv||jv.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(t+":"+n))}const c=dw(e.baseURL,e.url);function u(){if(!l)return;const r=sw.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());cw((function(e){t(e),a()}),(function(e){n(e),a()}),{data:i&&"text"!==i&&"json"!==i?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),Vv(c,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new Cy("Request aborted",Cy.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new Cy("Network Error",Cy.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||zv;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Cy(t,r.clarifyTimeoutError?Cy.ETIMEDOUT:Cy.ECONNABORTED,e,l)),l=null},jv.isStandardBrowserEnv){const t=(e.withCredentials||pw(c))&&e.xsrfCookieName&&uw.read(e.xsrfCookieName);t&&s.set(e.xsrfHeaderName,t)}void 0===r&&s.setContentType(null),"setRequestHeader"in l&&vy.forEach(s.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),vy.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&"json"!==i&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",gw(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",gw(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{l&&(n(!t||t.type?new lw(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const h=fw(c);h&&-1===jv.protocols.indexOf(h)?n(new Cy("Unsupported protocol "+h+":",Cy.ERR_BAD_REQUEST,e)):l.send(r||null)}))}};vy.forEach(yw,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var vw={getAdapter:e=>{e=vy.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=vy.isString(n)?yw[n.toLowerCase()]:n));s++);if(!r){if(!1===r)throw new Cy(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(vy.hasOwnProp(yw,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!vy.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:yw};function ww(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new lw(null,e)}function bw(e){ww(e),e.headers=sw.from(e.headers),e.data=iw.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return vw.getAdapter(e.adapter||Kv.adapter)(e).then((function(t){return ww(e),t.data=iw.call(e,e.transformResponse,t),t.headers=sw.from(t.headers),t}),(function(t){return ow(t)||(ww(e),t&&t.response&&(t.response.data=iw.call(e,e.transformResponse,t.response),t.response.headers=sw.from(t.response.headers))),Promise.reject(t)}))}const Ew=e=>e instanceof sw?e.toJSON():e;function Tw(e,t){t=t||{};const n={};function r(e,t,n){return vy.isPlainObject(e)&&vy.isPlainObject(t)?vy.merge.call({caseless:n},e,t):vy.isPlainObject(t)?vy.merge({},t):vy.isArray(t)?t.slice():t}function s(e,t,n){return vy.isUndefined(t)?vy.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!vy.isUndefined(t))return r(void 0,t)}function o(e,t){return vy.isUndefined(t)?vy.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,s,i){return i in t?r(n,s):i in e?r(void 0,n):void 0}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>s(Ew(e),Ew(t),!0)};return vy.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=l[r]||s,o=i(e[r],t[r],r);vy.isUndefined(o)&&i!==a||(n[r]=o)})),n}const Sw={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Sw[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Iw={};Sw.transitional=function(e,t,n){function r(e,t){return"[Axios v1.4.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,s,i)=>{if(!1===e)throw new Cy(r(s," has been removed"+(t?" in "+t:"")),Cy.ERR_DEPRECATED);return t&&!Iw[s]&&(Iw[s]=!0,console.warn(r(s," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,s,i)}};var Cw={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Cy("options must be an object",Cy.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const t=e[i],n=void 0===t||o(t,i,e);if(!0!==n)throw new Cy("option "+i+" must be "+n,Cy.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Cy("Unknown option "+i,Cy.ERR_BAD_OPTION)}},validators:Sw};const _w=Cw.validators;class Aw{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Tw(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:s}=t;let i;void 0!==n&&Cw.assertOptions(n,{silentJSONParsing:_w.transitional(_w.boolean),forcedJSONParsing:_w.transitional(_w.boolean),clarifyTimeoutError:_w.transitional(_w.boolean)},!1),null!=r&&(vy.isFunction(r)?t.paramsSerializer={serialize:r}:Cw.assertOptions(r,{encode:_w.function,serialize:_w.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),i=s&&vy.merge(s.common,s[t.method]),i&&vy.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete s[e]})),t.headers=sw.concat(i,s);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,h=0;if(!a){const e=[bw.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);h<u;)c=c.then(e[h++],e[h++]);return c}u=o.length;let d=t;for(h=0;h<u;){const e=o[h++],t=o[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{c=bw.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,u=l.length;h<u;)c=c.then(l[h++],l[h++]);return c}getUri(e){return Vv(dw((e=Tw(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new $v,response:new $v}}}vy.forEach(["delete","get","head","options"],(function(e){Aw.prototype[e]=function(t,n){return this.request(Tw(n||{},{method:e,url:t,data:(n||{}).data}))}})),vy.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,s){return this.request(Tw(s||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Aw.prototype[e]=t(),Aw.prototype[e+"Form"]=t(!0)}));var kw=Aw;class xw{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new xw((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,s){n.reason||(n.reason=new lw(e,r,s),t(n.reason))}))}}var Mw=xw;const Lw={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Lw).forEach((([e,t])=>{Lw[t]=e}));var Ow=Lw;const Rw=function e(t){const n=new kw(t),r=Vg(kw.prototype.request,n);return vy.extend(r,kw.prototype,n,{allOwnKeys:!0}),vy.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Tw(t,n))},r}(Kv);Rw.Axios=kw,Rw.CanceledError=lw,Rw.CancelToken=Mw,Rw.isCancel=ow,Rw.VERSION="1.4.0",Rw.toFormData=Nv,Rw.AxiosError=Cy,Rw.Cancel=Rw.CanceledError,Rw.all=function(e){return Promise.all(e)},Rw.spread=function(e){return function(t){return e.apply(null,t)}},Rw.isAxiosError=function(e){return vy.isObject(e)&&!0===e.isAxiosError},Rw.mergeConfig=Tw,Rw.AxiosHeaders=sw,Rw.formToJSON=e=>Hv(vy.isHTMLForm(e)?new FormData(e):e),Rw.HttpStatusCode=Ow,Rw.default=Rw;var Nw=Rw;const{Axios:Dw,AxiosError:Pw,CanceledError:Fw,isCancel:Uw,CancelToken:Bw,VERSION:Vw,all:$w,Cancel:zw,isAxiosError:jw,spread:qw,toFormData:Hw,AxiosHeaders:Gw,HttpStatusCode:Ww,formToJSON:Kw,mergeConfig:Xw}=Nw,Yw=(document.querySelector(".scrollbar"),document.querySelector(".aside-list"));Yw.addEventListener("wheel",(function(e){e.preventDefault();var t=e.deltaY||e.detail||e.wheelDelta;Yw.scrollTop+=t})),async function(){await Nw.get("https://books-backend.p.goit.global/books/category-list").then((e=>{console.log(e.data);let t=1;Yw.insertAdjacentHTML("afterbegin",`<li class="category-aside-list"><button type="button" id="${t}" class="aside-list-button selected-category">All categories</button></li>`);for(let n=0;n<e.data.length;n++)t+=1,Yw.insertAdjacentHTML("beforeend",`<li class="category-aside-list"><button type="button" id="btnAsideListId${t}" class="aside-list-button">${e.data[n].list_name}</button></li>`);!function(){const e=document.querySelectorAll(".aside-list-button");e.forEach((t=>{t.addEventListener("click",(function(){e.forEach((e=>{e.classList.remove("selected-category")})),Qw=this.textContent,this.classList.add("selected-category"),console.log(Qw)}))}))}()}))}();let Qw="All categories";document.querySelector("export-all");async function Jw(){try{const e=(await Nw.get("https://books-backend.p.goit.global/books/top-books")).data,t=document.querySelector(".bookShell");return e.forEach((n=>{const r=function(e){const{list_name:t,books:n}=e,r=document.createElement("div");r.className="book",r.classList.add("card");const s=document.createElement("div");s.className="book__body";const i=document.createElement("h2");i.textContent=t,i.className="book__category",s.appendChild(i);const o=document.createElement("ul");o.className="book__list",Array.isArray(n)&&n.slice(0,5).forEach((e=>{const t=document.createElement("li");t.className="book__item",t.addEventListener("click",(()=>{console.log(`Book ${e.title} clicked`)}));const n=document.createElement("div");n.classList.add("book-image-container");const r=document.createElement("img");r.src=e.book_image,r.alt=e.title,r.loading="lazy",r.className="book__img",r.classList.add("js-gallery-image"),r.setAttribute("data-id",e._id),n.appendChild(r);const s=document.createElement("div");s.classList.add("quick-view"),s.textContent="QUICK VIEW",s.setAttribute("data-id",e._id),n.appendChild(s),t.appendChild(n);const i=document.createElement("p");i.textContent=e.title,i.className="book__title",e.title.length>15?i.textContent=e.title.substring(0,15)+"...":i.textContent=e.title,t.appendChild(i);const a=document.createElement("p");a.textContent=`${e.author}`,a.className="book__author",t.appendChild(a),o.appendChild(t)}));s.appendChild(o),r.appendChild(s);const a=document.createElement("button");return a.textContent="See more",a.addEventListener("click",(async()=>{const e=t;!function(){const e=document.querySelector(".bookShell");for(;e.firstChild;)e.removeChild(e.firstChild)}();try{await async function(e){const t=`https://books-backend.p.goit.global/books/category?category=${e}`;try{const n=(await Nw.get(t)).data,r=document.querySelector(".bookShell");if(r.classList.add("bookShell-category"),function(e){const t=document.querySelector(".bookShell__title"),n=e.split(" "),r=n.shift();t.innerHTML=`${r} <span class="bookShell__title_span">${n.join(" ")}</span>`}(e),n.forEach((e=>{const{_id:t,book_image:n,title:s,author:i}=e,o=function(e,t,n,r){const s=document.createElement("div");s.className="book",s.addEventListener("click",(()=>{console.log(`Book ${t} clicked, ID: ${r}`)}));const i=document.createElement("div");i.classList.add("book-image-container");const o=document.createElement("img");o.src=e,o.alt=t,o.loading="lazy",o.className="book__img",o.classList.add("js-gallery-image"),o.setAttribute("data-id",r),i.appendChild(o);const a=document.createElement("div");a.classList.add("quick-view"),a.textContent="QUICK VIEW",a.setAttribute("data-id",r),i.appendChild(a),s.appendChild(i);const l=document.createElement("p");l.textContent=t,l.className="book__title",t.length>15?l.textContent=t.substring(0,15)+"...":l.textContent=t;s.appendChild(l);const c=document.createElement("p");c.textContent=n,c.classList.add("book__author","author"),n.length>15?c.textContent=n.substring(0,15)+"...":c.textContent=n;return s.appendChild(c),s}(n,s,i,t);o&&r.appendChild(o)})),0===n.length){const e=document.createElement("div");e.textContent="No books found",e.style.textAlign="center",r.appendChild(e)}return n}catch(e){throw console.error(e),e}}(e)}catch(e){console.error(e)}Zw()})),a.className="book__button",r.appendChild(a),r}(n);if(r&&t.appendChild(r),0===e.length){const e=document.querySelector(".bookShell"),t=document.createElement("div");t.textContent="No books found",t.style.textAlign="center",e.appendChild(t)}})),e}catch(e){throw console.error(e),e}}function Zw(){const e=window.innerWidth,t=e<480?1:e<780?3:5;document.querySelectorAll(".book__body ul").forEach((e=>{const n=e.querySelectorAll("li");for(let e=0;e<n.length;e++)n[e].style.display=e<t?"block":"none"}))}window.addEventListener("resize",Zw),Zw(),document.addEventListener("DOMContentLoaded",(async()=>{const e=document.createElement("div");e.classList.add("bookShell"),document.body.appendChild(e),Zw();try{await Jw()}catch(e){console.error(e)}Zw()}));var eb;eb=new URL(i("kyEFX").resolve("jDPoR"),import.meta.url).toString();var tb;tb=new URL(i("kyEFX").resolve("6uEBG"),import.meta.url).toString();var nb;nb=new URL(i("kyEFX").resolve("k1r7D"),import.meta.url).toString();var rb;rb=new URL(i("kyEFX").resolve("fp3fh"),import.meta.url).toString();var sb;sb=new URL(i("kyEFX").resolve("gQHiG"),import.meta.url).toString();var ib;ib=new URL(i("kyEFX").resolve("6dHKE"),import.meta.url).toString();var ob;ob=new URL(i("kyEFX").resolve("4XQzn"),import.meta.url).toString();var ab;ab=new URL(i("kyEFX").resolve("6jpBN"),import.meta.url).toString();var lb;lb=new URL(i("kyEFX").resolve("5PSBZ"),import.meta.url).toString();var cb;cb=new URL(i("kyEFX").resolve("j8TBH"),import.meta.url).toString();var ub;ub=new URL(i("kyEFX").resolve("4QcYO"),import.meta.url).toString();var hb;hb=new URL(i("kyEFX").resolve("cuKVH"),import.meta.url).toString();var db;db=new URL(i("kyEFX").resolve("cPZ13"),import.meta.url).toString();var pb;pb=new URL(i("kyEFX").resolve("fQSFO"),import.meta.url).toString();var fb;fb=new URL(i("kyEFX").resolve("jYmqR"),import.meta.url).toString();var mb;mb=new URL(i("kyEFX").resolve("3xzbG"),import.meta.url).toString();var gb;gb=new URL(i("kyEFX").resolve("6T9rv"),import.meta.url).toString();var yb;yb=new URL(i("kyEFX").resolve("kSFhs"),import.meta.url).toString();const vb=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:n(eb),img2x:n(cb)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:n(tb),img2x:n(ub)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:n(nb),img2x:n(hb)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:n(rb),img2x:n(db)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:n(sb),img2x:n(pb)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:n(ib),img2x:n(fb)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:n(ob),img2x:n(mb)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:n(ab),img2x:n(gb)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:n(lb),img2x:n(yb)}];console.log(vb);const wb=document.querySelector(".support__list");vb.map(((e,t)=>{!function({title:e,url:t,img:n,img2x:r},s){const i=s+1;wb.insertAdjacentHTML("beforeend",`<li class="support__item slider__slide swiper-slide"><a href="${t}" class="support__link slider__link"><span class="support__number">${String(i).padStart(2,"0")}</span><picture>\n        <source\n          srcset="\n            ${n}    1x,\n            ${r} 2x"\n          type="image/png"\n        />\n        <img class="support__img" src="${n}" alt="${e}">\n      </picture></a></li>`)}(e,t)}));var bb={};if(bb=function(){function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(n,r){void 0===n&&(n={}),void 0===r&&(r={}),Object.keys(r).forEach((s=>{void 0===n[s]?n[s]=r[s]:e(r[s])&&e(n[s])&&Object.keys(r[s]).length>0&&t(n[s],r[s])}))}const n={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function r(){const e="undefined"!=typeof document?document:{};return t(e,n),e}const s={document:n,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function i(){const e="undefined"!=typeof window?window:{};return t(e,s),e}function o(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function a(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function l(){return Date.now()}function c(e){const t=i();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function u(e,t){void 0===t&&(t="x");const n=i();let r,s,o;const a=c(e);return n.WebKitCSSMatrix?(s=a.transform||a.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map((e=>e.replace(",","."))).join(", ")),o=new n.WebKitCSSMatrix("none"===s?"":s)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),"x"===t&&(s=n.WebKitCSSMatrix?o.m41:16===r.length?parseFloat(r[12]):parseFloat(r[4])),"y"===t&&(s=n.WebKitCSSMatrix?o.m42:16===r.length?parseFloat(r[13]):parseFloat(r[5])),s||0}function h(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function d(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function p(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(null!=r&&!d(r)){const n=Object.keys(Object(r)).filter((e=>t.indexOf(e)<0));for(let t=0,s=n.length;t<s;t+=1){const s=n[t],i=Object.getOwnPropertyDescriptor(r,s);void 0!==i&&i.enumerable&&(h(e[s])&&h(r[s])?r[s].__swiper__?e[s]=r[s]:p(e[s],r[s]):!h(e[s])&&h(r[s])?(e[s]={},r[s].__swiper__?e[s]=r[s]:p(e[s],r[s])):e[s]=r[s])}}}return e}function f(e,t,n){e.style.setProperty(t,n)}function m(e){let{swiper:t,targetPosition:n,side:r}=e;const s=i(),o=-t.translate;let a,l=null;const c=t.params.speed;t.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(t.cssModeFrameID);const u=n>o?"next":"prev",h=(e,t)=>"next"===u&&e>=t||"prev"===u&&e<=t,d=()=>{a=(new Date).getTime(),null===l&&(l=a);const e=Math.max(Math.min((a-l)/c,1),0),i=.5-Math.cos(e*Math.PI)/2;let u=o+i*(n-o);if(h(u,n)&&(u=n),t.wrapperEl.scrollTo({[r]:u}),h(u,n))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:u})})),void s.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=s.requestAnimationFrame(d)};d()}function g(e){return e.querySelector(".swiper-slide-transform")||e.shadowEl&&e.shadowEl.querySelector(".swiper-slide-transform")||e}function y(e,t){return void 0===t&&(t=""),[...e.children].filter((e=>e.matches(t)))}function v(e,t){void 0===t&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function w(e){const t=i(),n=r(),s=e.getBoundingClientRect(),o=n.body,a=e.clientTop||o.clientTop||0,l=e.clientLeft||o.clientLeft||0,c=e===t?t.scrollY:e.scrollTop,u=e===t?t.scrollX:e.scrollLeft;return{top:s.top+c-a,left:s.left+u-l}}function b(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function E(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function T(e,t){return i().getComputedStyle(e,null).getPropertyValue(t)}function S(e){let t,n=e;if(n){for(t=0;null!==(n=n.previousSibling);)1===n.nodeType&&(t+=1);return t}}function I(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function C(e,t){function n(r){r.target===e&&(t.call(e,r),e.removeEventListener("transitionend",n))}t&&e.addEventListener("transitionend",n)}function _(e,t,n){const r=i();return n?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let A,k,x;function M(){const e=i(),t=r();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function L(){return A||(A=M()),A}function O(e){let{userAgent:t}=void 0===e?{}:e;const n=L(),r=i(),s=r.navigator.platform,o=t||r.navigator.userAgent,a={ios:!1,android:!1},l=r.screen.width,c=r.screen.height,u=o.match(/(Android);?[\s\/]+([\d.]+)?/);let h=o.match(/(iPad).*OS\s([\d_]+)/);const d=o.match(/(iPod)(.*OS\s([\d_]+))?/),p=!h&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f="Win32"===s;let m="MacIntel"===s;const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!h&&m&&n.touch&&g.indexOf(`${l}x${c}`)>=0&&(h=o.match(/(Version)\/([\d.]+)/),h||(h=[0,1,"13_0_0"]),m=!1),u&&!f&&(a.os="android",a.android=!0),(h||p||d)&&(a.os="ios",a.ios=!0),a}function R(e){return void 0===e&&(e={}),k||(k=O(e)),k}function N(){const e=i();let t=!1;function n(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(n()){const n=String(e.navigator.userAgent);if(n.includes("Version/")){const[e,r]=n.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&r<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function D(){return x||(x=N()),x}function P(e){let{swiper:t,on:n,emit:r}=e;const s=i();let o=null,a=null;const l=()=>{t&&!t.destroyed&&t.initialized&&(r("beforeResize"),r("resize"))},c=()=>{t&&!t.destroyed&&t.initialized&&(o=new ResizeObserver((e=>{a=s.requestAnimationFrame((()=>{const{width:n,height:r}=t;let s=n,i=r;e.forEach((e=>{let{contentBoxSize:n,contentRect:r,target:o}=e;o&&o!==t.el||(s=r?r.width:(n[0]||n).inlineSize,i=r?r.height:(n[0]||n).blockSize)})),s===n&&i===r||l()}))})),o.observe(t.el))},u=()=>{a&&s.cancelAnimationFrame(a),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},h=()=>{t&&!t.destroyed&&t.initialized&&r("orientationchange")};n("init",(()=>{t.params.resizeObserver&&void 0!==s.ResizeObserver?c():(s.addEventListener("resize",l),s.addEventListener("orientationchange",h))})),n("destroy",(()=>{u(),s.removeEventListener("resize",l),s.removeEventListener("orientationchange",h)}))}function F(e){let{swiper:t,extendParams:n,on:r,emit:s}=e;const o=[],a=i(),l=function(e,n){void 0===n&&(n={});const r=new(a.MutationObserver||a.WebkitMutationObserver)((e=>{if(t.__preventObserver__)return;if(1===e.length)return void s("observerUpdate",e[0]);const n=function(){s("observerUpdate",e[0])};a.requestAnimationFrame?a.requestAnimationFrame(n):a.setTimeout(n,0)}));r.observe(e,{attributes:void 0===n.attributes||n.attributes,childList:void 0===n.childList||n.childList,characterData:void 0===n.characterData||n.characterData}),o.push(r)},c=()=>{if(t.params.observer){if(t.params.observeParents){const e=I(t.el);for(let t=0;t<e.length;t+=1)l(e[t])}l(t.el,{childList:t.params.observeSlideChildren}),l(t.wrapperEl,{attributes:!1})}},u=()=>{o.forEach((e=>{e.disconnect()})),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",c),r("destroy",u)}var U={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!=typeof t)return r;const s=n?"unshift":"push";return e.split(" ").forEach((e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][s](t)})),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!=typeof t)return r;function s(){r.off(e,s),s.__emitterProxy&&delete s.__emitterProxy;for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];t.apply(r,i)}return s.__emitterProxy=t,r.on(e,s,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((r,s)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(s,1)}))})),n):n},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,n,r;for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return"string"==typeof i[0]||Array.isArray(i[0])?(t=i[0],n=i.slice(1,i.length),r=e):(t=i[0].events,n=i[0].data,r=i[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(r,[t,...n])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(r,n)}))})),e}};function B(){const e=this;let t,n;const r=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:r.clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:r.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(T(r,"padding-left")||0,10)-parseInt(T(r,"padding-right")||0,10),n=n-parseInt(T(r,"padding-top")||0,10)-parseInt(T(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function V(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const r=e.params,{wrapperEl:s,slidesEl:i,size:o,rtlTranslate:a,wrongRTL:l}=e,c=e.virtual&&r.virtual.enabled,u=c?e.virtual.slides.length:e.slides.length,h=y(i,`.${e.params.slideClass}, swiper-slide`),d=c?e.virtual.slides.length:h.length;let p=[];const m=[],g=[];let v=r.slidesOffsetBefore;"function"==typeof v&&(v=r.slidesOffsetBefore.call(e));let w=r.slidesOffsetAfter;"function"==typeof w&&(w=r.slidesOffsetAfter.call(e));const b=e.snapGrid.length,E=e.slidesGrid.length;let S=r.spaceBetween,I=-v,C=0,A=0;if(void 0===o)return;"string"==typeof S&&S.indexOf("%")>=0?S=parseFloat(S.replace("%",""))/100*o:"string"==typeof S&&(S=parseFloat(S)),e.virtualSize=-S,h.forEach((e=>{a?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),r.centeredSlides&&r.cssMode&&(f(s,"--swiper-centered-offset-before",""),f(s,"--swiper-centered-offset-after",""));const k=r.grid&&r.grid.rows>1&&e.grid;let x;k&&e.grid.initSlides(d);const M="auto"===r.slidesPerView&&r.breakpoints&&Object.keys(r.breakpoints).filter((e=>void 0!==r.breakpoints[e].slidesPerView)).length>0;for(let s=0;s<d;s+=1){let i;if(x=0,h[s]&&(i=h[s]),k&&e.grid.updateSlide(s,i,d,t),!h[s]||"none"!==T(i,"display")){if("auto"===r.slidesPerView){M&&(h[s].style[t("width")]="");const o=getComputedStyle(i),a=i.style.transform,l=i.style.webkitTransform;if(a&&(i.style.transform="none"),l&&(i.style.webkitTransform="none"),r.roundLengths)x=e.isHorizontal()?_(i,"width",!0):_(i,"height",!0);else{const e=n(o,"width"),t=n(o,"padding-left"),r=n(o,"padding-right"),s=n(o,"margin-left"),a=n(o,"margin-right"),l=o.getPropertyValue("box-sizing");if(l&&"border-box"===l)x=e+s+a;else{const{clientWidth:n,offsetWidth:o}=i;x=e+t+r+s+a+(o-n)}}a&&(i.style.transform=a),l&&(i.style.webkitTransform=l),r.roundLengths&&(x=Math.floor(x))}else x=(o-(r.slidesPerView-1)*S)/r.slidesPerView,r.roundLengths&&(x=Math.floor(x)),h[s]&&(h[s].style[t("width")]=`${x}px`);h[s]&&(h[s].swiperSlideSize=x),g.push(x),r.centeredSlides?(I=I+x/2+C/2+S,0===C&&0!==s&&(I=I-o/2-S),0===s&&(I=I-o/2-S),Math.abs(I)<.001&&(I=0),r.roundLengths&&(I=Math.floor(I)),A%r.slidesPerGroup==0&&p.push(I),m.push(I)):(r.roundLengths&&(I=Math.floor(I)),(A-Math.min(e.params.slidesPerGroupSkip,A))%e.params.slidesPerGroup==0&&p.push(I),m.push(I),I=I+x+S),e.virtualSize+=x+S,C=x,A+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+w,a&&l&&("slide"===r.effect||"coverflow"===r.effect)&&(s.style.width=`${e.virtualSize+S}px`),r.setWrapperSize&&(s.style[t("width")]=`${e.virtualSize+S}px`),k&&e.grid.updateWrapperSize(x,p,t),!r.centeredSlides){const t=[];for(let n=0;n<p.length;n+=1){let s=p[n];r.roundLengths&&(s=Math.floor(s)),p[n]<=e.virtualSize-o&&t.push(s)}p=t,Math.floor(e.virtualSize-o)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-o)}if(c&&r.loop){const t=g[0]+S;if(r.slidesPerGroup>1){const n=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/r.slidesPerGroup),s=t*r.slidesPerGroup;for(let e=0;e<n;e+=1)p.push(p[p.length-1]+s)}for(let n=0;n<e.virtual.slidesBefore+e.virtual.slidesAfter;n+=1)1===r.slidesPerGroup&&p.push(p[p.length-1]+t),m.push(m[m.length-1]+t),e.virtualSize+=t}if(0===p.length&&(p=[0]),0!==S){const n=e.isHorizontal()&&a?"marginLeft":t("marginRight");h.filter(((e,t)=>!(r.cssMode&&!r.loop)||t!==h.length-1)).forEach((e=>{e.style[n]=`${S}px`}))}if(r.centeredSlides&&r.centeredSlidesBounds){let e=0;g.forEach((t=>{e+=t+(S||0)})),e-=S;const t=e-o;p=p.map((e=>e<0?-v:e>t?t+w:e))}if(r.centerInsufficientSlides){let e=0;if(g.forEach((t=>{e+=t+(S||0)})),e-=S,e<o){const t=(o-e)/2;p.forEach(((e,n)=>{p[n]=e-t})),m.forEach(((e,n)=>{m[n]=e+t}))}}if(Object.assign(e,{slides:h,snapGrid:p,slidesGrid:m,slidesSizesGrid:g}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){f(s,"--swiper-centered-offset-before",-p[0]+"px"),f(s,"--swiper-centered-offset-after",e.size/2-g[g.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(d!==u&&e.emit("slidesLengthChange"),p.length!==b&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),m.length!==E&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!(c||r.cssMode||"slide"!==r.effect&&"fade"!==r.effect)){const t=`${r.containerModifierClass}backface-hidden`,n=e.el.classList.contains(t);d<=r.maxBackfaceHiddenSlides?n||e.el.classList.add(t):n&&e.el.classList.remove(t)}}function $(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let s,i=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>r?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{n.push(e)}));else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const e=t.activeIndex+s;if(e>t.slides.length&&!r)break;n.push(o(e))}else n.push(o(t.activeIndex));for(s=0;s<n.length;s+=1)if(void 0!==n[s]){const e=n[s].offsetHeight;i=e>i?e:i}(i||0===i)&&(t.wrapperEl.style.height=`${i}px`)}function z(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}function j(e){void 0===e&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:s,snapGrid:i}=t;if(0===r.length)return;void 0===r[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;s&&(o=e),r.forEach((e=>{e.classList.remove(n.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;"string"==typeof a&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:"string"==typeof a&&(a=parseFloat(a));for(let e=0;e<r.length;e+=1){const l=r[e];let c=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const u=(o+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),h=(o-i[0]+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),d=-(o-c),p=d+t.slidesSizesGrid[e];(d>=0&&d<t.size-1||p>1&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),r[e].classList.add(n.slideVisibleClass)),l.progress=s?-u:u,l.originalProgress=s?-h:h}}function q(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:s,isBeginning:i,isEnd:o,progressLoop:a}=t;const l=i,c=o;if(0===r)s=0,i=!0,o=!0;else{s=(e-t.minTranslate())/r;const n=Math.abs(e-t.minTranslate())<1,a=Math.abs(e-t.maxTranslate())<1;i=n||s<=0,o=a||s>=1,n&&(s=0),a&&(s=1)}if(n.loop){const n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),s=t.slidesGrid[n],i=t.slidesGrid[r],o=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);a=l>=s?(l-s)/o:(l+o-i)/o,a>1&&(a-=1)}Object.assign(t,{progress:s,progressLoop:a,isBeginning:i,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),i&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!i||c&&!o)&&t.emit("fromEdge"),t.emit("progress",s)}function H(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:s}=e,i=e.virtual&&n.virtual.enabled,o=e=>y(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let a;if(t.forEach((e=>{e.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)})),i)if(n.loop){let t=s-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),a=o(`[data-swiper-slide-index="${t}"]`)}else a=o(`[data-swiper-slide-index="${s}"]`);else a=t[s];if(a){a.classList.add(n.slideActiveClass);let e=E(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!e&&(e=t[0]),e&&e.classList.add(n.slideNextClass);let r=b(a,`.${n.slideClass}, swiper-slide`)[0];n.loop,r&&r.classList.add(n.slidePrevClass)}e.emitSlidesClasses()}const G=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){const t=r.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}},W=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},K=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),s=e.activeIndex,i=s+r-1;if(e.params.rewind)for(let r=s-t;r<=i+t;r+=1){const t=(r%n+n)%n;t!==s&&t>i&&W(e,t)}else for(let r=Math.max(i-t,0);r<=Math.min(i+t,n-1);r+=1)r!==s&&r>i&&W(e,r)};function X(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let s;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?r>=t[e]&&r<t[e+1]-(t[e+1]-t[e])/2?s=e:r>=t[e]&&r<t[e+1]&&(s=e+1):r>=t[e]&&(s=e);return n.normalizeSlideIndex&&(s<0||void 0===s)&&(s=0),s}function Y(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:s,activeIndex:i,realIndex:o,snapIndex:a}=t;let l,c=e;const u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(void 0===c&&(c=X(t)),r.indexOf(n)>=0)l=r.indexOf(n);else{const e=Math.min(s.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/s.slidesPerGroup)}if(l>=r.length&&(l=r.length-1),c===i)return l!==a&&(t.snapIndex=l,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=u(c)));let h;h=t.virtual&&s.virtual.enabled&&s.loop?u(c):t.slides[c]?parseInt(t.slides[c].getAttribute("data-swiper-slide-index")||c,10):c,Object.assign(t,{previousSnapIndex:a,snapIndex:l,previousRealIndex:o,realIndex:h,previousIndex:i,activeIndex:c}),t.initialized&&K(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==h&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function Q(e){const t=this,n=t.params,r=e.closest(`.${n.slideClass}, swiper-slide`);let s,i=!1;if(r)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===r){i=!0,s=e;break}if(!r||!i)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=s,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}function J(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:s,wrapperEl:i}=t;if(n.virtualTranslate)return r?-s:s;if(n.cssMode)return s;let o=u(i,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function Z(e,t){const n=this,{rtlTranslate:r,params:s,wrapperEl:i,progress:o}=n;let a=0,l=0;const c=0;let u;n.isHorizontal()?a=r?-e:e:l=e,s.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,s.cssMode?i[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:s.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),i.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);const h=n.maxTranslate()-n.minTranslate();u=0===h?0:(e-n.minTranslate())/h,u!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function ee(){return-this.snapGrid[0]}function te(){return-this.snapGrid[this.snapGrid.length-1]}function ne(e,t,n,r,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),void 0===r&&(r=!0);const i=this,{params:o,wrapperEl:a}=i;if(i.animating&&o.preventInteractionOnTransition)return!1;const l=i.minTranslate(),c=i.maxTranslate();let u;if(u=r&&e>l?l:r&&e<c?c:e,i.updateProgress(u),o.cssMode){const e=i.isHorizontal();if(0===t)a[e?"scrollLeft":"scrollTop"]=-u;else{if(!i.support.smoothScroll)return m({swiper:i,targetPosition:-u,side:e?"left":"top"}),!0;a.scrollTo({[e?"left":"top"]:-u,behavior:"smooth"})}return!0}return 0===t?(i.setTransition(0),i.setTranslate(u),n&&(i.emit("beforeTransitionStart",t,s),i.emit("transitionEnd"))):(i.setTransition(t),i.setTranslate(u),n&&(i.emit("beforeTransitionStart",t,s),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(e){i&&!i.destroyed&&e.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,n&&i.emit("transitionEnd"))}),i.wrapperEl.addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd))),!0}function re(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)}function se(e){let{swiper:t,runCallbacks:n,direction:r,step:s}=e;const{activeIndex:i,previousIndex:o}=t;let a=r;if(a||(a=i>o?"next":i<o?"prev":"reset"),t.emit(`transition${s}`),n&&i!==o){if("reset"===a)return void t.emit(`slideResetTransition${s}`);t.emit(`slideChangeTransition${s}`),"next"===a?t.emit(`slideNextTransition${s}`):t.emit(`slidePrevTransition${s}`)}}function ie(e,t){void 0===e&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),se({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function oe(e,t){void 0===e&&(e=!0);const n=this,{params:r}=n;n.animating=!1,r.cssMode||(n.setTransition(0),se({swiper:n,runCallbacks:e,direction:t,step:"End"}))}function ae(e,t,n,r,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),"string"==typeof e&&(e=parseInt(e,10));const i=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:h,rtlTranslate:d,wrapperEl:p,enabled:f}=i;if(i.animating&&a.preventInteractionOnTransition||!f&&!r&&!s)return!1;const g=Math.min(i.params.slidesPerGroupSkip,o);let y=g+Math.floor((o-g)/i.params.slidesPerGroup);y>=l.length&&(y=l.length-1);const v=-l[y];if(a.normalizeSlideIndex)for(let e=0;e<c.length;e+=1){const t=-Math.floor(100*v),n=Math.floor(100*c[e]),r=Math.floor(100*c[e+1]);void 0!==c[e+1]?t>=n&&t<r-(r-n)/2?o=e:t>=n&&t<r&&(o=e+1):t>=n&&(o=e)}if(i.initialized&&o!==h){if(!i.allowSlideNext&&v<i.translate&&v<i.minTranslate())return!1;if(!i.allowSlidePrev&&v>i.translate&&v>i.maxTranslate()&&(h||0)!==o)return!1}let w;if(o!==(u||0)&&n&&i.emit("beforeSlideChangeStart"),i.updateProgress(v),w=o>h?"next":o<h?"prev":"reset",d&&-v===i.translate||!d&&v===i.translate)return i.updateActiveIndex(o),a.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),"slide"!==a.effect&&i.setTranslate(v),"reset"!==w&&(i.transitionStart(n,w),i.transitionEnd(n,w)),!1;if(a.cssMode){const e=i.isHorizontal(),n=d?v:-v;if(0===t){const t=i.virtual&&i.params.virtual.enabled;t&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),t&&!i._cssModeVirtualInitialSet&&i.params.initialSlide>0?(i._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{p[e?"scrollLeft":"scrollTop"]=n}))):p[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{i.wrapperEl.style.scrollSnapType="",i._immediateVirtual=!1}))}else{if(!i.support.smoothScroll)return m({swiper:i,targetPosition:n,side:e?"left":"top"}),!0;p.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return i.setTransition(t),i.setTranslate(v),i.updateActiveIndex(o),i.updateSlidesClasses(),i.emit("beforeTransitionStart",t,r),i.transitionStart(n,w),0===t?i.transitionEnd(n,w):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(e){i&&!i.destroyed&&e.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(n,w))}),i.wrapperEl.addEventListener("transitionend",i.onSlideToWrapperTransitionEnd)),!0}function le(e,t,n,r){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),"string"==typeof e&&(e=parseInt(e,10));const s=this;let i=e;return s.params.loop&&(s.virtual&&s.params.virtual.enabled?i+=s.virtual.slidesBefore:i=s.getSlideIndexByData(i)),s.slideTo(i,t,n,r)}function ce(e,t,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const r=this,{enabled:s,params:i,animating:o}=r;if(!s)return r;let a=i.slidesPerGroup;"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<i.slidesPerGroupSkip?1:a,c=r.virtual&&i.virtual.enabled;if(i.loop){if(o&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft}return i.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function ue(e,t,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const r=this,{params:s,snapGrid:i,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=r;if(!l)return r;const u=r.virtual&&s.virtual.enabled;if(s.loop){if(c&&!u&&s.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}function h(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const d=h(a?r.translate:-r.translate),p=i.map((e=>h(e)));let f=i[p.indexOf(d)-1];if(void 0===f&&s.cssMode){let e;i.forEach(((t,n)=>{d>=t&&(e=n)})),void 0!==e&&(f=i[e>0?e-1:e])}let m=0;if(void 0!==f&&(m=o.indexOf(f),m<0&&(m=r.activeIndex-1),"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(m=m-r.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),s.rewind&&r.isBeginning){const s=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(s,e,t,n)}return r.slideTo(m,e,t,n)}function he(e,t,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const r=this;return r.slideTo(r.activeIndex,e,t,n)}function de(e,t,n,r){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===r&&(r=.5);const s=this;let i=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,i),a=o+Math.floor((i-o)/s.params.slidesPerGroup),l=s.rtlTranslate?s.translate:-s.translate;if(l>=s.snapGrid[a]){const e=s.snapGrid[a];l-e>(s.snapGrid[a+1]-e)*r&&(i+=s.params.slidesPerGroup)}else{const e=s.snapGrid[a-1];l-e<=(s.snapGrid[a]-e)*r&&(i-=s.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,s.slidesGrid.length-1),s.slideTo(i,e,t,n)}function pe(){const e=this,{params:t,slidesEl:n}=e,r="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let s,i=e.clickedIndex;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;s=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(y(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),a((()=>{e.slideTo(i)}))):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(y(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),a((()=>{e.slideTo(i)}))):e.slideTo(i)}else e.slideTo(i)}function fe(e){const t=this,{params:n,slidesEl:r}=t;!n.loop||t.virtual&&t.params.virtual.enabled||(y(r,`.${n.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"}))}function me(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:s,activeSlideIndex:i,byController:o,byMousewheel:a}=void 0===e?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:h,slidesEl:d,params:p}=l;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&p.virtual.enabled)return n&&(p.centeredSlides||0!==l.snapIndex?p.centeredSlides&&l.snapIndex<p.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0):l.slideTo(l.virtual.slides.length,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=h,void l.emit("loopFix");const f="auto"===p.slidesPerView?l.slidesPerViewDynamic():Math.ceil(parseFloat(p.slidesPerView,10));let m=p.loopedSlides||f;m%p.slidesPerGroup!=0&&(m+=p.slidesPerGroup-m%p.slidesPerGroup),l.loopedSlides=m;const g=[],y=[];let v=l.activeIndex;void 0===i?i=l.getSlideIndex(l.slides.filter((e=>e.classList.contains(p.slideActiveClass)))[0]):v=i;const w="next"===r||!r,b="prev"===r||!r;let E=0,T=0;if(i<m){E=Math.max(m-i,p.slidesPerGroup);for(let e=0;e<m-i;e+=1){const t=e-Math.floor(e/c.length)*c.length;g.push(c.length-t-1)}}else if(i>l.slides.length-2*m){T=Math.max(i-(l.slides.length-2*m),p.slidesPerGroup);for(let e=0;e<T;e+=1){const t=e-Math.floor(e/c.length)*c.length;y.push(t)}}if(b&&g.forEach((e=>{l.slides[e].swiperLoopMoveDOM=!0,d.prepend(l.slides[e]),l.slides[e].swiperLoopMoveDOM=!1})),w&&y.forEach((e=>{l.slides[e].swiperLoopMoveDOM=!0,d.append(l.slides[e]),l.slides[e].swiperLoopMoveDOM=!1})),l.recalcSlides(),"auto"===p.slidesPerView&&l.updateSlides(),p.watchSlidesProgress&&l.updateSlidesOffset(),n)if(g.length>0&&b)if(void 0===t){const e=l.slidesGrid[v],t=l.slidesGrid[v+E]-e;a?l.setTranslate(l.translate-t):(l.slideTo(v+E,0,!1,!0),s&&(l.touches[l.isHorizontal()?"startX":"startY"]+=t))}else s&&l.slideToLoop(t,0,!1,!0);else if(y.length>0&&w)if(void 0===t){const e=l.slidesGrid[v],t=l.slidesGrid[v-T]-e;a?l.setTranslate(l.translate-t):(l.slideTo(v-T,0,!1,!0),s&&(l.touches[l.isHorizontal()?"startX":"startY"]+=t))}else l.slideToLoop(t,0,!1,!0);if(l.allowSlidePrev=u,l.allowSlideNext=h,l.controller&&l.controller.control&&!o){const e={slideRealIndex:t,slideTo:!1,direction:r,setTranslate:s,activeSlideIndex:i,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach((t=>{!t.destroyed&&t.params.loop&&t.loopFix(e)})):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix(e)}l.emit("loopFix")}function ge(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;r[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),r.forEach((e=>{n.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}function ye(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))}function ve(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}function we(e,t){function n(t){if(!t||t===r()||t===i())return null;t.assignedSlot&&(t=t.assignedSlot);const s=t.closest(e);return s||t.getRootNode?s||n(t.getRootNode().host):null}return void 0===t&&(t=this),n(t)}function be(e){const t=this,n=r(),s=i(),o=t.touchEventsData;o.evCache.push(e);const{params:a,touches:c,enabled:u}=t;if(!u)return;if(!a.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let h=e;h.originalEvent&&(h=h.originalEvent);let d=h.target;if("wrapper"===a.touchEventsTarget&&!t.wrapperEl.contains(d))return;if("which"in h&&3===h.which)return;if("button"in h&&h.button>0)return;if(o.isTouched&&o.isMoved)return;const p=!!a.noSwipingClass&&""!==a.noSwipingClass,f=e.composedPath?e.composedPath():e.path;p&&h.target&&h.target.shadowRoot&&f&&(d=f[0]);const m=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,g=!(!h.target||!h.target.shadowRoot);if(a.noSwiping&&(g?we(m,d):d.closest(m)))return void(t.allowClick=!0);if(a.swipeHandler&&!d.closest(a.swipeHandler))return;c.currentX=h.pageX,c.currentY=h.pageY;const y=c.currentX,v=c.currentY,w=a.edgeSwipeDetection||a.iOSEdgeSwipeDetection,b=a.edgeSwipeThreshold||a.iOSEdgeSwipeThreshold;if(w&&(y<=b||y>=s.innerWidth-b)){if("prevent"!==w)return;e.preventDefault()}Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),c.startX=y,c.startY=v,o.touchStartTime=l(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(o.allowThresholdMove=!1);let E=!0;d.matches(o.focusableElements)&&(E=!1,"SELECT"===d.nodeName&&(o.isTouched=!1)),n.activeElement&&n.activeElement.matches(o.focusableElements)&&n.activeElement!==d&&n.activeElement.blur();const T=E&&t.allowTouchMove&&a.touchStartPreventDefault;!a.touchStartForcePreventDefault&&!T||d.isContentEditable||h.preventDefault(),t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",h)}function Ee(e){const t=r(),n=this,s=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:c}=n;if(!c)return;if(!i.simulateTouch&&"mouse"===e.pointerType)return;let u=e;if(u.originalEvent&&(u=u.originalEvent),!s.isTouched)return void(s.startMoving&&s.isScrolling&&n.emit("touchMoveOpposite",u));const h=s.evCache.findIndex((e=>e.pointerId===u.pointerId));h>=0&&(s.evCache[h]=u);const d=s.evCache.length>1?s.evCache[0]:u,p=d.pageX,f=d.pageY;if(u.preventedByNestedSwiper)return o.startX=p,void(o.startY=f);if(!n.allowTouchMove)return u.target.matches(s.focusableElements)||(n.allowClick=!1),void(s.isTouched&&(Object.assign(o,{startX:p,startY:f,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:p,currentY:f}),s.touchStartTime=l()));if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(f<o.startY&&n.translate<=n.maxTranslate()||f>o.startY&&n.translate>=n.minTranslate())return s.isTouched=!1,void(s.isMoved=!1)}else if(p<o.startX&&n.translate<=n.maxTranslate()||p>o.startX&&n.translate>=n.minTranslate())return;if(t.activeElement&&u.target===t.activeElement&&u.target.matches(s.focusableElements))return s.isMoved=!0,void(n.allowClick=!1);if(s.allowTouchCallbacks&&n.emit("touchMove",u),u.targetTouches&&u.targetTouches.length>1)return;o.currentX=p,o.currentY=f;const m=o.currentX-o.startX,g=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(m**2+g**2)<n.params.threshold)return;if(void 0===s.isScrolling){let e;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?s.isScrolling=!1:m*m+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(m))/Math.PI,s.isScrolling=n.isHorizontal()?e>i.touchAngle:90-e>i.touchAngle)}if(s.isScrolling&&n.emit("touchMoveOpposite",u),void 0===s.startMoving&&(o.currentX===o.startX&&o.currentY===o.startY||(s.startMoving=!0)),s.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&s.evCache.length>1)return void(s.isTouched=!1);if(!s.startMoving)return;n.allowClick=!1,!i.cssMode&&u.cancelable&&u.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&u.stopPropagation();let y=n.isHorizontal()?m:g,v=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(y=Math.abs(y)*(a?1:-1),v=Math.abs(v)*(a?1:-1)),o.diff=y,y*=i.touchRatio,a&&(y=-y,v=-v);const w=n.touchesDirection;n.swipeDirection=y>0?"prev":"next",n.touchesDirection=v>0?"prev":"next";const b=n.params.loop&&!i.cssMode;if(!s.isMoved){if(b&&n.loopFix({direction:n.swipeDirection}),s.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(e)}s.allowMomentumBounce=!1,!i.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",u)}let E;s.isMoved&&w!==n.touchesDirection&&b&&Math.abs(y)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),E=!0),n.emit("sliderMove",u),s.isMoved=!0,s.currentTranslate=y+s.startTranslate;let T=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),y>0?(b&&!E&&s.currentTranslate>(i.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>n.minTranslate()&&(T=!1,i.resistance&&(s.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+s.startTranslate+y)**S))):y<0&&(b&&!E&&s.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===i.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),s.currentTranslate<n.maxTranslate()&&(T=!1,i.resistance&&(s.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-s.startTranslate-y)**S))),T&&(u.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),n.allowSlidePrev||n.allowSlideNext||(s.currentTranslate=s.startTranslate),i.threshold>0){if(!(Math.abs(y)>i.threshold||s.allowThresholdMove))return void(s.currentTranslate=s.startTranslate);if(!s.allowThresholdMove)return s.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,s.currentTranslate=s.startTranslate,void(o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY)}i.followFinger&&!i.cssMode&&((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(s.currentTranslate),n.setTranslate(s.currentTranslate))}function Te(e){const t=this,n=t.touchEventsData,r=n.evCache.findIndex((t=>t.pointerId===e.pointerId));if(r>=0&&n.evCache.splice(r,1),["pointercancel","pointerout","pointerleave"].includes(e.type)&&("pointercancel"!==e.type||!t.browser.isSafari&&!t.browser.isWebView))return;const{params:s,touches:i,rtlTranslate:o,slidesGrid:c,enabled:u}=t;if(!u)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;let h=e;if(h.originalEvent&&(h=h.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",h),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);s.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=l(),p=d-n.touchStartTime;if(t.allowClick){const e=h.path||h.composedPath&&h.composedPath();t.updateClickedSlide(e&&e[0]||h.target),t.emit("tap click",h),p<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",h)}if(n.lastClickTime=l(),a((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===i.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let f;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,f=s.followFinger?o?t.translate:-t.translate:-n.currentTranslate,s.cssMode)return;if(t.params.freeMode&&s.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:f});let m=0,g=t.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<s.slidesPerGroupSkip?1:s.slidesPerGroup){const t=e<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==c[e+t]?f>=c[e]&&f<c[e+t]&&(m=e,g=c[e+t]-c[e]):f>=c[e]&&(m=e,g=c[c.length-1]-c[c.length-2])}let y=null,v=null;s.rewind&&(t.isBeginning?v=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(y=0));const w=(f-c[m])/g,b=m<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(p>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(w>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?y:m+b):t.slideTo(m)),"prev"===t.swipeDirection&&(w>1-s.longSwipesRatio?t.slideTo(m+b):null!==v&&w<0&&Math.abs(w)>s.longSwipesRatio?t.slideTo(v):t.slideTo(m))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);!t.navigation||h.target!==t.navigation.nextEl&&h.target!==t.navigation.prevEl?("next"===t.swipeDirection&&t.slideTo(null!==y?y:m+b),"prev"===t.swipeDirection&&t.slideTo(null!==v?v:m)):h.target===t.navigation.nextEl?t.slideTo(m+b):t.slideTo(m)}}function Se(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:s,snapGrid:i}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||a?e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=s,e.allowSlideNext=r,e.params.watchOverflow&&i!==e.snapGrid&&e.checkOverflow()}function Ie(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Ce(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;let s;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const i=e.maxTranslate()-e.minTranslate();s=0===i?0:(e.translate-e.minTranslate())/i,s!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function _e(e){const t=this;G(t,e.target),t.params.cssMode||"auto"!==t.params.slidesPerView&&!t.params.autoHeight||t.update()}let Ae=!1;function ke(){}const xe=(e,t)=>{const n=r(),{params:s,el:i,wrapperEl:o,device:a}=e,l=!!s.nested,c="on"===t?"addEventListener":"removeEventListener",u=t;i[c]("pointerdown",e.onTouchStart,{passive:!1}),n[c]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[c]("pointerup",e.onTouchEnd,{passive:!0}),n[c]("pointercancel",e.onTouchEnd,{passive:!0}),n[c]("pointerout",e.onTouchEnd,{passive:!0}),n[c]("pointerleave",e.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&i[c]("click",e.onClick,!0),s.cssMode&&o[c]("scroll",e.onScroll),s.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Se,!0):e[u]("observerUpdate",Se,!0),i[c]("load",e.onLoad,{capture:!0})};function Me(){const e=this,t=r(),{params:n}=e;e.onTouchStart=be.bind(e),e.onTouchMove=Ee.bind(e),e.onTouchEnd=Te.bind(e),n.cssMode&&(e.onScroll=Ce.bind(e)),e.onClick=Ie.bind(e),e.onLoad=_e.bind(e),Ae||(t.addEventListener("touchstart",ke),Ae=!0),xe(e,"on")}function Le(){xe(this,"off")}const Oe=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Re(){const e=this,{realIndex:t,initialized:n,params:r,el:s}=e,i=r.breakpoints;if(!i||i&&0===Object.keys(i).length)return;const o=e.getBreakpoint(i,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const a=(o in i?i[o]:void 0)||e.originalParams,l=Oe(e,r),c=Oe(e,a),u=r.enabled;l&&!c?(s.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!l&&c&&(s.classList.add(`${r.containerModifierClass}grid`),(a.grid.fill&&"column"===a.grid.fill||!a.grid.fill&&"column"===r.grid.fill)&&s.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const n=r[t]&&r[t].enabled,s=a[t]&&a[t].enabled;n&&!s&&e[t].disable(),!n&&s&&e[t].enable()}));const h=a.direction&&a.direction!==r.direction,d=r.loop&&(a.slidesPerView!==r.slidesPerView||h);h&&n&&e.changeDirection(),p(e.params,a);const f=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),u&&!f?e.disable():!u&&f&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",a),d&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",a)}function Ne(e,t,n){if(void 0===t&&(t="window"),!e||"container"===t&&!n)return;let r=!1;const s=i(),o="window"===t?s.innerHeight:n.clientHeight,a=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:o*t,point:e}}return{value:e,point:e}}));a.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<a.length;e+=1){const{point:i,value:o}=a[e];"window"===t?s.matchMedia(`(min-width: ${o}px)`).matches&&(r=i):o<=n.clientWidth&&(r=i)}return r||"max"}function De(e,t){const n=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((r=>{e[r]&&n.push(t+r)})):"string"==typeof e&&n.push(t+e)})),n}function Pe(){const e=this,{classNames:t,params:n,rtl:r,el:s,device:i}=e,o=De(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:i.android},{ios:i.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),s.classList.add(...t),e.emitContainerClasses()}function Fe(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}function Ue(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*r;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Be={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Ve(e,t){return function(n){void 0===n&&(n={});const r=Object.keys(n)[0],s=n[r];"object"==typeof s&&null!==s?(["navigation","pagination","scrollbar"].indexOf(r)>=0&&!0===e[r]&&(e[r]={auto:!0}),r in e&&"enabled"in s?(!0===e[r]&&(e[r]={enabled:!0}),"object"!=typeof e[r]||"enabled"in e[r]||(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),p(t,n)):p(t,n)):p(t,n)}}const $e={eventsEmitter:U,update:{updateSize:B,updateSlides:V,updateAutoHeight:$,updateSlidesOffset:z,updateSlidesProgress:j,updateProgress:q,updateSlidesClasses:H,updateActiveIndex:Y,updateClickedSlide:Q},translate:{getTranslate:J,setTranslate:Z,minTranslate:ee,maxTranslate:te,translateTo:ne},transition:{setTransition:re,transitionStart:ie,transitionEnd:oe},slide:{slideTo:ae,slideToLoop:le,slideNext:ce,slidePrev:ue,slideReset:he,slideToClosest:de,slideToClickedSlide:pe},loop:{loopCreate:fe,loopFix:me,loopDestroy:ge},grabCursor:{setGrabCursor:ye,unsetGrabCursor:ve},events:{attachEvents:Me,detachEvents:Le},breakpoints:{setBreakpoint:Re,getBreakpoint:Ne},checkOverflow:{checkOverflow:Ue},classes:{addClasses:Pe,removeClasses:Fe}},ze={};class je{getSlideIndex(e){const{slidesEl:t,params:n}=this,r=S(y(t,`.${n.slideClass}, swiper-slide`)[0]);return S(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=y(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const r=n.minTranslate(),s=(n.maxTranslate()-r)*e+r;n.translateTo(s,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((n=>{const r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const n=this,{params:r,slides:s,slidesGrid:i,slidesSizesGrid:o,size:a,activeIndex:l}=n;let c=1;if(r.centeredSlides){let e,t=s[l].swiperSlideSize;for(let n=l+1;n<s.length;n+=1)s[n]&&!e&&(t+=s[n].swiperSlideSize,c+=1,t>a&&(e=!0));for(let n=l-1;n>=0;n-=1)s[n]&&!e&&(t+=s[n].swiperSlideSize,c+=1,t>a&&(e=!0))}else if("current"===e)for(let e=l+1;e<s.length;e+=1)(t?i[e]+o[e]-i[l]<a:i[e]-i[l]<a)&&(c+=1);else for(let e=l-1;e>=0;e-=1)i[l]-i[e]<a&&(c+=1);return c}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function r(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&G(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled)r(),e.params.autoHeight&&e.updateAutoHeight();else{if(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides){const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(t.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const n=this,r=n.params.direction;return e||(e="horizontal"===r?"vertical":"horizontal"),e===r||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"==typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(r()):y(n,r())[0];return!s&&t.params.createElements&&(s=v("div",t.params.wrapperClass),n.append(s),y(n,`.${t.params.slideClass}`).forEach((e=>{s.append(e)}))),Object.assign(t,{el:n,wrapperEl:s,slidesEl:t.isElement?n:s,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===T(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===T(n,"direction")),wrongRTL:"-webkit-box"===T(s,"display")}),!0}init(e){const t=this;return t.initialized||!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?G(t,e):e.addEventListener("load",(e=>{G(t,e.target)}))})),K(t),t.initialized=!0,K(t),t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const n=this,{params:r,el:s,wrapperEl:i,slides:a}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),s.removeAttribute("style"),i.removeAttribute("style"),a&&a.length&&a.forEach((e=>{e.classList.remove(r.slideVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.el.swiper=null,o(n)),n.destroyed=!0),null}static extendDefaults(e){p(ze,e)}static get extendedDefaults(){return ze}static get defaults(){return Be}static installModule(e){je.prototype.__modules__||(je.prototype.__modules__=[]);const t=je.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>je.installModule(e))),je):(je.installModule(e),je)}constructor(){let e,t;for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];1===s.length&&s[0].constructor&&"Object"===Object.prototype.toString.call(s[0]).slice(8,-1)?t=s[0]:[e,t]=s,t||(t={}),t=p({},t),e&&!t.el&&(t.el=e);const o=r();if(t.el&&"string"==typeof t.el&&o.querySelectorAll(t.el).length>1){const e=[];return o.querySelectorAll(t.el).forEach((n=>{const r=p({},t,{el:n});e.push(new je(r))})),e}const a=this;a.__swiper__=!0,a.support=L(),a.device=R({userAgent:t.userAgent}),a.browser=D(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],t.modules&&Array.isArray(t.modules)&&a.modules.push(...t.modules);const l={};a.modules.forEach((e=>{e({params:t,swiper:a,extendParams:Ve(t,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})}));const c=p({},Be,l);return a.params=p({},c,ze,t),a.originalParams=p({},a.params),a.passedParams=p({},t),a.params&&a.params.on&&Object.keys(a.params.on).forEach((e=>{a.on(e,a.params.on[e])})),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===a.params.direction,isVertical:()=>"vertical"===a.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return 8388608*Math.trunc(this.translate/8388608)},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}}function qe(e){let t,{swiper:n,extendParams:s,on:i,emit:o}=e;s({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});const a=r();n.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const l=a.createElement("div");function c(e,t){const r=n.params.virtual;if(r.cache&&n.virtual.cache[t])return n.virtual.cache[t];let s;return r.renderSlide?(s=r.renderSlide.call(n,e,t),"string"==typeof s&&(l.innerHTML=s,s=l.children[0])):s=n.isElement?v("swiper-slide"):v("div",n.params.slideClass),s.setAttribute("data-swiper-slide-index",t),r.renderSlide||(s.innerHTML=e),r.cache&&(n.virtual.cache[t]=s),s}function u(e){const{slidesPerView:t,slidesPerGroup:r,centeredSlides:s,loop:i}=n.params,{addSlidesBefore:a,addSlidesAfter:l}=n.params.virtual,{from:u,to:h,slides:d,slidesGrid:p,offset:f}=n.virtual;n.params.cssMode||n.updateActiveIndex();const m=n.activeIndex||0;let g,v,w;g=n.rtlTranslate?"right":n.isHorizontal()?"left":"top",s?(v=Math.floor(t/2)+r+l,w=Math.floor(t/2)+r+a):(v=t+(r-1)+l,w=(i?t:r)+a);let b=m-w,E=m+v;i||(b=Math.max(b,0),E=Math.min(E,d.length-1));let T=(n.slidesGrid[b]||0)-(n.slidesGrid[0]||0);function S(){n.updateSlides(),n.updateProgress(),n.updateSlidesClasses(),o("virtualUpdate")}if(i&&m>=w?(b-=w,s||(T+=n.slidesGrid[0])):i&&m<w&&(b=-w,s&&(T+=n.slidesGrid[0])),Object.assign(n.virtual,{from:b,to:E,offset:T,slidesGrid:n.slidesGrid,slidesBefore:w,slidesAfter:v}),u===b&&h===E&&!e)return n.slidesGrid!==p&&T!==f&&n.slides.forEach((e=>{e.style[g]=T-Math.abs(n.cssOverflowAdjustment())+"px"})),n.updateProgress(),void o("virtualUpdate");if(n.params.virtual.renderExternal)return n.params.virtual.renderExternal.call(n,{offset:T,from:b,to:E,slides:function(){const e=[];for(let t=b;t<=E;t+=1)e.push(d[t]);return e}()}),void(n.params.virtual.renderExternalUpdate?S():o("virtualUpdate"));const I=[],C=[],_=e=>{let t=e;return e<0?t=d.length+e:t>=d.length&&(t-=d.length),t};if(e)n.slidesEl.querySelectorAll(`.${n.params.slideClass}, swiper-slide`).forEach((e=>{e.remove()}));else for(let e=u;e<=h;e+=1)if(e<b||e>E){const t=_(e);n.slidesEl.querySelectorAll(`.${n.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`).forEach((e=>{e.remove()}))}const A=i?-d.length:0,k=i?2*d.length:d.length;for(let t=A;t<k;t+=1)if(t>=b&&t<=E){const n=_(t);void 0===h||e?C.push(n):(t>h&&C.push(n),t<u&&I.push(n))}if(C.forEach((e=>{n.slidesEl.append(c(d[e],e))})),i)for(let e=I.length-1;e>=0;e-=1){const t=I[e];n.slidesEl.prepend(c(d[t],t))}else I.sort(((e,t)=>t-e)),I.forEach((e=>{n.slidesEl.prepend(c(d[e],e))}));y(n.slidesEl,".swiper-slide, swiper-slide").forEach((e=>{e.style[g]=T-Math.abs(n.cssOverflowAdjustment())+"px"})),S()}function h(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&n.virtual.slides.push(e[t]);else n.virtual.slides.push(e);u(!0)}function d(e){const t=n.activeIndex;let r=t+1,s=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&n.virtual.slides.unshift(e[t]);r=t+e.length,s=e.length}else n.virtual.slides.unshift(e);if(n.params.virtual.cache){const e=n.virtual.cache,t={};Object.keys(e).forEach((n=>{const r=e[n],i=r.getAttribute("data-swiper-slide-index");i&&r.setAttribute("data-swiper-slide-index",parseInt(i,10)+s),t[parseInt(n,10)+s]=r})),n.virtual.cache=t}u(!0),n.slideTo(r,0)}function p(e){if(null==e)return;let t=n.activeIndex;if(Array.isArray(e))for(let r=e.length-1;r>=0;r-=1)n.virtual.slides.splice(e[r],1),n.params.virtual.cache&&delete n.virtual.cache[e[r]],e[r]<t&&(t-=1),t=Math.max(t,0);else n.virtual.slides.splice(e,1),n.params.virtual.cache&&delete n.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);u(!0),n.slideTo(t,0)}function m(){n.virtual.slides=[],n.params.virtual.cache&&(n.virtual.cache={}),u(!0),n.slideTo(0,0)}i("beforeInit",(()=>{if(!n.params.virtual.enabled)return;let e;if(void 0===n.passedParams.virtual.slides){const t=[...n.slidesEl.children].filter((e=>e.matches(`.${n.params.slideClass}, swiper-slide`)));t&&t.length&&(n.virtual.slides=[...t],e=!0,t.forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t),n.virtual.cache[t]=e,e.remove()})))}e||(n.virtual.slides=n.params.virtual.slides),n.classNames.push(`${n.params.containerModifierClass}virtual`),n.params.watchSlidesProgress=!0,n.originalParams.watchSlidesProgress=!0,n.params.initialSlide||u()})),i("setTranslate",(()=>{n.params.virtual.enabled&&(n.params.cssMode&&!n._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{u()}),100)):u())})),i("init update resize",(()=>{n.params.virtual.enabled&&n.params.cssMode&&f(n.wrapperEl,"--swiper-virtual-size",`${n.virtualSize}px`)})),Object.assign(n.virtual,{appendSlide:h,prependSlide:d,removeSlide:p,removeAllSlides:m,update:u})}function He(e){let{swiper:t,extendParams:n,on:s,emit:o}=e;const a=r(),l=i();function c(e){if(!t.enabled)return;const{rtlTranslate:n}=t;let r=e;r.originalEvent&&(r=r.originalEvent);const s=r.keyCode||r.charCode,i=t.params.keyboard.pageUpDown,c=i&&33===s,u=i&&34===s,h=37===s,d=39===s,p=38===s,f=40===s;if(!t.allowSlideNext&&(t.isHorizontal()&&d||t.isVertical()&&f||u))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&h||t.isVertical()&&p||c))return!1;if(!(r.shiftKey||r.altKey||r.ctrlKey||r.metaKey||a.activeElement&&a.activeElement.nodeName&&("input"===a.activeElement.nodeName.toLowerCase()||"textarea"===a.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(c||u||h||d||p||f)){let e=!1;if(I(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&0===I(t.el,`.${t.params.slideActiveClass}`).length)return;const r=t.el,s=r.clientWidth,i=r.clientHeight,o=l.innerWidth,a=l.innerHeight,c=w(r);n&&(c.left-=r.scrollLeft);const u=[[c.left,c.top],[c.left+s,c.top],[c.left,c.top+i],[c.left+s,c.top+i]];for(let t=0;t<u.length;t+=1){const n=u[t];if(n[0]>=0&&n[0]<=o&&n[1]>=0&&n[1]<=a){if(0===n[0]&&0===n[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((c||u||h||d)&&(r.preventDefault?r.preventDefault():r.returnValue=!1),((u||d)&&!n||(c||h)&&n)&&t.slideNext(),((c||h)&&!n||(u||d)&&n)&&t.slidePrev()):((c||u||p||f)&&(r.preventDefault?r.preventDefault():r.returnValue=!1),(u||f)&&t.slideNext(),(c||p)&&t.slidePrev()),o("keyPress",s)}}function u(){t.keyboard.enabled||(a.addEventListener("keydown",c),t.keyboard.enabled=!0)}function h(){t.keyboard.enabled&&(a.removeEventListener("keydown",c),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},n({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),s("init",(()=>{t.params.keyboard.enabled&&u()})),s("destroy",(()=>{t.keyboard.enabled&&h()})),Object.assign(t.keyboard,{enable:u,disable:h})}function Ge(e){let{swiper:t,extendParams:n,on:r,emit:s}=e;const o=i();let c;n({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),t.mousewheel={enabled:!1};let u,h=l();const d=[];function p(e){const t=10,n=40,r=800;let s=0,i=0,o=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(s=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(s=i,i=0),o=s*t,a=i*t,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(o=e.deltaX),e.shiftKey&&!o&&(o=a,a=0),(o||a)&&e.deltaMode&&(1===e.deltaMode?(o*=n,a*=n):(o*=r,a*=r)),o&&!s&&(s=o<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:s,spinY:i,pixelX:o,pixelY:a}}function f(){t.enabled&&(t.mouseEntered=!0)}function m(){t.enabled&&(t.mouseEntered=!1)}function g(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta||t.params.mousewheel.thresholdTime&&l()-h<t.params.mousewheel.thresholdTime||!(e.delta>=6&&l()-h<60)&&(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),s("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),s("scroll",e.raw)),h=(new o.Date).getTime(),1))}function y(e){const n=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&n.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&n.releaseOnEdges)return!0;return!1}function v(e){let n=e,r=!0;if(!t.enabled)return;if(e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))return;const i=t.params.mousewheel;t.params.cssMode&&n.preventDefault();let o=t.el;"container"!==t.params.mousewheel.eventsTarget&&(o=document.querySelector(t.params.mousewheel.eventsTarget));const h=o&&o.contains(n.target);if(!t.mouseEntered&&!h&&!i.releaseOnEdges)return!0;n.originalEvent&&(n=n.originalEvent);let f=0;const m=t.rtlTranslate?-1:1,v=p(n);if(i.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(v.pixelX)>Math.abs(v.pixelY)))return!0;f=-v.pixelX*m}else{if(!(Math.abs(v.pixelY)>Math.abs(v.pixelX)))return!0;f=-v.pixelY}else f=Math.abs(v.pixelX)>Math.abs(v.pixelY)?-v.pixelX*m:-v.pixelY;if(0===f)return!0;i.invert&&(f=-f);let w=t.getTranslate()+f*i.sensitivity;if(w>=t.minTranslate()&&(w=t.minTranslate()),w<=t.maxTranslate()&&(w=t.maxTranslate()),r=!!t.params.loop||!(w===t.minTranslate()||w===t.maxTranslate()),r&&t.params.nested&&n.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:l(),delta:Math.abs(f),direction:Math.sign(f)},r=u&&e.time<u.time+500&&e.delta<=u.delta&&e.direction===u.direction;if(!r){u=void 0;let o=t.getTranslate()+f*i.sensitivity;const l=t.isBeginning,h=t.isEnd;if(o>=t.minTranslate()&&(o=t.minTranslate()),o<=t.maxTranslate()&&(o=t.maxTranslate()),t.setTransition(0),t.setTranslate(o),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!l&&t.isBeginning||!h&&t.isEnd)&&t.updateSlidesClasses(),t.params.loop&&t.loopFix({direction:e.direction<0?"next":"prev",byMousewheel:!0}),t.params.freeMode.sticky){clearTimeout(c),c=void 0,d.length>=15&&d.shift();const n=d.length?d[d.length-1]:void 0,r=d[0];if(d.push(e),n&&(e.delta>n.delta||e.direction!==n.direction))d.splice(0);else if(d.length>=15&&e.time-r.time<500&&r.delta-e.delta>=1&&e.delta<=6){const n=f>0?.8:.2;u=e,d.splice(0),c=a((()=>{t.slideToClosest(t.params.speed,!0,void 0,n)}),0)}c||(c=a((()=>{const n=.5;u=e,d.splice(0),t.slideToClosest(t.params.speed,!0,void 0,n)}),500))}if(r||s("scroll",n),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),o===t.minTranslate()||o===t.maxTranslate())return!0}}else{const t={time:l(),delta:Math.abs(f),direction:Math.sign(f),raw:e};d.length>=2&&d.shift();const n=d.length?d[d.length-1]:void 0;if(d.push(t),n?(t.direction!==n.direction||t.delta>n.delta||t.time>n.time+150)&&g(t):g(t),y(t))return!0}return n.preventDefault?n.preventDefault():n.returnValue=!1,!1}function w(e){let n=t.el;"container"!==t.params.mousewheel.eventsTarget&&(n=document.querySelector(t.params.mousewheel.eventsTarget)),n[e]("mouseenter",f),n[e]("mouseleave",m),n[e]("wheel",v)}function b(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",v),!0):!t.mousewheel.enabled&&(w("addEventListener"),t.mousewheel.enabled=!0,!0)}function E(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,v),!0):!!t.mousewheel.enabled&&(w("removeEventListener"),t.mousewheel.enabled=!1,!0)}r("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&E(),t.params.mousewheel.enabled&&b()})),r("destroy",(()=>{t.params.cssMode&&b(),t.mousewheel.enabled&&E()})),Object.assign(t.mousewheel,{enable:b,disable:E})}function We(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach((s=>{if(!n[s]&&!0===n.auto){let i=y(e.el,`.${r[s]}`)[0];i||(i=v("div",r[s]),i.className=r[s],e.el.append(i)),n[s]=i,t[s]=i}})),n}function Ke(e){let{swiper:t,extendParams:n,on:r,emit:s}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const i=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function o(e){let n;return e&&"string"==typeof e&&t.isElement&&(n=t.el.shadowRoot.querySelector(e),n)?n:(e&&("string"==typeof e&&(n=[...document.querySelectorAll(e)]),t.params.uniqueNavElements&&"string"==typeof e&&n.length>1&&1===t.el.querySelectorAll(e).length&&(n=t.el.querySelector(e))),e&&!n?e:n)}function a(e,n){const r=t.params.navigation;(e=i(e)).forEach((e=>{e&&(e.classList[n?"add":"remove"](...r.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=n),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](r.lockClass))}))}function l(){const{nextEl:e,prevEl:n}=t.navigation;if(t.params.loop)return a(n,!1),void a(e,!1);a(n,t.isBeginning&&!t.params.rewind),a(e,t.isEnd&&!t.params.rewind)}function c(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),s("navigationPrev"))}function u(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),s("navigationNext"))}function h(){const e=t.params.navigation;if(t.params.navigation=We(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;let n=o(e.nextEl),r=o(e.prevEl);Object.assign(t.navigation,{nextEl:n,prevEl:r}),n=i(n),r=i(r);const s=(n,r)=>{n&&n.addEventListener("click","next"===r?u:c),!t.enabled&&n&&n.classList.add(...e.lockClass.split(" "))};n.forEach((e=>s(e,"next"))),r.forEach((e=>s(e,"prev")))}function d(){let{nextEl:e,prevEl:n}=t.navigation;e=i(e),n=i(n);const r=(e,n)=>{e.removeEventListener("click","next"===n?u:c),e.classList.remove(...t.params.navigation.disabledClass.split(" "))};e.forEach((e=>r(e,"next"))),n.forEach((e=>r(e,"prev")))}r("init",(()=>{!1===t.params.navigation.enabled?f():(h(),l())})),r("toEdge fromEdge lock unlock",(()=>{l()})),r("destroy",(()=>{d()})),r("enable disable",(()=>{let{nextEl:e,prevEl:n}=t.navigation;e=i(e),n=i(n),[...e,...n].filter((e=>!!e)).forEach((e=>e.classList[t.enabled?"remove":"add"](t.params.navigation.lockClass)))})),r("click",((e,n)=>{let{nextEl:r,prevEl:o}=t.navigation;r=i(r),o=i(o);const a=n.target;if(t.params.navigation.hideOnClick&&!o.includes(a)&&!r.includes(a)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===a||t.pagination.el.contains(a)))return;let e;r.length?e=r[0].classList.contains(t.params.navigation.hiddenClass):o.length&&(e=o[0].classList.contains(t.params.navigation.hiddenClass)),s(!0===e?"navigationShow":"navigationHide"),[...r,...o].filter((e=>!!e)).forEach((e=>e.classList.toggle(t.params.navigation.hiddenClass)))}}));const p=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),h(),l()},f=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(t.navigation,{enable:p,disable:f,update:l,init:h,destroy:d})}function Xe(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Ye(e){let{swiper:t,extendParams:n,on:r,emit:s}=e;const i="swiper-pagination";let o;n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),t.pagination={el:null,bullets:[]};let a=0;const l=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function c(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&0===t.pagination.el.length}function u(e,n){const{bulletActiveClass:r}=t.params.pagination;e&&(e=e[("prev"===n?"previous":"next")+"ElementSibling"])&&(e.classList.add(`${r}-${n}`),(e=e[("prev"===n?"previous":"next")+"ElementSibling"])&&e.classList.add(`${r}-${n}-${n}`))}function h(e){const n=e.target.closest(Xe(t.params.pagination.bulletClass));if(!n)return;e.preventDefault();const r=S(n)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===r)return;const e=t.getSlideIndexByData(r),n=t.getSlideIndexByData(t.realIndex);e>t.slides.length-t.loopedSlides&&t.loopFix({direction:e>n?"next":"prev",activeSlideIndex:e,slideTo:!1}),t.slideToLoop(r)}else t.slideTo(r)}function d(){const e=t.rtl,n=t.params.pagination;if(c())return;let r,i,h=t.pagination.el;h=l(h);const d=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,p=t.params.loop?Math.ceil(d/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(i=t.previousRealIndex||0,r=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):void 0!==t.snapIndex?(r=t.snapIndex,i=t.previousSnapIndex):(i=t.previousIndex||0,r=t.activeIndex||0),"bullets"===n.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const s=t.pagination.bullets;let l,c,d;if(n.dynamicBullets&&(o=_(s[0],t.isHorizontal()?"width":"height",!0),h.forEach((e=>{e.style[t.isHorizontal()?"width":"height"]=o*(n.dynamicMainBullets+4)+"px"})),n.dynamicMainBullets>1&&void 0!==i&&(a+=r-(i||0),a>n.dynamicMainBullets-1?a=n.dynamicMainBullets-1:a<0&&(a=0)),l=Math.max(r-a,0),c=l+(Math.min(s.length,n.dynamicMainBullets)-1),d=(c+l)/2),s.forEach((e=>{const t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${n.bulletActiveClass}${e}`))].map((e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...t)})),h.length>1)s.forEach((e=>{const t=S(e);t===r&&e.classList.add(...n.bulletActiveClass.split(" ")),n.dynamicBullets&&(t>=l&&t<=c&&e.classList.add(...`${n.bulletActiveClass}-main`.split(" ")),t===l&&u(e,"prev"),t===c&&u(e,"next"))}));else{const e=s[r];if(e&&e.classList.add(...n.bulletActiveClass.split(" ")),n.dynamicBullets){const e=s[l],t=s[c];for(let e=l;e<=c;e+=1)s[e]&&s[e].classList.add(...`${n.bulletActiveClass}-main`.split(" "));u(e,"prev"),u(t,"next")}}if(n.dynamicBullets){const r=Math.min(s.length,n.dynamicMainBullets+4),i=(o*r-o)/2-d*o,a=e?"right":"left";s.forEach((e=>{e.style[t.isHorizontal()?a:"top"]=`${i}px`}))}}h.forEach(((e,i)=>{if("fraction"===n.type&&(e.querySelectorAll(Xe(n.currentClass)).forEach((e=>{e.textContent=n.formatFractionCurrent(r+1)})),e.querySelectorAll(Xe(n.totalClass)).forEach((e=>{e.textContent=n.formatFractionTotal(p)}))),"progressbar"===n.type){let s;s=n.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const i=(r+1)/p;let o=1,a=1;"horizontal"===s?o=i:a=i,e.querySelectorAll(Xe(n.progressbarFillClass)).forEach((e=>{e.style.transform=`translate3d(0,0,0) scaleX(${o}) scaleY(${a})`,e.style.transitionDuration=`${t.params.speed}ms`}))}"custom"===n.type&&n.renderCustom?(e.innerHTML=n.renderCustom(t,r+1,p),0===i&&s("paginationRender",e)):(0===i&&s("paginationRender",e),s("paginationUpdate",e)),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](n.lockClass)}))}function p(){const e=t.params.pagination;if(c())return;const n=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let r=t.pagination.el;r=l(r);let i="";if("bullets"===e.type){let r=t.params.loop?Math.ceil(n/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&r>n&&(r=n);for(let n=0;n<r;n+=1)e.renderBullet?i+=e.renderBullet.call(t,n,e.bulletClass):i+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(i=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(i=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),t.pagination.bullets=[],r.forEach((n=>{"custom"!==e.type&&(n.innerHTML=i||""),"bullets"===e.type&&t.pagination.bullets.push(...n.querySelectorAll(Xe(e.bulletClass)))})),"custom"!==e.type&&s("paginationRender",r[0])}function f(){t.params.pagination=We(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let n;"string"==typeof e.el&&t.isElement&&(n=t.el.shadowRoot.querySelector(e.el)),n||"string"!=typeof e.el||(n=[...document.querySelectorAll(e.el)]),n||(n=e.el),n&&0!==n.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&Array.isArray(n)&&n.length>1&&(n=[...t.el.querySelectorAll(e.el)],n.length>1&&(n=n.filter((e=>I(e,".swiper")[0]===t.el))[0])),Array.isArray(n)&&1===n.length&&(n=n[0]),Object.assign(t.pagination,{el:n}),n=l(n),n.forEach((n=>{"bullets"===e.type&&e.clickable&&n.classList.add(e.clickableClass),n.classList.add(e.modifierClass+e.type),n.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(n.classList.add(`${e.modifierClass}${e.type}-dynamic`),a=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&n.classList.add(e.progressbarOppositeClass),e.clickable&&n.addEventListener("click",h),t.enabled||n.classList.add(e.lockClass)})))}function m(){const e=t.params.pagination;if(c())return;let n=t.pagination.el;n&&(n=l(n),n.forEach((n=>{n.classList.remove(e.hiddenClass),n.classList.remove(e.modifierClass+e.type),n.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&n.removeEventListener("click",h)}))),t.pagination.bullets&&t.pagination.bullets.forEach((t=>t.classList.remove(...e.bulletActiveClass.split(" "))))}r("changeDirection",(()=>{if(!t.pagination||!t.pagination.el)return;const e=t.params.pagination;let{el:n}=t.pagination;n=l(n),n.forEach((n=>{n.classList.remove(e.horizontalClass,e.verticalClass),n.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),r("init",(()=>{!1===t.params.pagination.enabled?y():(f(),p(),d())})),r("activeIndexChange",(()=>{void 0===t.snapIndex&&d()})),r("snapIndexChange",(()=>{d()})),r("snapGridLengthChange",(()=>{p(),d()})),r("destroy",(()=>{m()})),r("enable disable",(()=>{let{el:e}=t.pagination;e&&(e=l(e),e.forEach((e=>e.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass))))})),r("lock unlock",(()=>{d()})),r("click",((e,n)=>{const r=n.target;let{el:i}=t.pagination;if(Array.isArray(i)||(i=[i].filter((e=>!!e))),t.params.pagination.el&&t.params.pagination.hideOnClick&&i&&i.length>0&&!r.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&r===t.navigation.nextEl||t.navigation.prevEl&&r===t.navigation.prevEl))return;const e=i[0].classList.contains(t.params.pagination.hiddenClass);s(!0===e?"paginationShow":"paginationHide"),i.forEach((e=>e.classList.toggle(t.params.pagination.hiddenClass)))}}));const g=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=l(e),e.forEach((e=>e.classList.remove(t.params.pagination.paginationDisabledClass)))),f(),p(),d()},y=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=l(e),e.forEach((e=>e.classList.add(t.params.pagination.paginationDisabledClass)))),m()};Object.assign(t.pagination,{enable:g,disable:y,render:p,update:d,init:f,destroy:m})}function Qe(e){let{swiper:t,extendParams:n,on:s,emit:i}=e;const o=r();let l,c,u,h,d=!1,p=null,f=null;function m(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:n}=t,{dragEl:r,el:s}=e,i=t.params.scrollbar,o=t.params.loop?t.progressLoop:t.progress;let a=c,l=(u-c)*o;n?(l=-l,l>0?(a=c-l,l=0):-l+c>u&&(a=u+l)):l<0?(a=c+l,l=0):l+c>u&&(a=u-l),t.isHorizontal()?(r.style.transform=`translate3d(${l}px, 0, 0)`,r.style.width=`${a}px`):(r.style.transform=`translate3d(0px, ${l}px, 0)`,r.style.height=`${a}px`),i.hide&&(clearTimeout(p),s.style.opacity=1,p=setTimeout((()=>{s.style.opacity=0,s.style.transitionDuration="400ms"}),1e3))}function g(e){t.params.scrollbar.el&&t.scrollbar.el&&(t.scrollbar.dragEl.style.transitionDuration=`${e}ms`)}function y(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{dragEl:n,el:r}=e;n.style.width="",n.style.height="",u=t.isHorizontal()?r.offsetWidth:r.offsetHeight,h=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),c="auto"===t.params.scrollbar.dragSize?u*h:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?n.style.width=`${c}px`:n.style.height=`${c}px`,r.style.display=h>=1?"none":"",t.params.scrollbar.hide&&(r.style.opacity=0),t.params.watchOverflow&&t.enabled&&e.el.classList[t.isLocked?"add":"remove"](t.params.scrollbar.lockClass)}function b(e){return t.isHorizontal()?e.clientX:e.clientY}function E(e){const{scrollbar:n,rtlTranslate:r}=t,{el:s}=n;let i;i=(b(e)-w(s)[t.isHorizontal()?"left":"top"]-(null!==l?l:c/2))/(u-c),i=Math.max(Math.min(i,1),0),r&&(i=1-i);const o=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*i;t.updateProgress(o),t.setTranslate(o),t.updateActiveIndex(),t.updateSlidesClasses()}function T(e){const n=t.params.scrollbar,{scrollbar:r,wrapperEl:s}=t,{el:o,dragEl:a}=r;d=!0,l=e.target===a?b(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.style.transitionDuration="100ms",a.style.transitionDuration="100ms",E(e),clearTimeout(f),o.style.transitionDuration="0ms",n.hide&&(o.style.opacity=1),t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="none"),i("scrollbarDragStart",e)}function S(e){const{scrollbar:n,wrapperEl:r}=t,{el:s,dragEl:o}=n;d&&(e.preventDefault?e.preventDefault():e.returnValue=!1,E(e),r.style.transitionDuration="0ms",s.style.transitionDuration="0ms",o.style.transitionDuration="0ms",i("scrollbarDragMove",e))}function I(e){const n=t.params.scrollbar,{scrollbar:r,wrapperEl:s}=t,{el:o}=r;d&&(d=!1,t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="",s.style.transitionDuration=""),n.hide&&(clearTimeout(f),f=a((()=>{o.style.opacity=0,o.style.transitionDuration="400ms"}),1e3)),i("scrollbarDragEnd",e),n.snapOnRelease&&t.slideToClosest())}function C(e){const{scrollbar:n,params:r}=t,s=n.el;if(!s)return;const i=s,a=!!r.passiveListeners&&{passive:!1,capture:!1},l=!!r.passiveListeners&&{passive:!0,capture:!1};if(!i)return;const c="on"===e?"addEventListener":"removeEventListener";i[c]("pointerdown",T,a),o[c]("pointermove",S,a),o[c]("pointerup",I,l)}function _(){t.params.scrollbar.el&&t.scrollbar.el&&C("on")}function A(){t.params.scrollbar.el&&t.scrollbar.el&&C("off")}function k(){const{scrollbar:e,el:n}=t;t.params.scrollbar=We(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const r=t.params.scrollbar;if(!r.el)return;let s,i;"string"==typeof r.el&&t.isElement&&(s=t.el.shadowRoot.querySelector(r.el)),s||"string"!=typeof r.el?s||(s=r.el):s=o.querySelectorAll(r.el),t.params.uniqueNavElements&&"string"==typeof r.el&&s.length>1&&1===n.querySelectorAll(r.el).length&&(s=n.querySelector(r.el)),s.length>0&&(s=s[0]),s.classList.add(t.isHorizontal()?r.horizontalClass:r.verticalClass),s&&(i=s.querySelector(`.${t.params.scrollbar.dragClass}`),i||(i=v("div",t.params.scrollbar.dragClass),s.append(i))),Object.assign(e,{el:s,dragEl:i}),r.draggable&&_(),s&&s.classList[t.enabled?"remove":"add"](t.params.scrollbar.lockClass)}function x(){const e=t.params.scrollbar,n=t.scrollbar.el;n&&n.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),A()}n({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null},s("init",(()=>{!1===t.params.scrollbar.enabled?L():(k(),y(),m())})),s("update resize observerUpdate lock unlock",(()=>{y()})),s("setTranslate",(()=>{m()})),s("setTransition",((e,t)=>{g(t)})),s("enable disable",(()=>{const{el:e}=t.scrollbar;e&&e.classList[t.enabled?"remove":"add"](t.params.scrollbar.lockClass)})),s("destroy",(()=>{x()}));const M=()=>{t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.el&&t.scrollbar.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),k(),y(),m()},L=()=>{t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.el&&t.scrollbar.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),x()};Object.assign(t.scrollbar,{enable:M,disable:L,updateSize:y,setTranslate:m,init:k,destroy:x})}function Je(e){let{swiper:t,extendParams:n,on:r}=e;n({parallax:{enabled:!1}});const s=(e,n)=>{const{rtl:r}=t,s=r?-1:1,i=e.getAttribute("data-swiper-parallax")||"0";let o=e.getAttribute("data-swiper-parallax-x"),a=e.getAttribute("data-swiper-parallax-y");const l=e.getAttribute("data-swiper-parallax-scale"),c=e.getAttribute("data-swiper-parallax-opacity"),u=e.getAttribute("data-swiper-parallax-rotate");if(o||a?(o=o||"0",a=a||"0"):t.isHorizontal()?(o=i,a="0"):(a=i,o="0"),o=o.indexOf("%")>=0?parseInt(o,10)*n*s+"%":o*n*s+"px",a=a.indexOf("%")>=0?parseInt(a,10)*n+"%":a*n+"px",null!=c){const t=c-(c-1)*(1-Math.abs(n));e.style.opacity=t}let h=`translate3d(${o}, ${a}, 0px)`;null!=l&&(h+=` scale(${l-(l-1)*(1-Math.abs(n))})`),u&&null!=u&&(h+=` rotate(${u*n*-1}deg)`),e.style.transform=h},i=()=>{const{el:e,slides:n,progress:r,snapGrid:i}=t;y(e,"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((e=>{s(e,r)})),n.forEach(((e,n)=>{let o=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(o+=Math.ceil(n/2)-r*(i.length-1)),o=Math.min(Math.max(o,-1),1),e.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]").forEach((e=>{s(e,o)}))}))},o=function(e){void 0===e&&(e=t.params.speed);const{el:n}=t;n.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((t=>{let n=parseInt(t.getAttribute("data-swiper-parallax-duration"),10)||e;0===e&&(n=0),t.style.transitionDuration=`${n}ms`}))};r("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),r("init",(()=>{t.params.parallax.enabled&&i()})),r("setTranslate",(()=>{t.params.parallax.enabled&&i()})),r("setTransition",((e,n)=>{t.params.parallax.enabled&&o(n)}))}function Ze(e){let{swiper:t,extendParams:n,on:r,emit:s}=e;const o=i();n({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let a,l,c=1,h=!1;const d=[],p={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},f={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},m={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let g=1;function v(){if(d.length<2)return 1;const e=d[0].pageX,t=d[0].pageY,n=d[1].pageX,r=d[1].pageY;return Math.sqrt((n-e)**2+(r-t)**2)}function b(){if(d.length<2)return{x:null,y:null};const e=p.imageEl.getBoundingClientRect();return[(d[0].pageX+(d[1].pageX-d[0].pageX)/2-e.x)/c,(d[0].pageY+(d[1].pageY-d[0].pageY)/2-e.y)/c]}function E(){return t.isElement?"swiper-slide":`.${t.params.slideClass}`}function T(e){const n=E();return!!e.target.matches(n)||t.slides.filter((t=>t.contains(e.target))).length>0}function S(e){const n=`.${t.params.zoom.containerClass}`;return!!e.target.matches(n)||[...t.el.querySelectorAll(n)].filter((t=>t.contains(e.target))).length>0}function C(e){if("mouse"===e.pointerType&&d.splice(0,d.length),!T(e))return;const n=t.params.zoom;if(a=!1,l=!1,d.push(e),!(d.length<2)){if(a=!0,p.scaleStart=v(),!p.slideEl){p.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`),p.slideEl||(p.slideEl=t.slides[t.activeIndex]);let r=p.slideEl.querySelector(`.${n.containerClass}`);if(r&&(r=r.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),p.imageEl=r,p.imageWrapEl=r?I(p.imageEl,`.${n.containerClass}`)[0]:void 0,!p.imageWrapEl)return void(p.imageEl=void 0);p.maxRatio=p.imageWrapEl.getAttribute("data-swiper-zoom")||n.maxRatio}if(p.imageEl){const[e,t]=b();p.originX=e,p.originY=t,p.imageEl.style.transitionDuration="0ms"}h=!0}}function _(e){if(!T(e))return;const n=t.params.zoom,r=t.zoom,s=d.findIndex((t=>t.pointerId===e.pointerId));s>=0&&(d[s]=e),d.length<2||(l=!0,p.scaleMove=v(),p.imageEl&&(r.scale=p.scaleMove/p.scaleStart*c,r.scale>p.maxRatio&&(r.scale=p.maxRatio-1+(r.scale-p.maxRatio+1)**.5),r.scale<n.minRatio&&(r.scale=n.minRatio+1-(n.minRatio-r.scale+1)**.5),p.imageEl.style.transform=`translate3d(0,0,0) scale(${r.scale})`))}function A(e){if(!T(e))return;if("mouse"===e.pointerType&&"pointerout"===e.type)return;const n=t.params.zoom,r=t.zoom,s=d.findIndex((t=>t.pointerId===e.pointerId));s>=0&&d.splice(s,1),a&&l&&(a=!1,l=!1,p.imageEl&&(r.scale=Math.max(Math.min(r.scale,p.maxRatio),n.minRatio),p.imageEl.style.transitionDuration=`${t.params.speed}ms`,p.imageEl.style.transform=`translate3d(0,0,0) scale(${r.scale})`,c=r.scale,h=!1,r.scale>1&&p.slideEl?p.slideEl.classList.add(`${n.zoomedSlideClass}`):r.scale<=1&&p.slideEl&&p.slideEl.classList.remove(`${n.zoomedSlideClass}`),1===r.scale&&(p.originX=0,p.originY=0,p.slideEl=void 0)))}function k(e){const n=t.device;if(!p.imageEl)return;if(f.isTouched)return;n.android&&e.cancelable&&e.preventDefault(),f.isTouched=!0;const r=d.length>0?d[0]:e;f.touchesStart.x=r.pageX,f.touchesStart.y=r.pageY}function x(e){if(!T(e)||!S(e))return;const n=t.zoom;if(!p.imageEl)return;if(!f.isTouched||!p.slideEl)return;f.isMoved||(f.width=p.imageEl.offsetWidth,f.height=p.imageEl.offsetHeight,f.startX=u(p.imageWrapEl,"x")||0,f.startY=u(p.imageWrapEl,"y")||0,p.slideWidth=p.slideEl.offsetWidth,p.slideHeight=p.slideEl.offsetHeight,p.imageWrapEl.style.transitionDuration="0ms");const r=f.width*n.scale,s=f.height*n.scale;if(r<p.slideWidth&&s<p.slideHeight)return;if(f.minX=Math.min(p.slideWidth/2-r/2,0),f.maxX=-f.minX,f.minY=Math.min(p.slideHeight/2-s/2,0),f.maxY=-f.minY,f.touchesCurrent.x=d.length>0?d[0].pageX:e.pageX,f.touchesCurrent.y=d.length>0?d[0].pageY:e.pageY,Math.max(Math.abs(f.touchesCurrent.x-f.touchesStart.x),Math.abs(f.touchesCurrent.y-f.touchesStart.y))>5&&(t.allowClick=!1),!f.isMoved&&!h){if(t.isHorizontal()&&(Math.floor(f.minX)===Math.floor(f.startX)&&f.touchesCurrent.x<f.touchesStart.x||Math.floor(f.maxX)===Math.floor(f.startX)&&f.touchesCurrent.x>f.touchesStart.x))return void(f.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(f.minY)===Math.floor(f.startY)&&f.touchesCurrent.y<f.touchesStart.y||Math.floor(f.maxY)===Math.floor(f.startY)&&f.touchesCurrent.y>f.touchesStart.y))return void(f.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),f.isMoved=!0;const i=(n.scale-c)/(p.maxRatio-t.params.zoom.minRatio),{originX:o,originY:a}=p;f.currentX=f.touchesCurrent.x-f.touchesStart.x+f.startX+i*(f.width-2*o),f.currentY=f.touchesCurrent.y-f.touchesStart.y+f.startY+i*(f.height-2*a),f.currentX<f.minX&&(f.currentX=f.minX+1-(f.minX-f.currentX+1)**.8),f.currentX>f.maxX&&(f.currentX=f.maxX-1+(f.currentX-f.maxX+1)**.8),f.currentY<f.minY&&(f.currentY=f.minY+1-(f.minY-f.currentY+1)**.8),f.currentY>f.maxY&&(f.currentY=f.maxY-1+(f.currentY-f.maxY+1)**.8),m.prevPositionX||(m.prevPositionX=f.touchesCurrent.x),m.prevPositionY||(m.prevPositionY=f.touchesCurrent.y),m.prevTime||(m.prevTime=Date.now()),m.x=(f.touchesCurrent.x-m.prevPositionX)/(Date.now()-m.prevTime)/2,m.y=(f.touchesCurrent.y-m.prevPositionY)/(Date.now()-m.prevTime)/2,Math.abs(f.touchesCurrent.x-m.prevPositionX)<2&&(m.x=0),Math.abs(f.touchesCurrent.y-m.prevPositionY)<2&&(m.y=0),m.prevPositionX=f.touchesCurrent.x,m.prevPositionY=f.touchesCurrent.y,m.prevTime=Date.now(),p.imageWrapEl.style.transform=`translate3d(${f.currentX}px, ${f.currentY}px,0)`}function M(){const e=t.zoom;if(!p.imageEl)return;if(!f.isTouched||!f.isMoved)return f.isTouched=!1,void(f.isMoved=!1);f.isTouched=!1,f.isMoved=!1;let n=300,r=300;const s=m.x*n,i=f.currentX+s,o=m.y*r,a=f.currentY+o;0!==m.x&&(n=Math.abs((i-f.currentX)/m.x)),0!==m.y&&(r=Math.abs((a-f.currentY)/m.y));const l=Math.max(n,r);f.currentX=i,f.currentY=a;const c=f.width*e.scale,u=f.height*e.scale;f.minX=Math.min(p.slideWidth/2-c/2,0),f.maxX=-f.minX,f.minY=Math.min(p.slideHeight/2-u/2,0),f.maxY=-f.minY,f.currentX=Math.max(Math.min(f.currentX,f.maxX),f.minX),f.currentY=Math.max(Math.min(f.currentY,f.maxY),f.minY),p.imageWrapEl.style.transitionDuration=`${l}ms`,p.imageWrapEl.style.transform=`translate3d(${f.currentX}px, ${f.currentY}px,0)`}function L(){const e=t.zoom;p.slideEl&&t.activeIndex!==t.slides.indexOf(p.slideEl)&&(p.imageEl&&(p.imageEl.style.transform="translate3d(0,0,0) scale(1)"),p.imageWrapEl&&(p.imageWrapEl.style.transform="translate3d(0,0,0)"),p.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),e.scale=1,c=1,p.slideEl=void 0,p.imageEl=void 0,p.imageWrapEl=void 0,p.originX=0,p.originY=0)}function O(e){const n=t.zoom,r=t.params.zoom;if(!p.slideEl){e&&e.target&&(p.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`)),p.slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?p.slideEl=y(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:p.slideEl=t.slides[t.activeIndex]);let n=p.slideEl.querySelector(`.${r.containerClass}`);n&&(n=n.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),p.imageEl=n,p.imageWrapEl=n?I(p.imageEl,`.${r.containerClass}`)[0]:void 0}if(!p.imageEl||!p.imageWrapEl)return;let s,i,a,l,u,h,d,m,g,v,b,E,T,S,C,_,A,k;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),p.slideEl.classList.add(`${r.zoomedSlideClass}`),void 0===f.touchesStart.x&&e?(s=e.pageX,i=e.pageY):(s=f.touchesStart.x,i=f.touchesStart.y);const x="number"==typeof e?e:null;1===c&&x&&(s=void 0,i=void 0),n.scale=x||p.imageWrapEl.getAttribute("data-swiper-zoom")||r.maxRatio,c=x||p.imageWrapEl.getAttribute("data-swiper-zoom")||r.maxRatio,!e||1===c&&x?(d=0,m=0):(A=p.slideEl.offsetWidth,k=p.slideEl.offsetHeight,a=w(p.slideEl).left+o.scrollX,l=w(p.slideEl).top+o.scrollY,u=a+A/2-s,h=l+k/2-i,g=p.imageEl.offsetWidth,v=p.imageEl.offsetHeight,b=g*n.scale,E=v*n.scale,T=Math.min(A/2-b/2,0),S=Math.min(k/2-E/2,0),C=-T,_=-S,d=u*n.scale,m=h*n.scale,d<T&&(d=T),d>C&&(d=C),m<S&&(m=S),m>_&&(m=_)),x&&1===n.scale&&(p.originX=0,p.originY=0),p.imageWrapEl.style.transitionDuration="300ms",p.imageWrapEl.style.transform=`translate3d(${d}px, ${m}px,0)`,p.imageEl.style.transitionDuration="300ms",p.imageEl.style.transform=`translate3d(0,0,0) scale(${n.scale})`}function R(){const e=t.zoom,n=t.params.zoom;if(!p.slideEl){t.params.virtual&&t.params.virtual.enabled&&t.virtual?p.slideEl=y(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:p.slideEl=t.slides[t.activeIndex];let e=p.slideEl.querySelector(`.${n.containerClass}`);e&&(e=e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),p.imageEl=e,p.imageWrapEl=e?I(p.imageEl,`.${n.containerClass}`)[0]:void 0}p.imageEl&&p.imageWrapEl&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,c=1,p.imageWrapEl.style.transitionDuration="300ms",p.imageWrapEl.style.transform="translate3d(0,0,0)",p.imageEl.style.transitionDuration="300ms",p.imageEl.style.transform="translate3d(0,0,0) scale(1)",p.slideEl.classList.remove(`${n.zoomedSlideClass}`),p.slideEl=void 0,p.originX=0,p.originY=0)}function N(e){const n=t.zoom;n.scale&&1!==n.scale?R():O(e)}function D(){return{passiveListener:!!t.params.passiveListeners&&{passive:!0,capture:!1},activeListenerWithCapture:!t.params.passiveListeners||{passive:!1,capture:!0}}}function P(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const{passiveListener:n,activeListenerWithCapture:r}=D();t.wrapperEl.addEventListener("pointerdown",C,n),t.wrapperEl.addEventListener("pointermove",_,r),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.addEventListener(e,A,n)})),t.wrapperEl.addEventListener("pointermove",x,r)}function F(){const e=t.zoom;if(!e.enabled)return;e.enabled=!1;const{passiveListener:n,activeListenerWithCapture:r}=D();t.wrapperEl.removeEventListener("pointerdown",C,n),t.wrapperEl.removeEventListener("pointermove",_,r),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.removeEventListener(e,A,n)})),t.wrapperEl.removeEventListener("pointermove",x,r)}Object.defineProperty(t.zoom,"scale",{get:()=>g,set(e){if(g!==e){const t=p.imageEl,n=p.slideEl;s("zoomChange",e,t,n)}g=e}}),r("init",(()=>{t.params.zoom.enabled&&P()})),r("destroy",(()=>{F()})),r("touchStart",((e,n)=>{t.zoom.enabled&&k(n)})),r("touchEnd",((e,n)=>{t.zoom.enabled&&M()})),r("doubleTap",((e,n)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&N(n)})),r("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&L()})),r("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&L()})),Object.assign(t.zoom,{enable:P,disable:F,in:O,out:R,toggle:N})}function et(e){let{swiper:t,extendParams:n,on:r}=e;function s(e,t){const n=function(){let e,t,n;return(r,s)=>{for(t=-1,e=r.length;e-t>1;)n=e+t>>1,r[n]<=s?t=n:e=n;return e}}();let r,s;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(s=n(this.x,e),r=s-1,(e-this.x[r])*(this.y[s]-this.y[r])/(this.x[s]-this.x[r])+this.y[r]):0},this}function i(e){t.controller.spline=t.params.loop?new s(t.slidesGrid,e.slidesGrid):new s(t.snapGrid,e.snapGrid)}function o(e,n){const r=t.controller.control;let s,o;const a=t.constructor;function l(e){if(e.destroyed)return;const n=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(i(e),o=-t.controller.spline.interpolate(-n)),o&&"container"!==t.params.controller.by||(s=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),!Number.isNaN(s)&&Number.isFinite(s)||(s=1),o=(n-t.minTranslate())*s+e.minTranslate()),t.params.controller.inverse&&(o=e.maxTranslate()-o),e.updateProgress(o),e.setTranslate(o,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(let e=0;e<r.length;e+=1)r[e]!==n&&r[e]instanceof a&&l(r[e]);else r instanceof a&&n!==r&&l(r)}function l(e,n){const r=t.constructor,s=t.controller.control;let i;function o(n){n.destroyed||(n.setTransition(e,t),0!==e&&(n.transitionStart(),n.params.autoHeight&&a((()=>{n.updateAutoHeight()})),C(n.wrapperEl,(()=>{s&&n.transitionEnd()}))))}if(Array.isArray(s))for(i=0;i<s.length;i+=1)s[i]!==n&&s[i]instanceof r&&o(s[i]);else s instanceof r&&n!==s&&o(s)}function c(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}n({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},r("beforeInit",(()=>{if("undefined"!=typeof window&&("string"==typeof t.params.controller.control||t.params.controller.control instanceof HTMLElement)){const e=document.querySelector(t.params.controller.control);if(e&&e.swiper)t.controller.control=e.swiper;else if(e){const n=r=>{t.controller.control=r.detail[0],t.update(),e.removeEventListener("init",n)};e.addEventListener("init",n)}}else t.controller.control=t.params.controller.control})),r("update",(()=>{c()})),r("resize",(()=>{c()})),r("observerUpdate",(()=>{c()})),r("setTranslate",((e,n,r)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTranslate(n,r)})),r("setTransition",((e,n,r)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTransition(n,r)})),Object.assign(t.controller,{setTranslate:o,setTransition:l})}function tt(e){let{swiper:t,extendParams:n,on:r}=e;n({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let s=null;function i(e){const t=s;0!==t.length&&(t.innerHTML="",t.innerHTML=e)}const o=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function a(e){void 0===e&&(e=16);const t=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(e).replace(/x/g,t)}function l(e){(e=o(e)).forEach((e=>{e.setAttribute("tabIndex","0")}))}function c(e){(e=o(e)).forEach((e=>{e.setAttribute("tabIndex","-1")}))}function u(e,t){(e=o(e)).forEach((e=>{e.setAttribute("role",t)}))}function h(e,t){(e=o(e)).forEach((e=>{e.setAttribute("aria-roledescription",t)}))}function d(e,t){(e=o(e)).forEach((e=>{e.setAttribute("aria-controls",t)}))}function p(e,t){(e=o(e)).forEach((e=>{e.setAttribute("aria-label",t)}))}function f(e,t){(e=o(e)).forEach((e=>{e.setAttribute("id",t)}))}function m(e,t){(e=o(e)).forEach((e=>{e.setAttribute("aria-live",t)}))}function g(e){(e=o(e)).forEach((e=>{e.setAttribute("aria-disabled",!0)}))}function y(e){(e=o(e)).forEach((e=>{e.setAttribute("aria-disabled",!1)}))}function w(e){if(13!==e.keyCode&&32!==e.keyCode)return;const n=t.params.a11y,r=e.target;t.pagination&&t.pagination.el&&(r===t.pagination.el||t.pagination.el.contains(e.target))&&!e.target.matches(Xe(t.params.pagination.bulletClass))||(t.navigation&&t.navigation.nextEl&&r===t.navigation.nextEl&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?i(n.lastSlideMessage):i(n.nextSlideMessage)),t.navigation&&t.navigation.prevEl&&r===t.navigation.prevEl&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?i(n.firstSlideMessage):i(n.prevSlideMessage)),t.pagination&&r.matches(Xe(t.params.pagination.bulletClass))&&r.click())}function b(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{nextEl:e,prevEl:n}=t.navigation;n&&(t.isBeginning?(g(n),c(n)):(y(n),l(n))),e&&(t.isEnd?(g(e),c(e)):(y(e),l(e)))}function E(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function T(){return E()&&t.params.pagination.clickable}function I(){const e=t.params.a11y;E()&&t.pagination.bullets.forEach((n=>{t.params.pagination.clickable&&(l(n),t.params.pagination.renderBullet||(u(n,"button"),p(n,e.paginationBulletMessage.replace(/\{\{index\}\}/,S(n)+1)))),n.matches(Xe(t.params.pagination.bulletActiveClass))?n.setAttribute("aria-current","true"):n.removeAttribute("aria-current")}))}const C=(e,t,n)=>{l(e),"BUTTON"!==e.tagName&&(u(e,"button"),e.addEventListener("keydown",w)),p(e,n),d(e,t)},_=()=>{t.a11y.clicked=!0},A=()=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t.destroyed||(t.a11y.clicked=!1)}))}))},k=e=>{if(t.a11y.clicked)return;const n=e.target.closest(`.${t.params.slideClass}, swiper-slide`);if(!n||!t.slides.includes(n))return;const r=t.slides.indexOf(n)===t.activeIndex,s=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(n);r||s||e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(n),0))},x=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&h(t.slides,e.itemRoleDescriptionMessage),e.slideRole&&u(t.slides,e.slideRole);const n=t.slides.length;e.slideLabelMessage&&t.slides.forEach(((r,s)=>{const i=t.params.loop?parseInt(r.getAttribute("data-swiper-slide-index"),10):s;p(r,e.slideLabelMessage.replace(/\{\{index\}\}/,i+1).replace(/\{\{slidesLength\}\}/,n))}))},M=()=>{const e=t.params.a11y;t.isElement?t.el.shadowEl.append(s):t.el.append(s);const n=t.el;e.containerRoleDescriptionMessage&&h(n,e.containerRoleDescriptionMessage),e.containerMessage&&p(n,e.containerMessage);const r=t.wrapperEl,i=e.id||r.getAttribute("id")||`swiper-wrapper-${a(16)}`,l=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";f(r,i),m(r,l),x();let{nextEl:c,prevEl:u}=t.navigation?t.navigation:{};c=o(c),u=o(u),c&&c.forEach((t=>C(t,i,e.nextSlideMessage))),u&&u.forEach((t=>C(t,i,e.prevSlideMessage))),T()&&(Array.isArray(t.pagination.el)?t.pagination.el:[t.pagination.el]).forEach((e=>{e.addEventListener("keydown",w)})),t.el.addEventListener("focus",k,!0),t.el.addEventListener("pointerdown",_,!0),t.el.addEventListener("pointerup",A,!0)};function L(){s&&s.remove();let{nextEl:e,prevEl:n}=t.navigation?t.navigation:{};e=o(e),n=o(n),e&&e.forEach((e=>e.removeEventListener("keydown",w))),n&&n.forEach((e=>e.removeEventListener("keydown",w))),T()&&(Array.isArray(t.pagination.el)?t.pagination.el:[t.pagination.el]).forEach((e=>{e.removeEventListener("keydown",w)})),t.el.removeEventListener("focus",k,!0),t.el.removeEventListener("pointerdown",_,!0),t.el.removeEventListener("pointerup",A,!0)}r("beforeInit",(()=>{s=v("span",t.params.a11y.notificationClass),s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true")})),r("afterInit",(()=>{t.params.a11y.enabled&&M()})),r("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&x()})),r("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&b()})),r("paginationUpdate",(()=>{t.params.a11y.enabled&&I()})),r("destroy",(()=>{t.params.a11y.enabled&&L()}))}function nt(e){let{swiper:t,extendParams:n,on:r}=e;n({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let s=!1,o={};const a=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),l=e=>{const t=i();let n;n=e?new URL(e):t.location;const r=n.pathname.slice(1).split("/").filter((e=>""!==e)),s=r.length;return{key:r[s-2],value:r[s-1]}},c=(e,n)=>{const r=i();if(!s||!t.params.history.enabled)return;let o;o=t.params.url?new URL(t.params.url):r.location;const l=t.slides[n];let c=a(l.getAttribute("data-history"));if(t.params.history.root.length>0){let n=t.params.history.root;"/"===n[n.length-1]&&(n=n.slice(0,n.length-1)),c=`${n}/${e?`${e}/`:""}${c}`}else o.pathname.includes(e)||(c=`${e?`${e}/`:""}${c}`);t.params.history.keepQuery&&(c+=o.search);const u=r.history.state;u&&u.value===c||(t.params.history.replaceState?r.history.replaceState({value:c},null,c):r.history.pushState({value:c},null,c))},u=(e,n,r)=>{if(n)for(let s=0,i=t.slides.length;s<i;s+=1){const i=t.slides[s];if(a(i.getAttribute("data-history"))===n){const n=t.getSlideIndex(i);t.slideTo(n,e,r)}}else t.slideTo(0,e,r)},h=()=>{o=l(t.params.url),u(t.params.speed,o.value,!1)},d=()=>{const e=i();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);s=!0,o=l(t.params.url),o.key||o.value?(u(0,o.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",h)):t.params.history.replaceState||e.addEventListener("popstate",h)}},p=()=>{const e=i();t.params.history.replaceState||e.removeEventListener("popstate",h)};r("init",(()=>{t.params.history.enabled&&d()})),r("destroy",(()=>{t.params.history.enabled&&p()})),r("transitionEnd _freeModeNoMomentumRelease",(()=>{s&&c(t.params.history.key,t.activeIndex)})),r("slideChange",(()=>{s&&t.params.cssMode&&c(t.params.history.key,t.activeIndex)}))}function rt(e){let{swiper:t,extendParams:n,emit:s,on:o}=e,a=!1;const l=r(),c=i();n({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(e,n){if(t.virtual&&t.params.virtual.enabled){const e=t.slides.filter((e=>e.getAttribute("data-hash")===n))[0];return e?parseInt(e.getAttribute("data-swiper-slide-index"),10):0}return t.getSlideIndex(y(t.slidesEl,`.${t.params.slideClass}[data-hash="${n}"], swiper-slide[data-hash="${n}"]`)[0])}}});const u=()=>{s("hashChange");const e=l.location.hash.replace("#",""),n=t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`);if(e!==(n?n.getAttribute("data-hash"):"")){const n=t.params.hashNavigation.getSlideIndex(t,e);if(void 0===n||Number.isNaN(n))return;t.slideTo(n)}},h=()=>{if(!a||!t.params.hashNavigation.enabled)return;const e=t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`),n=e?e.getAttribute("data-hash")||e.getAttribute("data-history"):"";t.params.hashNavigation.replaceState&&c.history&&c.history.replaceState?(c.history.replaceState(null,null,`#${n}`||""),s("hashSet")):(l.location.hash=n||"",s("hashSet"))},d=()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;a=!0;const e=l.location.hash.replace("#","");if(e){const n=0,r=t.params.hashNavigation.getSlideIndex(t,e);t.slideTo(r||0,n,t.params.runCallbacksOnInit,!0)}t.params.hashNavigation.watchState&&c.addEventListener("hashchange",u)},p=()=>{t.params.hashNavigation.watchState&&c.removeEventListener("hashchange",u)};o("init",(()=>{t.params.hashNavigation.enabled&&d()})),o("destroy",(()=>{t.params.hashNavigation.enabled&&p()})),o("transitionEnd _freeModeNoMomentumRelease",(()=>{a&&h()})),o("slideChange",(()=>{a&&t.params.cssMode&&h()}))}function st(e){let t,n,{swiper:s,extendParams:i,on:o,emit:a,params:l}=e;s.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let c,u,h,d,p,f,m,g=l&&l.autoplay?l.autoplay.delay:3e3,y=l&&l.autoplay?l.autoplay.delay:3e3,v=(new Date).getTime;function w(e){s&&!s.destroyed&&s.wrapperEl&&e.target===s.wrapperEl&&(s.wrapperEl.removeEventListener("transitionend",w),_())}const b=()=>{if(s.destroyed||!s.autoplay.running)return;s.autoplay.paused?u=!0:u&&(y=c,u=!1);const e=s.autoplay.paused?c:v+y-(new Date).getTime();s.autoplay.timeLeft=e,a("autoplayTimeLeft",e,e/g),n=requestAnimationFrame((()=>{b()}))},E=()=>{let e;if(e=s.virtual&&s.params.virtual.enabled?s.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:s.slides[s.activeIndex],e)return parseInt(e.getAttribute("data-swiper-autoplay"),10)},T=e=>{if(s.destroyed||!s.autoplay.running)return;cancelAnimationFrame(n),b();let r=void 0===e?s.params.autoplay.delay:e;g=s.params.autoplay.delay,y=s.params.autoplay.delay;const i=E();!Number.isNaN(i)&&i>0&&void 0===e&&(r=i,g=i,y=i),c=r;const o=s.params.speed,l=()=>{s&&!s.destroyed&&(s.params.autoplay.reverseDirection?!s.isBeginning||s.params.loop||s.params.rewind?(s.slidePrev(o,!0,!0),a("autoplay")):s.params.autoplay.stopOnLastSlide||(s.slideTo(s.slides.length-1,o,!0,!0),a("autoplay")):!s.isEnd||s.params.loop||s.params.rewind?(s.slideNext(o,!0,!0),a("autoplay")):s.params.autoplay.stopOnLastSlide||(s.slideTo(0,o,!0,!0),a("autoplay")),s.params.cssMode&&(v=(new Date).getTime(),requestAnimationFrame((()=>{T()}))))};return r>0?(clearTimeout(t),t=setTimeout((()=>{l()}),r)):requestAnimationFrame((()=>{l()})),r},S=()=>{s.autoplay.running=!0,T(),a("autoplayStart")},I=()=>{s.autoplay.running=!1,clearTimeout(t),cancelAnimationFrame(n),a("autoplayStop")},C=(e,n)=>{if(s.destroyed||!s.autoplay.running)return;clearTimeout(t),e||(m=!0);const r=()=>{a("autoplayPause"),s.params.autoplay.waitForTransition?s.wrapperEl.addEventListener("transitionend",w):_()};if(s.autoplay.paused=!0,n)return f&&(c=s.params.autoplay.delay),f=!1,void r();const i=c||s.params.autoplay.delay;c=i-((new Date).getTime()-v),s.isEnd&&c<0&&!s.params.loop||(c<0&&(c=0),r())},_=()=>{s.isEnd&&c<0&&!s.params.loop||s.destroyed||!s.autoplay.running||(v=(new Date).getTime(),m?(m=!1,T(c)):T(),s.autoplay.paused=!1,a("autoplayResume"))},A=()=>{if(s.destroyed||!s.autoplay.running)return;const e=r();"hidden"===e.visibilityState&&(m=!0,C(!0)),"visible"===e.visibilityState&&_()},k=e=>{"mouse"===e.pointerType&&(m=!0,C(!0))},x=e=>{"mouse"===e.pointerType&&s.autoplay.paused&&_()},M=()=>{s.params.autoplay.pauseOnMouseEnter&&(s.el.addEventListener("pointerenter",k),s.el.addEventListener("pointerleave",x))},L=()=>{s.el.removeEventListener("pointerenter",k),s.el.removeEventListener("pointerleave",x)},O=()=>{r().addEventListener("visibilitychange",A)},R=()=>{r().removeEventListener("visibilitychange",A)};o("init",(()=>{s.params.autoplay.enabled&&(M(),O(),v=(new Date).getTime(),S())})),o("destroy",(()=>{L(),R(),s.autoplay.running&&I()})),o("beforeTransitionStart",((e,t,n)=>{!s.destroyed&&s.autoplay.running&&(n||!s.params.autoplay.disableOnInteraction?C(!0,!0):I())})),o("sliderFirstMove",(()=>{!s.destroyed&&s.autoplay.running&&(s.params.autoplay.disableOnInteraction?I():(h=!0,d=!1,m=!1,p=setTimeout((()=>{m=!0,d=!0,C(!0)}),200)))})),o("touchEnd",(()=>{if(!s.destroyed&&s.autoplay.running&&h){if(clearTimeout(p),clearTimeout(t),s.params.autoplay.disableOnInteraction)return d=!1,void(h=!1);d&&s.params.cssMode&&_(),d=!1,h=!1}})),o("slideChange",(()=>{!s.destroyed&&s.autoplay.running&&(f=!0)})),Object.assign(s.autoplay,{start:S,stop:I,pause:C,resume:_})}function it(e){let{swiper:t,extendParams:n,on:s}=e;n({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,o=!1;function a(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const n=e.clickedIndex,r=e.clickedSlide;if(r&&r.classList.contains(t.params.thumbs.slideThumbActiveClass))return;if(null==n)return;let s;s=e.params.loop?parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10):n,t.params.loop?t.slideToLoop(s):t.slideTo(s)}function l(){const{thumbs:e}=t.params;if(i)return!1;i=!0;const n=t.constructor;if(e.swiper instanceof n)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper.update();else if(h(e.swiper)){const r=Object.assign({},e.swiper);Object.assign(r,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new n(r),o=!0}return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",a),!0}function c(e){const n=t.thumbs.swiper;if(!n||n.destroyed)return;const r="auto"===n.params.slidesPerView?n.slidesPerViewDynamic():n.params.slidesPerView;let s=1;const i=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(s=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(s=1),s=Math.floor(s),n.slides.forEach((e=>e.classList.remove(i))),n.params.loop||n.params.virtual&&n.params.virtual.enabled)for(let e=0;e<s;e+=1)y(n.slidesEl,`[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e=>{e.classList.add(i)}));else for(let e=0;e<s;e+=1)n.slides[t.realIndex+e]&&n.slides[t.realIndex+e].classList.add(i);const o=t.params.thumbs.autoScrollOffset,a=o&&!n.params.loop;if(t.realIndex!==n.realIndex||a){const s=n.activeIndex;let i,l;if(n.params.loop){const e=n.slides.filter((e=>e.getAttribute("data-swiper-slide-index")===`${t.realIndex}`))[0];i=n.slides.indexOf(e),l=t.activeIndex>t.previousIndex?"next":"prev"}else i=t.realIndex,l=i>t.previousIndex?"next":"prev";a&&(i+="next"===l?o:-1*o),n.visibleSlidesIndexes&&n.visibleSlidesIndexes.indexOf(i)<0&&(n.params.centeredSlides?i=i>s?i-Math.floor(r/2)+1:i+Math.floor(r/2)-1:i>s&&n.params.slidesPerGroup,n.slideTo(i,e?0:void 0))}}t.thumbs={swiper:null},s("beforeInit",(()=>{const{thumbs:e}=t.params;if(e&&e.swiper)if("string"==typeof e.swiper||e.swiper instanceof HTMLElement){const n=r(),s=()=>{const r="string"==typeof e.swiper?n.querySelector(e.swiper):e.swiper;if(r&&r.swiper)e.swiper=r.swiper,l(),c(!0);else if(r){const n=s=>{e.swiper=s.detail[0],r.removeEventListener("init",n),l(),c(!0),e.swiper.update(),t.update()};r.addEventListener("init",n)}return r},i=()=>{t.destroyed||s()||requestAnimationFrame(i)};requestAnimationFrame(i)}else l(),c(!0)})),s("slideChange update resize observerUpdate",(()=>{c()})),s("setTransition",((e,n)=>{const r=t.thumbs.swiper;r&&!r.destroyed&&r.setTransition(n)})),s("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&o&&e.destroy()})),Object.assign(t.thumbs,{init:l,update:c})}function ot(e){let{swiper:t,extendParams:n,emit:r,once:s}=e;function i(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})}function o(){const{touchEventsData:e,touches:n}=t;0===e.velocities.length&&e.velocities.push({position:n[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:n[t.isHorizontal()?"currentX":"currentY"],time:l()})}function a(e){let{currentPos:n}=e;const{params:i,wrapperEl:o,rtlTranslate:a,snapGrid:c,touchEventsData:u}=t,h=l()-u.touchStartTime;if(n<-t.minTranslate())t.slideTo(t.activeIndex);else if(n>-t.maxTranslate())t.slides.length<c.length?t.slideTo(c.length-1):t.slideTo(t.slides.length-1);else{if(i.freeMode.momentum){if(u.velocities.length>1){const e=u.velocities.pop(),n=u.velocities.pop(),r=e.position-n.position,s=e.time-n.time;t.velocity=r/s,t.velocity/=2,Math.abs(t.velocity)<i.freeMode.minimumVelocity&&(t.velocity=0),(s>150||l()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeMode.momentumVelocityRatio,u.velocities.length=0;let e=1e3*i.freeMode.momentumRatio;const n=t.velocity*e;let h=t.translate+n;a&&(h=-h);let d,p=!1;const f=20*Math.abs(t.velocity)*i.freeMode.momentumBounceRatio;let m;if(h<t.maxTranslate())i.freeMode.momentumBounce?(h+t.maxTranslate()<-f&&(h=t.maxTranslate()-f),d=t.maxTranslate(),p=!0,u.allowMomentumBounce=!0):h=t.maxTranslate(),i.loop&&i.centeredSlides&&(m=!0);else if(h>t.minTranslate())i.freeMode.momentumBounce?(h-t.minTranslate()>f&&(h=t.minTranslate()+f),d=t.minTranslate(),p=!0,u.allowMomentumBounce=!0):h=t.minTranslate(),i.loop&&i.centeredSlides&&(m=!0);else if(i.freeMode.sticky){let e;for(let t=0;t<c.length;t+=1)if(c[t]>-h){e=t;break}h=Math.abs(c[e]-h)<Math.abs(c[e-1]-h)||"next"===t.swipeDirection?c[e]:c[e-1],h=-h}if(m&&s("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=a?Math.abs((-h-t.translate)/t.velocity):Math.abs((h-t.translate)/t.velocity),i.freeMode.sticky){const n=Math.abs((a?-h:h)-t.translate),r=t.slidesSizesGrid[t.activeIndex];e=n<r?i.speed:n<2*r?1.5*i.speed:2.5*i.speed}}else if(i.freeMode.sticky)return void t.slideToClosest();i.freeMode.momentumBounce&&p?(t.updateProgress(d),t.setTransition(e),t.setTranslate(h),t.transitionStart(!0,t.swipeDirection),t.animating=!0,C(o,(()=>{t&&!t.destroyed&&u.allowMomentumBounce&&(r("momentumBounce"),t.setTransition(i.speed),setTimeout((()=>{t.setTranslate(d),C(o,(()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(r("_freeModeNoMomentumRelease"),t.updateProgress(h),t.setTransition(e),t.setTranslate(h),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,C(o,(()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(h),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(i.freeMode.sticky)return void t.slideToClosest();i.freeMode&&r("_freeModeNoMomentumRelease")}(!i.freeMode.momentum||h>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}n({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:i,onTouchMove:o,onTouchEnd:a}})}function at(e){let t,n,r,{swiper:s,extendParams:i}=e;i({grid:{rows:1,fill:"column"}});const o=()=>{let e=s.params.spaceBetween;return"string"==typeof e&&e.indexOf("%")>=0?e=parseFloat(e.replace("%",""))/100*s.size:"string"==typeof e&&(e=parseFloat(e)),e},a=e=>{const{slidesPerView:i}=s.params,{rows:o,fill:a}=s.params.grid;n=t/o,r=Math.floor(e/o),t=Math.floor(e/o)===e/o?e:Math.ceil(e/o)*o,"auto"!==i&&"row"===a&&(t=Math.max(t,i*o))},l=(e,i,a,l)=>{const{slidesPerGroup:c}=s.params,u=o(),{rows:h,fill:d}=s.params.grid;let p,f,m;if("row"===d&&c>1){const n=Math.floor(e/(c*h)),r=e-h*c*n,s=0===n?c:Math.min(Math.ceil((a-n*h*c)/h),c);m=Math.floor(r/s),f=r-m*s+n*c,p=f+m*t/h,i.style.order=p}else"column"===d?(f=Math.floor(e/h),m=e-f*h,(f>r||f===r&&m===h-1)&&(m+=1,m>=h&&(m=0,f+=1))):(m=Math.floor(e/n),f=e-m*n);i.style[l("margin-top")]=0!==m?u&&`${u}px`:""},c=(e,n,r)=>{const{centeredSlides:i,roundLengths:a}=s.params,l=o(),{rows:c}=s.params.grid;if(s.virtualSize=(e+l)*t,s.virtualSize=Math.ceil(s.virtualSize/c)-l,s.wrapperEl.style[r("width")]=`${s.virtualSize+l}px`,i){const e=[];for(let t=0;t<n.length;t+=1){let r=n[t];a&&(r=Math.floor(r)),n[t]<s.virtualSize+n[0]&&e.push(r)}n.splice(0,n.length),n.push(...e)}};s.grid={initSlides:a,updateSlide:l,updateWrapperSize:c}}function lt(e){const t=this,{params:n,slidesEl:r}=t;n.loop&&t.loopDestroy();const s=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,r.append(t.children[0]),t.innerHTML=""}else r.append(e)};if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s(e[t]);else s(e);t.recalcSlides(),n.loop&&t.loopCreate(),n.observer&&!t.isElement||t.update()}function ct(e){const t=this,{params:n,activeIndex:r,slidesEl:s}=t;n.loop&&t.loopDestroy();let i=r+1;const o=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,s.prepend(t.children[0]),t.innerHTML=""}else s.prepend(e)};if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&o(e[t]);i=r+e.length}else o(e);t.recalcSlides(),n.loop&&t.loopCreate(),n.observer&&!t.isElement||t.update(),t.slideTo(i,0,!1)}function ut(e,t){const n=this,{params:r,activeIndex:s,slidesEl:i}=n;let o=s;r.loop&&(o-=n.loopedSlides,n.loopDestroy(),n.recalcSlides());const a=n.slides.length;if(e<=0)return void n.prependSlide(t);if(e>=a)return void n.appendSlide(t);let l=o>e?o+1:o;const c=[];for(let t=a-1;t>=e;t-=1){const e=n.slides[t];e.remove(),c.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&i.append(t[e]);l=o>e?o+t.length:o}else i.append(t);for(let e=0;e<c.length;e+=1)i.append(c[e]);n.recalcSlides(),r.loop&&n.loopCreate(),r.observer&&!n.isElement||n.update(),r.loop?n.slideTo(l+n.loopedSlides,0,!1):n.slideTo(l,0,!1)}function ht(e){const t=this,{params:n,activeIndex:r}=t;let s=r;n.loop&&(s-=t.loopedSlides,t.loopDestroy());let i,o=s;if("object"==typeof e&&"length"in e){for(let n=0;n<e.length;n+=1)i=e[n],t.slides[i]&&t.slides[i].remove(),i<o&&(o-=1);o=Math.max(o,0)}else i=e,t.slides[i]&&t.slides[i].remove(),i<o&&(o-=1),o=Math.max(o,0);t.recalcSlides(),n.loop&&t.loopCreate(),n.observer&&!t.isElement||t.update(),n.loop?t.slideTo(o+t.loopedSlides,0,!1):t.slideTo(o,0,!1)}function dt(){const e=this,t=[];for(let n=0;n<e.slides.length;n+=1)t.push(n);e.removeSlide(t)}function pt(e){let{swiper:t}=e;Object.assign(t,{appendSlide:lt.bind(t),prependSlide:ct.bind(t),addSlide:ut.bind(t),removeSlide:ht.bind(t),removeAllSlides:dt.bind(t)})}function ft(e){const{effect:t,swiper:n,on:r,setTranslate:s,setTransition:i,overwriteParams:o,perspective:a,recreateShadows:l,getEffectParams:c}=e;let u;r("beforeInit",(()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),a&&a()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const e=o?o():{};Object.assign(n.params,e),Object.assign(n.originalParams,e)})),r("setTranslate",(()=>{n.params.effect===t&&s()})),r("setTransition",((e,r)=>{n.params.effect===t&&i(r)})),r("transitionEnd",(()=>{if(n.params.effect===t&&l){if(!c||!c().slideShadows)return;n.slides.forEach((e=>{e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e=>e.remove()))})),l()}})),r("virtualUpdate",(()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame((()=>{u&&n.slides&&n.slides.length&&(s(),u=!1)})))}))}function mt(e,t){const n=g(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function gt(e){let{swiper:t,duration:n,transformElements:r,allSlides:s}=e;const{activeIndex:i}=t,o=e=>e.parentElement?e.parentElement:t.slides.filter((t=>t.shadowEl&&t.shadowEl===e.parentNode))[0];if(t.params.virtualTranslate&&0!==n){let e,n=!1;e=s?r:r.filter((e=>{const n=e.classList.contains("swiper-slide-transform")?o(e):e;return t.getSlideIndex(n)===i})),e.forEach((e=>{C(e,(()=>{if(n)return;if(!t||t.destroyed)return;n=!0,t.animating=!1;const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(e)}))}))}}function yt(e){let{swiper:t,extendParams:n,on:r}=e;n({fadeEffect:{crossFade:!1}});const s=()=>{const{slides:e}=t,n=t.params.fadeEffect;for(let r=0;r<e.length;r+=1){const e=t.slides[r];let s=-e.swiperSlideOffset;t.params.virtualTranslate||(s-=t.translate);let i=0;t.isHorizontal()||(i=s,s=0);const o=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e.progress),0):1+Math.min(Math.max(e.progress,-1),0),a=mt(n,e);a.style.opacity=o,a.style.transform=`translate3d(${s}px, ${i}px, 0px)`}},i=e=>{const n=t.slides.map((e=>g(e)));n.forEach((t=>{t.style.transitionDuration=`${e}ms`})),gt({swiper:t,duration:e,transformElements:n,allSlides:!0})};ft({effect:"fade",swiper:t,on:r,setTranslate:s,setTransition:i,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})}function vt(e){let{swiper:t,extendParams:n,on:r}=e;n({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const s=(e,t,n)=>{let r=n?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),s=n?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");r||(r=v("div","swiper-slide-shadow-"+(n?"left":"top")),e.append(r)),s||(s=v("div","swiper-slide-shadow-"+(n?"right":"bottom")),e.append(s)),r&&(r.style.opacity=Math.max(-t,0)),s&&(s.style.opacity=Math.max(t,0))},i=()=>{const e=t.isHorizontal();t.slides.forEach((t=>{const n=Math.max(Math.min(t.progress,1),-1);s(t,n,e)}))},o=()=>{const{el:e,wrapperEl:n,slides:r,width:i,height:o,rtlTranslate:a,size:l,browser:c}=t,u=t.params.cubeEffect,h=t.isHorizontal(),d=t.virtual&&t.params.virtual.enabled;let p,f=0;u.shadow&&(h?(p=t.slidesEl.querySelector(".swiper-cube-shadow"),p||(p=v("div","swiper-cube-shadow"),t.slidesEl.append(p)),p.style.height=`${i}px`):(p=e.querySelector(".swiper-cube-shadow"),p||(p=v("div","swiper-cube-shadow"),e.append(p))));for(let e=0;e<r.length;e+=1){const t=r[e];let n=e;d&&(n=parseInt(t.getAttribute("data-swiper-slide-index"),10));let i=90*n,o=Math.floor(i/360);a&&(i=-i,o=Math.floor(-i/360));const c=Math.max(Math.min(t.progress,1),-1);let p=0,m=0,g=0;n%4==0?(p=4*-o*l,g=0):(n-1)%4==0?(p=0,g=4*-o*l):(n-2)%4==0?(p=l+4*o*l,g=l):(n-3)%4==0&&(p=-l,g=3*l+4*l*o),a&&(p=-p),h||(m=p,p=0);const y=`rotateX(${h?0:-i}deg) rotateY(${h?i:0}deg) translate3d(${p}px, ${m}px, ${g}px)`;c<=1&&c>-1&&(f=90*n+90*c,a&&(f=90*-n-90*c)),t.style.transform=y,u.slideShadows&&s(t,c,h)}if(n.style.transformOrigin=`50% 50% -${l/2}px`,n.style["-webkit-transform-origin"]=`50% 50% -${l/2}px`,u.shadow)if(h)p.style.transform=`translate3d(0px, ${i/2+u.shadowOffset}px, ${-i/2}px) rotateX(90deg) rotateZ(0deg) scale(${u.shadowScale})`;else{const e=Math.abs(f)-90*Math.floor(Math.abs(f)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),n=u.shadowScale,r=u.shadowScale/t,s=u.shadowOffset;p.style.transform=`scale3d(${n}, 1, ${r}) translate3d(0px, ${o/2+s}px, ${-o/2/r}px) rotateX(-90deg)`}const m=(c.isSafari||c.isWebView)&&c.needPerspectiveFix?-l/2:0;n.style.transform=`translate3d(0px,0,${m}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`,n.style.setProperty("--swiper-cube-translate-z",`${m}px`)},a=e=>{const{el:n,slides:r}=t;if(r.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),t.params.cubeEffect.shadow&&!t.isHorizontal()){const t=n.querySelector(".swiper-cube-shadow");t&&(t.style.transitionDuration=`${e}ms`)}};ft({effect:"cube",swiper:t,on:r,setTranslate:o,setTransition:a,recreateShadows:i,getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function wt(e,t,n){const r="swiper-slide-shadow"+(n?`-${n}`:""),s=g(t);let i=s.querySelector(`.${r}`);return i||(i=v("div","swiper-slide-shadow"+(n?`-${n}`:"")),s.append(i)),i}function bt(e){let{swiper:t,extendParams:n,on:r}=e;n({flipEffect:{slideShadows:!0,limitRotation:!0}});const s=(e,n,r)=>{let s=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),i=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");s||(s=wt(r,e,t.isHorizontal()?"left":"top")),i||(i=wt(r,e,t.isHorizontal()?"right":"bottom")),s&&(s.style.opacity=Math.max(-n,0)),i&&(i.style.opacity=Math.max(n,0))},i=()=>{const e=t.params.flipEffect;t.slides.forEach((n=>{let r=n.progress;t.params.flipEffect.limitRotation&&(r=Math.max(Math.min(n.progress,1),-1)),s(n,r,e)}))},o=()=>{const{slides:e,rtlTranslate:n}=t,r=t.params.flipEffect;for(let i=0;i<e.length;i+=1){const o=e[i];let a=o.progress;t.params.flipEffect.limitRotation&&(a=Math.max(Math.min(o.progress,1),-1));const l=o.swiperSlideOffset;let c=-180*a,u=0,h=t.params.cssMode?-l-t.translate:-l,d=0;t.isHorizontal()?n&&(c=-c):(d=h,h=0,u=-c,c=0),o.style.zIndex=-Math.abs(Math.round(a))+e.length,r.slideShadows&&s(o,a,r);const p=`translate3d(${h}px, ${d}px, 0px) rotateX(${u}deg) rotateY(${c}deg)`;mt(r,o).style.transform=p}},a=e=>{const n=t.slides.map((e=>g(e)));n.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),gt({swiper:t,duration:e,transformElements:n})};ft({effect:"flip",swiper:t,on:r,setTranslate:o,setTransition:a,recreateShadows:i,getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})}function Et(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}});const s=()=>{const{width:e,height:n,slides:r,slidesSizesGrid:s}=t,i=t.params.coverflowEffect,o=t.isHorizontal(),a=t.translate,l=o?e/2-a:n/2-a,c=o?i.rotate:-i.rotate,u=i.depth;for(let e=0,t=r.length;e<t;e+=1){const t=r[e],n=s[e],a=(l-t.swiperSlideOffset-n/2)/n,h="function"==typeof i.modifier?i.modifier(a):a*i.modifier;let d=o?c*h:0,p=o?0:c*h,f=-u*Math.abs(h),m=i.stretch;"string"==typeof m&&-1!==m.indexOf("%")&&(m=parseFloat(i.stretch)/100*n);let g=o?0:m*h,y=o?m*h:0,v=1-(1-i.scale)*Math.abs(h);Math.abs(y)<.001&&(y=0),Math.abs(g)<.001&&(g=0),Math.abs(f)<.001&&(f=0),Math.abs(d)<.001&&(d=0),Math.abs(p)<.001&&(p=0),Math.abs(v)<.001&&(v=0);const w=`translate3d(${y}px,${g}px,${f}px)  rotateX(${p}deg) rotateY(${d}deg) scale(${v})`;if(mt(i,t).style.transform=w,t.style.zIndex=1-Math.abs(Math.round(h)),i.slideShadows){let e=o?t.querySelector(".swiper-slide-shadow-left"):t.querySelector(".swiper-slide-shadow-top"),n=o?t.querySelector(".swiper-slide-shadow-right"):t.querySelector(".swiper-slide-shadow-bottom");e||(e=wt(i,t,o?"left":"top")),n||(n=wt(i,t,o?"right":"bottom")),e&&(e.style.opacity=h>0?h:0),n&&(n.style.opacity=-h>0?-h:0)}}},i=e=>{t.slides.map((e=>g(e))).forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))}))};ft({effect:"coverflow",swiper:t,on:r,setTranslate:s,setTransition:i,perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Tt(e){let{swiper:t,extendParams:n,on:r}=e;n({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const s=e=>"string"==typeof e?e:`${e}px`,i=()=>{const{slides:e,wrapperEl:n,slidesSizesGrid:r}=t,i=t.params.creativeEffect,{progressMultiplier:o}=i,a=t.params.centeredSlides;if(a){const e=r[0]/2-t.params.slidesOffsetBefore||0;n.style.transform=`translateX(calc(50% - ${e}px))`}for(let n=0;n<e.length;n+=1){const r=e[n],l=r.progress,c=Math.min(Math.max(r.progress,-i.limitProgress),i.limitProgress);let u=c;a||(u=Math.min(Math.max(r.originalProgress,-i.limitProgress),i.limitProgress));const h=r.swiperSlideOffset,d=[t.params.cssMode?-h-t.translate:-h,0,0],p=[0,0,0];let f=!1;t.isHorizontal()||(d[1]=d[0],d[0]=0);let m={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};c<0?(m=i.next,f=!0):c>0&&(m=i.prev,f=!0),d.forEach(((e,t)=>{d[t]=`calc(${e}px + (${s(m.translate[t])} * ${Math.abs(c*o)}))`})),p.forEach(((e,t)=>{p[t]=m.rotate[t]*Math.abs(c*o)})),r.style.zIndex=-Math.abs(Math.round(l))+e.length;const g=d.join(", "),y=`rotateX(${p[0]}deg) rotateY(${p[1]}deg) rotateZ(${p[2]}deg)`,v=u<0?`scale(${1+(1-m.scale)*u*o})`:`scale(${1-(1-m.scale)*u*o})`,w=u<0?1+(1-m.opacity)*u*o:1-(1-m.opacity)*u*o,b=`translate3d(${g}) ${y} ${v}`;if(f&&m.shadow||!f){let e=r.querySelector(".swiper-slide-shadow");if(!e&&m.shadow&&(e=wt(i,r)),e){const t=i.shadowPerProgress?c*(1/i.limitProgress):c;e.style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const E=mt(i,r);E.style.transform=b,E.style.opacity=w,m.origin&&(E.style.transformOrigin=m.origin)}},o=e=>{const n=t.slides.map((e=>g(e)));n.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),gt({swiper:t,duration:e,transformElements:n,allSlides:!0})};ft({effect:"creative",swiper:t,on:r,setTranslate:i,setTransition:o,perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}function St(e){let{swiper:t,extendParams:n,on:r}=e;n({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}});const s=()=>{const{slides:e,activeIndex:n}=t,r=t.params.cardsEffect,{startTranslate:s,isTouched:i}=t.touchEventsData,o=t.translate;for(let a=0;a<e.length;a+=1){const l=e[a],c=l.progress,u=Math.min(Math.max(c,-4),4);let h=l.swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&(t.wrapperEl.style.transform=`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(h-=e[0].swiperSlideOffset);let d=t.params.cssMode?-h-t.translate:-h,p=0;const f=-100*Math.abs(u);let m=1,g=-r.perSlideRotate*u,y=r.perSlideOffset-.75*Math.abs(u);const v=t.virtual&&t.params.virtual.enabled?t.virtual.from+a:a,w=(v===n||v===n-1)&&u>0&&u<1&&(i||t.params.cssMode)&&o<s,b=(v===n||v===n+1)&&u<0&&u>-1&&(i||t.params.cssMode)&&o>s;if(w||b){const e=(1-Math.abs((Math.abs(u)-.5)/.5))**.5;g+=-28*u*e,m+=-.5*e,y+=96*e,p=-25*e*Math.abs(u)+"%"}if(d=u<0?`calc(${d}px + (${y*Math.abs(u)}%))`:u>0?`calc(${d}px + (-${y*Math.abs(u)}%))`:`${d}px`,!t.isHorizontal()){const e=p;p=d,d=e}const E=u<0?""+(1+(1-m)*u):""+(1-(1-m)*u),T=`\n        translate3d(${d}, ${p}, ${f}px)\n        rotateZ(${r.rotate?g:0}deg)\n        scale(${E})\n      `;if(r.slideShadows){let e=l.querySelector(".swiper-slide-shadow");e||(e=wt(r,l)),e&&(e.style.opacity=Math.min(Math.max((Math.abs(u)-.5)/.5,0),1))}l.style.zIndex=-Math.abs(Math.round(c))+e.length,mt(r,l).style.transform=T}},i=e=>{const n=t.slides.map((e=>g(e)));n.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),gt({swiper:t,duration:e,transformElements:n})};ft({effect:"cards",swiper:t,on:r,setTranslate:s,setTransition:i,perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}Object.keys($e).forEach((e=>{Object.keys($e[e]).forEach((t=>{je.prototype[t]=$e[e][t]}))})),je.use([P,F]);const It=[qe,He,Ge,Ke,Ye,Qe,Je,Ze,et,tt,nt,rt,st,it,ot,at,pt,yt,vt,bt,Et,Tt,St];return je.use(It),je}(),window.innerWidth<=768){new(n(bb))(".swiper",{direction:"vertical",loop:!0,slidesPerView:4,spaceBetween:20,navigation:{nextEl:".swiper-button",prevEl:".swiper-button-prev"},cover:!0})}else{const e=document.querySelector(".support__button"),t=document.querySelector(".support"),n=document.querySelector(".swiper"),r=document.querySelector(".support__button--icon");e.addEventListener("click",(function(){e.classList.contains("lock")?(e.classList.remove("lock"),t.classList.add("support--tablet"),n.classList.add("swiper--tablet"),r.classList.add("up"),e.blur()):(e.classList.add("lock"),t.classList.remove("support--tablet"),n.classList.remove("swiper--tablet"),r.classList.remove("up"),e.blur())}))}var Eb,Tb={fetchBookById:async function(e){return await fetch(`https://books-backend.p.goit.global/books//${e}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}};Eb=new URL(i("kyEFX").resolve("fGJyr"),import.meta.url).toString();var Sb;Sb=new URL(i("kyEFX").resolve("1HTp7"),import.meta.url).toString();var Ib;Ib=new URL(i("kyEFX").resolve("aSJpf"),import.meta.url).toString();const Cb={div:document.querySelector(".bookShell"),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),bookCard:document.querySelector(".js-book-card"),shoppingListBtn:document.querySelector('[data-action="shopping-list-modal"]'),text:document.querySelector(".js-modal-text")};let _b={};const Ab=localStorage.getItem("info-shopping-list");let kb=JSON.parse(Ab)||[];function xb(){window.removeEventListener("keydown",Mb),document.body.classList.remove("js-show-modal")}function Mb(e){"Escape"===e.code&&xb()}function Lb(e){const{book_image:t,author:r,title:s,description:i,buy_links:o,_id:a,list_name:l}=e;_b.bookId=a,_b.bookAuthor=r,_b.bookTitle=s,_b.bookDescription=i,_b.bookCategory=l,_b.bookImage=t,_b.bookAmazon=o[0].url,_b.bookOpenBook=o[1].url,_b.bookShop=o[4].url;const c=`<img class="book-image"" src="${t}" alt="${s}" loading="lazy" data-id="${a}"/>\n    <div class="book-description-thumb">\n    <p class="book-title">${s}</p>\n    <p class="book-author">${r}</p>\n    <p class="book-description">${i}</p>\n    <div class="book-links">\n    <a class="book-buy-url" href="${o[0].url}" target="_blank" rel="noreferrer noopener">\n    <img class="book-buy-icon"src="${n(Eb)}" width="62px" height="19px"/>\n    </a>\n    <a class="book-buy-url" href="${o[1].url}" target="_blank" rel="noreferrer noopener">\n    <img src="${n(Ib)}" width="33px" height="32px"/>\n    </a>\n    <a class="book-buy-url" href="${o[4].url}" target="_blank" rel="noreferrer noopener">\n    <img src="${n(Sb)}" width="38px" height="36px"/>\n    </a>\n    </div>\n    </div>`;Cb.bookCard.innerHTML=c}Cb.div.addEventListener("click",(function(e){e.preventDefault();const t=e.target.classList.contains("quick-view");if(!e.target.classList.contains("js-gallery-image")&&!t)return;const n=e.target.dataset.id;0!==kb.length&&kb.find((e=>e.bookId===n))?(Cb.shoppingListBtn.textContent="remove from the shopping list",Cb.shoppingListBtn.classList.add("modal__button-shopping-list--remove"),Cb.text.classList.remove("visually-hidden")):(Cb.shoppingListBtn.textContent="add to shopping list",Cb.text.classList.add("visually-hidden"),Cb.shoppingListBtn.classList.remove("modal__button-shopping-list--remove"));Cb.bookCard.innerHTML="",Tb.fetchBookById(n).then(Lb).catch((e=>console.err("Ooops! Something went wrong!"))),window.addEventListener("keydown",Mb),document.body.classList.add("js-show-modal")})),Cb.closeModalBtn.addEventListener("click",xb),Cb.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&xb()})),Cb.shoppingListBtn.addEventListener("click",(function(e){try{const e=kb.findIndex((e=>e.bookId===_b.bookId));-1!==e?(kb.splice(e,1),localStorage.removeItem("info-shopping-list"),localStorage.setItem("info-shopping-list",JSON.stringify(kb))):(kb.push({..._b}),localStorage.setItem("info-shopping-list",JSON.stringify(kb)))}catch{console.err("Ooops! Something went wrong!")}xb()}));
//# sourceMappingURL=index.2d9ebc21.js.map
