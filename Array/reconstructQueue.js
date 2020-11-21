// LeetCode: 406. 根据身高重建队列
var reconstructQueue = function(people) {
    var result = [];
    var obj = {};

    // 按人数进行分组
    people.forEach(item => {
        if (obj[item[1]])
            obj[item[1]].push(item);
        else
            obj[item[1]] = [item];
    });

    // 每组按身高升序排列
    for (var key in obj)
        obj[key] = obj[key].sort((a, b) => a[0] - b[0]);

    var numArr = Object.keys(obj).sort((a, b) => a - b);  // 人数少的组优先排前面

    var arrange = function (tar) {
        var val = tar[0], num = tar[1], pos = 0, bool = true;

        // 从已排序的 result 开始遍历，找到当前元素的位置
        for (var i = 0; i < result.length; i++) {
            if (result[i][0] >= val) num--;
            if (num === 0) {
                pos = i;  // 记录位置
                break;
            }
        }

        pos++;  // 从该位置起，判断下一个元素是否小于当前元素
        for (var i = pos; i < result.length; i++) {
            if (result[i][0] >= val) {
                bool = false;
                break;
            }
            pos = i + 1;
        }
        result.splice(pos, 0, tar);
    };

    for (var i = 0; i < numArr.length; i++) {
        if (+numArr[i] === 0) result = [...result, ...obj[numArr[i]]];
        else obj[numArr[i]].forEach(item => arrange(item));
    }

    return result;
};

// var arr = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]];
// var arr = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]];
// var arr = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]];
// var arr = [[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]];
// console.log(reconstructQueue(arr));