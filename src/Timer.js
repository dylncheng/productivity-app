import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: null,
        }
    }
    render() {
        return(
            <div className="Timer">
        
                <h1>This is a timer for {this.state.time} seconds</h1>
        
            </div>
        );
    }
  }
  
  export default Timer;