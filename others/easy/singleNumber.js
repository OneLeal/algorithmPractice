/*
* 面试题: 寻找单数
* 集合证书中有 2n + 1 个数，其中 2n 个数两两相同，寻找剩下的单数
* 示例：[2, 3, 6, 3, 6, 1, 1] 输出：2
* */

var arr = [2, 3, 6, 3, 6, 1, 1];
function findSingleNumber(arr) {
    if (!(arr instanceof Array)) {
        return;
    }
    var obj = {};
    var result;
    arr.forEach(item => {
        if (!(obj.hasOwnProperty(item))) {
            obj[item] = 1;
        } else {
            obj[item]++;
        }
    });
    for (var key in obj) {
        (obj[key] % 2 === 1) ? (result = key) : null;
    }
    return result;
}

console.log(findSingleNumber(arr));