import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../../actions';

class PetList extends Component {
    componentDidMount = () => {
        this.props.fetchPets();
    }

    renderList = () => {
        return this.props.pets.map(pet => {
            return (
                <div className="ui relaxed list" key={pet.Name}>
                    <div className="item">
                        <img className="ui small rounded image" src={pet.Photo} alt={pet.Name}></img>
                        <div className="content">
                            <div className="header">{pet.Name}</div>
                            <div className="description">{pet.About}</div>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        console.log(this.props.pets);
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
};

const maptStateToProps = state => {
    return { pets: Object.values(state.pets) };
}

export default connect(maptStateToProps, { fetchPets })(PetList);