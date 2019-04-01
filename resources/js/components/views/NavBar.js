import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';

export default class NavBar extends Component{
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
        <Form inline>
           <InputGroup>
             <InputGroup.Prepend>
               <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
             </InputGroup.Prepend>
             <FormControl
               placeholder="Username"
               aria-label="Username"
               aria-describedby="basic-addon1"
             />
           </InputGroup>
         </Form>
         <Form inline>
           <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
           <Button type="submit">Submit</Button>
         </Form>
         <Link to={"/user-register"}>
            <Button variant="primary">Register</Button>
          </Link>
      </Navbar>
      </>
    )
  }
}
