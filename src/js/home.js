import axios from 'axios';

async function fetchBooks() {
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
      if (data.length === 0) {
        const bookShell = document.querySelector('.bookShell');
        const noBooksMsg = document.createElement('div');
        noBooksMsg.textContent = 'No books found';
        noBooksMsg.style.textAlign = 'center';
        bookShell.appendChild(noBooksMsg);
      }
    });
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
  books.slice(0, 5).forEach(book => {
    const bookItem = document.createElement('li');
    bookItem.className = 'book__item';
    bookItem.addEventListener('click', () => {
      console.log(`Book ${book.title} clicked`);
    });

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
    bookImageContainer.appendChild(quickView);

    bookItem.appendChild(bookImageContainer);

    const bookTitle = document.createElement('p');
    bookTitle.textContent = book.title;
    bookTitle.className = 'book__title';
    if (book.title.length > 15) {
      bookTitle.textContent = book.title.substring(0, 17) + '...';
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

  body.appendChild(list);
  card.appendChild(body);

  const button = document.createElement('button');
  button.textContent = 'See more';
  button.addEventListener('click', () => {
    console.log('See more button clicked');
  });
  button.className = 'book__button';
  card.appendChild(button);

  return card;
}
function updateBooksPerCategory() {
  const width = window.innerWidth;
  const booksPerCategory = width < 480 ? 1 : width < 780 ? 3 : 5;
  const categories = document.querySelectorAll('.book__body, ul');
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

export { document };
