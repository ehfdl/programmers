function solution(lines) {
  // 입력값을 나열하기 > [0,4] => [0,1,2,3,4]
  var a = [...Array(lines[0][1] - lines[0][0] + 1)].map(
    (_, a) => a + lines[0][0]
  );
  var b = [...Array(lines[1][1] - lines[1][0] + 1)].map(
    (_, a) => a + lines[1][0]
  );
  var c = [...Array(lines[2][1] - lines[2][0] + 1)].map(
    (_, a) => a + lines[2][0]
  );

  // 교집합 하기 a =[0,2] , b=[1,3] => a_list = [1,2]
  let a_list = a.filter((a) => b.includes(a));
  let b_list = a.filter((a) => c.includes(a));
  let c_list = b.filter((b) => c.includes(b));

  //교집합들을 totla 에 쭉 나열,
  //   array 에 값을 index로 주기 위한 배열 생성.
  let total = [...a_list, ...b_list, ...c_list];
  let array = new Array(201).fill(-1);

  // -값도 있기때문에 +100해주기. 어치피 연속되는 모습은 같기 때문에 상관없다.
  total = total.map((a) => a + 100);

  //   index(값) 의 위치에 값이 있다면 +1 함.
  for (let i = 0; i <= total.length - 1; i++) {
    array[total[i]] += 1;
  }

  //   0, 1 값은 없거나 한번만 나왔기 때문에 겹치치 않음 제외!
  //  제외 한 후 3배열 모두 겹친 경우의 2인 값의 인덱스 길이 뽑아내고,
  //  2배열만 겹친 경우의  -1 한 후에 1인 인덱스 길이 뽑아냄
  let ans_2 = array.filter((a) => (a !== -1) & (a !== 0));
  let min_2 = ans_2.length > 0 ? ans_2.length - 1 : (ans_2.length = 0);

  let ans_1 = ans_2.map((a) => a - 1);
  let min_1 = ans_1.length > 0 ? ans_1.length - 1 : (ans_1.length = 0);

  //   사이의 교집합이 없다면 answer1,2,3 의 합으로 끝,  교집합이 있다면 각 길이만큼 빼주기!
  let answer1 = a_list.length > 0 ? a_list.length - 1 : (a_list.length = 0);
  let answer2 = b_list.length > 0 ? b_list.length - 1 : (b_list.length = 0);
  let answer3 = c_list.length > 0 ? c_list.length - 1 : (c_list.length = 0);

  let answer = answer1 + answer2 + answer3 - min_2 - min_1;

  return answer;
}