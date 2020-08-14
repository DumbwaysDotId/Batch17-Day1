import React from "react";

const Input = ({ form, handleChange, handleSubmit }) => {
  return (
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
  );
};

export default Input;
