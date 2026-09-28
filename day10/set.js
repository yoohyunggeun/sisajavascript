/**
 * string, number, boolean, undefined
 * obj, arr, func, math, date, set, window, document, element
 */
//집합
const s = new Set();
s.add(1);
s.add(2);
s.add(3);
s.add(4);

console.log(s);
console.log(s.size);

const s1 = new Set();
s1.add("a");
s1.add("b");
s1.add("c");
s1.add("a");
console.log(s1);
console.log(s1.size);

const s2 = new Set([1,2,3,4,5,1,2,3,4,5]);
const newList = [...s2];
console.log(s2);
console.log(newList);