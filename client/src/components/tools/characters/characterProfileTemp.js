import React, { Component } from 'react';

class CharacterProfileTemp extends Component {
    render() {
        return (
            <div className="characterProfileTemp">
                <div>
                    <h3>Name:</h3>
                    <p> {this.props.obj.name} </p>
                </div>
                <div>
                    <h3>Bio:</h3>
                    <p> {this.props.obj.Bio} </p>
                </div>
                <div>
                    <h3>Age:</h3>
                    <p> {this.props.obj.Age} </p>
                </div>
                <div>
                    <h3>Appearance:</h3>
                    <p> {this.props.obj.Appearance} </p>
                </div>
                <div>
                    <h3>Personality</h3>
                    <p> {this.props.obj.Personality} </p>
                </div>
                <div>
                    <h3>Attributes</h3>
                    <p> {this.props.obj.Attributes} </p>
                </div>
                <div>
                    <h3>Habbits</h3>
                    <p> {this.props.obk.Habbits} </p>
                </div>
            </div>
        )
    }
}

export default CharacterProfileTemp