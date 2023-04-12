function solution(k, t) {
    let count = 0
    let total = 0
    let arr = []
    t.forEach((a)=> (arr[a] = (arr[a] || 0) + 1))
    arr.sort((a,b)=>b-a)
    while(k>total){
        total += arr[count]
        count++
    }
    
    return count;
}