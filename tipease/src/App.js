import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.scss";

import Login from "./components/forms/Login";
import NavBar from "./components/navigation/NavBar";
import CreateAccountPage from "./components/CreateAccountPage";
import TipperPage from "./components/Tipper/TipperPage";
import WorkerPage from "./components/serviceWorker/WorkerPage";
import WorkerList from "./components/serviceWorker/WorkerList";
import TipForm from "./components/serviceWorker/tipForm";
// import Worker from "./components/serviceWorker/worker";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1 className="app-title">Hello Tipease</h1>
      <Route exact path="/" component={WorkerList} />
      <Route path="/register" component={CreateAccountPage} />
      <Route path="/login" component={Login} />
      <Route path="/worker/:id" component={WorkerPage} />
      <Route path="/tip/:id" component={TipForm} />
    </div>
  );
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
export default App;
