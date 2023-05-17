const books = JSON.parse(localStorage.getItem('info-shopping-list')) || [];

console.log(books);

function deleteBook(bookId) {
  const index = books.findIndex(book => book.id === bookId);
  if (index !== -1) {
    books.splice(index, 1);
    localStorage.setItem('info-shopping-list', JSON.stringify(books));
    renderBooks();
  }
}

function createMarkup(books) {
  if (books.length === 0) {
    return `
      <div class="shoping-list__empty-page">
        <p class="shoping-list__empty-text">Эта страница пуста, добавьте книги и перейдите к оформлению заказа.</p>
        <img class="shoping-list__empty-img" src="./src/images/emptyshopinglist.jpg" alt="Пустая полка">
      </div>
    `;
  }

  return books
    .map(
      ({
        id,
        bookTitle,
        bookImage,
        bookAuthor,
        bookDescription,
        bookCategory,
        bookAmazon,
        bookBookShop,
        bookOpenBook,
      }) => {
        const linksHtml = [];

        [bookAmazon, bookBookShop, bookOpenBook].forEach(buyLink => {
          if (buyLink) {
            let iconWidth, iconHeight, iconHref;

            if (buyLink === bookAmazon) {
              iconWidth = '32px';
              iconHeight = '11px';
              iconHref = './images/amazon.svg';
            } else if (buyLink === bookOpenBook) {
              iconWidth = '16px';
              iconHeight = '16px';
              iconHref = './images/openbook.svg';
            } else if (buyLink === bookBookShop) {
              iconWidth = '16px';
              iconHeight = '16px';
              iconHref = './images/booksshop.svg';
            }

            linksHtml.push(`
              <li>
                <a href="${buyLink}">
                  <svg width="${iconWidth}" height="${iconHeight}" class="shoping-list-icon">
                    <use href="${iconHref}"></use>
                  </svg>
                </a>
              </li>
            `);
          }
        });

        return `
          <div class="shoping-list__card">
            <img class="shoping-list__img" src="${bookImage}" alt="Book Cover" />
            <div class="shoping-list__text-container">
              <div class="shoping-list__button-container">
                <div class="shoping-list__second-text-container">
                  <h3 class="shoping-list__name">${bookTitle}</h3>
                  <p class="shoping-list__bind">${bookCategory}</p>
                </div>
                <button class="button_trash" data-book-id="${id}">
                  <svg width="18" height="18" class="icon_trash">
                    <use href="./images/sprite.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <p class="shoping-list__details">${bookDescription}</p>
              <div class="shoping-list__svg-container">
                <p class="shoping-list__author">${bookAuthor}</p>
                <ul class="shoping-list__links">${linksHtml.join('')}</ul>
              </div>
            </div>
          </div>
        `;
      }
    )
    .join('');
}

function renderBooks() {
  const booksContainer = document.getElementsByClassName('booksContainer')[0];
  while (booksContainer.firstChild) {
    booksContainer.firstChild.remove();
  }

  booksContainer.innerHTML = createMarkup(books);

  // Добавляем обработчики события для кнопок удаления книги
  const deleteButtons = document.getElementsByClassName('button_trash');
  Array.from(deleteButtons).forEach(button => {
    const bookId = button.dataset.bookId;
    button.addEventListener('click', () => deleteBook(bookId));
  });
}

renderBooks();

// const books = JSON.parse(localStorage.getItem('info-shopping-list')) || [];

// // console.log(books);

// function deleteBook(bookTitle) {
//   const index = books.findIndex(book => book.bookTitle === bookTitle);
//   if (index !== -1) {
//     books.splice(index, 1);
//     localStorage.setItem('info-shopping-list', JSON.stringify(books));
//     renderBooks();
//   }
// }

// function createMarkup(books) {
//   if (books.length === 0) {
//     return `
//       <div class="shoping-list__empty-page">
//         <p class="shoping-list__empty-text">This page is empty, add some books and proceed to order.</p>
//         <img class="shoping-list__empty-img" src="./src/images/emptyshopinglist.jpg" alt="Empty shelf">
//       </div>
//     `;
//   }

