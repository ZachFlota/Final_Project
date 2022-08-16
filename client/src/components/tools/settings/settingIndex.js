import React, { Component } from 'react';
import axios from 'axios';
import SettingPost from './settingPost';

export default class SettingIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { settingsCollection: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:3001/setting/settings')
            .then(res => {
                this.setState({ settingsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    settingBox() {
        return this.state.settingsCollection.map((data, i) => {
            return <SettingPost obj={data} key={i} />
        })
    }

    render() {
        return (
            <div className="settingBox">
                {this.settingBox()}
            </div>
        )
    }
}