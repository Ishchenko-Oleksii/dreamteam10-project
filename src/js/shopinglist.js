document.addEventListener('DOMContentLoaded', () => {
  const asideList = document.querySelector('.aside-list');
  asideList.classList.add('shoping-list__aside-list');
});

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.add('shoping-list__sidebar');
});

import Pagination from 'tui-pagination';
import imageAmazon from '../images/amazone4.svg';
import imageBookShop from '../images/bookshop.svg';
import imageiBooks from '../images/ibooks.svg';
import deleteButton from '../images/dump.svg';
import EmptyPicture from '../images/emptyshopinglist.jpg';

let books = JSON.parse(localStorage.getItem('info-shopping-list')) || [];

function deleteBook(bookId) {
  const index = books.findIndex(book => book.bookId === bookId);
  if (index !== -1) {
    books.splice(index, 1);
    localStorage.setItem('info-shopping-list', JSON.stringify(books));
    renderBooks(1);
  }
}

function createMarkup(books) {
  if (books.length === 0) {
    return `
      <div class="shoping-list__empty-page">
        <p class="shoping-list__empty-text">This page is empty, add some books and proceed to order.</p>
        <img class="shoping-list__empty-img" src="${EmptyPicture}" alt="Пустая страница">
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
        bookShop,
        bookOpenBook,
      }) => {
        const linksHtml = [];

        [bookAmazon, bookShop, bookOpenBook].forEach(buyLink => {
          if (buyLink) {
            let iconHref, iconClass;

            if (buyLink === bookAmazon) {
              iconHref = imageAmazon;
              iconClass = 'shoping-list__amazon-icon';
            } else if (buyLink === bookOpenBook) {
              iconHref = imageiBooks;
              iconClass = 'shoping-list__open-book-icon';
            } else if (buyLink === bookShop) {
              iconHref = imageBookShop;
              iconClass = 'shoping-list__shop-icon';
            }

            linksHtml.push(`
              <li>
                <a class="shoping-list__svg-link" target="_blank" href="${buyLink}">
                  <img src="${iconHref}" class="${iconClass}"/>
                </a>
              </li>
            `);
          }
        });

        return `
          <div class="shoping-list__card">
            <img class="shoping-list__img" src="${bookImage}" alt="Обложка книги" />
            <div class="shoping-list__text-container">
              <div class="shoping-list__button-container">
                <div class="shoping-list__second-text-container">
                  <h3 class="shoping-list__name">${bookTitle}</h3>
                  <p class="shoping-list__bind">${bookCategory}</p>
                </div>
                <button class="button_trash" data-book-id="${bookId}">
                  <img class="button_trash-svg" src="${deleteButton}"/>
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

function renderBooks(page) {
  const booksContainer = document.querySelector('.booksContainer');
  while (booksContainer.firstChild) {
    booksContainer.firstChild.remove();
  }

  const itemsPerPage = 2;
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const booksToShow = books.slice(start, end);

  booksContainer.innerHTML = createMarkup(booksToShow);

  const deleteButtons = document.getElementsByClassName('button_trash');
  Array.from(deleteButtons).forEach(button => {
    const bookId = button.dataset.bookId;
    button.addEventListener('click', () => deleteBook(bookId));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderBooks(1);

  const totalItems = books.length;
  const itemsPerPage = 2;

  const paginationContainer = document.getElementById(
    'tui-pagination-container'
  );
  const pagination = new Pagination('tui-pagination-container', {
    totalItems,
    itemsPerPage,
    centerAlign: true,
  });
  pagination.on('afterMove', event => {
    renderBooks(event.page);
  });
});
