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
        <img src="assets/spinning-skull.gif" alt="spinning skull" />
        Warez Todo List
        <img src="assets/spinning-skull.gif" alt="spinning skull" />
      </header>
      <marquee>Welcome to my homepage!</marquee>
      {/* <img src="assets/fire.gif" alt="file" /> */}
      <InputComponent inputText={inputText} setInputText={setInputText} todoListData={todoListData} setTodoListData={setTodoListData} />
      <TodoListComponent todoListData={todoListData} setTodoListData={setTodoListData} />
      <footer><img src="assets/under-construction.gif" alt="under contruction" /></footer>
    </div>
  );
}

export default App;
