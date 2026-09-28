/**
 * map => 안에 요소들을 바꿔줘!
 */
const newArr = [1,3,5,7,9,11];
const a1 = newArr.filter((x) => x > 6); //[7,9,11]
/**
 * 3이상 10이하만 살리기
 * 3의 배수만 살리기
 * 0번째,1번째,2번째 순서만 살리기
 */
const a2 = newArr.filter((x) => x >= 3 && x <= 10);
console.log(a2);
const a3 = newArr.filter((x) => x % 3 == 0);
console.log(a3);
const a4 = newArr.filter((x,i) => {
    if(i < 3) return x;
})
console.log(a4);

const fruits = ["apple","pineapple","banana","kiwi","melon","mango"];
/**
 * 1. 문자 길이가 6글자 이상만 살리기
 * 2. 문자에 e 들어간 과일만 살리고 모두 대문자화 하기
 */
const a5 = fruits.filter((x) => x.length >= 6);
console.log(a5);
const a6 = fruits.filter((x) => x.includes("e")).map((x)=>x.toUpperCase());
console.log(a6);

const students = [
    {name:"윤정은", age:30, mbti: "ENFP"},
    {name:"오찬식", age:29, mbti: "ESTJ"},
    {name:"이민욱", age:26, mbti: "ISFJ"},
    {name:"오재희", age:27, mbti: "ISTP"}
];
/**
 * 1. 나이 29살 이상만 남기고, birthyear(년생) 추가하기
 * 2. MBTI 성향 I인 사람만 남기고, tendency: "내향적" 추가하기
 */
const q1 = students.filter((x) => x.age >= 29).map((x) => x.birthyear = 2027 - x.age);
console.log(q1);
const q2 = students.filter((x) => x.mbti[0] == ("I")).map((x) => {x.tendency = "내향적"; return x;});
console.log(q2);

/**
 * map : 바꾸기, filter: 거르기, find: 찾기, some & every : 존재유무
 */
const arr = [1,2,3,4,5];

const t1 = arr.find((x)=> x <= 10); //10
const t2 = arr.findIndex((x)=> x <= 10); //0번째
const t3 = arr.some((x)=> x > 20); //true
const t4 = arr.every((x)=> x > 20); //false

/**
 * reduce(accumulator, currentValue, index, array)
 * array.reduce(accumulator, currentValue, index, array) => {
 * }, initialValue (처음 누적값 지정)
 */
const arr1 = [1,2,3,4,5];
const result1 = arr1.reduce((a,c)=>{
    console.log({a:a,c:c});
    return a+c;
});
console.log(result1);

const coupang = [
    {name:"선풍기",price:55000, counts:1},
    {name:"양말",price:3500, counts:2},
    {name:"칫솔",price:4000, counts:3}
]
const q3 = coupang.map((x)=>{
    const a = x.price*x.counts;
    return a;
}).reduce((x,y)=>{
    return x+y;
})
console.log(q3);

/**
 * 팝송
 * 힌트 문자열을 배열로 바꾸는 함수는 split함수임
 * 1. butter 갯수 구하기
 * 2. 총 글자 몇개?
 */

const arrayList = butter.split(' ');
console.log(arrayList);
const q4 = arrayList.map((x)=>{
    const total = x.includes("butter");
    console.log(total);
    return total;
}).filter((x) => x);
console.log(q4.length);
const q5 = butter.length;
console.log(q5);
