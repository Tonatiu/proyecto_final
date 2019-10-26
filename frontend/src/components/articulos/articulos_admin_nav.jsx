import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBoxes } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';

function ArticulosAdminNav(){
    return(
        <div className="row">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/articulos/inventario'}><FontAwesomeIcon icon={faBoxes}/> Inventario</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/articulos/agregar'}><FontAwesomeIcon icon={faPlus}/> Agregar artículo</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default ArticulosAdminNav;