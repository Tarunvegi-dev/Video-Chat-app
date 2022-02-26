import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCHwQp3OA5VtqyvOBuwr3I_VNqqRa0buHs",
    authDomain: "web-rtc-bc91c.firebaseapp.com",
    projectId: "web-rtc-bc91c",
    storageBucket: "web-rtc-bc91c.appspot.com",
    messagingSenderId: "1066633893007",
    appId: "1:1066633893007:web:fd7a7394d8ac7d65f74cfa"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
