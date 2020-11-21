// LeetCode: 49. 字母异位词分组
var arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
// var arr = ["ddddddddddg","dgggggggggg"];

var groupAnagrams = function(strs) {
    var strMap = {}, temp = [];

    // 判断 origin 是否包含了 target 中的所有字符(字符串长度、字符种类、同种字符数量均相等)
    var isContainer = function (origin, target) {
        if (origin.length !== target.length)
            return false;

        var bool = true;
        var arr = target.split('');
        for (var i = 0; i < word.length; i++) {
            var index = arr.indexOf(word[i]);
            if (index > -1) {
                arr.splice(index, 1);
            } else {
                bool = false;
                break;
            }
        }
        return bool && arr.length === 0;
    };

    while (strs.length) {
        var word = strs.pop();
        var copy = [].concat(strs);
        for (var i = 0; i < copy.length; i++) {
            var flag = isContainer(word, copy[i]);
            if (flag) {
                temp.push(copy[i]);
                strs.splice(strs.indexOf(copy[i]), 1);
            }
        }

        if (temp.length) {
            strMap[word] = [...temp, word];
            temp = [];
        } else strMap[word] = [word];
    }
    return Object.values(strMap);
};

console.log(groupAnagrams(arr));