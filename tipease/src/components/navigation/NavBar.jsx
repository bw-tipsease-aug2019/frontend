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
<<<<<<< HEAD:tipease/src/components/navigation/navBar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tipper">Tipper</Link>
        <Link to="/worker">Worker</Link>
      </nav>
    </div>
  );
}
=======

import React from 'react';

const NavBar = props =>{
  return(
    <>
    
    </>
  );
};

export default NavBar;
>>>>>>> bf21621c151521c9594023eb1d525adae84ff68f:tipease/src/components/navigation/NavBar.jsx
