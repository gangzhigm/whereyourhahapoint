const DB = require("../../Data_Fund/DB_Coffers.json");
const { sum,ave } = require("../../util/math");

// 获取资产分项列表
function getNowCoffers(){
    return DB[DB.length-1].coffers.map(item=>[DB[DB.length-1].date].concat(item));
}

// 获取资产总额
function getCoffer(){
    return sum(DB[DB.length-1].coffers.map(item=>item[1]));
}

// 获取资产分类列表
function getCofferByType(){
    const typeArray = ["信用借贷","灵活储蓄","投资理财","社会保障","家庭储蓄"];
    const numberArray = new Array([],[],[],[],[]);
    DB[DB.length-1].coffers.forEach(item=>{
        numberArray[typeArray.findIndex(typeItem=>typeItem === item[2])].push(item[1])
    })
    return numberArray.map((item,index)=>[typeArray[index],sum(item)]);
}

// 获取                                                                                                              资产净资产总额(包含家庭储蓄)
function getCofferByNetAssetAndFamily(){
    const typeArray = ["灵活储蓄","投资理财","社会保障","家庭储蓄"];
    return sum(DB[DB.length-1].coffers.map(item=>typeArray.find(typeItem=>typeItem === item[2]) ? item[1] : 0))
}

// 获取资产净资产总额(不家庭储蓄)
function getCofferByNetAsset(){
    const typeArray = ["灵活储蓄","投资理财","社会保障"];
    return sum(DB[DB.length-1].coffers.map(item=>typeArray.find(typeItem=>typeItem === item[2]) ? item[1] : 0))
}

// 获取资产可使用的净资产总额
function getCofferByNetAssetCanUse(){
    const typeArray = ["灵活储蓄","投资理财"];
    return sum(DB[DB.length-1].coffers.map(item=>typeArray.find(typeItem=>typeItem === item[2]) ? item[1] : 0))
}

// 获取资产可贷款的净资产总额
function getCofferByLoanable(){
    const typeArray = ["信用借贷"];
    return sum(DB[DB.length-1].coffers.map(item=>typeArray.find(typeItem=>typeItem === item[2]) ? item[1] : 0))
}

// 获取家庭储蓄总额
function getCofferByFamily(){
    const typeArray = ["信用借贷"];
    return sum(DB[DB.length-1].coffers.map(item=>typeArray.find(typeItem=>typeItem === item[2]) ? item[1] : 0))
}

// 获取社会保障总额
function getCofferBySocialInsurance(){
    const typeArray = ["社会保障"];
    return sum(DB[DB.length-1].coffers.map(item=>typeArray.find(typeItem=>typeItem === item[2]) ? item[1] : 0))
}


// 获取全部数据
function getCoverByAll(){
    let data = [];
    DB.forEach(item=>{
        data = data.concat(item.coffers.map(coffersItem=>Object.assign({name:coffersItem[0],value:coffersItem[1],date:item.date})));
    })
    return data;
}

// 按类型获取全部数据
function getCofferCoverAllType(){
    // DB[DB.length-1].coffers.map( item=> typeArray.find(typeItem=>typeItem === item[2]) ? item[1] : 0)
    // const typeArray = ["信用借贷","灵活储蓄","投资理财","社会保障","家庭储蓄"];
    let data = [];
    const typeArray = ["信用借贷","灵活储蓄","投资理财","社会保障","家庭储蓄"];
    DB.forEach(DBitem=>{
        const numberArray = new Array([],[],[],[],[]);
        DBitem.coffers.forEach(coffersItem=>{
            numberArray[typeArray.findIndex(typeItem=>typeItem === coffersItem[2])].push(coffersItem[1])
        })
        data = data.concat(numberArray.map((item,index)=>Object.assign({name:typeArray[index],value:Number(sum(item)),date:DBitem.date})));
    })
    return data;
}

module.exports = {
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
};