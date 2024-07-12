// 함수 선언하기
// function 함수이름(매개변수1, 매개변수2) {
//   // 코드 작성
//   return 결과값;
// }
// 함수이름(인자1, 인자2);

function hello1(name) {
  // console.log('Hello, 김겨울!');
  console.log('Hello,' + name + '!');
}
hello1('김가을');

hello1('김겨을');
function hello1up(name) {
  // console.log('Hello, 김겨울!');
  console.log('Hello,' + name + '!');
}

// ---------------------------------------------

// 함수 표현식
const hello2 = function () {
  console.log('포폴해야되는데..')
};
hello2();

// hello2up();
// const hello2up = function () {
//   console.log('할게많네..')
// };

// ---------------------------------------------

// 매개변수 패턴
function sum(x, y) {
  return x + y;
}
console.log(sum(1, 2)); // 3
console.log(sum(5)); // NaN (5 + undefined = NaN)