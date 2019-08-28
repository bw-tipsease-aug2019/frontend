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
import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  function logout() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div>
      <nav className="nav-bar">
        <div className="nav-logo">
          <NavLink to="/">tipsease</NavLink>
        </div>
        <div className="nav-links">

          {localStorage.getItem('serviceWorker') === 'true' && (
            <NavLink to="/workers/tips">view tips</NavLink>
          )}

          {!localStorage.getItem("token") ? (
            <>
              <NavLink to="/login">login</NavLink>{" "}
              <NavLink to="/register">register</NavLink>
            </>
          ) : (
              <Link to="/" onClick={() => logout()}>
                logout
              </Link>
            )}
        </div>
      </nav>
    </div>
  );
}
