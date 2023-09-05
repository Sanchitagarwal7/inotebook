import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AlertContext from "../context/alert/AlertContext";

const Login = () => {
  const alertContext = useContext(AlertContext);
  const { showText } = alertContext;

  const [info, setInfo] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4999/api/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: info.email, password: info.password }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.token);
      navigate("/");
      showText("Successfully Logged In", "secondary")
    }else{
      showText("User dosen't exist", "danger")
    }
    console.log(json);
  };

  const handleClick = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className="container my-5">
      <h1>Login to continue to iNoteBook</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="mail"
              aria-describedby="emailHelp"
              name="email"
              onChange={handleClick}
              value={info.email}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="pass"
              name="password"
              onChange={handleClick}
              value={info.password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <div className="my-3"><NavLink to={"/signup"}>Don't have an account yet? Sign Up then!</NavLink></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
