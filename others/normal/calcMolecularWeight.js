/*
    请完成函数：
    已知 C/H/O/N 4种原子的质量分别为 12/1/16/14，输入参数为分子式，请计算分子质量。
    例：输入 H2O，返回 18；输入 CO2，返回 44；输入 HC11N2，返回 161
    输入异常数据返回 0
 */

var mapEl = {
    C: [12, 0],
    N: [14, 0],
    H: [1, 0],
    O: [16, 0],
    S: [32, 0],
    K: [39, 0],
    Ca: [40, 0],
    Na: [23, 0],
    Mg: [24, 0],
    Cu: [64, 0],
    Fe: [56, 0],
    Cl: [35, 0]
};

var calcMolecularWeight = function (str, mapEl) {
    var obj = {};
    for (var key in mapEl) {
        obj[key] = [].concat(mapEl[key]);   // 深拷贝
    }

    var temp = str[0], num = '', pat = /[a-z]/;
    for (var i = 1; i < str.length + 1; i++) {
        if (isNaN(str[i])) {              // 当前元素是原子
            if (pat.test(str[i]) && str[i]) {       // 是否为小写字母
                temp += str[i];
            } else {
                if (num) {
                    obj[temp][1] += +num;    // 计数累加
                    num = '';                // 计数清零
                } else {
                    obj[temp][1]++;
                }
                temp = str[i];               // 记录当前元素
            }
        } else {                        // 当前元素是数字
            num += str[i];
        }
    }

    return Object.values(obj).reduce((calc, item) => {
        return calc + (item[0] * item[1]);
    }, 0);
};

var el1 = 'CO2';
var el2 = 'H2O';
var el3 = 'NO2';
var el4 = 'CH4';
var el5 = 'NaCl';
var el6 = 'NaCO3';
var el7 = 'CaCO3';
var el8 = 'CuSO4';
var el9 = 'FeO2H2';
var el10 = 'C2H6O';

console.log(calcMolecularWeight(el1, mapEl));
console.log(calcMolecularWeight(el2, mapEl));
console.log(calcMolecularWeight(el3, mapEl));
console.log(calcMolecularWeight(el4, mapEl));
console.log(calcMolecularWeight(el5, mapEl));
console.log(calcMolecularWeight(el6, mapEl));
console.log(calcMolecularWeight(el7, mapEl));
console.log(calcMolecularWeight(el8, mapEl));
console.log(calcMolecularWeight(el9, mapEl));
console.log(calcMolecularWeight(el10, mapEl));