const openMenuBtn = document.querySelector('.open-menu-icon');
const closeMenuBtn = document.querySelector('.close-menu-icon');
const navigation = document.querySelector('.js-navigation');
const userBtn = document.querySelector('.js-btn-user');
const signupBtn = document.querySelector('.js-signup-btn');
const burgerMenu = document.querySelector('.burger-menu');

const customerLoggedIn = `<div class="burger-conteiner">
  <div class="user-burger">
    <div class="avatar">
      <img class="avatar_img" src="" alt="">
    </div>
    <p class="user-name">Stephen</p>
  </div>

  <nav class="navigation-burger">
    <ul class="navigation-burger-list">
      <li class="navigation-item"><a class="navigation-link navigation-burger-link" href="./index.html">Home</a></li>
      <li class="navigation-item">
        <a class="navigation-link navigation-burger-link" href="./shoping-list.html">Shopping List
          <svg width="20" height="20">
            <use href="./images/icons.svg#icon-lock"></use>
          </svg>
        </a>
      </li>
    </ul>
  </nav>

  <button class="button_logout btn-logout-burger js-signout" type="button" value=""> Log out
    <svg width="20" height="20">
      <use href="./images/icons.svg#icon-arrow-narrow-right"></use>
    </svg>
  </button>
</div>`;

const customerNouLoggedIn = `<div class="burger-conteiner">
  <button class="button_signup btn-signup-burger js-signup-btn" type="button" data-modal-open>Sign up
    <svg class="button_signup-icon" width="20" height="20">
      <use href="./images/icons.svg#icon-arrow-narrow-right"></use>
    </svg>
  </button>
</div>`;

const IS_CUSTOMER_LOGGED_IN = (localStorage.getItem('IS_CUSTOMER_LOGGED_IN'));

function isCustomerLogIn(){
  if (JSON.parse(IS_CUSTOMER_LOGGED_IN)) {
  burgerMenu.innerHTML = customerLoggedIn;

  navigation.classList.remove('is-hidden');
  userBtn.classList.remove('is-hidden');
  signupBtn.classList.add('is-hidden');
  // const signoutMobile = document.querySelector('.js-signout-mobile');
  // signoutMobile.addEventListener('click', onSignOut);
} else {
  burgerMenu.innerHTML = customerNouLoggedIn;
  // const openModalMobile = document.querySelector("[data-modal-open]");
  // openModalMobile.addEventListener('click', () => {
  //   const modal = document.querySelector("[data-modal]"); modal.classList.toggle("hidden")
  // })
}};
isCustomerLogIn();

export { isCustomerLogIn };
openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

function openMenu() {
  burgerMenu.classList.remove('is-hidden');
  openMenuBtn.classList.add('is-hidden');
  closeMenuBtn.classList.remove('is-hidden');
}

function closeMenu() {
  burgerMenu.classList.add('is-hidden');
  openMenuBtn.classList.remove('is-hidden');
  closeMenuBtn.classList.add('is-hidden');
}
// ///////////////////Dark Theme/////////////////
const body = document.querySelector('body');
const toggle = document.querySelector('#theme-switch-toggle');

toggle.addEventListener('change', event => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    localStorage.removeItem('darkTheme');
  } else {
    body.classList.add('dark');
    localStorage.setItem('darkTheme', 'true');
  }
});

let theme = localStorage.getItem('darkTheme');
function checkTheme(theme) {
  if (localStorage.getItem('darkTheme')) {
    body.classList.add('dark');
    toggle.checked = true;
  }
  return;
}
checkTheme();
