import React, { Component } from 'react';
import axios from 'axios';
import ClimaxPost from "./climaxPost";

export default class ClimaxIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { climaxCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/plot/climax')
            .then(res => {
                this.setState({ climaxCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    climaxBox() {
        return this.state.climaxCollection.map((data, i) => {
            return <ClimaxPost obj={data} key={i} />
        })
    }

    render() {
        return(
            <ul className="expositionBox">
                {this.climaxBox()}
            </ul>
        )
    }

}