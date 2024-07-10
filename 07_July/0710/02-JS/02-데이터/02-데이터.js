const str1 = '보고싶다';
const str2 = '복구😥';
const str3 = `${str1} 사랑스러운 ${str2}야`;
console.log(str3); // 보고싶다 사랑스러운 복구😥야

// ======================================================

// < 배열 >
const arr = ['dog', 'cat', 'fish'];
console.log(arr); // (3) ['dog', 'cat', 'fish']
console.log(arr.length); // 3
console.log(arr[0]); // dog
// 문제) 나는 고양이를 키우고 싶어요
console.log(`나는 ${arr[1]}를 키우고 싶어요`)

// ======================================================

// < 객체 >
const user = {
  name: '박복구',
  age: 5,
}
console.log(user);
console.log(user.name);
console.log(user.age);
// 문제) 박복구는 5살입니다
console.log(`${user.name}는 ${user.age}살 입니다`)

// const users = [1, 2]
const users = [
  {
    name: '박복구',
    age: 5,
  },
  {
    name: '박채이',
    age: 4,
  },
]
console.log(users);
console.log(`제 조카는 ${users[0].age}살 된 ${users[0].name}와 ${users[1].age}살 된 ${users[1].name} 이렇게 ${users.length}입니다.`);

// ======================================================

// < 함수 >
// 함수 선언식(기명 함수)
function fn() {
  console.log('안녕하세요');
}
fn(); // fn 이렇게 하면 출력이 안된다
console.log(fn) // 함수가 출력된다
// ƒ fn() {
//   console.log('안녕하세요');
// }
console.log(fn())

// 함수 표현식(익명 함수)
const fn2 = function () {
  console.log('안녕하세요. 익명함수입니다.')
};
fn2();

// ======================================================

// < 형 변환 >
const num = 1;
const str = '1';
console.log(num === str); // 일치 연산자(값과 타입이 일치하는지 확인)
console.log(num == str); // 동등 연산자(값만 비교)
// 요즘에는 일치 연산자만 사용한다 / 가급적이면 동등 연산자 사용하지말아라

// ======================================================

