import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Todos from './components/Todos';

function App() {
  const items = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState(items || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, setTodos]);

  function add(todo) {
    setTodos((prev) => [...prev, {
      description: todo,
      completed: false,
      id: Math.floor(Math.random() * 1000),
      editable: false,
    }]);
  }

  function updateCompleted(number) {
    setTodos((prev) => prev.map((each) => {
      if (each.id === number) {
        return {
          ...each,
          completed: !each.completed,
        };
      }
      return each;
    }));
  }

  function edit(id, todoText) {
    setTodos((prev) => prev.map((each) => {
      if (each.id === id) {
        return {
          ...each,
          description: todoText,
          editable: !each.editable,
        };
      }
      return each;
    }));
  }

  function remove(id) {
    setTodos((prev) => prev.filter((each) => each.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <Form
        add={(text) => add(text)}
      />
      <Todos
        todos={todos}
        updateCompleted={(number) => updateCompleted(number)}
        edit={(id, todoText) => edit(id, todoText)}
        remove={(id) => remove(id)}
      />
    </div>
  );
}

export default App;
