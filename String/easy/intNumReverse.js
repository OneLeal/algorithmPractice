// Leecode：7. 整数反转
var reverse = function(x) {
    var bool = x > 0;
    var str = (Math.abs(x) + '').split('').reverse().join('');
    !bool && (str = 0 - str);
    return (+str > Math.pow(2, 31) - 1 || +str < 0 - Math.pow(2, 31)) ? 0 : +str;
};