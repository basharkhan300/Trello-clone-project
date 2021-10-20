import React, { Component } from "react";

import * as TrelloApi from "./api";

class CheckItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkItems: [],
    };
  }

  // This section is for fetching checklists

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
      </div>
    );
  }
}

export default CheckItem;
