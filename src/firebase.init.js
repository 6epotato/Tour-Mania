// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTBMphhiV8x0GqwtkQ2w-NvQsCO4Tfv1Q",
    authDomain: "tour-mania.firebaseapp.com",
    projectId: "tour-mania",
    storageBucket: "tour-mania.appspot.com",
    messagingSenderId: "762594879827",
    appId: "1:762594879827:web:78d7f5dfdf581b3c7d99a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;