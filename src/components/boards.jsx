import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Board from "./board";
import AddBoard from "./AddBoard";

import List from './list';

// import * as TrelloApi from './api'
import * as TrelloApi from "./api";
import { logDOM, wait } from "@testing-library/dom";

class Boards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: [],
      // lists: []
    };
  }

  async fetchBoard() {
    const boards = await TrelloApi.getBoards();

    this.setState({
      boards,
    });
  }

  // handleList = async (id) => {
  //   console.log(id);
  //   const lists = await TrelloApi.getLists(id);

  //   this.setState({
  //     lists
  //   })
  // }

  componentDidMount() {
    this.fetchBoard();
    // this.handleList();
    
    
  }


  
  render() {
    const { boards } = this.state;
    return (
      <React.Fragment>
        
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {boards.map(({ name, id, prefs }) => (
              <Link key={id} to={`/lists/${id}`}>
            <Board  name={name} prefs={prefs} id={id} key={id}  />
            </Link>
          ))}
          
          
      
          <AddBoard />
        </div>
        

      </React.Fragment>
    );
  }
}

export default Boards;


// onHandleList={ () => this.handleList(id) }