// ** login-form.js ** //
import React, { Component } from 'react';
import axios from 'axios';
export default class LogIn extends Component {
    constructor(props) {
        super(props)
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            password: '',
        }
    }
    onChangeUserEmail(e) {
        this.setState({ email: e.target.value})
    }
    onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const authObject = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost:3001/authentication/login', authObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ email: '', password: '' })
    }
    
    render() {
        return (
            <div className="loginForm">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            value={this.state.email}
                            onChange={this.onChangeUserEmail}
                            className="form-control"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={this.state.password}
                            onChange={this.onChangeUserPassword}
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>                    
                    <input className="btn btn-primary" type="submit" value="Login" />
                </form>
            </div>
        )
    }
}
