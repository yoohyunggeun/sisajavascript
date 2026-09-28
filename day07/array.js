const macdonald = [
    {name:"빅맥", price:5500, kcal:600, ingredients:["bread","lettuce","tomato","meat"]},
    {name:"콜라", price:2000, kcal:100, ingredients:["soda"]},
    {name:"프렌치프라이", price:3000, kcal:300, ingredients:["potato","oil"]},
    {name:"상하이버거", price:4500, kcal:400, ingredients:["bread","lettuce","chicken"]}
];
/**
 * 1. 맥도날드 전체 총 칼로리 구하기
 * 2. 칼로리 500 이하 제품중에서 가격 총 합 구하기
 * 3. 버거
 */

const q1 = macdonald.map((x) => x.kcal).reduce((x,y) => x+y);
console.log(q1);
const q2 = macdonald.filter((x) => x.kcal <= 500).map((x) => x.price).reduce((x,y) => x+y);
console.log(q2);