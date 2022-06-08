function sumAll(num1, num2) {
  let sum = 0;
  if (typeof num1 != Number || typeof num2 != Number) {
    console.log('Error')
  } else {
    if (num1 < 0 || num2 < 0) {
      console.log('Error')
    } else {
      
    if (num1 < num2) {
      for (i = num1; i <= num2; i++) {
      sum = sum + i;
      }
    } else if (num1 > num2) {
        for (i = num1; i >= num2; i--) {
        sum = sum + i;
        }
      }
      console.log(sum)
    }
  }
}
sumAll(10, [90, 1])
};

// Do not edit below this line
module.exports = sumAll;
