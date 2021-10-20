import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// import { Modal, Button } from 'react-bootstrap';
import Popup from "./Popup"
import Board from './board';

import * as TrelloApi from './api'

import List from './list';
import AddList from './AddList';
import Card from './Card'
import AddCard from './AddCard';


class Cards extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          cards: [],
          name: "",

        };
      }
    
      // Section for creating new cards 


       
  handleChange = (event) => {
    this.setState({
        name:event.target.value,
    })
  }

  handleSubmit= async (event) => {
// by default if we type submit it refresh even if we don't ask it to do..
// thus with prevent.default, we can prevent it
event.preventDefault();
// console.log(this.state.name);   Now I have to make a request which is post request and add a board in my ui........    for this I have to create a function createBoard() in api.jsx which takes "name" of the board as parameter...... see createBoard function in  api.jsx
// let {idBoard} = this.props.match.params;


const resp = await TrelloApi.createCards(this.props.id, this.state.name);
this.setState({
  cards:[resp, ...this.state.cards]
})
  }

      
      
      
      // Section for fetching cards
      async fetchCards(id) {
        const cards = await TrelloApi.getCards(id);
    
        this.setState({
            cards,
        });
      }
    
      componentDidMount() {
        // let {id} = this.props.match.params;
        // console.log(id);
        // console.log('saam');
        this.fetchCards(this.props.id);
      }

      // section for deleting cards

      handleDeleteCard = async (listId) => {
        const deleted = await TrelloApi.deleteCard(listId);
        this.setState({
            cards: this.state.cards.filter((p) => p.id !== listId)   
        })
      }
      
    // handleModal = (event) => {
    //   console.log(event);
    //   this.setState({
    //     cardId:
    //     event.target.getAttribute("data-id")      })
    //   this.setState({
    //     show:!this.state.show
    //   })
    //   console.log("data attribute " + event.target.getAttribute("data-id"));
    // }
    
      render() {
        const { cards } = this.state;
        // console.log("newlone",this.state.cardId);
        return (
          <React.Fragment>
            
            <div >
              {cards.map(({ name, id, desc}) => (
                <div>
                <Card key={id} name={name} id={id} desc={desc} onDeleteCard={this.handleDeleteCard} />
                </div>
                
                
              ))}

              <div>
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
              </div>
              
            </div>

            
                
          </React.Fragment>
        );
      }
}
 
export default Cards;


// onClickHandle={() => {this.handleModal()}} 
/* <Popup onhandle={this.handleModal} cardId={this.state.cardId} show={this.state.show} /> */