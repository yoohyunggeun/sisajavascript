/**
 * 1. 각 과일의 글자 갯수로 바꾸기
 * 2. 글자 갯수가 6개 이상이면 오이시! 아니면 스미마셍
 * 3. 스펠링 i가 있으면 "😊" 없으면 "😂" 나타내기
 * 이모티콘 시작(window btn) + .(dot btn)
 */
const fruits = ["strawberry","mandarin","apple","kiwi","banana"];

const newArr = fruits.map((arr) => arr=arr.length); 
console.log(`result 1 : ${newArr}`);
const newArr2 = fruits.map((arr) => arr = arr.length>=6 ? "오이시!" : "스미마셍"); 
console.log(`result 2 : ${newArr2}`);
const newArr3 = fruits.map((arr) => arr= arr.includes("i") ? "😊" : "😂");
console.log(`result 3 : ${newArr3}`);

/**
 * 1. i or o 를 포함하면 글자수로 바꾸고 아니면 대문자화 하기!
 * 2. 글자수가 6글자 이상이면 5글자로 나타내고 아니면 그대로 나타내기
 * 3. t를 포함하면 true이고 아니면 false 나타내기
 */
const cafe = ["americano","latte","tea","frappucino","ade"];
const newArr4 = cafe.map((arr) => arr = arr.includes("i") || arr.includes("o") ? arr.length : arr.toUpperCase());
console.log(`result 4 : ${newArr4}`);
const newArr5 = cafe.map((arr) => arr= arr.length >= 6 ? arr.slice(0,5) : arr);
console.log(`result 5 : ${newArr5}`);
const newArr6 = cafe.map((arr) => arr= arr.includes("t"));
console.log(`result 6 : ${newArr6}`);