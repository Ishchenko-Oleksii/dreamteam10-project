function o(o){return o&&o.__esModule?o.default:o}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequired7c6;null==s&&((s=function(o){if(o in t)return t[o].exports;if(o in n){var e=n[o];delete n[o];var s={id:o,exports:{}};return t[o]=s,e.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(o,e){n[o]=e},e.parcelRequired7c6=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.a0871b64.js","1HTp7":"bookshop.a185b304.svg","aSJpf":"ibooks.9bcaf007.svg","fGJyr":"amazon.0dffd886.svg","d19UA":"shoping-list.6d5464e7.js"}')),s("iQbGk"),s("bUb57"),s("2bd6b"),s("awoeA"),s("cwkLb"),s("7tzR7");var r,i={fetchBookById:async function(o){return await fetch(`https://books-backend.p.goit.global/books//${o}`).then((o=>{if(!o.ok)throw new Error(o.statusText);return o.json()}))}};r=new URL(s("kyEFX").resolve("1HTp7"),import.meta.url).toString();var a;a=new URL(s("kyEFX").resolve("aSJpf"),import.meta.url).toString();var l;l=new URL(s("kyEFX").resolve("fGJyr"),import.meta.url).toString();const d={div:document.querySelector(".bookShell"),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),bookCard:document.querySelector(".js-book-card"),shoppingListBtn:document.querySelector('[data-action="shopping-list-modal"]'),text:document.querySelector(".js-modal-text")};let c={},p=[];function u(){window.removeEventListener("keydown",b),document.body.classList.remove("js-show-modal")}function b(o){"Escape"===o.code&&u()}function g(e){const{book_image:t,author:n,title:s,description:i,buy_links:p,_id:u,list_name:b}=e;c.bookId=u,c.bookAuthor=n,c.bookTitle=s,c.bookDescription=i,c.bookCategory=b,c.bookImage=t,c.bookAmazon=p[0].url,c.bookOpenBook=p[1].url,c.bookShop=p[4].url;const g=`<img class="book-image"" src="${t}" alt="${s}" loading="lazy" data-id="${u}"/>\n    <div class="book-description-thumb">\n    <p class="book-title">${s}</p>\n    <p class="book-author">${n}</p>\n    <p class="book-description">${i}</p>\n    <div class="book-links">\n    <a class="book-buy-url" href="${p[0].url}" target="_blank" rel="noreferrer noopener">\n    <svg class="book-buy-icon" width="62" height="19">\n    <use href="${o(l)}#svg1936"></use>\n    </svg>\n    </a>\n    <a class="book-buy-url" href="${p[1].url}" target="_blank" rel="noreferrer noopener">\n    <img src="${o(a)}" width="33px" height="32px"/>\n    </a>\n    <a class="book-buy-url" href="${p[4].url}" target="_blank" rel="noreferrer noopener">\n    <img src="${o(r)}" width="38px" height="36px"/>\n    </a>\n    </div>\n    </div>`;d.bookCard.innerHTML=g}localStorage.getItem("info-shopping-list")&&(p=JSON.parse(localStorage.getItem("info-shopping-list"))),d.div.addEventListener("click",(function(o){o.preventDefault();const e=o.target.classList.contains("quick-view");if(!o.target.classList.contains("js-gallery-image")&&!e)return;const t=o.target.dataset.id;0!==p.length&&p.find((o=>o.bookId===t))?(d.shoppingListBtn.textContent="remove from the shopping list",d.shoppingListBtn.classList.add("modal__button-shopping-list--remove"),d.text.classList.remove("visually-hidden")):(d.shoppingListBtn.textContent="add to shopping list",d.text.classList.add("visually-hidden"),d.shoppingListBtn.classList.remove("modal__button-shopping-list--remove"));d.bookCard.innerHTML="",i.fetchBookById(t).then(g).catch((o=>console.err("Ooops! Something went wrong!"))),window.addEventListener("keydown",b),document.body.classList.add("js-show-modal")})),d.closeModalBtn.addEventListener("click",u),d.backdrop.addEventListener("click",(function(o){o.currentTarget===o.target&&u()})),d.shoppingListBtn.addEventListener("click",(function(o){try{const o=p.findIndex((o=>o.bookId===c.bookId));-1!==o?(p.splice(o,1),localStorage.removeItem("info-shopping-list"),localStorage.setItem("info-shopping-list",JSON.stringify(p))):(p.push({...c}),localStorage.setItem("info-shopping-list",JSON.stringify(p)))}catch{console.err("Ooops! Something went wrong!")}u()}));
//# sourceMappingURL=index.a0871b64.js.map
