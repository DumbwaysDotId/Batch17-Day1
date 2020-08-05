import React, {Component} from 'react'

class ListArray extends Component{
    render(){
        const cars = ["Lambhorghini", "Mercedes-Benz", "Audi", "Avanza"]
        return(
        <div className="App-header">
            {cars.map((car, index) => (<p key={index}>{car}</p>))}
        </div>
        )
    }
}

export default ListArray