 
 
import{
  db,
  googleAuthProvider,
  firebase
} from './config/firebase'
import button from '.components/button'

function app () {
  const signInWithGoogle = async () => {
    firebase.auth().useDeviceLanguage(English);
  }
try{
  await firebase.auth().signInWithPopup (googleAuthProvider);
} catch (e) {
  Console.error(e.message);
}
};

function App(){
  return(
     <div>
       <button onClick={signInWithGoogle} >Sing in with Google</button> 
    </div>
     );
  }
  
  export default App;