const defaultState = {
    fetching: false,
    loggedIn: false,
    error: "",
  };
  
  function loginReducer(prevState = defaultState, action) {
    let newState;
  
    switch (action.type) {
      case "LOGIN_IN_PROGRESS":
        newState = {
          ...prevState, fetching: true, loggedIn: false, error: "",
        };
        break;
      case "LOGIN_SUCCESS":
        newState = {
          ...prevState, fetching: false, loggedIn: true, error: "",
        };
        break;
      case "LOGIN_ERROR":
        newState = {
          ...prevState, fetching: false, loggedIn: false, error: action.error,
        };
        break;
      case "LOGOUT":
        newState = {
          ...prevState, fetching: false, loggedIn: false, error: "",
        };
        break;
      default:
        newState = { ...prevState };
        break;
    }
  
    return newState;
  }
  
  export default loginReducer;
  