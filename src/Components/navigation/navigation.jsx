import React from 'react';
import ReactDom from 'react-dom';
import { Link } from "react-router-dom";
import NavItem from './NavItem.jsx';
import "./navigation.css";


export default class Aroute extends React.Component {
    render() {
        return (
            <div className="nav-list">
                <ul>
                    <li>
                        <NavItem title="首页" list={[
                            {
                                navName: "用户列表",
                                navRoute: "/123"
                            },
                            {
                                navName: "商家列表",
                                navRoute: "/234"
                            },
                            {
                                navName: "食品列表",
                                navRoute: "/456"
                            },
                            {
                                navName: "订单列表",
                                navRoute: "/789"
                            },
                            {
                                navName: "管理员列表",
                                navRoute: "/678"
                            }
                        ]} />
                    </li>
                    <li>
                        <Link to="/DataManger">数据管理</Link>
                    </li>
                    <li>
                        <Link to="/Chart">图表</Link>
                    </li>
                    <li>
                        <Link to="/Edit">编辑</Link>
                    </li>
                    <li>
                        <Link to="/Set">设置</Link>
                    </li>
                    <li>
                        <Link to="/Explain">说明</Link>
                    </li>
                </ul>
            </div>
        )
    }
}