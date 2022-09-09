// ** login-form.js ** //
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import classnames from 'classnames';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Navigate, Navigation } from 'react-router-dom';



class LogIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            // this.props.navigation.navigate("/");
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            // this.props.navigation.navigate("/")
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    
    render() {
        const {errors} = this.state;
        return (
            <div className="Workspace">
                <Card className="register">
                    <Form onSubmit={this.handleSubmit}>
                        <div>
                            <h3>Login</h3>
                        </div>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={ this.state.email }
                                onChange={ this.handleInputChange }
                                className={classnames('form-control form-control-lg', {'is-invalid': errors.email})}
                            />
                            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={ this.state.password }
                                onChange={ this.handleInputChange }
                                className={classnames('form-control form-control-lg', {'is-invalid': errors.password})}
                            />
                            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                        </Form.Group> 
                        <Form.Group className="mb-3">                   
                            <Button variant="success" type="submit">Login</Button>
                        </Form.Group>
                    </Form>
                </Card>
            </div>
        )
    }
}

LogIn.propTypes = {
    loginUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(LogIn)
