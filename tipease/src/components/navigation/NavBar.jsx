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
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Tipper</Link>
        <Link to="/workers/tips">Worker</Link>
        {!localStorage.getItem('token') ? (<><Link to='/login'>Login</Link> <Link to='/register'>Create Account</Link></>): (<Link to='/logout'>Logout</Link>)}

      </nav>
    </div>
  );
}
