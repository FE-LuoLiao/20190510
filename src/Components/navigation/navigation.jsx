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
                                navRoute: "/UserList"
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
                        <NavItem title="数据管理" list={[
                            {
                                navName: "用户列表",
                                navRoute: "/123"
                            },
                            {
                                navName: "商家列表",
                                navRoute: "/234"
                            },
                        ]} />
                    </li>
                    <li>
                        <NavItem title="图标" list={[
                            {
                                navName: "用户列表",
                                navRoute: "/123"
                            },
                            {
                                navName: "商家列表",
                                navRoute: "/234"
                            },
                        ]} />
                    </li>

                    <li>
                        <NavItem title="编辑" list={[
                            {
                                navName: "用户列表",
                                navRoute: "/123"
                            },
                            {
                                navName: "商家列表",
                                navRoute: "/234"
                            },
                        ]} />
                    </li>
                    <li>
                        <NavItem title="设置" list={[
                            {
                                navName: "用户列表",
                                navRoute: "/123"
                            },
                            {
                                navName: "商家列表",
                                navRoute: "/234"
                            },
                        ]} />
                    </li>

                    <li>
                        <NavItem title="说明" list={[
                            {
                                navName: "用户列表",
                                navRoute: "/123"
                            },
                            {
                                navName: "商家列表",
                                navRoute: "/234"
                            },
                        ]} />
                    </li>
                </ul>
            </div>
        )
    }
}