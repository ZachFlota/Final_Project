import '../App.css';
import React, { Component } from "react";
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
            <div className="sidebar">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Tool Bar</h3>
                    </div>    
                    <div>
                        {isAuthenticated ? authLinks: authLinks }
                    </div>
                </nav>
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