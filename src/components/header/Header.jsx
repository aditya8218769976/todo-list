import React from "react";
import { useState } from "react";
import TodoForm from "../todoForm/TodoForm";
import "../header/Header.css";
import TodoList from "../todo-list/TodoList";
import { useEffect } from "react";

const Header = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div>
          <h1>Todo-List</h1>
        </div>
        <div>
          <TodoForm
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
            editTodo={editTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
