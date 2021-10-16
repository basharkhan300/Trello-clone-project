import React, { Component } from 'react';

class NavBar extends React.Component {
    render() { 
        return (
            <nav className="navbar navbar-dark bg-primary" style={{height: 45}}>
                <h4 style = {{color: 'white', marginLeft: 50 }}>Trello</h4>
            </nav>

        )
    }
}
 
export default NavBar;