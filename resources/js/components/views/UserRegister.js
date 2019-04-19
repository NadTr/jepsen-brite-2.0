import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

// import components
import ConfirmModalContainer from '../ConfirmModalContainer';

export default class UserRegister extends Component{
    render(){
        return(
           <>
              <div className="container">

                  <Form>

                     <div className="col-sm-8 col-md-10 col-lg-6 pt-5 mx-auto">
                       <Form.Group className="h4" controlId="formBasicName">
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="name" placeholder="Name" onChange={this.props.onChangeName}/>
                       </Form.Group>
                     </div>

                     <div className="col-sm-8 col-md-10 col-lg-6 pt-1 mx-auto">
                       <Form.Group className="h4" controlId="formBasicEmail">
                           <Form.Label>Email address</Form.Label>
                           <Form.Control type="email" placeholder="Enter email" onChange={this.props.onChangeEmailAddress}/>
                           <Form.Text className="text-muted">
                           We'll never share your email with anyone else.
                           </Form.Text>
                       </Form.Group>
                     </div>

                     <div className="col-sm-8 col-md-10 col-lg-6 pt-1 mx-auto">
                       <Form.Group className="h4" controlId="formBasicPassword">
                           <Form.Label>Password</Form.Label>
                           <Form.Control type="password" placeholder="Password" onChange={this.props.onChangePassword}/>
                       </Form.Group>
                     </div>

                     <div className="col-sm-8 col-md-10 col-lg-6 pt-1 mx-auto">
                       <Form.Group className="h4" controlId="formConfirmPassword">
                           <Form.Label>Confirm password</Form.Label>
                           <Form.Control type="password" placeholder="Password" onChange={this.props.onChangePasswordConfirm}/>
                       </Form.Group>
                    </div>

                 </Form>
                    <div className="col-sm-8 col-md-10 col-lg-6 pt-3 pb-5 mx-auto">
                      <div>
                      <ConfirmModalContainer
                          variant="primary"
                          size="lg"
                          label="Submit"
                          message="Do you want to register ?"
                          onClick={this.props.onSubmit}/>
                      </div>
                    </div>

              </div>
           </>
        );
    }
}
