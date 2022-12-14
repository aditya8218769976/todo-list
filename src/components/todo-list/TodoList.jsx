import React, { useState } from "react";
import "../../components/todo-list/Todolist.css";
import { useRef } from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const [dragList, setDragList] = useState([todos]);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const applyDragandDropHandler = (e) => {
    const copyDragListItem = [...dragList];
    const dragItemContent = copyDragListItem[dragItem.current];
    copyDragListItem.splice(dragItem.current, 1);
    copyDragListItem.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;

    console.log(copyDragListItem, "copyDragListItem...");
    setDragList(copyDragListItem);
  };

  const editHandler = ({ id }) => {
    const findTodos = todos.find((item) => item.id === id);
    setEditTodo(findTodos);
  };

  console.log("hello");
  const deleteHandler = ({ id }) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="todolist-container">
      {dragList &&
        dragList.map((item) => (
          <li
            className="todolist-li"
            key={item.id}
            onDragStart={(e) => dragStart(e, id)}
            onDragEnter={(e) => dragEnter(e, id)}
            onDragOver={(e) => e.preventDefault()}
            draggable
            onDragEnd={applyDragandDropHandler}
          >
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
