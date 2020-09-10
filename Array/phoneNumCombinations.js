/*
* LeetCode：
* 题号：17
* 标题：电话号码的字母组合
* 题目：给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
* 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
*
* 示例：
* 输入："23"
* 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
*
* 说明：
* 
* */

var str = '2';
var letterCombinations = function(digits) {
    if (!(typeof digits === 'string')) {
        return;
    }

    if (digits === '') {
        return [];
    }

    var arr = digits.split('');
    var letters = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    var mapLetters = function (arr) {
        return arr.map(item => letters[item]);
    };

    var combinationTwo = function (arr) {
        if (!(arr instanceof Array)) {
            return;
        }

        if (arr.length > 1) {
            var temp = [];
            for (var i = 0; i < arr[0].length; i++) {
                for (var j = 0; j < arr[1].length; j++) {
                    temp.push(arr[0][i] + arr[1][j]);
                }
            }
            arr.splice(0, 2, temp);
            return combinationTwo(arr);
        } else {
            return arr[0];
        }
    };

    var letterGroup = mapLetters(arr);
    if (letterGroup.length > 1) {
        return combinationTwo(mapLetters(arr));
    } else {
        return letterGroup[0].split('');
    }
};

console.log(letterCombinations(str));