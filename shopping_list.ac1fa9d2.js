var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},e=s.parcelRequire0688;null==e&&((e=function(s){if(s in t)return t[s].exports;if(s in i){var e=i[s];delete i[s];var n={id:s,exports:{}};return t[s]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+s+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(s,t){i[s]=t},s.parcelRequire0688=e),e("9TCtp"),(0,e("16BLm").isAuthUser)();const n=document.querySelector(".shopping-list-empty-page");if(localStorage.getItem("shoppingList")){const l=localStorage.getItem("shoppingList");let a=JSON.parse(l);const c=a.map((function(s){const{bookImg:t,author:i,listName:e,description:n,title:o,buyLinks:l,id:a}=s,c=document.createElement("div");c.classList.add("shoplist-book-container"),c.dataset.id=a;const r=`<img src="${t}" class="shoplist-book-img">\n        <div class="shoplist-desc-container">\n          <h4 class="shoplist-book-title">${o}</h4>\n          <p class="shoplist-book-genre">${e}</p>\n          <p class="shoplist-book-description">${n}</p>\n           <p class="shoplist-book-author">${i}</p>\n        </div>\n        <div class="shoplist-icons">\n    <ul class="shoplist-icons-list">\n      <li class="shoplist-icons-li">\n        <a href="${l[0].url}" target="blank">\n          <div class="shoplist-icon-amazon"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="${l[2].url}" target="blank">\n          <div class="shoplist-icon-barnesAndNoble"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="${l[4].url}" target="blank">\n          <div class="shoplist-icon-bookshop"></div>\n        </a>\n      </li>\n    </ul>\n  </div>\n        <div class="shoplist-trash"></div>\n`;return c.innerHTML=r,c}));const r=document.createElement("div");r.classList.add("shopping-list-container"),c.forEach((s=>{r.appendChild(s)})),n.replaceWith(r);function o(s){const t=s.target.closest(".shoplist-book-container").dataset.id;a=a.filter((s=>s.id!==t)),localStorage.setItem("shoppingList",JSON.stringify(a)),r.removeChild(s.target.closest(".shoplist-book-container")),0===a.length&&r.replaceWith(n)}document.querySelectorAll(".shoplist-trash").forEach((s=>{s.addEventListener("click",o)})),0===a.length&&(document.querySelector(".shopping-list-container")||document.body.appendChild(r),r.replaceWith(n));const p=document.querySelector(".pagination-container");p&&(0===a.length?p.classList.add("pagination-hidden"):p.classList.remove("pagination-hidden"))}e("7Buz0"),e("31u3U"),e("3oIZ9"),e("2klI5"),e("7tzR7");
//# sourceMappingURL=shopping_list.ac1fa9d2.js.map
