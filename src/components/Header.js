import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import {Button} from 'semantic-ui-react';
import { longStackSupport } from 'q';
import fire from '../config/Fire';


class Header extends Component {

  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(){
    fire.auth().signOut();
  }
  render(){
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        PetMatch
      </Link>
      <div className="right menu">
        <Link to="/sign-up" className="item">
          Sign Up
        </Link>
        {/* <GoogleAuth /> */}
        {/* <Link to="/sign-in" className="item" >
            Sign in
        </Link> */}
        <Button onClick={this.logout}>Sign out</Button>
      </div>
    </div>
  );
  }
}

export default Header;
