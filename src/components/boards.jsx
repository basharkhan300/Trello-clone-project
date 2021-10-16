import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Board from "./board";

// import * as TrelloApi from './api'
import * as TrelloApi from "./api";

class Boards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: [],
    };
  }

  async fetchBoard() {
    const boards = await TrelloApi.getBoards();

    this.setState({
      boards,
    });
  }

  componentDidMount() {
    this.fetchBoard();
  }
  render() {
    const { boards } = this.state;
    return (
      <React.Fragment>
        
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {boards.map(({ name, id, prefs }) => (
            <BrowserRouter>
            <Route path="/" component={Board}>
            <Link to='/about'>
            <Board name={name} prefs={prefs} key={id} />
            </Link>
            </Route>
            </BrowserRouter>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Boards;
