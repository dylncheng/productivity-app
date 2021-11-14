
import React, {useState, useRef, useEffect} from "react"
import { useLocation } from 'react-router-dom'
import CountComponent from "./CountComponent"
import Countdown from 'react-countdown-now'



function CountdownPage(props) {
  const [timer, setTimer] = useState(false);
  const [index, setIndex] = useState(0);

  const { state } = useLocation();
  let todos = state.todos;
  for(let i = 0; i < todos.length; i++) {
    todos[i].id = i;
  }
  let miliseconds = ((todos[index].hours) * 60 * 60 * 1000) + ((todos[index].minutes) * 60 * 1000)
  
  const clockRef = useRef();

  function handleStart () {
    clockRef.current.start();
  }
  function handlePause () {
    clockRef.current.pause();
  }

  // function 

  

  return(
    <>
    <nav>
      <div className="dropdown">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          Tasks
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          
          {todos.map(todo => (
             <li key={todo.id}><a className="dropdown-item" href="#" onClick={() => setIndex(todo.id)}>{todo.text}</a></li>
            ))}
        </ul>
      </div>
    </nav>
    <h2>{todos[index].text}</h2>
     <h1><Countdown date={Date.now() + miliseconds } 
     controlled={false}
     autoStart={timer} 
     ref={clockRef}
     renderer={ props => <div>{(props.hours>9?props.hours:'0'+props.hours)}:{(props.minutes>9?props.minutes:'0'+props.minutes)}:{(props.seconds>9?props.seconds:'0'+props.seconds)}</div>}>
     {/* renderer={() => <div>{(hours>9?hours:'0'+hours)}:{(minutes>9?minutes:'0'+minutes)}:{(seconds>9?seconds:'0'+seconds)}</div>}>   */}
      </Countdown></h1>
      <div className="buttons">
        <button className="play" onClick={handleStart}><i className="fas fa-play"></i></button>
        <button className="pause" onClick={handlePause}><i className="fas fa-pause"></i></button>
      </div>
     </>
     );
}

export default CountdownPage;

