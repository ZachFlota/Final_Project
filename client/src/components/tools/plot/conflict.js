import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ConflictIndex from './conflictIndex';



export default class Exposition extends Component{
    constructor(props) {
        super(props)
        this.onChangeConflictType = this.onChangeConflictType.bind(this);
        this.onChangeConflictContent = this.onChangeConflictContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            type: '',
            content: '',
        }
    }
    onChangeConflictType(e) {
        this.setState({ type: e.target.value })
    }
    onChangeConflictContent(e) {
        this.setState({ content: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const conflictObject = {
            type: this.state.type,
            content: this.state.content,
        };
        axios.post('http://localhost:3001/plot/new/conflict', conflictObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ content: '' })
        window.location.replace('http://localhost:3000/workspace/tools/plot')
        
    }

    render() {
        return(
            <div className="exposition">
                <ConflictIndex />
                <div className="conflict-form" id="conflictForm">
                    <Form onSubmit={ this.onSubmit }>
                        <Form.Group className="mb-3" controlId="type">
                            <Form.Select value={this.state.type} onChange={this.onChangeConflictType}>
                                <option>Select Conflict Type</option>
                                <option value="Concrete">Concrete</option>
                                <option value="Abstract">Abstract</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" value={this.state.content} onChange={this.onChangeConflictContent} />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <ButtonGroup>
                                <Button variant="success" type="submit">Add</Button>
                                <Button variant="danger" type="button" onClick={this.closeForm}>Close</Button>
                            </ButtonGroup>
                        </div>
                    </Form>
                </div>
                <div className="d-grid gap-2">
                    <ButtonGroup>
                        <Button variant="secondary" type="button" onClick={this.openForm} >New</Button>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
    openForm() {
        document.getElementById("conflictForm").style.display = "block";
        console.log('clicked')
    }
    closeForm() {
        document.getElementById("conflictForm").style.display = "none";
        console.log('clicked')
    }

}
