import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

const TipperPage = () => {
  const [search, setSearch] = useState("");

  const handleChange = event => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div>
        <h1>Tipper Page</h1>
        {/* <TipList tips={} /> */}
        <Route path="/tipper/tips" />

        <form>
          <input
            type="text"
            placeholder="Enter Worker's Name"
            value={search}
            onChange={handleChange}
          />
          <button type="submit">
            <span role="img" aria-label="Search">
              🔍
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default TipperPage;
