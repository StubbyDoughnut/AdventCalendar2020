//day 3

var fs = require("fs");
var lines = fs.readFileSync('./day3input.txt').toString().split('\r\n')

var x_pos = 0;
var tree = '#';
var slope = 3;
var hits = 0;
const line_length = 31;

var i;
for(i = 0; i < lines.length; i++){
  if(is_hit(lines[i], x_pos)){
    hits++;
  };
  x_pos = ((x_pos + slope) % 31);
}

console.log(hits);

function is_hit(str, x_pos){
  if (str.charAt(x_pos) == tree){
    return true;
  } else {
    return false;
  }
}
