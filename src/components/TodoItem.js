import React from 'react';

const TodoItem = ({text, todoListData}) => {
    const completedHandler = (e) => {
        e.target.parentElement.classList.toggle('completed');
    }
    return(
        <li className="todo-item">
            <button onClick={completedHandler}>Completed</button>
            <span>{text}</span>
            <button>Remove</button>
        </li>
    )
}

export default TodoItem;