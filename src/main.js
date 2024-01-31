import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTNqsfhOc381NjqaBfbz4Umo4tWCnBJlk",
  authDomain: "html5-3.firebaseapp.com",
  projectId: "html5-3",
  storageBucket: "html5-3.appspot.com",
  messagingSenderId: "414577155352",
  appId: "1:414577155352:web:963122696e2c537c0ad26d",
  measurementId: "G-3VKCCHEH7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
