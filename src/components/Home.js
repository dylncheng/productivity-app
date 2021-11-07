import { useNavigate, Navigate } from 'react-router-dom'
import React, {useState} from 'react';
import Form from './Form';
import TodoList from './TodoList';
import '../styles/Home.css'
import { render } from "@testing-library/react";



function Home() {

  
  const[inputText, setInputText] = useState('');
  const[inputHours, setHours] = useState(''); 
  const[inputMinutes, setMinutes] = useState(''); 
  const[todos, setTodos] = useState([]);

  const navigate = useNavigate()

  return (
    <div className="Home">
      <header>
        <h1>TASK</h1> <button onClick={() => navigate('/timer', { state: {todos} })}>Start the Timer</button>
      </header>
      <Form inputText = {inputText}
          todos={todos} 
          inputText={inputText}
          inputHours={inputHours}
          inputMinutes={inputMinutes}
          setTodos={setTodos} 
          setInputText={setInputText}
          setInputHours={setHours}
          setInputMinutes={setMinutes}/>
      <TodoList todos = {todos}/>
    </div>
  );
}

export default Home;
// function handleClick() {
// }

// function Home() {
//   return (
//     <div className="Home">

//      <h1>
//        Task
//      </h1>
//     <form onSubmit={handleClick}>
//       <input type="text" name="name"></input>
//     </form>

//     </div>
//   );
// }

// export default Home;