//   return books
//     .map(
//       ({
//         bookTitle,
//         bookImage,
//         bookAuthor,
//         bookDescription,
//         bookCategory,
//         bookAmazon,
//         bookBookShop,
//         bookOpenBook,
//       }) => {
//         const linksHtml = [];

//         [bookAmazon, bookBookShop, bookOpenBook].forEach(buyLink => {
//           if (buyLink) {
//             let iconWidth, iconHeight, iconHref;

//             if (buyLink === bookAmazon) {
//               iconWidth = '32px';
//               iconHeight = '11px';
//               iconHref = './images/amazon.svg';
//             } else if (buyLink === bookOpenBook) {
//               iconWidth = '16px';
//               iconHeight = '16px';
//               iconHref = './images/openbook.svg';
//             } else if (buyLink === bookBookShop) {
//               iconWidth = '16px';
//               iconHeight = '16px';
//               iconHref = './images/booksshop.svg';
//             }

//             linksHtml.push(`
//           <li>
//             <a href="${buyLink}">
//               <svg width="${iconWidth}" height="${iconHeight}" class="shoping-list-icon">
//                 <use href="${iconHref}"></use>
//               </svg>
//             </a>
//           </li>
//         `);
//           }
//         });

//         return `
//       <div class="shoping-list__card">
//         <img class="shoping-list__img" src="${bookImage}" alt="Book Cover" />
//         <div class="shoping-list__text-container">
//           <div class="shoping-list__button-container">
//             <div class="shoping-list__second-text-container">
//               <h3 class="shoping-list__name">${bookTitle}</h3>
//               <p class="shoping-list__bind">${bookCategory}</p>
//             </div>
//                 <button class="button_trash" onclick="deleteBook('${bookTitle}')">
//                   <svg width="18" height="18" class="icon_trash">
//                     <use href="./images/sprite.svg#icon-trash"></use>
//                   </svg>
//                 </button>
//             </div>
//           <p class="shoping-list__details">${bookDescription}</p>
//           <div class="shoping-list__svg-container">
//             <p class="shoping-list__author">${bookAuthor}</p>
//             <ul class="shoping-list__links">${linksHtml.join('')}</ul>
//           </div>
//         </div>
//       </div>
//     `;
//       }
//     )
//     .join('');
// }

// function renderBooks() {
//   const booksContainer = document.getElementsByClassName('booksContainer')[0];
//   while (booksContainer.firstChild) {
//     booksContainer.firstChild.remove();
//   }

//   booksContainer.innerHTML = createMarkup(books);

//   const deleteButtons = document.getElementsByClassName('button_trash');
//   Array.from(deleteButtons).forEach(button => {
//     button.addEventListener('click', () => {
//       const bookTitle = button.parentNode.querySelector(
//         '.shoping-list__name'
//       ).textContent;
//       deleteBook(bookTitle);
//     });
//   });
// }

// renderBooks();

// const books = JSON.parse(localStorage.getItem('info-shopping-list')) || [];

// console.log(books);

// function createMarkup(books) {
//   if (books.length === 0) {
//     return `
//       <div class="shoping-list__empty-page">
//         <p class="shoping-list__empty-text">This page is empty, add some books and proceed to order.</p>
//         <img class="shoping-list__empty-img" src="./src/images/emptyshopinglist.jpg" alt="Empty shelf">
//       </div>
//     `;
//   }

//   return books
//     .map(
//       ({
//         bookTitle,
//         bookImage,
//         bookAuthor,
//         bookDescription,
//         bookCategory,
//         bookAmazon,
//         bookBookShop,
//         bookOpenBook,
//       }) => {
//         const linksHtml = [];

//         [bookAmazon, bookBookShop, bookOpenBook].forEach(buyLink => {
//           if (buyLink) {
//             let iconWidth, iconHeight, iconHref;

//             if (buyLink === bookAmazon) {
//               iconWidth = '32px';
//               iconHeight = '11px';
//               iconHref = './images/amazon.svg';
//             } else if (buyLink === bookOpenBook) {
//               iconWidth = '16px';
//               iconHeight = '16px';
//               iconHref = './images/openbook.svg';
//             } else if (buyLink === bookBookShop) {
//               iconWidth = '16px';
//               iconHeight = '16px';
//               iconHref = './images/booksshop.svg';
//             }

