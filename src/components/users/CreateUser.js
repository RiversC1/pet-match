import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions';
import PetMatchForm from '../PetMatchForm';

class CreateUser extends Component {
    onSubmit = formValues => {
        this.props.createUser(formValues);
    }
    
    render() {
        return (
            <div>
                <h3>Create User</h3>
                <PetMatchForm onSubmit={this.onSubmit} />
            </div>
        );
    }

}

export default connect(null, { createUser })(CreateUser);