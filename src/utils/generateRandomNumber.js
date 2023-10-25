import { MissionUtils } from "@woowacourse/mission-utils";
import { BALL_SIZE } from "./constant"

// 임의의 정답을 생성해주는 함수
function generateRandomNumber() {
  const ANSWER = [];
  while(ANSWER.length < BALL_SIZE) {
    const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!ANSWER.includes(NUMBER)) {  
      ANSWER.push(NUMBER);
    }
  }

  return ANSWER.join('');
}

export default generateRandomNumber;