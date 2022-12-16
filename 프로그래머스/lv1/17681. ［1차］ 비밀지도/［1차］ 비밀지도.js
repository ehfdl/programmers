function solution(n, arr1, arr2) {

    let a = arr1.map((a) => a.toString(2).padStart(n,[0]).split(''));
    let b = arr2.map((b) => b.toString(2).padStart(n,[0]).split(''));
    for (let i = 0; i <= n - 1; i++) {
        for (let j = 0; j <= n - 1; j++) {
           a[i][j] =  a[i][j] + b[i][j]
        }
    }
    let answer = a.map(a => a.map(b =>(b==='00' ? ' ' : '#')).join(''))

    return answer;
}