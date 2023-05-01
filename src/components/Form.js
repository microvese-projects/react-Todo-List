import React, { useState } from "react";

const Form = ({
  add,
}) => {
  const [task, setTask] = useState("");

  function handleOnChange(e) {
    setTask(() => {
      if (e.target.value) {
        return e.target.value;
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    add(task)
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Enter task description:</label>
      <input type="text" id="task" onChange={handleOnChange} value={task} required />
      <button type="submit">+</button>
    </form>
  )
}

export default Form;