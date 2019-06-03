import React from 'react';
import { Link } from 'react-router-dom';
import "./NormalList.css";

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
        // console.log(this.props.getData);
        var normallist = [];
        
        this.props.getData.forEach((item, index) => {
            normallist.push(
                <li key={index} className="user-nav">
                    <ul>
                        {
                            this.props.keys.map(k=>{                               
                                return <li key={k}>{item[k]}</li>;
                                
                            })
                        }
                    </ul>
                </li>
            )
            
        }) 
        
        return (
           
            <div className="user-list">
                {normallist}
            </div>
        )
    } 

}