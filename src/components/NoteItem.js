import React, {useContext} from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const {deleteNote} = context;

    const handleClick = ()=>{
        deleteNote(props.id);
    }

  return (
    <>
      <div
        className="col-md-3 my-3 mx-2"
        style={{width: "18rem" }}
      >
        <div className="card horizontal_line">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">#{props.tag}</p>
            <p className="card-text">{props.body}</p>
            <div className="d-flex justify-content-between">
              <i className="fa-solid fa-trash btn" onClick={handleClick}></i>
              <i className="fa-solid fa-pen-to-square btn"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
