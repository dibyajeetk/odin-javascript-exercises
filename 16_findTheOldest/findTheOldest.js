const findTheOldest = function(peeps) {
    // input = arr ; output = Obj
    let arr = peeps;
    // find the age of each person and inject the age inside peeps
    for (let individual of arr) {
        let age = 0;
        // need to set a condition if there is no year of death
        if (individual.yearOfDeath === undefined) {
            const currentYear = new Date().getFullYear(); //current year
            age = currentYear - individual.yearOfBirth;
        } else {
            age = individual.yearOfDeath - individual.yearOfBirth;
        }
        individual.age = age;
    }; 

    return arr.reduce((oldest, individual) => oldest.age > individual.age ? oldest : individual)
};

// Do not edit below this line
module.exports = findTheOldest;
