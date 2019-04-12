import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Logo from '../../assets/FoodTruck.png';


export default class Footer extends Component{
  render() {
    return (
      <>
      <div className="container-fluid footer fixed-bottom">
        <div className="logoContainer">
          <img src={Logo} alt="logo" id="foodTruck"/>
        </div>
      </div>
      </>
    )}
}
