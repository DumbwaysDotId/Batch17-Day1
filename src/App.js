import React,{Component} from 'react';
import './App.css';

import Header from './Components/Header';
import Content from './Components/Content';
import Test from './Pages/Test';
import ListProps from './Pages/ListProps';
import Increment from './Pages/Increment';

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
      <Header propertiku="Ini header menggunakan Props"/>
      <Content />
      <ListProps />
      <Increment />
      <Test />
    </div>
  )
}

export default App;
