// LeetCode：29. 两数相除

var divide = function(dividend, divisor) {
    if (divisor === 0) return null;

    // 先判断商的正负
    var flag = 1, calc = 0;
    var limitNegative = -Math.pow(2, 31), limitPositive = Math.pow(2, 31) - 1;
    if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) flag = 1;
    else flag = 0;

    var divid = Math.abs(dividend), divis = Math.abs(divisor);  // 取绝对值进行计算

    // 除数为 1 时，返回被除数本身
    if (divis === 1) {
        return flag ?
            (Math.abs(dividend) > limitPositive ? limitPositive : Math.abs(dividend)) :
            (0 - Math.abs(dividend) < limitNegative ? limitNegative : 0 - Math.abs(dividend));
    }

    while (divid >= 0) {
        divid -= divis;
        divid >= 0 && calc++;
    }
    calc = flag ? calc : 0 - calc;
    return calc > 0 ?
        (calc > limitPositive ? limitPositive : calc) :
        (calc < limitNegative ? limitNegative : calc);
};