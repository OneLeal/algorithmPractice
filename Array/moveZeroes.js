// LeetCode: 283. 移动零
var moveZeroes = function(nums) {
    var temp = [];
    while (nums.includes(0)) {
        var index = nums.indexOf(0);
        temp.push(nums.splice(index, 1));
    }
    while (temp.length) nums.push(temp.shift());
    return nums;
};

// 双指针：一次循环
var moveZeroes = function(nums) {
    var prev = 0, next = 1;
    while (next < nums.length) {
        if (nums[prev] && nums[next] && nums[prev + 1] === nums[next]) {
            prev++;
        } else if (!nums[prev] && nums[next]) {
            nums[prev] = nums[next];
            nums[next] = 0;
        } else {
            if (nums[prev]) {
                nums[prev + 1] = nums[next];
                prev++;
            } else {
                nums[prev] = nums[next];
            }
            nums[next] = 0;
        }
        next++;
    }
    return nums;
};