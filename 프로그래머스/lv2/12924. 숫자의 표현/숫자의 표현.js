function solution(n) {
    var answer = 0;
    
    for(i=1; i<=n; i++){
        let num = 0
        let x = i;
        while(num < n){
            num += x;
            x++;
        }
        if(n===num){
            answer +=1;
        }
    }
    
    return answer;
}