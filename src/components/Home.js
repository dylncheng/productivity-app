import { Link } from "react-router-dom";
import React, {useState} from 'react';
import Form from './Form';
import TodoList from './TodoList';
import '../styles/Home.css'
import { render } from "@testing-library/react";



function Home() {

  const[inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>TO DO LIST</h1>
      </header>
      <Form inputText = {inputText}
          todos = {todos} 
          setTodos = {setTodos} 
          setInputText = {setInputText} />
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