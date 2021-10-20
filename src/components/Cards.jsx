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
          // show:false,
          // cardId:""
        };
      }
    
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

    //   handleDeleteList = async (listId) => {
    //     const deleted = await TrelloApi.archiveList(listId);
    //     this.setState({
    //         lists: this.state.lists.filter((p) => p.id !== listId)   
    //     })
    //   }
      
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
        console.log("newlone",this.state.cardId);
        return (
          <React.Fragment>
            
            <div >
              {cards.map(({ name, id, desc}) => (
                <div>
                <Card key={id} name={name} id={id} desc={desc} />
                </div>
                
                
              ))}
              
            </div>

            
                
          </React.Fragment>
        );
      }
}
 
export default Cards;


// onClickHandle={() => {this.handleModal()}} 
/* <Popup onhandle={this.handleModal} cardId={this.state.cardId} show={this.state.show} /> */