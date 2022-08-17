import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../../sidebar';
import SettingIndex from './settingIndex';
import SettingProfile from './settingProfile';
import Writersdesk from '../../writersdesk';

export default class Settings extends Component {
    constructor(props) {
        super(props)
        this.onChangeSettingName = this.onChangeSettingName.bind(this);
        this.onChangeSettingGeographic_location = this.onChangeSettingGeographic_location.bind(this);
        this.onChangeSettingDescription = this.onChangeSettingDescription.bind(this);
        this.onChangeSettingTime_period = this.onChangeSettingTime_period.bind(this);
        this.onChangeSettingCharacteristics = this.onChangeSettingCharacteristics.bind(this);
        this.onChangeSettingWeather = this.onChangeSettingWeather.bind(this);
        this.onChangeSettingHistory = this.onChangeSettingHistory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
    onChangeSettingName(e) {
        this.setState({ name: e.target.value})
    }
    onChangeSettingGeographic_location(e) {
        this.setState({ Geographic_location: e.target.value })
    }
    onChangeSettingDescription(e) {
        this.setState({ Description: e.target.value })
    }
    onChangeSettingTime_period(e) {
        this.setState({ Time_period: e.target.value })
    }
    onChangeSettingCharacteristics(e) {
        this.setState({ Characteristics: e.target.value })
    }
    onChangeSettingWeather(e) {
        this.setState({ Weather: e.target.value })
    }
    onChangeSettingHistory(e) {
        this.setState({ History: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const settingObject = {
            name: this.state.name,
            Geographic_location: this.state.Geographic_location,
            Description: this.state.Description,
            Time_period: this.state.Time_period,
            Characteristics: this.state.Characteristics,
            Weather: this.state.Weather,
            History: this.state.History,
        };
        axios.post('http://localhost:3001/setting/new', settingObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ name: '', Geographic_location: '', Description: '', Time_period: '', Characteristics: '', Weather: '', History: '' })
        window.location.replace('http://localhost:3000/workspace/tools/settings')
    }
    render() {
        return (
            <div className="Workspace">
                <Sidebar />
                <Writersdesk />
                
                    <div className="testdiv">
                        <SettingIndex />
                    
                        <div className="open-button">
                            <input id="open-button" type="button" value="New Setting" className="btn btn-primary btn-block" onClick={this.openForm} />
                        </div>
                        <div className="setting-form" id="settingForm">
                            < form onSubmit={ this.onSubmit } className="form-container">
                                <div className="form-group" >
                                    <label>Name</label>
                                    <input type="text" value={this.state.name} onChange={this.onChangeSettingName} className="form-control" />
                                </div>
                                <div className="form-group" >
                                    <label>Geographic Location</label>
                                    <textarea name="Geographic_location" value={this.state.Geographic_location} onChange={this.onChangeSettingGeographic_location} className="form-control" />
                                </div>
                                <div>
                                    <label>Description</label>
                                    <input type="text" value={this.state.Description} onChange={this.onChangeSettingDescription} className="form-control" />
                                </div>
                                <div>
                                    <label>Time Period</label>
                                    <textarea name="Time_period" value={this.state.Time_period} onChange={this.onChangeSettingTime_period} className="form-control" />
                                </div>
                                <div>
                                    <label>Characteristics</label>
                                    <textarea name="Characteristics" value={this.state.Characteristics} onChange={this.onChangeSettingCharacteristics} className="form-control" />
                                </div>
                                <div>
                                    <label>Weather</label>
                                    <textarea name="Weather" value={this.state.Weather} onChange={this.onChangeSettingWeather} className="form-control" />
                                </div>
                                <div>
                                    <label>History</label>
                                    <textarea name="History" value={this.state.History} onChange={this.onChangeSettingHistory} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Create Setting" className="btn btn-success btn-block" />
                                    <input type="button" value="Close" className="btn btn-danger btn-block" onClick={this.closeForm} />
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }

    openForm() {
        document.getElementById("settingForm").style.display = "block";
        console.log('clicked')
    }
    closeForm() {
        document.getElementById("settingForm").style.display = "none";
        console.log('clicked')
    }
}
