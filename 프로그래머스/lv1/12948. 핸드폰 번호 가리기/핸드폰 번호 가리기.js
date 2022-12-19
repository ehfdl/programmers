function solution(phone_number) {
  var ss = phone_number.length - 4;
  var n = new Array(ss).fill("*").join("");
  let a = phone_number.slice(-4);

  return n + a;
}