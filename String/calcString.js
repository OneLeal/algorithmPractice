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

var str = '00110011';

// 单向推导
var countBinarySubstrings = function(str) {
    var arr = [];

    // 一次循环，不断遍历子串
    for (var i = 0; i < str.length; i++) {
        var temp = str.slice(i);   // 每个子串都比上一次缺少头部字符
        var result = compareStr(temp);  // 获取符合条件的子串
        result && arr.push(result);
    }
    console.log(arr);
    return arr.length;

    // 依据规则，筛选子串
    function compareStr(str) {

        // 记事本
        var obj = { 0:0, 1:0, isChange: false, record: null, str: '' };

        for (var i = 0; i < str.length; i++) {
            // 记下首次出现的字符
            (i === 0) ? (obj.record = str[i]) : null;

            // 当记录的字符与当前遍历到的字符不相等，且开关状态未改变时
            if (obj.record !== str[i] && !obj.isChange) {
                obj.isChange = true;  // 开关变化，表示字符记录已经更新
                obj.record = str[i];  // 更新字符记录
            }

            // 当记录的字符与当前遍历到的字符不相等，且开关状态已改变，
            // 表示字符出现了第二次变化，此时跳出循环
            if (obj.isChange && obj.record !== str[i]) {
                break;
            }

            obj[str[i]]++;      // 字符计数器自增
            obj.str += str[i];  // 收集字符

            // 若两个字符计数器相等，表示已收集到符合题意的字符串，跳出循环
            if (obj[0] === obj[1]) {
                break;
            }
        }

        return (obj[0] === obj[1]) ? obj.str : null;
    }
};

// 双向推导
var countBinarySubstringsMid = function(str) {
    var arr = [];

    for (var i = 0; i < str.length - 1; i++) {

        // 发现目标（起始时，相邻字符必不同）
        if (str[i] !== str[i + 1]) {
            var left = i, right = i + 1;

            // 左右双向，发掘相同字符，且新字符与初始字符必相同
            while (left > -1 && right < str.length &&
            str[i] === str[left] && str[i + 1] === str[right]) {
                arr.push(showStr(str, left, right));
                left--;
                right++;
            }
        }
    }

    function showStr(str, start, end) {
        var result = '';
        for (var i = start; i < end + 1; i++) {
            result += str[i];
        }
        return result;
    }

    console.log(arr);
    return arr.length;
};

console.log(countBinarySubstrings(str));
console.log(countBinarySubstringsMid(str));