function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},s={},i=t.parcelRequired7c6;null==i&&((i=function(n){if(n in o)return o[n].exports;if(n in s){var e=s[n];delete s[n];var t={id:n,exports:{}};return o[n]=t,e.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){s[n]=e},t.parcelRequired7c6=i),i.register("kyEFX",(function(e,t){var o,s;n(e.exports,"register",(function(){return o}),(function(n){return o=n})),n(e.exports,"resolve",(function(){return s}),(function(n){return s=n}));var i={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)i[e[t]]=n[e[t]]},s=function(n){var e=i[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),i("kyEFX").register(JSON.parse('{"hdJAh":"shoping-list.441871b8.js","6WtvC":"dump.ba0e700d.svg","1HTp7":"bookshop.a185b304.svg","aSJpf":"ibooks.9bcaf007.svg","aaCEf":"amazone4.d6ad12c0.svg","fKheV":"emptyshopinglist.e461ecbc.svg","d19UA":"shoping-list.63075209.js"}')),i("bUb57");var r;r=new URL(i("kyEFX").resolve("6WtvC"),import.meta.url).toString();var a;a=new URL(i("kyEFX").resolve("1HTp7"),import.meta.url).toString();var l;l=new URL(i("kyEFX").resolve("aSJpf"),import.meta.url).toString();var d;d=new URL(i("kyEFX").resolve("aaCEf"),import.meta.url).toString();var c;c=new URL(i("kyEFX").resolve("fKheV"),import.meta.url).toString(),document.addEventListener("DOMContentLoaded",(()=>{document.querySelector(".aside-list").classList.add("shoping-list__aside-list")})),document.addEventListener("DOMContentLoaded",(()=>{document.querySelector(".sidebar").classList.add("shoping-list__sidebar")}));const p=JSON.parse(localStorage.getItem("info-shopping-list"))||[];function g(){const n=document.getElementsByClassName("booksContainer")[0];for(;n.firstChild;)n.firstChild.remove();var t;n.innerHTML=0===(t=p).length?`\n      <div class="shoping-list__empty-page">\n        <p class="shoping-list__empty-text">This page is empty, add some books and proceed to order.</p>\n        <img class="shoping-list__empty-img" src=${e(c)} alt="Empty page">\n      </div>\n    `:t.map((({bookId:n,bookTitle:t,bookImage:o,bookAuthor:s,bookDescription:i,bookCategory:c,bookAmazon:p,bookShop:g,bookOpenBook:u})=>{const _=[];return[p,g,u].forEach((n=>{if(n){let t,o;n===p?(t=e(d),o="shoping-list__amazon-icon"):n===u?(t=e(l),o="shoping-list__open-book-icon"):n===g&&(t=e(a),o="shoping-list__shop-icon"),_.push(`\n      <li>\n        <a class="shoping-list__svg-link" target="_blank" href="${n}">\n          <img src="${t}" class="${o}"/>\n        </a>\n      </li>\n    `)}})),`\n          <div class="shoping-list__card">\n            <img class="shoping-list__img" src="${o}" alt="Book Cover" />\n            <div class="shoping-list__text-container">\n              <div class="shoping-list__button-container">\n                <div class="shoping-list__second-text-container">\n                  <h3 class="shoping-list__name">${t}</h3>\n                  <p class="shoping-list__bind">${c}</p>\n                </div>\n                <button class="button_trash" data-book-id="${n}">\n                    <img class="button_trash-svg" src="${e(r)}"/>\n                </button>\n              </div>\n              <p class="shoping-list__details">${i}</p>\n              <div class="shoping-list__svg-container">\n                <p class="shoping-list__author">${s}</p>\n                <ul class="shoping-list__links">${_.join("")}</ul>\n              </div>\n            </div>\n          </div>\n        `})).join("");const o=document.getElementsByClassName("button_trash");Array.from(o).forEach((n=>{const e=n.dataset.bookId;n.addEventListener("click",(()=>function(n){const e=p.findIndex((e=>e.bookId===n));-1!==e&&(p.splice(e,1),localStorage.setItem("info-shopping-list",JSON.stringify(p)),g())}(e)))}))}g(),i("cwkLb"),i("7tzR7");
//# sourceMappingURL=shoping-list.441871b8.js.map
