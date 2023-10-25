import { MissionUtils } from '@woowacourse/mission-utils';
import constant, { BALL_SIZE } from '../utils/constant'

class OutputView {

  // 사용자에게 힌트를 출력하는 함수
  async judgeBall(strikeCount, ballCount) {
    const result = [];

    if (strikeCount !== 0) result.push(`${strikeCount}${constant.HINT_MESSAGE.strike}`)
    if (ballCount !== 0) result.push(`${ballCount}${constant.HINT_MESSAGE.ball}`)
    if (strikeCount === 0 && ballCount === 0) result.push(`${constant.HINT_MESSAGE.nothing}`);

    MissionUtils.Console.print(result.join(' '))
  }

  judgeSuccess(strikeCount) {
    return strikeCount === BALL_SIZE;
  }
}

export default OutputView;