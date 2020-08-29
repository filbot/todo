import React, {useState} from 'react';
import './App.css';
import InputComponent from './components/InputComponent';
import TodoListComponent from './components/TodoListComponent';

function App() {
  return (
    <div className="App">
      <header>CLI ToDo</header>
      <InputComponent />
      <TodoListComponent />
    </div>
  );
}

export default App;
