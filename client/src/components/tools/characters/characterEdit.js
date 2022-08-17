import React, { Component } from 'react';
import { Route, Link, Routes, useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../sidebar'
import Writersdesk from '../../writersdesk'
import { BsXLg } from "react-icons/bs";

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

class CharacterEdit extends Component {
    constructor(props) {
        super(props);
        this.onChangeCharacterBio = this.onChangeCharacterBio.bind(this);
        this.onChangeCharacterName = this.onChangeCharacterName.bind(this);
        this.onChangeCharacterAge = this.onChangeCharacterAge.bind(this);
        this.onChangeCharacterAppearance = this.onChangeCharacterAppearance.bind(this);
        this.onChangeCharacterPersonality = this.onChangeCharacterPersonality.bind(this);
        this.onChangeCharacterAttributes = this.onChangeCharacterAttributes.bind(this);
        this.onChangeCharacterHabbits = this.onChangeCharacterHabbits.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id: '',
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
        axios.put(`http://localhost:3001/character/update/${this.props.params.id}`, characterObject)
            .then(res => {
                this.setState(res.data)
                
            })
            .catch(function (error) {
                console.log(error);
            })
        this.setState({ name: '', Bio: '', Age: '', Appearance: '', Personality: '', Attributes: '', Habbits: '' });
        window.location.replace('http://localhost:3000/workspace/tools/characters')
    }

    deleteCharacter = () => {
        axios.delete(`http://localhost:3001/character/delete/${this.props.params.id}`)
            .then(() => this.setState({ status: 'Delete Successful' }));
        window.location.replace('http://localhost:3000/workspace/tools/characters')
    }

    componentDidMount() {
        
        axios.put(`http://localhost:3001/character/update/${this.props.params.id}`)
            .then(res => {
                this.setState(res.data)
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    render() {
        return (
            <div className="characterProfile">
                <div className="characterEdit-form" id="characterEditForm">
                            <div className="xbutton">   
                                <a href="/workspace/tools/characters" >
                                    <BsXLg />
                                </a>
                            </div>
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
                                    <input type="submit" value="Edit Character" className="btn btn-success btn-block" />
                                    <input type="button" value="Delete Character" className="btn btn-danger btn-block" onClick={this.deleteCharacter} />
                                </div>
                            </form>
                        </div>
                <Sidebar />
                <Writersdesk />
            </div>
        )
    }
    
}
export default withParams(CharacterEdit);