const arr = [2,4,6,8,10];

const doubledArray = arr.map((x) => x*2);

const coffee = ["americano","latte","moka","frapucino"];
const test = coffee.map((x,i)=>`${i}.${x}`);
console.log(test);

const student = [{name: "kimnadan", age:31}, {name:"leeminuk", age:29}, {name: "yeonjungeun", age:30}];
student.map((x,i) => {
    x.no = i;
    return x;
})
const test2 = student.map((x,i)=>`${i}.${x}`);
console.log(test2);

const company = [
    {name:"clzero", location:"osaka"},
    {name:"lakuten", location:"tokyo"},
    {name:"merukari", location:"tokyo"}
];
company.map((x,i) => {
    x.no = `00${i+1}`;
    return x;
});
console.log(company);

const japanCalss = [
    {name:"A class", level:"basic", student:["ohchansik","leeminuk","yeonjungeun"]},
    {name:"B class", level:"advance", student:["kimnadan","kimjiwon","choikanghyun"]}
];
japanCalss.map((x,i) => {
    x.no = `${i+1}`;
    x.student = x.student.map((y,j)=>{
        return {no:j+1, name:y};
    })
    return x;
});
console.log(japanCalss);

const students = [
    {name:"yeonjungeun",itBooks:["html&css","git&github","javascript"],japaneseBooks:["회화책","문법책","단어책"]},
    {name:"ohchansik",itBooks:["html&css","git&github","javascript"],japaneseBooks:["히라가나","가타카나","단어책"]},
    {name:"leeminuk",itBooks:["html&css","git&github","javascript"],japaneseBooks:["한문책","출석책","단어책"]}
]
students.map((x,i) => {
    x.no = `${i+1}`;
    x.itBooks = x.itBooks.map((y,j)=>{
        return {name:y,no:`00${j+1}`,booklength:y.length};
    });
    return x;
})
console.log(students);
