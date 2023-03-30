function solution(s) {
    let c = s.toLowerCase().split(" ")
    for(i=0; i<c.length; i++){
        if(c[i] !== ""){
        let a = c[i].split("");
        let b = a.shift();
        let d = a.unshift(b.toUpperCase());
        c[i] = a.join("")
        }
    }
    return c.join(" ");
}