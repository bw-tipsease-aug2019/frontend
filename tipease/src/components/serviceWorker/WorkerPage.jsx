/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/                            TO DO:                        
/      ~ Create a worker page that will get a specific worker and
/        display more detailed information:
/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
import React from "react";
import { Route, Link } from "react-router-dom";
import TipList from "./TipList";

export default function WorkerPage() {
  return (
    
    <>
      <nav>
        <Link to="/worker/tips">Tips</Link>
      </nav>
      <div className="worker-page">
        <h1>Worker Page</h1>
        <Route exact path="/worker/tips" component={TipList} />
      </div>
    </>
  );
}
