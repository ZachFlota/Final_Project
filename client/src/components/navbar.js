import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        )
    };
    return ComponentWithRouterProp;
}

class NavBar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
        window.location.replace('http://localhost:3000/login')
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <Nav className="me-auto">
                <Nav.Link href="#" onClick={this.onLogout.bind(this)}>{user.name} Logout</Nav.Link> 
                <Nav.Link href="/workspace">Workspace</Nav.Link>
            </Nav>
        )
        const guestLinks = (
            <Nav className="me-auto">
                <Nav.Link href="/create-user">Sign Up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>

        )

        return (
            <Navbar bg="light" expand="lg" >
                <Container id="Navbar">
                    <Navbar.Brand href="/">Writer's Desk</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {isAuthenticated ? authLinks : guestLinks}                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(NavBar));