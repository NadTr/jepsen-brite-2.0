import React, { Component } from 'react';

//importcomponents
import { logUser, logUserOut } from './Api';
import { Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {SessionProvider, SessionContext} from './providers/SessionProvider';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

export default class Login extends Component {

  constructor(props, context){
    super(props, context)

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
    // retrieve data from the form
    let obj = {
      "email": this.state.emailAdress,
      "password": this.state.password
    };
    // await api request
    let token = await logUser(obj);
    console.log(token.data);
    // toggle the navbar content & send the access_token
    if(token!==null){this.context.toggleLogIn(token.access_token)}
  }

  async logOut(){
    // reset the login data from this.state
    this.setState({
      emailAdress: "",
      password: ""
    })
    // log out from the database
    await logUserOut(this.context.state.token)
    // toggle the navbar content
    this.context.toggleLogOut()

  }

render(){
  return(
    <>

      <div>
        {(this.context.state.logIn === false ) ?
          <Form>

            <div className="col-sm-8 col-md-10 col-lg-6 pt-5 mx-auto">
              <Form.Label className ="h4">Email address</Form.Label>
              <FormControl type="text" placeholder="Email" className="mr-sm-2" onChange={this.onChangeEmailAdress}/>
            </div>

            <div className="col-sm-8 col-md-10 col-lg-6 pt-5 mx-auto">
              <Form.Label className ="h4">Password</Form.Label>
              <FormControl type="password" placeholder="Password" className="mr-sm-2" onChange={this.onChangePassword}/>
            </div>

            <div className="col-sm-8 col-md-10 col-lg-6 pt-5 mx-auto">
              <Button className="navButton px-5 py-2" variant="#207A8E" type="submit" onClick={this.onSubmit}>Login</Button>
            </div>

          </Form>
         :
         window.location="/"
        }
      </div>

    </>

    )
  }
}

Login.contextType=SessionContext
