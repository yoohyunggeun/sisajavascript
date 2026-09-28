/**
 * 유저에게 만들고 싶은 버튼 갯수 물어보고
 * 버튼 안의 내용은 안녕! 해주고
 * 버튼 갯수만큼 화면에 출력하기
 */
// const userBtn = +prompt("버튼 갯수?");
// Array(userBtn)
//     .fill(0)
//     .forEach((v)=> {
//         const btn = document.createElement('button');
//         btn.innerHTML="안녕!";
//         document.body.append(btn);
// });

/**
 * 유저에게 div 갯수를 입력 받고
 * div의 안의 내용은 hello로 하고
 * backgroundColor :  red, orange, yellow, green, blue, navy, indigo
 * 화면에 출력하기
 */
const user = +prompt("div 갯수??");
const color = ["red","orange","yellow","green","blue","navy","indigo"];
Array(user)
    .fill(0)
    .forEach((v,i)=> {
        const btn = document.createElement('div');
        btn.innerHTML="hello";
        btn.style.backgroundColor = color[i % 7];
        document.body.append(btn);
});