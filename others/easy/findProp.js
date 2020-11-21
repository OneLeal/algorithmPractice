// 取出深度对象中的某个属性
var obj = {
    x1: {
        y1: 1,
        y2: 2
    },

    x2: {
        y3: {
            name: 'xxx',
            time: '9:00 am'
        },
        y4: {
            name: 'xxx',
            time: '9:00 am'
        },
        y5: {
            name: 'xxx',
            time: '9:00 am'
        }
    },

    x3: {
        z1: {
            z3: 'xxx',
            z4: {
                z5: 'z5',
                z6: 'z6'
            }
        },
        z2 : {
            x8: 'x8',
            x9: {
                x: 11,
                y: 12,
                z: 13
            },
            x10: {
                x11: '11',
                x12: {
                    name: 'Jams',
                    age: '12',
                    sex: 1
                },
                x13: 13,
                x14: {
                    f1: 'f1',
                    f2: {
                        age: 25,
                        hobby: 'swimming'
                    }
                }
            }
        }
    },

    x4: {
        n1: {
            n3: {
                m1: 'm1',
                m2: 'm2',
                m3: {
                    k1: 'k1'
                }
            },
            n4: {
                l1: 'l1',
                l2: 'l2',
                l3: 'l3'
            }
        },
        n2: 12
    }
};
var findProp = function (tar, prop) {
    if (!prop || typeof prop !== 'string' || !(tar instanceof Object)) {
        return false;
    }
    var result = null;
    var range = function (tar, prop) {
        if (!(Object.keys(tar).includes(prop))) {
            for (var key in tar) {
                if (tar[key] instanceof Object) {
                    range(tar[key], prop);
                }
            }
        } else {
            result = tar[prop];
        }
    };
    range(tar, prop);
    return result;
};
console.log(findProp(obj, 'age'));