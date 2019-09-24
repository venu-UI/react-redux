import React from 'react';
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (<section id="contact" >
      <div className="container">
        <br />
        <br />
        <h2 className="text-center text-uppercase text-secondary mb-0">Home</h2>
        <hr />

        <div className="row">
          <div className="col-lg-12 mx-auto">
            <br /><br /><br />

            <h2 className="text-center" style={{ color: "maroon" }}>Welcome to the EMS Home Page!</h2>
            <br /><br />

            {(!this.props.loggedIn) ?
              <h3 className="text-center" style={{ color: "blue" }}>You are NOT logged in.</h3>
              : <h3 className="text-center" style={{ color: "green" }}>You are logged in.</h3>}

            <br /><br /><br /><br /><br />
          </div>
        </div>
      </div>
            </section>);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loggedIn: state.login.loggedIn,
  };
}

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;
