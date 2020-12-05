// LeetCode: 20. 有效的括号
var isValid = function(s) {
    if (s.length < 2) return false;
    var stack = [], flag = true;
    var checkHandle = function (left, right) {
        switch (left) {
            case '(': return right === ')';
            case '[': return right === ']';
            case '{': return right === '}';
            default: return false;
        }
    };
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        }

        if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
            flag = checkHandle(stack.pop(), s[i]);
            if (!flag) break;
        }
    }
    return flag && !stack.length;
};