// 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

// 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

// 你可以返回任何满足上述条件的数组作为答案。

 

// 示例：

// 输入：[4,2,5,7]
// 输出：[4,5,2,7]
// 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 

// 提示：

// 2 <= A.length <= 20000
// A.length % 2 == 0
// 0 <= A[i] <= 1000
 
function a(s){
    let listD=[];
    let listS=[];
    for(let [index,item] of s.entries()){
        if(Boolean(item % 2)){
            listD.push(item);
        }else{
            listS.push(item);
        }
    }
    let a = [];
    for(let i = 0 ; i < s.length ; i++){
        if(Boolean(i%2)){
            // console.log('单数')
            a.push(listD[0]);
            listD=listD.splice(1)
        }else{
            // console.log('双数')
            a.push(listS[0]);
            listS=listS.splice(1)
        }
    }
    return a
}
a([4,2,5,7])