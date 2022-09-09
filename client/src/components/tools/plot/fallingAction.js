import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FallingActionIndex from './fallingActionIndex';



export default class FallingAction extends Component{
    constructor(props) {
        super(props)
        this.onChangeFallingContent = this.onChangeFallingContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            content: '',
        }
    }
    onChangeFallingContent(e) {
        this.setState({ content: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const fallingObject = {
            content: this.state.content,
        };
        axios.post('http://localhost:3001/plot/new/fallingAction', fallingObject)
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
                <FallingActionIndex />
                <div className="fallingAction-form" id="fallingActionForm">
                    <Form onSubmit={ this.onSubmit }>
                        <Form.Control as="textarea" value={this.state.content} onChange={this.onChangeFallingContent} />
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
        document.getElementById("fallingActionForm").style.display = "block";
        console.log('clicked')
    }
    closeForm() {
        document.getElementById("fallingActionForm").style.display = "none";
        console.log('clicked')
    }

}
