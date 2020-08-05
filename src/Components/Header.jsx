import React, {Component} from 'react';

//Import Setup Router
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';


//Import Pages To Routing
import PrivatePages from '../Pages/PrivatePage';
import Todos from '../Pages/Todos';
import Increment from '../Pages/Increment';

class Header extends Component {
    render(){
      return(
        <Router>
          <div className="App">
            <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/Todos">Todos</Link></li>
                  <li><Link to="/Increment">Increment</Link></li>
                </ul>
              </nav>

                <Switch>
                  <Route path="/Todos">
                      <Todos />
                  </Route>

                  <Route path="/Increment">
                      <Increment />
                  </Route>

                  <Route exact path="/">
                      <PrivatePages />
                  </Route>
                </Switch>
          </div>
        </Router>
      )
    }
  }

// function Header(props){
//     return(
//         <div>
//             <h1>{props.title}</h1>
//         </div>
//     )
// }

  export default Header