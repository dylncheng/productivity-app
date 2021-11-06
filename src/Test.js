import './App.css';
import city from './city.jpg';

function Test() {
  return (
    <div className="Test">
      <header className="Test-header">
		<img src={city} className="city" alt="logo" />
        <h1 className="Title">This is our App</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Test;