function solution(n) {
    let number = n.toString(2).split("").filter(a => a === "1").length
    let x = 0;
    let count = 0;
    while(number !== count){
        x = n+1
        count = x.toString(2).split("").filter(a => a === "1").length
        n++
    }
    return x;
}