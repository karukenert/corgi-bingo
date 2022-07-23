import { createApp } from 'vue'
import './style.css'
import App from './App.vue'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDBKYMkyCvfULnC8-26iU3VllAlVwUgcP0",
	authDomain: "corgi-bingo-805dd.firebaseapp.com",
	projectId: "corgi-bingo-805dd",
	storageBucket: "corgi-bingo-805dd.appspot.com",
	messagingSenderId: "89276643112",
	appId: "1:89276643112:web:b28363cec8e67eb0ea021d",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const vueApp = createApp(App);

vueApp.mount("#app");
