import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const List = ({ todos, handleDelete }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={todo.id}
        >
          <a>
            {todo.title} -{" "}
            <a className={todo.isDone ? "text-success" : "text-danger"}>
              {todo.isDone ? "Completed" : "Is Not Done Yet"}
            </a>
          </a>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(todo.id)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
