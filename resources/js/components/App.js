import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//import components
import EventListContainer from './EventListContainer';
import EventDisplayContainer from './EventDisplayContainer';
import EventCreateContainer from './EventCreateContainer';
import EventHistoryContainer from './EventHistoryContainer';
import EventEditContainer from './EventEditContainer';
import NavBar from './views/NavBar';
import Footer from './views/Footer';
import UserRegisterContainer from './UserRegisterContainer';
import eventSearch from './eventSearch';
import Login from './Login';

export const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={EventListContainer} />
        <Route exact path="/event-display-:id" component={EventDisplayContainer} />
        <Route exact path="/event-create" component={EventCreateContainer} />
        <Route exact path="/event-history" component={EventHistoryContainer} />
        <Route exact path="/event-edit-:id" component={EventEditContainer} />
        <Route exact path="/user-register" component={UserRegisterContainer} />
        <Route exact path="/event-search" component={eventSearch} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </React.Fragment>
  )
}

export default App;
