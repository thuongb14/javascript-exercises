const fibonacci = function(index) {
    let array = [1, 1];
    if (index < 0) {
        return "OOPS"
    } else {
        for (i = 0; i <= index; i++) {
            sum = array[array.length - 2] + array[array.length - 1];
            array.push(sum);
        }
        return array[index - 1];
    };
};


// Do not edit below this line
module.exports = fibonacci;
