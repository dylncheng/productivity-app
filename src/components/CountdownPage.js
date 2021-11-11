
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

// function Countdown(props) {
//   const intervalRef = useRef(null);
  
// //   const [timer, setTimer] = useState('00:00:00');
  
//   function getTimeRemaining(endtime){
//     const total = Date.parse(endtime) - Date.parse(new Date());
//     const seconds = Math.floor( (total/1000) % 60);
//     const minutes = Math.floor( (total/1000)/60 % 60);
//     const hours = Math.floor( (((total / 1000)/60)/60)% 24);
//     return {
//       total, hours, minutes, seconds
//     };
//   }

//   function startTimer(deadline){
//     let {total, hours, minutes, seconds} = getTimeRemaining(deadline);
//     if (total >= 0){
//       setTimer(
//         (hours > 9 ? hours : '0' + hours) + ':' +
//         (minutes > 9 ? minutes : '0' + minutes) + ':' + 
//         (seconds > 9 ? seconds : '0' + seconds)
//       )
//     } else {
//       clearInterval(intervalRef.current);
//     }
//   }
  
//   function clearTimer (endtime) {
//     // if(timer == '00:00:00')
//     //     setTimer(getInitialTime());
//     // else clearInterval(intervalRef.current);
//     console.log("intervalRef.current: " + intervalRef.current)
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     const id = setInterval(() => {
//       startTimer(endtime);
//     }, 1000)
//     intervalRef.current = id;
//   }

//   function getDeadlineTime() {
//     let deadline = new Date();


//     for (let i = 0; i < props.minutes; i++){
//       deadline.setSeconds(deadline.getSeconds() + 60);
//     }
//     return deadline;
//   }

//   function stringToTime(time_t) {
//     let timeArray = time_t.split(":")
//     for(let i = 0; i < timeArray.length; i++) {
//         timeArray[i] = Number(timeArray[i]);
//     }
//     let seconds = (timeArray[0] * 60 * 60) + (timeArray[1] * 60) + timeArray[2];

//     let t = new Date();

//     t.setSeconds(seconds);

//     return t;
//   }


//   function getInitialTime() {
//     let deadline = getDeadlineTime();
//     let {total, hours, minutes, seconds} = getTimeRemaining(deadline);
   
//     hours = hours > 9 ? hours : '0' + hours;
//     minutes = minutes > 9 ? minutes : '0' + minutes;
//     seconds = seconds > 9 ? seconds : '0' + seconds;
//     let time = hours + ':' + minutes + ':' + seconds;

//     return time

//   }

//   function start() {
//     let timeRemaining = stringToTime(timer);
//     clearTimer(timeRemaining);
//   }

//   function pause() {
//     clearInterval(intervalRef.current);
//   }

//   const [timer, setTimer] = useState(getInitialTime());

//   useEffect(() => {
//     clearTimer(getDeadlineTime());
//     console.log('hi');
//     return () => {if(intervalRef.current) clearInterval(intervalRef.current)}
//   },[]);

//   return (
//     <div className="Countdown">
//       <h1>{timer}</h1>
//       <h2>task: {props.task}</h2>
//         <div className="buttons">
//             <button onClick={start}></button>
//             <button onClick={pause}></button>
//         </div>
//     </div>
//   );
// }

// export default Countdown;