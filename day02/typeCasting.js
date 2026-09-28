/**
 * truthy & falsy
 * true : 아래 빼고 다
 * false : 0, ""
 * const a = Boolean('스타벅스');
 * const a = Boolean(1);
 * const a = Boolean(-1000);
 * 
 * 명시적 타입캐스팅 : Boolean(), Number(), String()
 * 암묵적 타입캐스팅 : boolean: !, number: +
 * 
 * const test2 = +"100"; //숫자화 연산자
 * const test3 = "로제" + "떡볶이" //문자연결 연산자
 * const test4 = +"1" + +"2"; // 3
 * const test5 = 1 + 2 + 3 + "4" // 1234 (String)
 * 
 * ||[or] &&[and]
 * const g = true && "고기"; //고기
 * const g1 = false && "야채"; //
 * const g2 = false || "사이다" // 사이다
 * 
 * const username = window.prompt("유저 이름 입력");
 * const nickname = username || "Guest";
 * console.log(nickname);
 * 
 * const password = +window.prompt("비밀번호 입력");
 * const isLoggined = password == 1234 && true;
 *
 */

