import { Navigate } from 'react-router-dom'
import React, {useState} from 'react';
import Form from './Form';
import TodoList from './TodoList';
import '../styles/Home.css'
import { render } from "@testing-library/react";



function Home() {

  
  const[inputText, setInputText] = useState("");
  const[inputHours, setHours] = useState(""); 
  const[inputMinutes, setMinutes] = useState(""); 
  const[todos, setTodos] = useState([]);

  function handleClick() {
    console.log('hi');
    return <Navigate to="/timer"></Navigate>;
  }

  return (
    <div className="Home">
      <header>
        <h1>TASK</h1> <button onClick={handleClick}>Let's get Started</button>
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