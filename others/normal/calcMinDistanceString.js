/*
    请完成函数：
    两个长度为 n 的字符串之间的距离定义为这两个字符串对应位置上不同字符的个数；
    例如：'babc' 和 'abba' 的距离是 3
    输入参数为 m 个长度为 n 的字符串
    生成一个与给定的这 m 个字符串的距离之和最小，长度为 n 的字符串并输出。
 */

function calcMinDistanceString(strArray) {
    if (!(Array.isArray(strArray)) || !strArray.length) {
        return null;
    }

    var strLen = strArray[0].length;
    var arrLen = strArray.length;
    var result = '';

    for (var i = 0; i < strLen; i++) {
        var obj = {};
        var temp = 0;
        var char = '';

        for (var j = 0; j < arrLen; j++) {
            if (obj.hasOwnProperty(strArray[j][i])) {
                obj[strArray[j][i]]++;
            } else {
                obj[strArray[j][i]] = 1;
            }
        }

        for (var key in obj) {
            if (obj[key] > temp) {
                temp = obj[key];
                char = key;
            }
        }

        result += char;
    }

    return result;
}

var strArr = [
    'purple',
    'people',
    'person',
    'proper',
    'period'
];

var englishWords = [
    'sunshine',
    'umbrella',
    'normally',
    'gorgeous',
    'currency',
    'accuracy',
    'adequacy'
];

console.log(calcMinDistanceString(strArr));
console.log(calcMinDistanceString(englishWords));