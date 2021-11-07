import React, { useEffect, useState, useRef } from 'react';

const Timer = (props) => {
    // const [timerSeconds, setTimerSeconds] = useState(() => {return 0});
    // const [timerMinutes, setTimerMinutes] = useState(() => {return props.minutes});
    // const [timerHours, setTimerHours] = useState(() => {return props.hours});
    const [timerSeconds, setTimerSeconds] = useState(() => {return 60});

    const changeTimer = () => {
        let seconds = timerSeconds - 1;
        setTimerSeconds(seconds);

        if(seconds === 0) {
            clearInterval(timerSeconds)
        }
        // setTimerSeconds(prevCount => prevCount - 1);
        // setTimerMinutes(timerMinutes - 1);
        // setTimerHours(timerHours - 1);
    }

    setInterval(() => {
        changeTimer();
    }, 1000);


    return(
        <div className="Timer">
            <h1>This is a timer for {timerSeconds} seconds</h1>
        </div>
    );


}

  export default Timer;