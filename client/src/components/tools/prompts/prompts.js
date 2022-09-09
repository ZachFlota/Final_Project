import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Sidebar from '../../sidebar';
import Construction from '../../../assets/Construction.png'

export default class Prompts extends Component {

    render() {
        return(
            <div className="Workspace">
                <div>
                    <Sidebar />
                </div>
                <div className="writersdesk">
                    <div className="sign"> 
                        <img className="constructionImg" src={Construction} alt="Page Under Construction image"></img>
                    </div>
                </div>
            </div>
        )
    }

}