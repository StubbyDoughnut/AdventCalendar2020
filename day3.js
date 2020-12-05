//day 3

var fs = require("fs");
var lines = fs.readFileSync('./day3input.txt').toString().split('\r\n')

var tree = '#';
const line_length = 31;

var one_one = count_hits(1, 1);
var three_one = count_hits(3, 1);
var five_one = count_hits(5, 1);
var seven_one = count_hits(7, 1);
var one_two = count_hits(1, 2);

console.log(one_one, three_one, five_one, seven_one, one_two, 'product:', one_one * three_one * five_one * seven_one * one_two);

function count_hits(right, down){
  var hits = 0;
  var i;
  var x_pos = 0;
  for(i = 0; i < lines.length; i += down){
    if(is_hit(lines[i], x_pos)){
      hits++;
    };
    x_pos = ((x_pos + right) % line_length);
  }
  return hits;
}

function is_hit(str, x_pos){
  if (str.charAt(x_pos) == tree){
    return true;
  } else {
    return false;
  }
}
