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

var arr = [1,0,0,0,1];
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) {
        return true;
    }

    if (flowerbed.length < 2 && flowerbed[0] === 0 && n === 1) {
        return true;
    }

    if (flowerbed.length < 2 && flowerbed[0] === 1 && n === 1) {
        return false;
    }

    var count = n;
    for (var i = 0; i < flowerbed.length - 1; i++) {
        if (flowerbed[i] === 0) {
            // 考虑边界，数组末端
            if (i + 1 === flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
                flowerbed[i + 1] = 1;
                count--;
            }

            if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {  // 数组中间
                flowerbed[i] = 1;
                count--;
            } else if (flowerbed[i + 1] === 0 && i === 0) {   // 考虑边界，数组头部
                flowerbed[i] = 1;
                count--;
            }
        }
    }
    return count < 1;
};
console.log(canPlaceFlowers(arr, 2));