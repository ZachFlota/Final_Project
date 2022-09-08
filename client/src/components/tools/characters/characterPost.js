import React, { Component } from 'react';
import { BsFillPencilFill } from "react-icons/bs";
import Card from 'react-bootstrap/Card'


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
    getBackgroundColor() {
        let color;
        if (this.props.obj.Type === 'Protagonist') {
            color = '#b5e4a0'
        } else if (this.props.obj.Type === 'Antagonist') {
            color = '#fb8982'
        } else if (this.props.obj.Type === 'Love Interest') {
            color = '#f8b5da'
        } else if (this.props.obj.Type === 'Confidant') {
            color = '#b9ddf1'
        } else if (this.props.obj.Type === 'Tertiary') {
            color = '#fae495'
        } else if (this.props.obj.Type === 'Foil') {
            color = '#f5aa80 '
        }
        return(color)
    }
    

}

export default CharacterPost