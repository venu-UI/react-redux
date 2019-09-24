import React, { Component } from 'react';

import HeaderContainer from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <div> 
        <HeaderContainer/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
