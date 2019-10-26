
class Utils{
    static instance = null;
    constructor(){}
    
    isUn(value){
        return value == undefined || value == null;
    };
    
    isEmpty(value){
        return this.isUn() || value === "" || (!this.isUn(value.length) && value.length <= 0);
    };

    getInstence(){
        if(instance == undefined || instance == null){
            instance = new Utils();
        }
        return instance;
    };
}

export default Utils;