const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector(".js-close-menu");
const burgerMenu = document.querySelector('.js-burger-menu');

// const customerLoggedIn = `<div class="burger-conteiner">
//   <div class="user-burger">
//     <div class="avatar">
//       <img class="avatar_img" src="" alt="">
//     </div>
//     <p class="user-name">Stephen</p>
//   </div>

//   <nav class="navigation-burger">
//     <ul class="navigation-burger-list">
//       <li class="navigation-item navigation-burger-item"><a class="navigation-link" href="#">Home</a></li>
//       <li class="navigation-item navigation-burger-item">
//         <a class="navigation-link" href="#">Shopping List
//           <svg width="20" height="20">
//             <use href="/images/icons.svg#icon-lock"></use>
//           </svg>
//         </a>
//       </li>
//     </ul>
//   </nav>

//   <button class="button_logout btn-logout-burger js-signout submit-out" type="button" value="">Log out
//     <svg width="20" height="20">
//       <use href="/images/icons.svg#icon-arrow-narrow-right"></use>
//     </svg>
//   </button>
// </div>`;

// const customerNouLoggedIn = `<div class="burger-conteiner">
//   <button class="button_signup btn-signup-burger js-signup-btn" type="button" value="" data-modal-open>Sign up
//     <svg width="20" height="20">
//       <use href="/images/icons.svg#icon-arrow-narrow-right"></use>
//     </svg>
//   </button>
// </div>`;

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

function openMenu() {
  // burgerMenu.classList.remove("is-hidden");
  openMenuBtn.classList.add("is-hidden");
  closeMenuBtn.classList.remove("is-hidden");

  burgerMenu.style.height = "100vh";

  // if (localStorage.getItem(IS_CUSTOMER_LOGGED_IN)) {
    // burgerMenu.innerHTML = customerLoggedIn;
  //} else{
      // burgerMenu.innerHTML = customerNouLoggedIn;
  // }
}

function closeMenu() {
  burgerMenu.classList.add("is-hidden");
  openMenuBtn.classList.remove("is-hidden");
  closeMenuBtn.classList.add("is-hidden");
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
