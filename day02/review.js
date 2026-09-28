/**
 * review.html review.js 만들고 진행
 * 1. 유저에게 정사각형의 한 변의 길이를 입력 받으면
 * 정사각형의 넓이 : ? , 둘레 : ? 를  나타내기
 * 
 * 2. 유저에게 원의 반지름의 길이를 입력 받으면
 * 원의 넓이 : ? , 둘레 : ? 를 나타내기
 * 
 * 3. 유저에게 정삼각형의 밑변과 높이를 각각 입력 받으면
 * 정삼각형의 넓이 :? , 둘레 : ? 를 나타내기
 * 4. 유저에게 몇 분인지 물어보고 초 단위로 변환 하기
 */

const a = window.prompt('정사각형의 길이');
console.log(`정사각형의 넓이 : ${a*a}, 둘레 : ${a*4}`);

const b = window.prompt('원의 반지름의 길이');
console.log(`원의 넓이 : ${b*b*3.14}, 둘레 : ${2*b*3.14}`);

const c = window.prompt('정삼각형의 넓이');
const d = window.prompt('정삼각형의 높이');
console.log(`정삼각형의 넓이 : ${c*d*0.5}, 둘레 : ${3*a}`);

const e = window.prompt('몇 분');
console.log(`${e*60} 초`);


