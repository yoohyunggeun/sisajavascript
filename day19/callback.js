/* 비동기 컨트롤 문법 */
/* 카페 주문 순서 */
/* 주문 -> 결제 -> 제조 -> 수령 */
const orderCoffee = (menu, step) => {
    setTimeout(() => {
        console.log(`${menu} 주문 완료!`);
        step(menu);
    }, 1000);
    
};

const payCoffee = (menu, step) => {
    setTimeout(() => {
        console.log(`${menu} 결제 완료!`);
        step(menu);
    }, 2000);
};

const makeCoffee = (menu, step) => {
    setTimeout(() => {
        console.log(`${menu} 제조 완료!`);
        step(menu);
    }, 5000);
};

const takeOutCoffee = (menu) => {
    setTimeout(() => {
        console.log(`${menu} 수령 완료!`);
    }, 2000);
};

orderCoffee("아아", () => {
    payCoffee("아아", () => {
        makeCoffee("아아", () => {
            takeOutCoffee("아아");
        });
    });
});
