import React, {useState} from 'react';
import './App.css';
import InputComponent from './components/InputComponent';
import TodoListComponent from './components/TodoListComponent';

function App() {
  const [inputText, setInputText] = useState('');
  const [todoListData, setTodoListData] = useState([]);
  return (
    <div className="App">
      <header>
        WYAO
      </header>
      <InputComponent inputText={inputText} setInputText={setInputText} todoListData={todoListData} setTodoListData={setTodoListData} />
      <TodoListComponent todoListData={todoListData} setTodoListData={setTodoListData} />
    </div>
  );
}

export default App;
