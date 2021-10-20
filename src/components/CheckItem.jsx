import React, { Component } from "react";

import * as TrelloApi from "./api";

class CheckItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkItems: [],
      name:""
    };
  }

  // This section is for creating new checkitems

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await TrelloApi.addCheckItem(this.props.checkListId, this.state.name);
    console.log("response",resp);

    this.setState({
      checkItems: [resp, ...this.state.checkItems],
    });
  };

  
  
  // This section is for fetching checkitems

  fetchCheckItems = async (checkListId) => {
    const checkItems = await TrelloApi.getCheckItem(checkListId);
    this.setState({
      checkItems,
    });
  };

  componentDidMount() {
    this.fetchCheckItems(this.props.checkListId);
  }

  render() {
    return (
      <div>
        {this.state.checkItems.map((item) => (
          <p>{item.name}</p>
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
                placeholder="Checkitem Name here"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-sm m-2">
              Add CheckItem
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckItem;
