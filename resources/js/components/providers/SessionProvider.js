import React, { Component } from 'react';

export const SessionContext = React.createContext()

export const SessionConsumer = SessionContext.Consumer

export default class SessionProvider extends Component {
  constructor(props){
    super(props)

    this.toggleLogIn=this.toggleLogIn.bind(this)
    this.toggleLogOut=this.toggleLogOut.bind(this)

    this.state= {
      logIn:false,
      id: "",
      name: "Steph",
      pseudo: "Patou",
      email: "stephsteph@becodemail.com"
    }
  }

  toggleLogIn(){
    this.setState({
      logIn: true
    })
  }

  toggleLogOut(){
    this.setState({
      logIn: false
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
