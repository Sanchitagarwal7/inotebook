import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem.js";

const Notes = () => {
  const context = useContext(NoteContext);

  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      {Array.from(notes).map((note) => {
        return (
          <NoteItem
            title={note.title}
            body={note.body}
            tag={note.tag}
            key={note._id}
            id={note._id}
          />
        );
      })}
    </>
  );
};

export default Notes;
