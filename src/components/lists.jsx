import React, { Component } from 'react';

import Board from './board';

import * as TrelloApi from './api'

import List from './list';


class Lists extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          lists: [],
        };
      }
    
      async fetchLists() {
        const lists = await TrelloApi.getLists();
    
        this.setState({
          lists,
        });
      }
    
      componentDidMount() {
        this.fetchLists();
      }
    
      render() {
        const { lists } = this.state;
        return (
          <React.Fragment>
            
            <div className="d-flex flex-row flex-wrap justify-content-center">
              {lists.map(({ name, id, prefs }) => (
                
                <List key={id} name={name} prefs={prefs} id={id} />
              ))}
            </div>
    
          </React.Fragment>
        );
      }
}
 
export default Lists;