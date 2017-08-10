import React from "react";
import ReactDOM from 'react-dom';

export class Content extends React.Component {

  render() {
    return (
      <main>
        <article>
          <h1>{this.props.title}</h1>

          <img src={this.props.image} />

        </article>
      </main>
    )
  }



}
