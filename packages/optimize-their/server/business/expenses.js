const { 
    getSpendingRecords, 
    getIncomeRecords, 
    getConsumptionRecords, 
    getLiabilitiesRecords, 
    getRevenueRecords, 
    getFinanceRecords, 
    getRecordsByDay, 
    getRepaymentRecords, 
    getBorrowingRecords,
    getCoverage,
    getIdleRecords
} = require('../standard/expenses');
// 获取支出列表
const spendingRecords = getSpendingRecords(); 
// 获取收入列表
const incomeRecords = getIncomeRecords(); 
// 获取消费列表
const consumptionRecords = getConsumptionRecords(); 
// 获取负债列表
const liabilitiesRecords = getLiabilitiesRecords(); 
// 获取获利列表
const revenueRecords = getRevenueRecords(); 
// 获取理财列表
const financeRecords = getFinanceRecords();
// 获取支出列表日数据
const spendingRecordsByDay = getRecordsByDay(getSpendingRecords());
// 获取收入列表日数据
const incomeRecordsByDay = getRecordsByDay(getIncomeRecords()); 
// 获取消费列表日数据
const consumptionRecordsByDay = getRecordsByDay(getConsumptionRecords()); 
// 获取负债列表日数据
const liabilitiesRecordsByDay = getRecordsByDay(getLiabilitiesRecords(),true); 
// 获取获利列表日数据
const revenueRecordsByDay = getRecordsByDay(getRevenueRecords()); 
// 获取理财列表日数据
const financeRecordsByDay = getRecordsByDay(getFinanceRecords(),true);
// 获取还款列表
const repaymentRecords = getRepaymentRecords();
// 获取借款列表
const borrowingRecords = getBorrowingRecords();
// 获取日数据全列表
const coverage = getCoverage();
// 获取空转列表
const idleRecords = getIdleRecords();

module.exports = { 
                    spendingRecords, 
                    incomeRecords, 
                    consumptionRecords, 
                    liabilitiesRecords, 
                    revenueRecords, 
                    financeRecords, 
                    spendingRecordsByDay,
                    incomeRecordsByDay,
                    consumptionRecordsByDay,
                    liabilitiesRecordsByDay,
                    revenueRecordsByDay,
                    financeRecordsByDay,
                    repaymentRecords,
                    borrowingRecords,
                    coverage,
                    idleRecords
                }

