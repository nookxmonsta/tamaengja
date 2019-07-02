import firebase from 'firebase';
import './Screen/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB57ZdSUEC_iEd7-VRCVptl1cxyGR8vyzo",
    authDomain: "devcamp-afbdf.firebaseapp.com",
    databaseURL: "https://devcamp-afbdf.firebaseio.com",
    projectId: "devcamp-afbdf",
    storageBucket: "",
    messagingSenderId: "728538298814",
    appId: "1:728538298814:web:53b7edf63527664a"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
    storage, firebase as default
  }
  