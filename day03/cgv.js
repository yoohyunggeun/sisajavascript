/**
 * CGV
 * 
 * 좌석 선택 : 일반(15000), 라이트(13000), 프리미엄(18000)
 * 팝콘 선택 : 일반(8000), 캬라멜(9000), 치즈(9000)
 * 음료 선택 : 탄산(3000), 아이스티(2000), 커피(4500)
 * 멤버쉽 선택 : 브론즈(100%), 실버(90%), 골드(80%)
 * 
 * 고르신 좌석: ? ,팝콘: ? ,음료: ? ,총 금액: ?
 */
const selectType = [
    seatType={
        normal:15000
        ,light:13000
        ,premium:18000
    }
    ,menuType={
        normal:8000
        ,caramel:9000
        ,cheese:9000
    }
    ,drinkType={
        soda:3000
        ,icetea:2000
        ,coffee:4500
    }
    ,memberShip={
        bronze:1
        ,silver:0.9
        ,gold:0.8
    }
]

const selectSeat = window.prompt("좌석 선택");
const selectMenu = window.prompt("메뉴 선택");
const selectDrink = window.prompt("음료 선택");
const selectMemberShip = window.prompt("멤버쉽 선택");

const totalPrice = selectType.seatType[selectSeat]+selectMenu
//const menu = selectMenu == "n" ? "일반" : selectMenu == "l" ? "라이트" : selectMenu == "p" ? "프리미엄" : "일반";

console.log(` 고르신 좌석: ${selectSeat} ,팝콘: ${selectMenu} ,음료: ${selectDrink} ,총 금액: ?`);