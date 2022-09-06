import '../App.css';
import React, { Component } from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import { NavLink } from 'react-router-dom';
import characterIcon from '../assets/characterIcon.png';
import noteIcon from '../assets/noteIcon.png';
import plotIcon from '../assets/plotIcon.png';
import promptIcon from '../assets/promptIcon.png';
import settingIcon from '../assets/settingIcon.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useLocation, useNavigate, useParams } from 'react-router-dom';



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

class Sidebar extends Component {
 

    render() {   
        const {isAuthenticated, user} = this.props.auth; 
        const authLinks = (
            <ul className="toolbox">
                            <li className="iconlist">
                                <a href="/workspace/tools/characters">
                                    <img className="icon" src={characterIcon} alt="Characters"></img>
                                </a>
                            </li>
                            <li className="iconlist">
                                <a href="/workspace/tools/settings">
                                    <img className="icon" src={settingIcon} alt="Settings"></img>
                                </a>
                            </li>
                            <li className="iconlist">
                                <img className="icon" src={plotIcon} alt="Plots"></img>
                            </li>
                            <li className="iconlist">
                                <img className="icon" src={noteIcon} alt="Notes"></img>
                            </li>
                            <li className="iconlist">
                                <img className="icon" src={promptIcon} alt="Writing Prompt"></img>
                            </li>
                        </ul>
        )
        const guestLinks = (
            <ul className="toolbox">

            </ul>
        )
        return (
            <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                <CDBSidebar textColor="#fff" backgroundColor="#0f3b57">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                            Toolbox
                        </a>
                    </CDBSidebarHeader>
                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink  to="/workspace/tools/characters" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="fa-solid fa-people-arrows fa-large" >Characters</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink  to="/workspace/tools/settings" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="fa-solid fa-building fa-large">Settings</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink  to="/workspace/tools/plot" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="fa-solid fa-network-wired fa-large">Plot</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink  to="/workspace/tools/notes" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="fa-solid fa-pen-square">Notes</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink  to="/workspace/tools/prompts" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="fa-solid fa-brain">Prompts</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>
        )
    }
}
Sidebar.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter(Sidebar))