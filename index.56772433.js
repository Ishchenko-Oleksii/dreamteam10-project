var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},s={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},e.parcelRequired7c6=i),i("kyEFX").register(JSON.parse('{"5ZPII":"index.56772433.js","1HTp7":"bookshop.a185b304.svg","aSJpf":"ibooks.9bcaf007.svg","fGJyr":"amazon.0dffd886.svg","d19UA":"shoping-list.c1268e20.js"}'));var r,a,o,l=r={};function c(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function h(e){if(a===setTimeout)return setTimeout(e,0);if((a===c||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:c}catch(e){a=c}try{o="function"==typeof clearTimeout?clearTimeout:u}catch(e){o=u}}();var d,p=[],f=!1,m=-1;function g(){f&&d&&(f=!1,d.length?p=d.concat(p):m=-1,p.length&&v())}function v(){if(!f){var e=h(g);f=!0;for(var t=p.length;t;){for(d=p,p=[];++m<t;)d&&d[m].run();m=-1,t=p.length}d=null,f=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===u||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function w(){}l.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new y(e,t)),1!==p.length||f||h(v)},y.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=w,l.addListener=w,l.once=w,l.off=w,l.removeListener=w,l.removeAllListeners=w,l.emit=w,l.prependListener=w,l.prependOnceListener=w,l.listeners=function(e){return[]},l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0};
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
const b=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&s+1<e.length&&56320==(64512&e.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++s)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},E={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let t=0;t<e.length;t+=3){const i=e[t],r=t+1<e.length,a=r?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,c=i>>2,u=(3&i)<<4|a>>4;let h=(15&a)<<2|l>>6,d=63&l;o||(d=64,r||(h=64)),s.push(n[c],n[u],n[h],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(b(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[s++]=String.fromCharCode(55296+(r>>10)),t[s++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],a=e[n++];t[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==r||null==a||null==o)throw new T;const l=i<<2|r>>4;if(s.push(l),64!==a){const e=r<<4&240|a>>2;if(s.push(e),64!==o){const e=a<<6&192|o;s.push(e)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class T extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const S=function(e){return function(e){const t=b(e);return E.encodeByteArray(t,!0)}(e).replace(/\./g,"")},I=function(e){try{return E.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,_=()=>{try{return C()||(()=>{if(void 0===r||void 0===r.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&I(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},k=e=>{var t,n;return null===(n=null===(t=_())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},x=e=>{const t=k(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),s]:[t.substring(0,n),s]},A=()=>{var e;return null===(e=_())||void 0===e?void 0:e.config},M=e=>{var t;return null===(t=_())||void 0===t?void 0:t[`_${e}`]};
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
class L{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */function D(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[S(JSON.stringify({alg:"none",type:"JWT"})),S(JSON.stringify(r)),""].join(".")}
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
 */function N(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function P(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function O(){const e=N();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function R(){try{return"object"==typeof indexedDB}catch(e){return!1}}class F extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,F.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],r=i?function(e,t){return e.replace(U,((e,n)=>{const s=t[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${r} (${s}).`;return new F(s,a,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const U=/\{\$([^}]+)}/g;
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
 */function $(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function z(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const n=e[i],r=t[i];if(B(n)&&B(r)){if(!z(n,r))return!1}else if(n!==r)return!1}for(const e of s)if(!n.includes(e))return!1;return!0}function B(e){return null!==e&&"object"==typeof e}
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
function j(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function q(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,s]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(s)}})),t}function H(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function G(e,t){const n=new W(e,t);return n.subscribe.bind(n)}class W{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let s;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");s=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===s.next&&(s.next=K),void 0===s.error&&(s.error=K),void 0===s.complete&&(s.complete=K);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(e){}})),this.observers.push(s),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function K(){}
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
function X(e){return e&&e._delegate?e._delegate:e}class Y{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class Q{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new L;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),s=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(s)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=e,"[DEFAULT]"===s?void 0:s),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var s;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class J{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Q(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const Z=[];var ee,te;(te=ee||(ee={}))[te.DEBUG=0]="DEBUG",te[te.VERBOSE=1]="VERBOSE",te[te.INFO=2]="INFO",te[te.WARN=3]="WARN",te[te.ERROR=4]="ERROR",te[te.SILENT=5]="SILENT";const ne={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},se=ee.INFO,ie={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},re=(e,t,...n)=>{if(t<e.logLevel)return;const s=(new Date).toISOString(),i=ie[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${s}]  ${e.name}:`,...n)};class ae{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ne[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}constructor(e){this.name=e,this._logLevel=se,this._logHandler=re,this._userLogHandler=null,Z.push(this)}}let oe,le;const ce=new WeakMap,ue=new WeakMap,he=new WeakMap,de=new WeakMap,pe=new WeakMap;let fe={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ue.get(e);if("objectStoreNames"===t)return e.objectStoreNames||he.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ve(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function me(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(le||(le=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ye(this),t),ve(ce.get(this))}:function(...t){return ve(e.apply(ye(this),t))}:function(t,...n){const s=e.call(ye(this),t,...n);return he.set(s,t.sort?t.sort():[t]),ve(s)}}function ge(e){return"function"==typeof e?me(e):(e instanceof IDBTransaction&&function(e){if(ue.has(e))return;const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",r),e.removeEventListener("abort",r)},i=()=>{t(),s()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",r),e.addEventListener("abort",r)}));ue.set(e,t)}(e),t=e,(oe||(oe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,fe):e);var t}function ve(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",r)},i=()=>{t(ve(e.result)),s()},r=()=>{n(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&ce.set(t,e)})).catch((()=>{})),pe.set(t,e),t}(e);if(de.has(e))return de.get(e);const t=ge(e);return t!==e&&(de.set(e,t),pe.set(t,e)),t}const ye=e=>pe.get(e);function we(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const a=indexedDB.open(e,t),o=ve(a);return s&&a.addEventListener("upgradeneeded",(e=>{s(ve(a.result),e.oldVersion,e.newVersion,ve(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),o.then((e=>{r&&e.addEventListener("close",(()=>r())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}const be=["get","getKey","getAll","getAllKeys","count"],Ee=["put","add","delete","clear"],Te=new Map;function Se(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Te.get(t))return Te.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Ee.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!be.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,i?"readwrite":"readonly");let a=r.store;return s&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&r.done]))[0]};return Te.set(t,r),r}fe=(e=>({...e,get:(t,n,s)=>Se(t,n)||e.get(t,n,s),has:(t,n)=>!!Se(t,n)||e.has(t,n)}))(fe);
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
class Ie{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Ce=new ae("@firebase/app"),_e={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ke=new Map,xe=new Map;function Ae(e,t){try{e.container.addComponent(t)}catch(n){Ce.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Me(e){const t=e.name;if(xe.has(t))return Ce.debug(`There were multiple attempts to register component ${t}.`),!1;xe.set(t,e);for(const t of ke.values())Ae(t,e);return!0}function Le(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const De=new V("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Ne{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw De.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Y("app",(()=>this),"PUBLIC"))}}
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
 */function Pe(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const s=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=s.name;if("string"!=typeof i||!i)throw De.create("bad-app-name",{appName:String(i)});if(n||(n=A()),!n)throw De.create("no-options");const r=ke.get(i);if(r){if(z(n,r.options)&&z(s,r.config))return r;throw De.create("duplicate-app",{appName:i})}const a=new J(i);for(const e of xe.values())a.addComponent(e);const o=new Ne(n,s,a);return ke.set(i,o),o}function Oe(e="[DEFAULT]"){const t=ke.get(e);if(!t&&"[DEFAULT]"===e&&A())return Pe();if(!t)throw De.create("no-app",{appName:e});return t}function Re(e,t,n){var s;let i=null!==(s=_e[e])&&void 0!==s?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),a=t.match(/\s|\//);if(r||a){const e=[`Unable to register library "${i}" with version "${t}":`];return r&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ce.warn(e.join(" "))}Me(new Y(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let Fe=null;function Ve(){return Fe||(Fe=we("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw De.create("idb-open",{originalErrorMessage:e.message})}))),Fe}async function Ue(e,t){try{const n=(await Ve()).transaction("firebase-heartbeat-store","readwrite"),s=n.objectStore("firebase-heartbeat-store");await s.put(t,$e(e)),await n.done}catch(e){if(e instanceof F)Ce.warn(e.message);else{const t=De.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ce.warn(t.message)}}}function $e(e){return`${e.name}!${e.options.appId}`}
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
 */class ze{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Be();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Be(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let s=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),qe(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qe(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=S(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new je(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Be(){return(new Date).toISOString().substring(0,10)}class je{async runIndexedDBEnvironmentCheck(){return!!R()&&new Promise(((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await Ve();return await t.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get($e(e))}catch(e){if(e instanceof F)Ce.warn(e.message);else{const t=De.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ce.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function qe(e){return S(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var He;He="",Me(new Y("platform-logger",(e=>new Ie(e)),"PRIVATE")),Me(new Y("heartbeat",(e=>new ze(e)),"PRIVATE")),Re("@firebase/app","0.9.10",He),Re("@firebase/app","0.9.10","esm2017"),Re("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
Re("firebase","9.22.0","app");function Ge(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(n[s[i]]=e[s[i]])}return n}Object.create;Object.create;function We(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ke=We,Xe=new V("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ye=new ae("@firebase/auth");function Qe(e,...t){Ye.logLevel<=ee.ERROR&&Ye.error(`Auth (9.22.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e,...t){throw tt(e,...t)}function Ze(e,...t){return tt(e,...t)}function et(e,t,n){const s=Object.assign(Object.assign({},Ke()),{[t]:n});return new V("auth","Firebase",s).create(t,{appName:e.name})}function tt(e,...t){if("string"!=typeof e){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Xe.create(e,...t)}function nt(e,t,...n){if(!e)throw tt(t,...n)}function st(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Qe(t),new Error(t)}function it(e,t){e||st(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function at(){return"http:"===ot()||"https:"===ot()}function ot(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(at()||P()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ct{get(){return lt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,it(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e,t){it(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},pt=new ct(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function mt(e,t,n,s,i={}){return gt(e,i,(async()=>{let i={},r={};s&&("GET"===t?r=s:i={body:JSON.stringify(s)});const a=j(Object.assign({key:e.config.apiKey},r)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),ht.fetch()(yt(e,e.config.apiHost,n,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},i))}))}async function gt(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},dt),t);try{const t=new wt(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw bt(e,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const t=i.ok?r.errorMessage:r.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw bt(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw bt(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw bt(e,"user-disabled",r);const o=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw et(e,o,a);Je(e,o)}}catch(t){if(t instanceof F)throw t;Je(e,"network-request-failed",{message:String(t)})}}async function vt(e,t,n,s,i={}){const r=await mt(e,t,n,s,i);return"mfaPendingCredential"in r&&Je(e,"multi-factor-auth-required",{_serverResponse:r}),r}function yt(e,t,n,s){const i=`${t}${n}?${s}`;return e.config.emulator?ut(e.config,i):`${e.config.apiScheme}://${i}`}class wt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ze(this.auth,"network-request-failed"))),pt.get())}))}}function bt(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ze(e,t,s);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function Et(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){return 1e3*Number(e)}function St(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return Qe("JWT malformed, contained fewer than 3 sections"),null;try{const e=I(n);return e?JSON.parse(e):(Qe("Failed to decode base64 JWT payload"),null)}catch(e){return Qe("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
async function It(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof F&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Ct{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{_initializeTime(){this.lastSignInTime=Et(this.lastLoginAt),this.creationTime=Et(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function kt(e){var t;const n=e.auth,s=await e.getIdToken(),i=await It(e,async function(e,t){return mt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:s}));nt(null==i?void 0:i.users.length,n,"internal-error");const r=i.users[0];e._notifyReloadListener(r);const a=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ge(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const o=(l=e.providerData,c=a,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&r.passwordHash||(null==o?void 0:o.length)),d=!!u&&h,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new _t(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class xt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){nt(e.idToken,"internal-error"),nt(void 0!==e.idToken,"internal-error"),nt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=St(e);return nt(t,"internal-error"),nt(void 0!==t.exp,"internal-error"),nt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return nt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
async function(e,t){const n=await gt(e,{},(async()=>{const n=j({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,r=yt(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ht.fetch()(r,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,r=new xt;return n&&(nt("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),s&&(nt("string"==typeof s,"internal-error",{appName:e}),r.accessToken=s),i&&(nt("number"==typeof i,"internal-error",{appName:e}),r.expirationTime=i),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xt,this.toJSON())}_performRefresh(){return st("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e,t){nt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Mt{async getIdToken(e){const t=await It(this,this.stsTokenManager.getToken(this.auth,e));return nt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=X(e),s=await n.getIdToken(t),i=St(s);nt(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r="object"==typeof i.firebase?i.firebase:void 0,a=null==r?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Et(Tt(i.auth_time)),issuedAtTime:Et(Tt(i.iat)),expirationTime:Et(Tt(i.exp)),signInProvider:a||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=X(e);await kt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(nt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){nt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await kt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await It(this,async function(e,t){return mt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,r,a,o,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(s=t.email)&&void 0!==s?s:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(r=t.photoURL)&&void 0!==r?r:void 0,f=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:T}=t;nt(y&&T,e,"internal-error");const S=xt.fromJSON(this.name,T);nt("string"==typeof y,e,"internal-error"),At(u,e.name),At(h,e.name),nt("boolean"==typeof w,e,"internal-error"),nt("boolean"==typeof b,e,"internal-error"),At(d,e.name),At(p,e.name),At(f,e.name),At(m,e.name),At(g,e.name),At(v,e.name);const I=new Mt({uid:y,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:S,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(I.providerData=E.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const s=new xt;s.updateFromServerResponse(t);const i=new Mt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await kt(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=Ge(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ct(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _t(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Map;function Dt(e){it(e instanceof Function,"Expected a class definition");let t=Lt.get(e);return t?(it(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Lt.set(e,t),t)}
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
 */class Nt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Nt.type="NONE";const Pt=Nt;
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
 */function Ot(e,t,n){return`firebase:${e}:${t}:${n}`}class Rt{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Rt(Dt(Pt),e,n);const s=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=s[0]||Dt(Pt);const r=Ot(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(r);if(t){const s=Mt._fromJSON(e,t);n!==i&&(a=s),i=n;break}}catch(e){}const o=s.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&o.length?(i=o[0],a&&await i._set(r,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(r)}catch(e){}}))),new Rt(i,e,n)):new Rt(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Ot(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ot("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(zt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Vt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(jt(t))return"Blackberry";if(qt(t))return"Webos";if(Ut(t))return"Safari";if((t.includes("chrome/")||$t(t))&&!t.includes("edge/"))return"Chrome";if(Bt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Vt(e=N()){return/firefox\//i.test(e)}function Ut(e=N()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function $t(e=N()){return/crios\//i.test(e)}function zt(e=N()){return/iemobile/i.test(e)}function Bt(e=N()){return/android/i.test(e)}function jt(e=N()){return/blackberry/i.test(e)}function qt(e=N()){return/webos/i.test(e)}function Ht(e=N()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Gt(){return O()&&10===document.documentMode}function Wt(e=N()){return Ht(e)||Bt(e)||qt(e)||jt(e)||/windows phone/i.test(e)||zt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function Kt(e,t=[]){let n;switch(e){case"Browser":n=Ft(N());break;case"Worker":n=`${Ft(N())}-${e}`;break;default:n=e}return`${n}/JsCore/9.22.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){return mt(e,"GET","/v2/recaptchaConfig",ft(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(e){return void 0!==e&&void 0!==e.enterprise}class Qt{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e){return new Promise(((t,n)=>{const s=document.createElement("script");var i,r;s.setAttribute("src",e),s.onload=t,s.onerror=e=>{const t=Ze("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(r=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==r?r:document).appendChild(s)}))}function Zt(e){return`__${e}${Math.floor(1e6*Math.random())}`}class en{async verify(e="verify",t=!1){function n(t,n,s){const i=window.grecaptcha;Yt(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,s)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Xt(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((s=>{if(void 0!==s.recaptchaKey){const n=new Qt(s);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&Yt(window.grecaptcha))n(i,e,s);else{if("undefined"==typeof window)return void s(new Error("RecaptchaVerifier is only supported in browser"));Jt("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,e,s)})).catch((e=>{s(e)}))}})).catch((e=>{s(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=rn(e)}}async function tn(e,t,n,s=!1){const i=new en(e);let r;try{r=await i.verify(n)}catch(e){r=await i.verify(n,!0)}const a=Object.assign({},t);return s?Object.assign(a,{captchaResp:r}):Object.assign(a,{captchaResponse:r}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}
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
 */class nn{pushCallback(e,t){const n=t=>new Promise(((n,s)=>{try{n(e(t))}catch(e){s(e)}}));n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dt(t)),this._initializationPromise=this.queue((async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await Rt.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(s=this.currentUser)||void 0===s?void 0:s.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==s?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==r||!(null==a?void 0:a.user)||(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(e){s=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return nt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await kt(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?X(e):null;return t&&nt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&nt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Dt(e))}))}async initializeRecaptchaConfig(){const e=await Xt(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Qt(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new en(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new V("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dt(e)||this._popupRedirectResolver;nt(t,this,"argument-error"),this.redirectPersistenceManager=await Rt.create(this,[Dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return nt(r,this,"internal-error"),r.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return nt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Ye.logLevel<=ee.WARN&&Ye.warn(`Auth (9.22.0): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new an(this),this.idTokenSubscription=new an(this),this.beforeStateQueue=new nn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xe,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}}function rn(e){return X(e)}class an{get next(){return nt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=G((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e,t,n){const s=rn(e);nt(s._canInitEmulator,s,"emulator-config-failed"),nt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),r=ln(t),{host:a,port:o}=function(e){const t=ln(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const e=i[1];return{host:e,port:cn(s.substr(e.length+1))}}{const[e,t]=s.split(":");return{host:e,port:cn(t)}}}(t),l=null===o?"":`:${o}`;s.config.emulator={url:`${r}//${a}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:a,port:o,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ln(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function cn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class un{toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(e,t){return mt(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
async function dn(e,t){return vt(e,"POST","/v1/accounts:signInWithPassword",ft(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class pn extends un{static _fromEmailAndPassword(e,t){return new pn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new pn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await tn(e,n,"signInWithPassword");return dn(e,t)}return dn(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await tn(e,n,"signInWithPassword");return dn(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
return async function(e,t){return vt(e,"POST","/v1/accounts:signInWithEmailLink",ft(e,t))}(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return hn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return vt(e,"POST","/v1/accounts:signInWithEmailLink",ft(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(e,t){return vt(e,"POST","/v1/accounts:signInWithIdp",ft(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends un{static _fromParams(e){const t=new mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=Ge(t,["providerId","signInMethod"]);if(!n||!s)return null;const r=new mn(n,s);return r.idToken=i.idToken||void 0,r.accessToken=i.accessToken||void 0,r.secret=i.secret,r.nonce=i.nonce,r.pendingToken=i.pendingToken||null,r}_getIdTokenResponse(e){return fn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,fn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=j(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class vn extends un{static _fromVerification(e,t){return new vn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new vn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return vt(e,"POST","/v1/accounts:signInWithPhoneNumber",ft(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await vt(e,"POST","/v1/accounts:signInWithPhoneNumber",ft(e,t));if(n.temporaryProof)throw bt(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return vt(e,"POST","/v1/accounts:signInWithPhoneNumber",ft(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),gn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:i}=e;return n||t||s||i?new vn({verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{static parseLink(e){const t=function(e){const t=q(H(e)).link,n=t?q(H(t)).deep_link_id:null,s=q(H(e)).deep_link_id;return(s?q(H(s)).link:null)||s||n||t||e}(e);try{return new yn(t)}catch(e){return null}}constructor(e){var t,n,s,i,r,a;const o=q(H(e)),l=null!==(t=o.apiKey)&&void 0!==t?t:null,c=null!==(n=o.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(s=o.mode)&&void 0!==s?s:null);nt(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=o.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(r=o.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class wn{static credential(e,t){return pn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=yn.parseLink(t);return nt(n,"argument-error"),pn._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=wn.PROVIDER_ID}}wn.PROVIDER_ID="password",wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class bn{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class En extends bn{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Tn extends En{static credential(e){return mn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Tn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Sn extends En{static credential(e,t){return mn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Sn.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Sn.GOOGLE_SIGN_IN_METHOD="google.com",Sn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class In extends En{static credential(e){return mn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}In.GITHUB_SIGN_IN_METHOD="github.com",In.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Cn extends En{static credential(e,t){return mn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Cn.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
async function _n(e,t){return vt(e,"POST","/v1/accounts:signUp",ft(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn.TWITTER_SIGN_IN_METHOD="twitter.com",Cn.PROVIDER_ID="twitter.com";class kn{static async _fromIdTokenResponse(e,t,n,s=!1){const i=await Mt._fromIdTokenResponse(e,n,s),r=xn(n);return new kn({user:i,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=xn(n);return new kn({user:e,providerId:s,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function xn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class An extends F{static _fromErrorAndOperation(e,t,n,s){return new An(e,t,n,s)}constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,An.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Mn(e,t,n,s){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw An._fromErrorAndOperation(e,n,t,s);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(e,t,n=!1){const s=await It(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return kn._forOperation(e,"link",s)}
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
async function Dn(e,t,n=!1){const{auth:s}=e,i="reauthenticate";try{const r=await It(e,Mn(s,i,t,e),n);nt(r.idToken,s,"internal-error");const a=St(r.idToken);nt(a,s,"internal-error");const{sub:o}=a;return nt(e.uid===o,s,"user-mismatch"),kn._forOperation(e,i,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Je(s,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(e,t,n=!1){const s="signIn",i=await Mn(e,s,t),r=await kn._fromIdTokenResponse(e,s,i);return n||await e._updateCurrentUser(r.user),r}async function Pn(e,t){return Nn(rn(e),t)}async function On(e,t,n){var s;const i=rn(e),r={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let a;if(null===(s=i._getRecaptchaConfig())||void 0===s?void 0:s.emailPasswordEnabled){const e=await tn(i,r,"signUpPassword");a=_n(i,e)}else a=_n(i,r).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await tn(i,r,"signUpPassword");return _n(i,e)}return Promise.reject(e)}));const o=await a.catch((e=>Promise.reject(e))),l=await kn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(l.user),l}function Rn(e,t,n){return Pn(X(e),wn.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e){return X(e).signOut()}new WeakMap;
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
class Vn{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Vn{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(e.newValue!==s)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Gt()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=N();return Ut(e)||Ht(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Wt(),this._shouldAllowMigration=!0}}Un.type="LOCAL";const $n=Un;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Vn{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}zn.type="SESSION";const Bn=zn;
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
class jn{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new jn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,r=this.handlersMap[s];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const a=Array.from(r).map((async e=>e(t.origin,i))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function qn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */jn.receivers=[];class Hn{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,r;return new Promise(((a,o)=>{const l=qn("",20);s.port1.start();const c=setTimeout((()=>{o(new Error("unsupported_event"))}),n);r={messageChannel:s,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(c),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function Wn(){return void 0!==Gn().WorkerGlobalScope&&"function"==typeof Gn().importScripts}class Kn{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Xn(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Yn(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Kn(e).toPromise()}(),t(await Yn()))}))}))}async function Qn(e,t,n){const s=Xn(e,!0).put({fbase_key:t,value:n});return new Kn(s).toPromise()}function Jn(e,t){const n=Xn(e,!0).delete(t);return new Kn(n).toPromise()}class Zn{async _openDb(){return this.db||(this.db=await Yn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jn._getInstance(Wn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Hn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yn();return await Qn(e,"__sak","1"),await Jn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Qn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Xn(e,!1).get(t),s=await new Kn(n).toPromise();return void 0===s?null:s.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Jn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Xn(e,!1).getAll();return new Kn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Zn.type="LOCAL";const es=Zn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
Zt("rcb"),new ct(3e4,6e4);async function ts(e,t,n){var s;const i=await n.verify();try{let r;if(nt("string"==typeof i,e,"argument-error"),nt("recaptcha"===n.type,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){nt("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function(e,t){return mt(e,"POST","/v2/accounts/mfaEnrollment:start",ft(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{nt("signin"===t.type,e,"internal-error");const n=(null===(s=r.multiFactorHint)||void 0===s?void 0:s.uid)||r.multiFactorUid;nt(n,e,"missing-multi-factor-info");const a=await function(e,t){return mt(e,"POST","/v2/accounts/mfaSignIn:start",ft(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return mt(e,"POST","/v1/accounts:sendVerificationCode",ft(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ns{verifyPhoneNumber(e,t){return ts(this.auth,e,X(t))}static credential(e,t){return vn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ns.credentialFromTaggedObject(t)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?vn._fromTokenResponse(t,n):null}constructor(e){this.providerId=ns.PROVIDER_ID,this.auth=rn(e)}}
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
function ss(e,t){return t?Dt(t):(nt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */ns.PROVIDER_ID="phone",ns.PHONE_SIGN_IN_METHOD="phone";class is extends un{_getIdTokenResponse(e){return fn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function rs(e){return Nn(e.auth,new is(e),e.bypassAuthState)}function as(e){const{auth:t,user:n}=e;return nt(n,t,"internal-error"),Dn(n,new is(e),e.bypassAuthState)}async function os(e){const{auth:t,user:n}=e;return nt(n,t,"internal-error"),Ln(n,new is(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:r,type:a}=e;if(r)return void this.reject(r);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rs;case"linkViaPopup":case"linkViaRedirect":return os;case"reauthViaPopup":case"reauthViaRedirect":return as;default:Je(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new ct(2e3,1e4);class us extends ls{async executeNotNull(){const e=await this.execute();return nt(e,this.auth,"internal-error"),e}async onExecution(){it(1===this.filter.length,"Popup operations only handle one event");const e=qn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ze(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,cs.get())};e()}constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}}us.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const hs=new Map;class ds extends ls{async execute(){let e=hs.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=ms(t),s=fs(e);if(!await s._isAvailable())return!1;const i="true"===await s._get(n);return await s._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}hs.set(this.auth._key(),e)}return this.bypassAuthState||hs.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function ps(e,t){hs.set(e._key(),t)}function fs(e){return Dt(e._redirectPersistence)}function ms(e){return Ot("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(e,t,n=!1){const s=rn(e),i=ss(s,t),r=new ds(s,i,n),a=await r.execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,t)),a}class vs{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ws(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ws(e)){const s=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ze(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ys(e))}saveEventToCache(e){this.cachedEventUids.add(ys(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function ys(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ws({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const bs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Es=/^https?/;async function Ts(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return mt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ss(e))return}catch(e){}Je(e,"unauthorized-domain")}function Ss(e){const t=rt(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===s?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===s}if(!Es.test(n))return!1;if(bs.test(e))return s===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}
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
 */const Is=new ct(3e4,6e4);function Cs(){const e=Gn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let _s=null;function ks(e){return _s=_s||function(e){return new Promise(((t,n)=>{var s,i,r;function a(){Cs(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Cs(),n(Ze(e,"network-request-failed"))},timeout:Is.get()})}if(null===(i=null===(s=Gn().gapi)||void 0===s?void 0:s.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=Gn().gapi)||void 0===r?void 0:r.load)){const t=Zt("iframefcb");return Gn()[t]=()=>{gapi.load?a():n(Ze(e,"network-request-failed"))},Jt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw _s=null,e}))}(e),_s}
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
 */const xs=new ct(5e3,15e3),As={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ms=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ls(e){const t=e.config;nt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ut(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,s={apiKey:t.apiKey,appName:e.name,v:"9.22.0"},i=Ms.get(e.config.apiHost);i&&(s.eid=i);const r=e._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${j(s).slice(1)}`}
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
const Ds={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ns{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Ps(e,t,n,s=500,i=600){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let o="";const l=Object.assign(Object.assign({},Ds),{width:s.toString(),height:i.toString(),top:r,left:a}),c=N().toLowerCase();n&&(o=$t(c)?"_blank":n),Vt(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=N()){var t;return Ht(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}
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
 */(t||"",o),new Ns(null);const h=window.open(t||"",o,u);nt(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Ns(h)}const Os=encodeURIComponent("fac");async function Rs(e,t,n,s,i,r){nt(e.config.authDomain,e,"auth-domain-config-required"),nt(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:"9.22.0",eventId:i};if(t instanceof bn){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",$(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))a[e]=t}if(t instanceof En){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];const l=await e._getAppCheckToken(),c=l?`#${Os}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?ut(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${j(o).slice(1)}${c}`}const Fs=class{async _openPopup(e,t,n,s){var i;it(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Ps(e,await Rs(e,t,n,rt(),s),qn())}async _openRedirect(e,t,n,s){await this._originValidation(e);return function(e){Gn().location.href=e}(await Rs(e,t,n,rt(),s)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(it(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await ks(e),n=Gn().gapi;return nt(n,e,"internal-error"),t.open({where:document.body,url:Ls(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:As,dontclear:!0},(t=>new Promise((async(n,s)=>{await t.restyle({setHideOnLeave:!1});const i=Ze(e,"network-request-failed"),r=Gn().setTimeout((()=>{s(i)}),xs.get());function a(){Gn().clearTimeout(r),n(t)}t.ping(a).then(a,(()=>{s(i)}))}))))}(e),n=new vs(e);return t.register("authEvent",(t=>{nt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var s;const i=null===(s=null==n?void 0:n[0])||void 0===s?void 0:s.webStorageSupport;void 0!==i&&t(!!i),Je(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ts(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wt()||Ut()||Ht()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bn,this._completeRedirectFn=gs,this._overrideRedirectResult=ps}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Vs{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){nt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const Us=M("authIdTokenMaxAge")||300;let $s=null;var zs;zs="Browser",Me(new Y("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:r,authDomain:a}=n.options;nt(r&&!r.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:r,authDomain:a,clientPlatform:zs,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kt(zs)},l=new sn(n,s,i,o);return function(e,t){const n=(null==t?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Dt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Me(new Y("auth-internal",(e=>{const t=rn(e.getProvider("auth").getImmediate());return new Vs(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Re("@firebase/auth","0.23.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(zs)),Re("@firebase/auth","0.23.2","esm2017");var Bs,js="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},qs={},Hs=Hs||{},Gs=js||self;function Ws(){}function Ks(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Xs(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Ys="closure_uid_"+(1e9*Math.random()>>>0),Qs=0;function Js(e,t,n){return e.call.apply(e.bind,arguments)}function Zs(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function ei(e,t,n){return(ei=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Js:Zs).apply(null,arguments)}function ti(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function ni(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return t.prototype[n].apply(e,i)}}function si(){this.s=this.s,this.o=this.o}si.prototype.s=!1,si.prototype.ra=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,Ys)&&e[Ys]||(e[Ys]=++Qs))},si.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ii=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ri(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function ai(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(Ks(n)){const t=e.length||0,s=n.length||0;e.length=t+s;for(let i=0;i<s;i++)e[t+i]=n[i]}else e.push(n)}}function oi(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}oi.prototype.h=function(){this.defaultPrevented=!0};var li=function(){if(!Gs.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Gs.addEventListener("test",Ws,t),Gs.removeEventListener("test",Ws,t)}catch(e){}return e}();function ci(e){return/^[\s\xa0]*$/.test(e)}var ui=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function hi(e,t){return e<t?-1:e>t?1:0}function di(){var e=Gs.navigator;return e&&(e=e.userAgent)?e:""}function pi(e){return-1!=di().indexOf(e)}function fi(e){return fi[" "](e),e}function mi(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}fi[" "]=Ws;var gi,vi,yi=pi("Opera"),wi=pi("Trident")||pi("MSIE"),bi=pi("Edge"),Ei=bi||wi,Ti=pi("Gecko")&&!(-1!=di().toLowerCase().indexOf("webkit")&&!pi("Edge"))&&!(pi("Trident")||pi("MSIE"))&&!pi("Edge"),Si=-1!=di().toLowerCase().indexOf("webkit")&&!pi("Edge");function Ii(){var e=Gs.document;return e?e.documentMode:void 0}e:{var Ci="",_i=(vi=di(),Ti?/rv:([^\);]+)(\)|;)/.exec(vi):bi?/Edge\/([\d\.]+)/.exec(vi):wi?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(vi):Si?/WebKit\/(\S+)/.exec(vi):yi?/(?:Version)[ \/]?(\S+)/.exec(vi):void 0);if(_i&&(Ci=_i?_i[1]:""),wi){var ki=Ii();if(null!=ki&&ki>parseFloat(Ci)){gi=String(ki);break e}}gi=Ci}var xi,Ai={};if(Gs.document&&wi){var Mi=Ii();xi=Mi||(parseInt(gi,10)||void 0)}else xi=void 0;var Li=xi;function Di(e,t){if(oi.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ti){e:{try{fi(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Ni[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Di.$.h.call(this)}}ni(Di,oi);var Ni={2:"touch",3:"pen",4:"mouse"};Di.prototype.h=function(){Di.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Pi="closure_listenable_"+(1e6*Math.random()|0),Oi=0;function Ri(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=i,this.key=++Oi,this.fa=this.ia=!1}function Fi(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Vi(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Ui(e){const t={};for(const n in e)t[n]=e[n];return t}const $i="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zi(e,t){let n,s;for(let t=1;t<arguments.length;t++){for(n in s=arguments[t],s)e[n]=s[n];for(let t=0;t<$i.length;t++)n=$i[t],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Bi(e){this.src=e,this.g={},this.h=0}function ji(e,t){var n=t.type;if(n in e.g){var s,i=e.g[n],r=ii(i,t);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Fi(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function qi(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==s)return i}return-1}Bi.prototype.add=function(e,t,n,s,i){var r=e.toString();(e=this.g[r])||(e=this.g[r]=[],this.h++);var a=qi(e,t,s,i);return-1<a?(t=e[a],n||(t.ia=!1)):((t=new Ri(t,this.src,r,!!s,i)).ia=n,e.push(t)),t};var Hi="closure_lm_"+(1e6*Math.random()|0),Gi={};function Wi(e,t,n,s,i){if(s&&s.once)return Xi(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Wi(e,t[r],n,s,i);return null}return n=nr(n),e&&e[Pi]?e.O(t,n,Xs(s)?!!s.capture:!!s,i):Ki(e,t,n,!1,s,i)}function Ki(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var a=Xs(i)?!!i.capture:!!i,o=er(e);if(o||(e[Hi]=o=new Bi(e)),(n=o.add(t,n,s,a,r)).proxy)return n;if(s=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Zi;return e}(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)li||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Ji(t.toString()),s);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(s)}return n}function Xi(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Xi(e,t[r],n,s,i);return null}return n=nr(n),e&&e[Pi]?e.P(t,n,Xs(s)?!!s.capture:!!s,i):Ki(e,t,n,!0,s,i)}function Yi(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Yi(e,t[r],n,s,i);else s=Xs(s)?!!s.capture:!!s,n=nr(n),e&&e[Pi]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=qi(r=e.g[t],n,s,i))&&(Fi(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=er(e))&&(t=e.g[t.toString()],e=-1,t&&(e=qi(t,n,s,i)),(n=-1<e?t[e]:null)&&Qi(n))}function Qi(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Pi])ji(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Ji(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=er(t))?(ji(n,e),0==n.h&&(n.src=null,t[Hi]=null)):Fi(e)}}}function Ji(e){return e in Gi?Gi[e]:Gi[e]="on"+e}function Zi(e,t){if(e.fa)e=!0;else{t=new Di(t,this);var n=e.listener,s=e.la||e.src;e.ia&&Qi(e),e=n.call(s,t)}return e}function er(e){return(e=e[Hi])instanceof Bi?e:null}var tr="__closure_events_fn_"+(1e9*Math.random()>>>0);function nr(e){return"function"==typeof e?e:(e[tr]||(e[tr]=function(t){return e.handleEvent(t)}),e[tr])}function sr(){si.call(this),this.i=new Bi(this),this.S=this,this.J=null}function ir(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,"string"==typeof t)t=new oi(t,e);else if(t instanceof oi)t.target=t.target||e;else{var i=t;zi(t=new oi(s,e),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var a=t.g=n[r];i=rr(a,s,!0,t)&&i}if(i=rr(a=t.g=e,s,!0,t)&&i,i=rr(a,s,!1,t)&&i,n)for(r=0;r<n.length;r++)i=rr(a=t.g=n[r],s,!1,t)&&i}function rr(e,t,n,s){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var a=t[r];if(a&&!a.fa&&a.capture==n){var o=a.listener,l=a.la||a.src;a.ia&&ji(e.i,a),i=!1!==o.call(l,s)&&i}}return i&&!s.defaultPrevented}ni(sr,si),sr.prototype[Pi]=!0,sr.prototype.removeEventListener=function(e,t,n,s){Yi(this,e,t,n,s)},sr.prototype.N=function(){if(sr.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Fi(n[s]);delete t.g[e],t.h--}}this.J=null},sr.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)},sr.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};var ar=Gs.JSON.stringify;function or(){var e=fr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var lr,cr=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new ur),(e=>e.reset()));class ur{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function hr(e){Gs.setTimeout((()=>{throw e}),0)}function dr(e,t){lr||function(){var e=Gs.Promise.resolve(void 0);lr=function(){e.then(mr)}}(),pr||(lr(),pr=!0),fr.add(e,t)}var pr=!1,fr=new class{add(e,t){const n=cr.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function mr(){for(var e;e=or();){try{e.h.call(e.g)}catch(e){hr(e)}var t=cr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}pr=!1}function gr(e,t){sr.call(this),this.h=e||1,this.g=t||Gs,this.j=ei(this.qb,this),this.l=Date.now()}function vr(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function yr(e,t,n){if("function"==typeof e)n&&(e=ei(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=ei(e.handleEvent,e)}return 2147483647<Number(t)?-1:Gs.setTimeout(e,t||0)}function wr(e){e.g=yr((()=>{e.g=null,e.i&&(e.i=!1,wr(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}ni(gr,sr),(Bs=gr.prototype).ga=!1,Bs.T=null,Bs.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ir(this,"tick"),this.ga&&(vr(this),this.start()))}},Bs.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Bs.N=function(){gr.$.N.call(this),vr(this),delete this.g};class br extends si{l(e){this.h=arguments,this.g?this.i=!0:wr(this)}N(){super.N(),this.g&&(Gs.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function Er(e){si.call(this),this.h=e,this.g={}}ni(Er,si);var Tr=[];function Sr(e,t,n,s){Array.isArray(n)||(n&&(Tr[0]=n.toString()),n=Tr);for(var i=0;i<n.length;i++){var r=Wi(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Ir(e){Vi(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Qi(e)}),e),e.g={}}function Cr(){this.g=!0}function _r(e,t,n,s){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var a=1;a<i.length;a++)i[a]=""}}}return ar(n)}catch(e){return t}}(e,n)+(s?" "+s:"")}))}Er.prototype.N=function(){Er.$.N.call(this),Ir(this)},Er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Cr.prototype.Ea=function(){this.g=!1},Cr.prototype.info=function(){};var kr={},xr=null;function Ar(){return xr=xr||new sr}function Mr(e){oi.call(this,kr.Ta,e)}function Lr(e){const t=Ar();ir(t,new Mr(t))}function Dr(e,t){oi.call(this,kr.STAT_EVENT,e),this.stat=t}function Nr(e){const t=Ar();ir(t,new Dr(t,e))}function Pr(e,t){oi.call(this,kr.Ua,e),this.size=t}function Or(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Gs.setTimeout((function(){e()}),t)}kr.Ta="serverreachability",ni(Mr,oi),kr.STAT_EVENT="statevent",ni(Dr,oi),kr.Ua="timingevent",ni(Pr,oi);var Rr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Fr={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Vr(){}function Ur(e){return e.h||(e.h=e.i())}function $r(){}Vr.prototype.h=null;var zr,Br={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function jr(){oi.call(this,"d")}function qr(){oi.call(this,"c")}function Hr(){}function Gr(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new Er(this),this.P=Kr,e=Ei?125:void 0,this.V=new gr(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Wr}function Wr(){this.i=null,this.g="",this.h=!1}ni(jr,oi),ni(qr,oi),ni(Hr,Vr),Hr.prototype.g=function(){return new XMLHttpRequest},Hr.prototype.i=function(){return{}},zr=new Hr;var Kr=45e3,Xr={},Yr={};function Qr(e,t,n){e.L=1,e.v=ga(ha(t)),e.s=n,e.S=!0,Jr(e,null)}function Jr(e,t){e.G=Date.now(),na(e),e.A=ha(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),Aa(n.i,"t",s),e.C=0,n=e.l.I,e.h=new Wr,e.g=Ao(e.l,n?t:null,!e.s),0<e.O&&(e.M=new br(ei(e.Pa,e,e.g),e.O)),Sr(e.U,e.g,"readystatechange",e.nb),t=e.I?Ui(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Lr(),function(e,t,n,s,i,r){e.info((function(){if(e.g)if(r)for(var a="",o=r.split("&"),l=0;l<o.length;l++){var c=o[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");a=2<=h.length&&"type"==h[1]?a+(u+"=")+c+"&":a+(u+"=redacted&")}}else a=null;else a=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function Zr(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function ea(e,t,n){let s,i=!0;for(;!e.J&&e.C<n.length;){if(s=ta(e,n),s==Yr){4==t&&(e.o=4,Nr(14),i=!1),_r(e.j,e.m,null,"[Incomplete Response]");break}if(s==Xr){e.o=4,Nr(15),_r(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}_r(e.j,e.m,s,null),oa(e,s)}Zr(e)&&s!=Yr&&s!=Xr&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Nr(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ca&&(e.ca=!0,(t=e.l).g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Eo(t),t.L=!0,Nr(11))):(_r(e.j,e.m,n,"[Invalid Chunked Response]"),aa(e),ra(e))}function ta(e,t){var n=e.C,s=t.indexOf("\n",n);return-1==s?Yr:(n=Number(t.substring(n,s)),isNaN(n)?Xr:(s+=1)+n>t.length?Yr:(t=t.substr(s,n),e.C=s+n,t))}function na(e){e.Y=Date.now()+e.P,sa(e,e.P)}function sa(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Or(ei(e.lb,e),t)}function ia(e){e.B&&(Gs.clearTimeout(e.B),e.B=null)}function ra(e){0==e.l.H||e.J||Io(e.l,e)}function aa(e){ia(e);var t=e.M;t&&"function"==typeof t.ra&&t.ra(),e.M=null,vr(e.V),Ir(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function oa(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Oa(n.h,e)))if(!e.K&&Oa(n.h,e)&&3==n.H){try{var s=n.Ja.g.parse(t)}catch(e){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;So(n),po(n)}bo(n),Nr(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&0==n.A&&!n.v&&(n.v=Or(ei(n.ib,n),6e3));if(1>=Pa(n.h)&&n.na){try{n.na()}catch(e){}n.na=void 0}}else _o(n,11)}else if((e.K||n.g==e)&&So(n),!ci(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.J=c[1],n.oa=c[2];const t=c[3];null!=t&&(n.qa=t,n.j.info("VER="+n.qa));const i=c[4];null!=i&&(n.Ga=i,n.j.info("SVER="+n.Ga));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(s=1.5*u,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=s.h;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Ra(r,r.h),r.h=null))}if(s.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(s.Da=e,ma(s.G,s.F,e))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms"));var a=e;if((s=n).wa=xo(s,s.I?s.oa:null,s.Y),a.K){Fa(s.h,a);var o=a,l=s.K;l&&o.setTimeout(l),o.B&&(ia(o),na(o)),s.g=a}else wo(s);0<n.i.length&&mo(n)}else"stop"!=c[0]&&"close"!=c[0]||_o(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?_o(n,7):ho(n):"noop"!=c[0]&&n.l&&n.l.Aa(c),n.A=0)}Lr()}catch(e){}}function la(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Ks(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.sa&&"function"==typeof e.sa)return e.sa();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(Ks(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}(e),s=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(Ks(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}for(s in t=[],n=0,e)t[n++]=e[s];return t}(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}(Bs=Gr.prototype).setTimeout=function(e){this.P=e},Bs.nb=function(e){e=e.target;const t=this.M;t&&3==ro(e)?t.l():this.Pa(e)},Bs.Pa=function(e){try{if(e==this.g)e:{const u=ro(this.g);var t=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||Ei||this.g&&(this.h.h||this.g.ja()||ao(this.g)))){this.J||4!=u||7==t||Lr(),ia(this);var n=this.g.da();this.aa=n;t:if(Zr(this)){var s=ao(this.g);e="";var i=s.length,r=4==ro(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){aa(this),ra(this);var a="";break t}this.h.i=new Gs.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=200==n,function(e,t,n,s,i,r,a){e.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+r+" "+a}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ci(o)){var c=o;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,Nr(12),aa(this),ra(this);break e}_r(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oa(this,n)}this.S?(ea(this,u,a),Ei&&this.i&&3==u&&(Sr(this.U,this.V,"tick",this.mb),this.V.start())):(_r(this.j,this.m,a,null),oa(this,a)),4==u&&aa(this),this.i&&!this.J&&(4==u?Io(this.l,this):(this.i=!1,na(this)))}else 400==n&&0<a.indexOf("Unknown SID")?(this.o=3,Nr(12)):(this.o=0,Nr(13)),aa(this),ra(this)}}}catch(e){}},Bs.mb=function(){if(this.g){var e=ro(this.g),t=this.g.ja();this.C<t.length&&(ia(this),ea(this,e,t),this.i&&4!=e&&na(this))}},Bs.cancel=function(){this.J=!0,aa(this)},Bs.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(Lr(),Nr(17)),aa(this),this.o=2,ra(this)):sa(this,this.Y-e)};var ca=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ua(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ua){this.h=void 0!==t?t:e.h,da(this,e.j),this.s=e.s,this.g=e.g,pa(this,e.m),this.l=e.l,t=e.i;var n=new Ca;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),fa(this,n),this.o=e.o}else e&&(n=String(e).match(ca))?(this.h=!!t,da(this,n[1]||"",!0),this.s=va(n[2]||""),this.g=va(n[3]||"",!0),pa(this,n[4]),this.l=va(n[5]||"",!0),fa(this,n[6]||"",!0),this.o=va(n[7]||"")):(this.h=!!t,this.i=new Ca(null,this.h))}function ha(e){return new ua(e)}function da(e,t,n){e.j=n?va(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function pa(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function fa(e,t,n){t instanceof Ca?(e.i=t,function(e,t){t&&!e.j&&(_a(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(ka(this,t),Aa(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=ya(t,Sa)),e.i=new Ca(t,e.h))}function ma(e,t,n){e.i.set(t,n)}function ga(e){return ma(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function va(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ya(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,wa),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function wa(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ua.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ya(t,ba,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(ya(t,ba,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ya(n,"/"==n.charAt(0)?Ta:Ea,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ya(n,Ia)),e.join("")};var ba=/[#\/\?@]/g,Ea=/[#\?:]/g,Ta=/[#\?]/g,Sa=/[#\?@]/g,Ia=/#/g;function Ca(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function _a(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function ka(e,t){_a(e),t=Ma(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function xa(e,t){return _a(e),t=Ma(e,t),e.g.has(t)}function Aa(e,t,n){ka(e,t),0<n.length&&(e.i=null,e.g.set(Ma(e,t),ri(n)),e.h+=n.length)}function Ma(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Bs=Ca.prototype).add=function(e,t){_a(this),this.i=null,e=Ma(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Bs.forEach=function(e,t){_a(this),this.g.forEach((function(n,s){n.forEach((function(n){e.call(t,n,s,this)}),this)}),this)},Bs.sa=function(){_a(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let e=0;e<i.length;e++)n.push(t[s])}return n},Bs.Z=function(e){_a(this);let t=[];if("string"==typeof e)xa(this,e)&&(t=t.concat(this.g.get(Ma(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Bs.set=function(e,t){return _a(this),this.i=null,xa(this,e=Ma(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Bs.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},Bs.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),a=this.Z(s);for(s=0;s<a.length;s++){var i=r;""!==a[s]&&(i+="="+encodeURIComponent(String(a[s]))),e.push(i)}}return this.i=e.join("&")};function La(e){this.l=e||Da,Gs.PerformanceNavigationTiming?e=0<(e=Gs.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Gs.g&&Gs.g.Ka&&Gs.g.Ka()&&Gs.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Da=10;function Na(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Pa(e){return e.h?1:e.g?e.g.size:0}function Oa(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Ra(e,t){e.g?e.g.add(t):e.h=t}function Fa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Va(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return ri(e.i)}function Ua(){}function $a(){this.g=new Ua}function za(e,t,n){const s=n||"";try{la(e,(function(e,n){let i=e;Xs(e)&&(i=ar(e)),t.push(s+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(s+"type="+encodeURIComponent("_badmap")),e}}function Ba(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch(e){}}function ja(e){this.l=e.fc||null,this.j=e.ob||!1}function qa(e,t){sr.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ha,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}La.prototype.cancel=function(){if(this.i=Va(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Ua.prototype.stringify=function(e){return Gs.JSON.stringify(e,void 0)},Ua.prototype.parse=function(e){return Gs.JSON.parse(e,void 0)},ni(ja,Vr),ja.prototype.g=function(){return new qa(this.l,this.j)},ja.prototype.i=function(e){return function(){return e}}({}),ni(qa,sr);var Ha=0;function Ga(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Wa(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ka(e)}function Ka(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Bs=qa.prototype).open=function(e,t){if(this.readyState!=Ha)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ka(this)},Bs.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Gs).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},Bs.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Wa(this)),this.readyState=Ha},Bs.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ka(this)),this.g&&(this.readyState=3,Ka(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Gs.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ga(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},Bs.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Wa(this):Ka(this),3==this.readyState&&Ga(this)}},Bs.Za=function(e){this.g&&(this.response=this.responseText=e,Wa(this))},Bs.Ya=function(e){this.g&&(this.response=e,Wa(this))},Bs.ka=function(){this.g&&Wa(this)},Bs.setRequestHeader=function(e,t){this.v.append(e,t)},Bs.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Bs.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(qa.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Xa=Gs.JSON.parse;function Ya(e){sr.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Qa,this.L=this.M=!1}ni(Ya,sr);var Qa="",Ja=/^https?$/i,Za=["POST","PUT"];function eo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,to(e),so(e)}function to(e){e.F||(e.F=!0,ir(e,"complete"),ir(e,"error"))}function no(e){if(e.h&&void 0!==Hs&&(!e.C[1]||4!=ro(e)||2!=e.da()))if(e.v&&4==ro(e))yr(e.La,0,e);else if(ir(e,"readystatechange"),4==ro(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===o){var i=String(e.I).match(ca)[1]||null;if(!i&&Gs.self&&Gs.self.location){var r=Gs.self.location.protocol;i=r.substr(0,r.length-1)}s=!Ja.test(i?i.toLowerCase():"")}n=s}if(n)ir(e,"complete"),ir(e,"success");else{e.m=6;try{var a=2<ro(e)?e.g.statusText:""}catch(e){a=""}e.j=a+" ["+e.da()+"]",to(e)}}finally{so(e)}}}function so(e,t){if(e.g){io(e);const n=e.g,s=e.C[0]?Ws:null;e.g=null,e.C=null,t||ir(e,"ready");try{n.onreadystatechange=s}catch(e){}}}function io(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Gs.clearTimeout(e.A),e.A=null)}function ro(e){return e.g?e.g.readyState:0}function ao(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Qa:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function oo(e){let t="";return Vi(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function lo(e,t,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=oo(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ma(e,t,n))}function co(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function uo(e){this.Ga=0,this.i=[],this.j=new Cr,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=co("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=co("baseRetryDelayMs",5e3,e),this.hb=co("retryDelaySeedMs",1e4,e),this.eb=co("forwardChannelMaxRetries",2,e),this.xa=co("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new La(e&&e.concurrentRequestLimit),this.Ja=new $a,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function ho(e){if(fo(e),3==e.H){var t=e.W++,n=ha(e.G);ma(n,"SID",e.J),ma(n,"RID",t),ma(n,"TYPE","terminate"),vo(e,n),(t=new Gr(e,e.j,t,void 0)).L=2,t.v=ga(ha(n)),n=!1,Gs.navigator&&Gs.navigator.sendBeacon&&(n=Gs.navigator.sendBeacon(t.v.toString(),"")),!n&&Gs.Image&&((new Image).src=t.v,n=!0),n||(t.g=Ao(t.l,null),t.g.ha(t.v)),t.G=Date.now(),na(t)}ko(e)}function po(e){e.g&&(Eo(e),e.g.cancel(),e.g=null)}function fo(e){po(e),e.u&&(Gs.clearTimeout(e.u),e.u=null),So(e),e.h.cancel(),e.m&&("number"==typeof e.m&&Gs.clearTimeout(e.m),e.m=null)}function mo(e){Na(e.h)||e.m||(e.m=!0,dr(e.Na,e),e.C=0)}function go(e,t){var n;n=t?t.m:e.W++;const s=ha(e.G);ma(s,"SID",e.J),ma(s,"RID",n),ma(s,"AID",e.V),vo(e,s),e.o&&e.s&&lo(s,e.o,e.s),n=new Gr(e,e.j,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=yo(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ra(e.h,n),Qr(n,s,t)}function vo(e,t){e.ma&&Vi(e.ma,(function(e,n){ma(t,n,e)})),e.l&&la({},(function(e,n){ma(t,n,e)}))}function yo(e,t,n){n=Math.min(e.i.length,n);var s=e.l?ei(e.l.Va,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let r=!0;for(let a=0;a<n;a++){let n=i[a].h;const o=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),r=!1;else try{za(o,e,"req"+n+"_")}catch(e){s&&s(o)}}if(r){s=e.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,s}function wo(e){e.g||e.u||(e.ba=1,dr(e.Ma,e),e.A=0)}function bo(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Or(ei(e.Ma,e),Co(e,e.A)),e.A++,!0)}function Eo(e){null!=e.B&&(Gs.clearTimeout(e.B),e.B=null)}function To(e){e.g=new Gr(e,e.j,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=ha(e.wa);ma(t,"RID","rpc"),ma(t,"SID",e.J),ma(t,"CI",e.M?"0":"1"),ma(t,"AID",e.V),ma(t,"TYPE","xmlhttp"),vo(e,t),e.o&&e.s&&lo(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=ga(ha(t)),n.s=null,n.S=!0,Jr(n,e)}function So(e){null!=e.v&&(Gs.clearTimeout(e.v),e.v=null)}function Io(e,t){var n=null;if(e.g==t){So(e),Eo(e),e.g=null;var s=2}else{if(!Oa(e.h,t))return;n=t.F,Fa(e.h,t),s=1}if(0!=e.H)if(e.ta=t.aa,t.i)if(1==s){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;ir(s=Ar(),new Pr(s,n)),mo(e)}else wo(e);else if(3==(i=t.o)||0==i&&0<e.ta||!(1==s&&function(e,t){return!(Pa(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.F.concat(e.i),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Or(ei(e.Na,e,t),Co(e,e.C)),e.C++,0)))}(e,t)||2==s&&bo(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:_o(e,5);break;case 4:_o(e,10);break;case 3:_o(e,6);break;default:_o(e,2)}}function Co(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function _o(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var s=ei(e.pb,e);n||(n=new ua("//www.google.com/images/cleardot.gif"),Gs.location&&"http"==Gs.location.protocol||da(n,"https"),ga(n)),function(e,t){const n=new Cr;if(Gs.Image){const s=new Image;s.onload=ti(Ba,n,s,"TestLoadImage: loaded",!0,t),s.onerror=ti(Ba,n,s,"TestLoadImage: error",!1,t),s.onabort=ti(Ba,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=ti(Ba,n,s,"TestLoadImage: timeout",!1,t),Gs.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=e}else t(!1)}(n.toString(),s)}else Nr(2);e.H=0,e.l&&e.l.za(t),ko(e),fo(e)}function ko(e){if(e.H=0,e.pa=[],e.l){const t=Va(e.h);0==t.length&&0==e.i.length||(ai(e.pa,t),ai(e.pa,e.i),e.h.i.length=0,ri(e.i),e.i.length=0),e.l.ya()}}function xo(e,t,n){var s=n instanceof ua?ha(n):new ua(n,void 0);if(""!=s.g)t&&(s.g=t+"."+s.g),pa(s,s.m);else{var i=Gs.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new ua(null,void 0);s&&da(r,s),t&&(r.g=t),i&&pa(r,i),n&&(r.l=n),s=r}return n=e.F,t=e.Da,n&&t&&ma(s,n,t),ma(s,"VER",e.qa),vo(e,s),s}function Ao(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new Ya(new ja({ob:!0})):new Ya(e.va)).Oa(e.I),t}function Mo(){}function Lo(){if(wi&&!(10<=Number(Li)))throw Error("Environmental error: no available transport.")}function Do(e,t){sr.call(this),this.g=new uo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ci(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ci(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Oo(this)}function No(e){jr.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Po(){qr.call(this),this.status=1}function Oo(e){this.g=e}function Ro(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Fo(e,t,n){n||(n=0);var s=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)s[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var r=e.g[3],a=t+(r^n&(i^r))+s[0]+3614090360&4294967295;a=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=n+(a<<7&4294967295|a>>>25))+((a=r+(i^t&(n^i))+s[1]+3905402710&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^r&(t^n))+s[2]+606105819&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(r^t))+s[3]+3250441966&4294967295)<<22&4294967295|a>>>10))+((a=t+(r^n&(i^r))+s[4]+4118548399&4294967295)<<7&4294967295|a>>>25))+((a=r+(i^t&(n^i))+s[5]+1200080426&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^r&(t^n))+s[6]+2821735955&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(r^t))+s[7]+4249261313&4294967295)<<22&4294967295|a>>>10))+((a=t+(r^n&(i^r))+s[8]+1770035416&4294967295)<<7&4294967295|a>>>25))+((a=r+(i^t&(n^i))+s[9]+2336552879&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^r&(t^n))+s[10]+4294925233&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(r^t))+s[11]+2304563134&4294967295)<<22&4294967295|a>>>10))+((a=t+(r^n&(i^r))+s[12]+1804603682&4294967295)<<7&4294967295|a>>>25))+((a=r+(i^t&(n^i))+s[13]+4254626195&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^r&(t^n))+s[14]+2792965006&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(r^t))+s[15]+1236535329&4294967295)<<22&4294967295|a>>>10))+((a=t+(i^r&(n^i))+s[1]+4129170786&4294967295)<<5&4294967295|a>>>27))+((a=r+(n^i&(t^n))+s[6]+3225465664&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(r^t))+s[11]+643717713&4294967295)<<14&4294967295|a>>>18))+((a=n+(r^t&(i^r))+s[0]+3921069994&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^r&(n^i))+s[5]+3593408605&4294967295)<<5&4294967295|a>>>27))+((a=r+(n^i&(t^n))+s[10]+38016083&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(r^t))+s[15]+3634488961&4294967295)<<14&4294967295|a>>>18))+((a=n+(r^t&(i^r))+s[4]+3889429448&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^r&(n^i))+s[9]+568446438&4294967295)<<5&4294967295|a>>>27))+((a=r+(n^i&(t^n))+s[14]+3275163606&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(r^t))+s[3]+4107603335&4294967295)<<14&4294967295|a>>>18))+((a=n+(r^t&(i^r))+s[8]+1163531501&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^r&(n^i))+s[13]+2850285829&4294967295)<<5&4294967295|a>>>27))+((a=r+(n^i&(t^n))+s[2]+4243563512&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(r^t))+s[7]+1735328473&4294967295)<<14&4294967295|a>>>18))+((a=n+(r^t&(i^r))+s[12]+2368359562&4294967295)<<20&4294967295|a>>>12))+((a=t+(n^i^r)+s[5]+4294588738&4294967295)<<4&4294967295|a>>>28))+((a=r+(t^n^i)+s[8]+2272392833&4294967295)<<11&4294967295|a>>>21))+((a=i+(r^t^n)+s[11]+1839030562&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^r^t)+s[14]+4259657740&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^r)+s[1]+2763975236&4294967295)<<4&4294967295|a>>>28))+((a=r+(t^n^i)+s[4]+1272893353&4294967295)<<11&4294967295|a>>>21))+((a=i+(r^t^n)+s[7]+4139469664&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^r^t)+s[10]+3200236656&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^r)+s[13]+681279174&4294967295)<<4&4294967295|a>>>28))+((a=r+(t^n^i)+s[0]+3936430074&4294967295)<<11&4294967295|a>>>21))+((a=i+(r^t^n)+s[3]+3572445317&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^r^t)+s[6]+76029189&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^r)+s[9]+3654602809&4294967295)<<4&4294967295|a>>>28))+((a=r+(t^n^i)+s[12]+3873151461&4294967295)<<11&4294967295|a>>>21))+((a=i+(r^t^n)+s[15]+530742520&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^r^t)+s[2]+3299628645&4294967295)<<23&4294967295|a>>>9))+((a=t+(i^(n|~r))+s[0]+4096336452&4294967295)<<6&4294967295|a>>>26))+((a=r+(n^(t|~i))+s[7]+1126891415&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(r|~n))+s[14]+2878612391&4294967295)<<15&4294967295|a>>>17))+((a=n+(r^(i|~t))+s[5]+4237533241&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~r))+s[12]+1700485571&4294967295)<<6&4294967295|a>>>26))+((a=r+(n^(t|~i))+s[3]+2399980690&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(r|~n))+s[10]+4293915773&4294967295)<<15&4294967295|a>>>17))+((a=n+(r^(i|~t))+s[1]+2240044497&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~r))+s[8]+1873313359&4294967295)<<6&4294967295|a>>>26))+((a=r+(n^(t|~i))+s[15]+4264355552&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(r|~n))+s[6]+2734768916&4294967295)<<15&4294967295|a>>>17))+((a=n+(r^(i|~t))+s[13]+1309151649&4294967295)<<21&4294967295|a>>>11))+((r=(t=n+((a=t+(i^(n|~r))+s[4]+4149444226&4294967295)<<6&4294967295|a>>>26))+((a=r+(n^(t|~i))+s[11]+3174756917&4294967295)<<10&4294967295|a>>>22))^((i=r+((a=i+(t^(r|~n))+s[2]+718787259&4294967295)<<15&4294967295|a>>>17))|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+r&4294967295}function Vo(e,t){this.h=t;for(var n=[],s=!0,i=e.length-1;0<=i;i--){var r=0|e[i];s&&r==t||(n[i]=r,s=!1)}this.g=n}(Bs=Ya.prototype).Oa=function(e){this.M=e},Bs.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():zr.g(),this.C=this.u?Ur(this.u):Ur(zr),this.g.onreadystatechange=ei(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void eo(this,e)}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const e of s.keys())n.set(e,s.get(e))}s=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=Gs.FormData&&e instanceof Gs.FormData,!(0<=ii(Za,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{io(this),0<this.B&&((this.L=function(e){return wi&&mi(Ai,9,(function(){let e=0;const t=ui(String(gi)).split("."),n=ui("9").split("."),s=Math.max(t.length,n.length);for(let a=0;0==e&&a<s;a++){var i=t[a]||"",r=n[a]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;e=hi(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||hi(0==i[2].length,0==r[2].length)||hi(i[2],r[2]),i=i[3],r=r[3]}while(0==e)}return 0<=e}))&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ei(this.ua,this)):this.A=yr(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){eo(this,e)}},Bs.ua=function(){void 0!==Hs&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ir(this,"timeout"),this.abort(8))},Bs.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ir(this,"complete"),ir(this,"abort"),so(this))},Bs.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),so(this,!0)),Ya.$.N.call(this)},Bs.La=function(){this.s||(this.G||this.v||this.l?no(this):this.kb())},Bs.kb=function(){no(this)},Bs.da=function(){try{return 2<ro(this)?this.g.status:-1}catch(e){return-1}},Bs.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Bs.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Xa(t)}},Bs.Ia=function(){return this.m},Bs.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Bs=uo.prototype).qa=8,Bs.H=1,Bs.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Gr(this,this.j,e,void 0);let r=this.s;if(this.U&&(r?(r=Ui(r),zi(r,this.U)):r=this.U),null!==this.o||this.O||(i.I=r,r=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(t+=s)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=yo(this,i,t),ma(n=ha(this.G),"RID",e),ma(n,"CVER",22),this.F&&ma(n,"X-HTTP-Session-Id",this.F),vo(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(oo(r)))+"&"+t:this.o&&lo(n,this.o,r)),Ra(this.h,i),this.bb&&ma(n,"TYPE","init"),this.P?(ma(n,"$req",t),ma(n,"SID","null"),i.ba=!0,Qr(i,n,null)):Qr(i,n,t),this.H=2}}else 3==this.H&&(e?go(this,e):0==this.i.length||Na(this.h)||go(this))},Bs.Ma=function(){if(this.u=null,To(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=Or(ei(this.jb,this),e)}},Bs.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Nr(10),po(this),To(this))},Bs.ib=function(){null!=this.v&&(this.v=null,po(this),bo(this),Nr(19))},Bs.pb=function(e){e?(this.j.info("Successfully pinged google.com"),Nr(2)):(this.j.info("Failed to ping google.com"),Nr(1))},(Bs=Mo.prototype).Ba=function(){},Bs.Aa=function(){},Bs.za=function(){},Bs.ya=function(){},Bs.Va=function(){},Lo.prototype.g=function(e,t){return new Do(e,t)},ni(Do,sr),Do.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;Nr(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=xo(e,null,e.Y),mo(e)},Do.prototype.close=function(){ho(this.g)},Do.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ar(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.fb++,e)),3==t.H&&mo(t)},Do.prototype.N=function(){this.g.l=null,delete this.j,ho(this.g),delete this.g,Do.$.N.call(this)},ni(No,jr),ni(Po,qr),ni(Oo,Mo),Oo.prototype.Ba=function(){ir(this.g,"a")},Oo.prototype.Aa=function(e){ir(this.g,new No(e))},Oo.prototype.za=function(e){ir(this.g,new Po)},Oo.prototype.ya=function(){ir(this.g,"b")},ni(Ro,(function(){this.blockSize=-1})),Ro.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Ro.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,s=this.m,i=this.h,r=0;r<t;){if(0==i)for(;r<=n;)Fo(this,e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(s[i++]=e.charCodeAt(r++),i==this.blockSize){Fo(this,s),i=0;break}}else for(;r<t;)if(s[i++]=e[r++],i==this.blockSize){Fo(this,s),i=0;break}}this.h=i,this.i+=t},Ro.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};var Uo={};function $o(e){return-128<=e&&128>e?mi(Uo,e,(function(e){return new Vo([0|e],0>e?-1:0)})):new Vo([0|e],0>e?-1:0)}function zo(e){if(isNaN(e)||!isFinite(e))return jo;if(0>e)return Ko(zo(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=Bo;return new Vo(t,0)}var Bo=4294967296,jo=$o(0),qo=$o(1),Ho=$o(16777216);function Go(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Wo(e){return-1==e.h}function Ko(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new Vo(n,~e.h).add(qo)}function Xo(e,t){return e.add(Ko(t))}function Yo(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Qo(e,t){this.g=e,this.h=t}function Jo(e,t){if(Go(t))throw Error("division by zero");if(Go(e))return new Qo(jo,jo);if(Wo(e))return t=Jo(Ko(e),t),new Qo(Ko(t.g),Ko(t.h));if(Wo(t))return t=Jo(e,Ko(t)),new Qo(Ko(t.g),t.h);if(30<e.g.length){if(Wo(e)||Wo(t))throw Error("slowDivide_ only works with positive integers.");for(var n=qo,s=t;0>=s.X(e);)n=Zo(n),s=Zo(s);var i=el(n,1),r=el(s,1);for(s=el(s,2),n=el(n,2);!Go(s);){var a=r.add(s);0>=a.X(e)&&(i=i.add(n),r=a),s=el(s,1),n=el(n,1)}return t=Xo(e,i.R(t)),new Qo(i,t)}for(i=jo;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=48>=(s=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,s-48),a=(r=zo(n)).R(t);Wo(a)||0<a.X(e);)a=(r=zo(n-=s)).R(t);Go(r)&&(r=qo),i=i.add(r),e=Xo(e,a)}return new Qo(i,e)}function Zo(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new Vo(n,e.h)}function el(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,i=[],r=0;r<s;r++)i[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new Vo(i,e.h)}(Bs=Vo.prototype).ea=function(){if(Wo(this))return-Ko(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:Bo+s)*t,t*=Bo}return e},Bs.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(Go(this))return"0";if(Wo(this))return"-"+Ko(this).toString(e);for(var t=zo(Math.pow(e,6)),n=this,s="";;){var i=Jo(n,t).g,r=((0<(n=Xo(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(Go(n=i))return r+s;for(;6>r.length;)r="0"+r;s=r+s}},Bs.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},Bs.X=function(e){return Wo(e=Xo(this,e))?-1:Go(e)?0:1},Bs.abs=function(){return Wo(this)?Ko(this):this},Bs.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,i=0;i<=t;i++){var r=s+(65535&this.D(i))+(65535&e.D(i)),a=(r>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);s=a>>>16,r&=65535,a&=65535,n[i]=a<<16|r}return new Vo(n,-2147483648&n[n.length-1]?-1:0)},Bs.R=function(e){if(Go(this)||Go(e))return jo;if(Wo(this))return Wo(e)?Ko(this).R(Ko(e)):Ko(Ko(this).R(e));if(Wo(e))return Ko(this.R(Ko(e)));if(0>this.X(Ho)&&0>e.X(Ho))return zo(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<e.g.length;i++){var r=this.D(s)>>>16,a=65535&this.D(s),o=e.D(i)>>>16,l=65535&e.D(i);n[2*s+2*i]+=a*l,Yo(n,2*s+2*i),n[2*s+2*i+1]+=r*l,Yo(n,2*s+2*i+1),n[2*s+2*i+1]+=a*o,Yo(n,2*s+2*i+1),n[2*s+2*i+2]+=r*o,Yo(n,2*s+2*i+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new Vo(n,0)},Bs.gb=function(e){return Jo(this,e).h},Bs.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new Vo(n,this.h&e.h)},Bs.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new Vo(n,this.h|e.h)},Bs.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new Vo(n,this.h^e.h)},Lo.prototype.createWebChannel=Lo.prototype.g,Do.prototype.send=Do.prototype.u,Do.prototype.open=Do.prototype.m,Do.prototype.close=Do.prototype.close,Rr.NO_ERROR=0,Rr.TIMEOUT=8,Rr.HTTP_ERROR=6,Fr.COMPLETE="complete",$r.EventType=Br,Br.OPEN="a",Br.CLOSE="b",Br.ERROR="c",Br.MESSAGE="d",sr.prototype.listen=sr.prototype.O,Ya.prototype.listenOnce=Ya.prototype.P,Ya.prototype.getLastError=Ya.prototype.Sa,Ya.prototype.getLastErrorCode=Ya.prototype.Ia,Ya.prototype.getStatus=Ya.prototype.da,Ya.prototype.getResponseJson=Ya.prototype.Wa,Ya.prototype.getResponseText=Ya.prototype.ja,Ya.prototype.send=Ya.prototype.ha,Ya.prototype.setWithCredentials=Ya.prototype.Oa,Ro.prototype.digest=Ro.prototype.l,Ro.prototype.reset=Ro.prototype.reset,Ro.prototype.update=Ro.prototype.j,Vo.prototype.add=Vo.prototype.add,Vo.prototype.multiply=Vo.prototype.R,Vo.prototype.modulo=Vo.prototype.gb,Vo.prototype.compare=Vo.prototype.X,Vo.prototype.toNumber=Vo.prototype.ea,Vo.prototype.toString=Vo.prototype.toString,Vo.prototype.getBits=Vo.prototype.D,Vo.fromNumber=zo,Vo.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return Ko(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var s=zo(Math.pow(n,8)),i=jo,r=0;r<t.length;r+=8){var a=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+a),n);8>a?(a=zo(Math.pow(n,a)),i=i.R(a).add(zo(o))):i=(i=i.R(s)).add(zo(o))}return i};var tl=qs.createWebChannelTransport=function(){return new Lo},nl=qs.getStatEventTarget=function(){return Ar()},sl=qs.ErrorCode=Rr,il=qs.EventType=Fr,rl=qs.Event=kr,al=qs.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ol=qs.FetchXmlHttpFactory=ja,ll=qs.WebChannel=$r,cl=qs.XhrIo=Ya,ul=qs.Md5=Ro,hl=qs.Integer=Vo;
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
class dl{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}dl.UNAUTHENTICATED=new dl(null),dl.GOOGLE_CREDENTIALS=new dl("google-credentials-uid"),dl.FIRST_PARTY=new dl("first-party-uid"),dl.MOCK_USER=new dl("mock-user");
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
let pl="9.22.0";
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
 */const fl=new ae("@firebase/firestore");function ml(){return fl.logLevel}function gl(e,...t){if(fl.logLevel<=ee.DEBUG){const n=t.map(wl);fl.debug(`Firestore (${pl}): ${e}`,...n)}}function vl(e,...t){if(fl.logLevel<=ee.ERROR){const n=t.map(wl);fl.error(`Firestore (${pl}): ${e}`,...n)}}function yl(e,...t){if(fl.logLevel<=ee.WARN){const n=t.map(wl);fl.warn(`Firestore (${pl}): ${e}`,...n)}}function wl(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function bl(e="Unexpected state"){const t=`FIRESTORE (${pl}) INTERNAL ASSERTION FAILED: `+e;throw vl(t),new Error(t)}function El(e,t){e||bl()}function Tl(e,t){return e}
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
 */const Sl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Il extends F{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Cl{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class _l{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(dl.UNAUTHENTICATED)))}shutdown(){}}class xl{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class Al{start(e,t){let n=this.i;const s=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Cl;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Cl,e.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await s(this.currentUser)}))},a=e=>{gl("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(gl("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Cl)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(gl("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(El("string"==typeof t.accessToken),new _l(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return El(null===e||"string"==typeof e),new dl(e)}constructor(e){this.t=e,this.currentUser=dl.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Ml{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=dl.FIRST_PARTY,this.g=new Map}}class Ll{getToken(){return Promise.resolve(new Ml(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(dl.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.h=e,this.l=t,this.m=n}}class Dl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nl{start(e,t){const n=e=>{null!=e.error&&gl("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,gl("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const s=e=>{gl("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>s(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?s(e):gl("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(El("string"==typeof e.token),this.T=e.token,new Dl(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function Pl(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class Ol{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=Pl(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function Rl(e,t){return e<t?-1:e>t?1:0}function Fl(e,t,n){return e.length===t.length&&e.every(((e,s)=>n(e,t[s])))}
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
class Vl{static now(){return Vl.fromMillis(Date.now())}static fromDate(e){return Vl.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Vl(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Rl(this.nanoseconds,e.nanoseconds):Rl(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Il(Sl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Il(Sl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Il(Sl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Il(Sl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
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
 */class Ul{static fromTimestamp(e){return new Ul(e)}static min(){return new Ul(new Vl(0,0))}static max(){return new Ul(new Vl(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
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
 */class $l{get length(){return this.len}isEqual(e){return 0===$l.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $l?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const n=e.get(s),i=t.get(s);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&bl(),void 0===n?n=e.length-t:n>e.length-t&&bl(),this.segments=e,this.offset=t,this.len=n}}class zl extends $l{construct(e,t,n){return new zl(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Il(Sl.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new zl(t)}static emptyPath(){return new zl([])}}const Bl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jl extends $l{construct(e,t,n){return new jl(e,t,n)}static isValidIdentifier(e){return Bl.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jl.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new jl(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(0===n.length)throw new Il(Sl.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let r=!1;for(;s<e.length;){const t=e[s];if("\\"===t){if(s+1===e.length)throw new Il(Sl.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[s+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Il(Sl.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,s+=2}else"`"===t?(r=!r,s++):"."!==t||r?(n+=t,s++):(i(),s++)}if(i(),r)throw new Il(Sl.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jl(t)}static emptyPath(){return new jl([])}}
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
 */class ql{static fromPath(e){return new ql(zl.fromString(e))}static fromName(e){return new ql(zl.fromString(e).popFirst(5))}static empty(){return new ql(zl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===zl.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return zl.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ql(new zl(e.slice()))}constructor(e){this.path=e}}
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
 */class Hl{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}Hl.UNKNOWN_ID=-1;function Gl(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=Ul.fromTimestamp(1e9===s?new Vl(n+1,0):new Vl(n,s));return new Kl(i,ql.empty(),t)}function Wl(e){return new Kl(e.readTime,e.key,-1)}class Kl{static min(){return new Kl(Ul.min(),ql.empty(),-1)}static max(){return new Kl(Ul.max(),ql.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function Xl(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ql.comparator(e.documentKey,t.documentKey),0!==n?n:Rl(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ql{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
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
 */async function Jl(e){if(e.code!==Sl.FAILED_PRECONDITION||e.message!==Yl)throw e;gl("LocalStore","Unexpectedly lost primary lease")}
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
 */class Zl{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&bl(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Zl(((n,s)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,s)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Zl?t:Zl.resolve(t)}catch(e){return Zl.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Zl.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Zl.reject(t)}static resolve(e){return new Zl(((t,n)=>{t(e)}))}static reject(e){return new Zl(((t,n)=>{n(e)}))}static waitFor(e){return new Zl(((t,n)=>{let s=0,i=0,r=!1;e.forEach((e=>{++s,e.next((()=>{++i,r&&i===s&&t()}),(e=>n(e)))})),r=!0,i===s&&t()}))}static or(e){let t=Zl.resolve(!1);for(const n of e)t=t.next((e=>e?Zl.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,s)=>{n.push(t.call(this,e,s))})),this.waitFor(n)}static mapArray(e,t){return new Zl(((n,s)=>{const i=e.length,r=new Array(i);let a=0;for(let o=0;o<i;o++){const l=o;t(e[l]).next((e=>{r[l]=e,++a,a===i&&n(r)}),(e=>s(e)))}}))}static doWhile(e,t){return new Zl(((n,s)=>{const i=()=>{!0===e()?t().next((()=>{i()}),s):n()};i()}))}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
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
 */function ec(e){return"IndexedDbTransactionError"===e.name}
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
class tc{ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}}function nc(e){return null==e}function sc(e){return 0===e&&1/e==-1/0}function ic(e){return"number"==typeof e&&Number.isInteger(e)&&!sc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */tc.ct=-1;const rc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ac=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],oc=ac;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function lc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function cc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function uc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class hc{insert(e,t){return new hc(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pc.BLACK,null,null))}remove(e){return new hc(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pc.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(0===s)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dc(this.root,e,this.comparator,!1)}getReverseIterator(){return new dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dc(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||pc.EMPTY}}class dc{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class pc{copy(e,t,n,s,i){return new pc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):0===i?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pc.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===t(e,s.key)){if(s.right.isEmpty())return pc.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw bl();if(this.right.isRed())throw bl();const e=this.left.check();if(e!==this.right.check())throw bl();return e+(this.isRed()?0:1)}constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=null!=n?n:pc.RED,this.left=null!=s?s:pc.EMPTY,this.right=null!=i?i:pc.EMPTY,this.size=this.left.size+1+this.right.size}}pc.EMPTY=null,pc.RED=!0,pc.BLACK=!1,pc.EMPTY=new class{get key(){throw bl()}get value(){throw bl()}get color(){throw bl()}get left(){throw bl()}get right(){throw bl()}copy(e,t,n,s,i){return this}insert(e,t,n){return new pc(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class fc{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new mc(this.data.getIterator())}getIteratorFrom(e){return new mc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof fc))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=n.getNext().key;if(0!==this.comparator(e,s))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new fc(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new hc(this.comparator)}}class mc{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class gc{static empty(){return new gc([])}unionWith(e){let t=new fc(jl.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new gc(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fl(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(jl.comparator)}}
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
 */let yc=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new vc("Invalid base64 string: "+e):e}}(e);return new wc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new wc(t)}[yc](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Rl(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}wc.EMPTY_BYTE_STRING=new wc("");const bc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ec(e){if(El(!!e),"string"==typeof e){let t=0;const n=bc.exec(e);if(El(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Tc(e.seconds),nanos:Tc(e.nanos)}}function Tc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Sc(e){return"string"==typeof e?wc.fromBase64String(e):wc.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Cc(e){const t=e.mapValue.fields.__previous_value__;return Ic(t)?Cc(t):t}function _c(e){const t=Ec(e.mapValue.fields.__local_write_time__.timestampValue);return new Vl(t.seconds,t.nanos)}
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
 */class kc{constructor(e,t,n,s,i,r,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class xc{static empty(){return new xc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof xc&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ic(e)?4:qc(e)?9007199254740991:10:bl()}function Lc(e,t){if(e===t)return!0;const n=Mc(e);if(n!==Mc(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return _c(e).isEqual(_c(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ec(e.timestampValue),s=Ec(t.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return s=t,Sc(e.bytesValue).isEqual(Sc(s.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Tc(e.geoPointValue.latitude)===Tc(t.geoPointValue.latitude)&&Tc(e.geoPointValue.longitude)===Tc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Tc(e.integerValue)===Tc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Tc(e.doubleValue),s=Tc(t.doubleValue);return n===s?sc(n)===sc(s):isNaN(n)&&isNaN(s)}return!1}(e,t);case 9:return Fl(e.arrayValue.values||[],t.arrayValue.values||[],Lc);case 10:return function(e,t){const n=e.mapValue.fields||{},s=t.mapValue.fields||{};if(lc(n)!==lc(s))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===s[e]||!Lc(n[e],s[e])))return!1;return!0}(e,t);default:return bl()}var s}function Dc(e,t){return void 0!==(e.values||[]).find((e=>Lc(e,t)))}function Nc(e,t){if(e===t)return 0;const n=Mc(e),s=Mc(t);if(n!==s)return Rl(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Rl(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Tc(e.integerValue||e.doubleValue),s=Tc(t.integerValue||t.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(e,t);case 3:return Pc(e.timestampValue,t.timestampValue);case 4:return Pc(_c(e),_c(t));case 5:return Rl(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Sc(e),s=Sc(t);return n.compareTo(s)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),s=t.split("/");for(let e=0;e<n.length&&e<s.length;e++){const t=Rl(n[e],s[e]);if(0!==t)return t}return Rl(n.length,s.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Rl(Tc(e.latitude),Tc(t.latitude));return 0!==n?n:Rl(Tc(e.longitude),Tc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],s=t.values||[];for(let e=0;e<n.length&&e<s.length;++e){const t=Nc(n[e],s[e]);if(t)return t}return Rl(n.length,s.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Ac.mapValue&&t===Ac.mapValue)return 0;if(e===Ac.mapValue)return 1;if(t===Ac.mapValue)return-1;const n=e.fields||{},s=Object.keys(n),i=t.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let e=0;e<s.length&&e<r.length;++e){const t=Rl(s[e],r[e]);if(0!==t)return t;const a=Nc(n[s[e]],i[r[e]]);if(0!==a)return a}return Rl(s.length,r.length)}(e.mapValue,t.mapValue);default:throw bl()}}function Pc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Rl(e,t);const n=Ec(e),s=Ec(t),i=Rl(n.seconds,s.seconds);return 0!==i?i:Rl(n.nanos,s.nanos)}function Oc(e){return Rc(e)}function Rc(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ec(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Sc(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ql.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const s of e.values||[])n?n=!1:t+=",",t+=Rc(s);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",s=!0;for(const i of t)s?s=!1:n+=",",n+=`${i}:${Rc(e.fields[i])}`;return n+"}"}(e.mapValue):bl()}function Fc(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Vc(e){return!!e&&"integerValue"in e}function Uc(e){return!!e&&"arrayValue"in e}function $c(e){return!!e&&"nullValue"in e}function zc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Bc(e){return!!e&&"mapValue"in e}function jc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return cc(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=jc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=jc(e.arrayValue.values[n]);return t}return Object.assign({},e)}function qc(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Hc{static empty(){return new Hc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Bc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jc(t)}setAll(e){let t=jl.emptyPath(),n={},s=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,s),n={},s=[],t=i.popLast()}e?n[i.lastSegment()]=jc(e):s.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Bc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Lc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Bc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){cc(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Hc(jc(this.value))}constructor(e){this.value=e}}function Gc(e){const t=[];return cc(e.fields,((e,n)=>{const s=new jl([e]);if(Bc(n)){const e=Gc(n.mapValue).fields;if(0===e.length)t.push(s);else for(const n of e)t.push(s.child(n))}else t.push(s)})),new gc(t)
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
 */}class Wc{static newInvalidDocument(e){return new Wc(e,0,Ul.min(),Ul.min(),Ul.min(),Hc.empty(),0)}static newFoundDocument(e,t,n,s){return new Wc(e,1,t,Ul.min(),n,s,0)}static newNoDocument(e,t){return new Wc(e,2,t,Ul.min(),Ul.min(),Hc.empty(),0)}static newUnknownDocument(e,t){return new Wc(e,3,t,Ul.min(),Ul.min(),Hc.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ul.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Hc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Hc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ul.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Wc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wc(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,s,i,r,a){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=a}}
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
 */class Kc{constructor(e,t){this.position=e,this.inclusive=t}}function Xc(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],a=e.position[i];if(s=r.field.isKeyField()?ql.comparator(ql.fromName(a.referenceValue),n.key):Nc(a,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function Yc(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Lc(e.position[n],t.position[n]))return!1;return!0}
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
 */class Qc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Jc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class Zc{}class eu extends Zc{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new lu(e,t,n):"array-contains"===t?new du(e,n):"in"===t?new pu(e,n):"not-in"===t?new fu(e,n):"array-contains-any"===t?new mu(e,n):new eu(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new cu(e,n):new uu(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Nc(t,this.value)):null!==t&&Mc(this.value)===Mc(t)&&this.matchesComparison(Nc(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return bl()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class tu extends Zc{static create(e,t){return new tu(e,t)}matches(e){return nu(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}}function nu(e){return"and"===e.op}function su(e){return iu(e)&&nu(e)}function iu(e){for(const t of e.filters)if(t instanceof tu)return!1;return!0}function ru(e){if(e instanceof eu)return e.field.canonicalString()+e.op.toString()+Oc(e.value);if(su(e))return e.filters.map((e=>ru(e))).join(",");{const t=e.filters.map((e=>ru(e))).join(",");return`${e.op}(${t})`}}function au(e,t){return e instanceof eu?(n=e,(s=t)instanceof eu&&n.op===s.op&&n.field.isEqual(s.field)&&Lc(n.value,s.value)):e instanceof tu?function(e,t){return t instanceof tu&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,s)=>e&&au(n,t.filters[s])),!0)}(e,t):void bl();var n,s}function ou(e){return e instanceof eu?`${(t=e).field.canonicalString()} ${t.op} ${Oc(t.value)}`:e instanceof tu?function(e){return e.op.toString()+" {"+e.getFilters().map(ou).join(" ,")+"}"}(e):"Filter";var t}class lu extends eu{matches(e){const t=ql.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,n){super(e,t,n),this.key=ql.fromName(n.referenceValue)}}class cu extends eu{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=hu("in",t)}}class uu extends eu{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=hu("not-in",t)}}function hu(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ql.fromName(e.referenceValue)))}class du extends eu{matches(e){const t=e.data.field(this.field);return Uc(t)&&Dc(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class pu extends eu{matches(e){const t=e.data.field(this.field);return null!==t&&Dc(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class fu extends eu{matches(e){if(Dc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Dc(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class mu extends eu{matches(e){const t=e.data.field(this.field);return!(!Uc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Dc(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}
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
 */class gu{constructor(e,t=null,n=[],s=[],i=null,r=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=a,this.dt=null}}function vu(e,t=null,n=[],s=[],i=null,r=null,a=null){return new gu(e,t,n,s,i,r,a)}function yu(e){const t=Tl(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>ru(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),nc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Oc(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Oc(e))).join(",")),t.dt=e}return t.dt}function wu(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Jc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!au(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Yc(e.startAt,t.startAt)&&Yc(e.endAt,t.endAt)}function bu(e){return ql.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
class Eu{constructor(e,t=null,n=[],s=[],i=null,r="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=a,this.endAt=o,this.wt=null,this._t=null,this.startAt,this.endAt}}function Tu(e,t,n,s,i,r,a,o){return new Eu(e,t,n,s,i,r,a,o)}function Su(e){return new Eu(e)}function Iu(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Cu(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function _u(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function ku(e){return null!==e.collectionGroup}function xu(e){const t=Tl(e);if(null===t.wt){t.wt=[];const e=_u(t),n=Cu(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new Qc(e)),t.wt.push(new Qc(jl.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Qc(jl.keyField(),e))}}}return t.wt}function Au(e){const t=Tl(e);if(!t._t)if("F"===t.limitType)t._t=vu(t.path,t.collectionGroup,xu(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of xu(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Qc(n.field,t))}const n=t.endAt?new Kc(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Kc(t.startAt.position,t.startAt.inclusive):null;t._t=vu(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}return t._t}function Mu(e,t){t.getFirstInequalityField(),_u(e);const n=e.filters.concat([t]);return new Eu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Lu(e,t,n){return new Eu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Du(e,t){return wu(Au(e),Au(t))&&e.limitType===t.limitType}function Nu(e){return`${yu(Au(e))}|lt:${e.limitType}`}function Pu(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>ou(e))).join(", ")}]`),nc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Oc(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Oc(e))).join(",")),`Target(${t})`}(Au(e))}; limitType=${e.limitType})`}function Ou(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ql.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of xu(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(s=t,!((n=e).startAt&&!function(e,t,n){const s=Xc(e,t,n);return e.inclusive?s<=0:s<0}(n.startAt,xu(n),s)||n.endAt&&!function(e,t,n){const s=Xc(e,t,n);return e.inclusive?s>=0:s>0}(n.endAt,xu(n),s)));var n,s}function Ru(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Fu(e){return(t,n)=>{let s=!1;for(const i of xu(e)){const e=Vu(i,t,n);if(0!==e)return e;s=s||i.field.isKeyField()}return 0}}function Vu(e,t,n){const s=e.field.isKeyField()?ql.comparator(t.key,n.key):function(e,t,n){const s=t.data.field(e),i=n.data.field(e);return null!==s&&null!==i?Nc(s,i):bl()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return bl()}}
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
 */class Uu{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,s]of n)if(this.equalsFn(t,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(void 0===s)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],e))return void(s[n]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return 1===n.length?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cc(this.inner,((t,n)=>{for(const[t,s]of n)e(t,s)}))}isEmpty(){return uc(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
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
 */const $u=new hc(ql.comparator);function zu(){return $u}const Bu=new hc(ql.comparator);function ju(...e){let t=Bu;for(const n of e)t=t.insert(n.key,n);return t}function qu(e){let t=Bu;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Hu(){return Wu()}function Gu(){return Wu()}function Wu(){return new Uu((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Ku=new hc(ql.comparator),Xu=new fc(ql.comparator);function Yu(...e){let t=Xu;for(const n of e)t=t.add(n);return t}const Qu=new fc(Rl);function Ju(){return Qu}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sc(t)?"-0":t}}function eh(e){return{integerValue:""+e}}function th(e,t){return ic(t)?eh(t):Zu(e,t)}
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
 */class nh{constructor(){this._=void 0}}function sh(e,t,n){return e instanceof ah?oh(e,t):e instanceof lh?ch(e,t):n}function ih(e,t){var n,s;return e instanceof uh?Vc(n=t)||(s=n)&&"doubleValue"in s?t:{integerValue:0}:null}class rh extends nh{}class ah extends nh{constructor(e){super(),this.elements=e}}function oh(e,t){const n=dh(t);for(const t of e.elements)n.some((e=>Lc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class lh extends nh{constructor(e){super(),this.elements=e}}function ch(e,t){let n=dh(t);for(const t of e.elements)n=n.filter((e=>!Lc(e,t)));return{arrayValue:{values:n}}}class uh extends nh{constructor(e,t){super(),this.serializer=e,this.gt=t}}function hh(e){return Tc(e.integerValue||e.doubleValue)}function dh(e){return Uc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class ph{constructor(e,t){this.version=e,this.transformResults=t}}class fh{static none(){return new fh}static exists(e){return new fh(void 0,e)}static updateTime(e){return new fh(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function mh(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class gh{}function vh(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new kh(e.key,fh.none()):new Th(e.key,e.data,fh.none());{const n=e.data,s=Hc.empty();let i=new fc(jl.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?s.delete(e):s.set(e,t),i=i.add(e)}return new Sh(e.key,s,new gc(i.toArray()),fh.none())}}function yh(e,t,n){var s;e instanceof Th?function(e,t,n){const s=e.value.clone(),i=Ch(e.fieldTransforms,t,n.transformResults);s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):e instanceof Sh?function(e,t,n){if(!mh(e.precondition,t))return void t.convertToUnknownDocument(n.version);const s=Ch(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Ih(e)),i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(s=n,t.convertToNoDocument(s.version).setHasCommittedMutations())}function wh(e,t,n,s){return e instanceof Th?function(e,t,n,s){if(!mh(e.precondition,t))return n;const i=e.value.clone(),r=_h(e.fieldTransforms,s,t);return i.setAll(r),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,s):e instanceof Sh?function(e,t,n,s){if(!mh(e.precondition,t))return n;const i=_h(e.fieldTransforms,s,t),r=t.data;return r.setAll(Ih(e)),r.setAll(i),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,s):(i=t,r=n,mh(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):r);var i,r}function bh(e,t){let n=null;for(const s of e.fieldTransforms){const e=t.data.field(s.field),i=ih(s.transform,e||null);null!=i&&(null===n&&(n=Hc.empty()),n.set(s.field,i))}return n||null}function Eh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,s=t.fieldTransforms,!!(void 0===n&&void 0===s||n&&s&&Fl(n,s,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,s=t.transform,n instanceof ah&&s instanceof ah||n instanceof lh&&s instanceof lh?Fl(n.elements,s.elements,Lc):n instanceof uh&&s instanceof uh?Lc(n.gt,s.gt):n instanceof rh&&s instanceof rh);var n,s}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,s}class Th extends gh{getFieldMask(){return null}constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}}class Sh extends gh{getFieldMask(){return this.fieldMask}constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Ih(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}})),t}function Ch(e,t,n){const s=new Map;El(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],a=r.transform,o=t.data.field(r.field);s.set(r.field,sh(a,o,n[i]))}return s}function _h(e,t,n){const s=new Map;for(const o of e){const e=o.transform,l=n.data.field(o.field);s.set(o.field,(r=l,a=t,(i=e)instanceof rh?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Ic(t)&&(t=Cc(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(a,r):i instanceof ah?oh(i,r):i instanceof lh?ch(i,r):function(e,t){const n=ih(e,t),s=hh(n)+hh(e.gt);return Vc(n)&&Vc(e.gt)?eh(s):Zu(e.serializer,s)}(i,r)))}var i,r,a;return s}class kh extends gh{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class xh extends gh{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */class Ah{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const s=this.mutations[t];s.key.isEqual(e.key)&&yh(s,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=wh(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=wh(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Gu();return this.mutations.forEach((s=>{const i=e.get(s.key),r=i.overlayedDocument;let a=this.applyToLocalView(r,i.mutatedFields);a=t.has(s.key)?null:a;const o=vh(r,a);null!==o&&n.set(s.key,o),r.isValidDocument()||r.convertToNoDocument(Ul.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Yu())}isEqual(e){return this.batchId===e.batchId&&Fl(this.mutations,e.mutations,((e,t)=>Eh(e,t)))&&Fl(this.baseMutations,e.baseMutations,((e,t)=>Eh(e,t)))}constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}}class Mh{static from(e,t,n){El(e.mutations.length===n.length);let s=Ku;const i=e.mutations;for(let e=0;e<i.length;e++)s=s.insert(i[e].key,n[e].version);return new Mh(e,t,n,s)}constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}}
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
 */class Lh{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
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
class Dh{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var Nh,Ph;function Oh(e){switch(e){default:return bl();case Sl.CANCELLED:case Sl.UNKNOWN:case Sl.DEADLINE_EXCEEDED:case Sl.RESOURCE_EXHAUSTED:case Sl.INTERNAL:case Sl.UNAVAILABLE:case Sl.UNAUTHENTICATED:return!1;case Sl.INVALID_ARGUMENT:case Sl.NOT_FOUND:case Sl.ALREADY_EXISTS:case Sl.PERMISSION_DENIED:case Sl.FAILED_PRECONDITION:case Sl.ABORTED:case Sl.OUT_OF_RANGE:case Sl.UNIMPLEMENTED:case Sl.DATA_LOSS:return!0}}function Rh(e){if(void 0===e)return vl("GRPC error has no .code"),Sl.UNKNOWN;switch(e){case Nh.OK:return Sl.OK;case Nh.CANCELLED:return Sl.CANCELLED;case Nh.UNKNOWN:return Sl.UNKNOWN;case Nh.DEADLINE_EXCEEDED:return Sl.DEADLINE_EXCEEDED;case Nh.RESOURCE_EXHAUSTED:return Sl.RESOURCE_EXHAUSTED;case Nh.INTERNAL:return Sl.INTERNAL;case Nh.UNAVAILABLE:return Sl.UNAVAILABLE;case Nh.UNAUTHENTICATED:return Sl.UNAUTHENTICATED;case Nh.INVALID_ARGUMENT:return Sl.INVALID_ARGUMENT;case Nh.NOT_FOUND:return Sl.NOT_FOUND;case Nh.ALREADY_EXISTS:return Sl.ALREADY_EXISTS;case Nh.PERMISSION_DENIED:return Sl.PERMISSION_DENIED;case Nh.FAILED_PRECONDITION:return Sl.FAILED_PRECONDITION;case Nh.ABORTED:return Sl.ABORTED;case Nh.OUT_OF_RANGE:return Sl.OUT_OF_RANGE;case Nh.UNIMPLEMENTED:return Sl.UNIMPLEMENTED;case Nh.DATA_LOSS:return Sl.DATA_LOSS;default:return bl()}}(Ph=Nh||(Nh={}))[Ph.OK=0]="OK",Ph[Ph.CANCELLED=1]="CANCELLED",Ph[Ph.UNKNOWN=2]="UNKNOWN",Ph[Ph.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ph[Ph.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ph[Ph.NOT_FOUND=5]="NOT_FOUND",Ph[Ph.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ph[Ph.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ph[Ph.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ph[Ph.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ph[Ph.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ph[Ph.ABORTED=10]="ABORTED",Ph[Ph.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ph[Ph.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ph[Ph.INTERNAL=13]="INTERNAL",Ph[Ph.UNAVAILABLE=14]="UNAVAILABLE",Ph[Ph.DATA_LOSS=15]="DATA_LOSS";
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
class Fh{static get instance(){return Vh}static getOrCreateInstance(){return null===Vh&&(Vh=new Fh),Vh}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}constructor(){this.onExistenceFilterMismatchCallbacks=new Map}}let Vh=null;
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
 */function Uh(){return new TextEncoder}
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
 */const $h=new hl([4294967295,4294967295],0);function zh(e){const t=Uh().encode(e),n=new ul;return n.update(t),new Uint8Array(n.digest())}function Bh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new hl([n,s],0),new hl([i,r],0)]}class jh{Et(e,t,n){let s=e.add(t.multiply(hl.fromNumber(n)));return 1===s.compare($h)&&(s=new hl([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=zh(e),[n,s]=Bh(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,s,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),r=new jh(i,s,t);return n.forEach((e=>r.insert(e))),r}insert(e){if(0===this.It)return;const t=zh(e),[n,s]=Bh(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,s,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new qh(`Invalid padding: ${t}`);if(n<0)throw new qh(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new qh(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new qh(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=hl.fromNumber(this.It)}}class qh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class Hh{static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Gh.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Hh(Ul.min(),s,new hc(Rl),zu(),Yu())}constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}}class Gh{static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Gh(n,t,Yu(),Yu(),Yu())}constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}}
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
 */class Wh{constructor(e,t,n,s){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=s}}class Kh{constructor(e,t){this.targetId=e,this.Vt=t}}class Xh{constructor(e,t,n=wc.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Yh{get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Yu(),t=Yu(),n=Yu();return this.Dt.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:bl()}})),new Gh(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=Zh()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}constructor(){this.St=0,this.Dt=Zh(),this.Ct=wc.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}}class Qh{Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:bl()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,s=e.Vt.count,i=this.se(n);if(i){const r=i.target;if(bu(r))if(0===s){const e=new ql(r.path);this.Yt(n,e,Wc.newNoDocument(e,Ul.min()))}else El(1===s);else{const i=this.ie(n);if(i!==s){const s=this.re(e,i);if(0!==s){this.ee(n);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Fh.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var s,i,r,a,o,l;const c={localCacheCount:t,existenceFilterCount:n.count},u=n.unchangedNames;return u&&(c.bloomFilter={applied:0===e,hashCount:null!==(s=null==u?void 0:u.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(a=null===(r=null===(i=null==u?void 0:u.bits)||void 0===i?void 0:i.bitmap)||void 0===r?void 0:r.length)&&void 0!==a?a:0,padding:null!==(l=null===(o=null==u?void 0:u.bits)||void 0===o?void 0:o.padding)&&void 0!==l?l:0}),c}(s,i,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:s}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:r=0},hashCount:a=0}=n;let o,l;try{o=Sc(i).toUint8Array()}catch(e){if(e instanceof vc)return yl("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{l=new jh(o,r,a)}catch(e){return yl(e instanceof qh?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===l.It?1:s!==t-this.oe(e.targetId,l)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let s=0;return n.forEach((n=>{const i=this.Gt.ue(),r=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(r)||(this.Yt(e,n,null),s++)})),s}ce(e){const t=new Map;this.Qt.forEach(((n,s)=>{const i=this.se(s);if(i){if(n.current&&bu(i.target)){const t=new ql(i.target.path);null!==this.jt.get(t)||this.ae(s,t)||this.Yt(s,t,Wc.newNoDocument(t,e))}n.Mt&&(t.set(s,n.Ot()),n.Ft())}}));let n=Yu();this.zt.forEach(((e,t)=>{let s=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(s=!1,!1)})),s&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const s=new Hh(e,t,this.Wt,this.jt,n);return this.jt=zu(),this.zt=Jh(),this.Wt=new hc(Rl),s}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,t)?s.Bt(t,1):s.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Yh,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new fc(Rl),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||gl("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Yh),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}constructor(e){this.Gt=e,this.Qt=new Map,this.jt=zu(),this.zt=Jh(),this.Wt=new hc(Rl)}}function Jh(){return new hc(ql.comparator)}function Zh(){return new hc(ql.comparator)}const ed={asc:"ASCENDING",desc:"DESCENDING"},td={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nd={and:"AND",or:"OR"};class sd{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function id(e,t){return e.useProto3Json||nc(t)?t:{value:t}}function rd(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ad(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function od(e,t){return rd(e,t.toTimestamp())}function ld(e){return El(!!e),Ul.fromTimestamp(function(e){const t=Ec(e);return new Vl(t.seconds,t.nanos)}(e))}function cd(e,t){return(n=e,new zl(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function ud(e){const t=zl.fromString(e);return El(Ad(t)),t}function hd(e,t){return cd(e.databaseId,t.path)}function dd(e,t){const n=ud(t);if(n.get(1)!==e.databaseId.projectId)throw new Il(Sl.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Il(Sl.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ql(gd(n))}function pd(e,t){return cd(e.databaseId,t)}function fd(e){const t=ud(e);return 4===t.length?zl.emptyPath():gd(t)}function md(e){return new zl(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function gd(e){return El(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function vd(e,t,n){return{name:hd(e,t),fields:n.value.mapValue.fields}}function yd(e,t){let n;if(t instanceof Th)n={update:vd(e,t.key,t.value)};else if(t instanceof kh)n={delete:hd(e,t.key)};else if(t instanceof Sh)n={update:vd(e,t.key,t.data),updateMask:xd(t.fieldMask)};else{if(!(t instanceof xh))return bl();n={verify:hd(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof rh)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ah)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof lh)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof uh)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw bl()}(0,e)))),t.precondition.isNone||(n.currentDocument=(s=e,void 0!==(i=t.precondition).updateTime?{updateTime:od(s,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:bl())),n;var s,i}function wd(e,t){return{documents:[pd(e,t.path)]}}function bd(e,t){const n={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(n.parent=pd(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=pd(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(e){if(0!==e.length)return kd(tu.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(e){if(0!==e.length)return e.map((e=>{return{field:Cd((t=e).field),direction:Sd(t.dir)};var t}))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const a=id(e,t.limit);var o,l;return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(o=t.startAt).inclusive,values:o.position}),t.endAt&&(n.structuredQuery.endAt={before:!(l=t.endAt).inclusive,values:l.position}),n}function Ed(e){let t=fd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){El(1===s);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let r=[];n.where&&(r=function(e){const t=Td(e);return t instanceof tu&&su(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=n.orderBy.map((e=>{return new Qc(_d((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let o=null;n.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,nc(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Kc(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Kc(n,t)}(n.endAt)),Tu(t,i,a,r,o,"F",l,c)}function Td(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=_d(e.unaryFilter.field);return eu.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=_d(e.unaryFilter.field);return eu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_d(e.unaryFilter.field);return eu.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_d(e.unaryFilter.field);return eu.create(i,"!=",{nullValue:"NULL_VALUE"});default:return bl()}}(e):void 0!==e.fieldFilter?(n=e,eu.create(_d(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return bl()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,tu.create(t.compositeFilter.filters.map((e=>Td(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return bl()}}(t.compositeFilter.op))):bl();var t,n}function Sd(e){return ed[e]}function Id(e){return td[e]}function Cd(e){return{fieldPath:e.canonicalString()}}function _d(e){return jl.fromServerFormat(e.fieldPath)}function kd(e){return e instanceof eu?function(e){if("=="===e.op){if(zc(e.value))return{unaryFilter:{field:Cd(e.field),op:"IS_NAN"}};if($c(e.value))return{unaryFilter:{field:Cd(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(zc(e.value))return{unaryFilter:{field:Cd(e.field),op:"IS_NOT_NAN"}};if($c(e.value))return{unaryFilter:{field:Cd(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cd(e.field),op:Id(e.op),value:e.value}}}(e):e instanceof tu?function(e){const t=e.getFilters().map((e=>kd(e)));return 1===t.length?t[0]:{compositeFilter:{op:(n=e.op,nd[n]),filters:t}};var n}(e):bl()}function xd(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ad(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class Md{withSequenceNumber(e){return new Md(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Md(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Md(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Md(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}constructor(e,t,n,s,i=Ul.min(),r=Ul.min(),a=wc.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=a,this.expectedCount=o}}
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
 */class Ld{constructor(e){this.fe=e}}function Dd(e){const t=Ed({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Lu(t,t.limit,"L"):t}
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
 */class Nd{_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Tc(e.integerValue));else if("doubleValue"in e){const n=Tc(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),sc(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Sc(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?qc(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):bl()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const e of Object.keys(n))this.Te(e,t),this.me(n[e],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const e of n)this.me(e,t)}ve(e,t){this.ye(t,37),ql.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}constructor(){}}Nd.Ve=new Nd;
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
class Pd{addToCollectionParentIndex(e,t){return this.rn.add(t),Zl.resolve()}getCollectionParents(e,t){return Zl.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return Zl.resolve()}deleteFieldIndex(e,t){return Zl.resolve()}getDocumentsMatchingTarget(e,t){return Zl.resolve(null)}getIndexType(e,t){return Zl.resolve(0)}getFieldIndexes(e,t){return Zl.resolve([])}getNextCollectionGroupToUpdate(e){return Zl.resolve(null)}getMinOffset(e,t){return Zl.resolve(Kl.min())}getMinOffsetFromCollectionGroup(e,t){return Zl.resolve(Kl.min())}updateCollectionGroup(e,t,n){return Zl.resolve()}updateIndexEntries(e,t){return Zl.resolve()}constructor(){this.rn=new Od}}class Od{add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new fc(zl.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new fc(zl.comparator)).toArray()}constructor(){this.index={}}}
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
 */new Uint8Array(0);class Rd{static withCacheSize(e){return new Rd(e,Rd.DEFAULT_COLLECTION_PERCENTILE,Rd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */Rd.DEFAULT_COLLECTION_PERCENTILE=10,Rd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rd.DEFAULT=new Rd(41943040,Rd.DEFAULT_COLLECTION_PERCENTILE,Rd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rd.DISABLED=new Rd(-1,0,0);
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
class Fd{next(){return this.Nn+=2,this.Nn}static kn(){return new Fd(0)}static Mn(){return new Fd(-1)}constructor(e){this.Nn=e}}
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
class Vd{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wc.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Zl.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new Uu((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
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
class Ud{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class $d{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&wh(n.mutation,e,gc.empty(),Vl.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Yu()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Yu()){const s=Hu();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((e=>{let t=ju();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Hu();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Yu())))}populateOverlays(e,t,n){const s=[];return n.forEach((e=>{t.has(e)||s.push(e)})),this.documentOverlayCache.getOverlays(e,s).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,s){let i=zu();const r=Wu(),a=Wu();return t.forEach(((e,t)=>{const a=n.get(t.key);s.has(t.key)&&(void 0===a||a.mutation instanceof Sh)?i=i.insert(t.key,t):void 0!==a?(r.set(t.key,a.mutation.getFieldMask()),wh(a.mutation,t,a.mutation.getFieldMask(),Vl.now())):r.set(t.key,gc.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>r.set(e,t))),t.forEach(((e,t)=>{var n;return a.set(e,new Ud(t,null!==(n=r.get(e))&&void 0!==n?n:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=Wu();let s=new hc(((e,t)=>e-t)),i=Yu();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const r=t.get(e);if(null===r)return;let a=n.get(e)||gc.empty();a=i.applyToLocalView(r,a),n.set(e,a);const o=(s.get(i.batchId)||Yu()).add(e);s=s.insert(i.batchId,o)}))})).next((()=>{const r=[],a=s.getReverseIterator();for(;a.hasNext();){const s=a.getNext(),o=s.key,l=s.value,c=Gu();l.forEach((e=>{if(!i.has(e)){const s=vh(t.get(e),n.get(e));null!==s&&c.set(e,s),i=i.add(e)}})),r.push(this.documentOverlayCache.saveOverlays(e,o,c))}return Zl.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return s=t,ql.isDocumentKey(s.path)&&null===s.collectionGroup&&0===s.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):ku(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var s}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):Zl.resolve(Hu());let a=-1,o=i;return r.next((t=>Zl.forEach(t,((t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?Zl.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{o=o.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,o,t,Yu()))).next((e=>({batchId:a,changes:qu(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ql(t)).next((e=>{let t=ju();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const s=t.collectionGroup;let i=ju();return this.indexManager.getCollectionParents(e,s).next((r=>Zl.forEach(r,(r=>{const a=(o=t,l=r.child(s),new Eu(l,null,o.explicitOrderBy.slice(),o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt));var o,l;return this.getDocumentsMatchingCollectionQuery(e,a,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s)))).next((e=>{s.forEach(((t,n)=>{const s=n.getKey();null===e.get(s)&&(e=e.insert(s,Wc.newInvalidDocument(s)))}));let n=ju();return e.forEach(((e,i)=>{const r=s.get(e);void 0!==r&&wh(r.mutation,i,gc.empty(),Vl.now()),Ou(t,i)&&(n=n.insert(e,i))})),n}))}constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{getBundleMetadata(e,t){return Zl.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:ld(n.createTime)}),Zl.resolve()}getNamedQuery(e,t){return Zl.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,{name:(n=t).name,query:Dd(n.bundledQuery),readTime:ld(n.readTime)}),Zl.resolve();var n}constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}}
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
 */class Bd{getOverlay(e,t){return Zl.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Hu();return Zl.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,s)=>{this.we(e,t,s)})),Zl.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.ls.get(n);return void 0!==s&&(s.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),Zl.resolve()}getOverlaysForCollection(e,t,n){const s=Hu(),i=t.length+1,r=new ql(t.child("")),a=this.overlays.getIteratorFrom(r);for(;a.hasNext();){const e=a.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===i&&e.largestBatchId>n&&s.set(e.getKey(),e)}return Zl.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new hc(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Hu(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=Hu(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach(((e,t)=>a.set(e,t))),!(a.size()>=s)););return Zl.resolve(a)}we(e,t,n){const s=this.overlays.get(n.key);if(null!==s){const e=this.ls.get(s.largestBatchId).delete(n.key);this.ls.set(s.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Lh(t,n));let i=this.ls.get(t);void 0===i&&(i=Yu(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}constructor(){this.overlays=new hc(ql.comparator),this.ls=new Map}}
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
 */class jd{isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new qd(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new qd(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new ql(new zl([])),n=new qd(t,e),s=new qd(t,e+1),i=[];return this.ws.forEachInRange([n,s],(e=>{this.ys(e),i.push(e.key)})),i}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new ql(new zl([])),n=new qd(t,e),s=new qd(t,e+1);let i=Yu();return this.ws.forEachInRange([n,s],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new qd(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.fs=new fc(qd.ds),this.ws=new fc(qd._s)}}class qd{static ds(e,t){return ql.comparator(e.key,t.key)||Rl(e.As,t.As)}static _s(e,t){return Rl(e.As,t.As)||ql.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.As=t}}
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
 */class Hd{checkEmpty(e){return Zl.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Ah(i,t,n,s);this.mutationQueue.push(r);for(const t of s)this.Rs=this.Rs.add(new qd(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Zl.resolve(r)}lookupMutationBatch(e,t){return Zl.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.bs(n),i=s<0?0:s;return Zl.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Zl.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return Zl.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new qd(t,0),s=new qd(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,s],(e=>{const t=this.Ps(e.As);i.push(t)})),Zl.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new fc(Rl);return t.forEach((e=>{const t=new qd(e,0),s=new qd(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,s],(e=>{n=n.add(e.As)}))})),Zl.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;ql.isDocumentKey(i)||(i=i.child(""));const r=new qd(new ql(i),0);let a=new fc(Rl);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===s&&(a=a.add(e.As)),!0)}),r),Zl.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){El(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Zl.forEach(t.mutations,(s=>{const i=new qd(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new qd(t,0),s=this.Rs.firstAfterOrEqual(n);return Zl.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Zl.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new fc(qd.ds)}}
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
 */class Gd{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,r=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Zl.resolve(n?n.document.mutableCopy():Wc.newInvalidDocument(t))}getEntries(e,t){let n=zu();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Wc.newInvalidDocument(e))})),Zl.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=zu();const r=t.path,a=new ql(r.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){const{key:e,value:{document:a}}=o.getNext();if(!r.isPrefixOf(e.path))break;e.path.length>r.length+1||Xl(Wl(a),n)<=0||(s.has(a.key)||Ou(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return Zl.resolve(i)}getAllFromCollectionGroup(e,t,n,s){bl()}Cs(e,t){return Zl.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Wd(this)}getSize(e){return Zl.resolve(this.size)}constructor(e){this.Ds=e,this.docs=new hc(ql.comparator),this.size=0}}class Wd extends Vd{applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.os.addEntry(e,s)):this.os.removeEntry(n)})),Zl.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}constructor(e){super(),this.os=e}}
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
 */class Kd{forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),Zl.resolve()}getLastRemoteSnapshotVersion(e){return Zl.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Zl.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),Zl.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),Zl.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Fd(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,Zl.resolve()}updateTargetData(e,t){return this.Fn(t),Zl.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,Zl.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.xs.forEach(((r,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.xs.delete(r),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),Zl.waitFor(i).next((()=>s))}getTargetCount(e){return Zl.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return Zl.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),Zl.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((t=>{i.push(s.markPotentiallyOrphaned(e,t))})),Zl.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),Zl.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return Zl.resolve(n)}containsKey(e,t){return Zl.resolve(this.ks.containsKey(t))}constructor(e){this.persistence=e,this.xs=new Uu((e=>yu(e)),wu),this.lastRemoteSnapshotVersion=Ul.min(),this.highestTargetId=0,this.Ns=0,this.ks=new jd,this.targetCount=0,this.Ms=Fd.kn()}}
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
 */class Xd{start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Bd,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new Hd(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){gl("MemoryPersistence","Starting transaction:",e);const s=new Yd(this.Os.next());return this.referenceDelegate.Us(),n(s).next((e=>this.referenceDelegate.Ks(s).next((()=>e)))).toPromise().then((e=>(s.raiseOnCommittedEvent(),e)))}Gs(e,t){return Zl.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.$s={},this.overlays={},this.Os=new tc(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Kd(this),this.indexManager=new Pd,this.remoteDocumentCache=new Gd((e=>this.referenceDelegate.Ls(e))),this.serializer=new Ld(t),this.qs=new zd(this.serializer)}}class Yd extends Ql{constructor(e){super(),this.currentSequenceNumber=e}}class Qd{static zs(e){return new Qd(e)}get Ws(){if(this.js)return this.js;throw bl()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),Zl.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),Zl.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),Zl.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Zl.forEach(this.Ws,(n=>{const s=ql.fromPath(n);return this.Hs(e,s).next((e=>{e||t.removeEntry(s,Ul.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return Zl.or([()=>Zl.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}constructor(e){this.persistence=e,this.Qs=new jd,this.js=null}}
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
class Jd{static Li(e,t){let n=Yu(),s=Yu();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:s=s.add(e.doc.key)}return new Jd(e,t.fromCache,n,s)}constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=s}}
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
 */class Zd{initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,s){return this.Ki(e,t).next((i=>i||this.Gi(e,t,s,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(Iu(t))return Zl.resolve(null);let n=Au(t);return this.indexManager.getIndexType(e,n).next((s=>0===s?null:(null!==t.limit&&1===s&&(t=Lu(t,null,"F"),n=Au(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((s=>{const i=Yu(...s);return this.Ui.getDocuments(e,i).next((s=>this.indexManager.getMinOffset(e,n).next((n=>{const r=this.ji(t,s);return this.zi(t,r,i,n.readTime)?this.Ki(e,Lu(t,null,"F")):this.Wi(e,r,t,n)}))))})))))}Gi(e,t,n,s){return Iu(t)||s.isEqual(Ul.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((i=>{const r=this.ji(t,i);return this.zi(t,r,n,s)?this.Qi(e,t):(ml()<=ee.DEBUG&&gl("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pu(t)),this.Wi(e,r,t,Gl(s,-1)))}))}ji(e,t){let n=new fc(Fu(e));return t.forEach(((t,s)=>{Ou(e,s)&&(n=n.add(s))})),n}zi(e,t,n,s){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(e,t){return ml()<=ee.DEBUG&&gl("QueryEngine","Using full collection scan to execute query:",Pu(t)),this.Ui.getDocumentsMatchingQuery(e,t,Kl.min())}Wi(e,t,n,s){return this.Ui.getDocumentsMatchingQuery(e,n,s).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.qi=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $d(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}constructor(e,t,n,s){this.persistence=e,this.Hi=t,this.serializer=s,this.Ji=new hc(Rl),this.Yi=new Uu((e=>yu(e)),wu),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}}function tp(e,t,n,s){return new ep(e,t,n,s)}async function np(e,t){const n=Tl(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.mutationQueue.getAllMutationBatches(e).next((i=>(s=i,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],r=[];let a=Yu();for(const e of s){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next((e=>({er:e,removedBatchIds:i,addedBatchIds:r})))}))}))}function sp(e){const t=Tl(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function ip(e,t,n){let s=Yu(),i=Yu();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=zu();return n.forEach(((n,r)=>{const a=e.get(n);r.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(Ul.min())?(t.removeEntry(n,r.readTime),s=s.insert(n,r)):!a.isValidDocument()||r.version.compareTo(a.version)>0||0===r.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(r),s=s.insert(n,r)):gl("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",r.version)})),{nr:s,sr:i}}))}function rp(e,t){const n=Tl(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function ap(e,t){const n=Tl(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let s;return n.Bs.getTargetData(e,t).next((i=>i?(s=i,Zl.resolve(s)):n.Bs.allocateTargetId(e).next((i=>(s=new Md(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,s).next((()=>s)))))))})).then((e=>{const s=n.Ji.get(e.targetId);return(null===s||e.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function op(e,t,n){const s=Tl(e),i=s.Ji.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(e=>s.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!ec(e))throw e;gl("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(i.target)}function lp(e,t,n){const s=Tl(e);let i=Ul.min(),r=Yu();return s.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const s=Tl(e),i=s.Yi.get(n);return void 0!==i?Zl.resolve(s.Ji.get(i)):s.Bs.getTargetData(t,n)}(s,e,Au(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{r=e}))})).next((()=>s.Hi.getDocumentsMatchingQuery(e,t,n?i:Ul.min(),n?r:Yu()))).next((e=>(cp(s,Ru(t),e),{documents:e,ir:r})))))}function cp(e,t,n){let s=e.Xi.get(t)||Ul.min();n.forEach(((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)})),e.Xi.set(t,s)}class up{lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=Ju()}}class hp{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new up,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Hr=new up,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
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
 */class dp{Yr(e){}shutdown(){}}
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
 */class pp{Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){gl("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){gl("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}}
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
 */let fp=null;function mp(){return null===fp?fp=268435456+Math.round(2147483648*Math.random()):fp++,"0x"+fp.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const gp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class yp extends class{get po(){return!1}Io(e,t,n,s,i){const r=mp(),a=this.To(e,t);gl("RestConnection",`Sending RPC '${e}' ${r}:`,a,n);const o={};return this.Eo(o,s,i),this.Ao(e,a,o,n).then((t=>(gl("RestConnection",`Received RPC '${e}' ${r}: `,t),t)),(t=>{throw yl("RestConnection",`RPC '${e}' ${r} failed with error: `,t,"url: ",a,"request:",n),t}))}vo(e,t,n,s,i,r){return this.Io(e,t,n,s,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+pl,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=gp[e];return`${this.mo}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{Ao(e,t,n,s){const i=mp();return new Promise(((r,a)=>{const o=new cl;o.setWithCredentials(!0),o.listenOnce(il.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case sl.NO_ERROR:const t=o.getResponseJson();gl("WebChannelConnection",`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),r(t);break;case sl.TIMEOUT:gl("WebChannelConnection",`RPC '${e}' ${i} timed out`),a(new Il(Sl.DEADLINE_EXCEEDED,"Request time out"));break;case sl.HTTP_ERROR:const n=o.getStatus();if(gl("WebChannelConnection",`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Sl).indexOf(t)>=0?t:Sl.UNKNOWN}(t.status);a(new Il(e,t.message))}else a(new Il(Sl.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new Il(Sl.UNAVAILABLE,"Connection failed."));break;default:bl()}}finally{gl("WebChannelConnection",`RPC '${e}' ${i} completed.`)}}));const l=JSON.stringify(s);gl("WebChannelConnection",`RPC '${e}' ${i} sending request:`,s),o.send(t,"POST",l,n,15)}))}Ro(e,t,n){const s=mp(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=tl(),a=nl(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.xmlHttpFactory=new ol({})),this.Eo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const c=i.join("");gl("WebChannelConnection",`Creating RPC '${e}' stream ${s}: ${c}`,o);const u=r.createWebChannel(c,o);let h=!1,d=!1;const p=new vp({ro:t=>{d?gl("WebChannelConnection",`Not sending because RPC '${e}' stream ${s} is closed:`,t):(h||(gl("WebChannelConnection",`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),gl("WebChannelConnection",`RPC '${e}' stream ${s} sending:`,t),u.send(t))},oo:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,ll.EventType.OPEN,(()=>{d||gl("WebChannelConnection",`RPC '${e}' stream ${s} transport opened.`)})),f(u,ll.EventType.CLOSE,(()=>{d||(d=!0,gl("WebChannelConnection",`RPC '${e}' stream ${s} transport closed`),p.wo())})),f(u,ll.EventType.ERROR,(t=>{d||(d=!0,yl("WebChannelConnection",`RPC '${e}' stream ${s} transport errored:`,t),p.wo(new Il(Sl.UNAVAILABLE,"The operation could not be completed")))})),f(u,ll.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];El(!!i);const r=i,a=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(a){gl("WebChannelConnection",`RPC '${e}' stream ${s} received error:`,a);const t=a.status;let n=function(e){const t=Nh[e];if(void 0!==t)return Rh(t)}(t),i=a.message;void 0===n&&(n=Sl.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),d=!0,p.wo(new Il(n,i)),u.close()}else gl("WebChannelConnection",`RPC '${e}' stream ${s} received:`,i),p._o(i)}})),f(a,rl.STAT_EVENT,(t=>{t.stat===al.PROXY?gl("WebChannelConnection",`RPC '${e}' stream ${s} detected buffering proxy`):t.stat===al.NOPROXY&&gl("WebChannelConnection",`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{p.fo()}),0),p}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function wp(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(e){return new sd(e,!0)}
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
 */class Ep{reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),s=Math.max(0,t-n);s>0&&gl("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}constructor(e,t,n=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}}
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
 */class Tp{Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===Sl.RESOURCE_EXHAUSTED?(vl(t.toString()),vl("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===Sl.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new Il(Sl.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return gl("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(gl("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,s,i,r,a,o){this.ii=e,this.$o=n,this.Oo=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Ep(e,t)}}class Sp extends Tp{eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(s=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===s?1:"REMOVE"===s?2:"CURRENT"===s?3:"RESET"===s?4:bl(),r=t.targetChange.targetIds||[],a=function(e,t){return e.useProto3Json?(El(void 0===t||"string"==typeof t),wc.fromBase64String(t||"")):(El(void 0===t||t instanceof Uint8Array),wc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(e){const t=void 0===e.code?Sl.UNKNOWN:Rh(e.code);return new Il(t,e.message||"")}(o);n=new Xh(i,r,a,l||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=dd(e,s.document.name),r=ld(s.document.updateTime),a=s.document.createTime?ld(s.document.createTime):Ul.min(),o=new Hc({mapValue:{fields:s.document.fields}}),l=Wc.newFoundDocument(i,r,a,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Wh(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=dd(e,s.document),r=s.readTime?ld(s.readTime):Ul.min(),a=Wc.newNoDocument(i,r),o=s.removedTargetIds||[];n=new Wh([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=dd(e,s.document),r=s.removedTargetIds||[];n=new Wh([],r,i,null)}else{if(!("filter"in t))return bl();{t.filter;const e=t.filter;e.targetId;const{count:s=0,unchangedNames:i}=e,r=new Dh(s,i),a=e.targetId;n=new Kh(a,r)}}var s;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ul.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ul.min():t.readTime?ld(t.readTime):Ul.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=md(this.serializer),t.addTarget=function(e,t){let n;const s=t.target;if(n=bu(s)?{documents:wd(e,s)}:{query:bd(e,s)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=ad(e,t.resumeToken);const s=id(e,t.expectedCount);null!==s&&(n.expectedCount=s)}else if(t.snapshotVersion.compareTo(Ul.min())>0){n.readTime=rd(e,t.snapshotVersion.toTimestamp());const s=id(e,t.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return bl()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=md(this.serializer),t.removeTarget=e,this.Wo(t)}constructor(e,t,n,s,i,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,r),this.serializer=i}}class Ip extends Tp{get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(El(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const s=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(El(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?ld(e.updateTime):ld(t);return n.isEqual(Ul.min())&&(n=ld(t)),new ph(n,e.transformResults||[])}(e,n)))):[]),i=ld(e.commitTime);return this.listener.cu(i,s)}var t,n;return El(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=md(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>yd(this.serializer,e)))};this.Wo(t)}constructor(e,t,n,s,i,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,r),this.serializer=i,this.ru=!1}}
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
 */class Cp extends class{}{fu(){if(this.lu)throw new Il(Sl.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.Io(e,t,n,s,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Sl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Il(Sl.UNKNOWN,e.toString())}))}vo(e,t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.vo(e,t,n,i,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Sl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Il(Sl.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.lu=!1}}class _p{gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(vl(t),this.mu=!1):gl("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}}
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
 */class kp{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{Rp(this)&&(gl("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Tl(e);t.vu.add(4),await Ap(t),t.bu.set("Unknown"),t.vu.delete(4),await xp(t)}(this))}))})),this.bu=new _p(n,s)}}async function xp(e){if(Rp(e))for(const t of e.Ru)await t(!0)}async function Ap(e){for(const t of e.Ru)await t(!1)}function Mp(e,t){const n=Tl(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Op(n)?Pp(n):ef(n).Ko()&&Dp(n,t))}function Lp(e,t){const n=Tl(e),s=ef(n);n.Au.delete(t),s.Ko()&&Np(n,t),0===n.Au.size&&(s.Ko()?s.jo():Rp(n)&&n.bu.set("Unknown"))}function Dp(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ul.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ef(e).su(t)}function Np(e,t){e.Vu.qt(t),ef(e).iu(t)}function Pp(e){e.Vu=new Qh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),ef(e).start(),e.bu.gu()}function Op(e){return Rp(e)&&!ef(e).Uo()&&e.Au.size>0}function Rp(e){return 0===Tl(e).vu.size}function Fp(e){e.Vu=void 0}async function Vp(e){e.Au.forEach(((t,n)=>{Dp(e,t)}))}async function Up(e,t){Fp(e),Op(e)?(e.bu.Iu(t),Pp(e)):e.bu.set("Unknown")}async function $p(e,t,n){if(e.bu.set("Online"),t instanceof Xh&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const s of t.targetIds)e.Au.has(s)&&(await e.remoteSyncer.rejectListen(s,n),e.Au.delete(s),e.Vu.removeTarget(s))}(e,t)}catch(n){gl("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await zp(e,n)}else if(t instanceof Wh?e.Vu.Ht(t):t instanceof Kh?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(Ul.min()))try{const t=await sp(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Au.get(s);i&&e.Au.set(s,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const s=e.Au.get(t);if(!s)return;e.Au.set(t,s.withResumeToken(wc.EMPTY_BYTE_STRING,s.snapshotVersion)),Np(e,t);const i=new Md(s.target,t,n,s.sequenceNumber);Dp(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){gl("RemoteStore","Failed to raise snapshot:",t),await zp(e,t)}}async function zp(e,t,n){if(!ec(t))throw t;e.vu.add(1),await Ap(e),e.bu.set("Offline"),n||(n=()=>sp(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{gl("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await xp(e)}))}function Bp(e,t){return t().catch((n=>zp(e,n,t)))}async function jp(e){const t=Tl(e),n=tf(t);let s=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;qp(t);)try{const e=await rp(t.localStore,s);if(null===e){0===t.Eu.length&&n.jo();break}s=e.batchId,Hp(t,e)}catch(e){await zp(t,e)}Gp(t)&&Wp(t)}function qp(e){return Rp(e)&&e.Eu.length<10}function Hp(e,t){e.Eu.push(t);const n=tf(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Gp(e){return Rp(e)&&!tf(e).Uo()&&e.Eu.length>0}function Wp(e){tf(e).start()}async function Kp(e){tf(e).hu()}async function Xp(e){const t=tf(e);for(const n of e.Eu)t.uu(n.mutations)}async function Yp(e,t,n){const s=e.Eu.shift(),i=Mh.from(s,t,n);await Bp(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await jp(e)}async function Qp(e,t){t&&tf(e).ou&&await async function(e,t){if(Oh(n=t.code)&&n!==Sl.ABORTED){const n=e.Eu.shift();tf(e).Qo(),await Bp(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await jp(e)}var n}(e,t),Gp(e)&&Wp(e)}async function Jp(e,t){const n=Tl(e);n.asyncQueue.verifyOperationInProgress(),gl("RemoteStore","RemoteStore received new credentials");const s=Rp(n);n.vu.add(3),await Ap(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await xp(n)}async function Zp(e,t){const n=Tl(e);t?(n.vu.delete(2),await xp(n)):t||(n.vu.add(2),await Ap(n),n.bu.set("Unknown"))}function ef(e){return e.Su||(e.Su=function(e,t,n){const s=Tl(e);return s.fu(),new Sp(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(e.datastore,e.asyncQueue,{uo:Vp.bind(null,e),ao:Up.bind(null,e),nu:$p.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),Op(e)?Pp(e):e.bu.set("Unknown")):(await e.Su.stop(),Fp(e))}))),e.Su}function tf(e){return e.Du||(e.Du=function(e,t,n){const s=Tl(e);return s.fu(),new Ip(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(e.datastore,e.asyncQueue,{uo:Kp.bind(null,e),ao:Qp.bind(null,e),au:Xp.bind(null,e),cu:Yp.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await jp(e)):(await e.Du.stop(),e.Eu.length>0&&(gl("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
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
 */}class nf{static createAndSchedule(e,t,n,s,i){const r=Date.now()+n,a=new nf(e,t,r,s,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Il(Sl.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Cl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function sf(e,t){if(vl("AsyncQueue",`${t}: ${e}`),ec(e))return new Il(Sl.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class rf{static emptySet(e){return new rf(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rf))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=n.getNext().key;if(!e.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new rf;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||ql.comparator(t.key,n.key):(e,t)=>ql.comparator(e.key,t.key),this.keyedMap=ju(),this.sortedSet=new hc(this.comparator)}}
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
 */class af{track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):bl():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.Cu=new hc(ql.comparator)}}class of{static fromInitialDocuments(e,t,n,s,i){const r=[];return t.forEach((e=>{r.push({type:0,doc:e})})),new of(e,t,rf.emptySet(t),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Du(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,s,i,r,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}}
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
 */class lf{constructor(){this.Nu=void 0,this.listeners=[]}}class cf{constructor(){this.queries=new Uu((e=>Nu(e)),Du),this.onlineState="Unknown",this.ku=new Set}}async function uf(e,t){const n=Tl(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new lf),i)try{r.Nu=await n.onListen(s)}catch(e){const n=sf(e,`Initialization of query '${Pu(t.query)}' failed`);return void t.onError(n)}n.queries.set(s,r),r.listeners.push(t),t.Mu(n.onlineState),r.Nu&&t.$u(r.Nu)&&ff(n)}async function hf(e,t){const n=Tl(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function df(e,t){const n=Tl(e);let s=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.$u(e)&&(s=!0);i.Nu=e}}s&&ff(n)}function pf(e,t,n){const s=Tl(e),i=s.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);s.queries.delete(t)}function ff(e){e.ku.forEach((e=>{e.next()}))}class mf{$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new of(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=of.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class gf{constructor(e){this.key=e}}class vf{constructor(e){this.key=e}}class yf{get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new af,s=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,r=s,a=!1;const o="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,l="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((e,t)=>{const c=s.get(e),u=Ou(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),p=!0):this.rc(c,u)||(n.track({type:2,doc:u}),p=!0,(o&&this.tc(u,o)>0||l&&this.tc(u,l)<0)&&(a=!0)):!c&&u?(n.track({type:0,doc:u}),p=!0):c&&!u&&(n.track({type:1,doc:c}),p=!0,(o||l)&&(a=!0)),p&&(u?(r=r.add(u),i=d?i.add(e):i.delete(e)):(r=r.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const e="F"===this.query.limitType?r.last():r.first();r=r.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ec:r,ic:n,zi:a,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return bl()}};return n(e)-n(t)}(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const r=t?this.uc():[],a=0===this.Zu.size&&this.current?1:0,o=a!==this.Xu;return this.Xu=a,0!==i.length||o?{snapshot:new of(this.query,e.ec,s,i,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:r}:{cc:r}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new af,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Yu(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new vf(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new gf(n))})),t}hc(e){this.Yu=e.ir,this.Zu=Yu();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return of.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Yu(),this.mutatedKeys=Yu(),this.tc=Fu(e),this.ec=new rf(this.tc)}}class wf{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class bf{constructor(e){this.key=e,this.fc=!1}}class Ef{get isPrimaryClient(){return!0===this.vc}constructor(e,t,n,s,i,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.dc={},this.wc=new Uu((e=>Nu(e)),Du),this._c=new Map,this.mc=new Set,this.gc=new hc(ql.comparator),this.yc=new Map,this.Ic=new jd,this.Tc={},this.Ec=new Map,this.Ac=Fd.Mn(),this.onlineState="Unknown",this.vc=void 0}}async function Tf(e,t){const n=$f(e);let s,i;const r=n.wc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const e=await ap(n.localStore,Au(t)),r=n.sharedClientState.addLocalQueryTarget(e.targetId);s=e.targetId,i=await Sf(n,t,s,"current"===r,e.resumeToken),n.isPrimaryClient&&Mp(n.remoteStore,e)}return i}async function Sf(e,t,n,s,i){e.Rc=(t,n,s)=>async function(e,t,n,s){let i=t.view.sc(n);i.zi&&(i=await lp(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,i))));const r=s&&s.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,r);return Pf(e,t.targetId,a.cc),a.snapshot}(e,t,n,s);const r=await lp(e.localStore,t,!0),a=new yf(t,r.ir),o=a.sc(r.documents),l=Gh.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==e.onlineState,i),c=a.applyChanges(o,e.isPrimaryClient,l);Pf(e,n,c.cc);const u=new wf(t,n,a);return e.wc.set(t,u),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function If(e,t){const n=Tl(e),s=n.wc.get(t),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter((e=>!Du(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await op(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Lp(n.remoteStore,s.targetId),Df(n,s.targetId)})).catch(Jl)):(Df(n,s.targetId),await op(n.localStore,s.targetId,!0))}async function Cf(e,t){const n=Tl(e);try{const e=await function(e,t){const n=Tl(e),s=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const r=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];t.targetChanges.forEach(((r,o)=>{const l=i.get(o);if(!l)return;a.push(n.Bs.removeMatchingKeys(e,r.removedDocuments,o).next((()=>n.Bs.addMatchingKeys(e,r.addedDocuments,o))));let c=l.withSequenceNumber(e.currentSequenceNumber);var u,h,d;null!==t.targetMismatches.get(o)?c=c.withResumeToken(wc.EMPTY_BYTE_STRING,Ul.min()).withLastLimboFreeSnapshotVersion(Ul.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,s)),i=i.insert(o,c),h=c,d=r,(0===(u=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&a.push(n.Bs.updateTargetData(e,c))}));let o=zu(),l=Yu();if(t.documentUpdates.forEach((s=>{t.resolvedLimboDocuments.has(s)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,s))})),a.push(ip(e,r,t.documentUpdates).next((e=>{o=e.nr,l=e.sr}))),!s.isEqual(Ul.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,s)));a.push(t)}return Zl.waitFor(a).next((()=>r.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,o,l))).next((()=>o))})).then((e=>(n.Ji=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const s=n.yc.get(t);s&&(El(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?s.fc=!0:e.modifiedDocuments.size>0?El(s.fc):e.removedDocuments.size>0&&(El(s.fc),s.fc=!1))})),await Ff(n,e,t)}catch(e){await Jl(e)}}function _f(e,t,n){const s=Tl(e);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const e=[];s.wc.forEach(((n,s)=>{const i=s.view.Mu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Tl(e);n.onlineState=t;let s=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(s=!0)})),s&&ff(n)}(s.eventManager,t),e.length&&s.dc.nu(e),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function kf(e,t,n){const s=Tl(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.yc.get(t),r=i&&i.key;if(r){let e=new hc(ql.comparator);e=e.insert(r,Wc.newNoDocument(r,Ul.min()));const n=Yu().add(r),i=new Hh(Ul.min(),new Map,new hc(Rl),e,n);await Cf(s,i),s.gc=s.gc.remove(r),s.yc.delete(t),Rf(s)}else await op(s.localStore,t,!1).then((()=>Df(s,t,n))).catch(Jl)}async function xf(e,t){const n=Tl(e),s=t.batch.batchId;try{const e=await function(e,t){const n=Tl(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const s=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,s){const i=n.batch,r=i.keys();let a=Zl.resolve();return r.forEach((e=>{a=a.next((()=>s.getEntry(t,e))).next((t=>{const r=n.docVersions.get(e);El(null!==r),t.version.compareTo(r)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),s.addEntry(t)))}))})),a.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Yu();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,s)))}))}(n.localStore,t);Lf(n,s,null),Mf(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ff(n,e)}catch(e){await Jl(e)}}async function Af(e,t,n){const s=Tl(e);try{const e=await function(e,t){const n=Tl(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let s;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(El(null!==t),s=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,s))).next((()=>n.localDocuments.getDocuments(e,s)))}))}(s.localStore,t);Lf(s,t,n),Mf(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Ff(s,e)}catch(e){await Jl(e)}}function Mf(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function Lf(e,t,n){const s=Tl(e);let i=s.Tc[s.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),s.Tc[s.currentUser.toKey()]=i}}function Df(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||Nf(e,t)}))}function Nf(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(Lp(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Rf(e))}function Pf(e,t,n){for(const s of n)s instanceof gf?(e.Ic.addReference(s.key,t),Of(e,s)):s instanceof vf?(gl("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||Nf(e,s.key)):bl()}function Of(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(gl("SyncEngine","New document in limbo: "+n),e.mc.add(s),Rf(e))}function Rf(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new ql(zl.fromString(t)),s=e.Ac.next();e.yc.set(s,new bf(n)),e.gc=e.gc.insert(n,s),Mp(e.remoteStore,new Md(Au(Su(n.path)),s,"TargetPurposeLimboResolution",tc.ct))}}async function Ff(e,t,n){const s=Tl(e),i=[],r=[],a=[];s.wc.isEmpty()||(s.wc.forEach(((e,o)=>{a.push(s.Rc(o,t,n).then((e=>{if((e||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(o.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Jd.Li(o.targetId,e);r.push(t)}})))})),await Promise.all(a),s.dc.nu(i),await async function(e,t){const n=Tl(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Zl.forEach(t,(t=>Zl.forEach(t.Fi,(s=>n.persistence.referenceDelegate.addReference(e,t.targetId,s))).next((()=>Zl.forEach(t.Bi,(s=>n.persistence.referenceDelegate.removeReference(e,t.targetId,s)))))))))}catch(e){if(!ec(e))throw e;gl("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.Ji=n.Ji.insert(t,i)}}}(s.localStore,r))}async function Vf(e,t){const n=Tl(e);if(!n.currentUser.isEqual(t)){gl("SyncEngine","User change. New user:",t.toKey());const e=await np(n.localStore,t);n.currentUser=t,(s=n).Ec.forEach((e=>{e.forEach((e=>{e.reject(new Il(Sl.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),s.Ec.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ff(n,e.er)}var s}function Uf(e,t){const n=Tl(e),s=n.yc.get(t);if(s&&s.fc)return Yu().add(s.key);{let e=Yu();const s=n._c.get(t);if(!s)return e;for(const t of s){const s=n.wc.get(t);e=e.unionWith(s.view.nc)}return e}}function $f(e){const t=Tl(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Cf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Uf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kf.bind(null,t),t.dc.nu=df.bind(null,t.eventManager),t.dc.Pc=pf.bind(null,t.eventManager),t}function zf(e){const t=Tl(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Af.bind(null,t),t}class Bf{async initialize(e){this.serializer=bp(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return tp(this.persistence,new Zd,e.initialUser,this.serializer)}createPersistence(e){return new Xd(Qd.zs,this.serializer)}createSharedClientState(e){return new hp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class jf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>_f(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vf.bind(null,this.syncEngine),await Zp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cf}createDatastore(e){const t=bp(e.databaseInfo.databaseId),n=(s=e.databaseInfo,new yp(s));var s,i,r;return i=e.authCredentials,r=e.appCheckCredentials,new Cp(i,r,n,t)}createRemoteStore(e){var t,n,s,i,r;return t=this.localStore,n=this.datastore,s=e.asyncQueue,i=e=>_f(this.syncEngine,e,0),r=pp.D()?new pp:new dp,new kp(t,n,s,i,r)}createSyncEngine(e,t){return function(e,t,n,s,i,r,a){const o=new Ef(e,t,n,s,i,r);return a&&(o.vc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Tl(e);gl("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Ap(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class qf{next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):vl("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Hf{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Il(Sl.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cl;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=sf(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=dl.UNAUTHENTICATED,this.clientId=Ol.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{gl("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(gl("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function Gf(e,t){e.asyncQueue.verifyOperationInProgress(),gl("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener((async e=>{s.isEqual(e)||(await np(t.localStore,e),s=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Wf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Xf(e);gl("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener((e=>Jp(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Jp(t.remoteStore,n))),e._onlineComponents=t}function Kf(e){return"FirebaseError"===e.name?e.code===Sl.FAILED_PRECONDITION||e.code===Sl.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Xf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){gl("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Kf(n))throw n;yl("Error using user provided cache. Falling back to memory cache: "+n),await Gf(e,new Bf)}}else gl("FirestoreClient","Using default OfflineComponentProvider"),await Gf(e,new Bf);return e._offlineComponents}async function Yf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(gl("FirestoreClient","Using user provided OnlineComponentProvider"),await Wf(e,e._uninitializedComponentsProvider._online)):(gl("FirestoreClient","Using default OnlineComponentProvider"),await Wf(e,new jf))),e._onlineComponents}function Qf(e){return Yf(e).then((e=>e.syncEngine))}async function Jf(e){const t=await Yf(e),n=t.eventManager;return n.onListen=Tf.bind(null,t.syncEngine),n.onUnlisten=If.bind(null,t.syncEngine),n}function Zf(e,t,n={}){const s=new Cl;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,s,i){const r=new qf({next:r=>{t.enqueueAndForget((()=>hf(e,a)));const o=r.docs.has(n);!o&&r.fromCache?i.reject(new Il(Sl.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&r.fromCache&&s&&"server"===s.source?i.reject(new Il(Sl.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:e=>i.reject(e)}),a=new mf(Su(n.path),r,{includeMetadataChanges:!0,Ku:!0});return uf(e,a)}(await Jf(e),e.asyncQueue,t,n,s))),s.promise}function em(e,t,n={}){const s=new Cl;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,s,i){const r=new qf({next:n=>{t.enqueueAndForget((()=>hf(e,a))),n.fromCache&&"server"===s.source?i.reject(new Il(Sl.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new mf(n,r,{includeMetadataChanges:!0,Ku:!0});return uf(e,a)}(await Jf(e),e.asyncQueue,t,n,s))),s.promise}
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
function tm(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const nm=new Map;
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
 */function sm(e,t,n){if(!n)throw new Il(Sl.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function im(e){if(!ql.isDocumentKey(e))throw new Il(Sl.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function rm(e){if(ql.isDocumentKey(e))throw new Il(Sl.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function am(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":bl()}function om(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Il(Sl.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=am(e);throw new Il(Sl.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class lm{isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Il(Sl.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Il(Sl.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,s){if(!0===t&&!0===s)throw new Il(Sl.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tm(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Il(Sl.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Il(Sl.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Il(Sl.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}}class cm{get app(){if(!this._app)throw new Il(Sl.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Il(Sl.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lm(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new kl;switch(e.type){case"firstParty":return new Ll(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Il(Sl.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=nm.get(e);t&&(gl("ComponentProvider","Removing Datastore"),nm.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lm({}),this._settingsFrozen=!1}}function um(e,t,n,s={}){var i;const r=(e=om(e,cm))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==t&&yl("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let t,n;if("string"==typeof s.mockUserToken)t=s.mockUserToken,n=dl.MOCK_USER;else{t=D(s.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new Il(Sl.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new dl(r)}e._authCredentials=new xl(new _l(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pm(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hm(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class dm{withConverter(e){return new dm(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class pm extends dm{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hm(this.firestore,null,new ql(e))}withConverter(e){return new pm(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,Su(n)),this._path=n,this.type="collection"}}function fm(e,t,...n){if(e=X(e),sm("collection","path",t),e instanceof cm){const s=zl.fromString(t,...n);return rm(s),new pm(e,null,s)}{if(!(e instanceof hm||e instanceof pm))throw new Il(Sl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(zl.fromString(t,...n));return rm(s),new pm(e.firestore,null,s)}}function mm(e,t,...n){if(e=X(e),1===arguments.length&&(t=Ol.A()),sm("doc","path",t),e instanceof cm){const s=zl.fromString(t,...n);return im(s),new hm(e,null,new ql(s))}{if(!(e instanceof hm||e instanceof pm))throw new Il(Sl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(zl.fromString(t,...n));return im(s),new hm(e.firestore,e instanceof pm?e.converter:null,new ql(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class gm{get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=wp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new Cl;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ec(e))throw e;gl("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;throw vl("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const s=nf.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(s),s}Zc(){this.Wc&&bl()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Ep(this,"async_queue_retry"),this.Xc=()=>{const e=wp();e&&gl("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=wp();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}}class vm extends cm{_terminate(){return this._firestoreClient||wm(this),this._firestoreClient.terminate()}constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new gm,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}}function ym(e){return e._firestoreClient||wm(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function wm(e){var t,n,s;const i=e._freezeSettings(),r=(a=e._databaseId,o=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,new kc(a,o,l,(c=i).host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,tm(c.experimentalLongPollingOptions),c.useFetchStreams));var a,o,l,c;e._firestoreClient=new Hf(e._authCredentials,e._appCheckCredentials,e._queue,r),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=i.cache)||void 0===s?void 0:s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class bm{static fromBase64String(e){try{return new bm(wc.fromBase64String(e))}catch(e){throw new Il(Sl.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new bm(wc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Il(Sl.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jl(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Tm{constructor(e){this._methodName=e}}
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
 */class Sm{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Rl(this._lat,e._lat)||Rl(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Il(Sl.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Il(Sl.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
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
 */const Im=/^__.*__$/;class Cm{toMutation(e,t){return null!==this.fieldMask?new Sh(e,this.data,this.fieldMask,t,this.fieldTransforms):new Th(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}class _m{toMutation(e,t){return new Sh(e,this.data,this.fieldMask,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function km(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw bl()}}class xm{get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new xm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.aa({path:n,la:!1});return s.fa(e),s}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.aa({path:n,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return jm(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(km(this.ca)&&Im.test(e))throw this._a('Document fields cannot begin and end with "__"')}constructor(e,t,n,s,i,r){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=r||[]}}class Am{ya(e,t,n,s=!1){return new xm({ca:e,methodName:t,ga:n,path:jl.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||bp(e)}}function Mm(e){const t=e._freezeSettings(),n=bp(e._databaseId);return new Am(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Lm(e,t,n,s,i,r={}){const a=e.ya(r.merge||r.mergeFields?2:0,t,n,i);Um("Data must be an object, but it was:",a,s);const o=Fm(s,a);let l,c;if(r.merge)l=new gc(a.fieldMask),c=a.fieldTransforms;else if(r.mergeFields){const e=[];for(const s of r.mergeFields){const i=$m(t,s,n);if(!a.contains(i))throw new Il(Sl.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);qm(e,i)||e.push(i)}l=new gc(e),c=a.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=a.fieldTransforms;return new Cm(new Hc(o),l,c)}class Dm extends Tm{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dm}}function Nm(e,t,n,s){const i=e.ya(1,t,n);Um("Data must be an object, but it was:",i,s);const r=[],a=Hc.empty();cc(s,((e,s)=>{const o=Bm(t,e,n);s=X(s);const l=i.da(o);if(s instanceof Dm)r.push(o);else{const e=Rm(s,l);null!=e&&(r.push(o),a.set(o,e))}}));const o=new gc(r);return new _m(a,o,i.fieldTransforms)}function Pm(e,t,n,s,i,r){const a=e.ya(1,t,n),o=[$m(t,s,n)],l=[i];if(r.length%2!=0)throw new Il(Sl.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<r.length;e+=2)o.push($m(t,r[e])),l.push(r[e+1]);const c=[],u=Hc.empty();for(let e=o.length-1;e>=0;--e)if(!qm(c,o[e])){const t=o[e];let n=l[e];n=X(n);const s=a.da(t);if(n instanceof Dm)c.push(t);else{const e=Rm(n,s);null!=e&&(c.push(t),u.set(t,e))}}const h=new gc(c);return new _m(u,h,a.fieldTransforms)}function Om(e,t,n,s=!1){return Rm(n,e.ya(s?4:3,t))}function Rm(e,t){if(Vm(e=X(e)))return Um("Unsupported field value:",t,e),Fm(e,t);if(e instanceof Tm)return function(e,t){if(!km(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let s=0;for(const i of e){let e=Rm(i,t.wa(s));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),s++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=X(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return th(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Vl.fromDate(e);return{timestampValue:rd(t.serializer,n)}}if(e instanceof Vl){const n=new Vl(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:rd(t.serializer,n)}}if(e instanceof Sm)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof bm)return{bytesValue:ad(t.serializer,e._byteString)};if(e instanceof hm){const n=t.databaseId,s=e.firestore._databaseId;if(!s.isEqual(n))throw t._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:cd(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${am(e)}`)}(e,t)}function Fm(e,t){const n={};return uc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):cc(e,((e,s)=>{const i=Rm(s,t.ha(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Vm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Vl||e instanceof Sm||e instanceof bm||e instanceof hm||e instanceof Tm)}function Um(e,t,n){if(!Vm(n)||("object"!=typeof(s=n)||null===s||Object.getPrototypeOf(s)!==Object.prototype&&null!==Object.getPrototypeOf(s))){const s=am(n);throw"an object"===s?t._a(e+" a custom object"):t._a(e+" "+s)}var s}function $m(e,t,n){if((t=X(t))instanceof Em)return t._internalPath;if("string"==typeof t)return Bm(e,t);throw jm("Field path arguments must be of type string or ",e,!1,void 0,n)}const zm=new RegExp("[~\\*/\\[\\]]");function Bm(e,t,n){if(t.search(zm)>=0)throw jm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Em(...t.split("."))._internalPath}catch(s){throw jm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function jm(e,t,n,s,i){const r=s&&!s.isEmpty(),a=void 0!==i;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(r||a)&&(l+=" (found",r&&(l+=` in field ${s}`),a&&(l+=` in document ${i}`),l+=")"),new Il(Sl.INVALID_ARGUMENT,o+e+l)}function qm(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{get id(){return this._key.path.lastSegment()}get ref(){return new hm(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Gm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wm("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}}class Gm extends Hm{data(){return super.data()}}function Wm(e,t){return"string"==typeof t?Bm(e,t):t instanceof Em?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Il(Sl.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xm{}class Ym extends Xm{}function Qm(e,t,...n){let s=[];t instanceof Xm&&s.push(t),s=s.concat(n),function(e){const t=e.filter((e=>e instanceof eg)).length,n=e.filter((e=>e instanceof Jm)).length;if(t>1||t>0&&n>0)throw new Il(Sl.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const t of s)e=t._apply(e);return e}class Jm extends Ym{static _create(e,t,n){return new Jm(e,t,n)}_apply(e){const t=this._parse(e);return sg(e._query,t),new dm(e.firestore,e.converter,Mu(e._query,t))}_parse(e){const t=Mm(e.firestore);return function(e,t,n,s,i,r,a){let o;if(i.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new Il(Sl.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){ng(a,r);const t=[];for(const n of a)t.push(tg(s,e,n));o={arrayValue:{values:t}}}else o=tg(s,e,a)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||ng(a,r),o=Om(n,"where",a,"in"===r||"not-in"===r);return eu.create(i,r,o)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value)}constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}}function Zm(e,t,n){const s=t,i=Wm("where",e);return Jm._create(i,s,n)}class eg extends Xm{static _create(e,t){return new eg(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:tu.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const s=t.getFlattenedFilters();for(const e of s)sg(n,e),n=Mu(n,e)}(e._query,t),new dm(e.firestore,e.converter,Mu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}constructor(e,t){super(),this.type=e,this._queryConstraints=t}}function tg(e,t,n){if("string"==typeof(n=X(n))){if(""===n)throw new Il(Sl.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ku(t)&&-1!==n.indexOf("/"))throw new Il(Sl.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(zl.fromString(n));if(!ql.isDocumentKey(s))throw new Il(Sl.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Fc(e,new ql(s))}if(n instanceof hm)return Fc(e,n._key);throw new Il(Sl.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${am(n)}.`)}function ng(e,t){if(!Array.isArray(e)||0===e.length)throw new Il(Sl.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function sg(e,t){if(t.isInequality()){const n=_u(e),s=t.field;if(null!==n&&!n.isEqual(s))throw new Il(Sl.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${s.toString()}'`);const i=Cu(e);null!==i&&ig(e,s,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Il(Sl.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Il(Sl.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function ig(e,t,n){if(!n.isEqual(t))throw new Il(Sl.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class rg{convertValue(e,t="none"){switch(Mc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Tc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Sc(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw bl()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return cc(e,((e,s)=>{n[e]=this.convertValue(s,t)})),n}convertGeoPoint(e){return new Sm(Tc(e.latitude),Tc(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Cc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(_c(e));default:return null}}convertTimestamp(e){const t=Ec(e);return new Vl(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=zl.fromString(e);El(Ad(n));const s=new xc(n.get(1),n.get(3)),i=new ql(n.popFirst(5));return s.isEqual(t)||vl(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class og{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class lg extends Hm{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new cg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Wm("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,s,i,r){super(e,t,n,s,r),this._firestore=e,this._firestoreImpl=e,this.metadata=i}}class cg extends lg{data(e={}){return super.data(e)}}class ug{get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new cg(this._firestore,this._userDataWriter,n.key,n,new og(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Il(Sl.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const s=new cg(e._firestore,e._userDataWriter,n.doc.key,n.doc,new og(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const s=new cg(e._firestore,e._userDataWriter,t.doc.key,t.doc,new og(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,r=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),r=n.indexOf(t.doc.key)),{type:hg(t.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new og(s.hasPendingWrites,s.fromCache),this.query=n}}function hg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return bl()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function dg(e){e=om(e,hm);const t=om(e.firestore,vm);return Zf(ym(t),e._key).then((n=>yg(t,e,n)))}class pg extends rg{convertBytes(e){return new bm(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new hm(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function fg(e){e=om(e,dm);const t=om(e.firestore,vm),n=ym(t),s=new pg(t);return Km(e._query),em(n,e._query).then((n=>new ug(t,s,e,n)))}function mg(e,t,n){e=om(e,hm);const s=om(e.firestore,vm),i=ag(e.converter,t,n);return vg(s,[Lm(Mm(s),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,fh.none())])}function gg(e,t,n,...s){e=om(e,hm);const i=om(e.firestore,vm),r=Mm(i);let a;return a="string"==typeof(t=X(t))||t instanceof Em?Pm(r,"updateDoc",e._key,t,n,s):Nm(r,"updateDoc",e._key,t),vg(i,[a.toMutation(e._key,fh.exists(!0))])}function vg(e,t){return function(e,t){const n=new Cl;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const s=zf(e);try{const e=await function(e,t){const n=Tl(e),s=Vl.now(),i=t.reduce(((e,t)=>e.add(t.key)),Yu());let r,a;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let o=zu(),l=Yu();return n.Zi.getEntries(e,i).next((e=>{o=e,o.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,o))).next((i=>{r=i;const a=[];for(const e of t){const t=bh(e,r.get(e.key).overlayedDocument);null!=t&&a.push(new Sh(e.key,t,Gc(t.value.mapValue),fh.exists(!0)))}return n.mutationQueue.addMutationBatch(e,s,a,t)})).next((t=>{a=t;const s=t.applyToLocalDocumentSet(r,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,s)}))})).then((()=>({batchId:a.batchId,changes:qu(r)})))}(s.localStore,t);s.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let s=e.Tc[e.currentUser.toKey()];s||(s=new hc(Rl)),s=s.insert(t,n),e.Tc[e.currentUser.toKey()]=s}(s,e.batchId,n),await Ff(s,e.changes),await jp(s.remoteStore)}catch(e){const t=sf(e,"Failed to persist write");n.reject(t)}}(await Qf(e),t,n))),n.promise}(ym(e),t)}function yg(e,t,n){const s=n.docs.get(t._key),i=new pg(e);return new lg(e,i,t._key,s,new og(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */!function(e,t=!0){pl="9.22.0",Me(new Y("firestore",((e,{instanceIdentifier:n,options:s})=>{const i=e.getProvider("app").getImmediate(),r=new vm(new Al(e.getProvider("auth-internal")),new Nl(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Il(Sl.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xc(e.options.projectId,t)}(i,n),i);return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),Re("@firebase/firestore","3.12.0",e),Re("@firebase/firestore","3.12.0","esm2017")}();const wg=Pe({apiKey:"AIzaSyAYO4Ie3dyg57FYXwv2s34tOoBXm3UaMzg",authDomain:"users-bookshelf.firebaseapp.com",projectId:"users-bookshelf",storageBucket:"users-bookshelf.appspot.com",messagingSenderId:"1093946480659",appId:"1:1093946480659:web:6fdb7ef580bf859789c7e6"}),bg=function(e=Oe()){const t=Le(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Le(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(z(n.getOptions(),null!=t?t:{}))return e;Je(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Fs,persistence:[es,$n,Bn]}),s=M("authTokenSyncURL");if(s){const e=(i=s,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Us)return;const s=null==t?void 0:t.token;$s!==s&&($s=s,await fetch(i,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))});!function(e,t,n){X(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,s){X(e).onIdTokenChanged(t,n,s)}(n,(t=>e(t)))}var i;const r=k("auth");return r&&on(n,`http://${r}`),n}(),Eg=function(e,t){const n="string"==typeof e?e:t||"(default)",s=Le("object"==typeof e?e:Oe(),"firestore").getImmediate({identifier:n});if(!s._initialized){const e=x("firestore");e&&um(s,...e)}return s}(wg);var Tg=!1;let Sg="";var Ig,Cg,_g;Ig=e=>{e&&(e.uid,Tg=!0,Sg=e.uid),localStorage.setItem("IS_CUSTOMER_LOGGED_IN",Tg)},X(bg).onAuthStateChanged(Ig,Cg,_g);const kg=document.querySelector(".signin-cont"),xg=document.querySelector(".signup-cont"),Ag=document.querySelector(".signup"),Mg=document.querySelector(".signin"),Lg=document.querySelector(".tabs");!function(){const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),Lg.addEventListener("click",(function(e){Mg.classList.toggle("active"),Ag.classList.toggle("active"),kg.classList.toggle("hidden"),xg.classList.toggle("hidden")}));document.querySelector(".js-form-signup").addEventListener("submit",(function(e){e.preventDefault();const{name:t,email:n,password:s}=e.currentTarget.elements;On(bg,n.value,s.value).then((e=>{const s=e.user;mg(mm(Eg,"customers",n.value),{customer_name:t.value,customer_email:n.value,shopping_list:"",customer_avatar:"",session_id:s.uid}),location.reload()})).catch((e=>{e.code;const t=e.message;alert(t)}))}));document.querySelector(".js-form-signin").addEventListener("submit",(function(e){e.preventDefault();const{email:t,password:n}=e.currentTarget.elements;Rn(bg,t.value,n.value).then((async e=>{const n=e.user,s=mm(Eg,"customers",t.value);await gg(s,{session_id:n.uid});const i=await dg(s);i.exists()&&(console.log("Document data (Shoping list):",i.data().shopping_list),localStorage.setItem("info-shopping-list",i.data().shopping_list)),location.reload()})).catch((e=>{e.code;const t=e.message;alert(t)}))}));document.querySelector(".js-signout").addEventListener("click",(function(){Fn(bg).then((async()=>{if(""==Sg)return!0;const e=Qm(fm(Eg,"customers"),Zm("session_id","==",Sg)),t=await fg(e);let n="";if(t.forEach((e=>{n=e.data().customer_email})),n){const e=mm(Eg,"customers",n);await gg(e,{shopping_list:localStorage.getItem("info-shopping-list")})}localStorage.removeItem("info-shopping-list"),localStorage.setItem("IS_CUSTOMER_LOGGED_IN",!1),location.reload()})).catch((e=>{}))})),i("bUb57"),i("2bd6b");var Dg=i("2shzp");document.querySelector("export-all");async function Ng(){try{const e=(await Dg.default.get("https://books-backend.p.goit.global/books/top-books")).data,t=document.querySelector(".bookShell");return e.forEach((n=>{const s=function(e){const{list_name:t,books:n}=e,s=document.createElement("div");s.className="book",s.classList.add("card");const i=document.createElement("div");i.className="book__body";const r=document.createElement("h2");r.textContent=t,r.className="book__category",i.appendChild(r);const a=document.createElement("ul");a.className="book__list",Array.isArray(n)&&n.slice(0,5).forEach((e=>{const t=document.createElement("li");t.className="book__item",t.addEventListener("click",(()=>{console.log(`Book ${e.title} clicked`)}));const n=document.createElement("div");n.classList.add("book-image-container");const s=document.createElement("img");s.src=e.book_image,s.alt=e.title,s.loading="lazy",s.className="book__img",s.classList.add("js-gallery-image"),s.setAttribute("data-id",e._id),n.appendChild(s);const i=document.createElement("div");i.classList.add("quick-view"),i.textContent="QUICK VIEW",i.setAttribute("data-id",e._id),n.appendChild(i),t.appendChild(n);const r=document.createElement("p");r.textContent=e.title,r.className="book__title",e.title.length>15?r.textContent=e.title.substring(0,15)+"...":r.textContent=e.title,t.appendChild(r);const o=document.createElement("p");o.textContent=`${e.author}`,o.className="book__author",t.appendChild(o),a.appendChild(t)}));i.appendChild(a),s.appendChild(i);const o=document.createElement("button");return o.textContent="See more",o.addEventListener("click",(async()=>{const e=t;!function(){const e=document.querySelector(".bookShell");for(;e.firstChild;)e.removeChild(e.firstChild)}();try{await async function(e){const t=`https://books-backend.p.goit.global/books/category?category=${e}`;try{const n=(await Dg.default.get(t)).data,s=document.querySelector(".bookShell");if(s.classList.add("bookShell-category"),function(e){const t=document.querySelector(".bookShell__title"),n=e.split(" "),s=n.shift();t.innerHTML=`${s} <span class="bookShell__title_span">${n.join(" ")}</span>`}(e),n.forEach((e=>{const{_id:t,book_image:n,title:i,author:r}=e,a=function(e,t,n,s){const i=document.createElement("div");i.className="book",i.addEventListener("click",(()=>{console.log(`Book ${t} clicked, ID: ${s}`)}));const r=document.createElement("div");r.classList.add("book-image-container");const a=document.createElement("img");a.src=e,a.alt=t,a.loading="lazy",a.className="book__img",a.classList.add("js-gallery-image"),a.setAttribute("data-id",s),r.appendChild(a);const o=document.createElement("div");o.classList.add("quick-view"),o.textContent="QUICK VIEW",o.setAttribute("data-id",s),r.appendChild(o),i.appendChild(r);const l=document.createElement("p");l.textContent=t,l.className="book__title",t.length>15?l.textContent=t.substring(0,15)+"...":l.textContent=t;i.appendChild(l);const c=document.createElement("p");c.textContent=n,c.classList.add("book__author","author"),n.length>15?c.textContent=n.substring(0,15)+"...":c.textContent=n;return i.appendChild(c),i}(n,i,r,t);a&&s.appendChild(a)})),0===n.length){const e=document.createElement("div");e.textContent="No books found",e.style.textAlign="center",s.appendChild(e)}return document.documentElement.scrollIntoView({behavior:"smooth",block:"start"}),n}catch(e){throw console.error(e),e}}(e)}catch(e){console.error(e)}Pg()})),o.className="book__button",s.appendChild(o),s}(n);if(s&&t.appendChild(s),0===e.length){const e=document.querySelector(".bookShell"),t=document.createElement("div");t.textContent="No books found",t.style.textAlign="center",e.appendChild(t)}})),e}catch(e){throw console.error(e),e}}function Pg(){const e=window.innerWidth,t=e<480?1:e<780?3:5;document.querySelectorAll(".book__body ul").forEach((e=>{const n=e.querySelectorAll("li");for(let e=0;e<n.length;e++)n[e].style.display=e<t?"block":"none"}))}window.addEventListener("resize",Pg),Pg(),document.addEventListener("DOMContentLoaded",(async()=>{const e=document.createElement("div");e.classList.add("bookShell"),document.body.appendChild(e),Pg();try{await Ng()}catch(e){console.error(e)}Pg()})),i("cwkLb");var Og={};if(Og=function(){function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(n,s){void 0===n&&(n={}),void 0===s&&(s={}),Object.keys(s).forEach((i=>{void 0===n[i]?n[i]=s[i]:e(s[i])&&e(n[i])&&Object.keys(s[i]).length>0&&t(n[i],s[i])}))}const n={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function s(){const e="undefined"!=typeof document?document:{};return t(e,n),e}const i={document:n,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}function a(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function o(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function l(){return Date.now()}function c(e){const t=r();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function u(e,t){void 0===t&&(t="x");const n=r();let s,i,a;const o=c(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),a=new n.WebKitCSSMatrix("none"===i?"":i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=a.toString().split(",")),"x"===t&&(i=n.WebKitCSSMatrix?a.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===t&&(i=n.WebKitCSSMatrix?a.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),i||0}function h(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function d(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function p(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const s=n<0||arguments.length<=n?void 0:arguments[n];if(null!=s&&!d(s)){const n=Object.keys(Object(s)).filter((e=>t.indexOf(e)<0));for(let t=0,i=n.length;t<i;t+=1){const i=n[t],r=Object.getOwnPropertyDescriptor(s,i);void 0!==r&&r.enumerable&&(h(e[i])&&h(s[i])?s[i].__swiper__?e[i]=s[i]:p(e[i],s[i]):!h(e[i])&&h(s[i])?(e[i]={},s[i].__swiper__?e[i]=s[i]:p(e[i],s[i])):e[i]=s[i])}}}return e}function f(e,t,n){e.style.setProperty(t,n)}function m(e){let{swiper:t,targetPosition:n,side:s}=e;const i=r(),a=-t.translate;let o,l=null;const c=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>a?"next":"prev",h=(e,t)=>"next"===u&&e>=t||"prev"===u&&e<=t,d=()=>{o=(new Date).getTime(),null===l&&(l=o);const e=Math.max(Math.min((o-l)/c,1),0),r=.5-Math.cos(e*Math.PI)/2;let u=a+r*(n-a);if(h(u,n)&&(u=n),t.wrapperEl.scrollTo({[s]:u}),h(u,n))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[s]:u})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(d)};d()}function g(e){return e.querySelector(".swiper-slide-transform")||e.shadowEl&&e.shadowEl.querySelector(".swiper-slide-transform")||e}function v(e,t){return void 0===t&&(t=""),[...e.children].filter((e=>e.matches(t)))}function y(e,t){void 0===t&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function w(e){const t=r(),n=s(),i=e.getBoundingClientRect(),a=n.body,o=e.clientTop||a.clientTop||0,l=e.clientLeft||a.clientLeft||0,c=e===t?t.scrollY:e.scrollTop,u=e===t?t.scrollX:e.scrollLeft;return{top:i.top+c-o,left:i.left+u-l}}function b(e,t){const n=[];for(;e.previousElementSibling;){const s=e.previousElementSibling;t?s.matches(t)&&n.push(s):n.push(s),e=s}return n}function E(e,t){const n=[];for(;e.nextElementSibling;){const s=e.nextElementSibling;t?s.matches(t)&&n.push(s):n.push(s),e=s}return n}function T(e,t){return r().getComputedStyle(e,null).getPropertyValue(t)}function S(e){let t,n=e;if(n){for(t=0;null!==(n=n.previousSibling);)1===n.nodeType&&(t+=1);return t}}function I(e,t){const n=[];let s=e.parentElement;for(;s;)t?s.matches(t)&&n.push(s):n.push(s),s=s.parentElement;return n}function C(e,t){function n(s){s.target===e&&(t.call(e,s),e.removeEventListener("transitionend",n))}t&&e.addEventListener("transitionend",n)}function _(e,t,n){const s=r();return n?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let k,x,A;function M(){const e=r(),t=s();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function L(){return k||(k=M()),k}function D(e){let{userAgent:t}=void 0===e?{}:e;const n=L(),s=r(),i=s.navigator.platform,a=t||s.navigator.userAgent,o={ios:!1,android:!1},l=s.screen.width,c=s.screen.height,u=a.match(/(Android);?[\s\/]+([\d.]+)?/);let h=a.match(/(iPad).*OS\s([\d_]+)/);const d=a.match(/(iPod)(.*OS\s([\d_]+))?/),p=!h&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f="Win32"===i;let m="MacIntel"===i;const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!h&&m&&n.touch&&g.indexOf(`${l}x${c}`)>=0&&(h=a.match(/(Version)\/([\d.]+)/),h||(h=[0,1,"13_0_0"]),m=!1),u&&!f&&(o.os="android",o.android=!0),(h||p||d)&&(o.os="ios",o.ios=!0),o}function N(e){return void 0===e&&(e={}),x||(x=D(e)),x}function P(){const e=r();let t=!1;function n(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(n()){const n=String(e.navigator.userAgent);if(n.includes("Version/")){const[e,s]=n.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&s<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function O(){return A||(A=P()),A}function R(e){let{swiper:t,on:n,emit:s}=e;const i=r();let a=null,o=null;const l=()=>{t&&!t.destroyed&&t.initialized&&(s("beforeResize"),s("resize"))},c=()=>{t&&!t.destroyed&&t.initialized&&(a=new ResizeObserver((e=>{o=i.requestAnimationFrame((()=>{const{width:n,height:s}=t;let i=n,r=s;e.forEach((e=>{let{contentBoxSize:n,contentRect:s,target:a}=e;a&&a!==t.el||(i=s?s.width:(n[0]||n).inlineSize,r=s?s.height:(n[0]||n).blockSize)})),i===n&&r===s||l()}))})),a.observe(t.el))},u=()=>{o&&i.cancelAnimationFrame(o),a&&a.unobserve&&t.el&&(a.unobserve(t.el),a=null)},h=()=>{t&&!t.destroyed&&t.initialized&&s("orientationchange")};n("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?c():(i.addEventListener("resize",l),i.addEventListener("orientationchange",h))})),n("destroy",(()=>{u(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",h)}))}function F(e){let{swiper:t,extendParams:n,on:s,emit:i}=e;const a=[],o=r(),l=function(e,n){void 0===n&&(n={});const s=new(o.MutationObserver||o.WebkitMutationObserver)((e=>{if(t.__preventObserver__)return;if(1===e.length)return void i("observerUpdate",e[0]);const n=function(){i("observerUpdate",e[0])};o.requestAnimationFrame?o.requestAnimationFrame(n):o.setTimeout(n,0)}));s.observe(e,{attributes:void 0===n.attributes||n.attributes,childList:void 0===n.childList||n.childList,characterData:void 0===n.characterData||n.characterData}),a.push(s)},c=()=>{if(t.params.observer){if(t.params.observeParents){const e=I(t.el);for(let t=0;t<e.length;t+=1)l(e[t])}l(t.el,{childList:t.params.observeSlideChildren}),l(t.wrapperEl,{attributes:!1})}},u=()=>{a.forEach((e=>{e.disconnect()})),a.splice(0,a.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",c),s("destroy",u)}var V={on(e,t,n){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof t)return s;const i=n?"unshift":"push";return e.split(" ").forEach((e=>{s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][i](t)})),s},once(e,t,n){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof t)return s;function i(){s.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];t.apply(s,r)}return i.__emitterProxy=t,s.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const s=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[s](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((s,i)=>{(s===t||s.__emitterProxy&&s.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)}))})),n):n},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,n,s;for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],n=r.slice(1,r.length),s=e):(t=r[0].events,n=r[0].data,s=r[0].context||e),n.unshift(s),(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(s,[t,...n])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(s,n)}))})),e}};function U(){const e=this;let t,n;const s=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:s.clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:s.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(T(s,"padding-left")||0,10)-parseInt(T(s,"padding-right")||0,10),n=n-parseInt(T(s,"padding-top")||0,10)-parseInt(T(s,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function $(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const s=e.params,{wrapperEl:i,slidesEl:r,size:a,rtlTranslate:o,wrongRTL:l}=e,c=e.virtual&&s.virtual.enabled,u=c?e.virtual.slides.length:e.slides.length,h=v(r,`.${e.params.slideClass}, swiper-slide`),d=c?e.virtual.slides.length:h.length;let p=[];const m=[],g=[];let y=s.slidesOffsetBefore;"function"==typeof y&&(y=s.slidesOffsetBefore.call(e));let w=s.slidesOffsetAfter;"function"==typeof w&&(w=s.slidesOffsetAfter.call(e));const b=e.snapGrid.length,E=e.slidesGrid.length;let S=s.spaceBetween,I=-y,C=0,k=0;if(void 0===a)return;"string"==typeof S&&S.indexOf("%")>=0?S=parseFloat(S.replace("%",""))/100*a:"string"==typeof S&&(S=parseFloat(S)),e.virtualSize=-S,h.forEach((e=>{o?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),s.centeredSlides&&s.cssMode&&(f(i,"--swiper-centered-offset-before",""),f(i,"--swiper-centered-offset-after",""));const x=s.grid&&s.grid.rows>1&&e.grid;let A;x&&e.grid.initSlides(d);const M="auto"===s.slidesPerView&&s.breakpoints&&Object.keys(s.breakpoints).filter((e=>void 0!==s.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<d;i+=1){let r;if(A=0,h[i]&&(r=h[i]),x&&e.grid.updateSlide(i,r,d,t),!h[i]||"none"!==T(r,"display")){if("auto"===s.slidesPerView){M&&(h[i].style[t("width")]="");const a=getComputedStyle(r),o=r.style.transform,l=r.style.webkitTransform;if(o&&(r.style.transform="none"),l&&(r.style.webkitTransform="none"),s.roundLengths)A=e.isHorizontal()?_(r,"width",!0):_(r,"height",!0);else{const e=n(a,"width"),t=n(a,"padding-left"),s=n(a,"padding-right"),i=n(a,"margin-left"),o=n(a,"margin-right"),l=a.getPropertyValue("box-sizing");if(l&&"border-box"===l)A=e+i+o;else{const{clientWidth:n,offsetWidth:a}=r;A=e+t+s+i+o+(a-n)}}o&&(r.style.transform=o),l&&(r.style.webkitTransform=l),s.roundLengths&&(A=Math.floor(A))}else A=(a-(s.slidesPerView-1)*S)/s.slidesPerView,s.roundLengths&&(A=Math.floor(A)),h[i]&&(h[i].style[t("width")]=`${A}px`);h[i]&&(h[i].swiperSlideSize=A),g.push(A),s.centeredSlides?(I=I+A/2+C/2+S,0===C&&0!==i&&(I=I-a/2-S),0===i&&(I=I-a/2-S),Math.abs(I)<.001&&(I=0),s.roundLengths&&(I=Math.floor(I)),k%s.slidesPerGroup==0&&p.push(I),m.push(I)):(s.roundLengths&&(I=Math.floor(I)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup==0&&p.push(I),m.push(I),I=I+A+S),e.virtualSize+=A+S,C=A,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,a)+w,o&&l&&("slide"===s.effect||"coverflow"===s.effect)&&(i.style.width=`${e.virtualSize+S}px`),s.setWrapperSize&&(i.style[t("width")]=`${e.virtualSize+S}px`),x&&e.grid.updateWrapperSize(A,p,t),!s.centeredSlides){const t=[];for(let n=0;n<p.length;n+=1){let i=p[n];s.roundLengths&&(i=Math.floor(i)),p[n]<=e.virtualSize-a&&t.push(i)}p=t,Math.floor(e.virtualSize-a)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-a)}if(c&&s.loop){const t=g[0]+S;if(s.slidesPerGroup>1){const n=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/s.slidesPerGroup),i=t*s.slidesPerGroup;for(let e=0;e<n;e+=1)p.push(p[p.length-1]+i)}for(let n=0;n<e.virtual.slidesBefore+e.virtual.slidesAfter;n+=1)1===s.slidesPerGroup&&p.push(p[p.length-1]+t),m.push(m[m.length-1]+t),e.virtualSize+=t}if(0===p.length&&(p=[0]),0!==S){const n=e.isHorizontal()&&o?"marginLeft":t("marginRight");h.filter(((e,t)=>!(s.cssMode&&!s.loop)||t!==h.length-1)).forEach((e=>{e.style[n]=`${S}px`}))}if(s.centeredSlides&&s.centeredSlidesBounds){let e=0;g.forEach((t=>{e+=t+(S||0)})),e-=S;const t=e-a;p=p.map((e=>e<0?-y:e>t?t+w:e))}if(s.centerInsufficientSlides){let e=0;if(g.forEach((t=>{e+=t+(S||0)})),e-=S,e<a){const t=(a-e)/2;p.forEach(((e,n)=>{p[n]=e-t})),m.forEach(((e,n)=>{m[n]=e+t}))}}if(Object.assign(e,{slides:h,snapGrid:p,slidesGrid:m,slidesSizesGrid:g}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){f(i,"--swiper-centered-offset-before",-p[0]+"px"),f(i,"--swiper-centered-offset-after",e.size/2-g[g.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(d!==u&&e.emit("slidesLengthChange"),p.length!==b&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),m.length!==E&&e.emit("slidesGridLengthChange"),s.watchSlidesProgress&&e.updateSlidesOffset(),!(c||s.cssMode||"slide"!==s.effect&&"fade"!==s.effect)){const t=`${s.containerModifierClass}backface-hidden`,n=e.el.classList.contains(t);d<=s.maxBackfaceHiddenSlides?n||e.el.classList.add(t):n&&e.el.classList.remove(t)}}function z(e){const t=this,n=[],s=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const a=e=>s?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{n.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!s)break;n.push(a(e))}else n.push(a(t.activeIndex));for(i=0;i<n.length;i+=1)if(void 0!==n[i]){const e=n[i].offsetHeight;r=e>r?e:r}(r||0===r)&&(t.wrapperEl.style.height=`${r}px`)}function B(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=(e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop)-n-e.cssOverflowAdjustment()}function j(e){void 0===e&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:s,rtlTranslate:i,snapGrid:r}=t;if(0===s.length)return;void 0===s[0].swiperSlideOffset&&t.updateSlidesOffset();let a=-e;i&&(a=e),s.forEach((e=>{e.classList.remove(n.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];let o=n.spaceBetween;"string"==typeof o&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*t.size:"string"==typeof o&&(o=parseFloat(o));for(let e=0;e<s.length;e+=1){const l=s[e];let c=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=s[0].swiperSlideOffset);const u=(a+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+o),h=(a-r[0]+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+o),d=-(a-c),p=d+t.slidesSizesGrid[e];(d>=0&&d<t.size-1||p>1&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),s[e].classList.add(n.slideVisibleClass)),l.progress=i?-u:u,l.originalProgress=i?-h:h}}function q(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,s=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:a,progressLoop:o}=t;const l=r,c=a;if(0===s)i=0,r=!0,a=!0;else{i=(e-t.minTranslate())/s;const n=Math.abs(e-t.minTranslate())<1,o=Math.abs(e-t.maxTranslate())<1;r=n||i<=0,a=o||i>=1,n&&(i=0),o&&(i=1)}if(n.loop){const n=t.getSlideIndexByData(0),s=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[n],r=t.slidesGrid[s],a=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);o=l>=i?(l-i)/a:(l+a-r)/a,o>1&&(o-=1)}Object.assign(t,{progress:i,progressLoop:o,isBeginning:r,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(l&&!r||c&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}function H(){const e=this,{slides:t,params:n,slidesEl:s,activeIndex:i}=e,r=e.virtual&&n.virtual.enabled,a=e=>v(s,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let o;if(t.forEach((e=>{e.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)})),r)if(n.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),o=a(`[data-swiper-slide-index="${t}"]`)}else o=a(`[data-swiper-slide-index="${i}"]`);else o=t[i];if(o){o.classList.add(n.slideActiveClass);let e=E(o,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!e&&(e=t[0]),e&&e.classList.add(n.slideNextClass);let s=b(o,`.${n.slideClass}, swiper-slide`)[0];n.loop,s&&s.classList.add(n.slidePrevClass)}e.emitSlidesClasses()}const G=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,s=t.closest(n());if(s){const t=s.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}},W=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},K=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const s="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex,r=i+s-1;if(e.params.rewind)for(let s=i-t;s<=r+t;s+=1){const t=(s%n+n)%n;t!==i&&t>r&&W(e,t)}else for(let s=Math.max(r-t,0);s<=Math.min(r+t,n-1);s+=1)s!==i&&s>r&&W(e,s)};function X(e){const{slidesGrid:t,params:n}=e,s=e.rtlTranslate?e.translate:-e.translate;let i;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?s>=t[e]&&s<t[e+1]-(t[e+1]-t[e])/2?i=e:s>=t[e]&&s<t[e+1]&&(i=e+1):s>=t[e]&&(i=e);return n.normalizeSlideIndex&&(i<0||void 0===i)&&(i=0),i}function Y(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:s,params:i,activeIndex:r,realIndex:a,snapIndex:o}=t;let l,c=e;const u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(void 0===c&&(c=X(t)),s.indexOf(n)>=0)l=s.indexOf(n);else{const e=Math.min(i.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/i.slidesPerGroup)}if(l>=s.length&&(l=s.length-1),c===r)return l!==o&&(t.snapIndex=l,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=u(c)));let h;h=t.virtual&&i.virtual.enabled&&i.loop?u(c):t.slides[c]?parseInt(t.slides[c].getAttribute("data-swiper-slide-index")||c,10):c,Object.assign(t,{previousSnapIndex:o,snapIndex:l,previousRealIndex:a,realIndex:h,previousIndex:r,activeIndex:c}),t.initialized&&K(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),a!==h&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function Q(e){const t=this,n=t.params,s=e.closest(`.${n.slideClass}, swiper-slide`);let i,r=!1;if(s)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===s){r=!0,i=e;break}if(!s||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=s,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=i,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}function J(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:s,translate:i,wrapperEl:r}=t;if(n.virtualTranslate)return s?-i:i;if(n.cssMode)return i;let a=u(r,e);return a+=t.cssOverflowAdjustment(),s&&(a=-a),a||0}function Z(e,t){const n=this,{rtlTranslate:s,params:i,wrapperEl:r,progress:a}=n;let o=0,l=0;const c=0;let u;n.isHorizontal()?o=s?-e:e:l=e,i.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?o:l,i.cssMode?r[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-o:-l:i.virtualTranslate||(n.isHorizontal()?o-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);const h=n.maxTranslate()-n.minTranslate();u=0===h?0:(e-n.minTranslate())/h,u!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function ee(){return-this.snapGrid[0]}function te(){return-this.snapGrid[this.snapGrid.length-1]}function ne(e,t,n,s,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),void 0===s&&(s=!0);const r=this,{params:a,wrapperEl:o}=r;if(r.animating&&a.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let u;if(u=s&&e>l?l:s&&e<c?c:e,r.updateProgress(u),a.cssMode){const e=r.isHorizontal();if(0===t)o[e?"scrollLeft":"scrollTop"]=-u;else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:-u,side:e?"left":"top"}),!0;o.scrollTo({[e?"left":"top"]:-u,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(u),n&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(u),n&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,n&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}function se(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)}function ie(e){let{swiper:t,runCallbacks:n,direction:s,step:i}=e;const{activeIndex:r,previousIndex:a}=t;let o=s;if(o||(o=r>a?"next":r<a?"prev":"reset"),t.emit(`transition${i}`),n&&r!==a){if("reset"===o)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===o?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function re(e,t){void 0===e&&(e=!0);const n=this,{params:s}=n;s.cssMode||(s.autoHeight&&n.updateAutoHeight(),ie({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function ae(e,t){void 0===e&&(e=!0);const n=this,{params:s}=n;n.animating=!1,s.cssMode||(n.setTransition(0),ie({swiper:n,runCallbacks:e,direction:t,step:"End"}))}function oe(e,t,n,s,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),"string"==typeof e&&(e=parseInt(e,10));const r=this;let a=e;a<0&&(a=0);const{params:o,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:h,rtlTranslate:d,wrapperEl:p,enabled:f}=r;if(r.animating&&o.preventInteractionOnTransition||!f&&!s&&!i)return!1;const g=Math.min(r.params.slidesPerGroupSkip,a);let v=g+Math.floor((a-g)/r.params.slidesPerGroup);v>=l.length&&(v=l.length-1);const y=-l[v];if(o.normalizeSlideIndex)for(let e=0;e<c.length;e+=1){const t=-Math.floor(100*y),n=Math.floor(100*c[e]),s=Math.floor(100*c[e+1]);void 0!==c[e+1]?t>=n&&t<s-(s-n)/2?a=e:t>=n&&t<s&&(a=e+1):t>=n&&(a=e)}if(r.initialized&&a!==h){if(!r.allowSlideNext&&y<r.translate&&y<r.minTranslate())return!1;if(!r.allowSlidePrev&&y>r.translate&&y>r.maxTranslate()&&(h||0)!==a)return!1}let w;if(a!==(u||0)&&n&&r.emit("beforeSlideChangeStart"),r.updateProgress(y),w=a>h?"next":a<h?"prev":"reset",d&&-y===r.translate||!d&&y===r.translate)return r.updateActiveIndex(a),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==o.effect&&r.setTranslate(y),"reset"!==w&&(r.transitionStart(n,w),r.transitionEnd(n,w)),!1;if(o.cssMode){const e=r.isHorizontal(),n=d?y:-y;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),t&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{p[e?"scrollLeft":"scrollTop"]=n}))):p[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1}))}else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:n,side:e?"left":"top"}),!0;p.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(y),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(n,w),0===t?r.transitionEnd(n,w):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(n,w))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function le(e,t,n,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),"string"==typeof e&&(e=parseInt(e,10));const i=this;let r=e;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?r+=i.virtual.slidesBefore:r=i.getSlideIndexByData(r)),i.slideTo(r,t,n,s)}function ce(e,t,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const s=this,{enabled:i,params:r,animating:a}=s;if(!i)return s;let o=r.slidesPerGroup;"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(o=Math.max(s.slidesPerViewDynamic("current",!0),1));const l=s.activeIndex<r.slidesPerGroupSkip?1:o,c=s.virtual&&r.virtual.enabled;if(r.loop){if(a&&!c&&r.loopPreventsSliding)return!1;s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft}return r.rewind&&s.isEnd?s.slideTo(0,e,t,n):s.slideTo(s.activeIndex+l,e,t,n)}function ue(e,t,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const s=this,{params:i,snapGrid:r,slidesGrid:a,rtlTranslate:o,enabled:l,animating:c}=s;if(!l)return s;const u=s.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}function h(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const d=h(o?s.translate:-s.translate),p=r.map((e=>h(e)));let f=r[p.indexOf(d)-1];if(void 0===f&&i.cssMode){let e;r.forEach(((t,n)=>{d>=t&&(e=n)})),void 0!==e&&(f=r[e>0?e-1:e])}let m=0;if(void 0!==f&&(m=a.indexOf(f),m<0&&(m=s.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-s.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&s.isBeginning){const i=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(i,e,t,n)}return s.slideTo(m,e,t,n)}function he(e,t,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const s=this;return s.slideTo(s.activeIndex,e,t,n)}function de(e,t,n,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===s&&(s=.5);const i=this;let r=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,r),o=a+Math.floor((r-a)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[o]){const e=i.snapGrid[o];l-e>(i.snapGrid[o+1]-e)*s&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[o-1];l-e<=(i.snapGrid[o]-e)*s&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,n)}function pe(){const e=this,{params:t,slidesEl:n}=e,s="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;const a=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-s/2||r>e.slides.length-e.loopedSlides+s/2?(e.loopFix(),r=e.getSlideIndex(v(n,`${a}[data-swiper-slide-index="${i}"]`)[0]),o((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-s?(e.loopFix(),r=e.getSlideIndex(v(n,`${a}[data-swiper-slide-index="${i}"]`)[0]),o((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}function fe(e){const t=this,{params:n,slidesEl:s}=t;!n.loop||t.virtual&&t.params.virtual.enabled||(v(s,`.${n.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"}))}function me(e){let{slideRealIndex:t,slideTo:n=!0,direction:s,setTranslate:i,activeSlideIndex:r,byController:a,byMousewheel:o}=void 0===e?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:h,slidesEl:d,params:p}=l;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&p.virtual.enabled)return n&&(p.centeredSlides||0!==l.snapIndex?p.centeredSlides&&l.snapIndex<p.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0):l.slideTo(l.virtual.slides.length,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=h,void l.emit("loopFix");const f="auto"===p.slidesPerView?l.slidesPerViewDynamic():Math.ceil(parseFloat(p.slidesPerView,10));let m=p.loopedSlides||f;m%p.slidesPerGroup!=0&&(m+=p.slidesPerGroup-m%p.slidesPerGroup),l.loopedSlides=m;const g=[],v=[];let y=l.activeIndex;void 0===r?r=l.getSlideIndex(l.slides.filter((e=>e.classList.contains(p.slideActiveClass)))[0]):y=r;const w="next"===s||!s,b="prev"===s||!s;let E=0,T=0;if(r<m){E=Math.max(m-r,p.slidesPerGroup);for(let e=0;e<m-r;e+=1){const t=e-Math.floor(e/c.length)*c.length;g.push(c.length-t-1)}}else if(r>l.slides.length-2*m){T=Math.max(r-(l.slides.length-2*m),p.slidesPerGroup);for(let e=0;e<T;e+=1){const t=e-Math.floor(e/c.length)*c.length;v.push(t)}}if(b&&g.forEach((e=>{l.slides[e].swiperLoopMoveDOM=!0,d.prepend(l.slides[e]),l.slides[e].swiperLoopMoveDOM=!1})),w&&v.forEach((e=>{l.slides[e].swiperLoopMoveDOM=!0,d.append(l.slides[e]),l.slides[e].swiperLoopMoveDOM=!1})),l.recalcSlides(),"auto"===p.slidesPerView&&l.updateSlides(),p.watchSlidesProgress&&l.updateSlidesOffset(),n)if(g.length>0&&b)if(void 0===t){const e=l.slidesGrid[y],t=l.slidesGrid[y+E]-e;o?l.setTranslate(l.translate-t):(l.slideTo(y+E,0,!1,!0),i&&(l.touches[l.isHorizontal()?"startX":"startY"]+=t))}else i&&l.slideToLoop(t,0,!1,!0);else if(v.length>0&&w)if(void 0===t){const e=l.slidesGrid[y],t=l.slidesGrid[y-T]-e;o?l.setTranslate(l.translate-t):(l.slideTo(y-T,0,!1,!0),i&&(l.touches[l.isHorizontal()?"startX":"startY"]+=t))}else l.slideToLoop(t,0,!1,!0);if(l.allowSlidePrev=u,l.allowSlideNext=h,l.controller&&l.controller.control&&!a){const e={slideRealIndex:t,slideTo:!1,direction:s,setTranslate:i,activeSlideIndex:r,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach((t=>{!t.destroyed&&t.params.loop&&t.loopFix(e)})):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix(e)}l.emit("loopFix")}function ge(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const s=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;s[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),s.forEach((e=>{n.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}function ve(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))}function ye(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}function we(e,t){function n(t){if(!t||t===s()||t===r())return null;t.assignedSlot&&(t=t.assignedSlot);const i=t.closest(e);return i||t.getRootNode?i||n(t.getRootNode().host):null}return void 0===t&&(t=this),n(t)}function be(e){const t=this,n=s(),i=r(),a=t.touchEventsData;a.evCache.push(e);const{params:o,touches:c,enabled:u}=t;if(!u)return;if(!o.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let h=e;h.originalEvent&&(h=h.originalEvent);let d=h.target;if("wrapper"===o.touchEventsTarget&&!t.wrapperEl.contains(d))return;if("which"in h&&3===h.which)return;if("button"in h&&h.button>0)return;if(a.isTouched&&a.isMoved)return;const p=!!o.noSwipingClass&&""!==o.noSwipingClass,f=e.composedPath?e.composedPath():e.path;p&&h.target&&h.target.shadowRoot&&f&&(d=f[0]);const m=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,g=!(!h.target||!h.target.shadowRoot);if(o.noSwiping&&(g?we(m,d):d.closest(m)))return void(t.allowClick=!0);if(o.swipeHandler&&!d.closest(o.swipeHandler))return;c.currentX=h.pageX,c.currentY=h.pageY;const v=c.currentX,y=c.currentY,w=o.edgeSwipeDetection||o.iOSEdgeSwipeDetection,b=o.edgeSwipeThreshold||o.iOSEdgeSwipeThreshold;if(w&&(v<=b||v>=i.innerWidth-b)){if("prevent"!==w)return;e.preventDefault()}Object.assign(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),c.startX=v,c.startY=y,a.touchStartTime=l(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(a.allowThresholdMove=!1);let E=!0;d.matches(a.focusableElements)&&(E=!1,"SELECT"===d.nodeName&&(a.isTouched=!1)),n.activeElement&&n.activeElement.matches(a.focusableElements)&&n.activeElement!==d&&n.activeElement.blur();const T=E&&t.allowTouchMove&&o.touchStartPreventDefault;!o.touchStartForcePreventDefault&&!T||d.isContentEditable||h.preventDefault(),t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",h)}function Ee(e){const t=s(),n=this,i=n.touchEventsData,{params:r,touches:a,rtlTranslate:o,enabled:c}=n;if(!c)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;let u=e;if(u.originalEvent&&(u=u.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&n.emit("touchMoveOpposite",u));const h=i.evCache.findIndex((e=>e.pointerId===u.pointerId));h>=0&&(i.evCache[h]=u);const d=i.evCache.length>1?i.evCache[0]:u,p=d.pageX,f=d.pageY;if(u.preventedByNestedSwiper)return a.startX=p,void(a.startY=f);if(!n.allowTouchMove)return u.target.matches(i.focusableElements)||(n.allowClick=!1),void(i.isTouched&&(Object.assign(a,{startX:p,startY:f,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:p,currentY:f}),i.touchStartTime=l()));if(r.touchReleaseOnEdges&&!r.loop)if(n.isVertical()){if(f<a.startY&&n.translate<=n.maxTranslate()||f>a.startY&&n.translate>=n.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(p<a.startX&&n.translate<=n.maxTranslate()||p>a.startX&&n.translate>=n.minTranslate())return;if(t.activeElement&&u.target===t.activeElement&&u.target.matches(i.focusableElements))return i.isMoved=!0,void(n.allowClick=!1);if(i.allowTouchCallbacks&&n.emit("touchMove",u),u.targetTouches&&u.targetTouches.length>1)return;a.currentX=p,a.currentY=f;const m=a.currentX-a.startX,g=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(m**2+g**2)<n.params.threshold)return;if(void 0===i.isScrolling){let e;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?i.isScrolling=!1:m*m+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(m))/Math.PI,i.isScrolling=n.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&n.emit("touchMoveOpposite",u),void 0===i.startMoving&&(a.currentX===a.startX&&a.currentY===a.startY||(i.startMoving=!0)),i.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&i.evCache.length>1)return void(i.isTouched=!1);if(!i.startMoving)return;n.allowClick=!1,!r.cssMode&&u.cancelable&&u.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&u.stopPropagation();let v=n.isHorizontal()?m:g,y=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;r.oneWayMovement&&(v=Math.abs(v)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),a.diff=v,v*=r.touchRatio,o&&(v=-v,y=-y);const w=n.touchesDirection;n.swipeDirection=v>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const b=n.params.loop&&!r.cssMode;if(!i.isMoved){if(b&&n.loopFix({direction:n.swipeDirection}),i.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(e)}i.allowMomentumBounce=!1,!r.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",u)}let E;i.isMoved&&w!==n.touchesDirection&&b&&Math.abs(v)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),E=!0),n.emit("sliderMove",u),i.isMoved=!0,i.currentTranslate=v+i.startTranslate;let T=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),v>0?(b&&!E&&i.currentTranslate>(r.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>n.minTranslate()&&(T=!1,r.resistance&&(i.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+i.startTranslate+v)**S))):v<0&&(b&&!E&&i.currentTranslate<(r.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===r.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<n.maxTranslate()&&(T=!1,r.resistance&&(i.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-i.startTranslate-v)**S))),T&&(u.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),n.allowSlidePrev||n.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,i.currentTranslate=i.startTranslate,void(a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&n.freeMode||r.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&r.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(i.currentTranslate),n.setTranslate(i.currentTranslate))}function Te(e){const t=this,n=t.touchEventsData,s=n.evCache.findIndex((t=>t.pointerId===e.pointerId));if(s>=0&&n.evCache.splice(s,1),["pointercancel","pointerout","pointerleave"].includes(e.type)&&("pointercancel"!==e.type||!t.browser.isSafari&&!t.browser.isWebView))return;const{params:i,touches:r,rtlTranslate:a,slidesGrid:c,enabled:u}=t;if(!u)return;if(!i.simulateTouch&&"mouse"===e.pointerType)return;let h=e;if(h.originalEvent&&(h=h.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",h),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&i.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);i.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=l(),p=d-n.touchStartTime;if(t.allowClick){const e=h.path||h.composedPath&&h.composedPath();t.updateClickedSlide(e&&e[0]||h.target),t.emit("tap click",h),p<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",h)}if(n.lastClickTime=l(),o((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===r.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let f;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,f=i.followFinger?a?t.translate:-t.translate:-n.currentTranslate,i.cssMode)return;if(t.params.freeMode&&i.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:f});let m=0,g=t.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<i.slidesPerGroupSkip?1:i.slidesPerGroup){const t=e<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;void 0!==c[e+t]?f>=c[e]&&f<c[e+t]&&(m=e,g=c[e+t]-c[e]):f>=c[e]&&(m=e,g=c[c.length-1]-c[c.length-2])}let v=null,y=null;i.rewind&&(t.isBeginning?y=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(v=0));const w=(f-c[m])/g,b=m<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(p>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(w>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?v:m+b):t.slideTo(m)),"prev"===t.swipeDirection&&(w>1-i.longSwipesRatio?t.slideTo(m+b):null!==y&&w<0&&Math.abs(w)>i.longSwipesRatio?t.slideTo(y):t.slideTo(m))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);!t.navigation||h.target!==t.navigation.nextEl&&h.target!==t.navigation.prevEl?("next"===t.swipeDirection&&t.slideTo(null!==v?v:m+b),"prev"===t.swipeDirection&&t.slideTo(null!==y?y:m)):h.target===t.navigation.nextEl?t.slideTo(m+b):t.slideTo(m)}}function Se(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:i,snapGrid:r}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const o=a&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||o?e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=i,e.allowSlideNext=s,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function Ie(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Ce(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:s}=e;if(!s)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function _e(e){const t=this;G(t,e.target),t.params.cssMode||"auto"!==t.params.slidesPerView&&!t.params.autoHeight||t.update()}let ke=!1;function xe(){}const Ae=(e,t)=>{const n=s(),{params:i,el:r,wrapperEl:a,device:o}=e,l=!!i.nested,c="on"===t?"addEventListener":"removeEventListener",u=t;r[c]("pointerdown",e.onTouchStart,{passive:!1}),n[c]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[c]("pointerup",e.onTouchEnd,{passive:!0}),n[c]("pointercancel",e.onTouchEnd,{passive:!0}),n[c]("pointerout",e.onTouchEnd,{passive:!0}),n[c]("pointerleave",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[c]("click",e.onClick,!0),i.cssMode&&a[c]("scroll",e.onScroll),i.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Se,!0):e[u]("observerUpdate",Se,!0),r[c]("load",e.onLoad,{capture:!0})};function Me(){const e=this,t=s(),{params:n}=e;e.onTouchStart=be.bind(e),e.onTouchMove=Ee.bind(e),e.onTouchEnd=Te.bind(e),n.cssMode&&(e.onScroll=Ce.bind(e)),e.onClick=Ie.bind(e),e.onLoad=_e.bind(e),ke||(t.addEventListener("touchstart",xe),ke=!0),Ae(e,"on")}function Le(){Ae(this,"off")}const De=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Ne(){const e=this,{realIndex:t,initialized:n,params:s,el:i}=e,r=s.breakpoints;if(!r||r&&0===Object.keys(r).length)return;const a=e.getBreakpoint(r,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;const o=(a in r?r[a]:void 0)||e.originalParams,l=De(e,s),c=De(e,o),u=s.enabled;l&&!c?(i.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),e.emitContainerClasses()):!l&&c&&(i.classList.add(`${s.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===s.grid.fill)&&i.classList.add(`${s.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const n=s[t]&&s[t].enabled,i=o[t]&&o[t].enabled;n&&!i&&e[t].disable(),!n&&i&&e[t].enable()}));const h=o.direction&&o.direction!==s.direction,d=s.loop&&(o.slidesPerView!==s.slidesPerView||h);h&&n&&e.changeDirection(),p(e.params,o);const f=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),u&&!f?e.disable():!u&&f&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",o),d&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",o)}function Pe(e,t,n){if(void 0===t&&(t="window"),!e||"container"===t&&!n)return;let s=!1;const i=r(),a="window"===t?i.innerHeight:n.clientHeight,o=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:a*t,point:e}}return{value:e,point:e}}));o.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<o.length;e+=1){const{point:r,value:a}=o[e];"window"===t?i.matchMedia(`(min-width: ${a}px)`).matches&&(s=r):a<=n.clientWidth&&(s=r)}return s||"max"}function Oe(e,t){const n=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((s=>{e[s]&&n.push(t+s)})):"string"==typeof e&&n.push(t+e)})),n}function Re(){const e=this,{classNames:t,params:n,rtl:s,el:i,device:r}=e,a=Oe(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:s},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function Fe(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}function Ve(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:s}=n;if(s){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*s;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Ue={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function $e(e,t){return function(n){void 0===n&&(n={});const s=Object.keys(n)[0],i=n[s];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(s)>=0&&!0===e[s]&&(e[s]={auto:!0}),s in e&&"enabled"in i?(!0===e[s]&&(e[s]={enabled:!0}),"object"!=typeof e[s]||"enabled"in e[s]||(e[s].enabled=!0),e[s]||(e[s]={enabled:!1}),p(t,n)):p(t,n)):p(t,n)}}const ze={eventsEmitter:V,update:{updateSize:U,updateSlides:$,updateAutoHeight:z,updateSlidesOffset:B,updateSlidesProgress:j,updateProgress:q,updateSlidesClasses:H,updateActiveIndex:Y,updateClickedSlide:Q},translate:{getTranslate:J,setTranslate:Z,minTranslate:ee,maxTranslate:te,translateTo:ne},transition:{setTransition:se,transitionStart:re,transitionEnd:ae},slide:{slideTo:oe,slideToLoop:le,slideNext:ce,slidePrev:ue,slideReset:he,slideToClosest:de,slideToClickedSlide:pe},loop:{loopCreate:fe,loopFix:me,loopDestroy:ge},grabCursor:{setGrabCursor:ve,unsetGrabCursor:ye},events:{attachEvents:Me,detachEvents:Le},breakpoints:{setBreakpoint:Ne,getBreakpoint:Pe},checkOverflow:{checkOverflow:Ve},classes:{addClasses:Re,removeClasses:Fe}},Be={};class je{getSlideIndex(e){const{slidesEl:t,params:n}=this,s=S(v(t,`.${n.slideClass}, swiper-slide`)[0]);return S(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=v(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const s=n.minTranslate(),i=(n.maxTranslate()-s)*e+s;n.translateTo(i,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((n=>{const s=e.getSlideClasses(n);t.push({slideEl:n,classNames:s}),e.emit("_slideClass",n,s)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const n=this,{params:s,slides:i,slidesGrid:r,slidesSizesGrid:a,size:o,activeIndex:l}=n;let c=1;if(s.centeredSlides){let e,t=i[l].swiperSlideSize;for(let n=l+1;n<i.length;n+=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,c+=1,t>o&&(e=!0));for(let n=l-1;n>=0;n-=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,c+=1,t>o&&(e=!0))}else if("current"===e)for(let e=l+1;e<i.length;e+=1)(t?r[e]+a[e]-r[l]<o:r[e]-r[l]<o)&&(c+=1);else for(let e=l-1;e>=0;e-=1)r[l]-r[e]<o&&(c+=1);return c}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function s(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&G(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled)s(),e.params.autoHeight&&e.updateAutoHeight();else{if(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides){const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||s()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const n=this,s=n.params.direction;return e||(e="horizontal"===s?"vertical":"horizontal"),e===s||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${s}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"==typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const s=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(s()):v(n,s())[0];return!i&&t.params.createElements&&(i=y("div",t.params.wrapperClass),n.append(i),v(n,`.${t.params.slideClass}`).forEach((e=>{i.append(e)}))),Object.assign(t,{el:n,wrapperEl:i,slidesEl:t.isElement?n:i,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===T(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===T(n,"direction")),wrongRTL:"-webkit-box"===T(i,"display")}),!0}init(e){const t=this;return t.initialized||!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?G(t,e):e.addEventListener("load",(e=>{G(t,e.target)}))})),K(t),t.initialized=!0,K(t),t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const n=this,{params:s,el:i,wrapperEl:r,slides:o}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),s.loop&&n.loopDestroy(),t&&(n.removeClasses(),i.removeAttribute("style"),r.removeAttribute("style"),o&&o.length&&o.forEach((e=>{e.classList.remove(s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.el.swiper=null,a(n)),n.destroyed=!0),null}static extendDefaults(e){p(Be,e)}static get extendedDefaults(){return Be}static get defaults(){return Ue}static installModule(e){je.prototype.__modules__||(je.prototype.__modules__=[]);const t=je.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>je.installModule(e))),je):(je.installModule(e),je)}constructor(){let e,t;for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];1===i.length&&i[0].constructor&&"Object"===Object.prototype.toString.call(i[0]).slice(8,-1)?t=i[0]:[e,t]=i,t||(t={}),t=p({},t),e&&!t.el&&(t.el=e);const a=s();if(t.el&&"string"==typeof t.el&&a.querySelectorAll(t.el).length>1){const e=[];return a.querySelectorAll(t.el).forEach((n=>{const s=p({},t,{el:n});e.push(new je(s))})),e}const o=this;o.__swiper__=!0,o.support=L(),o.device=N({userAgent:t.userAgent}),o.browser=O(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],t.modules&&Array.isArray(t.modules)&&o.modules.push(...t.modules);const l={};o.modules.forEach((e=>{e({params:t,swiper:o,extendParams:$e(t,l),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})}));const c=p({},Ue,l);return o.params=p({},c,Be,t),o.originalParams=p({},o.params),o.passedParams=p({},t),o.params&&o.params.on&&Object.keys(o.params.on).forEach((e=>{o.on(e,o.params.on[e])})),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===o.params.direction,isVertical:()=>"vertical"===o.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return 8388608*Math.trunc(this.translate/8388608)},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}}function qe(e){let t,{swiper:n,extendParams:i,on:r,emit:a}=e;i({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});const o=s();n.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const l=o.createElement("div");function c(e,t){const s=n.params.virtual;if(s.cache&&n.virtual.cache[t])return n.virtual.cache[t];let i;return s.renderSlide?(i=s.renderSlide.call(n,e,t),"string"==typeof i&&(l.innerHTML=i,i=l.children[0])):i=n.isElement?y("swiper-slide"):y("div",n.params.slideClass),i.setAttribute("data-swiper-slide-index",t),s.renderSlide||(i.innerHTML=e),s.cache&&(n.virtual.cache[t]=i),i}function u(e){const{slidesPerView:t,slidesPerGroup:s,centeredSlides:i,loop:r}=n.params,{addSlidesBefore:o,addSlidesAfter:l}=n.params.virtual,{from:u,to:h,slides:d,slidesGrid:p,offset:f}=n.virtual;n.params.cssMode||n.updateActiveIndex();const m=n.activeIndex||0;let g,y,w;g=n.rtlTranslate?"right":n.isHorizontal()?"left":"top",i?(y=Math.floor(t/2)+s+l,w=Math.floor(t/2)+s+o):(y=t+(s-1)+l,w=(r?t:s)+o);let b=m-w,E=m+y;r||(b=Math.max(b,0),E=Math.min(E,d.length-1));let T=(n.slidesGrid[b]||0)-(n.slidesGrid[0]||0);function S(){n.updateSlides(),n.updateProgress(),n.updateSlidesClasses(),a("virtualUpdate")}if(r&&m>=w?(b-=w,i||(T+=n.slidesGrid[0])):r&&m<w&&(b=-w,i&&(T+=n.slidesGrid[0])),Object.assign(n.virtual,{from:b,to:E,offset:T,slidesGrid:n.slidesGrid,slidesBefore:w,slidesAfter:y}),u===b&&h===E&&!e)return n.slidesGrid!==p&&T!==f&&n.slides.forEach((e=>{e.style[g]=T-Math.abs(n.cssOverflowAdjustment())+"px"})),n.updateProgress(),void a("virtualUpdate");if(n.params.virtual.renderExternal)return n.params.virtual.renderExternal.call(n,{offset:T,from:b,to:E,slides:function(){const e=[];for(let t=b;t<=E;t+=1)e.push(d[t]);return e}()}),void(n.params.virtual.renderExternalUpdate?S():a("virtualUpdate"));const I=[],C=[],_=e=>{let t=e;return e<0?t=d.length+e:t>=d.length&&(t-=d.length),t};if(e)n.slidesEl.querySelectorAll(`.${n.params.slideClass}, swiper-slide`).forEach((e=>{e.remove()}));else for(let e=u;e<=h;e+=1)if(e<b||e>E){const t=_(e);n.slidesEl.querySelectorAll(`.${n.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`).forEach((e=>{e.remove()}))}const k=r?-d.length:0,x=r?2*d.length:d.length;for(let t=k;t<x;t+=1)if(t>=b&&t<=E){const n=_(t);void 0===h||e?C.push(n):(t>h&&C.push(n),t<u&&I.push(n))}if(C.forEach((e=>{n.slidesEl.append(c(d[e],e))})),r)for(let e=I.length-1;e>=0;e-=1){const t=I[e];n.slidesEl.prepend(c(d[t],t))}else I.sort(((e,t)=>t-e)),I.forEach((e=>{n.slidesEl.prepend(c(d[e],e))}));v(n.slidesEl,".swiper-slide, swiper-slide").forEach((e=>{e.style[g]=T-Math.abs(n.cssOverflowAdjustment())+"px"})),S()}function h(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&n.virtual.slides.push(e[t]);else n.virtual.slides.push(e);u(!0)}function d(e){const t=n.activeIndex;let s=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&n.virtual.slides.unshift(e[t]);s=t+e.length,i=e.length}else n.virtual.slides.unshift(e);if(n.params.virtual.cache){const e=n.virtual.cache,t={};Object.keys(e).forEach((n=>{const s=e[n],r=s.getAttribute("data-swiper-slide-index");r&&s.setAttribute("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(n,10)+i]=s})),n.virtual.cache=t}u(!0),n.slideTo(s,0)}function p(e){if(null==e)return;let t=n.activeIndex;if(Array.isArray(e))for(let s=e.length-1;s>=0;s-=1)n.virtual.slides.splice(e[s],1),n.params.virtual.cache&&delete n.virtual.cache[e[s]],e[s]<t&&(t-=1),t=Math.max(t,0);else n.virtual.slides.splice(e,1),n.params.virtual.cache&&delete n.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);u(!0),n.slideTo(t,0)}function m(){n.virtual.slides=[],n.params.virtual.cache&&(n.virtual.cache={}),u(!0),n.slideTo(0,0)}r("beforeInit",(()=>{if(!n.params.virtual.enabled)return;let e;if(void 0===n.passedParams.virtual.slides){const t=[...n.slidesEl.children].filter((e=>e.matches(`.${n.params.slideClass}, swiper-slide`)));t&&t.length&&(n.virtual.slides=[...t],e=!0,t.forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t),n.virtual.cache[t]=e,e.remove()})))}e||(n.virtual.slides=n.params.virtual.slides),n.classNames.push(`${n.params.containerModifierClass}virtual`),n.params.watchSlidesProgress=!0,n.originalParams.watchSlidesProgress=!0,n.params.initialSlide||u()})),r("setTranslate",(()=>{n.params.virtual.enabled&&(n.params.cssMode&&!n._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{u()}),100)):u())})),r("init update resize",(()=>{n.params.virtual.enabled&&n.params.cssMode&&f(n.wrapperEl,"--swiper-virtual-size",`${n.virtualSize}px`)})),Object.assign(n.virtual,{appendSlide:h,prependSlide:d,removeSlide:p,removeAllSlides:m,update:u})}function He(e){let{swiper:t,extendParams:n,on:i,emit:a}=e;const o=s(),l=r();function c(e){if(!t.enabled)return;const{rtlTranslate:n}=t;let s=e;s.originalEvent&&(s=s.originalEvent);const i=s.keyCode||s.charCode,r=t.params.keyboard.pageUpDown,c=r&&33===i,u=r&&34===i,h=37===i,d=39===i,p=38===i,f=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&d||t.isVertical()&&f||u))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&h||t.isVertical()&&p||c))return!1;if(!(s.shiftKey||s.altKey||s.ctrlKey||s.metaKey||o.activeElement&&o.activeElement.nodeName&&("input"===o.activeElement.nodeName.toLowerCase()||"textarea"===o.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(c||u||h||d||p||f)){let e=!1;if(I(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&0===I(t.el,`.${t.params.slideActiveClass}`).length)return;const s=t.el,i=s.clientWidth,r=s.clientHeight,a=l.innerWidth,o=l.innerHeight,c=w(s);n&&(c.left-=s.scrollLeft);const u=[[c.left,c.top],[c.left+i,c.top],[c.left,c.top+r],[c.left+i,c.top+r]];for(let t=0;t<u.length;t+=1){const n=u[t];if(n[0]>=0&&n[0]<=a&&n[1]>=0&&n[1]<=o){if(0===n[0]&&0===n[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((c||u||h||d)&&(s.preventDefault?s.preventDefault():s.returnValue=!1),((u||d)&&!n||(c||h)&&n)&&t.slideNext(),((c||h)&&!n||(u||d)&&n)&&t.slidePrev()):((c||u||p||f)&&(s.preventDefault?s.preventDefault():s.returnValue=!1),(u||f)&&t.slideNext(),(c||p)&&t.slidePrev()),a("keyPress",i)}}function u(){t.keyboard.enabled||(o.addEventListener("keydown",c),t.keyboard.enabled=!0)}function h(){t.keyboard.enabled&&(o.removeEventListener("keydown",c),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},n({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&u()})),i("destroy",(()=>{t.keyboard.enabled&&h()})),Object.assign(t.keyboard,{enable:u,disable:h})}function Ge(e){let{swiper:t,extendParams:n,on:s,emit:i}=e;const a=r();let c;n({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),t.mousewheel={enabled:!1};let u,h=l();const d=[];function p(e){const t=10,n=40,s=800;let i=0,r=0,a=0,o=0;return"detail"in e&&(r=e.detail),"wheelDelta"in e&&(r=-e.wheelDelta/120),"wheelDeltaY"in e&&(r=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(i=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(i=r,r=0),a=i*t,o=r*t,"deltaY"in e&&(o=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=o,o=0),(a||o)&&e.deltaMode&&(1===e.deltaMode?(a*=n,o*=n):(a*=s,o*=s)),a&&!i&&(i=a<1?-1:1),o&&!r&&(r=o<1?-1:1),{spinX:i,spinY:r,pixelX:a,pixelY:o}}function f(){t.enabled&&(t.mouseEntered=!0)}function m(){t.enabled&&(t.mouseEntered=!1)}function g(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta||t.params.mousewheel.thresholdTime&&l()-h<t.params.mousewheel.thresholdTime||!(e.delta>=6&&l()-h<60)&&(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),h=(new a.Date).getTime(),1))}function v(e){const n=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&n.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&n.releaseOnEdges)return!0;return!1}function y(e){let n=e,s=!0;if(!t.enabled)return;if(e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))return;const r=t.params.mousewheel;t.params.cssMode&&n.preventDefault();let a=t.el;"container"!==t.params.mousewheel.eventsTarget&&(a=document.querySelector(t.params.mousewheel.eventsTarget));const h=a&&a.contains(n.target);if(!t.mouseEntered&&!h&&!r.releaseOnEdges)return!0;n.originalEvent&&(n=n.originalEvent);let f=0;const m=t.rtlTranslate?-1:1,y=p(n);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(y.pixelX)>Math.abs(y.pixelY)))return!0;f=-y.pixelX*m}else{if(!(Math.abs(y.pixelY)>Math.abs(y.pixelX)))return!0;f=-y.pixelY}else f=Math.abs(y.pixelX)>Math.abs(y.pixelY)?-y.pixelX*m:-y.pixelY;if(0===f)return!0;r.invert&&(f=-f);let w=t.getTranslate()+f*r.sensitivity;if(w>=t.minTranslate()&&(w=t.minTranslate()),w<=t.maxTranslate()&&(w=t.maxTranslate()),s=!!t.params.loop||!(w===t.minTranslate()||w===t.maxTranslate()),s&&t.params.nested&&n.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:l(),delta:Math.abs(f),direction:Math.sign(f)},s=u&&e.time<u.time+500&&e.delta<=u.delta&&e.direction===u.direction;if(!s){u=void 0;let a=t.getTranslate()+f*r.sensitivity;const l=t.isBeginning,h=t.isEnd;if(a>=t.minTranslate()&&(a=t.minTranslate()),a<=t.maxTranslate()&&(a=t.maxTranslate()),t.setTransition(0),t.setTranslate(a),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!l&&t.isBeginning||!h&&t.isEnd)&&t.updateSlidesClasses(),t.params.loop&&t.loopFix({direction:e.direction<0?"next":"prev",byMousewheel:!0}),t.params.freeMode.sticky){clearTimeout(c),c=void 0,d.length>=15&&d.shift();const n=d.length?d[d.length-1]:void 0,s=d[0];if(d.push(e),n&&(e.delta>n.delta||e.direction!==n.direction))d.splice(0);else if(d.length>=15&&e.time-s.time<500&&s.delta-e.delta>=1&&e.delta<=6){const n=f>0?.8:.2;u=e,d.splice(0),c=o((()=>{t.slideToClosest(t.params.speed,!0,void 0,n)}),0)}c||(c=o((()=>{const n=.5;u=e,d.splice(0),t.slideToClosest(t.params.speed,!0,void 0,n)}),500))}if(s||i("scroll",n),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),a===t.minTranslate()||a===t.maxTranslate())return!0}}else{const t={time:l(),delta:Math.abs(f),direction:Math.sign(f),raw:e};d.length>=2&&d.shift();const n=d.length?d[d.length-1]:void 0;if(d.push(t),n?(t.direction!==n.direction||t.delta>n.delta||t.time>n.time+150)&&g(t):g(t),v(t))return!0}return n.preventDefault?n.preventDefault():n.returnValue=!1,!1}function w(e){let n=t.el;"container"!==t.params.mousewheel.eventsTarget&&(n=document.querySelector(t.params.mousewheel.eventsTarget)),n[e]("mouseenter",f),n[e]("mouseleave",m),n[e]("wheel",y)}function b(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",y),!0):!t.mousewheel.enabled&&(w("addEventListener"),t.mousewheel.enabled=!0,!0)}function E(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,y),!0):!!t.mousewheel.enabled&&(w("removeEventListener"),t.mousewheel.enabled=!1,!0)}s("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&E(),t.params.mousewheel.enabled&&b()})),s("destroy",(()=>{t.params.cssMode&&b(),t.mousewheel.enabled&&E()})),Object.assign(t.mousewheel,{enable:b,disable:E})}function We(e,t,n,s){return e.params.createElements&&Object.keys(s).forEach((i=>{if(!n[i]&&!0===n.auto){let r=v(e.el,`.${s[i]}`)[0];r||(r=y("div",s[i]),r.className=s[i],e.el.append(r)),n[i]=r,t[i]=r}})),n}function Ke(e){let{swiper:t,extendParams:n,on:s,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const r=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function a(e){let n;return e&&"string"==typeof e&&t.isElement&&(n=t.el.shadowRoot.querySelector(e),n)?n:(e&&("string"==typeof e&&(n=[...document.querySelectorAll(e)]),t.params.uniqueNavElements&&"string"==typeof e&&n.length>1&&1===t.el.querySelectorAll(e).length&&(n=t.el.querySelector(e))),e&&!n?e:n)}function o(e,n){const s=t.params.navigation;(e=r(e)).forEach((e=>{e&&(e.classList[n?"add":"remove"](...s.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=n),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](s.lockClass))}))}function l(){const{nextEl:e,prevEl:n}=t.navigation;if(t.params.loop)return o(n,!1),void o(e,!1);o(n,t.isBeginning&&!t.params.rewind),o(e,t.isEnd&&!t.params.rewind)}function c(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function u(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function h(){const e=t.params.navigation;if(t.params.navigation=We(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;let n=a(e.nextEl),s=a(e.prevEl);Object.assign(t.navigation,{nextEl:n,prevEl:s}),n=r(n),s=r(s);const i=(n,s)=>{n&&n.addEventListener("click","next"===s?u:c),!t.enabled&&n&&n.classList.add(...e.lockClass.split(" "))};n.forEach((e=>i(e,"next"))),s.forEach((e=>i(e,"prev")))}function d(){let{nextEl:e,prevEl:n}=t.navigation;e=r(e),n=r(n);const s=(e,n)=>{e.removeEventListener("click","next"===n?u:c),e.classList.remove(...t.params.navigation.disabledClass.split(" "))};e.forEach((e=>s(e,"next"))),n.forEach((e=>s(e,"prev")))}s("init",(()=>{!1===t.params.navigation.enabled?f():(h(),l())})),s("toEdge fromEdge lock unlock",(()=>{l()})),s("destroy",(()=>{d()})),s("enable disable",(()=>{let{nextEl:e,prevEl:n}=t.navigation;e=r(e),n=r(n),[...e,...n].filter((e=>!!e)).forEach((e=>e.classList[t.enabled?"remove":"add"](t.params.navigation.lockClass)))})),s("click",((e,n)=>{let{nextEl:s,prevEl:a}=t.navigation;s=r(s),a=r(a);const o=n.target;if(t.params.navigation.hideOnClick&&!a.includes(o)&&!s.includes(o)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===o||t.pagination.el.contains(o)))return;let e;s.length?e=s[0].classList.contains(t.params.navigation.hiddenClass):a.length&&(e=a[0].classList.contains(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),[...s,...a].filter((e=>!!e)).forEach((e=>e.classList.toggle(t.params.navigation.hiddenClass)))}}));const p=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),h(),l()},f=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(t.navigation,{enable:p,disable:f,update:l,init:h,destroy:d})}function Xe(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Ye(e){let{swiper:t,extendParams:n,on:s,emit:i}=e;const r="swiper-pagination";let a;n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,bullets:[]};let o=0;const l=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function c(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&0===t.pagination.el.length}function u(e,n){const{bulletActiveClass:s}=t.params.pagination;e&&(e=e[("prev"===n?"previous":"next")+"ElementSibling"])&&(e.classList.add(`${s}-${n}`),(e=e[("prev"===n?"previous":"next")+"ElementSibling"])&&e.classList.add(`${s}-${n}-${n}`))}function h(e){const n=e.target.closest(Xe(t.params.pagination.bulletClass));if(!n)return;e.preventDefault();const s=S(n)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===s)return;const e=t.getSlideIndexByData(s),n=t.getSlideIndexByData(t.realIndex);e>t.slides.length-t.loopedSlides&&t.loopFix({direction:e>n?"next":"prev",activeSlideIndex:e,slideTo:!1}),t.slideToLoop(s)}else t.slideTo(s)}function d(){const e=t.rtl,n=t.params.pagination;if(c())return;let s,r,h=t.pagination.el;h=l(h);const d=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,p=t.params.loop?Math.ceil(d/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(r=t.previousRealIndex||0,s=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):void 0!==t.snapIndex?(s=t.snapIndex,r=t.previousSnapIndex):(r=t.previousIndex||0,s=t.activeIndex||0),"bullets"===n.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const i=t.pagination.bullets;let l,c,d;if(n.dynamicBullets&&(a=_(i[0],t.isHorizontal()?"width":"height",!0),h.forEach((e=>{e.style[t.isHorizontal()?"width":"height"]=a*(n.dynamicMainBullets+4)+"px"})),n.dynamicMainBullets>1&&void 0!==r&&(o+=s-(r||0),o>n.dynamicMainBullets-1?o=n.dynamicMainBullets-1:o<0&&(o=0)),l=Math.max(s-o,0),c=l+(Math.min(i.length,n.dynamicMainBullets)-1),d=(c+l)/2),i.forEach((e=>{const t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${n.bulletActiveClass}${e}`))].map((e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...t)})),h.length>1)i.forEach((e=>{const t=S(e);t===s&&e.classList.add(...n.bulletActiveClass.split(" ")),n.dynamicBullets&&(t>=l&&t<=c&&e.classList.add(...`${n.bulletActiveClass}-main`.split(" ")),t===l&&u(e,"prev"),t===c&&u(e,"next"))}));else{const e=i[s];if(e&&e.classList.add(...n.bulletActiveClass.split(" ")),n.dynamicBullets){const e=i[l],t=i[c];for(let e=l;e<=c;e+=1)i[e]&&i[e].classList.add(...`${n.bulletActiveClass}-main`.split(" "));u(e,"prev"),u(t,"next")}}if(n.dynamicBullets){const s=Math.min(i.length,n.dynamicMainBullets+4),r=(a*s-a)/2-d*a,o=e?"right":"left";i.forEach((e=>{e.style[t.isHorizontal()?o:"top"]=`${r}px`}))}}h.forEach(((e,r)=>{if("fraction"===n.type&&(e.querySelectorAll(Xe(n.currentClass)).forEach((e=>{e.textContent=n.formatFractionCurrent(s+1)})),e.querySelectorAll(Xe(n.totalClass)).forEach((e=>{e.textContent=n.formatFractionTotal(p)}))),"progressbar"===n.type){let i;i=n.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const r=(s+1)/p;let a=1,o=1;"horizontal"===i?a=r:o=r,e.querySelectorAll(Xe(n.progressbarFillClass)).forEach((e=>{e.style.transform=`translate3d(0,0,0) scaleX(${a}) scaleY(${o})`,e.style.transitionDuration=`${t.params.speed}ms`}))}"custom"===n.type&&n.renderCustom?(e.innerHTML=n.renderCustom(t,s+1,p),0===r&&i("paginationRender",e)):(0===r&&i("paginationRender",e),i("paginationUpdate",e)),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](n.lockClass)}))}function p(){const e=t.params.pagination;if(c())return;const n=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let s=t.pagination.el;s=l(s);let r="";if("bullets"===e.type){let s=t.params.loop?Math.ceil(n/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&s>n&&(s=n);for(let n=0;n<s;n+=1)e.renderBullet?r+=e.renderBullet.call(t,n,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),t.pagination.bullets=[],s.forEach((n=>{"custom"!==e.type&&(n.innerHTML=r||""),"bullets"===e.type&&t.pagination.bullets.push(...n.querySelectorAll(Xe(e.bulletClass)))})),"custom"!==e.type&&i("paginationRender",s[0])}function f(){t.params.pagination=We(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let n;"string"==typeof e.el&&t.isElement&&(n=t.el.shadowRoot.querySelector(e.el)),n||"string"!=typeof e.el||(n=[...document.querySelectorAll(e.el)]),n||(n=e.el),n&&0!==n.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&Array.isArray(n)&&n.length>1&&(n=[...t.el.querySelectorAll(e.el)],n.length>1&&(n=n.filter((e=>I(e,".swiper")[0]===t.el))[0])),Array.isArray(n)&&1===n.length&&(n=n[0]),Object.assign(t.pagination,{el:n}),n=l(n),n.forEach((n=>{"bullets"===e.type&&e.clickable&&n.classList.add(e.clickableClass),n.classList.add(e.modifierClass+e.type),n.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(n.classList.add(`${e.modifierClass}${e.type}-dynamic`),o=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&n.classList.add(e.progressbarOppositeClass),e.clickable&&n.addEventListener("click",h),t.enabled||n.classList.add(e.lockClass)})))}function m(){const e=t.params.pagination;if(c())return;let n=t.pagination.el;n&&(n=l(n),n.forEach((n=>{n.classList.remove(e.hiddenClass),n.classList.remove(e.modifierClass+e.type),n.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&n.removeEventListener("click",h)}))),t.pagination.bullets&&t.pagination.bullets.forEach((t=>t.classList.remove(...e.bulletActiveClass.split(" "))))}s("changeDirection",(()=>{if(!t.pagination||!t.pagination.el)return;const e=t.params.pagination;let{el:n}=t.pagination;n=l(n),n.forEach((n=>{n.classList.remove(e.horizontalClass,e.verticalClass),n.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),s("init",(()=>{!1===t.params.pagination.enabled?v():(f(),p(),d())})),s("activeIndexChange",(()=>{void 0===t.snapIndex&&d()})),s("snapIndexChange",(()=>{d()})),s("snapGridLengthChange",(()=>{p(),d()})),s("destroy",(()=>{m()})),s("enable disable",(()=>{let{el:e}=t.pagination;e&&(e=l(e),e.forEach((e=>e.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass))))})),s("lock unlock",(()=>{d()})),s("click",((e,n)=>{const s=n.target;let{el:r}=t.pagination;if(Array.isArray(r)||(r=[r].filter((e=>!!e))),t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!s.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&s===t.navigation.nextEl||t.navigation.prevEl&&s===t.navigation.prevEl))return;const e=r[0].classList.contains(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.forEach((e=>e.classList.toggle(t.params.pagination.hiddenClass)))}}));const g=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=l(e),e.forEach((e=>e.classList.remove(t.params.pagination.paginationDisabledClass)))),f(),p(),d()},v=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=l(e),e.forEach((e=>e.classList.add(t.params.pagination.paginationDisabledClass)))),m()};Object.assign(t.pagination,{enable:g,disable:v,render:p,update:d,init:f,destroy:m})}function Qe(e){let{swiper:t,extendParams:n,on:i,emit:r}=e;const a=s();let l,c,u,h,d=!1,p=null,f=null;function m(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:n}=t,{dragEl:s,el:i}=e,r=t.params.scrollbar,a=t.params.loop?t.progressLoop:t.progress;let o=c,l=(u-c)*a;n?(l=-l,l>0?(o=c-l,l=0):-l+c>u&&(o=u+l)):l<0?(o=c+l,l=0):l+c>u&&(o=u-l),t.isHorizontal()?(s.style.transform=`translate3d(${l}px, 0, 0)`,s.style.width=`${o}px`):(s.style.transform=`translate3d(0px, ${l}px, 0)`,s.style.height=`${o}px`),r.hide&&(clearTimeout(p),i.style.opacity=1,p=setTimeout((()=>{i.style.opacity=0,i.style.transitionDuration="400ms"}),1e3))}function g(e){t.params.scrollbar.el&&t.scrollbar.el&&(t.scrollbar.dragEl.style.transitionDuration=`${e}ms`)}function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{dragEl:n,el:s}=e;n.style.width="",n.style.height="",u=t.isHorizontal()?s.offsetWidth:s.offsetHeight,h=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),c="auto"===t.params.scrollbar.dragSize?u*h:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?n.style.width=`${c}px`:n.style.height=`${c}px`,s.style.display=h>=1?"none":"",t.params.scrollbar.hide&&(s.style.opacity=0),t.params.watchOverflow&&t.enabled&&e.el.classList[t.isLocked?"add":"remove"](t.params.scrollbar.lockClass)}function b(e){return t.isHorizontal()?e.clientX:e.clientY}function E(e){const{scrollbar:n,rtlTranslate:s}=t,{el:i}=n;let r;r=(b(e)-w(i)[t.isHorizontal()?"left":"top"]-(null!==l?l:c/2))/(u-c),r=Math.max(Math.min(r,1),0),s&&(r=1-r);const a=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(a),t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}function T(e){const n=t.params.scrollbar,{scrollbar:s,wrapperEl:i}=t,{el:a,dragEl:o}=s;d=!0,l=e.target===o?b(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.style.transitionDuration="100ms",o.style.transitionDuration="100ms",E(e),clearTimeout(f),a.style.transitionDuration="0ms",n.hide&&(a.style.opacity=1),t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="none"),r("scrollbarDragStart",e)}function S(e){const{scrollbar:n,wrapperEl:s}=t,{el:i,dragEl:a}=n;d&&(e.preventDefault?e.preventDefault():e.returnValue=!1,E(e),s.style.transitionDuration="0ms",i.style.transitionDuration="0ms",a.style.transitionDuration="0ms",r("scrollbarDragMove",e))}function I(e){const n=t.params.scrollbar,{scrollbar:s,wrapperEl:i}=t,{el:a}=s;d&&(d=!1,t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="",i.style.transitionDuration=""),n.hide&&(clearTimeout(f),f=o((()=>{a.style.opacity=0,a.style.transitionDuration="400ms"}),1e3)),r("scrollbarDragEnd",e),n.snapOnRelease&&t.slideToClosest())}function C(e){const{scrollbar:n,params:s}=t,i=n.el;if(!i)return;const r=i,o=!!s.passiveListeners&&{passive:!1,capture:!1},l=!!s.passiveListeners&&{passive:!0,capture:!1};if(!r)return;const c="on"===e?"addEventListener":"removeEventListener";r[c]("pointerdown",T,o),a[c]("pointermove",S,o),a[c]("pointerup",I,l)}function _(){t.params.scrollbar.el&&t.scrollbar.el&&C("on")}function k(){t.params.scrollbar.el&&t.scrollbar.el&&C("off")}function x(){const{scrollbar:e,el:n}=t;t.params.scrollbar=We(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const s=t.params.scrollbar;if(!s.el)return;let i,r;"string"==typeof s.el&&t.isElement&&(i=t.el.shadowRoot.querySelector(s.el)),i||"string"!=typeof s.el?i||(i=s.el):i=a.querySelectorAll(s.el),t.params.uniqueNavElements&&"string"==typeof s.el&&i.length>1&&1===n.querySelectorAll(s.el).length&&(i=n.querySelector(s.el)),i.length>0&&(i=i[0]),i.classList.add(t.isHorizontal()?s.horizontalClass:s.verticalClass),i&&(r=i.querySelector(`.${t.params.scrollbar.dragClass}`),r||(r=y("div",t.params.scrollbar.dragClass),i.append(r))),Object.assign(e,{el:i,dragEl:r}),s.draggable&&_(),i&&i.classList[t.enabled?"remove":"add"](t.params.scrollbar.lockClass)}function A(){const e=t.params.scrollbar,n=t.scrollbar.el;n&&n.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),k()}n({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null},i("init",(()=>{!1===t.params.scrollbar.enabled?L():(x(),v(),m())})),i("update resize observerUpdate lock unlock",(()=>{v()})),i("setTranslate",(()=>{m()})),i("setTransition",((e,t)=>{g(t)})),i("enable disable",(()=>{const{el:e}=t.scrollbar;e&&e.classList[t.enabled?"remove":"add"](t.params.scrollbar.lockClass)})),i("destroy",(()=>{A()}));const M=()=>{t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.el&&t.scrollbar.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),x(),v(),m()},L=()=>{t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.el&&t.scrollbar.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),A()};Object.assign(t.scrollbar,{enable:M,disable:L,updateSize:v,setTranslate:m,init:x,destroy:A})}function Je(e){let{swiper:t,extendParams:n,on:s}=e;n({parallax:{enabled:!1}});const i=(e,n)=>{const{rtl:s}=t,i=s?-1:1,r=e.getAttribute("data-swiper-parallax")||"0";let a=e.getAttribute("data-swiper-parallax-x"),o=e.getAttribute("data-swiper-parallax-y");const l=e.getAttribute("data-swiper-parallax-scale"),c=e.getAttribute("data-swiper-parallax-opacity"),u=e.getAttribute("data-swiper-parallax-rotate");if(a||o?(a=a||"0",o=o||"0"):t.isHorizontal()?(a=r,o="0"):(o=r,a="0"),a=a.indexOf("%")>=0?parseInt(a,10)*n*i+"%":a*n*i+"px",o=o.indexOf("%")>=0?parseInt(o,10)*n+"%":o*n+"px",null!=c){const t=c-(c-1)*(1-Math.abs(n));e.style.opacity=t}let h=`translate3d(${a}, ${o}, 0px)`;null!=l&&(h+=` scale(${l-(l-1)*(1-Math.abs(n))})`),u&&null!=u&&(h+=` rotate(${u*n*-1}deg)`),e.style.transform=h},r=()=>{const{el:e,slides:n,progress:s,snapGrid:r}=t;v(e,"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((e=>{i(e,s)})),n.forEach(((e,n)=>{let a=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(a+=Math.ceil(n/2)-s*(r.length-1)),a=Math.min(Math.max(a,-1),1),e.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]").forEach((e=>{i(e,a)}))}))},a=function(e){void 0===e&&(e=t.params.speed);const{el:n}=t;n.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((t=>{let n=parseInt(t.getAttribute("data-swiper-parallax-duration"),10)||e;0===e&&(n=0),t.style.transitionDuration=`${n}ms`}))};s("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),s("init",(()=>{t.params.parallax.enabled&&r()})),s("setTranslate",(()=>{t.params.parallax.enabled&&r()})),s("setTransition",((e,n)=>{t.params.parallax.enabled&&a(n)}))}function Ze(e){let{swiper:t,extendParams:n,on:s,emit:i}=e;const a=r();n({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let o,l,c=1,h=!1;const d=[],p={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},f={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},m={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let g=1;function y(){if(d.length<2)return 1;const e=d[0].pageX,t=d[0].pageY,n=d[1].pageX,s=d[1].pageY;return Math.sqrt((n-e)**2+(s-t)**2)}function b(){if(d.length<2)return{x:null,y:null};const e=p.imageEl.getBoundingClientRect();return[(d[0].pageX+(d[1].pageX-d[0].pageX)/2-e.x)/c,(d[0].pageY+(d[1].pageY-d[0].pageY)/2-e.y)/c]}function E(){return t.isElement?"swiper-slide":`.${t.params.slideClass}`}function T(e){const n=E();return!!e.target.matches(n)||t.slides.filter((t=>t.contains(e.target))).length>0}function S(e){const n=`.${t.params.zoom.containerClass}`;return!!e.target.matches(n)||[...t.el.querySelectorAll(n)].filter((t=>t.contains(e.target))).length>0}function C(e){if("mouse"===e.pointerType&&d.splice(0,d.length),!T(e))return;const n=t.params.zoom;if(o=!1,l=!1,d.push(e),!(d.length<2)){if(o=!0,p.scaleStart=y(),!p.slideEl){p.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`),p.slideEl||(p.slideEl=t.slides[t.activeIndex]);let s=p.slideEl.querySelector(`.${n.containerClass}`);if(s&&(s=s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),p.imageEl=s,p.imageWrapEl=s?I(p.imageEl,`.${n.containerClass}`)[0]:void 0,!p.imageWrapEl)return void(p.imageEl=void 0);p.maxRatio=p.imageWrapEl.getAttribute("data-swiper-zoom")||n.maxRatio}if(p.imageEl){const[e,t]=b();p.originX=e,p.originY=t,p.imageEl.style.transitionDuration="0ms"}h=!0}}function _(e){if(!T(e))return;const n=t.params.zoom,s=t.zoom,i=d.findIndex((t=>t.pointerId===e.pointerId));i>=0&&(d[i]=e),d.length<2||(l=!0,p.scaleMove=y(),p.imageEl&&(s.scale=p.scaleMove/p.scaleStart*c,s.scale>p.maxRatio&&(s.scale=p.maxRatio-1+(s.scale-p.maxRatio+1)**.5),s.scale<n.minRatio&&(s.scale=n.minRatio+1-(n.minRatio-s.scale+1)**.5),p.imageEl.style.transform=`translate3d(0,0,0) scale(${s.scale})`))}function k(e){if(!T(e))return;if("mouse"===e.pointerType&&"pointerout"===e.type)return;const n=t.params.zoom,s=t.zoom,i=d.findIndex((t=>t.pointerId===e.pointerId));i>=0&&d.splice(i,1),o&&l&&(o=!1,l=!1,p.imageEl&&(s.scale=Math.max(Math.min(s.scale,p.maxRatio),n.minRatio),p.imageEl.style.transitionDuration=`${t.params.speed}ms`,p.imageEl.style.transform=`translate3d(0,0,0) scale(${s.scale})`,c=s.scale,h=!1,s.scale>1&&p.slideEl?p.slideEl.classList.add(`${n.zoomedSlideClass}`):s.scale<=1&&p.slideEl&&p.slideEl.classList.remove(`${n.zoomedSlideClass}`),1===s.scale&&(p.originX=0,p.originY=0,p.slideEl=void 0)))}function x(e){const n=t.device;if(!p.imageEl)return;if(f.isTouched)return;n.android&&e.cancelable&&e.preventDefault(),f.isTouched=!0;const s=d.length>0?d[0]:e;f.touchesStart.x=s.pageX,f.touchesStart.y=s.pageY}function A(e){if(!T(e)||!S(e))return;const n=t.zoom;if(!p.imageEl)return;if(!f.isTouched||!p.slideEl)return;f.isMoved||(f.width=p.imageEl.offsetWidth,f.height=p.imageEl.offsetHeight,f.startX=u(p.imageWrapEl,"x")||0,f.startY=u(p.imageWrapEl,"y")||0,p.slideWidth=p.slideEl.offsetWidth,p.slideHeight=p.slideEl.offsetHeight,p.imageWrapEl.style.transitionDuration="0ms");const s=f.width*n.scale,i=f.height*n.scale;if(s<p.slideWidth&&i<p.slideHeight)return;if(f.minX=Math.min(p.slideWidth/2-s/2,0),f.maxX=-f.minX,f.minY=Math.min(p.slideHeight/2-i/2,0),f.maxY=-f.minY,f.touchesCurrent.x=d.length>0?d[0].pageX:e.pageX,f.touchesCurrent.y=d.length>0?d[0].pageY:e.pageY,Math.max(Math.abs(f.touchesCurrent.x-f.touchesStart.x),Math.abs(f.touchesCurrent.y-f.touchesStart.y))>5&&(t.allowClick=!1),!f.isMoved&&!h){if(t.isHorizontal()&&(Math.floor(f.minX)===Math.floor(f.startX)&&f.touchesCurrent.x<f.touchesStart.x||Math.floor(f.maxX)===Math.floor(f.startX)&&f.touchesCurrent.x>f.touchesStart.x))return void(f.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(f.minY)===Math.floor(f.startY)&&f.touchesCurrent.y<f.touchesStart.y||Math.floor(f.maxY)===Math.floor(f.startY)&&f.touchesCurrent.y>f.touchesStart.y))return void(f.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),f.isMoved=!0;const r=(n.scale-c)/(p.maxRatio-t.params.zoom.minRatio),{originX:a,originY:o}=p;f.currentX=f.touchesCurrent.x-f.touchesStart.x+f.startX+r*(f.width-2*a),f.currentY=f.touchesCurrent.y-f.touchesStart.y+f.startY+r*(f.height-2*o),f.currentX<f.minX&&(f.currentX=f.minX+1-(f.minX-f.currentX+1)**.8),f.currentX>f.maxX&&(f.currentX=f.maxX-1+(f.currentX-f.maxX+1)**.8),f.currentY<f.minY&&(f.currentY=f.minY+1-(f.minY-f.currentY+1)**.8),f.currentY>f.maxY&&(f.currentY=f.maxY-1+(f.currentY-f.maxY+1)**.8),m.prevPositionX||(m.prevPositionX=f.touchesCurrent.x),m.prevPositionY||(m.prevPositionY=f.touchesCurrent.y),m.prevTime||(m.prevTime=Date.now()),m.x=(f.touchesCurrent.x-m.prevPositionX)/(Date.now()-m.prevTime)/2,m.y=(f.touchesCurrent.y-m.prevPositionY)/(Date.now()-m.prevTime)/2,Math.abs(f.touchesCurrent.x-m.prevPositionX)<2&&(m.x=0),Math.abs(f.touchesCurrent.y-m.prevPositionY)<2&&(m.y=0),m.prevPositionX=f.touchesCurrent.x,m.prevPositionY=f.touchesCurrent.y,m.prevTime=Date.now(),p.imageWrapEl.style.transform=`translate3d(${f.currentX}px, ${f.currentY}px,0)`}function M(){const e=t.zoom;if(!p.imageEl)return;if(!f.isTouched||!f.isMoved)return f.isTouched=!1,void(f.isMoved=!1);f.isTouched=!1,f.isMoved=!1;let n=300,s=300;const i=m.x*n,r=f.currentX+i,a=m.y*s,o=f.currentY+a;0!==m.x&&(n=Math.abs((r-f.currentX)/m.x)),0!==m.y&&(s=Math.abs((o-f.currentY)/m.y));const l=Math.max(n,s);f.currentX=r,f.currentY=o;const c=f.width*e.scale,u=f.height*e.scale;f.minX=Math.min(p.slideWidth/2-c/2,0),f.maxX=-f.minX,f.minY=Math.min(p.slideHeight/2-u/2,0),f.maxY=-f.minY,f.currentX=Math.max(Math.min(f.currentX,f.maxX),f.minX),f.currentY=Math.max(Math.min(f.currentY,f.maxY),f.minY),p.imageWrapEl.style.transitionDuration=`${l}ms`,p.imageWrapEl.style.transform=`translate3d(${f.currentX}px, ${f.currentY}px,0)`}function L(){const e=t.zoom;p.slideEl&&t.activeIndex!==t.slides.indexOf(p.slideEl)&&(p.imageEl&&(p.imageEl.style.transform="translate3d(0,0,0) scale(1)"),p.imageWrapEl&&(p.imageWrapEl.style.transform="translate3d(0,0,0)"),p.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),e.scale=1,c=1,p.slideEl=void 0,p.imageEl=void 0,p.imageWrapEl=void 0,p.originX=0,p.originY=0)}function D(e){const n=t.zoom,s=t.params.zoom;if(!p.slideEl){e&&e.target&&(p.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`)),p.slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?p.slideEl=v(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:p.slideEl=t.slides[t.activeIndex]);let n=p.slideEl.querySelector(`.${s.containerClass}`);n&&(n=n.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),p.imageEl=n,p.imageWrapEl=n?I(p.imageEl,`.${s.containerClass}`)[0]:void 0}if(!p.imageEl||!p.imageWrapEl)return;let i,r,o,l,u,h,d,m,g,y,b,E,T,S,C,_,k,x;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),p.slideEl.classList.add(`${s.zoomedSlideClass}`),void 0===f.touchesStart.x&&e?(i=e.pageX,r=e.pageY):(i=f.touchesStart.x,r=f.touchesStart.y);const A="number"==typeof e?e:null;1===c&&A&&(i=void 0,r=void 0),n.scale=A||p.imageWrapEl.getAttribute("data-swiper-zoom")||s.maxRatio,c=A||p.imageWrapEl.getAttribute("data-swiper-zoom")||s.maxRatio,!e||1===c&&A?(d=0,m=0):(k=p.slideEl.offsetWidth,x=p.slideEl.offsetHeight,o=w(p.slideEl).left+a.scrollX,l=w(p.slideEl).top+a.scrollY,u=o+k/2-i,h=l+x/2-r,g=p.imageEl.offsetWidth,y=p.imageEl.offsetHeight,b=g*n.scale,E=y*n.scale,T=Math.min(k/2-b/2,0),S=Math.min(x/2-E/2,0),C=-T,_=-S,d=u*n.scale,m=h*n.scale,d<T&&(d=T),d>C&&(d=C),m<S&&(m=S),m>_&&(m=_)),A&&1===n.scale&&(p.originX=0,p.originY=0),p.imageWrapEl.style.transitionDuration="300ms",p.imageWrapEl.style.transform=`translate3d(${d}px, ${m}px,0)`,p.imageEl.style.transitionDuration="300ms",p.imageEl.style.transform=`translate3d(0,0,0) scale(${n.scale})`}function N(){const e=t.zoom,n=t.params.zoom;if(!p.slideEl){t.params.virtual&&t.params.virtual.enabled&&t.virtual?p.slideEl=v(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:p.slideEl=t.slides[t.activeIndex];let e=p.slideEl.querySelector(`.${n.containerClass}`);e&&(e=e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),p.imageEl=e,p.imageWrapEl=e?I(p.imageEl,`.${n.containerClass}`)[0]:void 0}p.imageEl&&p.imageWrapEl&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,c=1,p.imageWrapEl.style.transitionDuration="300ms",p.imageWrapEl.style.transform="translate3d(0,0,0)",p.imageEl.style.transitionDuration="300ms",p.imageEl.style.transform="translate3d(0,0,0) scale(1)",p.slideEl.classList.remove(`${n.zoomedSlideClass}`),p.slideEl=void 0,p.originX=0,p.originY=0)}function P(e){const n=t.zoom;n.scale&&1!==n.scale?N():D(e)}function O(){return{passiveListener:!!t.params.passiveListeners&&{passive:!0,capture:!1},activeListenerWithCapture:!t.params.passiveListeners||{passive:!1,capture:!0}}}function R(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const{passiveListener:n,activeListenerWithCapture:s}=O();t.wrapperEl.addEventListener("pointerdown",C,n),t.wrapperEl.addEventListener("pointermove",_,s),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.addEventListener(e,k,n)})),t.wrapperEl.addEventListener("pointermove",A,s)}function F(){const e=t.zoom;if(!e.enabled)return;e.enabled=!1;const{passiveListener:n,activeListenerWithCapture:s}=O();t.wrapperEl.removeEventListener("pointerdown",C,n),t.wrapperEl.removeEventListener("pointermove",_,s),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.removeEventListener(e,k,n)})),t.wrapperEl.removeEventListener("pointermove",A,s)}Object.defineProperty(t.zoom,"scale",{get:()=>g,set(e){if(g!==e){const t=p.imageEl,n=p.slideEl;i("zoomChange",e,t,n)}g=e}}),s("init",(()=>{t.params.zoom.enabled&&R()})),s("destroy",(()=>{F()})),s("touchStart",((e,n)=>{t.zoom.enabled&&x(n)})),s("touchEnd",((e,n)=>{t.zoom.enabled&&M()})),s("doubleTap",((e,n)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&P(n)})),s("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&L()})),s("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&L()})),Object.assign(t.zoom,{enable:R,disable:F,in:D,out:N,toggle:P})}function et(e){let{swiper:t,extendParams:n,on:s}=e;function i(e,t){const n=function(){let e,t,n;return(s,i)=>{for(t=-1,e=s.length;e-t>1;)n=e+t>>1,s[n]<=i?t=n:e=n;return e}}();let s,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=n(this.x,e),s=i-1,(e-this.x[s])*(this.y[i]-this.y[s])/(this.x[i]-this.x[s])+this.y[s]):0},this}function r(e){t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid)}function a(e,n){const s=t.controller.control;let i,a;const o=t.constructor;function l(e){if(e.destroyed)return;const n=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(r(e),a=-t.controller.spline.interpolate(-n)),a&&"container"!==t.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),!Number.isNaN(i)&&Number.isFinite(i)||(i=1),a=(n-t.minTranslate())*i+e.minTranslate()),t.params.controller.inverse&&(a=e.maxTranslate()-a),e.updateProgress(a),e.setTranslate(a,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(s))for(let e=0;e<s.length;e+=1)s[e]!==n&&s[e]instanceof o&&l(s[e]);else s instanceof o&&n!==s&&l(s)}function l(e,n){const s=t.constructor,i=t.controller.control;let r;function a(n){n.destroyed||(n.setTransition(e,t),0!==e&&(n.transitionStart(),n.params.autoHeight&&o((()=>{n.updateAutoHeight()})),C(n.wrapperEl,(()=>{i&&n.transitionEnd()}))))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==n&&i[r]instanceof s&&a(i[r]);else i instanceof s&&n!==i&&a(i)}function c(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}n({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},s("beforeInit",(()=>{if("undefined"!=typeof window&&("string"==typeof t.params.controller.control||t.params.controller.control instanceof HTMLElement)){const e=document.querySelector(t.params.controller.control);if(e&&e.swiper)t.controller.control=e.swiper;else if(e){const n=s=>{t.controller.control=s.detail[0],t.update(),e.removeEventListener("init",n)};e.addEventListener("init",n)}}else t.controller.control=t.params.controller.control})),s("update",(()=>{c()})),s("resize",(()=>{c()})),s("observerUpdate",(()=>{c()})),s("setTranslate",((e,n,s)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTranslate(n,s)})),s("setTransition",((e,n,s)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTransition(n,s)})),Object.assign(t.controller,{setTranslate:a,setTransition:l})}function tt(e){let{swiper:t,extendParams:n,on:s}=e;n({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null;function r(e){const t=i;0!==t.length&&(t.innerHTML="",t.innerHTML=e)}const a=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function o(e){void 0===e&&(e=16);const t=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(e).replace(/x/g,t)}function l(e){(e=a(e)).forEach((e=>{e.setAttribute("tabIndex","0")}))}function c(e){(e=a(e)).forEach((e=>{e.setAttribute("tabIndex","-1")}))}function u(e,t){(e=a(e)).forEach((e=>{e.setAttribute("role",t)}))}function h(e,t){(e=a(e)).forEach((e=>{e.setAttribute("aria-roledescription",t)}))}function d(e,t){(e=a(e)).forEach((e=>{e.setAttribute("aria-controls",t)}))}function p(e,t){(e=a(e)).forEach((e=>{e.setAttribute("aria-label",t)}))}function f(e,t){(e=a(e)).forEach((e=>{e.setAttribute("id",t)}))}function m(e,t){(e=a(e)).forEach((e=>{e.setAttribute("aria-live",t)}))}function g(e){(e=a(e)).forEach((e=>{e.setAttribute("aria-disabled",!0)}))}function v(e){(e=a(e)).forEach((e=>{e.setAttribute("aria-disabled",!1)}))}function w(e){if(13!==e.keyCode&&32!==e.keyCode)return;const n=t.params.a11y,s=e.target;t.pagination&&t.pagination.el&&(s===t.pagination.el||t.pagination.el.contains(e.target))&&!e.target.matches(Xe(t.params.pagination.bulletClass))||(t.navigation&&t.navigation.nextEl&&s===t.navigation.nextEl&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(n.lastSlideMessage):r(n.nextSlideMessage)),t.navigation&&t.navigation.prevEl&&s===t.navigation.prevEl&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(n.firstSlideMessage):r(n.prevSlideMessage)),t.pagination&&s.matches(Xe(t.params.pagination.bulletClass))&&s.click())}function b(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{nextEl:e,prevEl:n}=t.navigation;n&&(t.isBeginning?(g(n),c(n)):(v(n),l(n))),e&&(t.isEnd?(g(e),c(e)):(v(e),l(e)))}function E(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function T(){return E()&&t.params.pagination.clickable}function I(){const e=t.params.a11y;E()&&t.pagination.bullets.forEach((n=>{t.params.pagination.clickable&&(l(n),t.params.pagination.renderBullet||(u(n,"button"),p(n,e.paginationBulletMessage.replace(/\{\{index\}\}/,S(n)+1)))),n.matches(Xe(t.params.pagination.bulletActiveClass))?n.setAttribute("aria-current","true"):n.removeAttribute("aria-current")}))}const C=(e,t,n)=>{l(e),"BUTTON"!==e.tagName&&(u(e,"button"),e.addEventListener("keydown",w)),p(e,n),d(e,t)},_=()=>{t.a11y.clicked=!0},k=()=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t.destroyed||(t.a11y.clicked=!1)}))}))},x=e=>{if(t.a11y.clicked)return;const n=e.target.closest(`.${t.params.slideClass}, swiper-slide`);if(!n||!t.slides.includes(n))return;const s=t.slides.indexOf(n)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(n);s||i||e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(n),0))},A=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&h(t.slides,e.itemRoleDescriptionMessage),e.slideRole&&u(t.slides,e.slideRole);const n=t.slides.length;e.slideLabelMessage&&t.slides.forEach(((s,i)=>{const r=t.params.loop?parseInt(s.getAttribute("data-swiper-slide-index"),10):i;p(s,e.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,n))}))},M=()=>{const e=t.params.a11y;t.isElement?t.el.shadowEl.append(i):t.el.append(i);const n=t.el;e.containerRoleDescriptionMessage&&h(n,e.containerRoleDescriptionMessage),e.containerMessage&&p(n,e.containerMessage);const s=t.wrapperEl,r=e.id||s.getAttribute("id")||`swiper-wrapper-${o(16)}`,l=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";f(s,r),m(s,l),A();let{nextEl:c,prevEl:u}=t.navigation?t.navigation:{};c=a(c),u=a(u),c&&c.forEach((t=>C(t,r,e.nextSlideMessage))),u&&u.forEach((t=>C(t,r,e.prevSlideMessage))),T()&&(Array.isArray(t.pagination.el)?t.pagination.el:[t.pagination.el]).forEach((e=>{e.addEventListener("keydown",w)})),t.el.addEventListener("focus",x,!0),t.el.addEventListener("pointerdown",_,!0),t.el.addEventListener("pointerup",k,!0)};function L(){i&&i.remove();let{nextEl:e,prevEl:n}=t.navigation?t.navigation:{};e=a(e),n=a(n),e&&e.forEach((e=>e.removeEventListener("keydown",w))),n&&n.forEach((e=>e.removeEventListener("keydown",w))),T()&&(Array.isArray(t.pagination.el)?t.pagination.el:[t.pagination.el]).forEach((e=>{e.removeEventListener("keydown",w)})),t.el.removeEventListener("focus",x,!0),t.el.removeEventListener("pointerdown",_,!0),t.el.removeEventListener("pointerup",k,!0)}s("beforeInit",(()=>{i=y("span",t.params.a11y.notificationClass),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true")})),s("afterInit",(()=>{t.params.a11y.enabled&&M()})),s("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&A()})),s("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&b()})),s("paginationUpdate",(()=>{t.params.a11y.enabled&&I()})),s("destroy",(()=>{t.params.a11y.enabled&&L()}))}function nt(e){let{swiper:t,extendParams:n,on:s}=e;n({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,a={};const o=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),l=e=>{const t=r();let n;n=e?new URL(e):t.location;const s=n.pathname.slice(1).split("/").filter((e=>""!==e)),i=s.length;return{key:s[i-2],value:s[i-1]}},c=(e,n)=>{const s=r();if(!i||!t.params.history.enabled)return;let a;a=t.params.url?new URL(t.params.url):s.location;const l=t.slides[n];let c=o(l.getAttribute("data-history"));if(t.params.history.root.length>0){let n=t.params.history.root;"/"===n[n.length-1]&&(n=n.slice(0,n.length-1)),c=`${n}/${e?`${e}/`:""}${c}`}else a.pathname.includes(e)||(c=`${e?`${e}/`:""}${c}`);t.params.history.keepQuery&&(c+=a.search);const u=s.history.state;u&&u.value===c||(t.params.history.replaceState?s.history.replaceState({value:c},null,c):s.history.pushState({value:c},null,c))},u=(e,n,s)=>{if(n)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides[i];if(o(r.getAttribute("data-history"))===n){const n=t.getSlideIndex(r);t.slideTo(n,e,s)}}else t.slideTo(0,e,s)},h=()=>{a=l(t.params.url),u(t.params.speed,a.value,!1)},d=()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,a=l(t.params.url),a.key||a.value?(u(0,a.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",h)):t.params.history.replaceState||e.addEventListener("popstate",h)}},p=()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",h)};s("init",(()=>{t.params.history.enabled&&d()})),s("destroy",(()=>{t.params.history.enabled&&p()})),s("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&c(t.params.history.key,t.activeIndex)})),s("slideChange",(()=>{i&&t.params.cssMode&&c(t.params.history.key,t.activeIndex)}))}function st(e){let{swiper:t,extendParams:n,emit:i,on:a}=e,o=!1;const l=s(),c=r();n({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(e,n){if(t.virtual&&t.params.virtual.enabled){const e=t.slides.filter((e=>e.getAttribute("data-hash")===n))[0];return e?parseInt(e.getAttribute("data-swiper-slide-index"),10):0}return t.getSlideIndex(v(t.slidesEl,`.${t.params.slideClass}[data-hash="${n}"], swiper-slide[data-hash="${n}"]`)[0])}}});const u=()=>{i("hashChange");const e=l.location.hash.replace("#",""),n=t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`);if(e!==(n?n.getAttribute("data-hash"):"")){const n=t.params.hashNavigation.getSlideIndex(t,e);if(void 0===n||Number.isNaN(n))return;t.slideTo(n)}},h=()=>{if(!o||!t.params.hashNavigation.enabled)return;const e=t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`),n=e?e.getAttribute("data-hash")||e.getAttribute("data-history"):"";t.params.hashNavigation.replaceState&&c.history&&c.history.replaceState?(c.history.replaceState(null,null,`#${n}`||""),i("hashSet")):(l.location.hash=n||"",i("hashSet"))},d=()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;o=!0;const e=l.location.hash.replace("#","");if(e){const n=0,s=t.params.hashNavigation.getSlideIndex(t,e);t.slideTo(s||0,n,t.params.runCallbacksOnInit,!0)}t.params.hashNavigation.watchState&&c.addEventListener("hashchange",u)},p=()=>{t.params.hashNavigation.watchState&&c.removeEventListener("hashchange",u)};a("init",(()=>{t.params.hashNavigation.enabled&&d()})),a("destroy",(()=>{t.params.hashNavigation.enabled&&p()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{o&&h()})),a("slideChange",(()=>{o&&t.params.cssMode&&h()}))}function it(e){let t,n,{swiper:i,extendParams:r,on:a,emit:o,params:l}=e;i.autoplay={running:!1,paused:!1,timeLeft:0},r({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let c,u,h,d,p,f,m,g=l&&l.autoplay?l.autoplay.delay:3e3,v=l&&l.autoplay?l.autoplay.delay:3e3,y=(new Date).getTime;function w(e){i&&!i.destroyed&&i.wrapperEl&&e.target===i.wrapperEl&&(i.wrapperEl.removeEventListener("transitionend",w),_())}const b=()=>{if(i.destroyed||!i.autoplay.running)return;i.autoplay.paused?u=!0:u&&(v=c,u=!1);const e=i.autoplay.paused?c:y+v-(new Date).getTime();i.autoplay.timeLeft=e,o("autoplayTimeLeft",e,e/g),n=requestAnimationFrame((()=>{b()}))},E=()=>{let e;if(e=i.virtual&&i.params.virtual.enabled?i.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:i.slides[i.activeIndex],e)return parseInt(e.getAttribute("data-swiper-autoplay"),10)},T=e=>{if(i.destroyed||!i.autoplay.running)return;cancelAnimationFrame(n),b();let s=void 0===e?i.params.autoplay.delay:e;g=i.params.autoplay.delay,v=i.params.autoplay.delay;const r=E();!Number.isNaN(r)&&r>0&&void 0===e&&(s=r,g=r,v=r),c=s;const a=i.params.speed,l=()=>{i&&!i.destroyed&&(i.params.autoplay.reverseDirection?!i.isBeginning||i.params.loop||i.params.rewind?(i.slidePrev(a,!0,!0),o("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(i.slides.length-1,a,!0,!0),o("autoplay")):!i.isEnd||i.params.loop||i.params.rewind?(i.slideNext(a,!0,!0),o("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(0,a,!0,!0),o("autoplay")),i.params.cssMode&&(y=(new Date).getTime(),requestAnimationFrame((()=>{T()}))))};return s>0?(clearTimeout(t),t=setTimeout((()=>{l()}),s)):requestAnimationFrame((()=>{l()})),s},S=()=>{i.autoplay.running=!0,T(),o("autoplayStart")},I=()=>{i.autoplay.running=!1,clearTimeout(t),cancelAnimationFrame(n),o("autoplayStop")},C=(e,n)=>{if(i.destroyed||!i.autoplay.running)return;clearTimeout(t),e||(m=!0);const s=()=>{o("autoplayPause"),i.params.autoplay.waitForTransition?i.wrapperEl.addEventListener("transitionend",w):_()};if(i.autoplay.paused=!0,n)return f&&(c=i.params.autoplay.delay),f=!1,void s();const r=c||i.params.autoplay.delay;c=r-((new Date).getTime()-y),i.isEnd&&c<0&&!i.params.loop||(c<0&&(c=0),s())},_=()=>{i.isEnd&&c<0&&!i.params.loop||i.destroyed||!i.autoplay.running||(y=(new Date).getTime(),m?(m=!1,T(c)):T(),i.autoplay.paused=!1,o("autoplayResume"))},k=()=>{if(i.destroyed||!i.autoplay.running)return;const e=s();"hidden"===e.visibilityState&&(m=!0,C(!0)),"visible"===e.visibilityState&&_()},x=e=>{"mouse"===e.pointerType&&(m=!0,C(!0))},A=e=>{"mouse"===e.pointerType&&i.autoplay.paused&&_()},M=()=>{i.params.autoplay.pauseOnMouseEnter&&(i.el.addEventListener("pointerenter",x),i.el.addEventListener("pointerleave",A))},L=()=>{i.el.removeEventListener("pointerenter",x),i.el.removeEventListener("pointerleave",A)},D=()=>{s().addEventListener("visibilitychange",k)},N=()=>{s().removeEventListener("visibilitychange",k)};a("init",(()=>{i.params.autoplay.enabled&&(M(),D(),y=(new Date).getTime(),S())})),a("destroy",(()=>{L(),N(),i.autoplay.running&&I()})),a("beforeTransitionStart",((e,t,n)=>{!i.destroyed&&i.autoplay.running&&(n||!i.params.autoplay.disableOnInteraction?C(!0,!0):I())})),a("sliderFirstMove",(()=>{!i.destroyed&&i.autoplay.running&&(i.params.autoplay.disableOnInteraction?I():(h=!0,d=!1,m=!1,p=setTimeout((()=>{m=!0,d=!0,C(!0)}),200)))})),a("touchEnd",(()=>{if(!i.destroyed&&i.autoplay.running&&h){if(clearTimeout(p),clearTimeout(t),i.params.autoplay.disableOnInteraction)return d=!1,void(h=!1);d&&i.params.cssMode&&_(),d=!1,h=!1}})),a("slideChange",(()=>{!i.destroyed&&i.autoplay.running&&(f=!0)})),Object.assign(i.autoplay,{start:S,stop:I,pause:C,resume:_})}function rt(e){let{swiper:t,extendParams:n,on:i}=e;n({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let r=!1,a=!1;function o(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const n=e.clickedIndex,s=e.clickedSlide;if(s&&s.classList.contains(t.params.thumbs.slideThumbActiveClass))return;if(null==n)return;let i;i=e.params.loop?parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10):n,t.params.loop?t.slideToLoop(i):t.slideTo(i)}function l(){const{thumbs:e}=t.params;if(r)return!1;r=!0;const n=t.constructor;if(e.swiper instanceof n)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper.update();else if(h(e.swiper)){const s=Object.assign({},e.swiper);Object.assign(s,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new n(s),a=!0}return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",o),!0}function c(e){const n=t.thumbs.swiper;if(!n||n.destroyed)return;const s="auto"===n.params.slidesPerView?n.slidesPerViewDynamic():n.params.slidesPerView;let i=1;const r=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(i=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),n.slides.forEach((e=>e.classList.remove(r))),n.params.loop||n.params.virtual&&n.params.virtual.enabled)for(let e=0;e<i;e+=1)v(n.slidesEl,`[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e=>{e.classList.add(r)}));else for(let e=0;e<i;e+=1)n.slides[t.realIndex+e]&&n.slides[t.realIndex+e].classList.add(r);const a=t.params.thumbs.autoScrollOffset,o=a&&!n.params.loop;if(t.realIndex!==n.realIndex||o){const i=n.activeIndex;let r,l;if(n.params.loop){const e=n.slides.filter((e=>e.getAttribute("data-swiper-slide-index")===`${t.realIndex}`))[0];r=n.slides.indexOf(e),l=t.activeIndex>t.previousIndex?"next":"prev"}else r=t.realIndex,l=r>t.previousIndex?"next":"prev";o&&(r+="next"===l?a:-1*a),n.visibleSlidesIndexes&&n.visibleSlidesIndexes.indexOf(r)<0&&(n.params.centeredSlides?r=r>i?r-Math.floor(s/2)+1:r+Math.floor(s/2)-1:r>i&&n.params.slidesPerGroup,n.slideTo(r,e?0:void 0))}}t.thumbs={swiper:null},i("beforeInit",(()=>{const{thumbs:e}=t.params;if(e&&e.swiper)if("string"==typeof e.swiper||e.swiper instanceof HTMLElement){const n=s(),i=()=>{const s="string"==typeof e.swiper?n.querySelector(e.swiper):e.swiper;if(s&&s.swiper)e.swiper=s.swiper,l(),c(!0);else if(s){const n=i=>{e.swiper=i.detail[0],s.removeEventListener("init",n),l(),c(!0),e.swiper.update(),t.update()};s.addEventListener("init",n)}return s},r=()=>{t.destroyed||i()||requestAnimationFrame(r)};requestAnimationFrame(r)}else l(),c(!0)})),i("slideChange update resize observerUpdate",(()=>{c()})),i("setTransition",((e,n)=>{const s=t.thumbs.swiper;s&&!s.destroyed&&s.setTransition(n)})),i("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&a&&e.destroy()})),Object.assign(t.thumbs,{init:l,update:c})}function at(e){let{swiper:t,extendParams:n,emit:s,once:i}=e;function r(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})}function a(){const{touchEventsData:e,touches:n}=t;0===e.velocities.length&&e.velocities.push({position:n[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:n[t.isHorizontal()?"currentX":"currentY"],time:l()})}function o(e){let{currentPos:n}=e;const{params:r,wrapperEl:a,rtlTranslate:o,snapGrid:c,touchEventsData:u}=t,h=l()-u.touchStartTime;if(n<-t.minTranslate())t.slideTo(t.activeIndex);else if(n>-t.maxTranslate())t.slides.length<c.length?t.slideTo(c.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(u.velocities.length>1){const e=u.velocities.pop(),n=u.velocities.pop(),s=e.position-n.position,i=e.time-n.time;t.velocity=s/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||l()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,u.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const n=t.velocity*e;let h=t.translate+n;o&&(h=-h);let d,p=!1;const f=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let m;if(h<t.maxTranslate())r.freeMode.momentumBounce?(h+t.maxTranslate()<-f&&(h=t.maxTranslate()-f),d=t.maxTranslate(),p=!0,u.allowMomentumBounce=!0):h=t.maxTranslate(),r.loop&&r.centeredSlides&&(m=!0);else if(h>t.minTranslate())r.freeMode.momentumBounce?(h-t.minTranslate()>f&&(h=t.minTranslate()+f),d=t.minTranslate(),p=!0,u.allowMomentumBounce=!0):h=t.minTranslate(),r.loop&&r.centeredSlides&&(m=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<c.length;t+=1)if(c[t]>-h){e=t;break}h=Math.abs(c[e]-h)<Math.abs(c[e-1]-h)||"next"===t.swipeDirection?c[e]:c[e-1],h=-h}if(m&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=o?Math.abs((-h-t.translate)/t.velocity):Math.abs((h-t.translate)/t.velocity),r.freeMode.sticky){const n=Math.abs((o?-h:h)-t.translate),s=t.slidesSizesGrid[t.activeIndex];e=n<s?r.speed:n<2*s?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&p?(t.updateProgress(d),t.setTransition(e),t.setTranslate(h),t.transitionStart(!0,t.swipeDirection),t.animating=!0,C(a,(()=>{t&&!t.destroyed&&u.allowMomentumBounce&&(s("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(d),C(a,(()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(s("_freeModeNoMomentumRelease"),t.updateProgress(h),t.setTransition(e),t.setTranslate(h),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,C(a,(()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(h),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&s("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||h>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}n({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:r,onTouchMove:a,onTouchEnd:o}})}function ot(e){let t,n,s,{swiper:i,extendParams:r}=e;r({grid:{rows:1,fill:"column"}});const a=()=>{let e=i.params.spaceBetween;return"string"==typeof e&&e.indexOf("%")>=0?e=parseFloat(e.replace("%",""))/100*i.size:"string"==typeof e&&(e=parseFloat(e)),e},o=e=>{const{slidesPerView:r}=i.params,{rows:a,fill:o}=i.params.grid;n=t/a,s=Math.floor(e/a),t=Math.floor(e/a)===e/a?e:Math.ceil(e/a)*a,"auto"!==r&&"row"===o&&(t=Math.max(t,r*a))},l=(e,r,o,l)=>{const{slidesPerGroup:c}=i.params,u=a(),{rows:h,fill:d}=i.params.grid;let p,f,m;if("row"===d&&c>1){const n=Math.floor(e/(c*h)),s=e-h*c*n,i=0===n?c:Math.min(Math.ceil((o-n*h*c)/h),c);m=Math.floor(s/i),f=s-m*i+n*c,p=f+m*t/h,r.style.order=p}else"column"===d?(f=Math.floor(e/h),m=e-f*h,(f>s||f===s&&m===h-1)&&(m+=1,m>=h&&(m=0,f+=1))):(m=Math.floor(e/n),f=e-m*n);r.style[l("margin-top")]=0!==m?u&&`${u}px`:""},c=(e,n,s)=>{const{centeredSlides:r,roundLengths:o}=i.params,l=a(),{rows:c}=i.params.grid;if(i.virtualSize=(e+l)*t,i.virtualSize=Math.ceil(i.virtualSize/c)-l,i.wrapperEl.style[s("width")]=`${i.virtualSize+l}px`,r){const e=[];for(let t=0;t<n.length;t+=1){let s=n[t];o&&(s=Math.floor(s)),n[t]<i.virtualSize+n[0]&&e.push(s)}n.splice(0,n.length),n.push(...e)}};i.grid={initSlides:o,updateSlide:l,updateWrapperSize:c}}function lt(e){const t=this,{params:n,slidesEl:s}=t;n.loop&&t.loopDestroy();const i=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,s.append(t.children[0]),t.innerHTML=""}else s.append(e)};if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&i(e[t]);else i(e);t.recalcSlides(),n.loop&&t.loopCreate(),n.observer&&!t.isElement||t.update()}function ct(e){const t=this,{params:n,activeIndex:s,slidesEl:i}=t;n.loop&&t.loopDestroy();let r=s+1;const a=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,i.prepend(t.children[0]),t.innerHTML=""}else i.prepend(e)};if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a(e[t]);r=s+e.length}else a(e);t.recalcSlides(),n.loop&&t.loopCreate(),n.observer&&!t.isElement||t.update(),t.slideTo(r,0,!1)}function ut(e,t){const n=this,{params:s,activeIndex:i,slidesEl:r}=n;let a=i;s.loop&&(a-=n.loopedSlides,n.loopDestroy(),n.recalcSlides());const o=n.slides.length;if(e<=0)return void n.prependSlide(t);if(e>=o)return void n.appendSlide(t);let l=a>e?a+1:a;const c=[];for(let t=o-1;t>=e;t-=1){const e=n.slides[t];e.remove(),c.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&r.append(t[e]);l=a>e?a+t.length:a}else r.append(t);for(let e=0;e<c.length;e+=1)r.append(c[e]);n.recalcSlides(),s.loop&&n.loopCreate(),s.observer&&!n.isElement||n.update(),s.loop?n.slideTo(l+n.loopedSlides,0,!1):n.slideTo(l,0,!1)}function ht(e){const t=this,{params:n,activeIndex:s}=t;let i=s;n.loop&&(i-=t.loopedSlides,t.loopDestroy());let r,a=i;if("object"==typeof e&&"length"in e){for(let n=0;n<e.length;n+=1)r=e[n],t.slides[r]&&t.slides[r].remove(),r<a&&(a-=1);a=Math.max(a,0)}else r=e,t.slides[r]&&t.slides[r].remove(),r<a&&(a-=1),a=Math.max(a,0);t.recalcSlides(),n.loop&&t.loopCreate(),n.observer&&!t.isElement||t.update(),n.loop?t.slideTo(a+t.loopedSlides,0,!1):t.slideTo(a,0,!1)}function dt(){const e=this,t=[];for(let n=0;n<e.slides.length;n+=1)t.push(n);e.removeSlide(t)}function pt(e){let{swiper:t}=e;Object.assign(t,{appendSlide:lt.bind(t),prependSlide:ct.bind(t),addSlide:ut.bind(t),removeSlide:ht.bind(t),removeAllSlides:dt.bind(t)})}function ft(e){const{effect:t,swiper:n,on:s,setTranslate:i,setTransition:r,overwriteParams:a,perspective:o,recreateShadows:l,getEffectParams:c}=e;let u;s("beforeInit",(()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),o&&o()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const e=a?a():{};Object.assign(n.params,e),Object.assign(n.originalParams,e)})),s("setTranslate",(()=>{n.params.effect===t&&i()})),s("setTransition",((e,s)=>{n.params.effect===t&&r(s)})),s("transitionEnd",(()=>{if(n.params.effect===t&&l){if(!c||!c().slideShadows)return;n.slides.forEach((e=>{e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e=>e.remove()))})),l()}})),s("virtualUpdate",(()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame((()=>{u&&n.slides&&n.slides.length&&(i(),u=!1)})))}))}function mt(e,t){const n=g(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function gt(e){let{swiper:t,duration:n,transformElements:s,allSlides:i}=e;const{activeIndex:r}=t,a=e=>e.parentElement?e.parentElement:t.slides.filter((t=>t.shadowEl&&t.shadowEl===e.parentNode))[0];if(t.params.virtualTranslate&&0!==n){let e,n=!1;e=i?s:s.filter((e=>{const n=e.classList.contains("swiper-slide-transform")?a(e):e;return t.getSlideIndex(n)===r})),e.forEach((e=>{C(e,(()=>{if(n)return;if(!t||t.destroyed)return;n=!0,t.animating=!1;const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(e)}))}))}}function vt(e){let{swiper:t,extendParams:n,on:s}=e;n({fadeEffect:{crossFade:!1}});const i=()=>{const{slides:e}=t,n=t.params.fadeEffect;for(let s=0;s<e.length;s+=1){const e=t.slides[s];let i=-e.swiperSlideOffset;t.params.virtualTranslate||(i-=t.translate);let r=0;t.isHorizontal()||(r=i,i=0);const a=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e.progress),0):1+Math.min(Math.max(e.progress,-1),0),o=mt(n,e);o.style.opacity=a,o.style.transform=`translate3d(${i}px, ${r}px, 0px)`}},r=e=>{const n=t.slides.map((e=>g(e)));n.forEach((t=>{t.style.transitionDuration=`${e}ms`})),gt({swiper:t,duration:e,transformElements:n,allSlides:!0})};ft({effect:"fade",swiper:t,on:s,setTranslate:i,setTransition:r,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})}function yt(e){let{swiper:t,extendParams:n,on:s}=e;n({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,n)=>{let s=n?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),i=n?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");s||(s=y("div","swiper-slide-shadow-"+(n?"left":"top")),e.append(s)),i||(i=y("div","swiper-slide-shadow-"+(n?"right":"bottom")),e.append(i)),s&&(s.style.opacity=Math.max(-t,0)),i&&(i.style.opacity=Math.max(t,0))},r=()=>{const e=t.isHorizontal();t.slides.forEach((t=>{const n=Math.max(Math.min(t.progress,1),-1);i(t,n,e)}))},a=()=>{const{el:e,wrapperEl:n,slides:s,width:r,height:a,rtlTranslate:o,size:l,browser:c}=t,u=t.params.cubeEffect,h=t.isHorizontal(),d=t.virtual&&t.params.virtual.enabled;let p,f=0;u.shadow&&(h?(p=t.slidesEl.querySelector(".swiper-cube-shadow"),p||(p=y("div","swiper-cube-shadow"),t.slidesEl.append(p)),p.style.height=`${r}px`):(p=e.querySelector(".swiper-cube-shadow"),p||(p=y("div","swiper-cube-shadow"),e.append(p))));for(let e=0;e<s.length;e+=1){const t=s[e];let n=e;d&&(n=parseInt(t.getAttribute("data-swiper-slide-index"),10));let r=90*n,a=Math.floor(r/360);o&&(r=-r,a=Math.floor(-r/360));const c=Math.max(Math.min(t.progress,1),-1);let p=0,m=0,g=0;n%4==0?(p=4*-a*l,g=0):(n-1)%4==0?(p=0,g=4*-a*l):(n-2)%4==0?(p=l+4*a*l,g=l):(n-3)%4==0&&(p=-l,g=3*l+4*l*a),o&&(p=-p),h||(m=p,p=0);const v=`rotateX(${h?0:-r}deg) rotateY(${h?r:0}deg) translate3d(${p}px, ${m}px, ${g}px)`;c<=1&&c>-1&&(f=90*n+90*c,o&&(f=90*-n-90*c)),t.style.transform=v,u.slideShadows&&i(t,c,h)}if(n.style.transformOrigin=`50% 50% -${l/2}px`,n.style["-webkit-transform-origin"]=`50% 50% -${l/2}px`,u.shadow)if(h)p.style.transform=`translate3d(0px, ${r/2+u.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${u.shadowScale})`;else{const e=Math.abs(f)-90*Math.floor(Math.abs(f)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),n=u.shadowScale,s=u.shadowScale/t,i=u.shadowOffset;p.style.transform=`scale3d(${n}, 1, ${s}) translate3d(0px, ${a/2+i}px, ${-a/2/s}px) rotateX(-90deg)`}const m=(c.isSafari||c.isWebView)&&c.needPerspectiveFix?-l/2:0;n.style.transform=`translate3d(0px,0,${m}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`,n.style.setProperty("--swiper-cube-translate-z",`${m}px`)},o=e=>{const{el:n,slides:s}=t;if(s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),t.params.cubeEffect.shadow&&!t.isHorizontal()){const t=n.querySelector(".swiper-cube-shadow");t&&(t.style.transitionDuration=`${e}ms`)}};ft({effect:"cube",swiper:t,on:s,setTranslate:a,setTransition:o,recreateShadows:r,getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function wt(e,t,n){const s="swiper-slide-shadow"+(n?`-${n}`:""),i=g(t);let r=i.querySelector(`.${s}`);return r||(r=y("div","swiper-slide-shadow"+(n?`-${n}`:"")),i.append(r)),r}function bt(e){let{swiper:t,extendParams:n,on:s}=e;n({flipEffect:{slideShadows:!0,limitRotation:!0}});const i=(e,n,s)=>{let i=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),r=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");i||(i=wt(s,e,t.isHorizontal()?"left":"top")),r||(r=wt(s,e,t.isHorizontal()?"right":"bottom")),i&&(i.style.opacity=Math.max(-n,0)),r&&(r.style.opacity=Math.max(n,0))},r=()=>{const e=t.params.flipEffect;t.slides.forEach((n=>{let s=n.progress;t.params.flipEffect.limitRotation&&(s=Math.max(Math.min(n.progress,1),-1)),i(n,s,e)}))},a=()=>{const{slides:e,rtlTranslate:n}=t,s=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const a=e[r];let o=a.progress;t.params.flipEffect.limitRotation&&(o=Math.max(Math.min(a.progress,1),-1));const l=a.swiperSlideOffset;let c=-180*o,u=0,h=t.params.cssMode?-l-t.translate:-l,d=0;t.isHorizontal()?n&&(c=-c):(d=h,h=0,u=-c,c=0),a.style.zIndex=-Math.abs(Math.round(o))+e.length,s.slideShadows&&i(a,o,s);const p=`translate3d(${h}px, ${d}px, 0px) rotateX(${u}deg) rotateY(${c}deg)`;mt(s,a).style.transform=p}},o=e=>{const n=t.slides.map((e=>g(e)));n.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),gt({swiper:t,duration:e,transformElements:n})};ft({effect:"flip",swiper:t,on:s,setTranslate:a,setTransition:o,recreateShadows:r,getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})}function Et(e){let{swiper:t,extendParams:n,on:s}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}});const i=()=>{const{width:e,height:n,slides:s,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,a=t.isHorizontal(),o=t.translate,l=a?e/2-o:n/2-o,c=a?r.rotate:-r.rotate,u=r.depth;for(let e=0,t=s.length;e<t;e+=1){const t=s[e],n=i[e],o=(l-t.swiperSlideOffset-n/2)/n,h="function"==typeof r.modifier?r.modifier(o):o*r.modifier;let d=a?c*h:0,p=a?0:c*h,f=-u*Math.abs(h),m=r.stretch;"string"==typeof m&&-1!==m.indexOf("%")&&(m=parseFloat(r.stretch)/100*n);let g=a?0:m*h,v=a?m*h:0,y=1-(1-r.scale)*Math.abs(h);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(f)<.001&&(f=0),Math.abs(d)<.001&&(d=0),Math.abs(p)<.001&&(p=0),Math.abs(y)<.001&&(y=0);const w=`translate3d(${v}px,${g}px,${f}px)  rotateX(${p}deg) rotateY(${d}deg) scale(${y})`;if(mt(r,t).style.transform=w,t.style.zIndex=1-Math.abs(Math.round(h)),r.slideShadows){let e=a?t.querySelector(".swiper-slide-shadow-left"):t.querySelector(".swiper-slide-shadow-top"),n=a?t.querySelector(".swiper-slide-shadow-right"):t.querySelector(".swiper-slide-shadow-bottom");e||(e=wt(r,t,a?"left":"top")),n||(n=wt(r,t,a?"right":"bottom")),e&&(e.style.opacity=h>0?h:0),n&&(n.style.opacity=-h>0?-h:0)}}},r=e=>{t.slides.map((e=>g(e))).forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))}))};ft({effect:"coverflow",swiper:t,on:s,setTranslate:i,setTransition:r,perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Tt(e){let{swiper:t,extendParams:n,on:s}=e;n({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`,r=()=>{const{slides:e,wrapperEl:n,slidesSizesGrid:s}=t,r=t.params.creativeEffect,{progressMultiplier:a}=r,o=t.params.centeredSlides;if(o){const e=s[0]/2-t.params.slidesOffsetBefore||0;n.style.transform=`translateX(calc(50% - ${e}px))`}for(let n=0;n<e.length;n+=1){const s=e[n],l=s.progress,c=Math.min(Math.max(s.progress,-r.limitProgress),r.limitProgress);let u=c;o||(u=Math.min(Math.max(s.originalProgress,-r.limitProgress),r.limitProgress));const h=s.swiperSlideOffset,d=[t.params.cssMode?-h-t.translate:-h,0,0],p=[0,0,0];let f=!1;t.isHorizontal()||(d[1]=d[0],d[0]=0);let m={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};c<0?(m=r.next,f=!0):c>0&&(m=r.prev,f=!0),d.forEach(((e,t)=>{d[t]=`calc(${e}px + (${i(m.translate[t])} * ${Math.abs(c*a)}))`})),p.forEach(((e,t)=>{p[t]=m.rotate[t]*Math.abs(c*a)})),s.style.zIndex=-Math.abs(Math.round(l))+e.length;const g=d.join(", "),v=`rotateX(${p[0]}deg) rotateY(${p[1]}deg) rotateZ(${p[2]}deg)`,y=u<0?`scale(${1+(1-m.scale)*u*a})`:`scale(${1-(1-m.scale)*u*a})`,w=u<0?1+(1-m.opacity)*u*a:1-(1-m.opacity)*u*a,b=`translate3d(${g}) ${v} ${y}`;if(f&&m.shadow||!f){let e=s.querySelector(".swiper-slide-shadow");if(!e&&m.shadow&&(e=wt(r,s)),e){const t=r.shadowPerProgress?c*(1/r.limitProgress):c;e.style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const E=mt(r,s);E.style.transform=b,E.style.opacity=w,m.origin&&(E.style.transformOrigin=m.origin)}},a=e=>{const n=t.slides.map((e=>g(e)));n.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),gt({swiper:t,duration:e,transformElements:n,allSlides:!0})};ft({effect:"creative",swiper:t,on:s,setTranslate:r,setTransition:a,perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}function St(e){let{swiper:t,extendParams:n,on:s}=e;n({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}});const i=()=>{const{slides:e,activeIndex:n}=t,s=t.params.cardsEffect,{startTranslate:i,isTouched:r}=t.touchEventsData,a=t.translate;for(let o=0;o<e.length;o+=1){const l=e[o],c=l.progress,u=Math.min(Math.max(c,-4),4);let h=l.swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&(t.wrapperEl.style.transform=`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(h-=e[0].swiperSlideOffset);let d=t.params.cssMode?-h-t.translate:-h,p=0;const f=-100*Math.abs(u);let m=1,g=-s.perSlideRotate*u,v=s.perSlideOffset-.75*Math.abs(u);const y=t.virtual&&t.params.virtual.enabled?t.virtual.from+o:o,w=(y===n||y===n-1)&&u>0&&u<1&&(r||t.params.cssMode)&&a<i,b=(y===n||y===n+1)&&u<0&&u>-1&&(r||t.params.cssMode)&&a>i;if(w||b){const e=(1-Math.abs((Math.abs(u)-.5)/.5))**.5;g+=-28*u*e,m+=-.5*e,v+=96*e,p=-25*e*Math.abs(u)+"%"}if(d=u<0?`calc(${d}px + (${v*Math.abs(u)}%))`:u>0?`calc(${d}px + (-${v*Math.abs(u)}%))`:`${d}px`,!t.isHorizontal()){const e=p;p=d,d=e}const E=u<0?""+(1+(1-m)*u):""+(1-(1-m)*u),T=`\n        translate3d(${d}, ${p}, ${f}px)\n        rotateZ(${s.rotate?g:0}deg)\n        scale(${E})\n      `;if(s.slideShadows){let e=l.querySelector(".swiper-slide-shadow");e||(e=wt(s,l)),e&&(e.style.opacity=Math.min(Math.max((Math.abs(u)-.5)/.5,0),1))}l.style.zIndex=-Math.abs(Math.round(c))+e.length,mt(s,l).style.transform=T}},r=e=>{const n=t.slides.map((e=>g(e)));n.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),gt({swiper:t,duration:e,transformElements:n})};ft({effect:"cards",swiper:t,on:s,setTranslate:i,setTransition:r,perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}Object.keys(ze).forEach((e=>{Object.keys(ze[e]).forEach((t=>{je.prototype[t]=ze[e][t]}))})),je.use([R,F]);const It=[qe,He,Ge,Ke,Ye,Qe,Je,Ze,et,tt,nt,st,it,rt,at,ot,pt,vt,yt,bt,Et,Tt,St];return je.use(It),je}(),window.innerWidth<=768){new(t(Og))(".swiper",{direction:"vertical",loop:!0,slidesPerView:4,spaceBetween:20,navigation:{nextEl:".swiper-button",prevEl:".swiper-button-prev"},cover:!0})}else{const e=document.querySelector(".support__button"),t=document.querySelector(".support"),n=document.querySelector(".swiper"),s=document.querySelector(".support__button--icon");e.addEventListener("click",(function(){e.classList.contains("lock")?(e.classList.remove("lock"),t.classList.add("support--tablet"),n.classList.add("swiper--tablet"),s.classList.add("up"),e.blur()):(e.classList.add("lock"),t.classList.remove("support--tablet"),n.classList.remove("swiper--tablet"),s.classList.remove("up"),e.blur())})),n.addEventListener("mouseenter",(function(){n.classList.add("swiper__scrollbar")})),n.addEventListener("mouseleave",(function(){n.classList.remove("swiper__scrollbar")}))}var Rg,Fg={fetchBookById:async function(e){return await fetch(`https://books-backend.p.goit.global/books//${e}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}};Rg=new URL(i("kyEFX").resolve("1HTp7"),import.meta.url).toString();var Vg;Vg=new URL(i("kyEFX").resolve("aSJpf"),import.meta.url).toString();var Ug;Ug=new URL(i("kyEFX").resolve("fGJyr"),import.meta.url).toString();const $g={div:document.querySelector(".bookShell"),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),bookCard:document.querySelector(".js-book-card"),shoppingListBtn:document.querySelector('[data-action="shopping-list-modal"]'),text:document.querySelector(".js-modal-text")};let zg={};const Bg=localStorage.getItem("info-shopping-list");let jg=JSON.parse(Bg)||[];function qg(){window.removeEventListener("keydown",Hg),document.body.classList.remove("js-show-modal")}function Hg(e){"Escape"===e.code&&qg()}function Gg(e){const{book_image:n,author:s,title:i,description:r,buy_links:a,_id:o,list_name:l}=e;zg.bookId=o,zg.bookAuthor=s,zg.bookTitle=i,zg.bookDescription=r,zg.bookCategory=l,zg.bookImage=n,zg.bookAmazon=a[0].url,zg.bookOpenBook=a[1].url,zg.bookShop=a[4].url;const c=`<img class="book-image"" src="${n}" alt="${i}" loading="lazy" data-id="${o}"/>\n    <div class="book-description-thumb">\n    <p class="book-title">${i}</p>\n    <p class="book-author">${s}</p>\n    <p class="book-description">${r}</p>\n    <div class="book-links">\n    <a class="book-buy-url" href="${a[0].url}" target="_blank" rel="noreferrer noopener">\n    <svg class="book-buy-icon" width="62" height="19">\n    <use href="${t(Ug)}#svg1936"></use>\n    </svg>\n    </a>\n    <a class="book-buy-url" href="${a[1].url}" target="_blank" rel="noreferrer noopener">\n    <img src="${t(Vg)}" width="33px" height="32px"/>\n    </a>\n    <a class="book-buy-url" href="${a[4].url}" target="_blank" rel="noreferrer noopener">\n    <img src="${t(Rg)}" width="38px" height="36px"/>\n    </a>\n    </div>\n    </div>`;$g.bookCard.innerHTML=c}$g.div.addEventListener("click",(function(e){e.preventDefault();const t=e.target.classList.contains("quick-view");if(!e.target.classList.contains("js-gallery-image")&&!t)return;const n=e.target.dataset.id;0!==jg.length&&jg.find((e=>e.bookId===n))?($g.shoppingListBtn.textContent="remove from the shopping list",$g.shoppingListBtn.classList.add("modal__button-shopping-list--remove"),$g.text.classList.remove("visually-hidden")):($g.shoppingListBtn.textContent="add to shopping list",$g.text.classList.add("visually-hidden"),$g.shoppingListBtn.classList.remove("modal__button-shopping-list--remove"));$g.bookCard.innerHTML="",Fg.fetchBookById(n).then(Gg).catch((e=>console.err("Ooops! Something went wrong!"))),window.addEventListener("keydown",Hg),document.body.classList.add("js-show-modal")})),$g.closeModalBtn.addEventListener("click",qg),$g.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&qg()})),$g.shoppingListBtn.addEventListener("click",(function(e){try{const e=jg.findIndex((e=>e.bookId===zg.bookId));-1!==e?(jg.splice(e,1),localStorage.removeItem("info-shopping-list"),localStorage.setItem("info-shopping-list",JSON.stringify(jg))):(jg.push({...zg}),localStorage.setItem("info-shopping-list",JSON.stringify(jg)))}catch{console.err("Ooops! Something went wrong!")}qg()}));
//# sourceMappingURL=index.56772433.js.map
