import API from './fetchById';

import imageBookShop from '../images/bookshop.svg';
import imageIBooks from '../images/ibooks.svg';
import sprite from '../images/amazon.svg';

const refs = {
  div: document.querySelector('.bookShell'),

  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
  bookCard: document.querySelector('.js-book-card'),
  shoppingListBtn: document.querySelector(
    '[data-action="shopping-list-modal"]'
  ),
  text: document.querySelector('.js-modal-text'),
};

const STORAGE_KEY = 'info-shopping-list';

let currentBookInfo = {};
let arrShoppingList = [];
if (localStorage.getItem(STORAGE_KEY)) {
  arrShoppingList = JSON.parse(localStorage.getItem(STORAGE_KEY));
}

refs.div.addEventListener('click', onItemGalleryBooksClick);

refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.shoppingListBtn.addEventListener('click', onShoppingListBtnClick);

function onItemGalleryBooksClick(event) {
  event.preventDefault();

  const isDivQuickViewEl = event.target.classList.contains('quick-view');
  const isImageGalleryEl = event.target.classList.contains('js-gallery-image');

  if (!isImageGalleryEl && !isDivQuickViewEl) {
    return;
  }

  const idBook = event.target.dataset.id;

  const isBookInShoppingList =
    arrShoppingList.length === 0
      ? false
      : arrShoppingList.find(book => book.bookId === idBook);

  if (isBookInShoppingList) {
    refs.shoppingListBtn.textContent = 'remove from the shopping list';
    refs.shoppingListBtn.classList.add('modal__button-shopping-list--remove');
    refs.text.classList.remove('visually-hidden');
  } else {
    refs.shoppingListBtn.textContent = 'add to shopping list';
    refs.text.classList.add('visually-hidden');
    refs.shoppingListBtn.classList.remove(
      'modal__button-shopping-list--remove'
    );
  }
  refs.bookCard.innerHTML = '';

  API.fetchBookById(idBook)
    .then(createMarkupBookModal)
    .catch(err => console.err('Ooops! Something went wrong!'));

  onOpenModal();
}

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('js-show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('js-show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    onCloseModal();
  }
}

function createMarkupBookModal(arrayInfoBook) {
  const { book_image, author, title, description, buy_links, _id, list_name } =
    arrayInfoBook;

  currentBookInfo.bookId = _id;
  currentBookInfo.bookAuthor = author;
  currentBookInfo.bookTitle = title;
  currentBookInfo.bookDescription = description;
  currentBookInfo.bookCategory = list_name;
  currentBookInfo.bookImage = book_image;
  currentBookInfo.bookAmazon = buy_links[0].url;
  currentBookInfo.bookOpenBook = buy_links[1].url;
  currentBookInfo.bookShop = buy_links[4].url;

  const markup = `<img class="book-image"" src="${book_image}" alt="${title}" loading="lazy" data-id="${_id}"/>
    <div class="book-description-thumb">
    <p class="book-title">${title}</p>
    <p class="book-author">${author}</p>
    <p class="book-description">${description}</p>
    <div class="book-links">
    <a class="book-buy-url" href="${buy_links[0].url}" target="_blank" rel="noreferrer noopener">
    <svg class="book-buy-icon" width="62" height="19">
    <use href="${sprite}#svg1936"></use>
    </svg>
    </a>
    <a class="book-buy-url" href="${buy_links[1].url}" target="_blank" rel="noreferrer noopener">
    <img src="${imageIBooks}" width="33px" height="32px"/>
    </a>
    <a class="book-buy-url" href="${buy_links[4].url}" target="_blank" rel="noreferrer noopener">
    <img src="${imageBookShop}" width="38px" height="36px"/>
    </a>
    </div>
    </div>`;

  refs.bookCard.innerHTML = markup;
}

function onShoppingListBtnClick(event) {
  try {
    const indexBook = arrShoppingList.findIndex(
      book => book.bookId === currentBookInfo.bookId
    );

    if (indexBook !== -1) {
      arrShoppingList.splice(indexBook, 1);
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arrShoppingList));
    } else {
      arrShoppingList.push({ ...currentBookInfo });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arrShoppingList));
    }
  } catch {
    console.err('Ooops! Something went wrong!');
  }
  onCloseModal();
}
