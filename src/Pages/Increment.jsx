import React, { Component, useState } from "react";
import "../App.css";

import { ThemeContext } from "../Context/ThemeContext";

// class Increment extends Component{
//     constructor(){
//         super()
//         this.state = {
//             counter : 100
//         }
//     }

//     render() {
//         return (
//             <div className="App">
//                 <p>Click th button to increment ! !</p>

//                 &nbsp;&nbsp;&nbsp;

//                 <Header propertiku={this.state.counter}/>

//                 &nbsp;&nbsp;&nbsp;

//                 <button onClick={()=> this.setState({counter: this.state.counter + 100})} >Hit Me</button>
//             </div>
//         );
//     }
// }

function Increment() {
  const [counter, setCounter] = useState(100);

  return (
    <ThemeContext.Consumer>
      {(warna) => (
        <div className="App-header">
          <p>Click th button to increment ! ! {warna.title}</p>
          &nbsp;&nbsp;&nbsp;
          <p>{counter}</p>
          &nbsp;&nbsp;&nbsp;
          <button onClick={() => setCounter(counter + 100)}> Hit Me</button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Increment;
