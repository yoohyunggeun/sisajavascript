/**
 * 
 */
const arr = [1,2,3,4,5,6,7,8,9,10];
/**
 * 동일 코드
 * 1줄 일 경우 사용
 * const addTen = (x) => x+10
 * arr.map((x) => x+10);
 */
const addTen = (x) => {
    return x+10;
}
const newArr = arr.map(addTen);
console.log(newArr);

/**
 * 1. 홀수면 2배 짝수면 3배
 * 2. 각각 자기 수의 제곱
 * 3. 5의 배수만 "금요일" 바꾸기
 */
const arr2 = [1,2,3,4,5,6,7,8,9,10];
const newArr2 = arr2.map((arr) => arr%2 ? arr*2 : arr*3);
const arr3 = [1,2,3,4,5,6,7,8,9,10];
const newArr3 = arr3.map((arr) =>arr**arr);
const arr4 = [1,2,3,4,5,6,7,8,9,10];
const newArr4 = arr4.map((arr) => arr%5 ? "금요일" : arr);
