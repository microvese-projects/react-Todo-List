import React from "react";
import TodoItem from "./TodoItem";

function Todos({
  todos, updateCompleted, edit, remove,
}) {
  const elements = todos.map(todo => <TodoItem key={todo.id} updateCompleted={updateCompleted} edit={edit} remove={remove} todo={todo} />);
  return (
    <ul className="todoItems-container">
      {elements}
    </ul>
  )
}

export default Todos;