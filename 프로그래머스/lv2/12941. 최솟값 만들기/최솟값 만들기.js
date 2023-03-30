function solution(A,B){
    let a = A.sort((a,b) => a-b);
    let b = B.sort((a,b) => b-a);
    let c = 0;
    for(i=0; i<a.length; i++){
        c += a[i] * b[i]
    }
    

    return c;
}