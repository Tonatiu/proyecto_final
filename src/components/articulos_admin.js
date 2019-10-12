import React from 'react';
import SideBar from './side_bar.js';
import AdministradorArticulos from './administrador_articulos.js';

function ArticulosAdmin(){
    return(
        <div className="container-fluid">
            <div className="row">
                <SideBar/>
                <AdministradorArticulos/>
            </div>
        </div>
    );
}

export default ArticulosAdmin;