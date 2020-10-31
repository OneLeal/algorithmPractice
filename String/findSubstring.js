/*
* LeetCode：
* 题号：30
* 标题：串联所有单词的子串
*
* */

var s = 'barfoothefoobarman';
var words = ['foo', 'bar'];

/*
* 思路 1：
* 通过数学的排列组合规律，枚举出所有子串，最后逐个筛选
* 枚举 + 排列组合 → 递归 + 循环
* findSubstringCopy 存在一定缺陷，不能通过 LeetCode 某些测试用例
* */
var findSubstringCopy = function(s, words) {
    if (typeof s !== 'string' || !(Array.isArray(words))) {
        return false;
    }

    if (s === '' || !words.length) {
        return [];
    }

    var wordsLen = words.length;
    var result = [];

    /*
    * 递归函数
    * tar: Array 记录某一种单词的组合
    * arr： Array 传入的单词数组
    * */
    var range = function (tar, arr) {
        // 边界条件：二者长度相等
        if (tar.length === wordsLen) {
            result.push(tar);
        } else {
            arr.forEach((item, index) => {
                // item: 踢出去的元素，temp: 删除 item 之后所剩余的元素集合
                var temp = [].concat(arr);            // 暂时拷贝一份数据
                temp.splice(index, 1);    // 踢出 item
                range(tar.concat(item), temp);         // 不断递归，深度探索
            });
        }
    };

    range([], words);
    return result
        .map(item => s.indexOf(item.join('')))   // 数组转字符串并返回下标
        .filter(item => item > -1)               // 筛选存在的字符串的下标
        .filter((item, index, arr) => arr.indexOf(item) === index);  // 数组去重
};

/*
* 思路 2：
* 数学反证法，先枚举 s 中存在子串的所有情况，
* 再逐个截取子串中的单词与 words 比较，判断该子串是否合法
* 与思路 1 不同，前者枚举出所有子串再进行筛选；后者先假设子串存在，再进行判断
* */
var findSubstring = function (s, words) {
    if (typeof s !== 'string' || !(Array.isArray(words)) || s === '' || !words.length) {
        return [];
    }

    var wordLen = words[0].length;          // 一个单词的长度
    var totalLen = wordLen * words.length;  // 所有单词的长度
    var count = totalLen / wordLen;         // 所有单词个数
    var wordsMap = {};                      // 记录各单词个数
    var result = [];

    for (let word of words) {
        if (wordsMap[word]) {
            wordsMap[word]++;
        } else {
            wordsMap[word] = 1;
        }
    }

    // 若子串存在，枚举出子串出现的次数（即子串出现的位置有几种）
    for (var i = 0; i < s.length - totalLen + 1; i++) {
        var temp = Object.assign({}, wordsMap);  // 拷贝一份
        var subString = s.slice(i, i + totalLen);           // 截取子串
        var j = 0, n = 0;

        // 判断出现在某一位置上的子串的合法性
        while (n < count) {
            var word = subString.slice(j, j + wordLen); // 从子串中截取出各单词
            if (temp[word]) {
                temp[word]--;
            } else {
                break;
            }

            j += wordLen;
            n++;
        }

        // 内层循环结束后，若单词数用尽，则反证子串合法
        if (Object.values(temp).every(item => item === 0)) {
            result.push(i);
        }
    }
    return result;
};

console.log(findSubstring(s, words));
console.log(findSubstringCopy(s, words));