import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';
import TextTruncate from 'react-text-truncate';

//import components

export default class CardLayout extends Component {

  componentDidMount(){
    let url = this.props.event.event_media;
    let videoID;
    let mediaHolder;
    if (url == undefined){
      console.log('it is undefined bitch')
    } else if(url.startsWith('https')){
      let videoUrl = new URL(url);
      videoID = videoUrl.searchParams.get('v');
      mediaHolder = document.getElementById("mediaHolder"+ this.props.event.id).innerHTML = "<img src=\"https://img.youtube.com/vi/" + videoID + "/maxresdefault.jpg\"/>";
    } else if(url.startsWith('data')){
      mediaHolder = document.getElementById("mediaHolder"+ this.props.event.id).innerHTML = "<img className=\"image-display\" src=\"" + url + "\" />"
    }
  }


  render() {
    let eventId = this.props.event.id ? this.props.event.id : '';

    return(
      <>
        <figure className="media blue"><div className="media-holder" id={"mediaHolder"+eventId}></div>
          <figcaption>
            <h4>{this.props.event.event_title}</h4>
          </figcaption>
          <a href={"/event/"+this.props.event.id}></a>
        </figure>

      </>
    )
  }
}
