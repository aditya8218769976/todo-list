import React, { useEffect } from "react";
import "../todoForm/TodoForm.css";
import uuid from "react-uuid";

const TodoForm = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((item) => {
      return item.id === id ? { title, id, completed } : item;
    });

    console.log(newTodo, "newTodo");
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [editTodo, setInput]);

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const inputSubmitHandler = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuid(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={inputSubmitHandler}>
      <div className="form-container">
        <input
          value={input}
          required
          onChange={inputChangeHandler}
          type="text"
          placeholder="Enter what to do"
        />
        <button type="submit">{editTodo ? "Update" : "ADD"}</button>
      </div>
    </form>
  );
};

export default TodoForm;
