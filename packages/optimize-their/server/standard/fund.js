const DB = require("../../Data_Fund/DB_Fund.json");
const { sum,ave } = require("../../util/math");

// 获取理财分类总额
function getTotalAmountOfFund(){
    const typeArray = ["股票","主动基金","指数基金","虚拟货币"]
    const numberArray = new Array([],[],[],[]);
    DB[DB.length-1].fund.forEach(item=>{
        numberArray[typeArray.findIndex(typeItem=>typeItem === item[3])].push(item[1])
    })
    return numberArray.map((item,index)=>[typeArray[index],sum(item)]);
}

// 获取理财分类总额全数据
function getAllTotalAmountOfFund(){
    const typeArray = ["股票","主动基金","指数基金","虚拟货币"]
    let value = []
    DB.forEach(DBitem=>{
        const numberArray = new Array([],[],[],[]);
        DBitem.fund.forEach(item=>{
            numberArray[typeArray.findIndex(typeItem=>typeItem === item[3])].push(item[1])
        })
        value = value.concat(numberArray.map((item,index)=>Object({name:typeArray[index],value:sum(item),date:DBitem.date})));
    })
    return value;
}
// 获取理财总额全数据
function getAllDataOfFund(){
    const typeArray = ["股票","主动基金","指数基金","虚拟货币"]
    let value = []
    DB.forEach(DBitem=>{
        value = value.concat(DBitem.fund.map(item=>Object.assign({date:DBitem.date,name:item[0],value:item[1]})));
    })
    return value;
}

// 获取股票列表
function getStockList(){
    const type = "股票";
    return DB[DB.length-1].fund.filter(item=>item[3] === type);
}

// 获取指数基金列表
function getIndexFunds(){
    const type = "主动基金";
    return DB[DB.length-1].fund.filter(item=>item[3] === type);
}


// 获取主动基金列表
function getInitiativeFund(){
    const type = "指数基金";
    return DB[DB.length-1].fund.filter(item=>item[3] === type);
}

// 获取虚拟货币列表
function getVirtualCurrency(){
    const type = "虚拟货币";
    return DB[DB.length-1].fund.filter(item=>item[3] === type);
}
module.exports = {
    getTotalAmountOfFund,
    getStockList,
    getIndexFunds,
    getInitiativeFund,
    getVirtualCurrency,
    getAllTotalAmountOfFund,
    getAllDataOfFund
};