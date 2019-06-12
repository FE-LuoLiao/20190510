import React from 'react';//引入react
import ReactDom from 'react-dom';//引入react-dom
import { Route, Switch, HashRouter as Router } from "react-router-dom";

import StartPage from './Components/StartPage/StartPage.jsx';
import AddStore from './Components/DataManger/AddStore.jsx';
import AddShop from './Components/DataManger/AddShop.jsx';
import Chart from './Components/Chart/Chart.jsx';
import Edit from './Components/Edit/Edit.jsx';
import Explain from './Components/Explain/Explain.jsx';
import Set from './Components/Set/Set.jsx';
import UserList from './Components/DataManger/UserList.jsx';
import ShoperList from './Components/DataManger/ShoperList.jsx';
import FoodList from './Components/DataManger/FoodList.jsx';
import OrderList from './Components/DataManger/OrderList.jsx'


import Aroute from './Components/navigation/navigation.jsx';


class App extends React.Component {
    render() {  
        return (
            <Router>
                <div>
                    <Aroute />
                    <Route
                        exact
                        path="/StartPage"
                        render={props => (
                            <StartPage />
                        )
                        }
                    />

                    <Route
                        path="/AddStore"
                        render={props => (
                            <AddStore />
                        )}
                    />

                    <Route
                        path="/AddShop"
                        render={props => (
                            <AddShop />
                        )}
                    />

                    <Route
                        path="/Chart"
                        render={props => (
                            <Chart />
                        )}
                    />

                    <Route
                        path="/Edit"
                        render={props => (
                            <Edit />
                        )}
                    />

                    <Route
                        path="/Set"
                        render={props => (
                            <Set />
                        )}
                    />

                    <Route
                        path="/Explain"
                        render={props => (
                            <Explain />
                        )}
                    />

                    <Route
                        path="/UserList"
                        render={props => (
                            <UserList />

                        )}
                    />

                    <Route
                        path="/ShoperList"
                        render={props => (
                            <ShoperList />

                        )}
                    />

                    <Route
                        path="/FoodList"
                        render={props => (
                            <FoodList />
                        )}
                    />

                    <Route
                        path="/OrderList"
                        render={props => (
                            <OrderList />
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