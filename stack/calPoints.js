// leetCode: 682 棒球比赛

var calPoints = function (ops) {
    if (!(Array.isArray(ops))) {
        return 0;
    }

    var arr = [], beforeOne = 1, beforeTwo = 2;
    for (var i = 0; i < ops.length; i++) {
        var len = arr.length;
        switch (ops[i]) {
            case 'C':
                arr.pop();
                break;
            case 'D':
                arr[len - beforeOne] && (arr[len] = arr[len - beforeOne] * 2);
                break;
            case '+':
                arr[len - beforeOne] && arr[len - beforeTwo] && (arr[len] = arr[len - beforeOne] + arr[len - beforeTwo]);
                break;
            default:
                arr.push(+ops[i]);
                break;
        }
    }

    console.log(arr);

    return arr.reduce((calc, score) => {
        return calc + score;
    }, 0);
};

var ops1 = ["5","2","C","D","+"];
var ops2 = ["5","-2","4","C","D","9","+","+"];
console.log(calPoints(ops1));
console.log(calPoints(ops2));