import React from 'react';
import AddArticulosForm from './add_articulos_form.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBoxes } from '@fortawesome/free-solid-svg-icons'

function AdministradorArticulos(){
    return(
        <div className="col-9">
            <div className="row">
                <h3>Administración de artículos</h3>
            </div>
            <div className="row">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faBoxes}/> Inventario</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#"><FontAwesomeIcon icon={faPlus}/> Agregar artículo</a>
                    </li>
                </ul>
            </div>
            <AddArticulosForm/>
        </div>
    );
}

export default AdministradorArticulos;