import './App.css';
import { BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import { Home } from './pages/Home';
// import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { Profile } from './pages/Profile';
import {useState} from 'react';
function App() { 
  const [username,setUsername]=useState("Om");
  return <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home username={username}/>} />
        <Route path="/profile" element={<Profile username={username} setUsername={setUsername}/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<h1>Page Not Found</h1>}/>
      </Routes>
    </Router>
  </div>;
}

export default App;
