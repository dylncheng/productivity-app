import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        if(e.target.value)
            setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(document.getElementById('task') != "")
            setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000}
            ]);
        setInputText('');
    };
    return(
        <form onSubmit={submitTodoHandler}>
            <input 
            id = "task"
            value = {inputText}
            onChange = {inputTextHandler} 
            type="text" 
            className ="todo-input" 
            required
            />
            <button className ="todo-button" type="submit">
                <i className ="fas fa-plus-square"></i>
            </button>
        </form>
       
    );
}

export default Form;