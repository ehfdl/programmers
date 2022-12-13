function solution(board) {
  const long = board.length;
  const arr = new Array(long);
  for (var i = 0; i < long + 2; i++) {
    arr[i] = new Array(long + 2).fill(0);
  }

  for (let i = 0; i <= long - 1; i++) {
    for (let j = 0; j <= long - 1; j++) {
      if (board[i][j] === 1) {
        for (let a = i; a <= i + 2; a++) {
          for (let b = j; b <= j + 2; b++) {
            arr[a][b] += 1;
          }
        }
      }
    }
  }

  arr.shift();
  arr.pop();
  arr.map((a) => a.shift());
  arr.map((a) => a.pop());

  let answer = arr
    .map((array) => array.reduce((num, zero) => num + (zero === 0), 0))
    .reduce((a, b) => (a += b));

  return answer;
}