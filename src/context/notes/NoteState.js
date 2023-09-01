import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
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
    }
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add a note
  const addNote = (title, body, tag) => {
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

    const newNotes = notes.filter((note)=>{return note._id!==id})

    setNotes(newNotes);
  };

  //Edit a note
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
