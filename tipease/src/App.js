import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.scss";

import Login from "./components/forms/Login";
import NavBar from "./components/navigation/NavBar";
import WorkerList from "./components/serviceWorker/WorkerList";
import TipForm from './components/serviceWorker/tipForm';
import Tips from "./components/Tipper/Tips";
import EditProfile from './components/serviceWorker/EditProfile'
import Profile from "./components/Profile";
import CreateProfile from "./components/serviceWorker/CreateProfile"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={WorkerList} />
      <Route path="/register" component={CreateProfile} />
      <Route path="/login" component={Login} />
      <Route path="/tip/:id" component={TipForm} />
      <PrivateRoute path='/workers/tips' component={Tips} />
      <Route path='/profile' component={Profile} />
      <Route path='/edit-profile' component={EditProfile} />
    </div>
  );
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
export default App;