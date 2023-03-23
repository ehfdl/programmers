function solution(n){
    let answer = String(n)
    answer = answer.split("")
    let ans = answer.map((a) => Number(a))
    let result = ans.reduce((a,b) => a+b);
    return result;
}