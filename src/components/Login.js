import React, { Component } from 'react';

import { Redirect } from "react-router-dom";


class Login extends Component {
    render() {
        // If Logged-in redirect to Home Page
        if (this.props.loggedIn) {
          return <Redirect to="/" />;
        }
        return (<section id="contact" >
        <div className="container">
          <br />
          <br />
          <h2 className="text-center text-uppercase text-secondary mb-0">Login</h2>
          <hr />
  
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div style={{ color: "blue" }}>HINT: Username: admin, Password: test
                        <br /><br />
              </div>
              <form name="sentMessage" id="contactForm" noValidate="">
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="txtUsername"
                      id="txtUsername"
                      placeholder="Username"
                      ref={(node) => {
                        this.txtUsername = node;
                      }}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <input
                      type="password"
                      name="txtPassword"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      ref={(node) => {
                        this.txtPassword = node;
                      }}
                    />
  
                    {(this.props.error)
                      ? <h4 style={{ color: "red" }} >{this.props.error}</h4>
                      : null}
  
                    {(this.props.fetching)
                      ? <h4 style={{ color: "blue" }} >Logging in.... Please wait!</h4>
                      : null}
  
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    id="submitButton"
                    onClick={() => {
                      this.props.loginHandler(this.txtUsername.value, this.txtPassword.value);
                    }}
                  >Login
                  </button>
  
                  &nbsp;&nbsp;&nbsp;&nbsp;
  
                  <button
                    type="reset"
                    className="btn btn-primary btn-lg"
                    id="resetButton"
                  >Reset
                  </button>
                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
              </section>);
    }
}

export default Login;
