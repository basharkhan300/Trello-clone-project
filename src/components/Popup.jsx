import React, { Component } from 'react';

import { Modal, Button } from 'react-bootstrap';

import * as TrelloApi from './api'



class Popup extends React.Component {


    constructor(props){

        super(props);
        
    //     this.state = {
    //         oneCard : [],
    //         show : this.props.show
    //       };
        
    }

    //  fetchOneCard = async () => {
    //     const oneCard = await TrelloApi.getOneCard(this.props.cardId);
    //     console.log("One card is "+ oneCard);
    //     this.setState({
    //         oneCard
    //     })
    // }

    // componentDidMount(){
    //     this.fetchOneCard();
    //     console.log("didadasdasd mount"+this.props.cardId);
    // }
    
    // closeHandle(){
    //     console.log("show si",this.props.show);
    //     // console.log("show state", this.state.show);
    //     this.setState({
    //         show:! this.state.show

    //     })
    //     console.log("after set state", this.state.show);
    // }

    
    render() { 
        return (<div>
            <Modal show={this.props.show}>
                <Modal.Header>name={this.props.name}</Modal.Header>
                <Modal.Body>id = {this.props.id}</Modal.Body>
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
