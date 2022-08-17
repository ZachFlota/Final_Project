import React, { Component } from 'react';
import SettingProfile from './settingProfile'
import { BsFillPencilFill } from "react-icons/bs";

class SettingPost extends Component {
    
    render() {
        return (
            <div className="settingPost">
                <div className="icons">
                    <a href={`/setting/edit/${this.props.obj._id}`}>
                        <BsFillPencilFill />
                    </a>
                </div>
                <a href={`/setting/settings/${this.props.obj._id}`}>
                    <h3> {this.props.obj.name} </h3>
                </a> 
                <p> {this.props.obj.Description} </p>
                
            </div>
        )
    }
/*     openProfile() {
        <CharacterProfile />
        console.log('clicked')
    } */
}

export default SettingPost