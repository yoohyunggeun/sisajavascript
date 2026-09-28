/**
 * CGV
 * 
 * 영화 : 오디세이, 코난, 스파이더맨, 귀멸의 칼날
 * 좌석 : 스탠다드1.5, 리클라이너1.8, IMAX2.0, 라이트1.0
 * 팝콘 : 솔트0.8, 캬라멜0.85, 치즈0.9
 * 음료 : 탄산0.25, 커피류0.4, 에이드류0.5, 주류0.7
 * 스낵 : 나초0.4, 오징어0.7, 핫도그0.5
 * 
 * 성인: 정가, 미성년자 or 시니어: 80%
 * 
 * 결과 : 영화 ?? 좌석 ?? 팝콘 ?? [없음] 스낵 ??[없음] 음료 ?? [없음]
 */

const cgv = {
    movie : [
        {
            num : 1,
            name : "오디세이"
        },
        {
            num : 2,
            name : "코난"
        },
        {
            num : 3,
            name : "스파이더맨"
        },
        {
            num : 4,
            name : "귀멸의칼날"
        }
    ],
    seat : [
        {
            num : 1,
            name : "스탠다드",
            price:15000
        },
        {
            num : 2,
            name : "리클라이너",
            price:18000
        },
        {
            num : 3,
            name : "IMAX",
            price:20000
        },
        {
            num : 4,
            name : "라이트",
            price:10000
        }
    ],
    popCorn : [
        {
            num : 1,
            name : "솔트",
            price:8000
        },
        {
            num : 2,
            name : "캬라멜",
            price:8500
        },
        {
            num : 3,
            name : "치즈",
            price:9000
        }
    ],
    snak : [
        {
            num : 1,
            name : "나초",
            price:4000
        },
        {
            num : 2,
            name : "오징어",
            price:7000
        },
        {
            num : 3,
            name : "핫도그",
            price:5000
        }
    ],
    juice : [
        {
            num : 1,
            name : "탄산",
            price:2500
        },
        {
            num : 2,
            name : "커피류",
            price:4000
        },
        {
            num : 3,
            name : "에이드류",
            price:5000
        },
        {
            num : 4,
            name : "주류",
            price:7000
        }
    ],
    totalPrice:[],
    userChoice(){
        const movieSelect = this.movie.filter((x) => x.num == this.userSelect[0]).map((x) => x.name);
        const seatSelect = this.seat.filter((x) => x.num == this.userSelect[1]).map((x) => x.name);
        const popCornSelect = this.popCorn.filter((x) => x.num == this.userSelect[2]).map((x) => x.name);
        const snakSelect = this.snak.filter((x) => x.num == this.userSelect[3]).map((x) => x.name);
        const juiceSelect = this.juice.filter((x) => x.num == this.userSelect[4]).map((x) => x.name);
        console.log(`영화 : ${movieSelect}, 좌석 : ${seatSelect}, 팝콘 : ${popCornSelect}, 스낵 : ${snakSelect}, 음료 : ${juiceSelect}`);
        console.log(`총 금액 : ${this.totalPrice}`);
    },
    user(){
        const question = window.prompt(`영화, 좌석, 팝콘, 스낵, 음료, 성인(0,1)`);
        this.userSelect = question.split(",");
    },
    total(){
        const seatPrice = this.seat.filter((x) => x.num == this.userSelect[1]).map((x) => x.price);
        const popCornPrice = this.popCorn.filter((x) => x.num == this.userSelect[2]).map((x) => x.price);
        const snakPrice = this.snak.filter((x) => x.num == this.userSelect[3]).map((x) => x.price);
        const juicePrice = this.juice.filter((x) => x.num == this.userSelect[4]).map((x) => x.price);
        const adultChk = this.userSelect[5];
        this.totalPrice = [
            +seatPrice,
            +popCornPrice,
            +snakPrice,
            +juicePrice
        ].reduce((sum,price) => sum+price);
        this.totalPrice = adultChk == 1 ? this.totalPrice : this.totalPrice*0.8;
    }
}
cgv.user();
cgv.total();
cgv.userChoice();