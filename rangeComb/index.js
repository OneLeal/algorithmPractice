/*
* 排列组合 (Arrangement Combination) （分类加法与分步乘法）
* 1. 有 4 支足球队进行单循环赛
* 1.1 列出所有比赛场次的上场方；
* 1.2 计算所有冠亚军出现的情况有多少种？
*
* 2. 由 0、1、2、3、4、5 可以组合成多少个没有重复数字的五位奇数？
*
* 3. 旅行社有豪华游 5 种，普通游 4 种，某公司欲从中选择 4 种，
* 其中至少有豪华游和普通游各一种的选择有多少种？
* */

var factorial = function (number) {
    if (typeof number !== 'number') {
        return 0;
    }

    if (number === 0) {
        return 1;
    }

    var sum = 1;

    for (var i = 1; i <= number; i++) {
        sum *= i;
    }

    return sum;
}; // 计算阶乘
var arrangement = function (m, n) {
    var molecular = factorial(n); // 分子
    var denominator = factorial(n - m); // 分母
    return molecular / denominator;
}; // 计算排列
var combination = function (m, n) {
    var molecular = arrangement(m, n); // 分子
    var denominator = arrangement(m, m); // 分母
    return molecular / denominator;
}; // 计算组合

// -------------------- 题解 1 ------------------

// 数学计算：
var count = combination(2, 4); // 1.1 答案
var champion = arrangement(2, 4); // 1.2 答案

// 逻辑运算：
var team = ['甲', '乙', '丙', '丁'];
var competition = function (team, flag = 0) {
    var result = []; // 保存结果

    // 排列与组合的不同：排列有序，组合无序
    var isExist = function (tar, arr) {
        return arr.some(item => tar.includes(item[0]) && tar.includes(item[1]));
    };

    // 递归排列
    var recursion = function (tar, arr) {
        if (tar.length === 2) {
            !flag && result.push(tar); // 保存冠亚军的所有排列
            flag && !isExist(tar, result) && result.push(tar); // 过滤排列即可得到比赛场上双方的组合
        } else {
            arr.forEach((item, index) => {
                var temp = [].concat(arr); // 拷贝一份数据
                temp.splice(index, 1); // 先取出一个元素
                recursion(tar.concat(item), temp); // 递归进行下一次的排列组合
            });
        }
    };

    recursion([], team);
    return result;
};

var award = competition(team); // 1.1 所有比赛场次的上场方
var race = competition(team, 1); // 1.2 所有冠亚军出现的情况

console.log(count, champion);
console.log(race, award, arrangement(2, 5));
//-----------------------------------------------

// -------------------- 题解 2 ------------------

// 数学计算：
// 末位 [1, 3, 5] 组合 * 首位不为 0 并减去末位 * 中间三位全排列 （分步乘法）
var num = combination(1, 3) * combination(1, 4) * arrangement(3, 4);

// 逻辑运算：
var arr = [0, 1, 2, 3, 4, 5];
var fiveBitNumber = function(arr) {
    var result = [];
    var endBit = arr.filter(num => num % 2 === 1); // 枚举出所有末位
    var headBit = arr.filter(num => num !== 0);    // 枚举出所有首位
    var mid = [];

    // 中间三位递归全排列
    var cycle = function (tar, arr) {
        if (tar.length === 3) {
            mid.push(tar);
        } else {
            arr.forEach((num, index) => {
                var temp = [].concat(arr);
                temp.splice(index, 1);
                cycle(tar.concat(num), temp);
            });
        }
    };

    cycle([], arr);

    // 根据分步乘法原理开始循环并筛选合法值
    endBit.forEach(end => {
        headBit.forEach(head => {
            mid.forEach(item => {
                if (!item.includes(end) && !item.includes(head) && end !== head) {
                    result.push(head + item.join('') + end);
                }
            });
        });
    });

    return result;
};

console.log(num);
console.log(fiveBitNumber(arr).length);
//-----------------------------------------------

