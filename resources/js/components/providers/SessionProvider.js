import React, { Component } from 'react';

import { userSession }from '../Api';

export const SessionContext = React.createContext()

export const SessionConsumer = SessionContext.Consumer

export default class SessionProvider extends Component {
  constructor(props){
    super(props)

    if (window.sessionStorage.getItem("logIn")){
      this.state={
        logIn:window.sessionStorage.getItem("logIn"),
        token:window.sessionStorage.getItem("token"),
        session:JSON.parse(window.sessionStorage.getItem("session"))
      }
    }
    else{
      this.state={
        logIn:false,
        token:"",
        session:""
      }
    }

    this.toggleLogIn=this.toggleLogIn.bind(this)
    this.toggleLogOut=this.toggleLogOut.bind(this)


  }

  // toggleLogIn(token){
  async toggleLogIn(token){
    let session = await userSession(token)
    window.sessionStorage.setItem("logIn", true)
    window.sessionStorage.setItem("token" , token)
    window.sessionStorage.setItem('session', JSON.stringify(session.data))
    console.log("session ", session);
    console.log("logged in");


    this.setState({
      logIn: true,
      token: token,
      session: session.data
    })

  }

  toggleLogOut(){
    window.sessionStorage.clear();
    console.log("logged out");

    this.setState({
      logIn:false,
      token:"",
      session:""
    })

  }

  render() {
    return(
      <SessionContext.Provider value={{state : this.state, toggleLogIn: this.toggleLogIn, toggleLogOut: this.toggleLogOut}}>
        {this.props.children}
      </SessionContext.Provider>
    )
  }
}
