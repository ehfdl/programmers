function solution(n) {
    let num = 3
    let answer = [0n,1n,2n]
    if(n===1){
        return 1
    }
    else if(n===2){
        return 2
    }
    else{
    while(n>=num){
            answer[0] = answer[1]+answer[2]
            answer[1] = answer[2]
            answer[2] = answer[0]
            num++
        }
    }
    return answer[0n] % 1234567n
}