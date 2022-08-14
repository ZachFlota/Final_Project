import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../sidebar'
import Writersdesk from '../writersdesk';



export default class Characters extends Component {
    constructor(props) {
        super(props)
        this.onChangeCharacterBio = this.onChangeCharacterBio.bind(this);
        this.onChangeCharacterName = this.onChangeCharacterName.bind(this);
        this.onChangeCharacterAge = this.onChangeCharacterAge.bind(this);
        this.onChangeCharacterAppearance = this.onChangeCharacterAppearance.bind(this);
        this.onChangeCharacterPersonality = this.onChangeCharacterPersonality.bind(this);
        this.onChangeCharacterAttributes = this.onChangeCharacterAttributes.bind(this);
        this.onChangeCharacterHabbits = this.onChangeCharacterHabbits.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
    onChangeCharacterName(e) {
        this.setState({ name: e.target.value})
    }
    onChangeCharacterBio(e) {
        this.setState({ Bio: e.target.value })
    }
    onChangeCharacterAge(e) {
        this.setState({ Age: e.target.value })
    }
    onChangeCharacterAppearance(e) {
        this.setState({ Appearance: e.target.value })
    }
    onChangeCharacterPersonality(e) {
        this.setState({ Personality: e.target.value })
    }
    onChangeCharacterAttributes(e) {
        this.setState({ Attributes: e.target.value })
    }
    onChangeCharacterHabbits(e) {
        this.setState({ Habbits: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const characterObject = {
            name: this.state.name,
            Bio: this.state.Bio,
            Age: this.state.Age,
            Appearance: this.state.Appearance,
            Personality: this.state.Personality,
            Attributes: this.state.Attributes,
            Habbits: this.state.Habbits,
        };
        axios.post('http://localhost:3001/character/new', characterObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ name: '', Bio: '', Age: '', Appearance: '', Personality: '', Attributes: '', Habbits: '' })
    }
    render() {
        return (
            <div className="Workspace">
                <Sidebar />
                <Writersdesk />
                    <div className="testdiv">
                        <div>
                            <input id="open-button" type="button" value="New Character" className="btn btn-primary btn-block" onClick={this.openForm} />
                        </div>
                        <div className="character-form" id="characterForm">
                            < form onSubmit={ this.onSubmit } className="form-container">
                                <div className="form-group" >
                                    <label>Name</label>
                                    <input type="text" value={this.state.name} onChange={this.onChangeCharacterName} className="form-control" />
                                </div>
                                <div className="form-group" >
                                    <label>Quick Bio</label>
                                    <textarea name="Bio" value={this.state.Bio} onChange={this.onChangeCharacterBio} className="form-control" />
                                </div>
                                <div>
                                    <label>Age</label>
                                    <input type="text" value={this.state.Age} onChange={this.onChangeCharacterAge} className="form-control" />
                                </div>
                                <div>
                                    <label>Physical Appearance</label>
                                    <textarea name="appearance" value={this.state.Appearance} onChange={this.onChangeCharacterAppearance} className="form-control" />
                                </div>
                                <div>
                                    <label>Personality</label>
                                    <textarea name="personality" value={this.state.Personality} onChange={this.onChangeCharacterPersonality} className="form-control" />
                                </div>
                                <div>
                                    <label>Attributes</label>
                                    <textarea name="attributes" value={this.state.Attributes} onChange={this.onChangeCharacterAttributes} className="form-control" />
                                </div>
                                <div>
                                    <label>Habbits</label>
                                    <textarea name="habbits" value={this.state.Habbits} onChange={this.onChangeCharacterHabbits} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Create Character" className="btn btn-success btn-block" />
                                    <input type="button" value="Close" className="btn btn-danger btn-block" onClick={this.closeForm} />
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }

    openForm() {
        document.getElementById("characterForm").style.display = "block";
        console.log('clicked')
    }
    closeForm() {
        document.getElementById("characterForm").style.display = "none";
        console.log('clicked')
    }
}


