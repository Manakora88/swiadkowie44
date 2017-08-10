import React from "react";
import ReactDOM from 'react-dom';
import {Template} from '../app.jsx';
import {MainPhoto} from './mainphoto.jsx';
import {Description} from './description.jsx';
import {Pictures} from './pictures.jsx';
import {Formul} from './formul.jsx';
import {Footer} from './footer.jsx';
import {Title} from './title.jsx';
import ScrollUpButton from "react-scroll-up-button";

export class AboutUs extends React.Component {
  render() {
    return (
        <section>
            <div className="photo">
                <div className="container">
                    <MainPhoto />
                </div>
            </div>

            <div className="desc" id="desc">
                <div className="container">
                    <Description />
                </div>
            </div>

            <div className="person" id="person">
                <div className="container">
                    <Title tit="Bohaterowie" color="white" />
                    <Pictures />
                </div>
            </div>

            <div className="form" id="form">
                <div className="container">
                    <Formul />
                </div>
            </div>

            <div className="foot">
                <div className="container">
                    <Footer />
                </div>
            </div>
            <ScrollUpButton
                  StopPosition={0}
                  TransitionBtnPosition={150}
                  EasingType='easeOutCubic'
                  AnimationDuration={500}
                  ContainerClassName='ScrollUpButton__Container'
                  TransitionClassName='ScrollUpButton__Toggled'
            />
        </section>
    )
}
}
