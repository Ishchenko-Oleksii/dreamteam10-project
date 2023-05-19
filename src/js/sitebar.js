import axios from 'axios';
import { fetchCategoryBooks, clearBookShell, updateBooksPerCategory, createBookElement } from './home.js';

const insertingCategories = document.querySelector('.aside-list');

scrolling();
fetchCategories();

let selectedCategory = 'All categories'; 

async function fetchCategories() {
  const apiCategories = 'https://books-backend.p.goit.global/books/category-list';

  try {
    const response = await axios.get(apiCategories);
    const categoriesData = response.data;

    let buttonId = 1;
    insertingCategories.insertAdjacentHTML(
      'afterbegin',
      `<li class="category-aside-list"><button type="button" id="${buttonId}" class="aside-list-button selected-category">All categories</button></li>`
    );

    for (let i = 0; i < categoriesData.length; i++) {
      buttonId += 1;
      insertingCategories.insertAdjacentHTML(
        'beforeend',
        `<li class="category-aside-list"><button type="button" id="btnAsideListId${buttonId}" class="aside-list-button">${categoriesData[i].list_name}</button></li>`
      );
    }

    attachEventListeners(); 
  } catch (error) {
    console.error(error);
  }
}

function scrolling() {
  insertingCategories.addEventListener('wheel', function (event) {
    event.preventDefault();
    var delta = event.deltaY || event.detail || event.wheelDelta;
    insertingCategories.scrollTop += delta;
  });
}

function attachEventListeners() {
  const buttons = document.querySelectorAll('.aside-list-button');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => {
        btn.classList.remove('selected-category');
      });
      selectedCategory = this.textContent;
      this.classList.add('selected-category');

      if (selectedCategory === 'All categories') {
        window.location.href = 'index.html';
      } else {
        fetchCategoryBooks(selectedCategory)
          .then((books) => {
            clearBookShell();
            updateBooksPerCategory();
            books.forEach(book => {
              const { book_image, title, author, _id } = book;
              const bookElement = createBookElement(book_image, title, author, _id);
              if (bookElement) {
                document.querySelector('.bookShell').appendChild(bookElement);
              }
            });
          })
          .catch(error => {
            console.error(error);
          });
      }
    });
  });
  document.addEventListener('categoryChange', function (event) {
    const newCategory = event.detail;
    changeSelectedCategory(newCategory);
  });
}

function changeSelectedCategory(category) {
  const buttons = document.querySelectorAll('.aside-list-button');
  buttons.forEach(button => {
    button.classList.remove('selected-category');
    if (button.textContent === category) {
      button.classList.add('selected-category');
    }
  });
}



export { selectedCategory, attachEventListeners, changeSelectedCategory };


