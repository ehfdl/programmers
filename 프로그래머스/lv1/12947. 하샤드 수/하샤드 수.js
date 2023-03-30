function solution(x) {
    return Number.isInteger(x/((x+"").split("").reduce((a,b) => (+a)+(+b))));
}