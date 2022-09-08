import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Accordian from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';
import Sidebar from '../../sidebar';
import Exposition from './exposition';

export default class Plot extends Component {

    render() {
        return(
            <div className="Workspace">
                <div>
                    <Sidebar />
                </div>
                <div className="writersdesk">
                    <div className="plotBox">
                        <Card className="cardPlot">
                            <Card.Header as="h4">Beginning</Card.Header>
                            <Card.Body>
                                <Accordian defaultActivekey="0" className="accordianBeg">
                                    <Accordian.Item eventKey="0">
                                        <Accordian.Header>Exposition</Accordian.Header>
                                        <Accordian.Body>
                                            <Exposition />
                                        </Accordian.Body>
                                    </Accordian.Item>
                                </Accordian>
                                <Accordian defaultActivekey="0">
                                    <Accordian.Item eventKey="1">
                                        <Accordian.Header>Conflict</Accordian.Header>
                                        <Accordian.Body>
                                            <div>
                                                Conflict details go here
                                            </div>
                                            <div className="d-grid gap-2">
                                                <ButtonGroup>
                                                    <Button variant="secondary">Add</Button>
                                                    <Button variant="secondary">Edit</Button>
                                                </ButtonGroup>
                                            </div>
                                        </Accordian.Body>
                                    </Accordian.Item>
                                </Accordian>
                            </Card.Body>
                        </Card>

                        <Card className="cardPlot">
                            <Card.Header as="h4">Middle</Card.Header>
                            <Card.Body>
                                <Accordian defaultActivekey="0" className="accordianMid">
                                    <Accordian.Item eventKey="0">
                                        <Accordian.Header>Rising Action</Accordian.Header>
                                        <Accordian.Body>
                                            <div>    
                                                Rising Action details go here
                                            </div>
                                            <div className="d-grid gap-2">
                                                <ButtonGroup>
                                                    <Button variant="secondary">Add</Button>
                                                    <Button variant="secondary">Edit</Button>
                                                </ButtonGroup>
                                            </div>
                                        </Accordian.Body>
                                    </Accordian.Item>
                                </Accordian>
                                <Accordian defaultActivekey="0">
                                    <Accordian.Item eventKey="1">
                                        <Accordian.Header>Climax</Accordian.Header>
                                        <Accordian.Body>
                                            <div>
                                                Climax details go here
                                            </div>    
                                            <div className="d-grid gap-2">
                                                <ButtonGroup>
                                                    <Button variant="secondary">Add</Button>
                                                    <Button variant="secondary">Edit</Button>
                                                </ButtonGroup>
                                            </div>
                                        </Accordian.Body>
                                    </Accordian.Item>
                                </Accordian>
                            </Card.Body>
                        </Card>

                        <Card className="cardPlot">
                            <Card.Header as="h4">End</Card.Header>
                            <Card.Body>
                                <Accordian defaultActivekey="0" className="accordianEnd">
                                    <Accordian.Item eventKey="0">
                                        <Accordian.Header>Falling Action</Accordian.Header>
                                        <Accordian.Body>
                                            <div>
                                                Falling Action details go here
                                            </div>
                                            <div className="d-grid gap-2">
                                                <ButtonGroup>
                                                    <Button variant="secondary">Add</Button>
                                                    <Button variant="secondary">Edit</Button>
                                                </ButtonGroup>
                                            </div>
                                        </Accordian.Body>
                                    </Accordian.Item>
                                </Accordian>
                                <Accordian defaultActivekey="0">
                                    <Accordian.Item eventKey="1">
                                        <Accordian.Header>Resolution</Accordian.Header>
                                        <Accordian.Body>
                                            <div>
                                                Resolution details go here
                                            </div>
                                            <div className="d-grid gap-2">
                                                <ButtonGroup>
                                                    <Button variant="secondary">Add</Button>
                                                    <Button variant="secondary">Edit</Button>
                                                </ButtonGroup>
                                            </div>
                                        </Accordian.Body>
                                    </Accordian.Item>
                                </Accordian>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }

}