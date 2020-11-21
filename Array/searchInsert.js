// LeetCode: 35. 搜索插入位置

// 基本逻辑运算：
var searchInsert = function(nums, target) {
    var index = nums.indexOf(target);
    if (index > -1) return index;
    if (target < nums[0]) return 0;
    for (var i = 0; i < nums.length; i++)
        if (target < nums[i]) return i;
    return nums.length;
};

// 使用 ES6 api
var searchInsert = function(nums, target) {
    var index = nums.indexOf(target);
    if (index > -1) return index;
    var pos = nums.findIndex(num => num > target);
    return pos === -1 ? nums.length : pos;
};