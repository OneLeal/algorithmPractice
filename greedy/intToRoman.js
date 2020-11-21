// LeetCode：12. 整数转罗马数字

// 方法一：数学逻辑推导，按位拆分
var intToRoman = function(num) {
    var str = num + '';
    var intMap = {
        tho: [undefined, ''],
        hun: [undefined, ''],
        ten: [undefined, ''],
        bit: [undefined, '']
    };

    switch (str.length) {
        case 1: intMap['bit'][0] = str[0]; break;
        case 2: intMap['bit'][0] = str[1]; intMap['ten'][0] = str[0]; break;
        case 3: intMap['bit'][0] = str[2]; intMap['ten'][0] = str[1]; intMap['hun'][0] = str[0]; break;
        case 4: intMap['bit'][0] = str[3]; intMap['ten'][0] = str[2]; intMap['hun'][0] = str[1]; intMap['tho'][0] = str[0]; break;
        default: break;
    }

    var tho = intMap['tho'][0];
    var hun = intMap['hun'][0];
    var ten = intMap['ten'][0];
    var bit = intMap['bit'][0];

    if (tho) {
        tho = +tho;
        for (var i = 0; i < tho; i++) {
            intMap['tho'][1] += 'M';
        }
    }

    if (hun) {
        hun = +hun;
        if (hun === 4) {
            intMap['hun'][1] += 'CD';
        } else if (hun === 9) {
            intMap['hun'][1] += 'CM';
        } else {
            if (hun > 5) {
                var temp = 'D';
                for (var i = 0; i < hun - 5; i++) {
                    temp += 'C';
                }
                intMap['hun'][1] += temp;
            } else if (hun === 5) {
                intMap['hun'][1] += 'D';
            } else {
                for (var i = 0; i < hun; i++) {
                    intMap['hun'][1] += 'C';
                }
            }
        }
    }

    if (ten) {
        ten = +ten;
        if (ten === 4) {
            intMap['ten'][1] += 'XL';
        } else if (ten === 9) {
            intMap['ten'][1] += 'XC';
        } else {
            if (ten > 5) {
                var temp = 'L';
                for (var i = 0; i < ten - 5; i++) {
                    temp += 'X';
                }
                intMap['ten'][1] += temp;
            } else if (ten === 5) {
                intMap['ten'][1] += 'L';
            } else {
                for (var i = 0; i < ten; i++) {
                    intMap['ten'][1] += 'X';
                }
            }
        }
    }

    if (bit) {
        bit = +bit;
        if (bit === 4) {
            intMap['bit'][1] += 'IV';
        } else if (bit === 9) {
            intMap['bit'][1] += 'IX';
        } else {
            if (bit > 5) {
                var temp = 'V';
                for (var i = 0; i < bit - 5; i++) {
                    temp += 'I';
                }
                intMap['bit'][1] += temp;
            } else if (bit === 5) {
                intMap['bit'][1] += 'V';
            } else {
                for (var i = 0; i < bit; i++) {
                    intMap['bit'][1] += 'I';
                }
            }
        }
    }

    var result = '';
    for (var key in intMap) {
        intMap[key][1] && (result += intMap[key][1]);
    }
    return result;
};

// 方法二：硬编码，求模取余
var intToRoman1 = function(num) {
    var Q = ["", "M", "MM", "MMM"];
    var B = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var S = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var G = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    return Q[Math.floor(num / 1000)]
        + B[Math.floor((num % 1000) / 100)]
        + S[Math.floor((num % 100) / 10)]
        + G[num % 10];
};

// 方法三：贪心算法，优先取大
var intToRoman2 = function(num) {
    var intMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var keys = Object.keys(intMap);
    var values = Object.values(intMap);
    var result = '';
    for (var i = 0; i < keys.length; i++) {
        while (num >= values[i]) {
            num -= values[i];
            result += keys[i];
        }
    }
    return result;
};

console.log(intToRoman(1994));
console.log(intToRoman(58));
console.log(intToRoman(9));
console.log(intToRoman(4));
console.log(intToRoman(3));

console.log(intToRoman1(1994));
console.log(intToRoman1(58));
console.log(intToRoman1(9));
console.log(intToRoman1(4));
console.log(intToRoman1(3));

console.log(intToRoman2(1994));
console.log(intToRoman2(58));
console.log(intToRoman2(9));
console.log(intToRoman2(4));
console.log(intToRoman2(3));