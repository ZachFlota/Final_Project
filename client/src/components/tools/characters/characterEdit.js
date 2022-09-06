import React, { Component } from 'react';
import { Route, Link, Routes, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Sidebar from '../../sidebar'
import { BsXLg } from "react-icons/bs";

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

class CharacterEdit extends Component {
    constructor(props) {
        super(props);
        this.onChangeCharacterBio = this.onChangeCharacterBio.bind(this);
        this.onChangeCharacterName = this.onChangeCharacterName.bind(this);
        this.onChangeCharacterType = this.onChangeCharacterType.bind(this);
        this.onChangeCharacterAge = this.onChangeCharacterAge.bind(this);
        this.onChangeCharacterAppearance = this.onChangeCharacterAppearance.bind(this);
        this.onChangeCharacterPersonality = this.onChangeCharacterPersonality.bind(this);
        this.onChangeCharacterAttributes = this.onChangeCharacterAttributes.bind(this);
        this.onChangeCharacterHabbits = this.onChangeCharacterHabbits.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id: '',
            name: '',
            Type: '',
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
    onChangeCharacterType(e) {
        this.setState({ Type: e.target.value })
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
            Type: this.state.Type,
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
        this.setState({ name: '', Type:'', Bio: '', Age: '', Appearance: '', Personality: '', Attributes: '', Habbits: '' });
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
            <div className="Workspace">
                <div>
                    <Sidebar />
                </div>
                <div className="writersdesk">
                    <div className="characterEdit-form" id="characterEditForm">
                        <div className="xbutton">   
                            <a href="/workspace/tools/characters" >
                                <BsXLg />
                            </a>
                        </div>
                        <Form onSubmit={ this.onSubmit }>
                            <Form.Group className="mb-3" controlId="name" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={this.state.name} onChange={this.onChangeCharacterName} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="type">
                                <Form.Select value={this.state.Type} onChange={this.onChangeCharacterType}>
                                    <option>Select Character Type</option>
                                    <option value="Protagonist">Protagonist</option>
                                    <option value="Antagonist">Antagonist</option>
                                    <option value="Love Interest">Love Interest</option>
                                    <option value="Confidant">Confidant</option>
                                    <option value="Tertiary">Tertiary</option>
                                    <option value="Foil">Foil</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="form-group" >
                                <Form.Label>Quick Bio</Form.Label>
                                <Form.Control as="textarea" name="Bio" value={this.state.Bio} onChange={this.onChangeCharacterBio} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="text" value={this.state.Age} onChange={this.onChangeCharacterAge} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Physical Appearance</Form.Label>
                                <Form.Control as="textarea" name="appearance" value={this.state.Appearance} onChange={this.onChangeCharacterAppearance} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Personality</Form.Label>
                                <Form.Control as="textarea" name="personality" value={this.state.Personality} onChange={this.onChangeCharacterPersonality} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Attributes</Form.Label>
                                <Form.Control as="textarea" name="attributes" value={this.state.Attributes} onChange={this.onChangeCharacterAttributes} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Habbits</Form.Label>
                                <Form.Control as="textarea" name="habbits" value={this.state.Habbits} onChange={this.onChangeCharacterHabbits} />
                            </Form.Group>
                            <Button variant="success" type="submit">Edit Character</Button>
                            <Button variant="danger" type="button" onClick={this.deleteCharacter}>Delete Character</Button>
                        </Form>
                    </div>
                </div>                
            </div>
        )
    }
    
}
export default withParams(CharacterEdit);