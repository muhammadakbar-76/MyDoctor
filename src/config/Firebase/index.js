import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {API_KEY_FIREBASE, MESSAGE_SENDER_ID, APP_ID_FIREBASE} from '@env';

const firebaseConfig = {
    apiKey: API_KEY_FIREBASE,
  
    authDomain: "my-doctor-76.firebaseapp.com",
  
    projectId: "my-doctor-76",
  
    storageBucket: "my-doctor-76.appspot.com",
  
    messagingSenderId: MESSAGE_SENDER_ID,
  
    appId: APP_ID_FIREBASE,

    databaseURL: "https://my-doctor-76-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
  
  // Initialize Firebase
  
export const fire = initializeApp(firebaseConfig);

export const database = getDatabase(fire);