import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';

//importcomponents
import { logUser } from '../Api';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmailAdress = this.onChangeEmailAdress.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

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

  onSubmit(data) {
    data.preventDefault();
    let obj = {
      "email": this.state.emailAdress,
      "password": this.state.password
    };
    logUser(JSON.stringify(obj));
  }

  render() {
    return (
      <>
        <Navbar id="navbar">
          <Navbar.Brand>
            <Link to={"/"}>
              <div className="navbar-brand">              
                <h1>Event Food</h1>             
              </div>
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Link to={"/"}>
              <Button className="navButton" variant="#207A8E">Home</Button>
            </Link>
            <Link to={"/event-create"}>
              <Button className="navButton" variant="#207A8E">Create Event</Button>
            </Link>
            <Link to={"/event-history"}>
              <Button className="navButton" variant="#207A8E">Past Events</Button>
            </Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Email" className=" mr-sm-2" onChange={this.onChangeEmailAdress} />
            <FormControl type="password" placeholder="Password" className=" mr-sm-2" onChange={this.onChangePassword} />
            <Button className="navButton" variant="#207A8E" type="submit" onClick={this.onSubmit}>Login</Button>
          </Form>
          <Link to={"/user-register"}>
            <Button className="navButton" variant="#207A8E">Register</Button>
          </Link>
        </Navbar>
      </>
    )
  }
}
