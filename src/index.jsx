import React from 'react';//引入react
import ReactDom from 'react-dom';//引入react-dom
import { Router as Route } from "react-router-dom";

import Home from './Components/Home/Home.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Route
                            path="/Home"
                            render={props => (
                                <Home />
                            )
                            }
                        />

                        <Route
                            path="/About"
                            render={props => (
                                <About />
                            )}
                        />

                        <Route
                            path="/Stu"
                            render={props => (
                                <Stu />
                            )}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
)