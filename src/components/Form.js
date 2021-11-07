import React from 'react';

const Form = ({setInputText,todos,setTodos,inputText, inputHours, setInputHours, inputMinutes, setInputMinutes}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const inputHoursHandler = (e) => {
        setInputHours(e.target.value);
    }
    const inputMinutesHandler = (e) => {
        setInputMinutes(e.target.value);
    }
    const submitTodoHandler = (e) => {
        (e).preventDefault(); 
        setTodos([
            ...todos, {text: inputText, hours: inputHours, minutes: inputMinutes, id: Math.random() * 1000},
        ]);
        setInputText("");
        setInputHours("");
        setInputMinutes("");
    }

    return(
        <form onSubmit={submitTodoHandler}>
            <div>
                <input 
                    value={inputText} 
                    placeholder="Add a Task:" 
                    onChange = {inputTextHandler} 
                    type="text" 
                    required
                    className ="todo-input" />
            </div>

            <div>
                <input 
                    value={inputHours} 
                    placeholder="Hours:" 
                    onChange = {inputHoursHandler} 
                    type="number" 
                    className ="todo-input" />
            </div>
            
            <div>
                <input 
                    value={inputMinutes} 
                    placeholder="Minutes:" 
                    onChange = {inputMinutesHandler} 
                    type="number" 
                    className ="todo-input" />
            </div>

            <button onClick={submitTodoHandler} className ="todo-button" type="submit">
                <i className ="fas fa-plus-square"></i>
            </button>
        </form>
    );
}

export default Form;