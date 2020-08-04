import React, {Component} from 'react'

class Header extends Component {
    render(){
      return(
        <div>
          <h1>{this.props.propertiku}</h1>
        </div>
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