import React, { Component } from 'react';
import axios from 'axios';
import CharacterPost from './characterPost';

export default class CharacterIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { charactersCollection: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:3001/character/characters')
            .then(res => {
                this.setState({ charactersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    characterBox() {
        return this.state.charactersCollection.map((data, i) => {
            return <CharacterPost obj={data} key={i} />
        })
    }

    render() {
        return (
            <div className="characterBox">
                {this.characterBox()}
            </div>
        )
    }
}