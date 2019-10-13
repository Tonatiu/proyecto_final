import React from 'react';
import AgregarArticulos from './articulos/agregar_articulos';
import ArticulosCatalogo from './articulos/articulos_catalogo';
import ArticulosAdmin from './articulos/articulos_admin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function MainPage(){
    return(
        <Router>
            <div className="container-fluid">
                <Switch>
                    <Route path="/articulos" exact component={ArticulosAdmin}/>
                    <Route path="/articulos/inventario" component={ArticulosCatalogo}/>
                    <Route path="/articulos/agregar" component={AgregarArticulos}/>
                </Switch>
            </div>
        </Router>
    );
}

export default MainPage;