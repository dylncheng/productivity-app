import React from 'react';

const Todo = ({text, minute, hour}) => {

    return (
        <div>
            {/* displaying text */}
            <div className = "todo">
                <li className="todo-item">Task: {text}</li>
                <li className="todo-item">{hour} hour(s) and {minute} minute(s)</li>
            </div>
        </div>
    );
}

export default Todo; 