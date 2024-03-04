import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCBYr970X9-wyvgkBTUOXkV2XRIvyYF9ao",
    authDomain: "video-e795c.firebaseapp.com",
    projectId: "video-e795c",
    storageBucket: "video-e795c.appspot.com",
    messagingSenderId: "636466290959",
    appId: "1:636466290959:web:fb947720af92520437de7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider()

export default app