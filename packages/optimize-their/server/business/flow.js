const NODE_FS = require("fs");
const NODE_PATH = require("path");
const PATH = "./Data_Fund/DB_Expenses.json";
NODE_PATH.resolve()
function asdgfwgwajustdoit(data){
    console.info(data);
    const expensesData = JSON.parse(NODE_FS.readFileSync(PATH,"utf-8"));
    // {
    //     name: '闃胯开鐜?,
    //     value: '12',
    //     mark: 'ddw',
    //     date: '2021-01-22',
    //     from: { name: '浜ら€氶摱琛屼俊鐢ㄥ崱', type: '淇＄敤鍗? },     
    //     to: { name: '鍩洪噾', type: '鎶曡祫璐︽埛' }
    //   }
    // if(walletData.length === 0){
    //     walletData.push(data)
    //     NODE_FS.writeFileSync(PATH,JSON.stringify(walletData),"utf-8");
    // }
    // else{
    //     if(walletData.find(item=>item.name===data.name && item.type===data.type )){
    //         return "RTL"
    //     }
    //     else{
    //         walletData.push(data);
    //         NODE_FS.writeFileSync(PATH,JSON.stringify(walletData),"utf-8");
    //     }
    // }
    // return "igetit"
}
module.exports = { 
    asdgfwgwajustdoit
}

