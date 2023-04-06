function solution(n) {
    let num = 2
    let answer = "수"
    while(num <= n){
        if(num%2===1){
            answer += "수"
            num++
        }
        else{
            answer+="박"
            num++
        }
    }
    return answer;
}