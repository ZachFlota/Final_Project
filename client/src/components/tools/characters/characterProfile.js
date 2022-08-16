import React, { Component } from 'react';
import { Route, Link, Routes, useParams } from 'react-router-dom';
import axios from 'axios';
import CharacterProfileTemp from './characterProfileTemp'
import Sidebar from '../../sidebar'
import Writersdesk from '../../writersdesk'

export default class CharacterProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            Bio: '',
            Age: '',
            Appearance: '',
            Personality: '',
            Attributes: '',
            Habbits: '',
        }
    }
    
    
        
    

    componentDidMount() {
        axios.get('http://localhost:3001/character/characters/62f852cfa888277b24dfd512')
            .then(res => {
                this.setState(res.data)
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    characterProfileBox() {
        return (
            <div className="characterProfileTemp">
                <div>
                    <h3>Name:</h3>
                    <p> {this.state.name} </p>
                </div>
                <div>
                    <h3>Bio:</h3>
                    <p> {this.state.Bio} </p>
                </div>
                <div>
                    <h3>Age:</h3>
                    <p> {this.state.Age} </p>
                </div>
                <div>
                    <h3>Appearance:</h3>
                    <p> {this.state.Appearance} </p>
                </div>
                <div>
                    <h3>Personality:</h3>
                    <p> {this.state.Personality} </p>
                </div>
                <div>
                    <h3>Attributes:</h3>
                    <p> {this.state.Attributes} </p>
                </div>
                <div>
                    <h3>Habbits:</h3>
                    <p> {this.state.Habbits} </p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="characterProfile">
                <div className="characterProfileBox">
                    {this.characterProfileBox()}
                </div>
                <Sidebar />
                <Writersdesk />
            </div>
        )
    }
}