function solution(n, words) {
    let answer = [words[0]];
    let index = 0;
    for(i=1;i<words.length;i++){
       if(answer.includes(words[i])){
           index = i
           break;
       }
        else{
            let a = answer[answer.length-1].split("").pop();
            let b = words[i].split("").shift();
            if(a === b){
                answer.push(words[i])
            }
            else{
                index = i
                break;
            }
        }
    }

    return index === 0 ? [0,0] : [((index+1) % n) === 0 ? n : (index+1) % n, Math.ceil((index+1)/n)];
}