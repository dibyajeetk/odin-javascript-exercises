const fibonacci = function(num) {
    if (num < 0) {
        return 'OOPS'
    } else {
        let a = 0;
        let b = 1;
        for (let i = 0; i <= num - 1; i++){
            let next = a + b;
            a = b;
            b = next;
        }
        return a
    }
};

// Do not edit below this line
module.exports = fibonacci;
