import { useState, useEffect } from "react";

import "./App.css";
import Form from "./components/form/Form";
import TodoList from "./components/todoList/TodoList";

function App() {
  // state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");

  //handlers and other functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(
          todos.filter((todo) => {
            return todo.isCompleted === true;
          })
        );
        break;
      case "uncompleted":
        setFilteredTodos(
          todos.filter((todo) => {
            return todo.isCompleted === false;
          })
        );
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") == null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  // run effect just once

  useEffect(() => {
    getLocalTodos();
  }, []);

  // effects
  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [status, todos]);

  return (
    <div className="App">
      <header>
        <h1>Malkit's Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        status={status}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
