import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import NoteState from "./context/notes/NoteState.js";
import Alert from "./components/Alert.js";
import AlertState from "./context/alert/AlertState.js";

function App() {

  return (
    <>
      <AlertState>
        <NoteState>
          <BrowserRouter>
            <Navbar />
            <Alert/>
            <div className="container my-3">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
              </Routes>
            </div>
          </BrowserRouter>
        </NoteState>
      </AlertState>
    </>
  );
}

export default App;
