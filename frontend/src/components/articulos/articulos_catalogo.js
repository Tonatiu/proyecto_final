import React from 'react';
import ArticulosAdminNav from './articulos_admin_nav';
import SideBar from '../common/side_bar';

function ArticulosCatalogo(){
    return(
        <div className="row">
            <SideBar/>
            <div className="col-9">
                <div className="row">
                    <h4>Administración de artículos</h4>
                </div>
                <div className="row">
                    <h5>Articulos / Inventario</h5>
                </div>
                <ArticulosAdminNav/>
            </div>
        </div>
    );
}

export default ArticulosCatalogo;