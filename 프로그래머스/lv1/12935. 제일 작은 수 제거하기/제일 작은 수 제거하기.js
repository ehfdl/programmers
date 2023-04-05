function solution(arr) {
    if(arr.length === 0){
        return [-1]
    }
    else{
        if(arr[0] === 10){
            return [-1]
        }
        else{
            let num = arr[0];
            for(i=1;i<arr.length;i++){
                if(arr[i] < arr[i-1] && arr[i] < num){
                    num = arr[i]
                }
            }
    return arr.filter((a) => a !== num)
        }
    }
    
}