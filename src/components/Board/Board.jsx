import React, { Component } from "react";

const Board = ({ name, prefs, onHandleList }) => {
  return (
    <div
      onClick={onHandleList}
      className="card m-2"
      style={{
        width: "270px",
        height: "150px",
        backgroundColor: "blue",
        border: "none",
      }}
    >
      <img
        src={prefs.backgroundImage}
        style={{ width: "270px", height: "150px" }}
      />
      <h5
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          color: "white",
        }}
        className="card-title"
      >
        {name}
      </h5>
    </div>
  );
};

export default Board;
