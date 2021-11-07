
import './styles/App.css';
import Home from './components/Home'
import Countdown from 'react-countdown-now'
import Timer from './components/Timer'
import CountComponent from './components/CountComponent'
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
  
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={ <Home /> }>
          </Route>
          {/* <Route path="/timer" element={ <Countdown minutes={70} task={"drink coffee"}/> }> */}
          {/* </Route> */}
          <Route path="/timer" element={ 
            <Countdown date={Date.now() + 100000000 } 
                autoStart={false} 
                renderer={ props => <div>{(props.hours>9?props.hours:'0'+props.hours)}:{(props.minutes>9?props.minutes:'0'+props.minutes)}:{(props.seconds>9?props.seconds:'0'+props.seconds)}</div> }>
            </Countdown> }>
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
