const DB = require("../../Data_Fund/DB_Expenses.json");
const { sum,ave } = require("../../util/math");
// 获取全数据列表
function allExpensesData(){
    let data = [];
    DB.map(item=>item.expenses.map(expensesItem=>[item.date].concat(expensesItem))).forEach(item=>{
        data = data.concat(item);
    })
    return data.reverse();
}
// 获取支出列表
function getSpendingRecords(){
    return allExpensesData().filter(item=>item[3] === "支出");
}
// 获取收入列表
function getIncomeRecords(){
    return allExpensesData().filter(item=>item[3] === "收入");
}
// 获取空转列表
function getIdleRecords(){
    return allExpensesData().filter(item=>item[3] === "空转");
}
// 获取消费列表
function getConsumptionRecords(){
    return allExpensesData().filter(item=>item[4] === "消费");
}
// 获取负债列表
function getLiabilitiesRecords(){
    return allExpensesData().filter(item=>item[4] === "借贷");
}
// 获取获利列表
function getRevenueRecords(){
    return allExpensesData().filter(item=>item[4] === "收入");
}
// 获取理财列表
function getFinanceRecords(){
    return allExpensesData().filter(item=>item[4] === "理财");
}
// 获取还款列表
function getRepaymentRecords(){
    return getIncomeRecords().filter(item=>item[1].includes("还款")); 
}
// 获取借款列表
function getBorrowingRecords(){
    return getSpendingRecords().filter(item=>item[1].includes("借款")); 
}
// 获取列表日数据
function getRecordsByDay(data,direction){
    const DBdata =[];
    function directionMath(data){
        return data[3] === "收入" ? Number(data[2]) : 0-Number(data[2])
    }
    data.forEach(item=>{
        const value = direction ? directionMath(item) : item[2];
        const hasData = DBdata.find(DBdataitem=>DBdataitem[0] === item[0])
        if(hasData){
            hasData[1].push(value)
        }
        else{
            DBdata.push(
                [item[0],[value]]
            )
        }
    })
    return DBdata.map(item=>[ item[0], sum(item[1]) ])
}




// 获取全部日数据
function getCoverage(){
    let data = []
    // 获取支出列表日数据
    data = data.concat(getRecordsByDay(getSpendingRecords()).map(item=>Object.assign({date:item[0],value:Number(item[1]),name:"支出"})));
    // 获取收入列表日数据
    data = data.concat(getRecordsByDay(getIncomeRecords()).map(item=>Object.assign({date:item[0],value:Number(item[1]),name:"收入"})));
    // 获取消费列表日数据
    data = data.concat(getRecordsByDay(getConsumptionRecords()).map(item=>Object.assign({date:item[0],value:Number(item[1]),name:"消费"})));
    // 获取借贷列表日数据
    data = data.concat(getRecordsByDay(getLiabilitiesRecords()).map(item=>Object.assign({date:item[0],value:Number(item[1]),name:"负债"})));
    // 获取获利列表日数据
    data = data.concat(getRecordsByDay(getRevenueRecords()).map(item=>Object.assign({date:item[0],value:Number(item[1]),name:"获利"})));
    // 获取理财列表日数据
    data = data.concat(getRecordsByDay(getFinanceRecords()).map(item=>Object.assign({date:item[0],value:Number(item[1]),name:"理财"})));
    return data.reverse();
}



module.exports = {
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
};