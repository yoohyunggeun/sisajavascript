/**
 * function : 마술상자(입력->출력)
 * 
 */
function add(a,b,c){
    return a+b+c;
}
const a = add(1,2,3);

/**
 * 1. x,y를 받고 x의 y제곱을 돌려주는 함수
 * 2. 메뉴이름과 가격을 받고 오브젝트로 돌려주는 함수
 * 3. x,y를 받고 더 큰 수를 돌려주는 함수
 * 4. r를 받고 원의 넓이와 둘레를 오브젝트로 돌려주는 함수
 */
function question1(x,y){
    return console.log(x**y);
}
function question2(menu, price){
    const a = {name:menu,one:price};
    return console.log(a);
}
function question3(x,y){
    const r = x>=y ? x:y;
    return console.log(r);
}
function question4(r){
    const a = r*r*3.14;
    const b = r*2*3.14;
    const answer = console.log(`원 넓이${a} 원 둘레${b}`);
    return answer;
}
question1(2,4);
question2("아아",2300);
question3(2,4);
question4(2);