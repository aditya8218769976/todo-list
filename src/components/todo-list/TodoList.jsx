import React from "react";
import "../../components/todo-list/Todolist.css";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const editHandler = ({ id }) => {
    const findTodos = todos.find((item) => item.id === id);
    setEditTodo(findTodos);
  };

  const deleteHandler = ({ id }) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="todolist-container">
      {todos.map((item) => (
        <li className="todolist-li" key={item.id}>
          <input
            type="text"
            value={item.title}
            onChange={(e) => e.preventDefault()}
          />

          <button onClick={() => editHandler(item)} className="btn-edit">
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <button onClick={() => deleteHandler(item)} className="btn-delete">
            <i className="fa-solid fa-trash"></i>
          </button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
