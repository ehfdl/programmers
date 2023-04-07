function solution(a, b) {
    // let answer = 0;
    // for(i=0; i<a.length; i++){
    //     answer += a[i] * b[i]
    // }
    return a.reduce((x,_,i) => x += a[i] * b[i], 0);
}