import React from 'react';
import TodoItem from './TodoItem';

const TodoListComponent = ({todoListData}) => {
    return(
        <ul className="todo-list">
            {todoListData.map(todo => (
                <TodoItem text={todo.todo} key={todo.id} />
            ))}
        </ul>
    )
}

export default TodoListComponent;