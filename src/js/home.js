import axios from 'axios';
const exporting = document.querySelector('export-all')
export {exporting}
setHome()
function setHome(){
async function fetchBooks() {
  const url = `https://books-backend.p.goit.global/books/top-books`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    const bookShell = document.querySelector('.bookShell');
    const loadedCategories = []; 
    const cardsToCreate = data.slice(0, 5);

    cardsToCreate.forEach((book) => {
      if (!loadedCategories.includes(book.list_name)) {
        const card = createBookCard(book);
        if (card) {
          bookShell.appendChild(card);
          loadedCategories.push(book.list_name); 
        }
      }
    });

    if (data.length === 0) {
      const bookShell = document.querySelector('.bookShell');
      const noBooksMsg = document.createElement('div');
      noBooksMsg.textContent = 'No books found';
      noBooksMsg.style.textAlign = 'center';
      bookShell.appendChild(noBooksMsg);
    }

    const loadMoreBooks = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      ) {
        const remainingBooks = data.slice(5);
        remainingBooks.forEach((book) => {
          if (!loadedCategories.includes(book.list_name)) {
            const card = createBookCard(book);
            if (card) {
              bookShell.appendChild(card);
              loadedCategories.push(book.list_name); 
            }
          }
        });

        if (remainingBooks.length === 0) {
          window.removeEventListener('scroll', loadMoreBooks);
        }
      }
    };

    window.addEventListener('scroll', loadMoreBooks);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function createBookCard(category) {
  const { list_name, books } = category;
  const card = document.createElement('div');
  card.className = 'book';
  card.classList.add('card');

  const body = document.createElement('div');
  body.className = 'book__body';

  const title = document.createElement('h2');
  title.textContent = list_name;
  title.className = 'book__category';
  body.appendChild(title);

  const list = document.createElement('ul');
  list.className = 'book__list';
  if (Array.isArray(books)) {
    books.slice(0, 5).forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.className = 'book__item';

      const bookImageContainer = document.createElement('div');
      bookImageContainer.classList.add('book-image-container');

      const bookImage = document.createElement('img');
      bookImage.src = book.book_image;
      bookImage.alt = book.title;
      bookImage.loading = 'lazy';
      bookImage.className = 'book__img';
      bookImage.classList.add('js-gallery-image');
      bookImage.setAttribute('data-id', book._id);
      bookImageContainer.appendChild(bookImage);

      const quickView = document.createElement('div');
      quickView.classList.add('quick-view');
      quickView.textContent = 'QUICK VIEW';
      quickView.setAttribute('data-id', book._id);
      bookImageContainer.appendChild(quickView);

      bookItem.appendChild(bookImageContainer);

      const bookTitle = document.createElement('p');
      bookTitle.textContent = book.title;
      bookTitle.className = 'book__title';
      if (book.title.length > 15) {
        bookTitle.textContent = book.title.substring(0, 15) + '...';
      } else {
        bookTitle.textContent = book.title;
      }
      bookItem.appendChild(bookTitle);

      const bookAuthor = document.createElement('p');
      bookAuthor.textContent = `${book.author}`;
      bookAuthor.className = 'book__author';
      bookItem.appendChild(bookAuthor);

      list.appendChild(bookItem);
    });
  }

  body.appendChild(list);
  card.appendChild(body);

  const button = document.createElement('button');
  button.textContent = 'See more';
  button.addEventListener('click', async () => {
    const category = list_name;
    clearBookShell();
    try {
      await fetchCategoryBooks(category);
    } catch (error) {
      console.error(error);
    }
    updateBooksPerCategory();
  });
  button.className = 'book__button';
  card.appendChild(button);

  return card;
}


function updateBooksPerCategory() {
  const width = window.innerWidth;
  const booksPerCategory = width < 480 ? 1 : width < 780 ? 3 : 5;
  const categories = document.querySelectorAll('.book__body ul');
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

function clearBookShell() {
  const bookShell = document.querySelector('.bookShell');
  while (bookShell.firstChild) {
    bookShell.removeChild(bookShell.firstChild);
  }
}
function updateCategoryTitle(category) {
  const categoryTitle = document.querySelector('.bookShell__title');
  const categoryWords = category.split(' ');
  const firstWord = categoryWords.shift();
  categoryTitle.innerHTML = `${firstWord} <span class="bookShell__title_span">${categoryWords.join(' ')}</span>`;
}


async function fetchCategoryBooks(category) {
  const url = `https://books-backend.p.goit.global/books/category?category=${category}`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    const bookShell = document.querySelector('.bookShell');
    bookShell.classList.add('bookShell-category');
    updateCategoryTitle(category);
    data.forEach(book => {
      const { _id, book_image, title, author } = book;
      const bookElement = createBookElement(book_image, title, author, _id);
      if (bookElement) {
        bookShell.appendChild(bookElement);
      }
    });
    if (data.length === 0) {
      const noBooksMsg = document.createElement('div');
      noBooksMsg.textContent = 'No books found';
      noBooksMsg.style.textAlign = 'center';
      bookShell.appendChild(noBooksMsg);
    } 
    document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function createBookElement(book_image, title, author, _id) {
  const bookItem = document.createElement('div');
  bookItem.className = 'book';
  bookItem.addEventListener('click', () => {
  });

  const bookImageContainer = document.createElement('div');
  bookImageContainer.classList.add('book-image-container');

  const bookImage = document.createElement('img');
  bookImage.src = book_image;
  bookImage.alt = title;
  bookImage.loading = 'lazy';
  bookImage.className = 'book__img';
  bookImage.classList.add('js-gallery-image');
  bookImage.setAttribute('data-id', _id);
  bookImageContainer.appendChild(bookImage);

  const quickView = document.createElement('div');
  quickView.classList.add('quick-view');
  quickView.textContent = 'QUICK VIEW';
  quickView.setAttribute('data-id', _id);
  bookImageContainer.appendChild(quickView);

  bookItem.appendChild(bookImageContainer);

  const bookTitle = document.createElement('p');
  bookTitle.textContent = title;
  bookTitle.className = 'book__title';
  if (title.length > 15) {
    bookTitle.textContent = title.substring(0, 15) + '...';
  } else {
    bookTitle.textContent = title;
  }
  bookItem.appendChild(bookTitle);

  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = author;
  bookAuthor.classList.add('book__author', 'author');
  if (author.length > 15) {
    bookAuthor.textContent = author.substring(0, 15) + '...';
  } else {
    bookAuthor.textContent = author;
  }
  bookItem.appendChild(bookAuthor);

  return bookItem;
}

document.addEventListener('DOMContentLoaded', async () => {
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
 

}
export {setHome}