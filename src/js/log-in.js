console.log('hello');
const signinCont = document.querySelector('.signin-cont');
const signupCont = document.querySelector('.signup-cont');
const signup = document.querySelector('.signup');
const signin = document.querySelector('.signin');

const tabs = document.querySelector('.tabs');
// console.log(tabs);

tabs.addEventListener('click', changeTab);
function changeTab(event) {

    // if (event.target.classList.contains('js-tab')) {
    //     console.log(event.target);

    signin.classList.toggle("active");
    signup.classList.toggle("active");

    signinCont.classList.toggle("hidden");
    signupCont.classList.toggle("hidden");

    // document.getElementById("welcome").hidden = true;
    // document.getElementById("awesome").hidden = false;
    // }
}
