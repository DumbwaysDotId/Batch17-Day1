import React,{Component} from 'react';
import DataList from '../Components/DataList';

export default class ListProps extends Component{
    render(){
        return(
            <div>
                <DataList title ="Zainal" />
                <DataList title ="Freddy" />
                <DataList title ="Sabrina" />
                <DataList title ="Festine" />
            </div>
        )
    }
}