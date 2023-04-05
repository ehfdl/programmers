function solution(people, limit) {
    var answer = people.sort((a,b) =>b-a)
    let result = 0
    let start = 0
    let end = answer.length-1
    
    while(start < end){
       if(answer[start] + answer[end] <= limit){
            end-=1
        }
         start += 1
        result += 1
    }
    if(start === end){
        result +=1
    }
    
    return result;
}