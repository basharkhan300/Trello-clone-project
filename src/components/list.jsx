import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const List = ({ name }) => {
  // return(
  //         <div  className="card">
  //   <div className="card-body">
  //     <h5 className="card-title">Card title</h5>
  //     <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
  //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //     <a href="#" className="card-link">Card link</a>
  //     <a href="#" className="card-link">Another link</a>
  //   </div>
  // </div>
  //     )

  return (
    <div
      className="d-flex flex-row flex-wrap justify-content-center card m-2"
      style={{ height: "95vh", width: "180px", backgroundColor: "rgb(211,211,211)" }}
    >
      <h5
        style={{
          // position: "absolute",
          // top: "10px",
          // left: "10px",
          color: "black",
        }}
        className="card-title"
      >
        {name}
      </h5>
    </div>
  );
};

export default List;