import React from 'react';
import { BrowserRouter as Router,
    Switch,
    Route        
} from 'react-router-dom';
import Home from './Pages/Home';
import Expressoes from './Pages/Expressoes';
import Expressao from './Pages/Expressao';
import Sobre from './Pages/Sobre';

function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/expressoes">
                    <Expressoes />
                </Route>
                <Route path="/expressao/:name">
                    <Expressao />
                </Route>
                <Route path="/sobre">
                    <Sobre />
                </Route>
            </Switch>
        </Router>
    );
}
export default Routes;