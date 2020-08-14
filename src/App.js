import React, { useState, Component, useContext } from "react";
import "./App.css";

//Import Setup Router
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

//Import Pages To Routing
import PrivatePages from "./Pages/PrivatePage";
import Todos from "./Pages/Todos";
import Increment from "./Pages/Increment";
import ListObject from "./Pages/listObject";
import About from "./Pages/About";
import Form from "./Pages/Form";
import Detail from "./Pages/Details";
import FetchTodos from "./Pages/FetchTodos";
import TodosReactQuery from "./Pages/TodosReactQuery";

import Navbar from "./Components/Header";

import { ThemeContext } from "./Context/ThemeContext";

const themes = {
  LIGHT: "AKU UBAH NIH",
  RED: "red",
  title: "ini adalah cara untuk belajar context",
  objectLiteral: {
    id: 1,
    name: "title",
  },
};

class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value={themes}>
        <Router>
          <div className="App">
            <Navbar />

            <Switch>
              <Route path="/about" component={About} />

              <Route path="/form" component={Form} />

              <Route path="/details/:id" component={Detail} />

              <Route path="/fetch-todos" component={FetchTodos} />

              <Route path="/todos-react-query" component={TodosReactQuery} />

              <Route path="/Todos">
                <Todos />
              </Route>

              <Route path="/Increment">
                <Increment />
              </Route>

              <Route path="/ListObject">
                <ListObject />
              </Route>

              <Route path="/">
                <PrivatePages />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeContext.Provider>
    );
  }
}

// function Header(props){
//     return(
//         <div>
//             <h1>{props.title}</h1>
//         </div>
//     )
// }

// import PrivatePage from './Pages/PrivatePage';
// import GuestPage from './Pages/GuestPages';

// function App(){
//   const [isLoggedin] = useState(false);
//   return(
//     <div>
//       { isLoggedin ? <PrivatePage />  : <GuestPage />}
//     </div>
//   )
// }

const fakeAuth = {
  isAuthenticate: false,
  Authenticated(cb) {
    fakeAuth.isAuthenticate = true;
    setTimeout(cb, 100); //fake Async
  },
  signOut(cb) {
    fakeAuth.isAuthenticate = false;
    setTimeout(cb, 100); //Logout
  },
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticate ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}

export default App;
