import constant from './constant';

// 숫자인지 아닌지 확인해주는 함수
function isNumber(input) {
  return !isNaN(input);
}

// 1~9사이의 3자리 수인지 확인해주는 함수
function isRange(input) {
  return /^[1-9]{3}$/.test(input);
}

// 각 숫자가 중복되는지 확인해주는 함수
function isDuplicate(input) {
  return new Set(input).length !== constant.BALL_SIZE;
}

export { isNumber, isRange, isDuplicate }