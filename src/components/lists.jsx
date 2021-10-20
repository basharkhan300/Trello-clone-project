import React, { Component } from "react";

import Board from "./board";

import * as TrelloApi from "./api";

import List from "./list";
import AddList from "./AddList";

class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      name: "", 
    };
  }

  // section for creating new list
  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const resp = await TrelloApi.createList(
      this.state.name,
      this.props.match.params.id
    );

    this.setState({
      lists: [resp, ...this.state.lists],
    });
  };


  // section for fetching lists start here

  async fetchLists(id) {
    const lists = await TrelloApi.getLists(id);

    this.setState({
      lists,
    });
  }

  componentDidMount() {
    this.fetchLists(this.props.match.params.id);
  }


  // section for delete list here

  handleDeleteList = async (listId) => {
    const deleted = await TrelloApi.archiveList(listId);
    this.setState({
      lists: this.state.lists.filter((p) => p.id !== listId),
    });
  };

  render() {
    const { lists } = this.state;
    return (
      <React.Fragment>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {lists.map(({ name, id }) => (
            <List
              key={id}
              name={name}
              id={id}
              onDelete={() => this.handleDeleteList(id)}
            />
          ))}

          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="board-name">Create new List</label>
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

export default Lists;
// <AddList  id={this.props.match.params.id}/>
