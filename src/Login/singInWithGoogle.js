import { db, googleAuthProvider, firebase } from "./config/firebase";
import { signInWithGoogle } from "./Index";

function App() {
    const signInWithGoogle = async () => {
      firebase.auth().useDeviceLanguage();
  
      try {
        await firebase.auth().signInWithPopup(googleAuthProvider);
      } catch (e) {
        console.error(e.message);
      }
    };
  
    return (
      <div>
        <Button onClick={signInWithGoogle}>Inicia Secion con Google</Button>
      </div>
    );
  }
  export default signInWithGoogle;
  