import React,{Component} from 'react';
import '../App.css';
import { render } from '@testing-library/react';

// class Content extends Component {
//     getBatch(){
//         return 15+2
//     }

//     render(){
//     const companyName = "Dumbways.id";

//       return(
//         <div className="App-header">
//           <p>Selamat datang batch {this.getBatch()} di {companyName}</p>
//         </div>
//       )
//     }
//   }

function Content(){

    function getBatch(){
        return 15+2;
    }

    const companyName = "DumbWays.id";


    return(
        <div className="App-header">
            <p>Selamat datang batch {getBatch()} di {companyName    }</p>
        </div>
    )
}

  export default Content