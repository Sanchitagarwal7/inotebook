import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes } = context;
  return (
    <>
      {notes.map((note) => {
        return (
            <NoteItem title={note.title} body={note.body} tag={note.tag} key={note._id} id={note._id}/>
        );
      })}
    </>
  );
};

export default Notes;
