import axios from 'axios';
import {isUn, launchAction} from '../common/utils';

class HeaderController{
    static instance = null;
    constructor(){
        this.url = 'http://localhost:8000/api/categoria/';
    }

    getCategorias(action){
        launchAction(axios.get(this.url), action);
    }

    static getInstance(){
        if(isUn(HeaderController.instance)){
            HeaderController.instance = new HeaderController();
        }
        return HeaderController.instance;
    }
}

export default HeaderController;