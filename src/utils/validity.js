import { Random } from '@woowacourse/mission-utils';

// 임의의 정답 생성 시 각 자릿수의 값이 겹치지 않는지 확인해주는 함수
function addRandomNumber(answer) {
  const number = Random.pickNumberInRange(1, 9);
  if (!answer.includes(number)) {  
    answer.push(number);
  }
};

export { addRandomNumber }