import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({
  add,
}) => {
  const [task, setTask] = useState('');

  function handleOnChange(e) {
    setTask(() => {
      if (!e.target.value) {
        return '';
      }
      return e.target.value;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    add(task);
    setTask('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">
        <span>Enter task description:</span>
        <input type="text" id="task" onChange={handleOnChange} value={task} required />
      </label>
      <button type="submit">+</button>
    </form>
  );
};

Form.propTypes = {
  add: PropTypes.func.isRequired,
};
export default Form;
