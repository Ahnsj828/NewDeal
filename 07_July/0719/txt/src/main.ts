// let hello: string = "Hello, World!";
// // 변수 : 타입선언 = 할당할 값
// // hello = 1
// hello = "abc";
// console.log(hello);

// ---------------------------------------------

// // <숫자>
// // let num: number = 123;
// let num: number = 1;
// num = 2;
// console.log(num); // 2

// ---------------------------------------------

// // <불리언>
// // let bool: boolean = true;
// let bool: boolean = true;
// console.log(bool); // true

// ---------------------------------------------

// // <배열>
// // let arr: 배열타입[] = [값, 값, 값];
// let arr: number[] = [1, 2, 3];
// let animals: string[] = ["dog", "cat", "fish"];
// let empty: never[] = [];
// let empty2 = []; // 실무에서는 이렇게 한다
// let union: (string | number)[] = ["복구", 1];
// // 유니언 타입  => union: (string | number)[]  => 문자또는 숫자가 있는 배열이 들어올거야
// let any: any[] = [1, "2", true, null, undefined];
// // any 타입
// let tuple: [string, number] = ["hello", 10];
// // let tuple2: [string, number] = [10, "hello"]; // 순서 바꾸면 오류뜬다
// console.log(arr, animals, empty, union, any, tuple);
// // (3) [1, 2, 3] (3) ['dog', 'cat', 'fish'] [] (2) ['복구', 1] (5) [1, '2', true, null, undefined] (2) ['hello', 10]

// ---------------------------------------------

// // <객체>
// // let obj: { key: 타입; key: 타입 } = { key: 값, key: 값 };
// let obj: { name: string; age: number } = {
//   name: "복구",
//   age: 5,
// };
// let obj2: { name: string; age: number; role: boolean } = {
//   name: "채이",
//   age: 4,
//   role: true,
// };
// // role: boolean => 페이지 관리자 인지 아닌지일때 사용
// let obj3: { name: string; age: number; role?: boolean } = {
//   name: "철수",
//   age: 10,
// };
// // role?: boolean  => 선택적 프로퍼티 => 이렇게 하면 안적어줘도 에러가 안뜬다
// console.log(obj); // {name: '복구', age: 5}
// console.log(obj2); // {name: '채이', age: 4, role: true}
// console.log(obj3); // {name: '철수', age: 10}

// ---------------------------------------------

// // < 객체 interface >
// interface Iperson {
//   name: string;
//   age: number;
//   role?: boolean;
// }

// let userA = { name: "김겨울", age: 3, role: true };
// // 👇 위에서 지정한 타입 Iperson을 정해주고싶으면
// let userA2: Iperson = { name: "김겨울", age: 3, role: true };
// let userB: Iperson = { name: "김가을", age: 3 };

// console.log(userA); // {name: '김겨울', age: 3, role: true}
// console.log(userA2); // {name: '김겨울', age: 3, role: true}
// console.log(userB); // {name: '김가을', age: 3}

// ---------------------------------------------

// // < 함수 타입 >
// // function sum(a, b) {
// //   return a + b;
// // }
// // 👇
// function sum(a: number, b: number): number {
//   // a: number => a타입은 number다
//   // function sum(): number => 반환되는 값은 number다
//   //   => 반환되는 값 타입은 안적어줘도 된다 (추론이 가능하니까)
//   return a + b;
// }
// console.log(sum(1, 2));

// // const sum2 = (a, b) => {
// //   return a + b;
// // };
// // 👇
// const sum2: (a: number, b: number) => number = (a, b) => {
//   // const sum2: (a: number, b: number) => {} = (a, b) => {
//   return a + b;
// };
// console.log(sum2(4, 7));

// // const hello2 = (name) => {
// //   console.log(`Hello, ${name}`);
// // };
// // hello2("김가을");
// // 👇
// const hello2: (name: string) => void = (name) => {
//   // 반환값(return)이 없을때는 void
//   console.log(`Hello, ${name}`);
// };
// hello2("김가을");

// ===================================================

// < 타입 추론 >
let str = "문자열";
// str = 1; // 위에서 문자로 할당했는데 숫자로 재할당해서 오류뜬다

// function sum();

function add(a: number, b = 2) {
  // function add(a: number, b) {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add(1)); // 3

// ---------------------------------------------

// < 타입 단언 >
// const el = document.querySelector('body'); // HTMLElement | null
const el = document.querySelector("body") as HTMLElement;
el.textContent = '주말이 끝났다'; // `el`는 `null`일 수 있습니다.
