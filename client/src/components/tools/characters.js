import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../sidebar'
import Writersdesk from '../writersdesk';



export default class Characters extends Component {

    render() {
        return (
            <div className="Workspace">
                <Sidebar />
                <Writersdesk />
                    <div className="testdiv">
                        <div>
                            <input id="open-button" type="button" value="New Character" className="btn btn-primary btn-block" onClick={this.openForm} />
                        </div>
                        <div className="character-form" id="characterForm">
                            < form className="form-container">
                                <div className="form-group" >
                                    <label>Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Create Character" className="btn btn-success btn-block" />
                                    <input type="button" value="Close" className="btn btn-danger btn-block" onClick={this.closeForm} />
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }

    openForm() {
        document.getElementById("characterForm").style.display = "block";
        console.log('clicked')
    }
    closeForm() {
        document.getElementById("characterForm").style.display = "none";
        console.log('clicked')
    }
}


