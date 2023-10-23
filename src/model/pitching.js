import { BALL_SIZE } from '../utils/constant'
class Pitching {

  // 사용자가 공을 모두 맞혔는지 판단하는 함수
  isMatching(userBall, computerBall) {
    if (this.countStrike(userBall, computerBall) === 3) {
      return true;
    }
    return false;
  }
  
  // 스트라이크 개수를 반환하는 함수
  countStrike(userBall, computerBall) {
    const STRIKE_COUNT = 0;
    for(let i = 0; i < BALL_SIZE; i++) {
      if (userBall[i] === computerBall[i]) {
        STRIKE_COUNT += 1;
      }
    }
    return STRIKE_COUNT;
  }

  // 볼 개수를 반환하는 함수
  countBall(userBall, computerBall) {
    const BALL_COUNT = 0;
    for (let i = 0; i < BALL_SIZE; i++) {
      if (computerBall.includes(userBall[i])) {
        BALL_COUNT += 1;
    }
    return BALL_COUNT;
    }
  }

  // 낫싱 여부를 판단하는 함수
  isNothing(userBall, computerBall) {
    if (!countStrike(userBall, computerBall) && !countBall(userBall, computerBall)) {
      return true;
    }
    return false;
  }
}

export default Pitching;