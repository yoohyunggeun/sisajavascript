/**
 * 타입캐스팅 & 생성자함수
 * 기본 타입 생성자 함수 (잘 안씀)
 * String(10) "10"
 * Boolean(1) true
 * Number("100") 100
 * Object() - 구문법
 * Array(100).fill(0).map((v,i)=> i+1); [1~100]
 * 
 * key == value 일 경우 전자 방식으로 많이 사용
 * console.log({a,b}); == console.log({a:a,b:b});
 */

const a = Array(100).fill(0).map((v,i)=> i+1);
const b = String(10)
console.log({a,b});

a.forEach((v)=> {}) //역활 없음 (훑기)