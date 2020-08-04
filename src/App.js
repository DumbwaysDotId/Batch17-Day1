import React,{Component} from 'react';
import './App.css';

import Header from './Components/Header';
import Content from './Components/Content';
import Test from './Pages/Test';

// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <Header />
//         <Content/>
//         <Test/>
//       </div>
//     )
//   }
// }

function App(){
  return(
    <div className="App">
      <Header />
      <Content />
      <Test />
    </div>
  )
}

export default App;
