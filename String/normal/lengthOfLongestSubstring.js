// leetcod: 3. 无重复字符的最长子串

// 方法一：双指针
var lengthOfLongestSubstring = function(s) {
    if (s === '') return 0;
    if (s.length === 1) return 1;

    var count = 0;
    var findStr = function (pos, s) {
        var subStr = s[pos];
        for (var i = pos + 1; i < s.length; i++) {
            var isContain = subStr.indexOf(s[i]);
            if (isContain === -1) subStr += s[i];
            else break;
        }
        return subStr.length;
    };

    for (var i = 0; i < s.length; i++) {
        var num = findStr(i, s);
        num > count && (count = num);
    }
    return count;
};

// 方法二：滑动窗口
var lengthOfLongestSubstring = function (s) {
    if (s === '') return 0;
    if (s.length === 1) return 1;

    var count = 0, substr = '';
    for (var i = 0; i < s.length; i++) {
        var index = substr.indexOf(s[i]);
        if (index === -1) {
            substr += s[i];
        } else {
            substr.length > count && (count = substr.length);  // 比较当前子串长度
            if (substr[0] === s[i]) {                          // 相同字符在头部
                substr = substr.slice(1);
                substr += s[i];
            } else if (substr[substr.length - 1] === s[i]) {   // 相同元素在尾部
                substr = s[i];
            } else {                                           // 相同元素在中间
                substr = substr.slice(index + 1);
                substr += s[i];
            }
        }
    }
    return count > substr.length ? count : substr.length;
};