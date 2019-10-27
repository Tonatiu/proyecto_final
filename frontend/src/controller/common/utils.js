export const isUn = value=>{
    return value == undefined || value == null;
};

export const isEmpty = value=>{
    return isUn(value) || value === "" || (!isUn(value.length) && value.length <= 0);
};

export const launchAction = (promise, action) => {
    promise.then(responce => {
        if(!isUn(action)){
            action(responce);
        }
    });
};