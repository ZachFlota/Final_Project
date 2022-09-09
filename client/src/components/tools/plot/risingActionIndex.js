import React, { Component } from 'react';
import axios from 'axios';
import RisingActionPost from "./risingActionPost";

export default class RisingActionIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { risingActionsCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/plot/risingAction')
            .then(res => {
                this.setState({ risingActionsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

   risingActionBox() {
        return this.state.risingActionsCollection.map((data, i) => {
            return <RisingActionPost obj={data} key={i} />
        })
    }

    render() {
        return(
            <ul className="expositionBox">
                {this.risingActionBox()}
            </ul>
        )
    }

}