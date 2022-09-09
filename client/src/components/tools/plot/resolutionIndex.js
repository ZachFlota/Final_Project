import React, { Component } from 'react';
import axios from 'axios';
import ResolutionPost from "./resolutionPost";

export default class ResolutionIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { resolutionsCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/plot/resolution')
            .then(res => {
                this.setState({ resolutionsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    resolutionBox() {
        return this.state.resolutionsCollection.map((data, i) => {
            return <ResolutionPost obj={data} key={i} />
        })
    }

    render() {
        return(
            <ul className="expositionBox">
                {this.resolutionBox()}
            </ul>
        )
    }

}