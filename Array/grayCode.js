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

/*
* 格雷编码的特征：
* 1. 所有二进制编码具有一定的对称性；
* 2. 每次递归都以上一轮编码为模板进行复制；
* 3. 复制的编码首位补 1，模板首位补 0；
* 4. 位数为 n 的编码，其总数为 2^n
* */
var grayCode = function(n) {
    /*
    * 用二维数组表示编码：
    * 第一维度：表示编码总数（即第一维度的长度）；
    * 第二维度：表示编码的位数（bit）；
    * */
    var bit = 1, code = [[0], [1]];  // 最小位数和编码

    if (n === 0) {
        return [0];
    }

    if (n === 1) {
        return code;
    }

    var range = function () {
        if (n > bit) {
            var len = Math.pow(2, ++bit); // 位数自增并计算编码总数
            for (var i = 0; i < len / 2; i++) {
                var temp = [].concat(code[i]);   // 拷贝一份引用类型的数据
                code[i].unshift(0);       // 这一行写不写无所谓，为了直观检测编码还是写上吧
                code[len - 1 - i] = temp;       // 根据编码对称性新增数组元素
                code[len - 1 - i].unshift(1); // 位数增加，补 1，表示进位
            }
            range(bit);
        }
    };

    range();
    return code.map(item => parseInt(item.join(''), 2)); // 二进制编码转十进制数
};

console.log(grayCode(3));
console.log(grayCode(4));