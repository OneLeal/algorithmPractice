// LeetCode: 28. 实现 strStr()

// 使用 api
var strStr = function(haystack, needle) {
    if (needle === '') return 0;
    return haystack.indexOf(needle);
};

// 手动实现
var strStr = function (haystack, needle) {
    if (needle === '') return 0;
    if (needle.length > haystack.length) return -1;

    var needleLen = needle.length;  // needle 长度
    var firstChar = needle[0];      // needle 第一个字符
    var bool = false;              // 指针 p，遍历一次 haystack
    var subStr = '';               // 子串

    var isContain = function (str, target) {
        if (str.length !== target.length) return false;
        var p = 0, flag = true;
        while (p !== str.length) {
            if (str[p] !== target[p]) {
                flag = false;
                break;
            }
            p++;
        }
        return flag;
    };

    for (var i = 0; i < haystack.length; i++) {
        // 第一个字符匹配，切割出子串并判断是否与 needle 全等
        if (haystack[i] === firstChar) {
            subStr = haystack.slice(i, i + needleLen);
            bool = isContain(subStr, needle);
            if (bool) return i;
        }
    }

    return -1;
};