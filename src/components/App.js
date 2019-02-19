import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PetList from '../components/pets/PetList';
import Header from './Header';
import history from '../history';
import CreateUser from './users/CreateUser';
import Login from './users/Login';
import CreatePet from './pets/CreatePet';
import EditPet from './pets/EditPet';
import StreamDelete from './pets/DeletePet';
import fire from '../config/Fire';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            user:{},
        }
    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({user});
                
            }else{
                this.setState({user:null});
            }
        });
    }

    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        
                        {this.state.user ? (
                        <PetList/>
                        
                        ):(<Login/>)}
                        <Switch>
                            {/* <Route path="/" exact component={PetList} /> */}
                            <Route path="/sign-up" exact component={CreateUser} />
                            <Route path="/sign-in" exact component={Login} />
                            <Route path="/new-pet" exact component={CreatePet} />
                            <Route path="/pets/edit/:id" exact component={EditPet} />
                            <Route path="/pets/delete/:id" exact component={StreamDelete} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
};

export default App;