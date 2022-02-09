const { 
    getTotalAmountOfFund,
    getStockList,
    getIndexFunds,
    getInitiativeFund,
    getVirtualCurrency,
    getAllTotalAmountOfFund,
    getAllDataOfFund
} = require('../standard/fund');
// 获取理财分类总额
const totalAmountOfFund = getTotalAmountOfFund(); 
// 获取股票列表
const stockList = getStockList(); 
// 获取指数基金列表
const indexFunds = getIndexFunds(); 
// 获取主动基金列表
const initiativeFund = getInitiativeFund(); 
// 获取虚拟货币列表
const virtualCurrency = getVirtualCurrency(); 
// 获取理财分类总额全数据
const allTotalAmountOfFund = getAllTotalAmountOfFund(); 
// 获取理财总额全数据
const allDataOfFund = getAllDataOfFund(); 
module.exports = { 
    totalAmountOfFund, 
    stockList, 
    indexFunds, 
    initiativeFund, 
    virtualCurrency,
    allTotalAmountOfFund,
    allDataOfFund
}

