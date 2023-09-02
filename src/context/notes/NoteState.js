import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:4999";

  const notesInitial = [
    {
      _id: "64bb9b82ccd64579fbeac4e7",
      user: "64bb94e5079a81113ca3f370",
      title: "Mini Goal Updated",
      body: "To complete harry react course and make projects",
      tag: "Super Important",
      date: "2023-07-22T09:04:02.132Z",
      __v: 0,
    },
    {
      _id: "64bb9b82ccd64579fbeac4e8",
      user: "64bb94e5079a81113ca3f370",
      title: "Mini Goal Updated",
      body: "To complete harry react course and make projects",
      tag: "Super Important",
      date: "2023-07-22T09:04:02.132Z",
      __v: 0,
    },
    {
      _id: "64bb9b82ccd64579fbeac4e9",
      user: "64bb94e5079a81113ca3f370",
      title: "Mini Goal Updated",
      body: "To complete harry react course and make projects",
      tag: "Super Important",
      date: "2023-07-22T09:04:02.132Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add a note
  const addNote = async (title, body, tag) => {
    //API CALL
    let url = `${host}/api/notes/createnote`;

    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiYjk0ZTUwNzlhODExMTNjYTNmMzcwIn0sImlhdCI6MTY5MDAxNTE1OH0.froe15vD3V984nJ6rQzmdutkXg-Ndpa92E3wKPsOepU",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, body, tag }), // body data type must match "Content-Type" header
    });


    console.log("adding a new note");
    //TODO API CALL
    const note = {
      _id: "64bb9b82ccd64579fbeac4e2",
      user: "64bb94e5079a81113ca3f370",
      title: title,
      body: body,
      tag: tag,
      date: "2023-07-22T09:04:02.132Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = (id) => {
    console.log("deleting note with id", id);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });

    setNotes(newNotes);
  };

  //Edit a note
  const editNote = async (id, title, body, tag) => {
    //API CALL
    let url = `${host}/api/notes/updatenote/${id}`;

    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiYjk0ZTUwNzlhODExMTNjYTNmMzcwIn0sImlhdCI6MTY5MDAxNTE1OH0.froe15vD3V984nJ6rQzmdutkXg-Ndpa92E3wKPsOepU",
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
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
