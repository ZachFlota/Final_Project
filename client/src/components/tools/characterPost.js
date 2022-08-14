import React, { Component } from 'react';

class CharacterPost extends Component {
    render() {
        return (
            <div className="characterPost">
                <a href={`/workspace/tools/characters/${this.props.obj._id}`}>
                    <h2> {this.props.obj.name} </h2>
                </a>
                <p> {this.props.obj.Bio} </p>
            </div>
        )
    }
}

export default CharacterPost