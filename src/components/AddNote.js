import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = () => {
    const context = useContext(NoteContext);
    const {addNote} = context;

    const [note, setState] = useState({title: "", body: "", tag: ""});

    const handleClick = (event)=>{
        event.preventDefault();
        addNote(note.title, note.body, note.tag);
    }

    const onChange = (event)=>{
        setState({...note,[event.target.name]: event.target.value});
    }
  return (
    <div>
      <div className="container">
        <form>
          <h1>Add Note</h1>
          <div className="form-group my-3">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              id="tit"
              placeholder="Enter title of your note"
              name="title"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Body</label>
            <input
              type="text"
              className="form-control"
              id="txt"
              placeholder="Enter your note"
              name="body"
              onChange={onChange}
            />
          </div>
          <div className="form-group my-3">
            <label>Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              placeholder="Input tag (optional)"
              name="tag"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary my-3" onClick={handleClick}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
