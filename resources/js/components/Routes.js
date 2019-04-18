import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//import components
import NavBar from './views/NavBar';

import HomeContainer from './HomeContainer';
import EventListContainer from './EventListContainer';
import EventDisplayContainer from './EventDisplayContainer';
import EventCreateContainer from './EventCreateContainer';
import EventEditContainer from './EventEditContainer';
import EventDeleteContainer from './EventDeleteContainer';
import PastEventContainer from './PastEventContainer';
import EventSearchContainer from './EventSearchContainer';

import UserRegisterContainer from './UserRegisterContainer';
import Login from './Login';

import Footer from './views/Footer';


export const Routes = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/events/page=:page" component={EventListContainer} />
        <Route exact path="/pastevents/page=:page" component={PastEventContainer} />

        <Route exact path="/event/:id" component={EventDisplayContainer} />
        <Route exact path="/addEvent" component={EventCreateContainer} />
        <Route exact path="/edit/:id" component={EventEditContainer} />
        <Route exact path="/delete/:id" component={EventDeleteContainer} />
        <Route exact path="/search" component={EventSearchContainer} />
        <Route exact path="/openStreet" component={EventSearchContainer} />

        <Route exact path="/register" component={UserRegisterContainer} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </React.Fragment>
  )
}

export default Routes;
