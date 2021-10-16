import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Boards from "./components/boards";

import NavBar from "./components/navbar";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Boards />
      </React.Fragment>
    );
  }
}

export default App;
