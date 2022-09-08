import React, { Component } from 'react';
import axios from 'axios';
import ExpositionPost from "./expositionPost";

export default class ExpositionIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { expositionsCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/plot/exposition')
            .then(res => {
                this.setState({ expositionsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    expositionBox() {
        return this.state.expositionsCollection.map((data, i) => {
            return <ExpositionPost obj={data} key={i} />
        })
    }

    render() {
        return(
            <ul className="expositionBox">
                {this.expositionBox()}
            </ul>
        )
    }

}

