// LeetCode: 14. 最长公共前缀
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    if (strs.length === 1) return strs[0];

    var result = '', target = strs.shift();
    for (var i = 0; i < target.length; i++) {
        var flag = strs.every(s => s[i] && (s[i] === target[i]));
        if (flag) result += target[i];
        else break;
    }
    return result;
};