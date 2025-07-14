const palindromes = function (string) {
    let text = string
        .replace(/[!,.]/g, "")
        .toLowerCase()
        .split(" ")
        .join("");
    let textReversed = text.split("").reverse().join("")
    console.log(text, textReversed);
    return text === textReversed ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
