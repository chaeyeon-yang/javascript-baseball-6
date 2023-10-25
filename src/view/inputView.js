import constant from "../utils/constant"
import { isDuplicate, isNumber, isRange } from "../utils/validity"

class InputView {

  // 사용자 입력 받기
  async getUserInput() {
    const USER_INPUT = await Console.readLine(constant.GAME_MESSAGE.input)
    validateUserInput(USER_INPUT);

    return USER_INPUT;
  }

  // 사용자가 입력한 값 유효성 체크
  validateUserInput(userInput) {
    if (!userInput || !isNumber(userInput)) {
      throw new Error(constant.ERROR_MESSAGE.validateNumber);
    }
    if (!isRange(userInput)) {
      throw new Error(constant.ERROR_MESSAGE.validateNumberRange);
    }
    if (!isDuplicate(userInput)) {
      throw new Error(constant.ERROR_MESSAGE.validateDuplicate);
    }
  }

  // 게임 재시작 여부 받기
  async whetherRestart() {
    const WHETHER_RESTART = await Console.readLine(constant.GAME_MESSAGE.input);
    if (WHETHER_RESTART === '1') return true
    if (WHETHER_RESTART === '2') return false
    else throw new Error(constant.ERROR_MESSAGE.validateGameOption)
  }
}

export default InputView;