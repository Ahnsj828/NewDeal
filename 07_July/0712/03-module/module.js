// 모듈은 기본적으로 함수로 만들어야한다
export default function button() {
  // button => 모듈이름
  // export => 함수를 내보내겠다
  // default => 이 버튼이 기본값으로 나가겠다 라는 뜻
  // button() => 이건 함수지만 모듈이다
  console.log('버튼사용하기');
}

export function buttonRed() {
  console.log('빨강버튼')
}
export function buttonBlue() {
  console.log('파랑버튼')
}