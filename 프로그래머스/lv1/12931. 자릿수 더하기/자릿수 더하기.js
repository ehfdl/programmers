function solution(n){
    let answer = String(n).split("").map((a) => Number(a)).reduce((a,b) => a+b);
    
    return answer;
}