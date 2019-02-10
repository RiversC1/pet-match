import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PetList from '../components/pets/PetList';
import Header from './Header';
import history from '../history';

class App extends Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={PetList} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
};

export default App;