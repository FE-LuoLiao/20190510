import React from 'react';
import ReactDom from 'react-dom';
import {Router as Link} from "react-router-dom";


export default class Aroute extends React.Component{
    render(){
        return(
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
            </ul>
        )
    }
}