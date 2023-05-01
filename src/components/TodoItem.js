import { useState } from "react";

function TodoItem({
  todo, updateCompleted, edit, remove,
}) {

  const [todoText, setTodoText] = useState();

  function handleClick(e) {
    if (!todo.editable) {
      updateCompleted(todo?.id);
    }
  }

  function handleRemoveClick() {
    remove(todo?.id);
  }

  function handleEditClick() {
    setTodoText(todo.description)
    edit(todo?.id, todoText);
  }

  return(
    <li className="todoItem">
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={handleClick} 
      />
      {todo.editable 
        ? 
        <input 
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        /> 
        :
        <p
          className={todo.completed ? "task completed" : "task"} 
          onClick={handleClick}>
            {todo.description}
        </p>}
      <button 
        className="edit" 
        onClick={handleEditClick}
      >
          {todo.editable ? "Save" : "Edit"}
      </button>
      <button 
        className="delete" 
        onClick={handleRemoveClick}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem;