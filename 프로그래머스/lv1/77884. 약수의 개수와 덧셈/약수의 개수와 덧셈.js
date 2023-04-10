function solution(left, right) {
    let answer = 0
    for(i=left; i<=right; i++){
        let count = 0;
        for(j=1; j<=i; j++){
            if(i%j === 0){
                count++
            }
        }
        if(count % 2 === 0){
            answer += i
        }
        else if(count % 2 === 1){
            answer -=i
        }
    }
    return answer;
}