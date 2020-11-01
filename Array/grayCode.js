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

// 逻辑太复杂
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
};
var grayCodeFn = function(n) {
    if (n === 0) {
        return [0];
    }

    // 二进制转十进制数
    return make(n).map(item => parseInt(item, 2));
};

// 精编版
var grayCode = function(n) {
    if (typeof n !== 'number' || n < 0) {
        return null;
    }

    if (n === 0) {
        return [0];
    }

    /*
    * 第一维度：表示行，指在 n 位时所有编码的可能性
    * 第二维度：表示列，指位数 n
    * 数学规律：第一维度的长度 = 2^n；第二维度的长度 = n；格雷编码具有几何对称性
    * */
    var bit = 1, code = [[0], [1]]; // 最小位数 1，初始长度 2，因为 2^n = 2，编码有 2 种
    var range = function (bit, n, code) {
        // 递归终止条件：位数 = 输入值
        if (bit === n) {
            return code;
        }

        ++bit;
        var len = Math.pow(2, bit);   // 计算位数增加后的编码总数
        var limit = code.length;        // 记录当前编码的总数

        for (var i = 0; i < limit; i++) {
            var curItem = [].concat(code[i]); // 注意，code[i] 是引用类型
            code[i].unshift(0);         // 这一行写不写其实无所谓，为了直观地观察二进制编码还是写上吧
            if (!code[len - 1 - i]) {
                code[len - 1 - i] = curItem;  // 格雷编码具有几何对称性，此处需赋值
                code[len - 1 - i].unshift(1); // 因位数增加，所以补 1，表示进位
            }
        }

        return range(bit, n, code); // 当前编码完成，进入下一次递归
    };

    // 二进制解码
    var decode = function (code) {
        return code.map(item => parseInt(item.join(''), 2));
    };

    return decode(range(bit, n, code));
};

console.log(grayCode(4));