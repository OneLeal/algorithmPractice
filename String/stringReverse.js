/*
* LeetCode：
* 题号：557
* 标题：反转字符串中的单词 III
* 题目：给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
* 示例："Let's take LeetCode contest" → "s'teL ekat edoCteeL tsetnoc"
* */
var str = "Let's take LeetCode contest";
var reverseWords = function(s) {
    return s.split(' ').map(item => item.split('').reverse().join('')).join(' ');
};

console.log(reverseWords(str));

// 不使用 api
function reverseWordsCopy(str) {
    var word = '';   // 字母收集器
    var temp = '';   // 缓存反转的单词
    var result = ''; // 最终结果

    // 反转一个单词
    function reverseStr(str) {
        var arr = [];
        var result = '';

        // 字符串倒序转数组
        for (var i = str.length - 1; i > -1; i--) {
            arr[arr.length] = str[i];
        }

        // 数组正序转字符串
        for (var i = 0; i < arr.length; i++) {
            result += arr[i];
        }

        return result;
    }

    // 一个英文句子中，单词数 = 空格数 + 1，增加一个空格使得单词与空格一一对应
    str += ' ';

    for (var i = 0; i < str.length; i++) {
        word += str[i];   // 收集字母（包含空格）

        // 遇到空格时，收集的字母正好组成一个单词
        if (str[i] === ' ') {
            temp += reverseStr(word);   // 单词反转，并缓存到 temp
            word = '';                  // 清空字母收集器
        }
    }

    // 忽略第一个空格
    for (var i = 1; i < temp.length; i++) {
        result += temp[i];
    }

    return result;
}

console.log(reverseWordsCopy(str));