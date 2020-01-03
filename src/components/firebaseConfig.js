import firebase from "firebase";
import "firebase/firestore";

import firebaseConfig from "./firebaseInit";

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
