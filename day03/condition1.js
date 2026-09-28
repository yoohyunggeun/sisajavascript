/**
 * 1. 유저에게 일본어 점수를 입력받고
 * 
 * 100점 만점 중에
 * 90점 이상이면 A
 * 80점 이상이면 B
 * 70점 이상이면 C
 * 60점 이상이면 D
 * 그 외는 스미마셍
 * 
 * 2. 놀이동산 입장료
 * 유저에게 나이를 물어보고 7세 미만이면 무료
 * 7세 미만이면 무료
 * 7세~12세이면 5000원
 * 13~19세 10000원
 * 그 외는 15000원
 */
const user = +window.prompt('일본어 점수');

if(user >= 90){
    console.log("A");
}else if(user >= 80){
    console.log("B");
}else if(user >= 70){
    console.log("C");
}else if(user >= 60){
    console.log("D");
}else{
    console.log("그 외는 스미마셍");
}
const user2 = +window.prompt('나이');
if(user2 < 7){
    console.log("무료");
}else if(user2 >= 7 && user2 <= 12){
    console.log("5000원");
}else if(user2 >= 13 && user2 <= 19){
    console.log("10000원");
}else{
    console.log("15000원");
}