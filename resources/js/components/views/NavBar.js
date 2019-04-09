import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';

//importcomponents
import { logUser, logUserOut } from '../Api';
import {SessionProvider, SessionContext} from '../providers/SessionProvider';


class NavBar extends Component{
  constructor(props, context){
    super(props, context);

    this.onChangeEmailAdress = this.onChangeEmailAdress.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.logOut = this.logOut.bind(this);

    this.state = {
      emailAdress: "",
      password: ""
    }
  }

  onChangeEmailAdress(input) {
    this.setState({
      emailAdress: input.target.value
    })
  }

  onChangePassword(input) {
    this.setState({
      password: input.target.value
    })
  }

  async onSubmit(data) {
    data.preventDefault();
    let obj = {
      "email": this.state.emailAdress,
      "password": this.state.password
    };
    let token = await logUser(obj);
    console.log(token.data.access_token);
    if(token!==null){this.context.toggleLogIn()}
    this.context.toggleLogIn(token.data.access_token)
  }

  // logOut(){
  async logOut(){
    this.setState({
      emailAdress: "",
      password: ""
    })
      await logUserOut(this.context.state.token)
    this.context.toggleLogOut()

  }

  render() {
    return(
      <>
        <Navbar bg="primary" variant="dark" style={{ marginBottom: '0.5rem' }}>
          <Link to={"/"}>
            <Button variant="primary">Home</Button>
          </Link>
          <Nav className="mr-auto">
            <Link to={"/event-create"}>
              <Button variant="primary">Create Event</Button>
            </Link>
            <Link to={"/event-history"}>
              <Button variant="primary">Past Events</Button>
            </Link>
          </Nav>
            <div>
              {(this.context.state.logIn === false ) ?
                <Form inline>
                  <FormControl type="text" placeholder="Email" className=" mr-sm-2" onChange={this.onChangeEmailAdress}/>
                  <FormControl type="password" placeholder="Password" className=" mr-sm-2" onChange={this.onChangePassword}/>
                  <Button type="submit" onClick={this.onSubmit}>Login</Button>
                  <Link to={"/user-register"}>
                    <Button variant="primary">Register</Button>
                  </Link>
                </Form>
               :
               <div>
                  <h5>Greetings</h5>{this.context.state.pseudo}
                  <Button variant="primary" onClick={this.logOut}>Log out</Button>
                </div>
              }
            </div>

        </Navbar>
      </>
    )
  }
}

NavBar.contextType=SessionContext

export default NavBar
