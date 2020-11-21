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