import axios from 'axios';
import {isUn, launchAction} from '../common/utils';

class SessionController{
    static instance = null;
    constructor(){
        this.url = 'http://localhost:8000/api/usuario';
    };

    createUser(user, action){
        launchAction(axios.post(this.url, user), action);
    }

    validateUser(user, action){
        launchAction(axios.post(this.url, {user}), action);
    }

    static getInstance(){
        if(isUn(SessionController.instance)){
            SessionController.instance = new SessionController();
        }
        return SessionController.instance;
    };
}

export default SessionController;