// destructring 분해구조
const fruits = ["apple", "banana", "kiwi", "melon"];
// const [one,two] = fruits;

const students = ["오찬식", 29, ()=>{console.log("돌아왔구나")}, true, "JLPT 없음 ㅅㄱ"];
const [one, two, three] = students;
console.log(one); //오찬식
console.log(two); //29
console.log(three);//()=>{console.log("돌아왔구나")}
three();//console.log("돌아왔구나")