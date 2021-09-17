import firebase from "firebase";

// this is config file to connect with the database:-
const firebaseConfig = {
  apiKey: "AIzaSyDnGkcOHq6Q4pv8Q21ZscUAOpCkpvev1Ys",
  authDomain: "whatsapp-clone-af7a1.firebaseapp.com",
  projectId: "whatsapp-clone-af7a1",
  storageBucket: "whatsapp-clone-af7a1.appspot.com",
  messagingSenderId: "397540437723",
  appId: "1:397540437723:web:62790cb5334c30ab55a6fe",
  measurementId: "G-QE80R4D23P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

const provider = new firebase.auth.GoogleAuthProvider()


export {auth,provider}
export default db