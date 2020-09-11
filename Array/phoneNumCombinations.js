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

function testLetterCombinations(digits) {
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

            // 每次递归都两两组合（第一个子数组与第二个子数组）
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
}

console.log(testLetterCombinations(str));