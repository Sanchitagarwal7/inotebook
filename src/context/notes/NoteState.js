import { useContext, useState } from "react";
import NoteContext from "./NoteContext";
import AlertContext from "../alert/AlertContext";

const NoteState = (props) => {
  const host = "http://localhost:4999"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  const alertContext = useContext(AlertContext);
  const {showText} = alertContext;

  //Get all Notes
  const getNotes = async () => {
    //API CALL
    // Default options are marked with *
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMzE3Yzg4ZGM0YmIyYTM1ZDQ1ZDVkIn0sImlhdCI6MTY5MzY1Mjk3N30.B0aDzd9GN4NfoK2A4ughoMuVGlw7x2DWA0c0mx7grms",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  }

  //Add a note
  const addNote = async (title, body, tag) => {
    //API CALL;

    // Default options are marked with *
    const response = await fetch(`${host}/api/notes/createnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMzE3Yzg4ZGM0YmIyYTM1ZDQ1ZDVkIn0sImlhdCI6MTY5MzY1Mjk3N30.B0aDzd9GN4NfoK2A4ughoMuVGlw7x2DWA0c0mx7grms",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, body, tag }), // body data type must match "Content-Type" header
    });

    const note = await response.json();
    
    setNotes(notes.concat(note));
    showText("New Note Added", "success");
  };

  //Delete a note
  const deleteNote = async (id) => {

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMzE3Yzg4ZGM0YmIyYTM1ZDQ1ZDVkIn0sImlhdCI6MTY5MzY1Mjk3N30.B0aDzd9GN4NfoK2A4ughoMuVGlw7x2DWA0c0mx7grms",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });

    // const json = response.json();
    // console.log(json);

    // console.log("deleting note with id", id);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });

    setNotes(newNotes);
    showText("Note Deleted", "danger");
  };

  //Edit a note
  const editNote = async (id, title, body, tag) => {
    //API CALL

    // Default options are marked with *
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMzE3Yzg4ZGM0YmIyYTM1ZDQ1ZDVkIn0sImlhdCI6MTY5MzY1Mjk3N30.B0aDzd9GN4NfoK2A4ughoMuVGlw7x2DWA0c0mx7grms",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({title, body, tag}), // body data type must match "Content-Type" header
    });

    const json = response.json();

    //LOGIC TO EDIT A NOTE
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];

      if (element._id === id) {
        element.title = title;
        element.body = body;
        element.tag = tag;
        break;
      }
    }
    setNotes(notes);
    getNotes();
    showText("Note Updated", "info");
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
