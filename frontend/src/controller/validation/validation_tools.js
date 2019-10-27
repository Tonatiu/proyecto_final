import {isEmpty, isUn} from '../common/utils';

export const isEmail = value =>{
    const mailRegex = /^[\w\.]+@\w+\.\w+$/;
    return mailRegex.test(value);
};

export const isPasswd = value =>{
    const passwdRegex = /^[\w\.#$&%?!¿¡-]{6,}$/;
    return passwdRegex.test(value);
};

export const validPasswd = (passwd, passwdCon)=>{
    return !isEmpty(passwd) && !isEmpty(passwdCon) && passwd === passwdCon;
};

export const valueIsValid = (value, validationFunction)=>{
    return  isUn(validationFunction) ? !isEmpty(value): !isEmpty(value) && validationFunction(value);
};