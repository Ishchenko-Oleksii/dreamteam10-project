
import axios from 'axios';

async function fetchBooks() {
    console.log('fetchBooks() was called');
    const url = `https://books-backend.p.goit.global/books/top-books`;
    try {
      const response = await axios.get(url);
      const data = response.data;
      const bookShell = document.querySelector('.bookShell');
      data.forEach(book => {
        const card = createBookCard(book);
        if (card) {
          bookShell.appendChild(card);
        }
      });
      return data; 
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  function createBookCard(category) {
    console.log('createBookCard() was called with:', category);
  
    const { list_name, books } = category;
    const card = document.createElement('div');
    card.classList.add('card');
  
    const body = document.createElement('div');
    body.className = 'card-body';
  
    const title = document.createElement('h2');
    title.textContent = list_name;
    body.appendChild(title);
  
    const list = document.createElement('ul');
    books.slice(0, 5).forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.addEventListener('click', () => {
        console.log(`Book ${book.title} clicked`);
      });
  
      const bookImageContainer = document.createElement('div');
      bookImageContainer.classList.add('book-image-container');
  
      const bookImage = document.createElement('img');
      bookImage.src = book.book_image;
      bookImage.alt = book.title;
      bookImage.loading = 'lazy';
      bookImageContainer.appendChild(bookImage);
  
      const quickView = document.createElement('div');
      quickView.classList.add('quick-view');
      quickView.textContent = 'QUICK VIEW';
      bookImageContainer.appendChild(quickView);
  
      bookItem.appendChild(bookImageContainer);
  
      const bookTitle = document.createElement('p');
      bookTitle.textContent = book.title;
      bookItem.appendChild(bookTitle);
  
      const bookAuthor = document.createElement('p');
      bookAuthor.textContent = `${book.author}`;
      bookItem.appendChild(bookAuthor);
  
      list.appendChild(bookItem);
    });
  
    body.appendChild(list);
    card.appendChild(body);
  
    const button = document.createElement('button');
    button.textContent = 'See more';
    button.addEventListener('click', () => {
      console.log('See more button clicked');
    });
    card.appendChild(button);
  
    console.log(card);
    console.log('createBookCard() created card:', card);
    return card;
  }
  function updateBooksPerCategory() {
    const width = window.innerWidth;
    const booksPerCategory = width < 375 ? 1 : width < 768 ? 3 : 5;
    const categories = document.querySelectorAll('.card-body ul');
    categories.forEach(category => {
      const books = category.querySelectorAll('li');
      for (let i = 0; i < books.length; i++) {
        if (i < booksPerCategory) {
          books[i].style.display = 'block';
        } else {
          books[i].style.display = 'none';
        }
      }
    });
  }
  
  window.addEventListener('resize', updateBooksPerCategory);
  updateBooksPerCategory();
  
  
  document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOMContentLoaded event fired');
    const bookShell = document.createElement('div');
    bookShell.classList.add('bookShell');
    document.body.appendChild(bookShell);
    updateBooksPerCategory(); 
    try {
      await fetchBooks();
    } catch (error) {
      console.error(error);
    }
    updateBooksPerCategory(); 
  });

