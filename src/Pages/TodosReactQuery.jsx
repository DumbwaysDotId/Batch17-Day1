import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useQuery, useMutation, queryCache } from "react-query";

const TodosReactQuery = () => {
  const [form, setForm] = useState({
    title: "",
    isDone: 0,
  });

  const addTodo = async () => {
    const response = await fetch("http://localhost:5001/api/v2/todo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: new Headers({
        "Content-Type": "Application/JSON",
      }),
    }).then(refetch);

    //cara pake form data

    // const formData = new FormData();

    // formData.append('title', form.title);
    // formData.append('isDone', form.isDone);
    // formData.append('attachment', form.attachment);

    // const config = {
    // 	headers: {
    // 		'content-type': 'multipart/form-data'
    // 	}
    // };

    // await axios.post('http://localhost:5001/api/v2/todo', formData, config);

    //===============================

    return response.json();
  };

  const fetchTodoList = async () => {
    const response = await fetch("http://localhost:5001/api/v2/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json();
  };

  const { isLoading, isError, data, error, refetch } = useQuery(
    "todos",
    fetchTodoList
  );

  const [
    handleAddTodo,
    { status, data: responseAddTodo, error: errorAddTodo },
  ] = useMutation(addTodo, {
    onSuccess: () => {
      queryCache.prefetchQuery("todos");
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTk3Mjk1NTk0fQ.Xy4EyfPPEG1yRQza30Eieyhp1lI5ZejnZv0A16GaCPg";

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
  };

  const handleDelete = (id) => {
    console.log("ini adalah delete");
  };

  return (
    <div className="container">
      <h1>Todos menggunakan React Query</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="title">Input todo</label>
          <input
            type="text"
            className="form-control"
            placeholder="What will you di today?"
            value={form.title}
            onChange={(e) => handleChange(e)}
            name="title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="isDone">Is Done?</label>
          <select
            className="form-control"
            value={form.isDone}
            onChange={(e) => handleChange(e)}
            name="isDone"
          >
            <option value="1">Yes Is Done</option>
            <option value="0">Not Yet</option>
          </select>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-block mt-2"
            disabled={form.title === "" ? true : false}
          >
            Add Todo
          </button>
        </div>
      </form>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className="list-group">
          {data.data.todos.map((todo) => (
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
      )}
    </div>
  );
};

export default TodosReactQuery;
