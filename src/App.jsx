
import { React, useEffect} from "react";
import { Routes,Route, useNavigate } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx'
import Player from "./Pages/Player/Player.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";

function App (){

  const navigate = useNavigate();
  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("user logged in");
        navigate('/')
      }else{
        console.log("user logged out");
        navigate('/login')
        
      }
    });
    return () => unsubscribe();
  }, [navigate]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
      
    </div>
  )
}

export default App