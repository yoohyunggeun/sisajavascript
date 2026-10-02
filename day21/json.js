const obj = {
    name: "kim",
    age: 30,
    skills: ["java", "javascript"]
};
const a = JSON.stringify(obj);
console.log(a);

const b = JSON.parse('{"name":"kim","age":30,"skills":["java","javascript"]}');
console.log(b);