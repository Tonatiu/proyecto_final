import axios from 'axios';
import Utils from '../common/utils';

class ArticulosController{
    static instance = null;
    constructor(){
        this.urlHome = 'http://localhost:8000/api/articulo/'
    };

    getArticulos(action){
        axios.get(this.urlHome).then(responce => {
            if(!Utils.getInstance().isUn(action)){
                action(responce);
            }
        });
    };

    static getInstance(){
        if(Utils.getInstance()(instance)){
            instance = new ArticulosController();
        }
        return instance;
    }
};


export default ArticulosController;