// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9ATWNMU0WbXTkXNq8YP7qXrVdSqt0jQE",
    authDomain: "gamehub-library-auth.firebaseapp.com",
    projectId: "gamehub-library-auth",
    storageBucket: "gamehub-library-auth.firebasestorage.app",
    messagingSenderId: "1066889935000",
    appId: "1:1066889935000:web:47f72943453ec2eb8338ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;