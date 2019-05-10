import React from 'react';
import {Router as Link} from "react-router-dom";


export default class Home extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                    Home
                </li>
            </ul>
        )
    }  
}