// -------------------- 题解 3 ------------------

// 数学计算：
// 分步乘法
var choose1 = combination(3, 5) * combination(1, 4); // 豪华游 3 种，普通游 1 种
var choose2 = combination(2, 5) * combination(2, 4); // 豪华游 2 种，普通游 2 种
var choose3 = combination(1, 5) * combination(3, 4); // 豪华游 1 种，普通游 3 种

// 分类加法
var choose4 = choose1 + choose2 + choose3;

// 条件取反：至少有豪华游和普通游各一种 → 无豪华游/普通游
var combAll = combination(4, 9);      // 所有组合
var luxuryAll = combination(4, 5);    // 全豪华
var generalAll = combination(4, 4);   // 全普通
var choose5 = combAll - luxuryAll - generalAll;

// 逻辑运算
var plan = {
    general: ['普通1', '普通2', '普通3', '普通4'],
    luxury: ['豪华1', '豪华2', '豪华3', '豪华4', '豪华5']
};

var tour1 = function(plan) {
    var general = plan['general'];
    var luxury = plan['luxury'];
    var planGroup = [];
    var result = [];

    // 有序变无序，排列变组合
    var isExist = function (tar, arr) {
        return arr.some(item => tar.every(i => item.includes(i)));
    };

    // 递归排列
    var range = function(tar, arr, num) {
        if (tar.length === num) {
            !isExist(tar, planGroup) && planGroup.push(tar);
        } else {
            arr.forEach((item, index) => {
                var temp = [].concat(arr);
                temp.splice(index, 1);
                range(tar.concat(item), temp, num);
            });
        }
    };

    // 普通游 1 种 + 豪华游 3 种
    range([], luxury, 3); // 豪华游组合

    // 分步乘法
    general.forEach(item => {
        planGroup.forEach(i => {
            result.push(item + i.join(''));
        });
    });
    planGroup = [];

    // 普通游 2 种 + 豪华游 2 种
    range([], general, 2);
    var generalPlan = planGroup;
    planGroup = [];

    range([], luxury, 2);
    var luxuryPlan = planGroup;
    planGroup = [];

    // 分步乘法
    generalPlan.forEach(item => {
        luxuryPlan.forEach(i => {
            result.push(item.join('') + i.join(''));
        });
    });

    // 普通游 3 种 + 豪华游 1 种
    range([], general, 3); // 普通游组合
    // 分步乘法
    luxury.forEach(item => {
        planGroup.forEach(i => {
            result.push(i.join('') + item);
        });
    });
    planGroup = [];

    return result;
}; // 分步乘法 + 分类加法

var tour2 = function(plan) {
    var general = plan['general'];
    var luxury = plan['luxury'];
    var planGroup = [];
    var result = [];

    var isExist= function (tar, arr) {
        return arr.some(item => tar.every(i => item.includes(i)));
    };

    var range = function (tar, arr, num) {
        if (tar.length === num) {
            !isExist(tar, planGroup) && planGroup.push(tar);
        } else {
            arr.forEach((item, index) => {
                var temp = [].concat(arr);
                temp.splice(index, 1);
                range(tar.concat(item), temp, num);
            });
        }
    };

    // 所有组合
    range([], [].concat(general, luxury), 4);
    var totalPlan = planGroup.map(item => item.join(''));
    planGroup = [];

    // 全豪华组合
    range([], luxury, 4);
    var luxuryPlan = planGroup.map(item => item.join(''));
    planGroup = [];

    // 全普通组合
    range([], general, 4);
    var generalPlan = planGroup.map(item => item.join(''));
    planGroup = [];

    // 三者相减
    totalPlan.forEach(item => {
        !generalPlan.includes(item) && !luxuryPlan.includes(item) && result.push(item);
    });

    return result;
}; // 条件取反

console.log(choose4, choose5, tour1(plan).length, tour2(plan).length);
//-----------------------------------------------