import React from 'react';

const Todo = ({text, minutes, hours}) => {

    return (
        <div>
            {/* displaying text */}
            <div className = "todo">
                <li className="todo-item">Task: {text}</li>
                <li className="todo-item">{hours} hour(s) and {minutes} minute(s)</li>
            </div>
        </div>
    );
}

export default Todo; 