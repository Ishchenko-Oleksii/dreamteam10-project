const firebaseConfig = {
    apiKey: "AIzaSyAYO4Ie3dyg57FYXwv2s34tOoBXm3UaMzg",
    authDomain: "users-bookshelf.firebaseapp.com",
    projectId: "users-bookshelf",
    storageBucket: "users-bookshelf.appspot.com",
    messagingSenderId: "1093946480659",
    appId: "1:1093946480659:web:6fdb7ef580bf859789c7e6"
};

// Import the functions you need from the SDKs you need
import { modaSignUp } from "./modal-signup";
import { initializeApp } from "firebase/app";

import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    setDoc,
    updateDoc,
    where
} from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
//console.log(db);

const COLLECTION_CUSTOMERS = 'customers';

const LOCALSTOR_KEY = 'info-shopping-list'; //key of localstorage

var IS_CUSTOMER_LOGGED_IN = false;
let CUSTOMER_SESSION_ID = '';

onAuthStateChanged(auth, (user) => {
    //debugger;
    if (user) {
        const uid = user.uid;

        IS_CUSTOMER_LOGGED_IN = true;
        CUSTOMER_SESSION_ID = user.uid;
    }
    localStorage.setItem('IS_CUSTOMER_LOGGED_IN', IS_CUSTOMER_LOGGED_IN);
});

//window.is_customer_logged_in_flag = IS_CUSTOMER_LOGGED_IN;

// ============================= tab between forms ================================================
// console.log('hello');
const signinCont = document.querySelector('.signin-cont');
const signupCont = document.querySelector('.signup-cont');
const signup = document.querySelector('.signup');
const signin = document.querySelector('.signin');
// const signUpBtn = document.querySelector('.js-signup-btn');
// const content = document.querySelector('.content');


const tabs = document.querySelector('.tabs');
// console.log(tabs);


modaSignUp();

// signUpBtn.addEventListener('click', () => {
//     content.hidden;
// })

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
// ========================= END tab between forms ============================================

// processing formSignUp **************************

const formSignUp = document.querySelector('.js-form-signup');

// console.dir(formSignUp);
formSignUp.addEventListener('submit', onSignUp);
function onSignUp(event) {
    event.preventDefault();
    const { name, email, password } = event.currentTarget.elements;
    // const formSignUpData = {
    //     name: name.value,
    //     email: email.value,
    //     password: password.value
    // };
    // console.log(formSignUpData);
    // debugger


    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            await setDoc(doc(db, COLLECTION_CUSTOMERS, email.value), {
                customer_name: name.value,
                customer_email: email.value,
                shopping_list: '',
                customer_avatar: '',
                session_id: user.uid
            });
            // Redirect to home page
            window.open('/')
            // location.reload();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
        });

}


// processing formSignIn **************************

const formSignIn = document.querySelector('.js-form-signin');
formSignIn.addEventListener('submit', onSignIn);
/**
 * Sing In function
 * 
 * @param {*} event 
 */
function onSignIn(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(async (userCredential) => {
            // Signed in 
            const authUser = userCredential.user;
            const currentUser = doc(db, COLLECTION_CUSTOMERS, email.value);

            // Save cutomer session ID to DB
            await updateDoc(currentUser, { session_id: authUser.uid });

            // Restoring Shopping Cart list from the DB if exists
            const currentUserDocument = await getDoc(currentUser);
            if (currentUserDocument.exists()) {
                // Updating local storage
                console.log("Document data (Shoping list):", currentUserDocument.data().shopping_list);
                // localStorage.setItem(LOCALSTOR_KEY, JSON.stringify(currentUserDocument.data().shopping_list));
                localStorage.setItem(LOCALSTOR_KEY, currentUserDocument.data().shopping_list);
            }

            // Redirect to home page
            window.open('/');
            // location.reload();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        });
}


const signout = document.querySelector('.js-signout');
// console.log(logout);
signout.addEventListener('click', onSignOut);

/**
 *  Sign Out function
 */
// const auth = getAuth();
function onSignOut() {
    signOut(auth).then(async () => {
        if (CUSTOMER_SESSION_ID == "") {
            return true;
        }

        const searchBySessionIdQuery = query(
            collection(db, COLLECTION_CUSTOMERS),
            where("session_id", "==", CUSTOMER_SESSION_ID)
        );

        const queryResults = await getDocs(searchBySessionIdQuery);

        let customerEmail = '';

        queryResults.forEach((doc) => {
            customerEmail = doc.data().customer_email;
        });

        // Save cutomer shopping list into DB during logout
        if (customerEmail) {
            // debugger;
            const currentUser = doc(db, COLLECTION_CUSTOMERS, customerEmail);

            await updateDoc(currentUser, {
                shopping_list: localStorage.getItem(LOCALSTOR_KEY)
            });
        }
        // debugger;
        localStorage.removeItem(LOCALSTOR_KEY);
        localStorage.setItem('IS_CUSTOMER_LOGGED_IN', false);

        // Redirect to home page
        window.open('/');
        // location.reload();

    }).catch((error) => {
        // An error happened.
    });

}
