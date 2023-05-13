// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore/lite';
// import { doc, setDoc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYO4Ie3dyg57FYXwv2s34tOoBXm3UaMzg",
    authDomain: "users-bookshelf.firebaseapp.com",
    projectId: "users-bookshelf",
    storageBucket: "users-bookshelf.appspot.com",
    messagingSenderId: "1093946480659",
    appId: "1:1093946480659:web:6fdb7ef580bf859789c7e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// console.log(db);

// Get a list of cities from your database
async function getCities(db) {
    const citiesCol = collection(db, 'customers');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

console.log(getCities(db));







// ============================= tab between forms ===========================================================
// console.log('hello');
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
// ========================= END TAB ============================================

// processing formSignUp **************************

const formSignUp = document.querySelector('.js-form-signup');

// console.dir(formSignUp);
formSignUp.addEventListener('submit', onSignUp);
function onSignUp(event) {
    event.preventDefault();
    const { name, email, password } = event.currentTarget.elements;
    const formSignUpData = {
        name: name.value,
        email: email.value,
        password: password.value
    };
    console.log(formSignUpData);
}

// processing formSignIn **************************

const formSignIn = document.querySelector('.js-form-signin');
formSignIn.addEventListener('submit', onSignIn);
function onSignIn(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const formSignInData = {
        email: email.value,
        password: password.value
    };
    console.log(formSignInData);
}
// const formSignUpData = new FormData()
