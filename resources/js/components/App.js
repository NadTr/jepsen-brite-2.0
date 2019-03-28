import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//import components
import EventListContainer from './EventListContainer';
import EventDisplayContainer from './EventDisplayContainer';
import EventCreateContainer from './EventCreateContainer';

export const App = () => {
  return (
  <Switch>
    <Route exact path="/" component={EventListContainer} />
    <Route exact path="/event-display" component={EventDisplayContainer} />
    <Route exact path="/event-create" component={EventCreateContainer} />

  </Switch>
  )
}

export default App;
