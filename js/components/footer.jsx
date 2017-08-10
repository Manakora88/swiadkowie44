import React from "react";
import ReactDOM from 'react-dom';

export class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div>
            <p>&copy; Copyright 2017 | All Rights Reserved.</p>
        </div>
        <div className="socialmedia">
            <div className="media">
                <a href="#"><img src="../../images/media/facebook.png" /></a>
            </div>
            <div className="media">
                <a href="#"><img src="../../images/media/twitter.png" /></a>
            </div>
            <div className="media">
                <a href="#"><img src="../../images/media/googleplus.png" /></a>
            </div>
            <div className="media">
                <a href="#"><img src="../../images/media/youtube.png" /></a>
            </div>
        </div>
      </footer>
    )
  }


}
