/*
    请完成函数：
    输入的二维数组表示 6 个矩形的边长，判断 6 个矩形能否构成长方体。
    二维数组的第一维长度为 6，表示 6 个矩形；第二维长度为 2，表示矩形的的长和宽。
    输入异常返回 false
 */

function isCuboid(rectangles) {
    // 判断输入值是否合法
    var legalParams = function (rectangles) {
        if (!(Array.isArray(rectangles))) {
            return false;
        }

        if (rectangles.length !== 6) {
            return false;
        }

        return rectangles.every(i => Array.isArray(i) && i.length === 2 && +i[0] && +i[1]);
    };

    // 计算面积
    var calcSquare = function (arr) {
        return Math.round(arr[0] * arr[1]);
    };

    // 图形归类：三维数组的第二维需是相同面积的图形
    var setSquareArr = function (arr, square, index = 0) {
        if (arr[index].length) {
            calcSquare(square) === calcSquare(arr[index][0]) && arr[index].push(square);
            calcSquare(square) !== calcSquare(arr[index][0]) && setSquareArr(arr, square, ++index);
        } else {
            arr[index].push(square);
        }
    };

    // 判断第二维度下的图形是否全等
    var sameShape = function (arr) {
        // 先取出一个图形的长和宽，再逐个图形比较
        var width = arr[0][0];
        var long = arr[0][1];
        return arr.every(i => (i[0] === width && i[1] === long) || (i[1] === width && i[0] === long));
    };

    if (!legalParams(rectangles)) {
        return false;
    }

    /*
    * 三维数组：
    * 第一维度表示不同的面积
    * 第二维度表示相同面积的图形
    * 第三维度表示图形的长和宽
    * */
    var squareArr = [];
    var squareType = Array.from(new Set(rectangles.map(i => calcSquare(i))));
    if (!(squareType.length < 4)) {
        return false;
    }

    // 判断正方体
    if (squareType.length === 1) {
        return rectangles.every(i => i[0] === i[1]);
    }

    squareType.forEach(() => squareArr.push([])); // 三维数组第一维度设置（面积归类）
    rectangles.forEach(i => setSquareArr(squareArr, i)); // 三维数组第二维度设置（图形归类）

    var isSameShape = squareArr.every(i => sameShape(i)); // 第一维度下每个图形是否全等
    var a, b, c;

    if (squareArr.length === 2) {
        // 取正方形的一条边和长方形的两条边
        if (squareArr[0].length === 2) {
            // 正方形处于第一维度
            a = squareArr[0][0][0];
            b = squareArr[1][0][0];
            c = squareArr[1][0][1];
        } else if (squareArr[0].length === 4) {
            // 正方形处于第二维度
            a = squareArr[1][0][0];
            b = squareArr[0][0][0];
            c = squareArr[0][0][1];
        }
        return !!a && !!b && !!c && isSameShape && (a === b || a === c);
    } else if (squareArr.length === 3) {
        // 第二维度下全是长方形
        var x1 = squareArr[0][0][0];
        var y1 = squareArr[0][0][1];

        var x2 = squareArr[1][0][0];
        var y2 = squareArr[1][0][1];

        var x3 = squareArr[2][0][0];
        var y3 = squareArr[2][0][1];

        var case1 = (x1 === x3) && ((y1 === y2 && x2 === y3) || (y2 === y3 && x2 === y1));
        var case2 = (x2 === x3) && ((y1 === y3 && x1 === y2) || (y1 === y2 && x1 === y3));
        var case3 = (x1 === x2) && ((y2 === y3 && x3 === y1) || (y1 === y3 && x3 === y2));

        return isSameShape && (case1 || case2 || case3);
    }

    return false;
}

var cub1 = [[4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4]]; // 正方体
var cub2 = [[3, 3], [3, 4], [3, 4], [3, 3], [3, 4], [3, 4]]; // 长方体（底面正方形）
var cub3 = [[7, 8], [6, 8], [7, 8], [6, 8], [7, 6], [7, 6]]; // 长方体

var cub4 = [[2, 8], [6, 3], [7, 8], [6, 8], [5, 6], [7, 6]]; // false
var cub5 = [[2, 6], [2, 6], [2, 6], [2, 6], [3, 4], [3, 4]]; // false
var cub6 = [[2, 3], [2, 3], [3, 4], [3, 4], [2, 5], [2, 5]]; // false
var cub7 = [[2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [1, 2]]; // false
var cub8 = [[4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [2, 8]]; // false
var cub9 = [[4, 6], [4, 6], [3, 8], [3, 8], [6, 6], [6, 6]]; // false
var cub10 = [[4, 6], [4, 6], [6, 4], [6, 8], [4, 6], [4, 6]]; // false

console.log(isCuboid(cub1));
console.log(isCuboid(cub2));
console.log(isCuboid(cub3));
console.log(isCuboid(cub4));
console.log(isCuboid(cub5));
console.log(isCuboid(cub6));
console.log(isCuboid(cub7));
console.log(isCuboid(cub8));
console.log(isCuboid(cub9));
console.log(isCuboid(cub10));