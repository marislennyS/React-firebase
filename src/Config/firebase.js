import firebase from 'firebase/app';
import'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDK_m5EFjsajjMufptD2lBS_7bZI2DKNcM",
    authDomain: "firechat-test-2dd3d.firebaseapp.com",
    projectId: "firechat-test-2dd3d",
    storageBucket: "firechat-test-2dd3d.appspot.com",
    messagingSenderId: "1074284537582",
    appId: "1:1074284537582:web:3239443c3e9b66c7f7b5ff",
    measurementId: "G-9CJN5JMQRJ"
}


firebase.initializeApp (firebaseaConfig);
 

    const db = firebasea.firestore();
    const googleAuthProvider = new firebase.auth.googleAuthProvider();

    export{
        db,
        googleAuthProvider,
        firebase
    }
    function app () {
        return (
            <div></div>
        );
        }

        export default App;
        
