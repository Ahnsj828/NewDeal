// // function 함수이름() {}
// function myF() {
//   console.log('myF 함수 호출');
//   document.getElementById('text').style.color = 'blue';
//   document.getElementById('text').style.fontSize = '50px';
//   document.getElementById('text').style.backgroundColor = 'tomato';
//   document.getElementById('text').style.transform = 'rotate(15deg) translate(-30px, -100px)';
// }

// 👇 변수를 설정하고 변수를 대입

// function 함수이름() {}
function myF() {
  const text = document.getElementById('text');

  console.log('myF 함수 호출');
  text.style.color = 'blue';
  text.style.fontSize = '50px';
  text.style.backgroundColor = 'tomato';
  text.style.transform = 'rotate(15deg) translate(-30px, -100px)';
}

// ========================================================

// 변수
// 변수란 데이터를 저장하는 공간

let a = 1;
a = 2; // 재할당했다
console.log(a);
// 변수 선언하고 할당했다
// 출력도 잘 됐다

const b = 2;
// b = 3;
console.log(b);

// 보통은 const 쓴다 / 값이 변하는 경우에는 let을 써라

// ========================================================

// < 데이터타입 >
// 숫자(number)
const num1 = 1;
const num2 = 3;
console.log(num1 + num2);

// 문자열(string)
const str1 = 'hello';
const str2 = '12345';
console.log(str1);
console.log(str2);
console.log(str1 + str2);

const strA = '2';
const strB = '3';
console.log(strA);
console.log(strB);
console.log(strA + strB);

// 불리언(boolean)
const isTrue = true;
const isFalse = false;
console.log(isTrue);
console.log(isFalse);
console.log(isTrue, isFalse);

// 객체(object)
const user = {
  name: '홍길동',
  age: 20,
};
console.log(user);
console.log(user.name);
console.log(user.age);

// 배열(arry)
const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
console.log(arr[0]); //첫번째(index번호가 0인 아이)
console.log(arr[1]); //첫번째(index번호가 1인 아이)

const users = [
  { name: '홍길동', age: 20 },
  { name: '김철수', age: 30 },
];
// 배열하고 데이터값을 합쳐서 넣을 수 있다.
console.log(users[0]);
console.log(users[0].name);
console.log(users[0].name, users[0].age);
console.log(`안녕하세요. ${users[0].name}님`);

// 함수(function)
// const func = function() {};
const func = function () {
  console.log('함수 또또 호출');
};
func();

// function myF() {} => 함수에 이름을 넣어서 기명함수라고 부른다
// const func = function() {} => 익명함수라고 부른다 / 변수에 담는다

// ========================================================

// < 연산자 >
// 산술 연산자(+, -, *, /, %)
const aa = 1;
const bb = 2;
console.log(aa + bb);
console.log(aa - bb);
console.log(aa * bb);
console.log(aa / bb);
console.log(aa % bb);

// 대입 연산자
let cc = 1;
cc += 2 // cc = cc + 2;
console.log(cc); // 3

cc -= 2 // cc = cc - 2;
console.log(cc); // 1

cc *= 2 // cc = cc * 2;
console.log(cc); // 2

cc /= 2 // cc = cc / 2;
console.log(cc); // 1

cc %= 2 // cc = cc % 2;
console.log(cc); // 1

// 비교 연산자
const dd = 1;
const ee = 2;
console.log(dd === ee); // false
console.log(dd !== ee); // true
console.log(dd >= ee); // false
console.log(dd > ee); // false
console.log(dd <= ee); // true
console.log(dd < ee); // true

// 논리 연산자
const f = true;
const g = false;
console.log(f && g); // false (둘다 true면 true가 출력된다)
console.log(f || g); // true (둘중 하나만 true여도 true가 출력된다)
console.log(!f); // false (f가 true라서 반대인 false가 출력된다)
console.log(!g); // true (g false 반대인 true가 출력된다)

// 삼항 연산자
// 조건 ? 참 : 거짓
const i = 1 > 2 ? '참' : '거짓';
console.log(i); // 거짓
const i2 = 2 > 1 ? '참' : '거짓';
console.log(i2); // 참

// ========================================================

// < 조건문 >
// if (조건) {
//   조건이 참일경우 실행될 코드
// }
const h = 1;
if (h === 1) {
  console.log('h는 1입니다.');
} else {
  console.log('h는 1이 아닙니다.');
};

const h2 = 2;
if (h2 === 1) {
  console.log('h는 1입니다.');
} else if (h2 === 2) {
  console.log('h는 2입니다.')
}
else {
  console.log('h는 1이 아닙니다.');
};

// ========================================================

// < 반복문 >
// for 문
// 0부터 9까지 출력
for (let i = 0; i < 10; i++) {
  // 실행될 코드
  console.log(i);
};

// while 문
let j = 0; // j를 선언하고 0을 할당했다
while (j < 5) {
  console.log(j);
  j++;
}

// ========================================================
// 익명함수는 이름이 없으니까 변수에 할당해서 호출한다
// 화살표 함수도 익명함수라 변수에 할당해서 호출한다


// < 함수 >
// * 기명함수 = 이름이 있는 함수
// 함수 내에 이름이 있는 형태
function myFunc1() {
  console.log('기명 함수 호출');
};
myFunc1();

// 👇 호출문을 위해 해도 호출이된다

myFunc1a();
function myFunc1a() {
  console.log('기명 함수 호출');
};
// 일반 함수는 호이스팅 기능이 있어서 호출하고 선언해도 된다.

// -----------------------------------------------------

// * 함수표현식 (익명함수)
// function () {
//   console.log('익명 함수 호출');
// }

// 👆이렇게 하면 호출이 안된다 / 함수를 변수에 할당하고 호출해야한다
// 👇

const myFunc2 = function () {
  console.log('익명 함수 호출');
};
myFunc2();

// 익명함수는 호이스팅 기능이 없다

// -----------------------------------------------------

// 화살표 함수(ES6)
// 화살표 함수도 익명함수라 변수에 할당하고 호출해야한다
// 호이스팅 기능이 없어서 선언하고 호출해야한다
const myFunc3 = () => {
  console.log('화살표 함수 호출');
};
myFunc3();