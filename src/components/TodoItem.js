import React from 'react';

const TodoItem = ({text}) => {
    return(
        <li className="todo-item">
            <span>{text}</span>
            <button>Completed</button>
            <button>Remove</button>
        </li>
    )
}

export default TodoItem;