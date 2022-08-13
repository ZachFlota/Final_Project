import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'
import Sidebar from './sidebar';
import Writersdesk from './writersdesk';

export default class Workspace extends Component {
    render() {
        return (
            <div className="Workspace">
                <Sidebar />
                <Writersdesk />
            </div>
        )
    }
}