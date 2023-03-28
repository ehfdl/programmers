function solution(s){
    let a = 0;
    let b = 0
    var answer = s.toLowerCase().split("").map(c => c === "p" ? a += 1 : c === "y" ? b+=1 : c)
    

    return a === b;
}