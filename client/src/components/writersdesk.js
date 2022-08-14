import React, { Component } from 'react';
import axios from 'axios';
import desk from '../assets/desk.png'


function Writersdesk(props) {
    return (
        <div className="writersdesk">
            <img src={desk} alt="wooden desk surface"></img>

        </div>
    )
    
}

export default Writersdesk