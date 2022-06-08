const leapYears = function() {
  
function leapYear(year) {
  if (year % 4 == 0 && year % 400 == 0) {
  console.log('True');
  } else if (year % 100 != 0) {
    console.log('False');
  }
}

leapYear(1994)
};

// Do not edit below this line
module.exports = leapYears;
