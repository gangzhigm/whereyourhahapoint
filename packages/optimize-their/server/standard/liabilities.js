const DB = require("../../Data_Fund/DB_Liabilities.json");
const { sum,ave } = require("../../util/math");

// 获取负债列表
function getLiabilitiesRecords(data=DB){
    return data.map(item=>[item[1],sum(item[4].map(item=>item[1]))]);
}
// 获取下月负债列表
function getNowLiabilitiesRecords(data=DB){
    return data.map(item=>{
        const value = item[4].find(item=>`${new Date(item[0]).getFullYear()}/${new Date(item[0]).getMonth()}` === `${new Date(getGreatDate()).getFullYear()}/${new Date(getGreatDate()).getMonth()+1}` || `${new Date(item[0]).getFullYear()}/${new Date(item[0]).getMonth()}` === `${new Date(getGreatDate()).getFullYear()+1}/0`)
        // const value = item[4].find(item=>`${new Date(item[0]).getFullYear()}/${new Date(item[0]).getMonth()}` === `${new Date(getGreatDate()).getFullYear()}/${new Date(getGreatDate()).getMonth()}`)
        return [item[1],value?value[1]:0];
    })
}
// 获取系统标准时间格式参数
function getGreatDate(date=new Date()){
    return `${(new Date(date)).getFullYear()}/${(new Date(date)).getMonth()+1}/${(new Date(date)).getDate()}`;
}
// 获取从当前月开始的还款计划
function getRepaymentPlan(data=DB){
    let value = [];
    data.map(DBitem => {
        const itemValue = DBitem[4].filter(item=>new Date(item[0]).getFullYear() == new Date(getGreatDate()).getFullYear() && new Date(item[0]).getMonth() >= new Date(getGreatDate()).getMonth() || new Date(item[0]).getFullYear() > new Date(getGreatDate()).getFullYear()).map(item=>Object.assign({name:DBitem[1],date:item[0],value:item[1]}))
        value = value.concat(itemValue);
    });
    return value;
}
module.exports = {getLiabilitiesRecords, getNowLiabilitiesRecords, getRepaymentPlan};