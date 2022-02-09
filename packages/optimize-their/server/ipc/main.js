const { ipcMain } = require('electron');
const {  
    // 获取支出列表
    spendingRecords, 
    // 获取收入列表
    incomeRecords, 
    // 获取消费列表
    consumptionRecords, 
    // 获取负债列表
    liabilitiesRecords, 
    // 获取获利列表
    revenueRecords, 
    // 获取理财列表
    financeRecords, 
    // 获取支出列表日数据
    spendingRecordsByDay,
    // 获取收入列表日数据
    incomeRecordsByDay,
    // 获取消费列表日数据
    consumptionRecordsByDay,
    // 获取负债列表日数据
    liabilitiesRecordsByDay,
    // 获取获利列表日数据
    revenueRecordsByDay,
    // 获取理财列表日数据
    financeRecordsByDay,
    // 获取还款列表
    repaymentRecords,
    // 获取借款列表
    borrowingRecords,
    // 获取日数据全列表
    coverage,
    // 获取空转列表
    idleRecords
} = require('../business/expenses')
const {  
    // 获取负债类型列表
    liabilitiesRecords:typeliabilitiesRecords, 
    // 获取当月负债列表
    nowLiabilitiesRecords, 
    // 获取从当前月开始的还款计划
    repaymentPlan
} = require('../business/liabilities')
const {  
    // 获取资产分项列表
    nowCoffers, 
    // 获取资产总额
    coffer, 
    // 获取资产分类列表
    cofferByType, 
    // 获取资产净资产总额(包含家庭储蓄)
    cofferByNetAssetAndFamily, 
    // 获取资产净资产总额(不家庭储蓄)
    cofferByNetAsset, 
    // 获取资产可使用的净资产总额
    cofferByNetAssetCanUse, 
    // 获取资产可贷款的净资产总额
    cofferByLoanable,
    // 获取家庭储蓄总额
    cofferByFamily,
    // 获取家庭储蓄总额
    cofferBySocialInsurance,
    // 获取单项总数据
    cofferCoverAll,
    // 按类型获取单项总数据
    cofferCoverAllType
} = require('../business/coffers')
const {  
    // 获取理财分类总额
    totalAmountOfFund, 
    // 获取股票列表
    stockList, 
    // 获取指数基金列表
    indexFunds, 
    // 获取主动基金列表
    initiativeFund, 
    // 获取虚拟货币列表
    virtualCurrency, 
    // 获取理财分类总额全数据
    allTotalAmountOfFund, 
    // 获取理财总额全数据
    allDataOfFund
} = require('../business/fund')
const {  
    API:API_account
} = require('./account')


function ipcInit(){
    getAPI();
    API_account();
}


function getAPI(){
    ipcMain.handle('getSpendingRecords', async (event, someArgument) => {
        return spendingRecords;
    })
    ipcMain.handle('getIncomeRecords', async (event, someArgument) => {
        return incomeRecords;
    })
    ipcMain.handle('getConsumptionRecords', async (event, someArgument) => {
        return consumptionRecords;
    })
    ipcMain.handle('getLiabilitiesRecords', async (event, someArgument) => {
        return liabilitiesRecords;
    })
    ipcMain.handle('getRevenueRecords', async (event, someArgument) => {
        return revenueRecords;
    })
    ipcMain.handle('getFinanceRecords', async (event, someArgument) => {
        return financeRecords;
    })
    ipcMain.handle('getSpendingRecordsByDay', async (event, someArgument) => {
        return spendingRecordsByDay;
    })
    ipcMain.handle('getIncomeRecordsByDay', async (event, someArgument) => {
        return incomeRecordsByDay;
    })
    ipcMain.handle('getConsumptionRecordsByDay', async (event, someArgument) => {
        return consumptionRecordsByDay;
    })
    ipcMain.handle('getLiabilitiesRecordsByDay', async (event, someArgument) => {
        return liabilitiesRecordsByDay;
    })
    ipcMain.handle('getRevenueRecordsByDay', async (event, someArgument) => {
        return revenueRecordsByDay;
    })
    ipcMain.handle('getFinanceRecordsByDay', async (event, someArgument) => {
        return financeRecordsByDay;
    })
    ipcMain.handle('getRepaymentRecords', async (event, someArgument) => {
        return repaymentRecords;
    })
    ipcMain.handle('getBorrowingRecords', async (event, someArgument) => {
        return borrowingRecords;
    })
    ipcMain.handle('getTypeliabilitiesRecords', async (event, someArgument) => {
        return typeliabilitiesRecords;
    })
    ipcMain.handle('getNowLiabilitiesRecords', async (event, someArgument) => {
        return nowLiabilitiesRecords;
    })
    ipcMain.handle('getRepaymentPlan', async (event, someArgument) => {
        return repaymentPlan;
    })
    ipcMain.handle('getNowCoffers', async (event, someArgument) => {
        return nowCoffers;
    })
    ipcMain.handle('getCoffer', async (event, someArgument) => {
        return coffer;
    })
    ipcMain.handle('getCofferByType', async (event, someArgument) => {
        return cofferByType;
    })
    ipcMain.handle('getCofferByNetAssetAndFamily', async (event, someArgument) => {
        return cofferByNetAssetAndFamily;
    })
    ipcMain.handle('getCofferByNetAsset', async (event, someArgument) => {
        return cofferByNetAsset;
    })
    ipcMain.handle('getCofferByNetAssetCanUse', async (event, someArgument) => {
        return cofferByNetAssetCanUse;
    })
    ipcMain.handle('getCofferByLoanable', async (event, someArgument) => {
        return cofferByLoanable;
    })
    ipcMain.handle('getCofferByFamily', async (event, someArgument) => {
        return cofferByFamily;
    })
    ipcMain.handle('getCofferBySocialInsurance', async (event, someArgument) => {
        return cofferBySocialInsurance;
    })
    ipcMain.handle('getTotalAmountOfFund', async (event, someArgument) => {
        return totalAmountOfFund;
    })
    ipcMain.handle('getStockList', async (event, someArgument) => {
        return stockList;
    })
    ipcMain.handle('getIndexFunds', async (event, someArgument) => {
        return indexFunds;
    })
    ipcMain.handle('getInitiativeFund', async (event, someArgument) => {
        return initiativeFund;
    })
    ipcMain.handle('getVirtualCurrency', async (event, someArgument) => {
        return virtualCurrency;
    })
    ipcMain.handle('getCoverage', async (event, someArgument) => {
        return coverage;
    })
    ipcMain.handle('getCofferCoverAll', async (event, someArgument) => {
        return cofferCoverAll;
    })
    ipcMain.handle('getCofferCoverAllType', async (event, someArgument) => {
        return cofferCoverAllType;
    })
    ipcMain.handle('getAllTotalAmountOfFund', async (event, someArgument) => {
        return allTotalAmountOfFund;
    })
    ipcMain.handle('getAllDataOfFund', async (event, someArgument) => {
        return allDataOfFund;
    })
    ipcMain.handle('getIdleRecords', async (event, someArgument) => {
        return idleRecords;
    })
}
module.exports = {ipcInit}