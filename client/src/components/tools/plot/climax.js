import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ClimaxIndex from './climaxIndex';



export default class Climax extends Component{
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
        axios.post('http://localhost:3001/plot/new/climax', climaxObject)
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
                <ClimaxIndex />
                <div className="climax-form" id="climaxForm">
                    <Form onSubmit={ this.onSubmit }>
                        <Form.Control as="textarea" value={this.state.content} onChange={this.onChangeClimaxContent} />
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
        document.getElementById("climaxForm").style.display = "block";
        console.log('clicked')
    }
    closeForm() {
        document.getElementById("climaxForm").style.display = "none";
        console.log('clicked')
    }

}
