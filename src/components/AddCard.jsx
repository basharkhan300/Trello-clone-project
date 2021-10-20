import React, { Component } from "react";

import * as TrelloApi from "./api"

class AddCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
    };
  }

  
  handleChange = (event) => {
    this.setState({
        name:event.target.value,
    })
  }

  handleSubmit= async (event) => {
// by default if we type submit it refresh even if we don't ask it to do..
// thus with prevent.default, we can prevent it
// event.preventDefault();
// console.log(this.state.name);   Now I have to make a request which is post request and add a board in my ui........    for this I have to create a function createBoard() in api.jsx which takes "name" of the board as parameter...... see createBoard function in  api.jsx
// let {idBoard} = this.props.match.params;


const resp = await TrelloApi.createCards(this.props.id, this.state.name);
console.log("card resp: "+ resp);
  }

  render() {
// console.log(this.props.id);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <input value={this.state.name}
            type="text"
            className="form-control"
            id="board-name"
            onChange={this.handleChange}
            placeholder="Card Name here"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Card
        </button>
      </form>
    );
  }
}

export default AddCard;
