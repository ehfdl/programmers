function solution(s) {
    var a = Number(s)
    let answer = String(a)
    if (s.length === 4 | s.length === 6){
        if(answer !== 'NaN' & !s.includes('e')){
            return true
        }
        else{
            return false
        }
        }
    else{
    return false;
}
}
