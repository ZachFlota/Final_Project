// client/src/App.js
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CreateUser from './components/create-user.component';
import Login from './components/login-form';
import Navbar from "./components/navbar";
import Workspace from './components/workspace';
import Characters from './components/tools/characters/characters.js';
import CharacterProfile from "./components/tools/characters/characterProfile";
import Settings from './components/tools/settings/settings';
import SettingProfile from "./components/tools/settings/settingProfile";
import CharacterEdit from "./components/tools/characters/characterEdit";
import SettingEdit from "./components/tools/settings/settingEdit";
import deskLg from '../src/assets/deskLg.png'


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <img className="backgroundImg" src={deskLg} alt="wooden desk surface"></img>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<CreateUser />} />
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
  )
}

export default App;
