import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";


const PrivateRoute = (props) => {
    const { loggedIn, component, ...rest } = props;
  
    // Component name must be camel-case
    const Component = component;
  
    const redirectObj = {
      pathname: "/login",
      state: { from: props.location },
    };
  
    let jsx;
    if (loggedIn) {
      jsx = <Component {...props} />;
    } else {
      jsx = <Redirect to={redirectObj} />;
    }
  
    return <Route {...rest} render={(props) => jsx} />;
  };
  
  function mapStateToProps(state, ownProps) {
    return {
      loggedIn: state.login.loggedIn,
    };
  }
  
  const PrivateRouteContainer = connect(mapStateToProps)(PrivateRoute);

  
  export default PrivateRouteContainer;
  