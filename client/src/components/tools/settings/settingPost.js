import React, { Component } from 'react';
import SettingProfile from './settingProfile'

class SettingPost extends Component {
    
    render() {
        return (
            <div className="settingPost">
                {/* <input type="button" value={this.props.obj.name} onClick={this.openProfile}/>                 */}
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