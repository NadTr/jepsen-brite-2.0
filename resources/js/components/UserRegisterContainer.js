import React, { Component } from 'react';

//import components
import UserRegister from './views/UserRegister';
import { registerUser } from './Api';


export default class UserRegisterContainer extends Component{
    constructor(props){
    super(props);

        this.onChangeEmailAdress = this.onChangeEmailAdress.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePseudo = this.onChangePseudo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          emailAdress: "",
          name : "",
          pseudo: "",
          password: ""
        }
    }
    onChangeEmailAdress(input) {
      console.log("changeEmail");
      this.setState({
        emailAdress: input.target.value
      })
    }
    onChangePassword(input) {
      this.setState({
        password: input.target.value
      })
    }
    onChangeName(input) {
      console.log("changeName");
      this.setState({
        name: input.target.value
      })
    }
    onChangePseudo(input) {
      this.setState({
        pseudo: input.target.value
      })
    }
    onSubmit(data) {
      console.log("1000");
      data.preventDefault();
      let obj = {
        "email": this.state.emailAdress,
      	"name" : this.state.name,
      	"pseudo": this.state.pseudo,
      	"password": this.state.password
      };
      registerUser(JSON.stringify(obj));
      console.log(obj);
    }
    render(){
        return(
            <UserRegister
            onChangeEmailAdress={this.onChangeEmailAdress}
            onChangePassword={this.onChangePassword}
            onChangeName={this.onChangeName}
            onChangePseudo={this.onChangePseudo}
            onSubmit={this.onSubmit}
            />
        );
    }
}
