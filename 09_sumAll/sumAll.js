const sumAll = function(a, b) {
    let arr = [];
    // let argOne = BigInt(a);
    // let argTwo = BigInt(b);
    if (a < 0 || b < 0 ) {
        return 'ERROR'
    } else if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR'
    } else if (Number.isInteger(a) == false || Number.isInteger(b) == false) {
        return 'ERROR'
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            arr.push(i)
        }
        return arr.reduce((sum, a) => sum + a, 0)
    } else {
        for (let i = a; i <= b; i++) {
            arr.push(i)
        }
        return arr.reduce((sum, a) => sum + a, 0)
    }
};
// console.log(sumAll(1, 3))

// Do not edit below this line
module.exports = sumAll;
