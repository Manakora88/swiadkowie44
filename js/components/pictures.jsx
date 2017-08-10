import React from "react";
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory, IndexLink, IndexRoute} from 'react-router';

import {PartPicture} from './partpicture.jsx';

import Zapalowski from '../../images/zapalowski.jpg';
import Leszczynska from '../../images/leszczynska.jpg';
import Likiernik from '../../images/Likiernik.jpg';
import Gutowska from '../../images/Gutowska_sm.png';
import Kiezun from '../../images/kiezun_sm.png';

export class Pictures extends React.Component {
    render() {
      return (
          <div>
                <IndexLink to="/barykada#barykada" title="Barykada" ><PartPicture image={Zapalowski} name="Tadeusz ZAPAŁOWSKI" place="- Al. Jerozolimskie -"/></IndexLink>
                <IndexLink to="/laczniczka#laczniczka" title="Łączniczka"><PartPicture image={Leszczynska} name="Irena LESZCZYŃSKA" place="- Żoliborz -"/></IndexLink>
                <IndexLink to="/starowka#starowka" title="Starówka"><PartPicture image={Likiernik} name="Stanisław LIKIERNIK" place="- Stare Miasto -"/></IndexLink>
                <IndexLink to="/szpital#szpital" title="Szpital"><PartPicture image={Gutowska} name="Maria GUTOWSKA" place="- Czerniaków -"/></IndexLink>
                <IndexLink to="/virtuti#virtuti" title="Virtuti"><PartPicture image={Kiezun} name="Witold KIEŻUN" place="- Krakowskie Przedmieście -"/></IndexLink>
          </div>
      )
  }
}
