import React,{Component} from 'react';
import '../App.css';
import { render } from '@testing-library/react';

// class Content extends Component {
//     render(){
//       return(
//         <div className="App-header">
//           <p>nah ini nama nya content paham klean, Batch 17</p>
//         </div>
//       )
//     }
//   }

function Content(){

    function getBatch(){
        return 15+2
    }

    const companyName = "Dumbways.id"

    return(
        <div className="App-header">
            <p>Selamat datang batch {getBatch()} di {companyName}</p>
        </div>
    )
}

  export default Content