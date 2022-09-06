// client/src/App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from "./setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authentication";
import './App.css';

import CreateUser from './components/create-user.component';
import Login from './components/login-form';
import Home from './components/home';
import NavBar from "./components/navbar";
import Workspace from './components/workspace';
import Characters from './components/tools/characters/characters.js';
import CharacterProfile from "./components/tools/characters/characterProfile";
import Settings from './components/tools/settings/settings';
import SettingProfile from "./components/tools/settings/settingProfile";
import CharacterEdit from "./components/tools/characters/characterEdit";
import SettingEdit from "./components/tools/settings/settingEdit";
import deskLg from '../src/assets/deskLg.png'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login"
  }
}


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Provider store = { store }>
      <Router>
        <div className="App">
          <NavBar />
          <img className="backgroundImg" src={deskLg} alt="wooden desk surface"></img>
          <div className="container-fluid p-0">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/create-user" element={<CreateUser />} />
              <Route path="/login" element={<Login />} />
              <Route path="/workspace" element={<Workspace />} />
              <Route path="/workspace/tools/characters" element={<Characters />} />
              <Route path="/character/characters/:id" element={<CharacterProfile />} />
              <Route path="/workspace/tools/settings" element={<Settings />} />
              <Route path="/setting/settings/:id" element={<SettingProfile />} />
              <Route path="/character/edit/:id" element={<CharacterEdit />} />
              <Route path="/setting/edit/:id" element={<SettingEdit />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
