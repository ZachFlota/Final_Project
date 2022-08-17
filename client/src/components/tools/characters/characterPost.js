import React, { Component } from 'react';
import CharacterProfile from './characterProfile';
import { BsFillPencilFill } from "react-icons/bs";
import axios from 'axios';

class CharacterPost extends Component {
    
    render() {
        return (
            <div className="characterPost">
                <div className="icons">
                    <a href={`/character/edit/${this.props.obj._id}`}>
                        <BsFillPencilFill />
                    </a>
                </div>
                <a href={`/character/characters/${this.props.obj._id}`}>
                    <h3> {this.props.obj.name} </h3>
                </a> 
                <p> {this.props.obj.Bio} </p>
            </div>
        )
    }
/*     openProfile() {
        <CharacterProfile />
        console.log('clicked')
    } */
}

export default CharacterPost