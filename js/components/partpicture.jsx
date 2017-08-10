import React from "react";
import ReactDOM from 'react-dom';

export class PartPicture extends React.Component {
    constructor() {
        super();
        this.state = {
            background: "cover",
            visibility: "visible",
            cursor: "auto"
        }
    }

    handleMouseEnter = () => {
        this.setState({
            background: "160%",
            visibility: "hidden",
            cursor: "pointer"
        })
    }

    handleMouseLeave = () => {
        this.setState({
            background: "cover",
            visibility: "visible",
            cursor: "auto"
        })
    }

    render() {
        let style = {
            backgroundImage: "url(" + this.props.image + ")",
            backgroundSize: this.state.background,
            cursor: this.state.cursor
        }
      return (
          <div style={style} className="picture" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <div className="description" style={{visibility: this.state.visibility}}>
                <span>{this.props.name}</span><br/>
                <span>{this.props.place}</span>
            </div>
          </div>
      )
  }
}
