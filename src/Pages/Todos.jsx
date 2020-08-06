import React, { Components } from "react";
import "../App.css";
import { Component } from "react";
import ListTodo from "../Components/ListTodo";
import { Link } from "react-router-dom";

import { ThemeContext } from "../Context/ThemeContext";

const cards = [
  {
    id: 1,
    title: "Card1",
  },
  {
    id: 2,
    title: "Card2",
  },
  {
    id: 3,
    title: "Card3",
  },
  {
    id: 4,
    title: "Card4",
  },
  {
    id: 5,
    title: "Card3",
  },
  {
    id: 6,
    title: "Card4",
  },
];

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    this.todoInput = "";
  }

  cek() {
    if (true) {
      if (true) {
        if (true) {
          return "";
        }
      }
    }
  }

  addTodo() {
    let todoValue = this.todoInput.value;
    let newTodos = this.state.todos;

    newTodos.push(todoValue);

    this.setState({
      todos: newTodos,
    });

    //Reset Value
    this.todoInput.value = "";

    //Set Focus to input data
    this.todoInput.focus();
  }

  removeTodo(id) {
    let todos = this.state.todos.filter((todo, index) => {
      return id !== index;
    });

    this.setState({
      todos: todos,
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(themes) => (
          <div className="App-header">
            <h1>Todo App</h1>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridGap: "1rem",
              }}
            >
              {cards.map((card) => (
                <Link to={`details/${card.id}`}>
                  <div
                    style={{
                      backgroundColor: "white",
                      borderColor: "black",
                      padding: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    <h1
                      style={{
                        color: "black",
                      }}
                    >
                      {card.id}
                    </h1>
                    <h2
                      style={{
                        color: "black",
                      }}
                    >
                      {card.title}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
            <p>Todo's Count : {this.state.todos.length}</p>
            <ul>
              {this.state.todos.map((todo, index) => {
                return (
                  <ListTodo
                    id={index}
                    key={index}
                    todo={todo}
                    onRemove={() => this.removeTodo(index)}
                  />
                );
              })}
            </ul>

            <input
              type="text"
              placeholder="Enter Todo"
              ref={(input) => (this.todoInput = input)}
              style={{ marginBottom: 10 }}
            />
            <button onClick={this.addTodo.bind(this)}>Add</button>
            <h1>{themes.LIGHT}</h1>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Todos;
