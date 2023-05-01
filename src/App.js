import './App.css';
import Header from './components/header';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  function add(todo) {
    setTodos(prev => [...prev, todo]);
  }

  return (
    <div className="App">
      <Header />
      <Form add={add} />
    </div>
  );
}

export default App;
