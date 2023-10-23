import { Random } from "@woowacourse/mission-utils";
import { addRandomNumber } from "../utils/validity";

class Computer {

  // 임의의 정답을 생성해주는 함수
  generateRandomNumber() {
    const ANSWER = [];
    while(ANSWER.length < size) {
      addRandomNumber(ANSWER)
    }
    return ANSWER.join('');
  }

  // 임의의 정답 생성 시 각 자릿수의 값이 겹치지 않는지 확인해주는 함수
  addRandomNumber(answer) {
    const NUMBER = Random.pickNumberInRange(1, 9);
    if (!answer.includes(NUMBER)) {  
      answer.push(NUMBER);
    }
  };
}

export default Computer;