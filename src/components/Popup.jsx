import React, { Component } from 'react';

import { Modal, Button } from 'react-bootstrap';
import AddCheckList from './AddCheckList';

import * as TrelloApi from './api'
import CheckList from './CheckList';

import "./Popup.css"


class Popup extends React.Component {


    constructor(props){

        super(props);
        
        // this.state = {
        //     checkList : [],
        //   };
        
    }

    // fetchCheckList = async (cardId) => {
    //     const checkList = await TrelloApi.getOneCard(cardId);
    // //     console.log("One card is "+ oneCard);
    //     this.setState({
    //         checkList
    //     })
    // }

    // componentDidMount(){
    //     this.fetchCheckList(this.props.id);
    // //     console.log("didadasdasd mount"+this.props.cardId);
    // }
    
    
    render() { 
        return (<div>
            <Modal size="lg" show={this.props.show} >
                <Modal.Header>name={this.props.name}</Modal.Header>
                <Modal.Body>
                <div>
                    <CheckList id={this.props.id} />
                    
                </div>
                 </Modal.Body>
                <Modal.Footer>
                <Button onClick={this.props.closeHandler} >
                    close
                </Button>
                </Modal.Footer>

              </Modal>
        </div>);
    }
}
 
export default Popup;
