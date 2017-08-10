import React from "react";
import ReactDOM from 'react-dom';

export class Who extends React.Component {
  render() {
      const st = {
          backgroundImage: "url(" + this.props.imag + ")",
          backgroundSize: "cover",
          backgroundPosition: "top",
          width: "250px",
          height: "250px"
      }
    return (
        <div style={st}>
        </div>
    )
}
}
