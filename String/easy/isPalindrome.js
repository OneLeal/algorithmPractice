// Leecode：9. 回文数

// 方法一：双指针操作字符串
var isPalindrome = function(x) {
    var str = x + '';
    var front = 0, rear = str.length - 1, bool = true;

    while (front < rear) {
        if (str[front] === str[rear]) {
            front++;
            rear--;
        } else {
            bool = false;
            break;
        }
    }

    return bool;
};

// 方法二：数学推导
var isPalindrome = function(x) {
    if (x < 0) return false;
    var original = x, num = 0;
    while (x > 0) {
        var rest = x % 10;
        num = (num * 10) + rest;
        x = (x - rest) / 10;
    }
    return original === num;
};