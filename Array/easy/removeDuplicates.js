// LeetCode: 26. 删除排序数组中的重复项

var removeDuplicates = function(nums) {
    for (var i = 0; i < nums.length; i++)
        (nums[i + 1] != null && nums[i] === nums[i + 1]) && (nums.splice(i, 1), i--);
    return nums;
};