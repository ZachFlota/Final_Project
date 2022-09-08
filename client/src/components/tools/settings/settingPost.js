import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { BsFillPencilFill } from "react-icons/bs";

class SettingPost extends Component {
    
    render() {
        return (
            <Card className="custom-class" style={{ width: '14rem', height: '14rem', backgroundColor: this.getBackgroundColor() }}>
                <Card.Body>
                    <div className="icons">
                        <a className="pencil" href={`/setting/edit/${this.props.obj._id}`}>
                            <BsFillPencilFill />
                        </a>
                    </div>
                    <Card.Title>
                        <a className="settinglink" href={`/setting/settings/${this.props.obj._id}`}>
                            <h3> {this.props.obj.name} </h3>
                        </a>  
                    </Card.Title>
                    <Card.Text>
                        {this.props.obj.Description}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
    getBackgroundColor() {
        let color;
        if (this.props.obj.Type === 'Physical') {
            color = '#b5e4a0'
        } else if (this.props.obj.Type === 'Social') {
            color = '#fae495'
        } else if (this.props.obj.Type === 'Historical') {
            color = '#b9ddf1'
        } else if (this.props.obj.Type === 'Psychological') {
            color = '#f8b5da'
        }
        return(color)
    }
}

export default SettingPost