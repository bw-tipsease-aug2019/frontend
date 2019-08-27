import React from "react";
import { Route } from "react-router-dom";

import "./App.scss";

import Login from "./components/forms/Login";
import NavBar from "./components/navigation/NavBar";
import CreateAccountPage from "./components/CreateAccountPage";
import TipperPage from "./components/Tipper/TipperPage";
import WorkerPage from "./components/serviceWorker/WorkerPage";
import WorkerList from "./components/serviceWorker/WorkerList";
// import Worker from "./components/serviceWorker/worker";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello Tipease</h1>
      <Route exact path="/" component={WorkerList} />
      <Route path="/register" component={CreateAccountPage} />
      <Route path="/protected" component={Login} />
      <Route path="/tipper" component={TipperPage} />
      <Route path="/worker/:id" component={WorkerPage} />
    </div>
  );
}

export default App;
