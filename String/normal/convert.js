// LeetCode: 6. Z 字形变换
var convert = function(s, numRows) {
    if (s === '' || numRows === 0) return '';
    if (numRows === 1 && s.length) return s;

    var rowMap = {}, flag = 0, pointer = false;
    for (var i = 0; i < numRows; i++)
        rowMap[i] = '';

    for (var i = 0; i < s.length; i++) {
        if (flag === 0 || flag === numRows - 1) {  // 指针方向变换条件
            pointer = !pointer;
        }
        rowMap[flag] += s[i];
        flag += pointer ? 1 : -1;  // 依据方向进行取值计算
    }

    return Object.values(rowMap).join('');
};

var s = 'LEETCODEISHIRING', n = 3;
console.log(convert(s, n));