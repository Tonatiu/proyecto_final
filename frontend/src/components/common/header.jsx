import React from 'react';
import '../../styles/header.css';
import user_image from '../../static/img/user_image.png'
import logo2 from '../../static/img/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import CategoriasSelector from './categorias_selector';
import {NavLink} from 'react-router-dom';


function Header(){
    return(
        <header className="page-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                            <a className="navbar-brand" href="#">
                                <img src={logo2}  width="80" height="60" alt=""/>
                            </a>
                            <div className="user-account-component row">
                                <img src={user_image} className="img-thumbnail user-img"/>
                                <div className="user-info">
                                    <div className="row">
                                        <span>Usuario</span>
                                    </div>
                                    <div className="row">
                                        <a href="#">Cuenta</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col bg-light">
                        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                            <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faMapMarkerAlt} /> Ubicación</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Categorías
                                        </a>
                                        <CategoriasSelector/>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col bg-light">
                        <ul className="nav float-right navbar-light">
                            <li className="nav-item"><NavLink className="nav-link" to="/registrar">Crear cuenta</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/ingresar">Inicia sesión</NavLink></li>
                            <li className="nav-item"><a className="nav-link" href="#"><FontAwesomeIcon icon={faShoppingBag}/> Carrito</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;