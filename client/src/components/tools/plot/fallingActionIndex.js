import React, { Component } from 'react';
import axios from 'axios';
import FallingActionPost from "./fallingActionPost";

export default class FallingActionIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { fallingActionsCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/plot/fallingAction')
            .then(res => {
                this.setState({ fallingActionsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    fallingActionBox() {
        return this.state.fallingActionsCollection.map((data, i) => {
            return <FallingActionPost obj={data} key={i} />
        })
    }

    render() {
        return(
            <ul className="expositionBox">
                {this.fallingActionBox()}
            </ul>
        )
    }

}