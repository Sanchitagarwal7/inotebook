import React from "react";
import Notes from "./Notes";

function Home() {

  return (
    <>
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
          />
        </div>
        <div className="form-group">
          <label>Body</label>
          <input
            type="text"
            className="form-control"
            id="txt"
            placeholder="Enter your note"
          />
        </div>
        <button type="submit" className="btn btn-primary my-3">
          Submit
        </button>
      </form>
      <h3>Your Notes:</h3>
      <Notes/>
    </div>
    </>
  );
}

export default Home;
