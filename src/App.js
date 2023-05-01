import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import Todos from './components/Todos';

function App() {
  const items = JSON.parse(localStorage.getItem("todos"))
  const [todos, setTodos] = useState(items || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, setTodos]);

  function add(todo) {
    setTodos(prev => [...prev, {
      description: todo,
      completed: false,
      id: Math.floor(Math.random() * 1000),
      editable: false,
    }]);
  }

  function updateCompleted(number) {
    setTodos(prev => {
      return prev.map((each) => {
        if (each.id === number) {
          return {
            ...each,
            completed: !each.completed,
          }
        }
        return each;
      })
    })
  }

  function edit(id, todoText) {
    setTodos(prev => {
      return prev.map((each) => {
        if (each.id === id) {
          return {
            ...each,
            description: todoText,
            editable: !each.editable,
          }
        }
        return each;
      })
    })
    console.log(todos);
  }

  function remove(id) {
    setTodos(prev => {
      return prev.filter((each) => {
        return each.id !== id
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <Form add={add} />
      <Todos todos={todos} updateCompleted={updateCompleted} edit={edit} remove={remove} />
    </div>
  );
}

export default App;
