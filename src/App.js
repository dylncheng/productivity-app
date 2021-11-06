import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Timer from './Timer'
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
  
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={ <Home /> }>
          </Route>
          <Route path="/timer" element={ <Timer /> }>
          </Route>
        </Routes>
      </header>
    </div>

    
    // <div className="App">
    //   <header className="App-header">
    //     <p>hihihi</p>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="about" element={<About />} />
    //       {/* <Route path="test" element={<Test />} /> */}
    //     </Routes>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}



function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
