// ** create-user.component.js ** //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import classnames from 'classnames';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        )
    };
    return ComponentWithRouterProp;
}


class CreateUser extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push("/")
            }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push("/");
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="createUserForm">
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h3>Create an Account</h3>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Name" name="name" value={ this.state.name } onChange={ this.handleInputChange } className={classnames('form-control form-control-lg', {'is-invalid': errors.name})} />
                        {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" name="email" value={ this.state.email } onChange={ this.handleInputChange } className={classnames('form-control form-control-lg', {'is-invalid': errors.email})} />
                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" name="password" value={ this.state.password } onChange={ this.handleInputChange } className={classnames('form-control form-control-lg', {'is-invalid': errors.password})} />
                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Confirm Password" name="password_confirm" value={ this.state.password_confirm } onChange={ this.handleInputChange } className={classnames('form-control form-control-lg', {'is-invalid': errors.password_confirm})} />
                        {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

CreateUser.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(CreateUser))