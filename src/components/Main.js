import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import PrivateRoute from "../utils/PrivateRoute";

import Home from "./Home";
import Employee from "./Employee/Employee";
import Department from "./Department/Department";
//import Login from "./Login";
import Logout from "./Logout";
import LoginContainer from '../containers/LoginContainer';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route path="/" exact component={Home} />                  
                    <PrivateRoute path="/employee" component={Employee} />
                    <PrivateRoute path="/department" component={Department} />
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/logout" component={Logout} />
                </Switch>

            </div>

        );
    }
}

export default Main;
