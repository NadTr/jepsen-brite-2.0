import React, { Component } from 'react';

//import components
import MailInvitation from './views/MailInvitation';
import { mailInvite } from './Api';
import {SessionProvider, SessionContext} from './providers/SessionProvider';


export default class MailInvitationContainer extends Component{
    constructor(props){
    super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          emailAddress:"",
          emailArray: [],
        }
    }
    onChangeEmail(input) {
      this.setState({
        emailAddress: input.target.value
      })
    }

    onAdd(data) {
      data.preventDefault();
      if (this.state.emailAddress != ""){
        let emailArray = this.state.emailArray;
        emailArray.push(this.state.emailAddress);
        console.log(emailArray);
        this.setState({
          emailArray: emailArray,
          emailAddress: ""
        })
      }

    }

    onDeleteItem(index) {
      // console.log();

      let emailArray = this.state.emailArray;
      console.log(index);
      emailArray.splice(index, 1);
      console.log(emailArray);
      this.setState({
        emailArray: emailArray
      })
    }
    async onSubmit(data) {
      data.preventDefault();
      const id =this.props.match.params.id;
      let obj = {"mails": this.state.emailArray}
      console.log(id);
      await mailInvite(obj, id , this.context.state.token);
      this.props.history.push('/event/'+id);
    }

    async componentDidMount() {

    }

    render(){
        return(
            <MailInvitation
            emailAddress={this.state.emailAddress}
            emailArray={this.state.emailArray}
            onChangeEmail={this.onChangeEmail}
            onAdd={this.onAdd}
            onDeleteItem={this.onDeleteItem}
            onSubmit={this.onSubmit}
            />
        );
    }
}
MailInvitationContainer.contextType=SessionContext
