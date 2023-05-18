import axios from 'axios';

const scrollbar = document.querySelector('.scrollbar');
const insertingCategories = document.querySelector('.aside-list');
scrolling();
fetchCategories();

async function fetchCategories() {
  const apiCategories = 'https://books-backend.p.goit.global/books/category-list';

  await axios.get(apiCategories).then(response => {
    console.log(response.data);
    let buttonId = 1;

    insertingCategories.insertAdjacentHTML(
      'afterbegin',
      `<li class="category-aside-list"><button type="button" id="${buttonId}" class="aside-list-button selected-category">All categories</button></li>`
    );

    for (let i = 0; i < response.data.length; i++) {
      buttonId += 1;

      insertingCategories.insertAdjacentHTML(
        'beforeend',
        `<li class="category-aside-list"><button type="button" id="btnAsideListId${buttonId}" class="aside-list-button">${response.data[i].list_name}</button></li>`
      );
    }

    attachEventListeners();
  });
}

function scrolling() {
  insertingCategories.addEventListener('wheel', function (event) {
    event.preventDefault();
    var delta = event.deltaY || event.detail || event.wheelDelta;
    insertingCategories.scrollTop += delta;
  });
}

let selectedCategory = 'All categories';
let encodedString = '';

function attachEventListeners() {
  const buttons = document.querySelectorAll('.aside-list-button');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => {
        btn.classList.remove('selected-category');
      });

      selectedCategory = this.textContent;
      this.classList.add('selected-category');
      encodedString = encodeURIComponent(selectedCategory);
      if(selectedCategory!='All categories'){
      document.querySelector('.export-all').innerHTML = '';
      }
      getElementsByCategory();
    });
  });
}
import { setHome } from './home';
function getElementsByCategory() {
  document.querySelector('.export-all').innerHTML = '';
  axios.get(`https://books-backend.p.goit.global/books/category?category=${encodedString}`).then((res) => {
    if(selectedCategory==='All categories'){
      setHome();
    }else if(selectedCategory!='All categories'){
    const books = res.data;
    books.forEach((book) => {
      const bookImage = book.book_image;
      const bookTitle = book.title;
      const bookAuthor = book.author;
      const bookContainer = document.createElement('div');
      bookContainer.classList.add('book-item');
      const imgElement = document.createElement('img');
      imgElement.src = bookImage;
      imgElement.classList.add('insertedByCategoryBooks');
      const titleElement = document.createElement('p');
      titleElement.classList.add('book-title');
      if (bookTitle.length > 15) {
        titleElement.textContent = bookTitle.substring(0, 15) + '...';
      } else {
        titleElement.textContent = bookTitle;
      }

      const authorElement = document.createElement('p');
      authorElement.classList.add('book-author');

      if (bookAuthor.length > 15) {
        authorElement.textContent = bookAuthor.substring(0, 15) + '...';
      } else {
        authorElement.textContent = bookAuthor;
      }
      bookContainer.appendChild(imgElement);
      bookContainer.appendChild(titleElement);
      bookContainer.appendChild(authorElement);
      document.querySelector('.export-all').appendChild(bookContainer);
    });
  }
  });
}