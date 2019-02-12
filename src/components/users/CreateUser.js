import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions';
import UserForm from './UserForm';

class CreateUser extends Component {
    onSubmit = formValues => {
        this.props.createUser(formValues);
    }
    
    render() {
        return (
            <div>
                <h3>Create User</h3>
                <UserForm onSubmit={this.onSubmit} />
            </div>
        );
    }

}

export default connect(null, { createUser })(CreateUser);