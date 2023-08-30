import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";

import NoteState from "./context/notes/NoteState.js";

function App() {
  return (
  <>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/about" element={<About/>}> </Route>
        </Routes>
      </BrowserRouter>
    </NoteState>
  </>
  );
}

export default App;
