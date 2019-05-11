import React from 'react';
import { Link } from 'react-router-dom';

export default class NavItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show:false,
        };
    }
    //
    handleClick(){
        this.setState({
            show: !this.state.show 
        })
    }

    render() {
        //定义一个数组，存放每个列表的元素
        var siteElements = [];
        this.props.list.forEach(item => {
            siteElements.push(
                <div key={item.navName}>
                    <ul>
                        <li>
                        <Link to={item.navRoute}>{item.navName}</Link>
                        </li>
                    </ul>
                </div >
            )

        });
        return (
            <div>
                <h1 onClick={this.handleClick.bind(this)}>{this.props.title}</h1>
                
                {this.state.show ? siteElements : ''}
            </div>
        )
    }

}