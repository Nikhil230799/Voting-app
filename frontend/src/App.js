import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Adminpage from './component/Adminpage';
// import Context from './component/Context';
// import Context from './component/Context';
import Home from "./component/Home";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Register from "./component/Register";
import Voterdetails from './component/Voterdetails';


function App() {
  return (
 
    <div>
      
     <Router>
     <Routes>
        <Route path="/" element={<><Navbar /><Home/></>} />
        <Route path="/login" element={<><Navbar /><Login/></>} />
        <Route path="/register" element={<><Navbar /><Register/></>} />
        <Route path="/adminlogin" element={<><Navbar /><Adminpage/></>} />
        <Route path="/adminhome" element={<><Navbar /><Voterdetails/></>} />

  
        </Routes>
     </Router>
     
    </div>

  );
}

export default App;
