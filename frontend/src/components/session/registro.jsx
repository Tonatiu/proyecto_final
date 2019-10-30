import React from 'react';
import SessionController from '../../controller/session/session_controller';
import {isPasswd, isEmail, validPasswd, valueIsValid} from '../../controller/validation/validation_tools';
import '../../styles/registro.css';
import { Redirect } from 'react-router';

class RegistroHanddler extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            alias: '',
            email: '',
            passwd: '',
            passwdC: '',
            reqiredError: 'El campo es requerido',
            emailError: 'Debes ingresar un email válido',
            passwdValidatioError: 'Las contraseñas no coinciden',
            aliasError: false,
            mailError: false,
            passwdError: false,
            passwdCError: false,
            redirect: false
        };
    };

    inputHanddler = event=>{
        event.preventDefault();
        let newState = {[event.target.name]: event.target.value}; 
        switch (event.target.name) {
            case 'alias':
                newState.aliasError = false;
                break;
            case 'email':
                newState.mailError = false;
                break;
            case 'passwd':
                newState.passwdError = false;
                break;
            case 'passwdC':
                newState.passwdCError = false;
                break;
        }
        this.setState(newState);
    };

    validateForm = ()=>{
        let aliasError = !valueIsValid(this.state.alias);
        let mailError = !valueIsValid(this.state.email, isEmail);
        let passwdError = !valueIsValid(this.state.passwd, isPasswd);
        return {
            aliasError: aliasError,
            mailError: mailError,
            passwdError: passwdError
        };
    };

    handleSubmit = event =>{
        event.preventDefault();
        let errors = this.validateForm();
        errors.passwdCError = !validPasswd(this.state.passwd, this.state.passwdC);
        if(errors.aliasError || errors.mailError || errors.passwdError || errors.passwdCError){
            this.setState(errors);
            return;
        }
        let user = {
            alias: this.state.alias,
            email: this.state.email,
            passwd: this.state.passwd,
            eliminado: false,
            tipousuario: "http://localhost:8000/api/tipo_usuario/2/"
        }
        SessionController.getInstance().createUser(user, ()=>{
            this.setState({redirect: true});
        });
    };

    render(){
        if(this.state.redirect){
            return <Redirect to="/"/>
        }
        return <div className="card regitro-form">
            <div className="card-body">
                <form onSubmit={this.handleSubmit} method="post">
                    <div className="form-group">
                        <label htmlFor="nombreInput">Nombre de usuario</label>
                        <input 
                            id="nombreInput" 
                            name="alias" 
                            className="form-control" 
                            aria-describedby="nameHelp"
                            value={this.state.alias} 
                            onChange={(event)=>this.inputHanddler(event)}
                            type="text" 
                            placeholder="Tu nombre de usuario"/>
                        {
                        this.state.aliasError ? 
                            <small id="nameHelp" className="form-text text-muted">{this.state.reqiredError}</small>
                        : null
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput">Correo electrónico</label> 
                        <input 
                            id="emailInput" 
                            name="email" 
                            className="form-control"
                            aria-describedby="emailHelp"
                            value={this.state.email} 
                            onChange={(event)=>this.inputHanddler(event)}
                            type="email" 
                            placeholder="Correo electrónico"/>
                        {this.state.mailError ? 
                        <small id="emailHelp" className="form-text text-muted">Debes ingresar un email válido</small>
                        :null
                        }
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwdInput">Contraseña</label>
                        <input id="passwdInput" 
                            name="passwd" 
                            aria-describedby="passwdHelp"
                            value={this.state.passwd} 
                            onChange={(event)=>this.inputHanddler(event)}
                            className="form-control" 
                            type="password" 
                            placeholder="Contraseña"/>
                        {this.state.passwdError ? 
                        <small id="passwdHelp" className="form-text text-muted">La contraseña no es válida</small>
                        :null
                        }
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwdCInput">Confirma tu contraseña</label>
                        <input 
                            value={this.state.passwdC} 
                            onChange={(event)=>this.inputHanddler(event)}
                            id="passwdCInput" 
                            aria-describedby="passwdCHelp"
                            name="passwdC"
                            className="form-control" 
                            type="password" 
                            placeholder="Confirma tu contraseña"/>
                        {this.state.passwdCError ? 
                        <small id="passwdCHelp" className="form-text text-muted">Las contraseñas no coinciden</small>
                        :null
                        }                        
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    };
}

export default RegistroHanddler;