import React, { Component } from 'react';
import { Route, Link, Routes, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Sidebar from '../../sidebar'
import { BsXLg } from "react-icons/bs";

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

class SettingProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            Type: '',
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
            <Card className="settingEdit-form">
                <div className="xbutton">
                    <a href="/workspace/tools/settings" >
                        <BsXLg />
                    </a>
                </div>
                <div>
                    <h4>Name:</h4>
                    <p> {this.state.name} </p>
                </div>
                <div>
                    <h4>Type:</h4>
                    <p> {this.state.Type } </p>
                </div>
                <div>
                    <h4>Geographic Location:</h4>
                    <p> {this.state.Geographic_location} </p>
                </div>
                <div>
                    <h4>Description:</h4>
                    <p> {this.state.Description} </p>
                </div>
                <div>
                    <h4>Time Period:</h4>
                    <p> {this.state.Time_period} </p>
                </div>
                <div>
                    <h4>Characteristics:</h4>
                    <p> {this.state.Characteristics} </p>
                </div>
                <div>
                    <h4>Weather:</h4>
                    <p> {this.state.Weather} </p>
                </div>
                <div>
                    <h4>History:</h4>
                    <p> {this.state.History} </p>
                </div>
            </Card>
        )
    }

    render() {
        return (
            <div className="Workspace">
                <div>
                    <Sidebar />
                </div>
                <div className="writersdesk">
                    {this.settingProfileBox()}
                </div>
            </div>
        )
    }
}
export default withParams(SettingProfile);