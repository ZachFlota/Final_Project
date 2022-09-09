import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, Routes, useParams } from 'react-router-dom';
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs"; 
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';


function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}


class ConflictPost extends Component {
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
    onChangeConflictType(e){
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
        axios.put(`http://localhost:3001/plot/conflict/update/${this.props.obj._id}`, conflictObject)
            .then(res => {
                this.setState(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ type: '', content: '' })
        window.location.replace('http://localhost:3000/workspace/tools/plot')
        
    }


    deleteConflict = () => {
        axios.delete(`http://localhost:3001/plot/conflict/delete/${this.props.obj._id}`)
        window.location.replace('http://localhost:3000/workspace/tools/plot')
    }
    
    componentDidMount = () => {
        axios.get(`http://localhost:3001/plot/conflict/${this.props.obj._id}`)
            .then(res => {
                this.setState(res.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return(
            <div>
                <li>
                    <h5>{this.props.obj.type}</h5>
                    {this.props.obj.content}
                    <div className="plotButtonDiv">
                        <button className="plotButton" type="button" onClick={this.deleteConflict}>
                            <BsFillTrashFill />
                        </button>
                        <button className="plotButton" type="button" onClick={this.openForm}>
                            <BsFillPencilFill />
                        </button>
                    </div>
                </li>
                <div className="conflictEdit-form" id="conflictEditForm">
                    <Form onSubmit={this.onSubmit}>
                    <Form.Group className="mb-3" controlId="type">
                            <Form.Select value={this.state.type} onChange={this.onChangeConflictType}>
                                <option>Select Conflict Type</option>
                                <option value="Concrete">Concrete</option>
                                <option value="Abstract">Abstract</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control as="textarea" value={this.state.content} onChange={this.onChangeConflictContent}/>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <ButtonGroup>
                                <Button variant="success" type="submit">Update</Button>
                                <Button variant="danger" type="button" onClick={this.closeForm}>Close</Button>
                            </ButtonGroup>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
    openForm() {
        document.getElementById("conflictEditForm").style.display = "block";
        console.log('clicked')
    }
    closeForm() {
        document.getElementById("conflictEditForm").style.display = "none";
        console.log('clicked')
    }
}
export default withParams(ConflictPost)