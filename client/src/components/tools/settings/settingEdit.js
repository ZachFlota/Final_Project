import React, { Component } from 'react';
import { Route, Link, Routes, useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../sidebar'
import Writersdesk from '../../writersdesk'
import { BsXLg } from "react-icons/bs";

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

class SettingEdit extends Component {
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
        axios.put(`http://localhost:3001/setting/update/${this.props.params.id}`, settingObject)
            .then((res) => {
                this.setState(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ name: '', Geographic_location: '', Description: '', Time_period: '', Characteristics: '', Weather: '', History: '' })
        window.location.replace('http://localhost:3000/workspace/tools/settings')
    }

    deleteSetting = () => {
        axios.delete(`http://localhost:3001/setting/delete/${this.props.params.id}`)
            .then(() => this.setState({ status: 'Delete Successful' }));
        window.location.replace('http://localhost:3000/workspace/tools/settings')
    }

    componentDidMount() {
        axios.put(`http://localhost:3001/setting/update/${this.props.params.id}`)
            .then(res => {
                this.setState(res.data)
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="settingProfile">
                <div className="settingEdit-form" id="settingEditForm">
                    <div className="xbutton">   
                        <a href="/workspace/tools/settings" >
                            <BsXLg />
                        </a>
                    </div>
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
                            <input type="submit" value="Edit Setting" className="btn btn-success btn-block" />
                            <input type="button" value="Delete Setting" className="btn btn-danger btn-block" onClick={this.deleteSetting} />
                        </div>
                    </form>
                </div>
                <Sidebar />
                <Writersdesk /> 
            </div>            
        )
    }
}
export default withParams(SettingEdit);