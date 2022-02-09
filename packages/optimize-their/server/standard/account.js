const NODE_FS = require("fs");
const NODE_PATH = require("path");
const { 
    isNothing
} = require('../../util/reg.js');
function get(){
    const PATH = "./Data_Fund/DB_Wallet.json";
    const KEY_PATH = "./Data_Fund/DB_Wallet_Key.json";
    const walletData = JSON.parse(NODE_FS.readFileSync(NODE_PATH.resolve(PATH),"utf-8"));
    const walletDataKey = JSON.parse(NODE_FS.readFileSync(KEY_PATH,"utf-8"));
    return walletData.map(item=>{
        const obj = new Object();
        walletDataKey.forEach((type,index)=>{
            obj[type] = item[index];
        })
        return obj;
    })
}
function getType(){
    const PATH = "./Data_Fund/DB_Wallet_Type.json";
    const walletData = JSON.parse(NODE_FS.readFileSync(NODE_PATH.resolve(PATH),"utf-8"));
    return walletData
}
function set(data){
    const PATH = "./Data_Fund/DB_Wallet.json";
    const KEY_PATH = "./Data_Fund/DB_Wallet_Key.json";
    const walletData = JSON.parse(NODE_FS.readFileSync(NODE_PATH.resolve(PATH),"utf-8"));
    const walletDataKey = JSON.parse(NODE_FS.readFileSync(KEY_PATH,"utf-8"));
    if(isNothing(data.id)){
        if(walletData.find(item=>item[0]===data.name&&item[1]===data.type)){
            return "HAD"
        }
        else{
            walletData.push(walletDataKey.map(item=>data[item]));
            NODE_FS.writeFileSync(NODE_PATH.resolve(PATH),JSON.stringify(walletData),"utf-8")
            return "IWI";
        }
    }
    else{
        if(data.id > walletData.length){
            return "ND";
        }
        else{
            walletData[data.id] = walletDataKey.map(item=>data[item]);
            NODE_FS.writeFileSync(NODE_PATH.resolve(PATH),JSON.stringify(walletData),"utf-8")
            return "IWI";
        }
    }
}
function del(id){
    const PATH = "./Data_Fund/DB_Wallet.json";
    const KEY_PATH = "./Data_Fund/DB_Wallet_Key.json";
    let walletData = JSON.parse(NODE_FS.readFileSync(NODE_PATH.resolve(PATH),"utf-8"));
    const walletDataKey = JSON.parse(NODE_FS.readFileSync(KEY_PATH,"utf-8"));
    if(isNothing(id)){
        return "HAD"
    }
    else{
        if(id > walletData.length){
            return "ND";
        }
        else{
            walletData = walletData.filter((item,index)=>id!==index);
            NODE_FS.writeFileSync(NODE_PATH.resolve(PATH),JSON.stringify(walletData),"utf-8")
            return "IWI";
        }
    }
}
module.exports = { 
    get,
    getType,
    set,
    del
}

