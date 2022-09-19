import React, { Component } from 'react';
import { Route, Link, Routes, useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../sidebar'
import { BsXLg } from "react-icons/bs";
import Card from 'react-bootstrap/Card';

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

class CharacterProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            Type: '',
            Bio: '',
            Age: '',
            Appearance: '',
            Personality: '',
            Attributes: '',
            Habbits: '',
        }
    }
    
    
    

    componentDidMount() {
        
        axios.get(`http://localhost:3001/character/characters/${this.props.params.id}`)
            .then(res => {
                this.setState(res.data)
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    characterProfileBox() {
        return (
            <Card className="characterEdit-form">
                <div className="xbutton">   
                    <a href="/workspace/tools/characters" >
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
                    <h4>Bio:</h4>
                    <p> {this.state.Bio} </p>
                </div>
                <div>
                    <h4>Age:</h4>
                    <p> {this.state.Age} </p>
                </div>
                <div>
                    <h4>Appearance:</h4>
                    <p> {this.state.Appearance} </p>
                </div>
                <div>
                    <h4>Personality:</h4>
                    <p> {this.state.Personality} </p>
                </div>
                <div>
                    <h4>Attributes:</h4>
                    <p> {this.state.Attributes} </p>
                </div>
                <div>
                    <h4>Habbits:</h4>
                    <p> {this.state.Habbits} </p>
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
                    {this.characterProfileBox()}               
                </div>
            </div>
        )
    }
}
export default withParams(CharacterProfile);