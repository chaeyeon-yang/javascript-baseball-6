import { BALL_SIZE } from '../utils/constant'
class Pitching {
  
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
}

export default Pitching;