//             linksHtml.push(`
//           <li>
//             <a href="${buyLink}">
//               <svg width="${iconWidth}" height="${iconHeight}" class="shoping-list-icon">
//                 <use href="${iconHref}"></use>
//               </svg>
//             </a>
//           </li>
//         `);
//           }
//         });

//         return `
//       <div class="shoping-list__card">
//         <img class="shoping-list__img" src="${bookImage}" alt="Book Cover" />
//         <div class="shoping-list__text-container">
//           <div class="shoping-list__button-container">
//             <div class="shoping-list__second-text-container">
//               <h3 class="shoping-list__name">${bookTitle}</h3>
//               <p class="shoping-list__bind">${bookCategory}</p>
//             </div>
//                 <button class="button_trash" onclick="deleteBook('${book.id}')">
//                     <use href="./images/sprite.svg#icon-trash"></use>
//                 </svg>
//                 </button>
//             </div>
//           <p class="shoping-list__details">${bookDescription}</p>
//           <div class="shoping-list__svg-container">
//             <p class="shoping-list__author">${bookAuthor}</p>
//             <ul class="shoping-list__links">${linksHtml.join('')}</ul>
//           </div>
//         </div>
//       </div>
//     `;
//       }
//     )
//     .join('');
// }

// const booksContainer = document.getElementsByClassName('booksContainer')[0];
// while (booksContainer.firstChild) {
//   booksContainer.firstChild.remove();
// }

// booksContainer.innerHTML = createMarkup(books);

// // Найти кнопку по ее классу или другим селекторам
// const removeButton = document.querySelector('.button_trash');

// // Добавить обработчик события click
// removeButton.addEventListener('click', onShoppingListBtnClick);

// function initializePage() {
//   const books = JSON.parse(localStorage.getItem('info-shopping-list')) || [];

//   console.log(books);

//   function createMarkup(books) {
//     // Ваш код функции createMarkup...

//     if (books.length === 0) {
//       return `
//       <div class="shoping-list__empty-page">
//         <p class="shoping-list__empty-text">This page is empty, add some books and proceed to order.</p>
//         <img class="shoping-list__empty-img" src="./src/images/emptyshopinglist.jpg" alt="Empty shelf">
//       </div>
//     `;
//     }

//     return books
//       .map(
//         ({
//           bookTitle,
//           bookImage,
//           bookAuthor,
//           bookDescription,
//           bookCategory,
//           bookAmazon,
//           bookBookShop,
//           bookOpenBook,
//         }) => {
//           // Ваш код для создания разметки...

//           return `
//         <div class="shoping-list__card">
//         <img class="shoping-list__img" src="${bookImage}" alt="Book Cover" />
//         <div class="shoping-list__text-container">
//           <div class="shoping-list__button-container">
//             <div class="shoping-list__second-text-container">
//               <h3 class="shoping-list__name">${bookTitle}</h3>
//               <p class="shoping-list__bind">${bookCategory}</p>
//             </div>
//                 <button class="button_trash"><svg width="18" height="18" class="icon_trash">
//                     <use href="./images/icons.svg#icon-trash"></use>
//                 </svg>
//                 </button>
//             </div>
//           <p class="shoping-list__details">${bookDescription}</p>
//           <div class="shoping-list__svg-container">
//             <p class="shoping-list__author">${bookAuthor}</p>
//             <ul class="shoping-list__links">${linksHtml.join('')}</ul>
//           </div>
//         </div>
//       </div>
//       `;
//         }
//       )
//       .join('');
//   }

//   const booksContainer = document.getElementsByClassName('booksContainer')[0];
//   while (booksContainer.firstChild) {
//     booksContainer.firstChild.remove();
//   }

//   booksContainer.innerHTML = createMarkup(books);
// }

// // Вызывайте функцию initializePage только при загрузке страницы
// window.addEventListener('load', initializePage);
