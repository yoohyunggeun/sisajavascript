/**
 * 1. 가을 이벤트로 인해서, 각 가격 10% 할인된 데이터로 출력하기
 * 2. 우유 이슈로 인해서, 라떼 품목들은 각 20% 금액 인상된 데이터로 출력하기
 * 3. 빵 이슈로 인해서, 빵 품목들은 가격 절반으로 깍이고, 칼로리 100 추가하기
 * 4. 신메뉴 "쩡으니라떼" 가격 5000 샷 2 칼로리 200 추가된 데이터로 출력하기
 */
const banapresso = [
    {
        name:"아메리카노",
        price:2000,
        shot:2,
        kcal:1
    },
    {
        name:"크리미라떼",
        price:3500,
        shot:2,
        kcal:200
    },
    {
        name:"소금빵",
        price:2000,
        kcal:250
    },
    {
        name:"피스타치오라떼",
        price:4000,
        kcal:300
    }
]
const newArr = banapresso.map((arr) => {
    arr.price = arr.price * 0.9;
    return arr;
}); 
console.log(newArr);
const newArr2 = banapresso.map((arr) => {
    if(arr.name.includes("라떼")){
        arr.price = arr.price * 0.9;
    }
    return arr;
}); 
console.log(newArr2);
const newArr3 = banapresso.map((arr) => {
    if(arr.name.includes("빵")){
        arr.price = arr.price * 0.5;
        arr.kcal = arr.kcal+200;
    }
    return arr;
}); 
console.log(newArr3);
const newArr4 = banapresso.push({name:"쩡으니라떼",price:5000,shot:2,kcal:200});
console.log(banapresso);