import React, { Component } from "react";

import { Link } from "react-router-dom";

import * as TrelloApi from "../api";
import Board from "./Board"
import { logDOM, wait } from "@testing-library/dom";

class Boards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: [],
      name: "",
    };
  }

  // Section for creating new board

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const resp = await TrelloApi.createBoard(this.state.name);
    this.setState({
      boards: [resp, ...this.state.boards],
    });
  };

  // section for fetching boards

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
            <Link key={id} to={`/lists/${id}`}>
              <Board name={name} prefs={prefs} id={id} key={id} />
            </Link>
          ))}

          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="board-name">Create new Board</label>
              <input
                value={this.state.name}
                type="text"
                className="form-control"
                id="board-name"
                onChange={this.handleChange}
                placeholder="Board Name here"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Boards;
