import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ResolutionIndex from './resolutionIndex';



export default class Resolution extends Component{
    constructor(props) {
        super(props)
        this.onChangeResolutionContent = this.onChangeResolutionContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            content: '',
        }
    }
    onChangeResolutionContent(e) {
        this.setState({ content: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const resolutionObject = {
            content: this.state.content,
        };
        axios.post('http://localhost:3001/plot/new/resolution', resolutionObject)
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
                <ResolutionIndex />
                <div className="resolution-form" id="resolutionForm">
                    <Form onSubmit={ this.onSubmit }>
                        <Form.Control as="textarea" value={this.state.content} onChange={this.onChangeResolutionContent} />
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
        document.getElementById("resolutionForm").style.display = "block";
        console.log('clicked')
    }
    closeForm() {
        document.getElementById("resolutionForm").style.display = "none";
        console.log('clicked')
    }

}
