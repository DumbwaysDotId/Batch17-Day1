import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

import ListProps from '../Pages/ListProps';
import Internal from '../Pages/Internal';
import ListArray from '../Pages/listArray';
import ListObject from '../Pages/listObject';
import UseBootstrap from '../Pages/useBootstrap';

class Content extends Component {
    getBatch(){
        return 15+2
    }

    render(){
    const companyName = "Dumbways.id";

      return(
        <div className="App-header">
          <p>Selamat datang batch {this.getBatch()} di {companyName}</p>

        <img src ="https://thumb.viva.co.id/media/frontend/thumbs3/2019/11/04/5dbf9c0f43404-lola-zieta_665_374.jpg" />

        &nbsp;&nbsp;&nbsp;

          <button onClick = {() => alert("Hallo Siswa dan Siswi Bootcamp DumbWays.id B#17")} > Click Me Pliss </button>

          <Link to ="/ListObject"> <button> List Object </button> </Link>

        <ListProps />
        <Internal />
        <ListArray />
        <UseBootstrap />
        </div>
      )
    }
  }

// function Content(){

//     function getBatch(){
//         return 15+2;
//     }
//     const companyName = "DumbWays.id";

//     return(
//         <div className="App-header">
//             <p>Selamat datang batch {getBatch()} di {companyName}</p>

//             <button onClick = {() => alert(`Hallo Siswa dan Siswi Bootcamp ${companyName} ${getBatch()}`)} > Click Me Pliss </button>
//         </div>
//     )
// }

  export default Content