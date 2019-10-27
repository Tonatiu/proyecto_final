import React from 'react';
import AgregarArticulos from './articulos/agregar_articulos';
import ArticulosCatalogo from './articulos/articulos_catalogo';
import HomePage from './main/home_page';
import RegistroHanddler from './session/registro';
import Header from './common/header';
import HeaderSession from './common/header_session';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function MainPage(){
    return(
        <Router>
            <Switch>
                <Route path="/registrar" component={HeaderSession}/>
                <Route path="/ingresar" component={HeaderSession}/>
                <Route path="/" component={Header}/>
            </Switch>
            <div className="container-fluid">
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/articulos" exact component={ArticulosCatalogo}/>
                    <Route path="/articulos/inventario" component={ArticulosCatalogo}/>
                    <Route path="/articulos/agregar" component={AgregarArticulos}/>
                    <Route path="/registrar" component={RegistroHanddler}/>
                </Switch>
            </div>
        </Router>
    );
}

export default MainPage;