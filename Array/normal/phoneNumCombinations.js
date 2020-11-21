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

var str = '23';

// 思路 1：分步乘法 + 递归
var letterCombinations1 = function(digits) {
    var mapToLetters = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };

    // 获取映射后的字母数组
    var getLettersGroup = function (digits) {
        if (digits === '')
            return [];

        var result = [];
        for (var i = 0; i < digits.length; i++) {
            result.push(mapToLetters[digits[i]]);
        }
        return result;
    };

    // 字母组合
    var calcLetters = function (arr) {
        if (arr.length > 1) {
            var temp = [];  // 暂存组合结果

            // 分步乘法
            for (var i = 0; i < arr[0].length; i++) {
                for (var j = 0; j < arr[1].length; j++) {
                    temp.push(arr[0][i] + arr[1][j]);
                }
            }
            arr.splice(0, 2, temp);  // 组合后，删除组合过的子数组，新增组合结果
            return calcLetters(arr);
        } else if (arr.length === 1) {
            return arr[0];
        } else {
            return [];
        }
    };

    return calcLetters(getLettersGroup(digits));
};

// 思路 2：分步乘法 + while
var letterCombinations2 = function(digits) {
    if (typeof digits !== 'string' || digits === '') {
        return [];
    }

    // 映射对象
    var mapToLetters = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };

    var arr = [];
    for (var i = 0; i < digits.length; i++) {
        arr.push(mapToLetters[digits[i]]);
    }

    var result = arr.shift();  // 拿到第一个字符组合

    // 分步乘法原理做循环
    var cycle = function (arr1, arr2) {
        var tar = [];
        arr1.forEach(i1 => {
            arr2.forEach(i2 => {
                tar.push(i1 + i2);
            });
        });
        return tar;
    };

    while (arr.length) {
        result = cycle(result, arr.shift());
    }

    return result;
};

console.log(letterCombinations1(str));
console.log(letterCombinations2(str));