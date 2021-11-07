
import './styles/App.css';
import Home from './components/Home'
import CountdownPage from './components/CountdownPage'
import Timer from './components/Timer'
import Profile from './components/Profile'
import React, { Fragment } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import LoginButton from "./components/login-button";
import LogoutButton from './components/logout-button';
import Profile2 from "./components/profile2";
import ProfButton from './components/profile-button';

function App() {
  return (
  
    <div className="App">
      <Fragment>
        <LoginButton/>
        <LogoutButton/>
        <ProfButton/>
        <Profile2/>
      </Fragment>
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={ <Home></Home> }>
          </Route>
          {/* <Route path="/timer" element={ <Countdown minutes={70} task={"drink coffee"}/> }> */}
          {/* </Route> */}
          <Route path="/timer" element={ <CountdownPage></CountdownPage>}>
          </Route>
          <Route path="/profile" element={ <Profile></Profile> }>
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

export default App;
