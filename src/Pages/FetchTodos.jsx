import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchTodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTk3Mjk1NTk0fQ.Xy4EyfPPEG1yRQza30Eieyhp1lI5ZejnZv0A16GaCPg";
    const result = await axios({
      method: "GET",
      url: "http://localhost:5001/api/v2/todos",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const resultData = result.data.data.todos;

    console.log(resultData);

    setTodos(resultData);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>ini fetching data todos dari server menggunakan axios</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id} - {todo.title} -{" "}
            <a
              style={{
                color: "red",
              }}
            >
              {todo.isDone ? "Sudah selesai" : "Belum Selesai"}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchTodos;
