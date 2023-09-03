import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote, editNote } = context;
  const { note, updateNote} = props;

  const handleDel = () => {
    deleteNote(props.id);
  };

  const handleEdit = ()=>
  {
    updateNote(note);
  };

  return (
    <>
      <div
        className="card col-md-3 my-3"
        style={{ display: "inline-block" }}
      >
        <h6 className="card-header">{props.title}</h6>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer">
              <cite title="Source Title">{props.tag}</cite>
            </footer>
            <p>{props.body}</p>
          </blockquote>
          <div className="d-flex justify-content-between ">
            <i className="fa-solid fa-trash btn" onClick={handleDel}></i>
            <i className="fa-solid fa-pen-to-square btn" onClick={handleEdit}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
