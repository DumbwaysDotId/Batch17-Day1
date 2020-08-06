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
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Todos">Todos</Link>
                </li>
                <li>
                  <Link to="/Increment">Increment</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/form">Form</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/about" component={About} />

              <Route path="/form" component={Form} />

              <Route path="/details/:id" component={Detail} />

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
