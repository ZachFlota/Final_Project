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


class ClimaxPost extends Component {
    constructor(props) {
        super(props)
        this.onChangeClimaxContent = this.onChangeClimaxContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            content: '',
        }
    }
    onChangeClimaxContent(e) {
        this.setState({ content: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const climaxObject = {
            content: this.state.content,
        };
        axios.put(`http://localhost:3001/plot/climax/update/${this.props.obj._id}`, climaxObject)
            .then(res => {
                this.setState(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ content: '' })
        window.location.replace('http://localhost:3000/workspace/tools/plot')
        
    }


    deleteClimax = () => {
        axios.delete(`http://localhost:3001/plot/climax/delete/${this.props.obj._id}`)
        window.location.replace('http://localhost:3000/workspace/tools/plot')
    }
    
    componentDidMount = () => {
        axios.get(`http://localhost:3001/plot/climax/${this.props.obj._id}`)
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
                    {this.props.obj.content}
                    <div className="plotButtonDiv">
                        <button className="plotButton" type="button" onClick={this.deleteClimax}>
                            <BsFillTrashFill />
                        </button>
                        <button className="plotButton" type="button" onClick={this.openForm}>
                            <BsFillPencilFill />
                        </button>
                    </div>
                </li>
                <div className="climaxEdit-form" id="climaxEditForm">
                    <Form onSubmit={this.onSubmit}>
                        <Form.Control as="textarea" value={this.state.content} onChange={this.onChangeClimaxContent}/>
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
        document.getElementById("climaxEditForm").style.display = "block";
        console.log('clicked')
    }
    closeForm() {
        document.getElementById("climaxEditForm").style.display = "none";
        console.log('clicked')
    }
}
export default withParams(ClimaxPost)