import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem.js";

const Notes = () => {
  const context = useContext(NoteContext);
  const [note, setState] = useState({eid: "", etitle: "", ebody: "", etag: ""});

  const { notes, getNotes, addNote, editNote } = context;
  useEffect(() => {
    getNotes();
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setState({eid: currentNote._id, etitle: currentNote.title, ebody: currentNote.body, etag: currentNote.tag});
  };

  const ref = useRef(null);
  const refClose = useRef(null);

  const handleClick = (event)=>{
    event.preventDefault();
    editNote(note.eid, note.etitle, note.ebody, note.etag);
    refClose.current.click();
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
                    minLength={5} required                    
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
                    minLength={5} required
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
                ref={refClose}
              >
                Close
              </button>
              <button disabled={note.etitle.length<5 || note.ebody.length<5} type="button" className="btn btn-primary" onClick={handleClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3>Your Notes:</h3>
      {notes.length!==0?Array.from(notes).map((note) => {
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
      }): <h3 style={{textAlign: "center"}}>No Notes to Display</h3>}
    </>
  );
};

export default Notes;
