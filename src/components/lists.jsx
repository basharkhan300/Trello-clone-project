import React, { Component } from 'react';

import Board from './board';

import * as TrelloApi from './api'

import List from './list';
import AddList from './AddList';


class Lists extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          lists: [],
        };
      }
    
      async fetchLists(id) {
        const lists = await TrelloApi.getLists(id);
    
        this.setState({
          lists,
        });
      }
    
      componentDidMount() {
        // let {id} = this.props.match.params;
        // console.log(id);
        // console.log('saam');
        this.fetchLists(this.props.match.params.id);
      }
    
      render() {
        const { lists } = this.state;
        return (
          <React.Fragment>
            
            <div className="d-flex flex-row flex-wrap justify-content-center">
              {lists.map(({ name, id}) => (
                
                <List key={id} name={name} id={id}  />
              ))}
               <AddList  id={this.props.match.params.id}/>   
            </div>
    
          </React.Fragment>
        );
      }
}
 
export default Lists;