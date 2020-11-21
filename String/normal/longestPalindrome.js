// LeetCode: 5. 最长回文子串

// 双指针解法
var longestPalindrome = function(s) {
    if (s.length === 1) return s;
    var str = '', count = 0;

    // 从中间开始向两边发掘
    var findPos = function (left, right, s, mid) {
        var prev = left, next = right;
        var m = mid ? s[mid] : '';
        while (s[prev] === s[next] && s[prev] && s[next]) {
            m = s[prev] + m + s[next];
            prev--;
            next++;
        }
        return m;
    };

    for (var i = 0; i < s.length; i++) {
        var case1 = '', case2 = '';

        // 回文长度为偶数
        if (s[i] && s[i + 1] && s[i] === s[i + 1]) {
            case1 = findPos(i, i + 1, s);
        }

        // 回文长度为奇数
        if (s[i - 1] && s[i + 1] && s[i + 1] === s[i - 1]) {
            case2 = findPos(i - 1, i + 1, s, i);
        }

        // 以上两种情况均出现，选择长度大者
        var temp = case1.length > case2.length ? case1 : case2;
        if (temp.length > count) {
            count = temp.length;
            str = temp;
        }
    }
    return count ? str : s[0];
};

var s = 'babad';
console.log(longestPalindrome(s));