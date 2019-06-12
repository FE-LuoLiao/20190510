import React from "react";
import { readFile } from "fs";

export default class AddShop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        const fs = require('fs');
        fs.readFile('./Sanitary_Service_Point.geojson', 'utf-8', function (error, data) {
            console.log(error);
            console.log(data);
        })


        return (
            <ul>
                <li>123</li>
                {}
            </ul>
        )
    }

}