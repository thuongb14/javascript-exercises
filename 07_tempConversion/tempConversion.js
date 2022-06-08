const ftoc = function() {

};

const ctof = function() {

};

function ftoc (temp) {
  let c = (temp - 32)/1.8;
  c = c.toFixed(1);
  console.log(c)
};

function ctof(temp) {
  let f = temp*1.8 + 32;
  f = f.toFixed(1);
  console.log(f)
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
