function solution(lines) {
  var a = [...Array(lines[0][1] - lines[0][0] + 1)].map(
    (_, a) => a + lines[0][0]
  );
  var b = [...Array(lines[1][1] - lines[1][0] + 1)].map(
    (_, a) => a + lines[1][0]
  );
  var c = [...Array(lines[2][1] - lines[2][0] + 1)].map(
    (_, a) => a + lines[2][0]
  );
  let a_list = a.filter((a) => b.includes(a));
  let b_list = a.filter((a) => c.includes(a));
  let c_list = b.filter((b) => c.includes(b));

  let total = [...a_list, ...b_list, ...c_list];
  let array = new Array(201).fill(-1);

  total = total.map((a) => a + 100);

  for (let i = 0; i <= total.length - 1; i++) {
    array[total[i]] += 1;
  }
  let ans_2 = array.filter((a) => (a !== -1) & (a !== 0));
  let min_2 = ans_2.length > 0 ? ans_2.length - 1 : (ans_2.length = 0);

  let ans_1 = ans_2.map((a) => a - 1);
  let min_1 = ans_1.length > 0 ? ans_1.length - 1 : (ans_1.length = 0);

  let answer1 = a_list.length > 0 ? a_list.length - 1 : (a_list.length = 0);
  let answer2 = b_list.length > 0 ? b_list.length - 1 : (b_list.length = 0);
  let answer3 = c_list.length > 0 ? c_list.length - 1 : (c_list.length = 0);

  let answer = answer1 + answer2 + answer3 - min_2 - min_1;


  return answer;
}