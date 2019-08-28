import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.scss";

import Login from "./components/forms/Login";
import NavBar from "./components/navigation/NavBar";
import CreateAccountForm from "./components/forms/CreateAccount";
import WorkerPage from "./components/serviceWorker/WorkerPage";
import WorkerList from "./components/serviceWorker/WorkerList";
import TipForm from './components/serviceWorker/tipForm';
import TipList from './components/serviceWorker/TipList'
// import Worker from "./components/serviceWorker/worker";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={WorkerList} />
      <Route path="/register" component={CreateAccountForm} />
      <Route path="/login" component={Login} />
      <Route path="/worker/:id" component={WorkerPage} />
      <Route path="/tip/:id" component={TipForm} />
      <PrivateRoute path='/workers/tips' component={TipList} />
    </div>
  );
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
export default App;