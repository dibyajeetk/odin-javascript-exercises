const reverseString = function(str) {
    let length = str.length

    let storeCharacters = [];

    for (let i = 0; i < length; i++) {
        storeCharacters.push(str[i])
    }
    return storeCharacters.reverse().join('')
};

// Do not edit below this line
module.exports = reverseString;
