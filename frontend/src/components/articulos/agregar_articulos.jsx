import React from 'react';
import AddArticulosForm from './add_articulos_form';
import ArticulosAdminNav from './articulos_admin_nav';
import SideBar from '../common/side_bar';

function AgregarArticulos(){
    return(
        <div className="row">
            <SideBar/>
            <div className="col-9">
                <div className="row">
                    <h4>Administración de artículos</h4>
                </div>
                <div className="row">
                    <h5>Articulos / Agregar</h5>
                </div>
                <ArticulosAdminNav/>
                <AddArticulosForm/>
            </div>
        </div>
    );
}

export default AgregarArticulos;