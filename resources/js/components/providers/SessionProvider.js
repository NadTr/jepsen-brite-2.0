import React, { Component } from 'react';

import { userSession }from '../Api';

export const SessionContext = React.createContext()

export const SessionConsumer = SessionContext.Consumer

export default class SessionProvider extends Component {
  constructor(props){
    super(props)

    this.toggleLogIn=this.toggleLogIn.bind(this)
    this.toggleLogOut=this.toggleLogOut.bind(this)

    this.state={
      logIn:false,
      token:"",
      session:""
    }
  }

  // toggleLogIn(token){
  async toggleLogIn(token){
    let session = await userSession(token)
    this.setState({
      logIn: true,
      token: token,
      session: session.data
    })
  }

  toggleLogOut(){
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
