/*
    请完成函数：
    已知 C/H/O/N 4种原子的质量分别为 12/1/16/14，输入参数为分子式，请计算分子质量。
    例：输入 H2O，返回 18；输入 CO2，返回 44；输入 HC11N2，返回 161
    输入异常数据返回 0
 */

function calcMolecularWeight(str) {
    if (typeof str !== 'string' || str === '') {
        return 0;
    }

    var mapWeight = {
        C: [12, 0],
        H: [1, 0],
        O: [16, 0],
        N: [14, 0]
    };

    var result = 0, el = null, num = '';
    for (var i = 0; i < str.length; i++) {
        // 当前值是元素
        if (isNaN(str[i])) {
            // 若 num 和 el 有值，则累加
            if (num && el) {
                mapWeight[el][1] += +num;
                num = '';
            } else {
                // 第一次 el 为 null
                if (el) {
                    mapWeight[el][1] += 1;
                }
            }

            el = str[i]; // 记录当前元素
        } else {
            num += str[i];
        }

        // 处理最后一次循环
        if (i === str.length - 1) {
            // 最后的值是元素
            if (isNaN(str[i])) {
                mapWeight[el][1] += 1;
            } else {
                mapWeight[el][1] += +num;
            }
        }
    }

    for (var key in mapWeight) {
        result += mapWeight[key][0] * mapWeight[key][1];
    }

    console.log(mapWeight);
    return result;
}

var co2 = 'CO2';
var h2o = 'H2O';
var no2 = 'NO2';
var hc11n2 = 'HC11N2';

console.log(calcMolecularWeight(co2));
console.log(calcMolecularWeight(h2o));
console.log(calcMolecularWeight(no2));
console.log(calcMolecularWeight(hc11n2));

/*
    请完成函数：
    输入两个字符串 s 和 t，判断 t 是否可以通过删除若干个字符得到 s。
    例：'abcsfs' 可删除部分字符得到 'bcss'
 */

function isInsideStr(s, t) {
    if (t === '' || typeof s !== 'string' || typeof t !== 'string' || s.length > t.length) {
        return false;
    }

    if (s === '') {
        return true;
    }

    var index = -1, bool = true;
    for (var i = 0; i < s.length; i++) {
        bool = findItem(s[i]);
        if (!bool) {
            break;
        }
    }

    function findItem(item, from = 0) {
        var itemIndex = t.indexOf(item, from);

        if (itemIndex === -1) {
            return false;
        }

        if (itemIndex <= index) {
            return findItem(item, itemIndex + 1);
        }

        index = itemIndex;
        return true;
    }

    return bool;
}

console.log(isInsideStr('bcss', 'abcsfs')); // true
console.log(isInsideStr('bcss', 'accsbcssf')); // true
console.log(isInsideStr('bcss', 'asbcsbcf')); // false
console.log(isInsideStr('bcss', 'babsfcs')); // false
console.log(isInsideStr('bcss', 'bscasbcsf')); // true
console.log(isInsideStr('bsssc', 'bssckik')); // false
console.log(isInsideStr('bsssc', 'csbssbsc')); // true
console.log(isInsideStr('ssbsssc', 'scssbsbscs')); // false
console.log(isInsideStr('ssbscsscccc', 'cscssbsbscscsccscc')); // true

/*
    请完成函数：
    输入的二维数组表示 6 个矩形的边长，判断 6 个矩形能否构成长方体。
    二维数组的第一维长度为 6，表示 6 个矩形；第二维长度为 2，表示矩形的的长和宽。
    输入异常返回 false
 */

function isCuboid(rectangles) {
    return false;
}