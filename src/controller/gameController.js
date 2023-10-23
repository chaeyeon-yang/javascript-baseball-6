import { Console } from "@woowacourse/mission-utils";
import InputView from "../view/inputView";

class GameController {

  // 사용자가 입력한 공, 컴퓨터가 임의로 생성한 공
  #userBall
  #computerBall

  #computer
  #inputView
  constructor() {
    this.#computer = new Computer();
    this.#inputView = new InputView();
  }

  // 숫자 야구 시작
  gameStart() {
    Console.log(constant.GAME_MESSAGE.start);
    this.#userBall = this.#inputView.getUserInput()
    this.#computerBall = this.#computer.generateRandomNumber();
    this.gameProgress();
  }
}

export default GameController;
