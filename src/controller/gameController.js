import { MissionUtils } from "@woowacourse/mission-utils";
import constant from "../utils/constant";
import InputView from "../view/inputView";
import OutputView from "../view/outputView";
import Pitching from "../model/pitching";
import { BALL_SIZE } from "../utils/constant"

class GameController {

  // 사용자가 입력한 공, 컴퓨터가 임의로 생성한 공
  #userBall
  #computerBall

  #pitching
  #inputView
  #outputView
  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }
  // 숫자 야구 시작
  gameStart() {
    const computerBall = this.generateRandomNumber();
    MissionUtils.Console.print(constant.GAME_MESSAGE.start);

    console.log("컴퓨터 공", computerBall)
    this.#pitching = new Pitching(this.#computerBall);
    this.gameProgress();
  }

  // 숫자 야구 진행
  async gameProgress() {
    while (true) {
      this.#userBall = await this.#inputView.getUserInput();
      console.log("유저 공", this.#userBall)
      const strikeBall = this.#pitching.countStrike(this.#userBall);
      const ballBall =  this.#pitching.countBall(this.#userBall);

      await this.#outputView.judgeBall(strikeBall, ballBall);

      if (this.#outputView.judgeSuccess(strikeBall)) {
        MissionUtils.Console.print(constant.GAME_MESSAGE.success)
        this.gameEndOrRestart();
        break;
      }
    }
  }

  // 숫자 야구 종료 혹은 재시작
  async gameEndOrRestart() {  
    const isRestart = await this.#inputView.whetherRestart();
    if (isRestart) {
      this.#computerBall = this.generateRandomNumber();
      this.gameStart();
    } else {
      return;
    }
  }

    // 임의의 정답을 생성해주는 함수
  generateRandomNumber() {
  const ANSWER = [];
  while(ANSWER.length < BALL_SIZE) {
    const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!ANSWER.includes(NUMBER)) {  
      ANSWER.push(NUMBER);
    }
  }

  return ANSWER.join('');
}

}

export default GameController;