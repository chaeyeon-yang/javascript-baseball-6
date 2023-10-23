import { BALL_SIZE } from '../utils/constant'

class Pitching {

  #computerBall
  constructor(randomNumber) {
    this.#computerBall = randomNumber;
  }

  // 스트라이크 개수를 반환하는 함수
  countStrike(userBall) {
    const STRIKE_COUNT = 0;
    for(let i = 0; i < BALL_SIZE; i++) {
      if (userBall[i] === this.#computerBall[i]) {
        STRIKE_COUNT += 1;
      }
    }
    return STRIKE_COUNT;
  }

  // 볼 개수를 반환하는 함수
  countBall(userBall) {
    const BALL_COUNT = 0;
    for (let i = 0; i < BALL_SIZE; i++) {
      if (this.#computerBall.includes(userBall[i])) {
        BALL_COUNT += 1;
    }
    return BALL_COUNT;
    }
  }

  // 낫싱 여부를 판단하는 함수
  isNothing(userBall) {
    return !countStrike(userBall) || !countBall(userBall) 
  }
}

export default Pitching;