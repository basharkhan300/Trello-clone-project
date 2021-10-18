import React, { Component } from 'react';

import Board from './board';

import * as TrelloApi from './api'

import List from './list';
import AddList from './AddList';
import Card from './Card'


class Cards extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          cards: [],
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
      
    
      render() {
        const { cards } = this.state;
        return (
          <React.Fragment>
            
            <div >
              {cards.map(({ name, id}) => (
                
                <Card key={id} name={name} id={id}   />
              ))}
            </div>
    
          </React.Fragment>
        );
      }
}
 
export default Cards;