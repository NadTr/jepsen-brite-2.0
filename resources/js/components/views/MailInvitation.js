import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

// import components
import ConfirmModalContainer from '../ConfirmModalContainer';

export default class MailInvitation extends Component{
    render(){
        return(
           <>
              <div className="container mt-4">
                <h2>Invite des amis</h2>

                  <Form>

                     <div className="col-sm-8 col-md-10 col-lg-6 pt-1 mx-auto">
                       <Form.Group className="h4" controlId="formBasicEmail">
                           <Form.Label>Email address</Form.Label>
                           <Form.Control type="email" placeholder="Enter email" onChange={this.props.onChangeEmail} value={this.props.emailAddress}/>
                       </Form.Group>
                     </div>
                     <div className="col-sm-8 col-md-10 col-lg-6 pt-5 mx-auto">
                       <Button className="navButton px-3 py-2" variant="#207A8E" type="button" onClick={this.props.onAdd}>Add</Button>
                     </div>

                 </Form>
                 <ul className="list-group ">
                 {this.props.emailArray.map((email, index) =>
                   <li className="list-group-item list-group-item-info d-flex flex-row justify-content-between pb-1 pt-1"> <p>{email}</p>
                     <button type="button" className="btn btn-outline-info" onClick={() => this.props.onDeleteItem(index)} value={index} ><i className="far fa-trash-alt"></i></button>

                   </li>
                 )
                 }
               </ul>
                    <div className="col-sm-8 col-md-10 col-lg-6 pt-3 pb-5 mx-auto">
                      <div>
                      <ConfirmModalContainer
                          variant="primary"
                          size="lg"
                          label="Submit"
                          message="Do you want to send the emails ?"
                          onClick={this.props.onSubmit}/>
                      </div>
                    </div>

              </div>
           </>
        );
    }
}
