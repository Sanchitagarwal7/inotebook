import React, {useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import AlertContext from "../context/alert/AlertContext"

const Signup = () => {

  const alertContext = useContext(AlertContext);
  const {showText} = alertContext;

    const [sinfo, setInfo] = useState({name: "", email: "", password: ""});
    let navigate = useNavigate();

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const response = await fetch("http://localhost:4999/api/auth/register", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name: sinfo.name, email: sinfo.email,password: sinfo.password }),
          });
          const json = await response.json();
          if(json.success){
            localStorage.setItem('token', json.token);
            navigate('/');
            showText("Successfully Signed Up", "primary")
          }
          console.log(json);
    }

    const handleClick = (event)=>{
        setInfo({...sinfo, [event.target.name]: event.target.value})
    }

  return (
    <div>
      <div className="container my-5">
      <h1>Create an account to continue to iNoteBook</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              name="name"
              onChange={handleClick}
              value={sinfo.name}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="mail"
              aria-describedby="emailHelp"
              name="email"
              onChange={handleClick}
              value={sinfo.email}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="pass"
              name="password"
              onChange={handleClick}
              value={sinfo.password}
              minLength={5} required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
