import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Boards from "./components/Board/Boards";
import NavBar from "./components/Navbar";
import Lists from "./components/List/Lists";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={Boards} />
          <Route path="/lists/:id" component={Lists} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
