import React from 'react';
import { Link } from 'react-router-dom';
import "./navigation.jsx";



export default class NavItem extends React.Component {

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
        var siteElements = [];
        this.props.list.forEach(item => {
            siteElements.push(
                <Link to={item.navRoute} key={item.navName}>{item.navName}</Link>
            )

        });
        return (
            <div className="list-con">
                <h1 onClick={this.handleClick.bind(this)}>
                    {this.props.title}
                    <span style={{ transform: `rotate(${this.state.show ? '180deg' : '0deg'})` }}></span>
                </h1>
                <div className="list" style={{ height: this.state.show ? this.props.list.length * 50 + 'px' : '0px' }}>
                    {siteElements}
                </div>
            </div>
        )
    }

}