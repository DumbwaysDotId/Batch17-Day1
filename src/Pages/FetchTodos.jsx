import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "../Components/Todos/List";
import Input from "../Components/Todos/Input";

const FetchTodos = () => {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState({
    title: "",
    isDone: 0,
  });

  const getTodos = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTk3Mjk1NTk0fQ.Xy4EyfPPEG1yRQza30Eieyhp1lI5ZejnZv0A16GaCPg";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const result = await axios.get(
      "http://localhost:5001/api/v2/todos",
      config
    );
    const resultData = result.data.data.todos;

    console.log(resultData);

    setTodos(resultData);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    const result = await axios.post("http://localhost:5001/api/v2/todo", form);
    setTodos([...todos, result.data.data.todo]);
    setForm({
      title: "",
      isDone: 0,
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5001/api/v2/todo/${id}`);

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>Todos List Axios</h1>
      <Input
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {!todos ? (
        <h1>Loading...</h1>
      ) : (
        <List todos={todos} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default FetchTodos;
