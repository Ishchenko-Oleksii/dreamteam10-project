// const books = JSON.parse(localStorage.getItem('info-shopping-list')) || [];
// import imageAmazon from '../images/amazon.svg';
// import imageBookShop from '../images/bookshop.svg';
// import imageIBooks from '../images/ibooks.svg';
// import deleteButton from '../images/sprite.svg#icon-trash';
// import EmptyPicture from '../images/emptyshopinglist.jpg';

// console.log(books);

// const itemsPerPage = 10; // Количество элементов на странице
// let currentPage = 1; // Текущая страница
// let visibleBooks = []; // Отображаемые книги на текущей странице

// function deleteBook(bookId) {
//   const index = books.findIndex(book => book.bookId === bookId);
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
//         <img class="shoping-list__empty-img" src=${EmptyPicture} alt="Empty page">
//       </div>
//     `;
//   }

//   return books
//     .map(
//       ({
//         bookId,
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
//               iconHref = imageAmazon;
//             } else if (buyLink === bookOpenBook) {
//               iconWidth = '16px';
//               iconHeight = '16px';
//               iconHref = imageIBooks;
//             } else if (buyLink === bookBookShop) {
//               iconWidth = '16px';
//               iconHeight = '16px';
//               iconHref = imageBookShop;
//             }

//             linksHtml.push(`
//               <li>
//                 <a href="${buyLink}">
//                   <svg width="${iconWidth}" height="${iconHeight}" class="shoping-list-icon">
//                     <use href="${iconHref}"></use>
//                   </svg>
//                 </a>
//               </li>
//             `);
//           }
//         });

//         return `
//           <div class="shoping-list__card">
//             <img class="shoping-list__img" src="${bookImage}" alt="Book Cover" />
//             <div class="shoping-list__text-container">
//               <div class="shoping-list__button-container">
//                 <div class="shoping-list__second-text-container">
//                   <h3 class="shoping-list__name">${bookTitle}</h3>
//                   <p class="shoping-list__bind">${bookCategory}</p>
//                 </div>
//                 <button class="button_trash" data-book-id="${bookId}">
//                   <svg width="18" height="18" class="icon_trash">
//                     <use href=${deleteButton}></use>
//                   </svg>
//                 </button>
//               </div>
//               <p class="
// shoping-list__details">${bookDescription}</p>
// <div class="shoping-list__svg-container">
// <p class="shoping-list__author">${bookAuthor}</p>
// <ul class="shoping-list__links">${linksHtml.join('')}</ul>
// </div>
// </div>
// </div>
// `;
//       }
//     )
//     .join('');
// }

// function renderBooks() {
//   // Определение начального и конечного индексов для текущей страницы
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   visibleBooks = books.slice(startIndex, endIndex);

//   const booksContainer = document.getElementsByClassName('booksContainer')[0];
//   while (booksContainer.firstChild) {
//     booksContainer.firstChild.remove();
//   }

//   booksContainer.innerHTML = createMarkup(visibleBooks);

//   // Добавляем обработчики события для кнопок удаления книги
//   const deleteButtons = document.getElementsByClassName('button_trash');
//   Array.from(deleteButtons).forEach(button => {
//     const bookId = button.dataset.bookId;
//     button.addEventListener('click', () => deleteBook(bookId));
//   });

//   // Создаем пагинацию
//   $('#pagination-container').pagination({
//     dataSource: books,
//     pageSize: itemsPerPage,
//     showGoInput: true,
//     showGoButton: true,
//     callback: function (data, pagination) {
//       currentPage = pagination.pageNumber;
//       renderBooks();
//     },
//   });
// }

// renderBooks();

const books = JSON.parse(localStorage.getItem('info-shopping-list')) || [];
import imageAmazon from '../images/amazon.svg';
import imageBookShop from '../images/bookshop.svg';
import imageIBooks from '../images/ibooks.svg';
import deleteButton from '../images/sprite.svg#icon-trash';
import EmptyPicture from '../images/emptyshopinglist.jpg';

console.log(books);

function deleteBook(bookId) {
  const index = books.findIndex(book => book.bookId === bookId);
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
        <p class="shoping-list__empty-text">This page is empty, add some books and proceed to order.</p>
        <img class="shoping-list__empty-img" src=${EmptyPicture} alt="Empty page">
      </div>
    `;
  }

  return books
    .map(
      ({
        bookId,
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
              iconHref = imageAmazon;
            } else if (buyLink === bookOpenBook) {
              iconWidth = '16px';
              iconHeight = '16px';
              iconHref = imageIBooks;
            } else if (buyLink === bookBookShop) {
              iconWidth = '16px';
              iconHeight = '16px';
              iconHref = imageBookShop;
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
                <button class="button_trash" data-book-id="${bookId}">
                  <svg width="18" height="18" class="icon_trash">
                    <use href=${deleteButton}></use>
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
