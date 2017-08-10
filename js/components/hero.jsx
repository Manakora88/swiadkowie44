import React from "react";
import ReactDOM from 'react-dom';

export class Hero extends React.Component {
  render() {
      return (
          <div className="hero">
              <p>
                {this.props.answer}
              </p>
        </div>
      )
  }
  }
