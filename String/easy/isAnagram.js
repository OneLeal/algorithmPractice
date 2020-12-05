// LeetCode: 242. 有效的字母异位词

// 逐个比较法：匹配一次，删除一个
var isAnagram = function(s, t) {
    if (s === '' && t === '') return true;
    if (s === '' || s.length !== t.length) return false;

    var count = 0, index;
    while (count !== t.length) {
        index = s.indexOf(t[count]);  // 寻找字符
        if (index === -1) break;
        s = s.replace(s[index], '');  // 删除字符
        count++;
    }

    return count === t.length;  // 字符全部删除，则 count 与 t 长度相同
};

// 字符计数法：利用对象 key 的唯一性
var isAnagram = function (s, t) {
    if (s === '' && t === '') return true;
    if (s === '' || s.length !== t.length) return false;

    var strCollect = {};  // 记录每个字符出现的个数
    for (var i = 0; i < s.length; i++) {
        if (strCollect[s[i]]) strCollect[s[i]]++;
        else strCollect[s[i]] = 1;
    }

    for (var i = 0; i < t.length; i++) {
        if (strCollect[t[i]]) strCollect[t[i]]--;  // 如若匹配，个数自减
        else break;
    }

    return Object.values(strCollect).every(num => num === 0);   // 字符用尽才有效
};

