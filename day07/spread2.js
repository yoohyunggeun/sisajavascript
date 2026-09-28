const test = [..."banana"];
console.log(test);

const fruits = ["apple", "pineapple", "banana", "peach", "kiwi", "orange", "mango", "strawberry"];

/**
 * aeiou를 "😊"로 바꾸기
 */
const fruitsReplace = fruits
    .map((x) => [...x]
        .map((y) => [..."aeiou"]
            .some((z) => z == y) ? "😊" : y)
                .reduce((a, b) => a + b));
console.log(fruitsReplace);

const a1 = {name: "유희찬", age:20};
const a2 = {name: "김보민", gender:"female"};

const a3 = {...a1, ...a2}; //김보민 20 female
const a4 = [1,2,3,4,5];
const a5 = [1,2,3,4,5];
const a6 = [...a4,...a5];

const a7 = [..."kiwi"].map((v)=>v == "i" ? "😂" : v).reduce((a,c)=>a+c) // k,😂,w,😂