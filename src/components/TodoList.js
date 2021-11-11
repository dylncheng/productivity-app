import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {

    return (
        <div className ="todo-container">
            <ul className ="todo-list">
                {todos.map(todo => (
                    <Todo 
                        key={todo.id}
                        text={todo.text} 
                        hours={todo.hours} 
                        minutes={todo.minutes} /> 
                ))}
            </ul>
        </div>
    );
};

export default TodoList