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
      <div class="card col-md-3 my-3 mx-1" style={{display: "inline-block"}}>
        <h4 class="card-header">{props.title}</h4>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
          <footer class="blockquote-footer">
            <cite title="Source Title">{props.tag}</cite>
            </footer>
            <p>{props.body}</p>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
