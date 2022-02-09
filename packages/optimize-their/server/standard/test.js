const NODE_FS = require("fs");
const NODE_PATH = require("path");
const PATH = "./Data_Fund/DB_Expensescopy.json";
const xdq = {
    date:"2020-12-23",
    name:"项目",
    value:1234,
    type:1,
    mark:"hahaha"
}
function awe(data){
    // const hahaKeyarray = ["描述","路径","收支类型","来源类型"];
    // const hahaKeyarray = ["name","desc","balance","type"];
    const hahaarray = [
        ["获利","外部到消费","收入","获利"],
        ["消费","消费到外部","支出","消费"],
        ["理财亏损","理财到外部","支出","理财"],
        ["理财取现","理财到消费","空转","理财"],
        ["理财投入","消费到理财","空转","理财"],
        ["贷款还款","消费到信用","支出","借贷"],
        ["贷款借贷","信用到外部","支出","借贷"],
        ["贷款取现","信用到消费","空转","借贷"]
        // ;\
        // '
        
        // "]
    ]
    const qwezxcasd = {
        date:data.date,
        expenses:[
            [data.name,data.value,hahaarray[data.type][2],hahaarray[data.type][3],data.mark]
        ]
    }
    return qwezxcasd;
}
function zsd(data){
    // const hahaKeyarray = ["描述","路径","收支类型","来源类型"];
    // const hahaKeyarray = ["name","desc","balance","type"];
    const hahaarray = [
        ["获利","外部到消费","收入","获利"],
        ["消费","消费到外部","支出","消费"],
        ["理财亏损","理财到外部","支出","理财"],
        ["理财取现","理财到消费","空转","理财"],
        ["理财投入","消费到理财","空转","理财"],
        ["贷款还款","消费到信用","支出","借贷"],
        ["贷款借贷","信用到外部","支出","借贷"],
        ["贷款取现","信用到消费","空转","借贷"]
    ]
    const qwezxcasd =[data.name,data.value,hahaarray[data.type][2],hahaarray[data.type][3],data.mark]
    return qwezxcasd;
}

try {
    var data = NODE_FS.readFileSync(NODE_PATH.resolve(PATH), 'utf-8');
    const DB_OBJECT = JSON.parse(data);
    const zxcsaf  = DB_OBJECT.find(item=>item.date === xdq.date);
    if(zxcsaf){
        zxcsaf.expenses.push(zsd(xdq));
    }
    else{
        DB_OBJECT.push(awe(xdq))
    }
        NODE_FS.writeFileSync(NODE_PATH.resolve(PATH),JSON.stringify(DB_OBJECT), 'utf-8')
} catch (err) {
    // 出错了
    console.info(err);
}