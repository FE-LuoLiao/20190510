import React from 'react';
import { Link } from 'react-router-dom';


export default class NormalList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }
    //
    handleClick() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        //定义一个数组，存放每个列表的元素
        console.log(this.props.getData);
        var normallist = [];
        this.props.getData.forEach((item,index) => {
            normallist.push(
                <li key={index}>
                    <ul>
                        <li>{item.registe_time}</li>
                        <li>{item.username}</li>
                        <li>{item.city}</li>
                    </ul>
                </li>
            )
        })
        return (
            <div>
                <ul>
                    {normallist}
                </ul>
            </div>
        )
    }

}