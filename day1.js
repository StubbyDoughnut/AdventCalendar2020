//Day 1

var fs = require("fs");
var numbers = fs.readFileSync('./day1input.txt').toString().split('\r\n');

var i;
for (i = 0; i < numbers.length; i++){
  var current = parseInt(numbers[i]);
  var j;
  for (j = i; j < numbers.length; j++){
    var next = parseInt(numbers[j]);
    if(current + next == 2020){
      console.log(current, next, current * next);
    }
  }
}
