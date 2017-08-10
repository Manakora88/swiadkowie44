import React from "react";
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';
import '../scss/main.scss';
import {Header} from './components/header.jsx';
import {Hero1} from './components/hero1.jsx';
import {Hero2} from './components/hero2.jsx';
import {Hero3} from './components/hero3.jsx';
import {Hero4} from './components/hero4.jsx';
import {Hero5} from './components/hero5.jsx';
import {AboutUs} from './components/about.jsx';

import Slider from 'react-slick';

export class Template extends React.Component {
  render(){
    return (
        <div>
            <div className="head">
                <div className="container">
                    <Header />
                </div>
                {this.props.children}
            </div>
        </div>
    )
  }
}

class App extends React.Component {
  render(){
    return (
        <div>
          <Router history={hashHistory}>
            <Route path='/' component={Template}>
                <IndexRoute component={AboutUs} />
                <Route path='/barykada' component={Hero1} />
                <Route path='/laczniczka' component={Hero2} />
                <Route path='/starowka' component={Hero3} />
                <Route path='/szpital' component={Hero4} />
                <Route path='/virtuti' component={Hero5} />
            </Route>
          </Router>
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", function() {

  ReactDOM.render(
    <App />,
    document.getElementById("app")
  )
});
