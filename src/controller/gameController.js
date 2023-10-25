import { Console } from "@woowacourse/mission-utils";
import constant from "../utils/constant";
import InputView from "../view/inputView";
import OutputView from "../view/outputView";
import Pitching from "../model/pitching";
import Computer from "../model/computer";

class GameController {

  // 사용자가 입력한 공, 컴퓨터가 임의로 생성한 공
  #userBall
  #computerBall

  #computer
  #pitching
  #inputView
  #outputView
  constructor() {
    this.#computer = new Computer();
    this.#pitching = new Pitching();
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  // 숫자 야구 시작
  gameStart() {
    Console.print(constant.GAME_MESSAGE.start);
    this.#computerBall = this.#computer.generateRandomNumber();
    this.gameProgress();
  }

  // 숫자 야구 진행
  gameProgress() {
    while (true) {
      this.#userBall = this.#inputView.getUserInput();
      const strikeBall = this.#pitching.countStrike(this.#userBall);
      const ballBall = this.#pitching.countBall(this.#userBall);

      this.#outputView.judgeBall(strikeBall, ballBall);

      if (judgeSuccess(strikeBall)) {
        Console.print(constant.GAME_MESSAGE.success)
        this.gameEndOrRestart();
        break;
      }
    }
  }
}

export default GameController;
