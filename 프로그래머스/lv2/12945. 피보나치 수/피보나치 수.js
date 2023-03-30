function solution(n) {
    let arr = [0,1];
    for(i=2; i<=n; i++){
        arr.push(BigInt(arr[i-1]) + BigInt(arr[i-2]))
    }
    return arr[n] % 1234567n
}