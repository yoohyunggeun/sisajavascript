const num = +window.prompt("숫자 입력");
// if(num > 0){
//     console.log(`${num}은 0 보다 큽니다.`);
// }
// console.log("프로그램 종료");

if(num >= 20){
    console.log("성인");
}else if( num == 0){
    console.log("0")
}
else{
    console.log("미성년");
}
console.log("프로그램 종료");