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
      <li class="category-aside-list"><button type="button" id="${buttonId}" class="aside-list-button">All categories</button></li>
    );
    for (let i = 0; i < response.data.length; i++) {
      buttonId += 1;
      insertingCategories.insertAdjacentHTML(
        'beforeend',
        <li class="category-aside-list"><button type="button" id="btnAsideListId${buttonId}" class="aside-list-button">${response.data[i].list_name}</button></li>
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
function attachEventListeners() {
    let selectedCategory='All categories'
  const buttons = document.querySelectorAll('.aside-list-button');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => {
        btn.classList.remove('selected-category');
      });
      selectedCategory=this.textContent
      this.classList.add('selected-category');
      console.log(selectedCategory)
    });
  });
}