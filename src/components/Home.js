import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";

function Home() {

  return (
    <>
    <AddNote/>
      <h3>Your Notes:</h3>
      <Notes/>
    </>
  );
}

export default Home;
