import React from "react";
import Todo from "../todo/Todo";

function TodoList({ todos, setTodos,filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
