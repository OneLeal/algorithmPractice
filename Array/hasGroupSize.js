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

// 题解：该题包含了一个子问题，即求两个数(n1, n2)的最大公约数

var hasGroupsSizeX = function(deck) {
    if (!Array.isArray(deck) || (deck[0] === 1 && deck.length === 1)) {
        return false;
    }

    // 记录每张牌的数量
    var deckMap = {};
    deck.forEach(item => {
        if (deckMap[item]) {
            deckMap[item]++;
        } else {
            deckMap[item] = 1;
        }
    });

    var arr = Object.values(deckMap); // 对象的 value 转数组

    // 三目运算 + 递归，求 x，y 的最大公约数
    var gcd = function (x, y) {
        return x ? gcd(y % x, x) : y;
    };

    while (arr.length > 1) {
        var x = arr.shift();
        var y = arr.shift();
        var divisor = gcd(x, y);
        if (divisor === 1) {
            return false;   // 最大公约数不能为 1
        }
        arr.unshift(divisor);
    }

    return true;
};