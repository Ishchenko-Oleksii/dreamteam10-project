!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("fveBt",(function(t,o){var n=a("bpxeT"),l=a("2TvXO"),r=a("dIxxU"),i=a("6N62V"),c=(document.querySelector(".scrollbar"),document.querySelector(".aside-list"));function s(){return(s=e(n)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://books-backend.p.goit.global/books/category-list",e.next=3,r.default.get("https://books-backend.p.goit.global/books/category-list").then((function(e){console.log(e.data);var t=1;c.insertAdjacentHTML("afterbegin",'<li class="category-aside-list"><button type="button" id="'.concat(t,'" class="aside-list-button selected-category">All categories</button></li>'));for(var o=0;o<e.data.length;o++)t+=1,c.insertAdjacentHTML("beforeend",'<li class="category-aside-list"><button type="button" id="btnAsideListId'.concat(t,'" class="aside-list-button">').concat(e.data[o].list_name,"</button></li>"));f()}));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}c.addEventListener("wheel",(function(e){e.preventDefault();var t=e.deltaY||e.detail||e.wheelDelta;c.scrollTop+=t})),function(){s.apply(this,arguments)}();var d="All categories",u="";function f(){var e=document.querySelectorAll(".aside-list-button");e.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("selected-category")})),d=this.textContent,this.classList.add("selected-category"),u=encodeURIComponent(d),"All categories"!=d&&(document.querySelector(".export-all").innerHTML=""),document.querySelector(".export-all").innerHTML="",r.default.get("https://books-backend.p.goit.global/books/category?category=".concat(u)).then((function(e){"All categories"===d?(0,i.setHome)():"All categories"!=d&&e.data.forEach((function(e){var t=e.book_image,o=e.title,n=e.author,a=document.createElement("div");a.classList.add("book-item");var l=document.createElement("img");l.src=t,l.classList.add("insertedByCategoryBooks");var r=document.createElement("p");r.classList.add("book-title"),o.length>15?r.textContent=o.substring(0,15)+"...":r.textContent=o;var i=document.createElement("p");i.classList.add("book-author"),n.length>15?i.textContent=n.substring(0,15)+"...":i.textContent=n,a.appendChild(l),a.appendChild(r),a.appendChild(i),document.querySelector(".export-all").appendChild(a)}))}))}))}))}})),a("fveBt")}();
//# sourceMappingURL=index.93354e4a.js.map
