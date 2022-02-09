function sum(arr){
    return arr.length === 0 ? 0 : arr.reduce((a,b)=>a+b).toFixed(2);
}

function ave(arr,num){
    if(arr.length === 0 ){
        return 0;
    }
    return num ? (sum(arr)/Math.ceil(num)).toFixed(2) : (sum(arr)/arr.length).toFixed(2);
}

module.exports = {sum,ave}