import React from "react";
import ReactDOM from 'react-dom';

export class Redactor extends React.Component {
  render() {
      return (
          <div className="redactor">
              <p>
                {this.props.question}
              </p>
        </div>
      )
  }
  }
