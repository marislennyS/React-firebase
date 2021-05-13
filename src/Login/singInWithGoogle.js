import { db, googleAuthProvider, firebase } from "./config/firebase";
import { signInWithGoogle } from "./Index";
import {firebase, googleAuthProvider } from '../config/firebase';


const signInWithGoogle  = async () => {
    firebase.auth().useDeviceLanguage();

    try {
        await firebase.auth().signInWithPopup(googleAuthProvider);
    }
    catch (e) {
        console.error(e.message);
    }

};
export default signInWithGoogle;