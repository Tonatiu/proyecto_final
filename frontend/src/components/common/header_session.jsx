import React from 'react';
import logo2 from '../../static/img/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

function HeaderSession(){
    return (
        <header className="page-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                            <a className="navbar-brand" href="#">
                                <img src={logo2}  width="80" height="60" alt=""/>
                            </a>
                            <div>
                                <FontAwesomeIcon icon={faQuestionCircle}/>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderSession;