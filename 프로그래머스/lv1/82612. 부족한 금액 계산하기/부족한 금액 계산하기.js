function solution(price, money, count) {
    var answer = 0;
    while (count>0){
        answer += count*price
        count--
    }

    return answer - money >= 0 ? answer-money : 0;
}