import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  const handleClick = () => {
    deleteNote(props.id);
  };

  return (
    <>
      <div
        className="card col-md-3 my-3 mx-1"
        style={{ display: "inline-block" }}
      >
        <h4 className="card-header">{props.title}</h4>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer">
              <cite title="Source Title">{props.tag}</cite>
            </footer>
            <p>{props.body}</p>
          </blockquote>
          <div className="d-flex justify-content-between ">
            <i className="fa-solid fa-trash btn" onClick={handleClick}></i>
            <i className="fa-solid fa-pen-to-square btn"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
