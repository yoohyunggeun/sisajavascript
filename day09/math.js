const MyCar = {
    name:"포르쉐",
    model:"모르겠어요",
    speedUp(x){
        console.log(`${x} 속도 올림`);
    }
}
MyCar.speedUp(10);
console.log(Math.PI); //3.14
console.log(Math.abs(-10)); // 절대값
console.log(Math.floor(3.14)); // 내림
console.log(Math.ceil(5.3)); // 올림
console.log(Math.random()); // 0~1 실수

//int 정수
// [0~9] max:9, min:0
const randomInt = (max,min) =>{
    return Math.floor(Math.random() * (max-min+1))+min;
}

/**
 * #000000 ~ #ffffff
 * 임의의 색상이 나오도록 해주는 함수 만들기
 */
const colorArr = [..."0123456789abcdef"];
const randomColor = ()=>{
    return console.log(`#${colorArr[randomInt(15,0)]}${colorArr[randomInt(15,0)]}${colorArr[randomInt(15,0)]}${colorArr[randomInt(15,0)]}${colorArr[randomInt(15,0)]}${colorArr[randomInt(15,0)]}`);
};
randomColor();
