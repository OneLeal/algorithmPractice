// LeetCode: 27. 移除元素

var removeElement = function(nums, val) {
    while (nums.includes(val)) {
        var index = nums.indexOf(val);
        nums.splice(index, 1);
    }
    return nums.length;
};