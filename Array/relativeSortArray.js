// LeetCode: 1122 数组的相对排序
var relativeSortArray = function(arr1, arr2) {
    var rest = [], tar = [], result = [];
    var findNum = function(num) {
        var index = tar.indexOf(num);
        if (index > -1) {
            result.push(tar[index]);
            tar.splice(index, 1);
            findNum(num);
        }
    };
    arr1.forEach(num => arr2.includes(num) ? tar.push(num) : rest.push(num));
    arr2.forEach(num => findNum(num));
    return result.concat(rest.sort((a, b) => a - b));
};

var arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6];
console.log(relativeSortArray(arr1, arr2));