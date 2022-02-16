
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXBzIZ93_uUF7HlvMSgRQElG28r9MAyPk",
    authDomain: "stock-6e955.firebaseapp.com",
    databaseURL: "https://stock-6e955-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "stock-6e955",
    storageBucket: "stock-6e955.appspot.com",
    messagingSenderId: "1052328331100",
    appId: "1:1052328331100:web:9fc032405483d9e5b92399",
    measurementId: "G-LCGCXTCY7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(firebaseApp);