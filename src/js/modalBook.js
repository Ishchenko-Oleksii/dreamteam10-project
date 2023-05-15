import AP from './fetchById';
import {createBookCard, document} from './home';
import imageAmazon from '../images/amazon.svg';
import imageBookShop from '../images/bookshop.svg';
import imageImage from '../images/ibooks.svg';

const refs={
    div: document.querySelector('.bookShell'),
    // ul: document.querySelector('.book__list'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
    bookCard: document.querySelector('.js-book-card'),
    shoppingListBtn: document.querySelector('[data-action="shopping-list-modal"]'),
    text: document.querySelector('.js-modal-text'),
}
console.log('refs.div=', refs.div);
// console.log('refs.ul=', refs.ul);
console.log('document=', document);
const STORAGE_KEY = 'info-shopping-list';
// let idBook=0;

let currentBookInfo={};

const savedData=localStorage.getItem(STORAGE_KEY);
console.log('savedData=',savedData);
let arrShoppingList=JSON.parse(savedData) || [];

console.log('arrShoppingList= ', arrShoppingList);

// console.log(refs.closeModalBtn);
// console.log(refs.backdrop);

//refs.ul.addEventListener('click',onItemGalleryBooksClick);
refs.div.addEventListener('click',onItemGalleryBooksClick);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.shoppingListBtn.addEventListener('click', onShoppingListBtnClick);

function onItemGalleryBooksClick(event){
    // console.log(onItemGalleryBooksClick)
    event.preventDefault();

    const isImageGalleryEl=event.target.classList.contains('js-gallery-image');
    if(!isImageGalleryEl){
        return;
    }

    // console.log(event.target.dataset.id);
    const idBook=event.target.dataset.id;
    
    const isBookInShoppingList=arrShoppingList.length===0
    ?false
    :arrShoppingList.find(book=>book.currentBookId===idBook);
    
    if(isBookInShoppingList){
      refs.shoppingListBtn.textContent='remove from the shopping list';
      refs.shoppingListBtn.classList.add('modal__button-shopping-list--remove');
      refs.text.classList.remove('visually-hidden');
    }
    else{
      refs.shoppingListBtn.textContent='add to shopping list';
      refs.text.classList.add('visually-hidden');
      refs.shoppingListBtn.classList.remove('modal__button-shopping-list--remove');
    }
    refs.bookCard.innerHTML='';

    AP.fetchBookById(idBook)
    .then(createMarkupBookModal);
    //.catch(err=>console.err('Ooops! Something went wrong!'));

    onOpenModal();
    
}

function onOpenModal() {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('js-show-modal');

    //console.log('onOpenModal');
}
  
function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('js-show-modal');

}

function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        //console.log('Кликнули именно в бекдроп!!!!');
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


function createMarkupBookModal(arrayInfoBook){
    //console.log('createMarkupBookModal: ', arrayInfoBook);

    const {book_image, author, title, description,buy_links, _id, list_name}=arrayInfoBook;

    currentBookInfo.currentBookId=_id;
    currentBookInfo.currentBookAuthor=author;
    currentBookInfo.currentBookTitle=title;
    currentBookInfo.currentBookDescription=description;
    currentBookInfo.currentBookCategory=list_name;
    currentBookInfo.currentBookImage=book_image;
    currentBookInfo.currentBookAmazon=buy_links[0].url;
    currentBookInfo.currentBookOpenBook=buy_links[1].url;
    currentBookInfo.currentBookShop=buy_links[4].url;

    console.log('currentBookInfo', currentBookInfo);

    const markup=
    `<div class="img-thumb"><img class="book-image"" src="${book_image}" alt="${title}" loading="lazy" data-id="${_id}"/>
    </div>
    <div class="book-description-thumb">
    <p class="book-title">${title}</p>
    <p class="book-author">${author}</p>
    <p class="book-description">${description}</p>
    <div class="book-links">
    <a href="${buy_links[0].url}" target="_blank" rel="noreferrer noopener">
    <img src="${imageAmazon}" width="62px" height="19px"/>
    </a>
    <a href="${buy_links[1].url}" target="_blank" rel="noreferrer noopener">
    <img src="${imageImage}" width="33px" height="32px"/>
    </a>
    <a href="${buy_links[4].url}" target="_blank" rel="noreferrer noopener">
    <img src="${imageBookShop}" width="38px" height="36px"/>
    </a>
    </div>
    </div>`;



    // console.log(markup);
    refs.bookCard.innerHTML=markup;
}


function onShoppingListBtnClick(event){
    if(arrShoppingList.length>0){
        console.log('arrShoppingList[0]', arrShoppingList[0].currentBookAuthor);
        console.log('currentBookInfo'.currentBookInfo.currentBookAuthor);
    }
    const indexBook=arrShoppingList.findIndex(book=>book.currentBookId===currentBookInfo.currentBookId);
    
    
    console.log('onShoppingListBtnClick indexBook=', indexBook);

    if(indexBook!==-1){
        arrShoppingList.splice(indexBook,1);
        console.log('onShoppingListBtnClick  remove arrShoppingList=', arrShoppingList);
        localStorage.removeItem(STORAGE_KEY);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(arrShoppingList));
    }
    else{
        arrShoppingList.push(currentBookInfo);
       
        console.log('onShoppingListBtnClick add arrShoppingList=',arrShoppingList);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(arrShoppingList));
    }   
    onCloseModal();
}