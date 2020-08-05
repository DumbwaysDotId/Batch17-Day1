import React,{Component, useState} from 'react';
import './App.css';

import Header from './Components/Header';
import Content from './Components/Content';
import Test from './Pages/Test';
import ListProps from './Pages/ListProps';
import Increment from './Pages/Increment';
import Todos from './Pages/Todos';
import Internal from './Pages/Internal';
import ListArray from './Pages/listArray';
import ListObject from './Pages/listObject';
import UseBootstrap from './Pages/useBootstrap';

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

function PrivatePage(){
  return(
    <div className="App">
      <Header propertiku="Ini header menggunakan Props"/>
      <Content />
      <ListProps />
      <Increment />
      <Todos />
      <Internal />
      <ListArray />
      <ListObject />
      <UseBootstrap />
      {/* <Test /> */}
    </div>
  )
}

// class GuestPage extends Component{
//   render(){
//     return(
//       <div className="App-header">
//         <h1>Please Sign in</h1>
//       </div>
//     )
//   }
// }

// class App extends Component{
//   render(){
//     const isLoggedin = true;
//     if(isLoggedin){
//       return <PrivatePage />
//     }
//     else{
//       return <GuestPage />
//     }
//   }
// }

function GuestPage(){
  return(
    <div className="App-header">
      <h1>Please Sign in</h1>
    </div>
  )
}

function App(){
  const [isLoggedin] = useState(true);
  return(
    <div>
      { isLoggedin ? <PrivatePage />  : <GuestPage />}
    </div>
  )
}

export default App;
