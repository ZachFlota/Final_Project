import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Sidebar from '../../sidebar';
import SettingIndex from './settingIndex';


export default class Settings extends Component {
    constructor(props) {
        super(props)
        this.onChangeSettingName = this.onChangeSettingName.bind(this);
        this.onChangeSettingType = this.onChangeSettingType.bind(this);
        this.onChangeSettingGeographic_location = this.onChangeSettingGeographic_location.bind(this);
        this.onChangeSettingDescription = this.onChangeSettingDescription.bind(this);
        this.onChangeSettingTime_period = this.onChangeSettingTime_period.bind(this);
        this.onChangeSettingCharacteristics = this.onChangeSettingCharacteristics.bind(this);
        this.onChangeSettingWeather = this.onChangeSettingWeather.bind(this);
        this.onChangeSettingHistory = this.onChangeSettingHistory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
    onChangeSettingName(e) {
        this.setState({ name: e.target.value})
    }
    onChangeSettingType(e) {
        this.setState({ Type: e.target.value })
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
            Type: this.state.Type,
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
        this.setState({ name: '', Type: '', Geographic_location: '', Description: '', Time_period: '', Characteristics: '', Weather: '', History: '' })
        window.location.replace('http://localhost:3000/workspace/tools/settings')
    }
    render() {
        return (
            <div className="Workspace">
                <div>
                    <Sidebar />
                </div>
                <div className="writersdesk">
                    <div className="open-button">
                        <input id="open-button" type="button" value="New Setting" className="btn btn-primary btn-block" onClick={this.openForm} />
                    </div>
                    <SettingIndex />
                    <div className="setting-form" id="settingForm">
                        <Form onSubmit={ this.onSubmit }>
                            <Form.Group className="mb-3" controlId="name" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={this.state.name} onChange={this.onChangeSettingName} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="type">
                                <Form.Select value={this.state.Type} onChange={this.onChangeSettingType}>
                                    <option>Select Setting Type</option>
                                    <option value="Physical">Physical</option>
                                    <option value="Social">Social</option>
                                    <option value="Historical">Historical</option>
                                    <option value="Psychological">Psychological</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Geographic_location" >
                                <Form.Label>Geographic Location</Form.Label>
                                <Form.Control as="textarea" name="Geographic_location" value={this.state.Geographic_location} onChange={this.onChangeSettingGeographic_location} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" value={this.state.Description} onChange={this.onChangeSettingDescription} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Time Period</Form.Label>
                                <Form.Control as="textarea" name="Time_period" value={this.state.Time_period} onChange={this.onChangeSettingTime_period} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Characteristics</Form.Label>
                                <Form.Control as="textarea" name="Characteristics" value={this.state.Characteristics} onChange={this.onChangeSettingCharacteristics} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Weather</Form.Label>
                                <Form.Control as="textarea" name="Weather" value={this.state.Weather} onChange={this.onChangeSettingWeather} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>History</Form.Label>
                                <Form.Control as="textarea" name="History" value={this.state.History} onChange={this.onChangeSettingHistory} />
                            </Form.Group>
                            <Button variant="success" type="submit">Create Setting</Button>
                            <Button variant="danger" type="button" onClick={this.closeForm}>Close</Button>
                        </Form>
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
