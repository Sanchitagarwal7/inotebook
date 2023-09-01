import React from "react";

const NoteItem = (props) => {
  return (
    <>
      <div
        className="col-md-3 my-3 mx-2"
        style={{ display: "inline-block", width: "18rem" }}
      >
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
