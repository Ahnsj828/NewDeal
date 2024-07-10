// const 변수 재선언 불가능,  재할당 불가능
const a = 1; // 변수를 할당하는 방법
// const a = 1;  // 재 선언

// a = 2; // 재할당
// console.log(aa)

// let : 변수 재선언불가능, 재할당 가능
let b = 1;
// let b = 2; // 오류난다 => 재선언 안된다
b = 2; // 재할당
console.log(b)

// var : 변수 재선언, 재할당 가능
var c = 3;
var c = 2;
// 오류가 안난다 => 오류있는지 몰라서 나중에 작동이 안된다.

const d = 1;
const e = d;
console.log(d, e); // 1 1

// 변수 범위
const f = 1;
function test() {
  const f = 2;
  console.log(f); // 2
}
test();

// 변수 형 변환
const g = '1';
const h = '2';
console.log(g + h); // 12
console.log(Number(g) + Number(h)); // 3
console.log(+g + +h); // 3