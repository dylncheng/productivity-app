import React from "react";

const Todo = ({text}) => {
    return(
        <div className = "todo">
            <li className = "todo-item">{text}</li>
        </div>
    );
}

export default Todo;