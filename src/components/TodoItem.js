import { useState } from 'react';
import PropTypes from 'prop-types';

function TodoItem({
  todo, updateCompleted, edit, remove,
}) {
  const [todoText, setTodoText] = useState();

  function handleClick() {
    if (!todo.editable) {
      updateCompleted(todo?.id);
    }
  }

  function handleRemoveClick() {
    remove(todo?.id);
  }

  function handleEditClick() {
    setTodoText(todo.description);
    edit(todo?.id, todoText);
  }

  return (
    <li className="todoItem">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleClick}
      />
      {todo.editable
        ? (
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        )
        : (
          <p
            className={todo.completed ? 'task completed' : 'task'}
          >
            {todo.description}
          </p>
        )}
      <button
        type="button"
        className="edit"
        onClick={handleEditClick}
      >
        {todo.editable ? 'Save' : 'Edit'}
      </button>
      <button
        type="button"
        className="delete"
        onClick={handleRemoveClick}
      >
        Delete
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    editable: PropTypes.bool,
    id: PropTypes.number,
    description: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  updateCompleted: PropTypes.func.isRequired,
};

export default TodoItem;
