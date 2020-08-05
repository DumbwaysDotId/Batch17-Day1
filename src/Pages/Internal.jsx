import React, {Component} from 'react'
import '../App.css'
import '../external.css'

class Internal extends Component{
    render(){
        return(
        <div className="App-header">
            <p style={{color: "#e74c3c", fontSize: "50%"}}>Ini Inline CSS Jhon</p>
            <p style={style.blueBig}>Ini Inline CSS Jhon</p>
            <p className="orange-big">Ini Inline CSS Jhon</p>
        </div>
        )
    }
}

const style = {
    blueBig : {
        fontSize : 100,
        color : "#3498db",
        fontWeight: "bold"
    }
}

export default Internal