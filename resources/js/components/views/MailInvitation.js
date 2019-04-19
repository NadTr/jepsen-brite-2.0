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
                <h2>Invite your friends</h2>

                  <Form>
                     <div className="col-sm-8 col-md-10 col-lg-6 pt-1 mx-auto">
                       <h4>Email address</h4>
                       <Form.Group className="d-flex" controlId="formBasicEmail">
                           <Form.Control type="email" placeholder="Enter email" onChange={this.props.onChangeEmail} value={this.props.emailAddress}/>
                           <Button className="navButton" variant="#207A8E" type="button" onClick={this.props.onAdd}>Add</Button>
                       </Form.Group>
                     </div>
                 </Form>
                 <ul className="list-group ">
                 {this.props.emailArray.map((email, index) =>
                   <li className="list-group-item list-group-item-info d-flex flex-row justify-content-between pb-1 pt-1" key={index}> <p>{email}</p>
                     <button type="button" className="navButton" variant="#207A8E" onClick={() => this.props.onDeleteItem(index)} value={index} ><i className="far fa-trash-alt"></i></button>
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
