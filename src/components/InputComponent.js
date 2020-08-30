import React from 'react';
import {nanoid} from 'nanoid';

const InputComponent = ({inputText, setInputText, setTodoListData, todoListData}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const addButtonHandler = (e) => {
        e.preventDefault();
        setTodoListData([...todoListData, {todo: inputText, completed: false, id: nanoid()}]);
        setInputText('');
    }
    return(
        <div className="form-container">
        <form>
            <input value={inputText} onChange={inputTextHandler}></input>
            <button onClick={addButtonHandler}>Add</button>
        </form>
        </div>
    )
};

export default InputComponent;