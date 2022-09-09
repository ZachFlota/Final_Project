import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Accordian from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';
import Sidebar from '../../sidebar';
import Exposition from './exposition';
import Conflict from './conflict';
import RisingAction from './risingAction';
import Climax from './climax';
import FallingAction from './fallingAction';
import Resolution from './resolution';

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
                                            <Conflict />
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
                                            <RisingAction />
                                        </Accordian.Body>
                                    </Accordian.Item>
                                </Accordian>
                                <Accordian defaultActivekey="0">
                                    <Accordian.Item eventKey="1">
                                        <Accordian.Header>Climax</Accordian.Header>
                                        <Accordian.Body>
                                            <Climax />
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
                                            <FallingAction />
                                        </Accordian.Body>
                                    </Accordian.Item>
                                </Accordian>
                                <Accordian defaultActivekey="0">
                                    <Accordian.Item eventKey="1">
                                        <Accordian.Header>Resolution</Accordian.Header>
                                        <Accordian.Body>
                                           <Resolution />
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