import { React, useRef, useState } from "react";
import "../../components/todo-list/Todolist.css";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const [dragList, setDragList] = useState(todos);

  console.log(todos, "todos");

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  // console.log(dragStart, "dragstart...");

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
  // console.log(dragEnter, "dragEnter...");

  const applyDragandDropHandler = () => {
    const copyDragListItem = [...dragList];
    const dragItemContent = copyDragListItem[dragItem.current];
    copyDragListItem.splice(dragItem.current, 1);
    copyDragListItem.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;

    setDragList(copyDragListItem);
    console.log(copyDragListItem, "copyDragListItem...");
  };

  const editHandler = ({ id }) => {
    const findTodos = todos.find((item) => item.id === id);
    setEditTodo(findTodos);
  };

  console.log("hello");
  const deleteHandler = ({ id }) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  console.log(todos, "todos.....");
  return (
    <div className="todolist-container">
      {dragList &&
        dragList.map((item, index) => (
          <li
            className="todolist-li"
            key={index}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnd={applyDragandDropHandler}
            draggable
          >
            {
              <input
                type="text"
                value={item.title}
                onChange={(e) => e.preventDefault()}
              />
            }

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
