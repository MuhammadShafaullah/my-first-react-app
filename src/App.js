import './App.css';
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

function App() {


  return (
    <div className="App">
      <h1>All Blog Posts</h1>
      <Link to="/home">Home</Link> -<Link to="/about">About</Link>
     <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path="/about" element={<About />}/>
     </Routes>

     <h1>Footer</h1>
   

     
    </div>
  )
}

export default App;
