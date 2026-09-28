/*
 * 프롬프트로 유저에게
 * 첫 번째 숫자 입력
 * 두 번째 숫자 입력
 * 
 * 각각 받은 뒤 두 숫자의 합을 콘솔로 나타내기!
 */

// const aa = window.prompt('첫 번째 숫자');
// const bb = window.prompt('두 번째 숫자');
// console.log(`두 숫자의 문자는 -> ${aa+bb}`);
// console.log(`두 숫자의 합은 -> ${Number(aa)+Number(bb)}`);

/* 나이를 물어보고, 몇 년생인지 맞추기!
   몇살인가요~? : 27
   2000년생 이시군요!
*/

// var age = window.prompt('몇살인가요~?');
// age = Number(age);
// age = 2026-age;
// console.log(`${age}년생 이시군요!`);

// const age = window.prompt('몇살인가요~?');
// console.log(`${2026-Number(age)}년생 이시군요`);

/*
    일본 여행 경비 원화 입력:
    엔화로 얼마 나오는지 콘솔로 출력
    환율은 오늘 인터넷 뒤지셈
*/
const money = window.prompt('일본여행 경비');
const aa = 	Math.round(money/860.7);
console.log(`오늘 환율은 : ${aa}엔 입니다.`);