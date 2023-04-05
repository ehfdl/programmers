function solution(brown, yellow) {
    let x = brown / 2;
    let y = 0;
    const sum = brown + yellow;
    
    while(x > 0){
        if(sum % x === 0){
            y = sum / x;
            if((2*x + 2*(y-2)) === brown){
                break
            }
            else(
            x--
            )
        }
        else{
            x--
        }
    }

    
    return [x, y];
}