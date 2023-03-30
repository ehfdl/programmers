function solution(s) {
    var answer = s.split(" ").sort((a,b) => (+a)-(+b))
    return answer.shift() + " " + answer.pop();
}