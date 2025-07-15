
import { React} from "react";
import { Routes,Route } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx'
import Player from "./Pages/Player/Player.jsx";

function App (){
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