import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FoodTruck from '../../assets/FoodTruck.png';


export default class Footer extends Component{

  handleScroll(event){
      let img = document.getElementById("foodTruck");

      img.style.left =
          (window.scrollY /
              (document.body.offsetHeight - window.innerHeight)) *
              (document.body.offsetWidth - img.offsetWidth) +
          "px";
      let scrollTop = event.srcElement.body.scrollTop;

  }

  async componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

  render() {
    return (
      <>
      <div className="container-fluid road fixed-bottom">
        <img src={FoodTruck} alt="Food Truck" id="foodTruck"/>
      </div>
      </>
    )}
}
