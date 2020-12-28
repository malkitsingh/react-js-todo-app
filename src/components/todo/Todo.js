import React from "react";

function Todo({ todo, todos, setTodos }) {
  const trashHandler = () => {
    setTodos(
      todos.filter((ele) => {
        return ele.id !== todo.id;
      })
    );
  };

  const completeHandler = () => {
    setTodos(
      todos.map((it) => {
        if (it.id === todo.id) {
          return { ...it, isCompleted: !it.isCompleted };
        } else {
          return it;
        }
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={trashHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
