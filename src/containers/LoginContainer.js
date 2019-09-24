import { connect } from "react-redux";

import Login from "../components/Login";
import { loginAction } from "../actions/loginActions";


function mapStateToProps(state, ownProps) {
  return {
    fetching: state.login.fetching,
    loggedIn: state.login.loggedIn,
    error: state.login.error,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log("called")
  return {
    loginHandler: (username, password) => {
      dispatch(loginAction(username, password));
    },
  };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
