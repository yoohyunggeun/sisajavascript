/* localStorage.setItem("lunch", "돈치킨");
const a = localStorage.getItem("lunch"); */
localStorage.setItem("coffee", JSON.stringify({ name: "아메리카노", price: 2500, shots: 2 }));
/* bread 마들렌 3000 250 */
localStorage.setItem("bread", JSON.stringify({ name: "마들렌", price: 3000, kcal: 250 }));
const data = localStorage.getItem("bread");
console.log(data);
/* 연산자: typeof */
console.log(typeof 1);
console.log(typeof true);
console.log(typeof "빵");
console.log(typeof data);
