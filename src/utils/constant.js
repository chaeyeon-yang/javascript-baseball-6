// 입력받을 공의 자릿 수 설정
const BALL_SIZE = 3;

// 게임 시작, 종료 옵션
const GAME_OPTION = {
  newGame: 1,
  exit: 2
}

// 사용자 안내 메세지
const GAME_MESSAGE = {
  start: '숫자 야구 게임을 시작합니다.',
  input: '숫자를 입력해주세요 : ',
  success: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  restart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
}

// 사용자 힌트 메세지
const HINT_MESSAGE = {
  ball: '볼',
  strike: '스트라이크',
  nothing: '낫싱'
}

// 사용자 에러 메세지
const ERROR_MESSAGE = {
  validateNumber: '[ERROR]: 숫자를 입력해주세요.',
  validateDuplicate: '[ERROR]: 입력한 숫자가 중복됩니다.',
  validateNumberRange: '[ERROR]: 숫자는 1부터 9사이의 3자리 수여야만 합니다.',
  validateGameOption: '[ERROR]: 숫자를 입력해주세요. (1 또는 2)'
}

export default { BALL_SIZE, GAME_OPTION, GAME_MESSAGE, HINT_MESSAGE, ERROR_MESSAGE }