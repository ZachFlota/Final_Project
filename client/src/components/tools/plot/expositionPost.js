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


class ExpositionPost extends Component {
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
        axios.put(`http://localhost:3001/plot/exposition/update/${this.props.obj._id}`, expoObject)
            .then(res => {
                this.setState(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ content: '' })
        window.location.replace('http://localhost:3000/workspace/tools/plot')
        
    }


    deleteExpo = () => {
        axios.delete(`http://localhost:3001/plot/exposition/delete/${this.props.obj._id}`)
        window.location.replace('http://localhost:3000/workspace/tools/plot')
    }
    
    componentDidMount = () => {
        axios.get(`http://localhost:3001/plot/exposition/${this.props.obj._id}`)
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
                        <button className="plotButton" type="button" onClick={this.deleteExpo}>
                            <BsFillTrashFill />
                        </button>
                        <button className="plotButton" type="button" onClick={this.openForm}>
                            <BsFillPencilFill />
                        </button>
                    </div>
                </li>
                <div className="expoEdit-form" id="expoEditForm">
                    <Form onSubmit={this.onSubmit}>
                        <Form.Control as="textarea" value={this.state.content} onChange={this.onChangeExpoContent}/>
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
        document.getElementById("expoEditForm").style.display = "block";
        console.log('clicked')
    }
    closeForm() {
        document.getElementById("expoEditForm").style.display = "none";
        console.log('clicked')
    }
}
export default withParams(ExpositionPost)