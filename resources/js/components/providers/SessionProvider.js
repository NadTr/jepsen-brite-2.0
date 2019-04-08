import React, { Component } from 'react';

export const SessionContext = React.createContext()

export const SessionConsumer = SessionContext.Consumer

export default class SessionProvider extends Component {
  constructor(props){
    super(props)

    this.state= {
      id: 13,
      name: "Steph",
      pseudo: "Patou",
      email: "stephsteph@becodemail.com"
    }
  }



  render() {
    return(
      <SessionContext.Provider value={{state : this.state}}>
        {this.props.children}
      </SessionContext.Provider>
    )
  }
}
