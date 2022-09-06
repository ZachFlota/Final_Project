import React, { Component } from 'react';
import { BsFillPencilFill } from "react-icons/bs";
import Card from 'react-bootstrap/Card'
import papergreen from './assets/papergreen.png';
import paperblue from './assets/paperblue.png';
import papergrey from './assets/papergrey.png';
import paperorange from './assets/paperorange.png';
import paperpink from './assets/paperpink.png';
import paperyellow from './assets/paperyellow.png';

class CharacterPost extends Component {

    

    render() {
        return (
            <Card className="custom-class" style={{ width: '14rem', height: '14rem', backgroundColor: this.getBackgroundColor() }}>
                <Card.Body>
                    <div className="icons">
                        <a className="pencil" href={`/character/edit/${this.props.obj._id}`}>
                            <BsFillPencilFill />
                        </a>
                    </div>
                    <Card.Title>
                        <a className="characterlink" href={`/character/characters/${this.props.obj._id}`}>
                            <h3> {this.props.obj.name} </h3>
                        </a>
                    </Card.Title>
                    <Card.Text>
                        {this.props.obj.Bio}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
    getBackgroundColor(props) {
        let color;
        if(this.props.obj.Type === 'Protagonist') {
            color = '#cfebc0'
        } else if (this.props.obj.Type === 'Antagonist') {
            color = '#bfc0bc'
        } else if (this.props.obj.Type === 'Love Interest') {
            color = '#f5c0bd'
        } else if (this.props.obj.Type === 'Confidant') {
            color = '#b9ddf1'
        } else if (this.props.obj.Type === 'Tertiary') {
            color = '#f4ebbf'
        } else if (this.props.obj.Type === 'Foil') {
            color = '#f6d3bc'
        }
        return(color)
    }
    

}

export default CharacterPost