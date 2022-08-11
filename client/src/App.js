// client/src/App.js
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CreateUser from './components/create-user.component'
import Users from './components/users.component'
import Login from './components/login-form'


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
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">Writer's Desk</a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={'/create-user'}>
                    Create User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/users'}>
                    Users List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/login'}>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Routes>
                <Route exact path="/" element={<CreateUser />} />
                <Route path="/create-user" element={<CreateUser />} />
                <Route path="/users" element={<Users />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;
