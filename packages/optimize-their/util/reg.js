function isNothing(value){
    if(
        value === null     || 
        value === (void 0) || 
        value.length === 0 
    ){
        return true
    }
    else{
        return false
    }
}

module.exports = {isNothing}