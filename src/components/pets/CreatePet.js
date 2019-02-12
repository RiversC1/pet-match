import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPet } from '../../actions';
import PetForm from './PetForm';

class CreatePet extends Component {
    onCreatePet = formValues => {
        this.props.createPet(formValues);
    }

    render() {
        return (
            <div>
                <h3>Add new pets</h3>
                <PetForm onSubmit={this.onCreatePet} />
            </div>   
        );
    }
}

export default connect(null, { createPet })(CreatePet);