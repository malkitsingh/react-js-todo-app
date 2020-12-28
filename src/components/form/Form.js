import React from "react";

function Form({ setInputText, todos, setTodos, inputText, status, setStatus }) {
  const handleInputKeyPress = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        isCompleted: false,
        text: inputText,
        id: Math.random() * 1000,
      },
    ]);

    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        className="todo-input"
        onChange={handleInputKeyPress}
        value={inputText}
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
