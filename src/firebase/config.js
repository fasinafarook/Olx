import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCsgdwb25MqEJ_c1KnvczSfmOVj7qEBLos",
    authDomain: "fir-2dc96.firebaseapp.com",
    projectId: "fir-2dc96",
    storageBucket: "fir-2dc96.appspot.com",
    messagingSenderId: "93269119839",
    appId: "1:93269119839:web:2ed4e2fe02079eef079cea",
    measurementId: "G-7QMZD0RL0D"
  };

export default  firebase.initializeApp(firebaseConfig)