const leapYears = function(year) {
    // year % 4 == 0 => leap year
    // year % 100 == 0 => not leap year
    // year % 100 && 400 == 0 => leap year
    // a year is a leap year if it is divisible by 4
    // but not by 100, unless it is also divisible by 400. 
    if (year%4==0 && year%100==0 && year%400==0) return true;
    if (year%4==0 && year%100==0) return false;
    if (year%4==0 && year%100!==0) return true;
    else return false;
    
};

console.log(leapYears(700))

// Do not edit below this line
module.exports = leapYears;
