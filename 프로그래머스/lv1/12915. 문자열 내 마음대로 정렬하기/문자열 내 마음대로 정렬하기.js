function solution(strings, n) {
  let a = strings.sort((a, b) =>
    a[n] === b[n] ? (a > b ? 1 : -1) : a[n] > b[n] ? 1 : -1
  );
  return a;
}