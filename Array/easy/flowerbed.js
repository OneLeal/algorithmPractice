/*
* LeetCode：
* 题号：605
* 标题：种花问题
* 题目：假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。
* 可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
* 给定一个花坛和一个数 n，能否在不打破种植规则的情况下种入 n 朵花？能则返回 True，不能则返回 False。
*
* 示例：
* 输入：flowerbed = [1,0,0,0,1], n = 1
* 输出：true
*
* 输入：flowerbed = [1,0,0,0,1], n = 2
* 输出：false
*
* */

var flowerbed = [0,0,0,0,1], n = 2;

var canPlaceFlowers = function(flowerbed, n) {
    if (typeof n !== 'number' || !Array.isArray(flowerbed) || n < 0 || n > flowerbed.length) {
        return false;
    }

    // 边界条件
    if ((flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) || n === 0 || (n === 0 && flowerbed.length === 0)) {
        return true;
    }

    for (var i = 0; i < flowerbed.length; i++) {
        if (n === 0) {
            break;
        }

        // 花坛的起始位置、结束位置、中间位置分别判断
        if (i === 0) {
            if (flowerbed[i + 1] === 0 && flowerbed[i] === 0) {
                n--;
                flowerbed[i] = 1;
            }
        } else if (i === flowerbed.length - 1) {
            if (flowerbed[i - 1] === 0 && flowerbed[i] === 0) {
                n--;
                flowerbed[i] = 1;
            }
        } else {
            if (flowerbed[i] === 0 && flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0) {
                n--;
                flowerbed[i] = 1;
            }
        }
    }

    return n < 1;
};

console.log(canPlaceFlowers(flowerbed, n));