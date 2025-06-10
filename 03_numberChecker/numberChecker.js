
function numberChecker(number) {

  // method one
  // if (number === 1000) {
  //   return true;
  // }
  // else if (number === 10) {
  //   return true;
  // }
  // else {
  //   return false;
  // }

  //  method two
  if (number === 1000 || number === 10) {
    return true;
  }
  else {
    return false;
  }

}

// Do not edit below this line
module.exports = numberChecker;
