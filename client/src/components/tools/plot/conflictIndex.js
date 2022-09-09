import React, { Component } from 'react';
import axios from 'axios';
import ConflictPost from "./conflictPost";

export default class ConflictIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { conflictsCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/plot/conflict')
            .then(res => {
                this.setState({ conflictsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    conflictBox() {
        return this.state.conflictsCollection.map((data, i) => {
            return <ConflictPost obj={data} key={i} />
        })
    }

    render() {
        return(
            <ul className="expositionBox">
                {this.conflictBox()}
            </ul>
        )
    }

}

