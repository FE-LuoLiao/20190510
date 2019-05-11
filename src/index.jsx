import React from 'react';//引入react
import ReactDom from 'react-dom';//引入react-dom
import { Route, Switch, HashRouter as Router } from "react-router-dom";

import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Stu from './Components/student/student.jsx';
import Aroute from './Components/navigation/navigation.jsx';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Aroute />

                    <Route
                        exact
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
                </div>
            </Router >
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
)