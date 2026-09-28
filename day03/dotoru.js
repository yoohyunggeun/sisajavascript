/**
 * menu
 * 블랜드커피, 280엔, size: s,m,l
 * 아이스코히, 380엔, size: s,m,l
 * 산도위치, 600엔, size: s,m,l
 * 
 * 유저에게 도토루 메뉴를 고르고 [1,2,3]
 * 사이즈 물어보기 [s,m,l]
 * s: 그대로, m: 10%붙고, l:20% 붙어서
 * 멤버쉽 있는지 물어보고 (yes,no)
 * 주문하신 ~~ 메뉴 가격은 멤버쉽이면 10% 아니면 정가로 나타내기!
 */
const menu = [
    {name:"블랜드커피",price:280,size:{s:1,m:1.1,l:1.2}}
    ,{name:"아이스코히",price:380,size:{s:1,m:1.1,l:1.2}}
    ,{name:"산도위치",price:600,size:{s:1,m:1.1,l:1.2}}
]
const user = +window.prompt(" 메뉴 번호 (1,2,3)");
let num = 0;
if(user == 1){
    num = 0;
}else{
    num = user-1;
}
const size = window.prompt(" 사이즈 ");
let sales = 0;
if(size=="s"){
    sales = menu[num].size.s;
}else if(size=="m"){
    sales = menu[num].size.m;
}else{
    sales = menu[num].size.l;
}
const memberShip = window.prompt(" 멤버쉽 ");
const m_sales = memberShip == "true" ? 0.9 : 1;
const finalPrice = menu[num].price*sales*m_sales;
console.log(`주문하신 ${menu[num].name} 메뉴, 가격은 ${finalPrice} 입니다.`);