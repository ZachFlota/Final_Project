import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Sidebar from '../../sidebar';

export default class Prompts extends Component {

    render() {
        return(
            <div className="Workspace">
                <div>
                    <Sidebar />
                </div>
                <div className="writersdesk">
                    
                </div>
            </div>
        )
    }

}