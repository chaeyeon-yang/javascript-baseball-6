import { BALL_SIZE } from "../utils/constant";
import { addRandomNumber } from "../utils/validity";

class Computer {
  constructor() {
    this.size = BALL_SIZE;
  }

  // 임의의 정답을 생성해주는 함수
  generateRandomNumber() {
    const ANSWER = [];
    while(ANSWER.length < size) {
      addRandomNumber(ANSWER)
    }
  }
}