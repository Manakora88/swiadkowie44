import React from "react";
import ReactDOM from 'react-dom';

export class Title extends React.Component {
  render() {
    return (
        <div className="topic" style={{color: this.props.color}}>
            <h3> {this.props.tit} </h3>
            <div className="rectangle"></div>
        </div>
    )
}
}
