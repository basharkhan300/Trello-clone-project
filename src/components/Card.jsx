import React, { Component } from "react";

import { Button } from "react-bootstrap";

import Popup from "./Popup";


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleModal = () => {
    this.setState({
      show: true,
    });
  };

  closeHandle = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div className="card m-2" style={{ backgroundColor: "rgb(251,241,231)" }}>
        <div
          onClick={() => this.handleModal()}
          style={{
            color: "black",
            backgroundColor: "white",
          }}
          className="card-body p-2"
        >
          {this.props.name}
        </div>
        <div>
          <Popup
            show={this.state.show}
            name={this.props.name}
            id={this.props.id}
            closeHandler={this.closeHandle}
          />
        </div>
      </div>
    );
  }
}

export default Card;

// return (
//   <div
//     className="card m-2"
//     style={{ backgroundColor: "rgb(251,241,231)" }}
//   >
//     <div onClick={onClickHandle}
//       style={{
//         color: "black",
//         backgroundColor: "white"
//       }}
//       className="card-body p-2"
//       data-id = {id}
//     >
//       {name}
//     </div>

//   </div>
// );
// };

// export default Card;
