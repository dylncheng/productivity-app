import React, {useState} from 'react';

const Form = ({setInputText,todos,setTodos,inputText, inputHours, setInputHours, inputMinutes, setInputMinutes}) => {
    const [error, setError] = useState('')
    

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const inputHoursHandler = (e) => {
        setInputHours(e.target.value);
    }
    const inputMinutesHandler = (e) => {
        if(e.target.value === null) {
            setInputMinutes(0);
            return;
        }
        setInputMinutes(e.target.value);
    }
    const submitTodoHandler = (e) => {
        (e).preventDefault(); 

        if(inputText == "") {
            setError("Enter a task before submitting");
            return;
        } else if((!inputHours && !inputMinutes )||(inputHours == 0 && inputMinutes == 0)) {
            setError("Enter a valid amount of time");
            return;
        } else if(inputHours < 0 || inputMinutes < 0) {
            setError("Values must be positive")
            return;
        }

        if(!inputMinutes) {
            inputMinutes = 0;
        } else if(!inputHours) {
            inputHours = 0;
        }
            

        setTodos([
            ...todos, {text: inputText, hours: inputHours, minutes: inputMinutes, id: Math.random() * 1000},
        ]);
        setError("")
        setInputText("");
        setInputHours("");
        setInputMinutes("");
    }

    return(
        <>
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
                        min="0"
                        className ="todo-input" />
                </div>
                
                <div>
                    <input 
                        value={inputMinutes} 
                        placeholder="Minutes:" 
                        onChange = {inputMinutesHandler} 
                        type="number" 
                        min="0"
                        className ="todo-input" />
                </div>

                <button onClick={submitTodoHandler} className ="todo-button" type="submit">
                    <i className ="fas fa-plus-square"></i>
                </button>
            </form>
            <p className="error">{error}</p>
        </>
    );
}

export default Form;