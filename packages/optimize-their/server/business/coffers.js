const { 
    getNowCoffers,
    getCoffer,
    getCofferByType,
    getCofferByNetAssetAndFamily,
    getCofferByNetAsset,
    getCofferByNetAssetCanUse,
    getCofferByLoanable,
    getCofferByFamily,
    getCofferBySocialInsurance,
    getCoverByAll,
    getCofferCoverAllType
} = require('../standard/coffers');
// 获取资产分项列表
const nowCoffers = getNowCoffers(); 
// 获取资产总额
const coffer = getCoffer(); 
// 获取资产分类列表
const cofferByType = getCofferByType(); 
// 获取资产净资产总额(包含家庭储蓄)
const cofferByNetAssetAndFamily = getCofferByNetAssetAndFamily(); 
// 获取资产净资产总额(不家庭储蓄)
const cofferByNetAsset = getCofferByNetAsset(); 
// 获取资产可使用的净资产总额
const cofferByNetAssetCanUse = getCofferByNetAssetCanUse(); 
// 获取资产可贷款的净资产总额
const cofferByLoanable = getCofferByLoanable(); 
// 获取家庭储蓄总额
const cofferByFamily = getCofferByFamily(); 
// 获取家庭储蓄总额
const cofferBySocialInsurance = getCofferBySocialInsurance(); 
// 获取单项总数据
const cofferCoverAll = getCoverByAll(); 
// 按类型获取单项总数据
const cofferCoverAllType = getCofferCoverAllType(); 

module.exports = { 
    nowCoffers, 
    coffer, 
    cofferByType, 
    cofferByNetAssetAndFamily, 
    cofferByNetAsset, 
    cofferByNetAssetCanUse, 
    cofferByLoanable,
    cofferByFamily,
    cofferBySocialInsurance,
    cofferCoverAll,
    cofferCoverAllType
}

