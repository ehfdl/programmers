function solution(dots) {
    var answer = [];
    let a = (dots[0][1]-dots[1][1]) / (dots[0][0]-dots[1][0]);
    let b = (dots[0][1]-dots[2][1]) / (dots[0][0]-dots[2][0]);
    let c = (dots[0][1]-dots[3][1]) / (dots[0][0]-dots[3][0]);
    let d = (dots[1][1]-dots[2][1]) / (dots[1][0]-dots[2][0]);
    let e = (dots[1][1]-dots[3][1]) / (dots[1][0]-dots[3][0]);
    let f = (dots[2][1]-dots[3][1]) / (dots[2][0]-dots[3][0]);
    
    answer = (a===f) ? 1 : (b===e) ? 1 : (c===d) ? 1 : 0
    
    
    return answer;
}