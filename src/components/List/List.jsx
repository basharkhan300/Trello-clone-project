import React, { Component } from "react";

import Cards from "../Card/Cards";

const List = ({ name, id, onDelete }) => {
  return (
    <div
      className="card m-2"
      style={{
        height: "95vh",
        width: "180px",
        backgroundColor: "rgb(211,211,211)",
      }}
    >
      <div className="d-flex flex-column">
        <h5
          style={{
            color: "black",
          }}
          className="card-title"
        >
          {name}
        </h5>
        <button className="btn btn-sm btn-danger" onClick={onDelete}>
          Archive
        </button>
      </div>
      <Cards id={id} />
    </div>
  );
};

export default List;
