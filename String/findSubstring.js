/*
* LeetCode：
* 题号：30
* 标题：串联所有单词的子串
*
* */

/*
* 思路 1：
* 通过数学的排列组合规律，枚举出所有子串，最后逐个筛选
* 枚举 + 排列组合 → 递归 + 循环
* 缺点：两次递归会用尽堆内存，不能通过 LeetCode 某些测试用例
* 注：
* 1. words 中可能会出现相同的单词，因此排列（有序）出的子串可能会相同；
* 为获取不同的单词组合（无序），在排列后要进行数组去重；
*
* 2. 子串可能会在 s 中出现多次，因此还需再次使用递归处理；
* */
var findSubstring1 = function(s, words) {
    var result = [];
    var indexArr = [];

    // 排列递归：对 w 中的单词进行全排列，tar 存放一次排列完成的结果
    var getWords = function (tar, w) {
        // 二者长度相同表示一次排列完成
        if (tar.length === words.length) {
            result.push(tar.join(''));
        } else {
            // 枚举出可选择的单词
            w.forEach((item, index) => {
                var temp = [].concat(w);  // 对引用类型数据的拷贝
                temp.splice(index, 1); // 删除当前选择的单词
                getWords(tar.concat(item), temp); // tar: 存放该次所选单词；temp: 剩余单词
            });
        }
    };

    // 下标递归
    var getIndex = function(item, s, from = 0) {
        var temp = s.indexOf(item, from);
        if (temp === -1) return;
        indexArr.push(temp);
        getIndex(item, s, temp + 1); // item: 子串；s: 目标字符串；from: 搜索起点
    };

    getWords([], words);  // 第一次递归，获取所有单词的全排列（有序）
    result = Array.from(new Set(result)); // 数组去重，排列变组合（无序）
    result.forEach(item => getIndex(item, s, 0)); // 第二次递归，寻找子串下标
    return indexArr;
};

/*
* 思路 2：
* 数学反证法，先枚举 s 中存在子串的所有情况，
* 再逐个截取子串中的单词与 words 比较，判断该子串是否合法
* 与思路 1 不同，前者枚举出所有子串再进行筛选；后者先假设子串存在，再进行判断
* */
var findSubstring2 = function (s, words) {
    if (typeof s !== 'string' || !(Array.isArray(words)) || s === '' || !words.length) {
        return [];
    }

    var result = [], collect = {};
    var count = words.length;        // 单词个数
    var len = words[0].length;       // 一个单词的长度
    var allLen = count * len;        // 所有单词的长度

    // 记录各个单词的数量
    words.forEach(item => {
        if (collect[item]) {
            collect[item]++;
        } else {
            collect[item] = 1;
        }
    });

    // 若子串存在，枚举出子串出现的次数（即子串出现的位置有几种）
    for (var i = 0; i < s.length - allLen + 1; i++) {
        var sub = s.slice(i, allLen + i);  // 取出一个子串
        var temp = Object.assign({}, collect); // 拷贝一份使用

        // 内层循环次数等于单词个数
        for (var j = 0; j < sub.length + 1; j += len) {
            var word = sub.slice(j, len + j);  // 取出一个单词
            if (temp[word]) {
                temp[word]--;
            }
        }

        // 内层循环结束，若单词用尽则反证子串存在
        Object.values(temp).every(item => item === 0) && result.push(i);
    }

    return result;
};

var s1 = "aaaaaaaaaaaaaa", words1 = ["aa","aa"];
var s2 = "barfoothefoobarman", words2 = ["foo","bar"];
var s3 = "wordgoodgoodgoodbestword", words3 = ["word","good","best","word"];

console.log(findSubstring1(s1, words1));
console.log(findSubstring1(s2, words2));
console.log(findSubstring1(s3, words3));

console.log(findSubstring2(s1, words1));
console.log(findSubstring2(s2, words2));
console.log(findSubstring2(s3, words3));