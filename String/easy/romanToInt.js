// LeetCode: 13. 罗马数字转整数

var romanToInt = function(s) {
    var intMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var num = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i + 1] && (intMap[s[i]] < intMap[s[i + 1]])) num.push(-1 * intMap[s[i]]);
        else num.push(intMap[s[i]]);
    }
    return num.reduce((calc, num) => calc + num, 0);
};