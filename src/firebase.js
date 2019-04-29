import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAQX4dHyRmtmlBwoCAv2MbnnOkeJ3aTb8g",
    authDomain: "webtech-assignment-afffd.firebaseapp.com",
    databaseURL: "https://webtech-assignment-afffd.firebaseio.com",
    projectId: "webtech-assignment-afffd",
    storageBucket: "webtech-assignment-afffd.appspot.com",
    messagingSenderId: "1040527590270"
  };
firebase.initializeApp(config);

export default firebase;