import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import { connect } from "react-redux";


class Header extends Component {
    
    render() {
        console.log(this.props.loggedIn)
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">Employee DB</a>
                        <div className="" id="navbarResponsive">
                            <ul className="navbar-nav">                       
                                <li className="nav-item mx-0 mx-lg-1">
                                    <Link to="/employee">Employment</Link>
                                </li>    
                                <li className="nav-item mx-0 mx-lg-1">
                                    <Link to="/department">Department</Link>
                                </li>  
                                <li className="nav-item mx-0 mx-lg-1">
                                {(this.props.loggedIn) ?
                                    <Link to="/logout">Logout</Link>
                                    : <Link to="/login">Login</Link>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
      loggedIn: state.login.loggedIn,
    };
  }
  
  const HeaderContainer = connect(mapStateToProps)(Header);
  
  
  export default HeaderContainer;
  
