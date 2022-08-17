import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
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
                            <li className="nav-item">
                                <Link className="nav-link" to={'/workspace'} >
                                    Workspace
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}