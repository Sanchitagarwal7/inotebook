import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem.js";

const Notes = () => {
  const context = useContext(NoteContext);
  const [note, setState] = useState({etitle: "", ebody: "", etag: ""});

  const { notes, getNotes, addNote } = context;
  useEffect(() => {
    getNotes();
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setState({etitle: currentNote.title, ebody: currentNote.body, etag: currentNote.tag});
  };

  const ref = useRef(null);

  const handleClick = (event)=>{
    event.preventDefault();
    addNote(note.title, note.body, note.tag);
}

const onChange = (event)=>{
    setState({...note,[event.target.name]: event.target.value});
}

  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          ref={ref}
        >
          Launch demo modal
        </button>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Your Note:
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group my-3">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etit"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Body</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etxt"
                    name="ebody"
                    value={note.ebody}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group my-3">
                  <label>Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>


      {Array.from(notes).map((note) => {
        return (
          <NoteItem
            note={note}
            title={note.title}
            body={note.body}
            tag={note.tag}
            key={note._id}
            id={note._id}
            updateNote={updateNote}
          />
        );
      })}
    </>
  );
};

export default Notes;
