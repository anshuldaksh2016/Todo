import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAJWsQ3UzH1gjdTG8htgOaA6ehOCuTdlVY",
    authDomain: "todoapp-dd481.firebaseapp.com",
    databaseURL: "https://todoapp-dd481.firebaseio.com",
    projectId: "todoapp-dd481",
    storageBucket: "todoapp-dd481.appspot.com",
    messagingSenderId: "162510615390",
    appId: "1:162510615390:web:e68b26193de7e1516415cf"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider() ;