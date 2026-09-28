/**
 * 1. 유저에게 나이를 물어보고, 20살 미만이면
 * 콘솔에 미성년자 아니면 성인 나오기
 * 
 * 2. 유저에게 정수(숫자)를 입력받고
 * 콘솔에 양의 정수 인지 0인지 음의 정수인지 나타내기!
 * 
 * 3. 유저에게 정수(숫자)를 입력받고
 * 콘솔에 홀수인지 짝수인지 나타내기!
 * ex) 2->짝수, 1->홀수
 */
const a = window.prompt('age ??');
const a1 = a >= 20 ? '성인' : '미성년자';
console.log(`너는 ${a1} 임`);

const b = window.prompt('숫자 입력');
const b1 = b > 0 ? '양의정수' : (Number(b) == 0 ? 0 : '음의정수');
console.log(`정수는 ${b1}`);

const c = window.prompt('숫자 입력');
const c1 = c%2 > 0 ? '홀수' : '짝수';
console.log(`정수는 ${c1}`);