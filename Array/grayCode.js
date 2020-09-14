/*
* LeetCode：
* 题号：89
* 标题：格雷编码
* 题目：格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异
* 给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。即使有多个不同答案，你也只需要返回其中一种。
* 格雷编码序列必须以 0 开头。
*
* 示例：
* 输入：2
* 输出：[0, 1, 3, 2]
*
* 输入：0
* 输出：[0]
*
* */

var make = function (n) {
    if (n === 1) {
        return ['0', '1'];  // 格雷码的最小序列
    } else {
        var prev = make(n - 1); // 每次计算格雷码序列，都要获取上一次的序列
        var temp = [];    // 格雷码序列暂存器
        var max = Math.pow(2, n) - 1;  // 格雷码序列长度为 2^n，用数组表示时最大 index 值需 - 1

        // 找出格雷码序列的对称性，暂存器首尾元素补齐 0 和 1
        for (var i = 0; i < prev.length; i++) {
            temp[i] = `0${prev[i]}`;
            temp[max - i] = `1${prev[i]}`;
        }
        return temp;
    }
}

var grayCode = function(n) {
    if (n === 0) {
        return [0];
    }

    // 二进制转十进制数
    return make(n).map(item => parseInt(item, 2));
};

console.log(grayCode(4));