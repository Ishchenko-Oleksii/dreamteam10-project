const firebaseConfig = {
    apiKey: "AIzaSyAYO4Ie3dyg57FYXwv2s34tOoBXm3UaMzg",
    authDomain: "users-bookshelf.firebaseapp.com",
    projectId: "users-bookshelf",
    storageBucket: "users-bookshelf.appspot.com",
    messagingSenderId: "1093946480659",
    appId: "1:1093946480659:web:6fdb7ef580bf859789c7e6"
};

// Import the functions you need from the SDKs you need
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { modalSignUp } from "./modal-signup";
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

const COLLECTION_CUSTOMERS = 'customers';
const LOCALSTOR_KEY = 'info-shopping-list';

var IS_CUSTOMER_LOGGED_IN = false;
let CUSTOMER_SESSION_ID = '';
const CUSTOMER_NAME = 'customer_name';

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;

        IS_CUSTOMER_LOGGED_IN = true;
        CUSTOMER_SESSION_ID = user.uid;
    }
    localStorage.setItem('IS_CUSTOMER_LOGGED_IN', IS_CUSTOMER_LOGGED_IN);
});

const signinCont = document.querySelector('.signin-cont');
const signupCont = document.querySelector('.signup-cont');
const signup = document.querySelector('.signup');
const signin = document.querySelector('.signin');
const tabs = document.querySelector('.tabs');

modalSignUp();

tabs.addEventListener('click', changeTab);
function changeTab(event) {

    signin.classList.toggle("active");
    signup.classList.toggle("active");

    signinCont.classList.toggle("hidden");
    signupCont.classList.toggle("hidden");
}

// processing formSignUp **************************

const formSignUp = document.querySelector('.js-form-signup');

formSignUp.addEventListener('submit', onSignUp);
function onSignUp(event) {
    event.preventDefault();
    const { name, email, password } = event.currentTarget.elements;

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
            Notify.success('Your account was successfully registered!');

            // Redirect to home page
            delay(1000).then(() => document.location.href = '/');
        })
        .catch((error) => {
            const errorMessage = error.message;
            Notify.failure(errorMessage)
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


                localStorage.setItem(CUSTOMER_NAME, currentUserDocument.data().customer_name);
                localStorage.setItem(LOCALSTOR_KEY, currentUserDocument.data().shopping_list);
            }

            // Redirect to home page
            Notify.success('Welcome!');
            delay(1000).then(() => document.location.href = '/');
        })
        .catch((error) => {
            const errorMessage = error.message;
            Notify.failure(errorMessage)
        });
}


const signout = document.querySelector('.js-signout');
signout.addEventListener('click', onSignOut);

/**
 *  Sign Out function
 */
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
            const currentUser = doc(db, COLLECTION_CUSTOMERS, customerEmail);

            await updateDoc(currentUser, {
                shopping_list: localStorage.getItem(LOCALSTOR_KEY)
            });
        }
        localStorage.removeItem(CUSTOMER_NAME);
        localStorage.removeItem(LOCALSTOR_KEY);
        localStorage.setItem('IS_CUSTOMER_LOGGED_IN', false);
        Notify.warning('Have a nice day!');

        // Redirect to home page
        delay(1000).then(() => document.location.href = '/');

    }).catch((error) => {
        const errorMessage = error.message;
        // An error happened.
        Notify.failure(errorMessage)
    });

}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
