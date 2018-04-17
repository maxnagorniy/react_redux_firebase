import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBv5K0yGU-AV9tlAJdzIfOIjAQK6WCS-3U",
    authDomain: "react-redux-app-3df76.firebaseapp.com",
    databaseURL: "https://react-redux-app-3df76.firebaseio.com",
    projectId: "react-redux-app-3df76",
    storageBucket: "react-redux-app-3df76.appspot.com",
    messagingSenderId: "139022969869"
};
firebase.initializeApp(config);

export const database = firebase.database().ref("posts/");