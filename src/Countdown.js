import './App.css';
import {useState, useRef, useEffect} from "react"

function App(props) {
  const intervalRef = useRef(null);
  
  const [timer, setTimer] = useState('00:00:00');
  
  function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60);
    const minutes = Math.floor( (total/1000)/60 % 60);
    const hours = Math.floor( (((total / 1000)/60)/60)% 24);
    return {
      total, hours, minutes, seconds
    };
  }

  function startTimer(deadline){
    let {total, hours, minutes, seconds} = getTimeRemaining(deadline);
    if (total >= 0){
      setTimer(
        (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ':' + 
        (seconds > 9 ? seconds : '0' + seconds)
      )
    } else {
      clearInterval(intervalRef.current);
    }
  }
  
  function clearTimer (endtime) {
    // setTimer('00:00:00');
    if (intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000)
    intervalRef.current = id;
  }

  function getDeadlineTime() {
    let deadline = new Date();

    for (let i = 0; i < props.minutes; i++){
      deadline.setSeconds(deadline.getSeconds() + 60);
    }
    return deadline;
  }

  useEffect(() => {
    clearTimer(getDeadlineTime());
    return () => {if(intervalRef.current) clearInterval(intervalRef.current)}
  },[]);

  return (
    <div className = "App">
      <h1>{timer}</h1>
      <h2>task: {props.task}</h2>
      <button></button>
      <button></button>
    </div>
  );
}

export default App;