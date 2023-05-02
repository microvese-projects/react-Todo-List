import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function Todos({
  todos, updateCompleted, edit, remove,
}) {
  const elements = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      updateCompleted={updateCompleted}
      edit={edit}
      remove={remove}
      todo={todo}
    />
  ));
  return (
    <ul className="todoItems-container">
      {elements}
    </ul>
  );
}

Todos.propTypes = {
  todos: PropTypes.shape([PropTypes.array]).isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  updateCompleted: PropTypes.func.isRequired,
};

export default Todos;
