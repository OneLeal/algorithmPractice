// LeetCode: 48. 旋转图像

var rotate = function(matrix) {
    var arr = [], oneLen = matrix.length, twoLen = matrix[0].length;

    // 生成二维数组
    for (var i = 0; i < oneLen; i++)
        arr[i] = [];

    // 源数据暂存
    for (var i = 0; i < oneLen; i++) {
        for (var j = 0; j < twoLen; j++) {
            arr[i].push(matrix[i][j]);
        }
    }

    // 参数值清空
    for (var i = 0; i < oneLen; i++) {
        for (var j = 0; j < twoLen; j++) {
            matrix[i].pop();
        }
    }

    // 赋值，完成矩阵旋转
    for (var i = 0; i < oneLen; i++) {
        for (var j = 0; j < twoLen; j++) {
            matrix[j].unshift(arr[i][j]);
        }
    }

    return matrix;
};

var rotate = function(matrix) {
    // 对角倒转
    var len = matrix.length, char;
    for (var i = 0; i < len; i++) {
        for (var j = i; j < len; j++) {
            char = matrix[len - 1 - i][j];
            matrix[len - 1 - i][j] = matrix[len - 1 - j][i];
            matrix[len - 1 - j][i] = char;
        }
    }

    // 上下翻转
    for (var i = 0; i < len / 2; i++) {
        for (var j = 0; j < len; j++) {
            char = matrix[i][j];
            matrix[i][j] = matrix[len - i - 1][j];
            matrix[len - i - 1][j] = char;
        }
    }

    return matrix;
};