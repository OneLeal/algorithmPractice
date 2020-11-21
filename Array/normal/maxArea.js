// LeetCode: 11. 盛最多水的容器

// 双指针：从左往右
var maxArea = function(height) {
    if (!(Array.isArray(height))) {
        return 0;
    }

    var area = 0;
    for (var i = 0; i < height.length; i++) {
        for (var j = i + 1; j < height.length; j++) {
            Math.min(height[i], height[j]) * (j - i) > area && (area = Math.min(height[i], height[j]) * (j - i));
        }
    }
    return area;
};

// 双指针：两端向中间
var waterContainer = function (height) {
    var water = 0, i = 0, j = height.length - 1;
    while (i < j) water = Math.max(water, (j - i) * (height[i] < height[j] ? height[i++] : height[j--]));
    return water;
};

var arr = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(arr));
console.log(waterContainer(arr));