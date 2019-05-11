import React from 'react';
import ReactDom from 'react-dom';
import { Link } from "react-router-dom";


export default class Aroute extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Stu">student</Link>
                </li>
            </ul>
        )
    }
}