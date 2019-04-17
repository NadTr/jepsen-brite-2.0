import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavbarBrand, NavbarCollapse, NavbarToggle, NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

//importcomponents
import { logUser, logUserOut, searchEvent } from '../Api';
import {SessionProvider, SessionContext} from '../providers/SessionProvider';

export default class NavBar extends Component{
  constructor(props, context){
    super(props, context);
    console.log(context);

    this.onChangeSearchItem = this.onChangeSearchItem.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.logOut = this.logOut.bind(this);

    this.state = {
      searchItem:""
    }
  }


  onChangeSearchItem(input) {
    this.setState({
      searchItem: input.target.value
    })
  }

  async onSearch(){

  }

  async logOut(){
    // toggle the navbar content
    this.context.toggleLogOut()

    // log out from the database
    await logUserOut(this.context.state.token)


  }

  render() {
    return (
      <>
        <Navbar id="navbar" collapseOnSelect expand="lg">
        <Navbar.Brand>
          <Link to={"/"}>
            <div className="navbar-brand">
              <h1>Event Food</h1>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
<<<<<<< HEAD
          <Link to={"/"}>
            <Button className="navButton" variant="#207A8E">Home</Button>
          </Link>
          <Nav className="mr-auto">
          <Link to={"/pastevents/page="+1}>
            <Button className="navButton" variant="#207A8E">Past Events</Button>
          </Link>
          <Form inline>
          <FormControl type="text" className=" mr-sm-2" onChange={this.onChangeSearchItem}/>
            <Link to={"/search"}>
              <Button className="navButton" variant="#207A8E" type="submit" onClick={this.onSearch}>Search</Button>
=======
          <Link to={"/events/page="+1}>
            <Button className="navButton" variant="#207A8E">Events</Button>
          </Link>
          <Nav className="mr-auto">
            <Link to={"/pastevents/page="+1}>
              <Button className="navButton" variant="#207A8E">Past Events</Button>
>>>>>>> master
            </Link>
            <Form inline>
              <FormControl type="text" className=" mr-sm-2" onChange={this.onChangeSearchItem}/>
              <Link to={"/search?"+this.state.searchItem}>
                <Button className="navButton" variant="#207A8E" type="submit" onClick={this.onSearch}>Search</Button>
              </Link>
            </Form>
          </Nav>

        </Nav>
            <div>

              {(this.context.state.logIn === false ) ?
                <div>
                  <Link to="/login">
                    <Button className="navButton" variant="#207A8E">login</Button>
                  </Link>
                  <Link to="/register">
                    <Button className="navButton" variant="#207A8E">Register</Button>
                  </Link>
                </div>
               :
               <Nav className="mr-auto">
                 <Link to={"/addEvent"}>
                   <Button className="navButton" variant="#207A8E">Create Event</Button>
                 </Link>
                  <Col>
                    <Row><h5>Greetings </h5></Row>
                    <Row>{this.context.state.session.name}</Row>
                  </Col>
                  <Button className="navButton" variant="#207A8E" onClick={this.logOut}>Log out</Button>
                </Nav>

              }
            </div>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

NavBar.contextType=SessionContext
