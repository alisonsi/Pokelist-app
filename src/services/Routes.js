import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Pokerlist from './../pages/PokerList/PokerList';
import PokerItemDetail from '../pages/PokerItemDetail/PokerItemDetail';
// import PokerItemDetail from '../pages/PokerItemDetail/PokerItemDetail';

function Routes() {
    return (
        <Router>
            <Route exact path="/" component={Pokerlist} />
            <Route path="/item-detail/:slot" element={PokerItemDetail} />
        </Router>
    );
}

export default Routes;