function solution(s){
    let a = s.split("");
    let x = [];
    if(s[0] === ")"){
        return false
    }
    else{
    a.map((a)=> a === "(" ? x.push(a) : a === ")" ? x.pop() : a)
    
    return x.length === 0;
    }
 
}