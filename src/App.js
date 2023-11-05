import './App.css';
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";


import Home from './pages/Home';
import About from './pages/About';
import v1 from "./images/v1.png"
import v2 from "./images/v2.png"
import page from "./images/page.png"
import about from "./images/about.png"
import indexx from "./images/indexx.png"
import imgg from "./images/imgg.png"
import compp from "./images/compp.png"
import link from "./images/link.png"

function App() {


  return (
    <div className="App">
      <div class="post">
        <div class="post-header">
          <h1 class="post-title">Axios and React Router Dom library</h1>
   
        </div>

        <div class="post-content">
          <p>What is Axios?</p>
        </div>
        <div className='ans'>
          <p >Axios is a promise-based HTTP library that lets developers make <br></br>requests to  their own  or a third-party server to fetch data.
          </p>

        </div>

        <div>
          <h1>installation</h1>
          
          <pre>
          npm install axios;
          </pre>
        </div>
        <div className='codimg1'>
          <img src={v1} alt="React Image" />
        </div>

        <div class="post-content">
          <p>What is React Router Dom?</p>
        </div>
        <div className='ans'>
          <p >The primary functionality of react-router-dom is implementing <br></br>dynamic routing in web applications.</p>

        </div>

        <div>
          <h1>installation</h1>
          
          <pre>
          npm install react-router-dom;
          </pre>
        </div>
        <div className='codimg2'>
          <img src={v2} alt="React Image" />
        </div>
        <div class="post-content">
          <p>Setup?</p>
          <h5>1. create new folder with the name of pages inside src folder</h5>
          <img src={page} alt="React Image" /> 

          <h5>2. inside pages directory create Home.jsx & About.jsx component</h5>     
          <img src={about} alt="React Image" />

          <h5>3. wrap whole application into &lt; BrowserRouter &gt; in file (index.js)</h5>
          <h6>first import &#123; BrowserRouter &#125; from "react-router-dom";</h6>
          <img src={indexx} alt="React Image" />

          <h5> 4. import two components from react router dom &#123; Routes, Route &#125; in App.js</h5>
          <div className='codimg2'><img src={imgg} alt="React Image" /></div>
          

          <h5>5. Then create two components into pages in App.js</h5>
          <div className='codimg2'><img src={compp} alt="React Image" /></div>
          

          <h5>5. To make links with two pages write in App.js</h5>
          <div className='codimg2'><img src={link} alt="React Image" /></div>
          
        </div>


        <div class="post-footer">
          <p>Posted by: ShafaUllah Malik</p>
        </div>
      </div>
      <h4>Example</h4>

      <Link to="/home">Home</Link> -<Link to="/about">About</Link>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <h1>Footer</h1>



    </div>
  )
}

export default App;
