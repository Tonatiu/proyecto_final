import React from 'react';
import {NavLink} from 'react-router-dom';

function SideBar(){
    return(
        <div className="col-3">
            <nav className="nav flex-column">
                <a className="nav-link active" href="#" data-toggle="collapse" data-target="#adquiridosSubM">Artículos adquiridos</a>
                <ul className="collapse list-unstyled" id="adquiridosSubM">
                    <li>
                        <a href="#">Historial de adquiridos</a>
                    </li>
                </ul>
                <a className="nav-link active" href="#" data-toggle="collapse" data-target="#ofrecidosSubM">Artículos que ofresco</a>
                <ul className="collapse list-unstyled" id="ofrecidosSubM">
                    <li>
                        <NavLink to={"/articulos"}>Administrar artículos</NavLink>
                    </li>
                    <li>
                        <a href="#">Ver atículos arrendados</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideBar;