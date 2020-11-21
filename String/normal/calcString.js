/*
* LeetCode：
* 题号：696
* 标题：计数二进制子串
* 题目：给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，
* 并且这些子字符串中的所有0和所有1都是组合在一起的。
* 重复出现的子串要计算它们出现的次数。
*
* 示例：
* 输入："00110011"
* 输出：6
* 解释：有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
*
* 输入："00110"
* 输出：3
* 详细信息：["0011", "01", "10"]
*
* 输入：10101
* 输出：4
* 详细信息：['10', '01', '10', '01']
* */

var s = '00110011';

// 双向推导(双指针)
var countBinarySubstrings = function(s) {
    if (typeof s !== 'string') {
        return 0;
    }

    var prev = null, next = null, result = 0;  // prev next 双指针
    var prev_temp = null, next_temp = null;    // 双指针暂存器

    for (var i = 0; i < s.length; i++) {
        prev = i;
        next = i + 1;

        if (s[prev] && s[next]) {
            // 发现起点，记录当前值
            if (s[prev] !== s[next]) {
                prev_temp = s[prev];
                next_temp = s[next];

                // 沿起点左右探索
                while (s[next] && s[next] === next_temp && s[prev] && s[prev] === prev_temp) {
                    prev--;
                    next++;
                    result++;
                }
            }
        }
    }

    return result;
};

console.log(countBinarySubstrings(str));