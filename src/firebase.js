// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflix-clone-448c4.firebaseapp.com",
  projectId: "netflix-clone-448c4",
  storageBucket: "netflix-clone-448c4.firebasestorage.app",
  messagingSenderId: "185776153197",
  appId: "1:185776153197:web:c4c203fbfd28f2ca8d1564",
  measurementId: "G-DCLZWG3C3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signUp = async(name,email,password)=>{
    try{
        const res = createUserWithEmailAndPassword(auth,email,password);
        const user = (await res).user;
        await addDoc(collection(db,'user'),{
            uid:user.uid,
            name,
            authProvider:'local',
            email
        })
    }catch(err){
        console.log(err)
    }
}

const login = async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }catch(error){
        console.log(error)
    }
}

const signInWithGoogle = async() =>{
    try{
        const result = await signInWithPopup (auth,googleProvider);
        console.log("user info:",result.user);
        console.log("Name:", result.user.displayName);
        console.log("Email:", result.user.email);
        

    }catch(err){
        console.log(err);
        
    }
}

const logout = ()=>{
    signOut(auth);
}

export{auth,db,login,logout,signUp,googleProvider,signInWithGoogle}