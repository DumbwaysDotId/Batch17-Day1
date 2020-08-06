import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const About = () => {
  const themes = useContext(ThemeContext);
  const [count, setCount] = useState(100);
  const [randomNumber, setRandomNumber] = useState(0);
  const [data, setdata] = useState("");
  const [dataJson, setDataJson] = useState([]);

  useEffect(() => {
    setRandomNumber(parseInt(Math.random() * 100));
  }, [count]);

  useEffect(() => {
    setdata("Ini adalah yang dikirim dari use Effect");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setDataJson(json));

    return () => {}; //cleanup function
  }, []);

  return dataJson.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>Ini adalah about page</h1>
      <h2>{themes.title}</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 100)}>Click Me</button>
      <h1>Random Number</h1>
      <p>{randomNumber}</p>

      <h1>Data</h1>
      {dataJson.map((json) => (
        <p key={json.id}>
          {json.title} {json.id}
        </p>
      ))}
    </div>
  );
};

export default About;
