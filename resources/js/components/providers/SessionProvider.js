import React, { Component } from 'react';

export const SessionContext = React.createContext()

export const SessionConsumer = SessionContext.Consumer

export default class SessionProvider extends Component {
  constructor(props){
    super(props)

    this.state= {
      session: [],
      contextBS: "Romain code tellement mal"
    }
  }



  render() {
    console.log("provider", this.state)
    return(
      <SessionContext.Provider value={{state : this.state}}>
        {this.props.children}
      </SessionContext.Provider>
    )
  }
}
