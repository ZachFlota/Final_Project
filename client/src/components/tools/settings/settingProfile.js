import React, { Component } from 'react';
import { Route, Link, Routes, useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../sidebar'
import Writersdesk from '../../writersdesk'
import { BsXLg } from "react-icons/bs";

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

class SettingProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            Geographic_location: '',
            Description: '',
            Time_period: '',
            Characteristics: '',
            Weather: '',
            History: '',
        }
    }
    
    
    

    componentDidMount() {
        
        axios.get(`http://localhost:3001/setting/settings/${this.props.params.id}`)
            .then(res => {
                this.setState(res.data)
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    settingProfileBox() {
        return (
            <div className="settingProfileTemp">
                <div className="xbutton">
                    <a href="/workspace/tools/settings" >
                        <BsXLg />
                    </a>
                </div>
                <div>
                    <h3>Name:</h3>
                    <p> {this.state.name} </p>
                </div>
                <div>
                    <h3>Geographic Location:</h3>
                    <p> {this.state.Geographic_location} </p>
                </div>
                <div>
                    <h3>Description:</h3>
                    <p> {this.state.Description} </p>
                </div>
                <div>
                    <h3>Time Period:</h3>
                    <p> {this.state.Time_period} </p>
                </div>
                <div>
                    <h3>Characteristics:</h3>
                    <p> {this.state.Characteristics} </p>
                </div>
                <div>
                    <h3>Weather:</h3>
                    <p> {this.state.Weather} </p>
                </div>
                <div>
                    <h3>History:</h3>
                    <p> {this.state.History} </p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="settingProfile">
                <div className="settingProfileBox">
                    {this.settingProfileBox()}
                </div>
                <Sidebar />
                <Writersdesk />
            </div>
        )
    }
}
export default withParams(SettingProfile);