import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPets } from '../../actions';
import Header from '../Header';

class PetList extends Component {
  componentDidMount = () => {
    this.props.fetchPets();
  };

<<<<<<< HEAD
  renderAdmin = pet => {
    if (pet.Owner === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/pets/edit/${pet.Name}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/pets/delete/${pet.Name}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
=======
    renderCreate = () => {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/new-pet" className="ui positive basic button">
                       Add a pet
                    </Link>
                </div>
            );
        }
>>>>>>> b26ec63e2565cf696528fb9f66ca79eaaca6354f
    }
  };

<<<<<<< HEAD
  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/new-pet" className="ui button primary">
            Add a pet
          </Link>
        </div>
      );
=======
    renderList = () => {
        return this.props.pets.map((pet, index) => {
            return (
                <div className="card" key={index}>
                    <div className="cont-card">
                        {this.renderAdmin(pet)}
                        <img className="img-card" src={pet.Photo} alt={pet.Name}></img>
                        <div className="texto-card">
                            <div className="header">{pet.Name}</div>
                            <div className="description">{pet.About}</div>
                        </div>
                    </div>
                </div>
            );
        })
>>>>>>> b26ec63e2565cf696528fb9f66ca79eaaca6354f
    }
  };

  renderList = () => {
    return this.props.pets.map((pet, index) => {
      return (
        <div className="ui relaxed list" key={index}>
          <div className="item">
            {this.renderAdmin(pet)}
            <img
              className="ui small rounded image"
              src={pet.Photo}
              alt={pet.Name}
            />
            <div className="content">
              <div className="header">{pet.Name}</div>
              <div className="description">{pet.About}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <Header />
        <h2>Pets</h2>
        {this.renderList()}
        {this.renderCreate()}
      </div>
    );
  }
}

const maptStateToProps = state => {
  return {
    pets: Object.values(state.pets),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  maptStateToProps,
  { fetchPets }
)(PetList);
