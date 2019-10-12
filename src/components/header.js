import React from 'react';
import '../styles/header.css';
import user_image from '../static/img/user_image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return(
        <header className="page-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                            <a className="navbar-brand" href="#">Navbar</a>
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
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                            <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faMapMarkerAlt} /> Ubicación</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;