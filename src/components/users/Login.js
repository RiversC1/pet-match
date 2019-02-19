import React, { Component } from 'react';
import {Button,Input,Container,Header} from 'semantic-ui-react';
/* import { signIn, signOut } from '../actions'; */
import fire from '../../config/Fire';

class Login extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state={
    username:'',
    email:'',
    password:''
  }
  }
  handleSubmit (e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{

    }).catch((error)=>{
      alert(error);
    });
  }

  handleChange=(e)=>{
    const {name,value}=e.target;

    this.setState({[name]:value});
  }

  render() {

    const {username,email,password}=this.state;


    return (
      <Container text>

        <Header as="h2">Register</Header>
        <Input name="username" onChange={this.handleChange} value={username} placeholder="Username" fluid/>
        <Input name="email" onChange={this.handleChange} value={email} placeholder="Email" fluid/>
        <Input name="password" onChange={this.handleChange} value={password} type="password" placeholder="Password" fluid/>

        <Button onClick={this.handleSubmit}>Submit</Button>
      </Container>
    );
  }
}

export default Login;
