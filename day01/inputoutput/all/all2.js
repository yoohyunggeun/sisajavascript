const name3 = window.prompt("너의 이름은?");
console.log(`키미노 나마에와 ${name3} 데스`);

/**
 * 유저에게 커피 메뉴를 물어보고, 잔의 갯수도 물어보고, 이름도 물어보기
 * ~~님 주문하신 커피는 ~~이고
 * 잔의 갯수는 ~~입니다.
 *  */

const menu = window.prompt("커피 메뉴는 ??");
const order = window.prompt("이름은 ??");
const cnt = window.prompt("몇 잔???");
console.log(`${order}님 주문하신 커피는 ${menu} 이고 잔의 갯수는 ${cnt} 입니다.`);

/**
 * 유저에게 
 * 일본 취업하고 싶은 도시 묻고,
 * 직종 물어보기
 * 
 * 결과는 : 취업하고 싶은 도시는 ~~ 이시군요!
 * 그곳에서 ~~ 직종을 하시면서 화이팅 하세요.
 *  */
const city = window.prompt("취업하고 싶은 도시");
const job = window.prompt("직종은 ??");
console.log(`취업하고 싶은 도시는 ${city} 이시군요! 그곳에서 ${job} 직종을 하시면서 화이팅 하세요.`);