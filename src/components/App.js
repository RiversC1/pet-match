import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PetList from '../components/pets/PetList';
import Header from './Header';
import history from '../history';
import CreateUser from './users/CreateUser';
import CreatePet from './pets/CreatePet';
import EditPet from './pets/EditPet';

class App extends Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={PetList} />
                            <Route path="/sign-up" exact component={CreateUser} />
                            <Route path="/new-pet" exact component={CreatePet} />
                            <Route path="/pets/edit/:id" exact component={EditPet} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
};

export default App;