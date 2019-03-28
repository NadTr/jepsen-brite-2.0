import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//import components
import Sheep from './Sheep'; //garbage to test the page

export const App = () => {
  return (
  <Switch>
    <Route exact path="/" component={Sheep} />
  </Switch>
  )
}

export default App;
