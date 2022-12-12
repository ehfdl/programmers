function solution(quiz) {
  var answer = [];
  answer = quiz.map((quiz) => {
    if (quiz.split(" = ")[0].includes(" - ")) {
      let a = String(
        quiz.split(" = ")[0].split(" - ").map(Number)[0] -
          quiz.split(" = ")[0].split(" - ").map(Number)[1]
      );
      let b = quiz.split(" = ")[1];
      return a === b ? "O" : "X";
    } else if (quiz.split(" = ")[0].includes("+")) {
      let a = String(
        quiz.split(" = ")[0].split(" + ").map(Number)[0] +
          quiz.split(" = ")[0].split(" + ").map(Number)[1]
      );
      let b = quiz.split(" = ")[1];
      return a === b ? "O" : "X";
    }
  });

  return answer;
}