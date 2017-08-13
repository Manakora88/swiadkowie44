import React from "react";
import ReactDOM from 'react-dom';

import Validate from "react-validate-form";
import {Title} from './title.jsx';

export class Formul extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            tex: ""
        }
    }
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleChangeArea = (event) => {
        this.setState({
            tex: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
      return (
          <div className="text">
              <Title tit="Formularz zgłoszeniowy" color="black" />
              <p>
              Jeżeli Twoja babcia, ciocia, sąsiadka czy znajoma, albo Twój dziadek, tata, kuzyn lub podopieczny brali udział w Powstaniu Warszawskim, a ich historia jest niezwykła, albo zwyczajnie piękna, przedstaw nas sobie! Chętnie Ich poznamy, wysłuchamy i zapiszemy Ich wspomnienia. Nie szkodzi, że czują się przeciętni. Uczestniczyli w nieprzeciętnym wydarzeniu i warto, by ich opowieść pozostała zachowana. Ku pamieci, dla rodzin, bliskich, dla przyszłych pokoleń.
              </p>
              <form onSubmit={this.handleSubmit}>
                    <div className="contact">
                        <div className="element">
                            <label className="top"> Podaj swoje imię </label>
                            <input type="text" name="name" id="name" className="formular" value={this.state.name} onChange={this.handleChangeName}/>
                        </div>
                        <div className="element">
                            <label className="top"> Podaj swój adres e-mail </label>
                            <input type="email" name="email" id="email" className="formular" value={this.state.email} onChange={this.handleChangeEmail}/>
                        </div>
                    </div>
                    <div className="message">
                        <div className="element">
                        <label className="top"> Opowiedz nam w kilku słowach o zgłaszanej osobie </label>
                        <textarea name="about" id="about" value={this.state.tex} onChange={this.handleChangeArea}/>
                        </div>
                    </div>
                    <div className="sub">
                        <input type="submit" value="Wyślij" className="submit"/>
                    </div>
              </form>
        </div>
      )
  }
}
