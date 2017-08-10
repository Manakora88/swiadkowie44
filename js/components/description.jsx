import React from "react";
import ReactDOM from 'react-dom';
import {Title} from './title.jsx';

export class Description extends React.Component {
  render() {
    return (
        <div className="warsaw">
            <div className="note">
                <Title tit="O stronie"/>
                <p>
                    <b>świadkowie</b><span>44</span> to miejsce spotkań z żywą historią. Weterani Powstania Warszawskiego w pasjonujących wywiadach opowiadają o najważniejszych, najbardziej dramatycznych wydarzeniach, których byli świadkami w ciągu <span>63 dni</span> walk o wolność stolicy. Dzięki ich relacjom, dzieje tego największego powstania w czasie II wojny światowej stają się bardziej zrozumiałe i bliższe dla kolejnych pokoleń.
                </p>
            </div>
            <div className="map">
                <img src="../../images/map.jpg"/>
            </div>
        </div>
    )
}
}
