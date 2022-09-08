import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ExpositionIndex from './expositionIndex';



export default class Exposition extends Component{
    constructor(props) {
        super(props)
        this.onChangeExpoContent = this.onChangeExpoContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            content: '',
        }
    }
    onChangeExpoContent(e) {
        this.setState({ content: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const expoObject = {
            content: this.state.content,
        };
        axios.post('http://localhost:3001/plot/new/exposition', expoObject)
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
                <ExpositionIndex />
                <div className="exposition-form" id="expositionForm">
                    <Form onSubmit={ this.onSubmit }>
                        <Form.Control as="textarea" value={this.state.content} onChange={this.onChangeExpoContent} />
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
        document.getElementById("expositionForm").style.display = "block";
        console.log('clicked')
    }
    closeForm() {
        document.getElementById("expositionForm").style.display = "none";
        console.log('clicked')
    }

}
