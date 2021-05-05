 
 
import{
  db,
  googleAuthProvider,
  firebase
} from './config/firebase'
import button from '.components/Button'

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
const signInWithGoogle = async () => {

firebase.auth().useDeviceLanguage();

try {
  await firebase.base.auth().signInWithPopup (googleAuthProvider);
} catch (e){
  console.error(e.message);
}

};
  return(
     <div>
       <Button onClick={signInWithGoogle} >Sing in with Google</Button> 
    </div>
     );
  }
  
  export default App;