import React, { Component } from 'react';

//import components
import UserRegister from './views/UserRegister';
import { registerUser } from './Api';


export default class UserRegisterContainer extends Component{
    constructor(props){
    super(props);

        this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordConfirm = this.onChangePasswordConfirm.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          emailAdress: "",
          name : "",
          password: "",
          password_confirmation: ""
        }
    }
    onChangeEmailAddress(input) {
      this.setState({
        emailAdress: input.target.value
      })
    }
    onChangePassword(input) {
      this.setState({
        password: input.target.value
      })
    }
    onChangePasswordConfirm(input) {
      this.setState({
        password_confirmation: input.target.value
      })
    }
    onChangeName(input) {
      this.setState({
        name: input.target.value
      })
    }

    onSubmit(data) {
      data.preventDefault();
      let obj = {
        "email": this.state.emailAdress,
        "name" : this.state.name,
        "avatar" : "https://www.lemagduchat.com/images/dossiers/2018-11/chat-drole-113730.jpg",
        "password": this.state.password,
        "password_confirmation": this.state.password_confirmation
      };
      registerUser(obj);
      this.props.history.push('/')
    }

    render(){
        return(
            <UserRegister
            onChangeEmailAddress={this.onChangeEmailAddress}
            onChangePassword={this.onChangePassword}
            onChangePasswordConfirm={this.onChangePasswordConfirm}
            onChangeName={this.onChangeName}
            onSubmit={this.onSubmit}
            />
        );
    }
}
