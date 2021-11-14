import React from 'react';

function CountComponent(props) {
    let hours = props.hours > 9 ? hours : '0' + hours;
    let minutes = props.minutes > 9 ? minutes : '0' + minutes;
    let seconds = props.seconds > 9 ? seconds : '0' + seconds;
    return(
        <h1>{hours}:{minutes}:{seconds}</h1>
    );
}

export default CountComponent;

//count