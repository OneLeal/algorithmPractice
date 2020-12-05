// LeetCode: 46. 全排列
var permute = function(nums) {
    if (!nums.length) return [];
    var arr = [];
    var range = function (result, target) {
        if (!target.length) {
            arr.push(result);
        } else {
            target.forEach((num, index) => {
               var temp = [].concat(target);
               temp.splice(index, 1);
               range(result.concat(num), temp);
            });
        }
    };
    range([], nums);
    return arr;
};

// ---------------------------------------------

// LeetCode: 47. 全排列 II

// 递归
var permuteUnique = function(nums) {
    if (!nums.length) return [];
    var arr = [];
    var range = function (result, target) {
        if (!target.length) {
            arr.push(result);
        } else {
            target.forEach((num, index) => {
                if (index > 0 && num !== target[index - 1]) {
                    var temp = [].concat(target);
                    temp.splice(index, 1);
                    range(result.concat(num), temp);
                }
            });
        }
    };
    range([], nums.sort((x, y) => x - y));
    return arr;
};

// 回溯
var permuteUnique = function(nums) {
    const ans = [];
    const vis = new Array(nums.length).fill(false);
    const backtrack = (idx, perm) => {
        if (idx === nums.length) {
            ans.push(perm.slice());
            return;
        }
        for (let i = 0; i < nums.length; ++i) {
            if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
                continue;
            }
            perm.push(nums[i]);
            vis[i] = true;
            backtrack(idx + 1, perm);
            vis[i] = false;
            perm.pop();
        }
    };
    nums.sort((x, y) => x - y);
    backtrack(0, []);
    return ans;
};