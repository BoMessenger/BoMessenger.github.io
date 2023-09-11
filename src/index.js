import {templates} from './templates'
import {model} from './model'
import './styles/main.css'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, get  } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_0Mwc1D_iMA6fpvtG8bjcTdGcfnfdpIg",
    authDomain: "bomes-fca0a.firebaseapp.com",
    databaseURL: "https://bomes-fca0a-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "bomes-fca0a",
    storageBucket: "bomes-fca0a.appspot.com",
    messagingSenderId: "1047127596102",
    appId: "1:1047127596102:web:44e24f7e847885ccc8fe47",
    measurementId: "G-8NFGCVM37Y"
};

const $site = document.querySelector("#site")
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);