import React, { Component } from 'react';
import CharacterProfile from './characterProfile';
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

class CharacterPost extends Component {
    
    render() {
        return (
            <div className="characterPost">
                {/* <input type="button" value={this.props.obj.name} onClick={this.openProfile}/>                 */}
                <a href={`/character/characters/${this.props.obj._id}`}>
                    <h3> {this.props.obj.name} </h3>
                </a> 
                <p> {this.props.obj.Bio} </p>
                <div className="icons">
                    <button><BsFillPencilFill /></button>
                    <button><BsFillTrashFill /></button>
                </div>
            </div>
        )
    }
/*     openProfile() {
        <CharacterProfile />
        console.log('clicked')
    } */
}

export default CharacterPost