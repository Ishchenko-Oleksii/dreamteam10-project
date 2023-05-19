const openMenuBtn = document.querySelector('.open-menu-icon');
const closeMenuBtn = document.querySelector('.close-menu-icon');

const navigation = document.querySelector('.js-navigation');

const userBtnContainer = document.querySelector('.header-user-container');
const userBtn = document.querySelector('.js-btn-user');
const signoutHeder = document.querySelector('.js-signout-heder');
const signupBtn = document.querySelector('.js-signup-btn');

const burgerMenu = document.querySelector('.burger-menu');
const burgerUser = document.querySelector('.js-burger-user');
const burgerSignup = document.querySelector('.js-burger-signup');

const custumerName = document.querySelector('.user-name');
const IS_CUSTOMER_LOGGED_IN = localStorage.getItem('IS_CUSTOMER_LOGGED_IN');

function isCustomerLogIn() {
  if (JSON.parse(IS_CUSTOMER_LOGGED_IN)) {
    let name = localStorage.getItem('customer_name');
    userBtn.textContent = name;
    custumerName.textContent = name;
    burgerUser.classList.remove('is-hidden');
    burgerSignup.classList.add('is-hidden');

    navigation.classList.remove('is-hidden');
    userBtnContainer.classList.remove('is-hidden');
    signupBtn.classList.add('is-hidden');

  } else {
    burgerUser.classList.add('is-hidden');
    burgerSignup.classList.remove('is-hidden');
  }
}
isCustomerLogIn();

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
userBtn.addEventListener('click', () => signoutHeder.classList.remove('is-hidden'));
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
