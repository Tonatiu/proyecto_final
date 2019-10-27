import axios from 'axios';
import {isUn, launchAction} from '../common/utils';

class ArticulosController{
    static instance = null;
    constructor(){
        this.urlHome = 'http://localhost:8000/api/articulo/'
    };

    getArticulos(action){
        launchAction(axios.get(this.urlHome), action);
    };

    static getInstance(){
        if(isUn(ArticulosController.instance)){
            ArticulosController.instance = new ArticulosController();
        }
        return ArticulosController.instance;
    }
};


export default ArticulosController;