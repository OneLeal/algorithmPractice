// LeetCode: 402. 移掉K位数字

var removeKdigits = function(num, k) {
    if (num.length <= k) return '0';
    var result = [num[0]];
    for (var i = 1; i < num.length; i++) {
        while (+num[i] < +result[result.length - 1] && k) {
            result.pop();       // 弹出栈顶元素
            k--;
        }
        result.push(num[i]);    // 压入新元素
    }

    var s = result.join('');
    k > 0 ? (s = s.slice(0, s.length - k)) : null;
    s = s.replace(/^(0+)/, '');
    return s === '' ? '0' : s;
};