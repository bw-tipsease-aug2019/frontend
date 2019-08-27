
import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'
import './App.css';


import Login from "./components/forms/Login";
import NavBar from "./components/navigation/NavBar";
import CreateAccountPage from "./components/CreateAccountPage";
import TipperPage from "./components/Tipper/TipperPage";
import WorkerPage from "./components/serviceWorker/WorkerPage";
// import Worker from "./components/serviceWorker/worker";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello Tipease</h1>
      <Route exact path="/createaccount" component={CreateAccountPage} login={Login}/>
      <Route path="/login/" component={Login} />
      <PrivateRoute path="/tipper" component={TipperPage}/>
      

    </div>
  );
}

export default App;
