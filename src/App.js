import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Boards from "./components/boards";

import NavBar from "./components/navbar";

import Lists from "./components/lists";
import List from "./components/list";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path='/' component={Boards} />
        <Route path='/:id' component={Lists} />
        

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
