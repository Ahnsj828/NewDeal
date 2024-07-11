// 전개 연산자

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const arr3 = [arr1, arr2];
const arr3 = [...arr1, ...arr2];
console.log(arr3) // (6) [1, 2, 3, 4, 5, 6]

const obj1 = {
  a: 1,
  b: 2,
}
const obj2 = {
  ...obj1,
  c: 3,
};
console.log(obj2);