// < 구문 >

// * 구조 분해 할당
// 객체, 배열을 인수로 받아 변수를 선언하고 값을 할당하는

// 배열의 구조 분해 (배열이 인수로 들어온다고 보면된다)
function sum(a, b, c) {
  console.log(a + b + c);
}
sum(1, 2, 3); // 6
sum(4, 5, 6); // 15

const num = [2, 4, 6];
sum(num[0], num[1], num[2]) // 12

// -----------------------------------------

const arr = [10, 20, 30];
// 방법 1
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c) // 10 20 30

// 방법 2
// const [a, b, c] = arr
// console.log(a, b, c) // 10 20 30

// 다른 경우
const [, b, c] = arr // 비워놔라
console.log(b, c) // 20 30

// -----------------------------------------

// * 나머지 할당
const arr2 = [1, 2, 3, 4, 5];
const [a, ...rest] = arr2;
console.log(a, rest); // 1 [2, 3, 4, 5]
// rest라고 안적어도 된다. pickachew라고 적어도 된다

// -----------------------------------------

// * 객체의 구조 분해
const obj = {
  w: 30,
  h: 30,
  bg: 'red',
};

// console.log(obj.w, obj.h, obj.bg); // 이 방법은 불편하다

// const { w, h, bg } = obj;
// console.log(w, h, bg); // 30 30 'red'

// const { w = 10, h, bg, p = 10 } = obj;
// console.log(w, h, bg, p); // 30 30 'red' 10

const { w:width = 10, h: height, bg, p: padding = 10 } = obj;
console.log(width, height, bg, padding); // 30 30 'red' 10

// -----------------------------------------

// 선택적 체이닝
const user1 = {
  name: '김겨울',
  address: {
    city: '서울',
    dong: '신정동',
  },
};
const user2 = {
  name: '김가을',
};

function printCity(user) {
  // return user.address.city;
  // return user.address?.city; // address가 유효한지 확인한다
  return user.address?.city || '주소 정보가 없습니다.'
}

console.log(printCity(user1)); // 서울
// console.log(printCity(user2)); // undefined
console.log(printCity(user2)); // 주소 정보가 없습니다.