const { 
    get,
    getType,
    set,
    del
} = require('../standard/account');
const { 
    isNothing
} = require('../../util/reg.js');
const account = get(); 
const accountType = getType(); 
function accountChange({name,type,id=17}){
    if(isNothing(name) || isNothing(type)){
        return "No PROP"
    }
    if(!getType().includes(type)){
        return "No TYpe"
    }
    if(id > get()){
        return "ND";
    }
    return set({name,type,id})
}
function accountDel(id=null){
    if(isNothing(id)){
        return "No PROP"
    }
    if(id > get()){
        return "ND";
    }
    return del(id)
}
module.exports = { 
    accountChange,
    accountDel,
    accountType,
    account
}

