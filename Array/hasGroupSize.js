/*
* LeetCode：
* 题号：914
* 标题：卡牌分组
* 题目：给定一副牌，每张牌上都写着一个整数。
* 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
*     1. 每组都有 X 张牌。
*     2. 组内所有的牌上都写着相同的整数。
*
* 仅当你可选的 X >= 2 时返回 true。
*
* 示例：
* 输入：[1, 2, 3, 4, 4, 3, 2, 1]
* 输出：true
* 说明：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
*
* 输入：[1, 1, 2, 2, 2, 2]
* 输出：true
* 说明：可行的分组是 [1,1]，[2,2]，[2,2]
*
* */

var arr = [1, 2, 3, 4, 4, 3, 2, 1];

// 题解：该题包含了一个子问题，即求两个数(n1, n2)的最大公约数
// 参数 a = n1, 参数 b = n2 || a % b (数学关系可自行推导)
var cdr = function (a, b) {
    if (b === 0) {
        return a;
    } else {
        return cdr(b, a % b);
    }
};

var hasGroupSize = function (arr) {
    // 依题意，数组长度至少为 2
    if (arr.length < 2) {
        return false;
    }

    // 数组元素分类
    var obj = {};
    arr.forEach(item => {
       if (obj.hasOwnProperty(item)) {
           obj[item].push(item);
       } else {
           obj[item] = [item];
       }
    });

    // 统计各数字的个数
    var temp = [];
    for (var key in obj) {
        temp.push(obj[key].length);
    }

    // 对所有的数求公约数
    while (temp.length > 1) {
        var a = temp.shift();
        var b = temp.shift();
        var val = cdr(a, b);

        // 数学定律：两数的最小公约数为 1，因此若 val = 1，则没有最大公约数
        if (val === 1) {
            return false;
        } else {
            temp.unshift(val);
        }
    }

    return true;
};

console.log(hasGroupSize(arr));