function solution(arr, divisor) {
    let answer = arr.filter((a) => a % divisor === 0);
    if(answer.length === 0){
        return [-1]
    }
    else{
        return answer.sort((a,b)=> a-b)
    }
}