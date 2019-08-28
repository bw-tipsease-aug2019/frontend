/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/                            TO DO:                        
/      ~ Setup a navigation component to move around routes
/          -Logo (links to home?)
/          -When not logged in:
/             * Link to log in
/             * Link to create account
/          -When logged in:
/             * Log out button
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  function logout() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div>
      <nav className='nav-bar'>
        <div className='float-left'>
        <Link to='/' className='title nav-link'>Tipease</Link>
        <Link className='nav-link' to="/">Tipper</Link>
        <Link className='nav-link' to="/workers/tips">Worker</Link>
        </div>
        <div className='float-right'>
        {!localStorage.getItem("token") ? (
          <>
            <Link className='nav-link' to="/login">Login</Link>{" "}
            <Link className='nav-link' to="/register">Create Account</Link>
          </>
        ) : (
          <Link to="/" onClick={() => logout()}>
            Logout
          </Link>
        )}
        </div>
      </nav>
    </div>
  );
}
