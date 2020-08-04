import React, {Component, useState} from 'react';
import '../App.css'
import Header from '../Components/Header';

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

function Increment(){
    const [counter, setCounter] = useState(100)

    return(
        <div className="App">
            <p>Click th button to increment ! !</p>
                &nbsp;&nbsp;&nbsp;

            <Header propertiku={counter}/>

                 &nbsp;&nbsp;&nbsp;

            <button onClick={()=> setCounter(counter+100)}> Hit Me</ button>
        </div>
    )
}

export default Increment