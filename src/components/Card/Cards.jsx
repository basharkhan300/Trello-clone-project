import React, { Component } from "react";

import * as TrelloApi from "../api";
import Card from "./Card";

class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      name: ""
    };
  }

  // Section for creating new cards

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const resp = await TrelloApi.createCards(this.props.id, this.state.name);
    this.setState({
      cards: [resp, ...this.state.cards],
    });
  };

  // Section for fetching cards
  async fetchCards(id) {
    const cards = await TrelloApi.getCards(id);

    this.setState({
      cards,
    });
  }

  componentDidMount() {
    this.fetchCards(this.props.id);
  }

  // section for deleting cards

  handleDeleteCard = async (listId) => {
    const deleted = await TrelloApi.deleteCard(listId);
    this.setState({
      cards: this.state.cards.filter((p) => p.id !== listId),
    });
  };

  render() {
    const { cards } = this.state;
    return (
      <React.Fragment>
        <div>
          {cards.map(({ name, id, desc }) => (
            <div>
              <Card
                key={id}
                name={name}
                id={id}
                desc={desc}
                onDeleteCard={this.handleDeleteCard}
              />
            </div>
          ))}

          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <input
                  value={this.state.name}
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
