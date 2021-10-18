import React, { Component } from 'react';

const Card = ({ name }) => {
    // return(
    //         <div  className="card">
    //   <div className="card-body">
    //     <p className="card-title">Card title</p>
    //     <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
    //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     <a href="#" className="card-link">Card link</a>
    //     <a href="#" className="card-link">Another link</a>
    //   </div>
    // </div>
    //     )
  
    return (
      <div
        className="card m-2"
        style={{ backgroundColor: "rgb(251,241,231)" }}
      >
        <div
          style={{
            // position: "absolute",
            // top: "10px",
            // left: "10px",
            color: "black",
            backgroundColor: "white"
          }}
          className="card-body p-2"
        >
          {name}
        </div>
      </div>
    );
  };
  
  export default Card;
  