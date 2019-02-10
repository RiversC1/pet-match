import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../../actions';

class PetList extends Component {
    componentDidMount = () => {
        this.props.fetchPets();
    }
    render() {
        return (
            <div>PetList</div>
        )
    }
};

const maptStateToProps = state => {
    return { pets: Object.values(state.pets) };
}

export default connect(maptStateToProps, { fetchPets })(PetList);