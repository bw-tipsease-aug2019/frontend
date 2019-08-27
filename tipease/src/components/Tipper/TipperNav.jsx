import React from "react";
import { Link } from "react-router-dom";

export default function TipperNav() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tipper">Tipper</Link>
        <Link to="/worker">Worker</Link>
      </nav>
    </>
  );
}
