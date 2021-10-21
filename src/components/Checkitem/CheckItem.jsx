import React, { Component } from "react";

import { Checkbox, FormControlLabel } from "@material-ui/core";

import * as TrelloApi from "../api";

class CheckItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkItems: [],
      name: "",
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
    const resp = await TrelloApi.addCheckItem(
      this.props.checkListId,
      this.state.name
    );
    console.log("response", resp);

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

  // This section is for deleting checklist

  deleteCheckItem = async (checkListId, CheckItemId) => {
    const deleted = await TrelloApi.deleteCheckItem(checkListId, CheckItemId);
    this.setState({
      checkItems: this.state.checkItems.filter((p) => p.id !== CheckItemId),
    });
  };

  render() {
    return (
      <div>
        {this.state.checkItems.map((item) => (
          <div>
            <FormControlLabel
              control={<Checkbox size="small" color="success" />}
              label={item.name}
            />

            <button
              type="submit"
              className="btn btn-sm m-2 btn-danger"
              onClick={() =>
                this.deleteCheckItem(this.props.checkListId, item.id)
              }
            >
              Delete CheckItem
            </button>
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
