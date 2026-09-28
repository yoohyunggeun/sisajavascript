const car = {
    name:"포르쉐",
    model:"잘몰라요",
    speed:0,
    speedUp(){
        this.speed = this.speed + 10;
    },
    speedDown(){
        this.speed = this.speed < 10 ? 0 : this.speed - 10;
    },
    break(){
        this.speed = 0;
    },
    show(){
        console.log(`${this.name}의 속도 : ${this.speed}`);
    }
};

/**
 * calc 라는 오브젝트 타입 변수 만들고
 * first, second 키값을 가지고 각각 유저에게 숫자를 입력 받고
 * plus, minus, multiply, square, divide를 함수를 각각 정의하고 출력하는 오브젝트타입 만들기
 */

const calc = {
    first : 0,
    second : 0,
    total : 0,
    user() {
        this.first = +window.prompt('first');
        this.second = +window.prompt('second');
    },
    plus(){
        this.total = this.first+this.second;
    },
    minus(){
        this.total = this.first-this.second;
    },
    multiply(){
        this.total = this.first*this.second;
    },
    square(){
        this.total = this.first**this.second;
    },
    divide(){
        this.total = this.first/this.second;
    },
    show(){
        console.log(`${this.total}`);
    }
};
calc.user();
calc.plus();
calc.show();
calc.square();
calc.show();