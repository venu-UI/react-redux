import axios from "axios";

export function loginAction(username, password) {
  return function (dispatch, store) {
    dispatch({ type: "LOGIN_IN_PROGRESS" });

    // username and password has been hardcoded.
    debugger
    if ((username !== "admin") || (password !== "test")) {
      dispatch({ type: "LOGIN_ERROR", error: "Access Denied!" });
      return;
    }

    axios.get('https://www.facebook.com/?ref=tn_tnmn')
      .then((response) => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_ERROR", error: error.message });
      });
  };
}

export function logoutAction() {
  return { type: "LOGOUT" };
}
