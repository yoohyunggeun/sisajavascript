/**
 * 일반함수 [구문법]
 */
function question1(x,y){
    return console.log(x**y);
}
/**
 * 화살표함수 [신문법]
 * 데이터 타입
 * 기본:string,number,boolean,undefined
 * 참조:object,string,function
 */
const add = (x,y) => {
    return x+y;
}

/**
 * 1. a,b,c를 입력받고 배열로 돌려주기 [a,b,c]
 * 2. x,y를 받으면 합,차,곱,나누기, 제곱을 오브젝트로 돌려주기
 */
const q1 = (a,b,c)=>{
    return [a,b,c];
}
const q2 = (x,y) => {
    return {a:x+y,b:x-y,c:x*y,d:x/y,e:x**y};
}