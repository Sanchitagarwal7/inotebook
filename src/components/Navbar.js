import React/*, {useEffect} */ from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const Navbar = () => {
  // let location = useLocation();

  // useEffect(() => {
  //   // Google Analytics
  //   console.log(location.pathname);
  // }, [location]);

  let navigate = useNavigate();

  const handleLogOut = ()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> iNoteBook </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            {!localStorage.getItem('token')?<form className="d-flex" role="search">
              <NavLink className="btn btn-outline-success mx-3" type="submit" to={"/login"}>
                Login
              </NavLink>
              <NavLink className="btn btn-outline-success" type="submit" to={"/signup"}>
                Sign Up
              </NavLink>
            </form>: <button className="btn btn-outline-success" type="submit" onClick={handleLogOut}>Log Out</button>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
