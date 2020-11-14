// LeetCode: 85 最大矩形

var maximalRectangle = function(matrix) {
    var indexGroup = [];   // 保存每行矩形有效的始末位置
    var area = [];

    var findIndexGroup = function (arr) {
        var result = [], start = undefined, end = undefined;
        for (var i = 0; i < arr.length; i++) {
            if (+arr[i] === 1 && !start && +arr[i + 1] === 1) {
                start = i;
            }

            if (!isNaN(start) && +arr[i] === 1 && (+arr[i + 1] === 0 || i === arr.length - 1) && !end) {
                end = i;
            }

            if (!isNaN(start) && !isNaN(end)) {
                result.push([start, end]);
                start = undefined;
                end = undefined;
            }
        }
        return result;
    };

    var range = function(arr, tar, row = 1) {
        var first = arr.pop();  // 弹出矩阵第一行
        var second = arr.pop(); // 弹出矩阵第二行

        if (!first || !second) {
            return;
        }

        var col = 1;            // 合并列数
        var start = null, end = null;  // 合并列数的始末下标

        for (var i = 0; i < first.length; i++) {
            var itemFirst = first[i];
            for (var j = 0; j < second.length; j++) {
                var itemSec = second[j];
                start = Math.max(itemFirst[0], itemSec[0]);
                end = Math.min(itemFirst[1], itemSec[1]);

                var temp = end - start;
                col = temp > col ? temp : col;
            }
        }

        row++;

        // 当前两行不能合并
        if (!start || !end) {
            if (row > 1) {
                tar.push((col + 1) * row);
            } else {
                return 0;
            }
        } else {
            tar.push((col + 1) * row);
            arr.push([[start, end]]);
            range(arr, tar, row);
        }
    };

    matrix.forEach(item => {
        var temp = findIndexGroup(item);
        temp.length && indexGroup.push(temp);
    });

    range(indexGroup, area, 1);
    return Math.max(...area);
};

var arr = [
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1],
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0]
];

console.log(maximalRectangle(arr));