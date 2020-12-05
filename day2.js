//Day 2

var fs = require("fs");
var passwords = fs.readFileSync('./day2input.txt').toString().split('\r\n')

var count = 0;
var j;
for(j = 0; j < passwords.length; j++){
  var current = passwords[j];
  var hits = character_count(get_password(current), get_letter(current));
  if(hits >= get_lower_bound(current) && hits <= get_upper_bound(current)){
    count++;
  }
}

console.log(count);

function get_password(str){
  var password = '';
  var position_flag = 0;
  for(i = 0; i < str.length; i++){
    if (str.charAt(i) == ' '){
      position_flag++;
    }else if (position_flag >= 2){
      password += str.charAt(i);
    }
  }
  return password;
}

function get_letter(str){
  var letter = '';
  var position_flag = false;
  for(i = 0; i < str.length; i++){
    if (str.charAt(i) == ' '){
      position_flag = true;
    }else if (position_flag){
      return str.charAt(i);
    }
  }
}

function get_lower_bound(str){
  var lower_bound = '';
  for(i = 0; i < str.length; i++){
    if (str.charAt(i) == '-'){
      break;
    }
    lower_bound += str.charAt(i);
  }
  return parseInt(lower_bound);
}

function get_upper_bound(str){
  var upper_bound = '';
  var upper_flag = false;
  for(i = 0; i < str.length; i++){

    if (str.charAt(i) == '-'){
      upper_flag = true;
    }else if (upper_flag){
      if(str.charAt(i) == ' '){
        break;
      }
      upper_bound += str.charAt(i);
    }
  }
  return parseInt(upper_bound);
}

function character_count(str, letter){
  var count = 0;
  for(i = 0; i < str.length; i++){
    if (str.charAt(i) == letter){
      count++;
    }
  }
  return count;
}
