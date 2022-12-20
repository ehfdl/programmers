function solution(a, b) {
    var answer = "";
    if (a > b){
        answer = Array(Math.abs(a-b+1)).fill().map((x,y)=>y+b).reduce((a,b)=> a+=b);
    }
    else if(a<b){
        answer = Array(Math.abs(b-a+1)).fill().map((x,y)=>y+a).reduce((a,b)=> a+=b);;
    }
    else{
        answer = a
    }
    return answer;
}