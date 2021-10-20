import React, { Component } from "react";

import * as TrelloApi from "./api";
import AddCheckList from "./AddCheckList";
import CheckItem from "./CheckItem";

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkList: [],
      name: "",
    };
  }

  // This section is for adding checklists

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await TrelloApi.addChecklist(this.props.id, this.state.name);

    this.setState({
      checkList: [resp, ...this.state.checkList],
    });
  };

  // This section is for fetching checklists

  fetchCheckList = async (cardId) => {
    const checkList = await TrelloApi.getChecklist(cardId);
    this.setState({
      checkList,
    });
  };

  componentDidMount() {
    this.fetchCheckList(this.props.id);
  }

  // This section is for deleting checklist

  deleteChecklist = async (cardId) => {
    const deleted = await TrelloApi.deleteCheckList(cardId);
    this.setState({
      checkList: this.state.checkList.filter((p) => p.id !== cardId),
    });
  };

  render() {
    return (
      <div>
        {this.state.checkList.map((check) => (
          <div>
            <h4>{check.name}</h4>
            <CheckItem checkListId={check.id} key={check.id} />
            <button
              type="submit"
              className="btn btn-sm m-2 btn-warning"
              onClick={() => this.deleteChecklist(check.id)}
            >
              Delete CheckList
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
                placeholder="Checklist Name here"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-sm m-2">
              Add CheckList
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckList;
// <AddCheckList id={this.props.id} key={this.props.id}  />
