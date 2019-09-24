import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
           <footer className="container-fluid">
                <nav className="fixed-bottom bg-info text-center">
                    Copyright © My Project {new Date().getFullYear()}
                </nav>
         </footer>
        );
    }
}

export default Footer;




