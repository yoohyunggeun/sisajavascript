

const movie = { name: "오디세이", director: "놀란", runningTime: 180 };
const snack = { popcorn: "고소 팝콘", drink: "제로 콜라", side: "나초" };
const a = { ...movie, ...snack };
console.log(a);

const coffee = [
    { name: "아메리카노", price: 3000, shot: 2 },
    { name: "라떼", price: 3500, shot: 2 },
    { name: "연유라떼", price: 4000, shot: 2 }
]
//가격 천원 더하고, 샷은 두배로 하기
const q1 = coffee.map((x) => ({ ...x, price: x.price + 1000, shot: x.shot * 2 }));
console.log(q1);

const students = [
    { name: "오찬식", age: 29 },
    { name: "윤정은", age: 29 },
    { name: "이민욱", age: 26 }
]
students.map((x) => ({ ...x, age: x.age + 1 }));