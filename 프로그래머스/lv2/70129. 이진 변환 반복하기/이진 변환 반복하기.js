function solution(s) {
    let zero = 0;
    let count = 0;
    
    while(s.length !== 1){
        let fil = s.split("").filter(a => a === "1").join("");
        zero += s.length - fil.length;
        count++
        s = fil.length.toString(2)
    }
    
    return [count, zero];
}