import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log({
    name: form.name,
    address: form.address,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    alert(form.name);
    console.log("submit");
  };

  return (
    <div className="container">
      <h1>Ini adalah form</h1>
      <div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="form-group mb-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) => onChange(e)}
                  className="form-control"
                  placeholder="Type Your name here"
                />
                <div className="form-group mb-2">
                  <label htmlFor="name">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={(e) => onChange(e)}
                    className="form-control"
                    placeholder="Type Your adresses here"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Simpan
                  </button>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </form>
        <h1>Ini adalah data</h1>
        <p>Name: {form.name}</p>
        <p>Adress: {form.address}</p>
      </div>
    </div>
  );
};

export default Form;
