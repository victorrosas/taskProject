import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCGgSXhic2qMdbVbAvuU7fk_FlT19k4TTw",
    authDomain: "tarefas-29b2a.firebaseapp.com",
    projectId: "tarefas-29b2a",
    storageBucket: "tarefas-29b2a.appspot.com",
    messagingSenderId: "935992990031",
    appId: "1:935992990031:web:8595c42f3f4657d3d70d3a"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
};

export default firebase;