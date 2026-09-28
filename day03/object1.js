const donchicken ={
    name:"돈치킨"
    ,location:"역삼역 어딘가"
    ,capacity:30
    ,isHoliyday: false
    ,menu:{
        main:"수육"
        ,sub:"막국수"
        ,side:"미역국"
    }
};

console.log(donchicken.location);
console.log(donchicken[location]);
console.log(donchicken.menu.main);
console.log(donchicken[menu][main]);

donchicken.vip = "유형근"; //추가
delete donchicken.menu.side; // 미역국 삭제