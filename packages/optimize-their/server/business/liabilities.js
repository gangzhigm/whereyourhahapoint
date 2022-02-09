const { getLiabilitiesRecords, getNowLiabilitiesRecords, getRepaymentPlan } = require('../standard/liabilities');
// 获取负债类型列表
const liabilitiesRecords = getLiabilitiesRecords(); 
// 获取当月负债列表
const nowLiabilitiesRecords = getNowLiabilitiesRecords(); 
// 获取从当前月开始的还款计划
const repaymentPlan = getRepaymentPlan(); 
module.exports = {liabilitiesRecords, nowLiabilitiesRecords, repaymentPlan};

