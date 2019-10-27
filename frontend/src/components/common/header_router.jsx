import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './header';
import HeaderSession from './header_session';

function HeaderRouter(){
    return(
        <Router>
            <Switch>
                <Route path="/registrar" component={HeaderSession}/>
                <Route path="/ingresar" component={HeaderSession}/>
                <Route path="/" component={Header}/>
            </Switch>
        </Router>
    );
}

export default HeaderRouter;