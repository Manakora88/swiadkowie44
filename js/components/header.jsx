import React from "react";
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory, IndexLink, IndexRoute} from 'react-router';

export class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            burger: "hidden"
        }
    }
    handleClick = () => {
        this.setState({
            burger: ""
        })
    }
  render() {
      let style3 = {
          textDecoration: "none",
          color: "white",
          padding: "3px"
        }
      const activeStyle = {
              backgroundColor: "#C63D0F"
          }
    return (
      <nav className="header">
            <div className="logo">
                <IndexLink to="/" style={style3}><h1>świadkowie <span>44</span></h1></IndexLink>
            </div>
            <ul>
                  <li className="we"><IndexLink to="/" style={style3} activeStyle={activeStyle}>O nas</IndexLink></li>
                  <li><IndexLink to="/barykada" style={style3} activeStyle={activeStyle}>Barykada</IndexLink></li>
                  <li><IndexLink to="/laczniczka" style={style3} activeStyle={activeStyle}>Łączniczka</IndexLink></li>
                  <li><IndexLink to="/starowka" style={style3} activeStyle={activeStyle}>Starówka</IndexLink></li>
                  <li><IndexLink to="/szpital" style={style3} activeStyle={activeStyle}>Szpital</IndexLink></li>
                  <li><IndexLink to="/virtuti" style={style3} activeStyle={activeStyle}>Virtuti</IndexLink></li>
            </ul>
      </nav>
    )
  }
}
